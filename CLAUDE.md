# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Язык

Кодовая база, README и коммиты — на русском. Тексты в UI, сообщения коммитов и комментарии пишем по-русски.

## Команды

Пакетный менеджер — **yarn** (есть `yarn.lock`).

```bash
yarn dev                 # Vite dev-сервер
yarn build               # tsc -b (проверка типов) + vite build
yarn lint                # ESLint по всему репозиторию
yarn storybook           # Storybook на :6006
yarn test                # Vitest в watch-режиме (оба проекта)
yarn test:coverage       # vitest run --coverage
yarn test:ui             # Vitest UI
```

Точечный запуск тестов:

```bash
yarn vitest run src/shared/ui/button/button.test.tsx   # один файл
yarn vitest run -t "имя теста"                          # по имени
yarn vitest run --project=storybook                     # только stories-as-tests
```

Проект `storybook` в Vitest гоняет каждую story в реальном headless-Chromium через Playwright,
поэтому перед первым запуском нужен `npx playwright install chromium`. Обычные unit-тесты живут
в проекте по умолчанию (`globals: true`, jsdom не настроен — DOM-тесты пока идут только через
storybook-проект).

Pre-commit (husky) запускает `lint-staged`: `eslint --fix` + `prettier --write` для ts/tsx/js/jsx
и `prettier --write` для стилей.

## Архитектура

Feature-Sliced-подобная раскладка: `app → pages → widgets → features → entities → shared`.
Зависимости идут только сверху вниз. Подробное описание целевой структуры и назначения каждого
слоя — в `README.md`; **README описывает целевое состояние, а не текущее**: сейчас существуют
только `app`, `entities`, `shared`, `widgets`, тестов нет, и вместо `*.module.scss` из README
реально используются утилитарные классы Tailwind.

Публичный API слоя — баррел-файл:

- `src/shared/ui/index.ts` — Button, Input, Textarea, NavigationMenu\*
- `src/entities/index.ts` — Avatar\*, InputGroup\*

Импортировать компоненты нужно через баррел (`import { Button } from "@/shared/ui"`), а не по
внутреннему пути. Внутри слоя допустимы относительные импорты (`../../lib/cn`).

Именование файлов неоднородно: в `shared/ui` и `entities/ui` — kebab-case (`navigation-menu.tsx`),
в `widgets` — PascalCase (`Header.tsx`). Следуйте соглашению того слоя, куда добавляете код.

## UI-стек

- **shadcn/ui, стиль `base-nova`**, поверх **`@base-ui/react`** (не Radix!). Примитивы импортируются
  как `import { Button as ButtonPrimitive } from "@base-ui/react/button"`.
- Варианты компонента задаются через `cva` (class-variance-authority), классы склеиваются
  `cn()` из `@/shared/lib/cn` (clsx + tailwind-merge). У корневого элемента ставится `data-slot`.
- **Tailwind v4** через плагин `@tailwindcss/vite`. Конфиг-файла `tailwind.config` нет —
  тема, CSS-переменные и `@custom-variant dark` объявлены прямо в `src/index.css`.
- Иконки — `lucide-react`.

Добавление компонента из shadcn: `npx shadcn@latest add <name>`. По `components.json` алиасы
`components: @/shared` и `utils: @/shared/lib`, то есть файл упадёт в `src/shared/ui/` — после
этого его нужно вручную дописать в баррел.

## Алиасы путей

Задаются в двух местах и должны совпадать: `tsconfig.app.json` (`paths`, для типов) и
`vite.config.ts` (`resolve.alias`, для сборки и Storybook). В Vite прописан общий префикс `@` →
`./src`, поэтому новые слои (`@/features/...`, `@/pages/...`) резолвятся без правки vite-конфига,
но путь всё равно надо добавить в `tsconfig.app.json`.

## Storybook

Stories лежат рядом с компонентом (`button.stories.tsx`). `title` повторяет слой:
`"shared/ui/Button"`, `"widgets/header"`. Глобальные стили подключаются в `.storybook/preview.tsx`
импортом `../src/index.css`. Подключены аддоны a11y (режим `test: "todo"` — нарушения только
показываются, CI не падает), docs, vitest и mcp.

## TypeScript

`tsconfig.app.json` строгий по неиспользуемому коду: `noUnusedLocals` и `noUnusedParameters`
включены, `verbatimModuleSyntax: true` — импорты типов пишем как `import type { ... }`.
`yarn build` падает на любой из этих ошибок.
