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

Строгий Feature-Sliced Design: `app → pages → widgets → features → entities → shared`.
Зависимости идут только сверху вниз, слайсы одного слоя друг друга не импортируют. Назначение
слоёв и **все конвенции проекта (именование, импорты, ветки, коммиты) — в разделе «Конвенции»
`README.md`**; при расхождении прав README. Сейчас существуют слои `app`, `shared`, `widgets`;
`entities`, `features`, `pages` появятся с первым слайсом. Тестов пока нет.

Ключевые правила:

- **kebab-case для всех файлов и папок**: `widgets/header/header.tsx`, `use-feed.ts`. Stories и
  тесты — `<имя>.stories.tsx` / `<имя>.test.tsx`. Компоненты — именованный `export function` в
  PascalCase, без `default`.
- **У каждого компонента и слайса есть `index.ts`** — его публичный API. Снаружи импортируем
  только через него: `import { Button } from "@/shared/ui"`, `import { Header } from "@/widgets/header"`.
- Баррел `src/shared/ui/index.ts` реэкспортирует из папок компонентов (`./button`): Button, Input,
  Textarea, Logo, NavigationMenu\*, Avatar\*, InputGroup\*.
- Внутри слайса импорты относительные. Компоненты `shared/ui` импортируют друг друга и `cn`
  относительно (`../button`, `../../lib/cn`), **не через `@/shared/ui`** — иначе цикл через баррел.
- В `entities` — только доменные сущности (`user`, `article`); UI-примитивы без бизнес-смысла
  живут в `shared/ui`.
- Переименование со сменой только регистра — через `git mv` (при сбое в два шага через временное
  имя), иначе на Windows git его не увидит.

## UI-стек

- **shadcn/ui, стиль `base-nova`**, поверх **`@base-ui/react`** (не Radix!). Примитивы импортируются
  как `import { Button as ButtonPrimitive } from "@base-ui/react/button"`.
- Варианты компонента задаются через `cva` (class-variance-authority), классы склеиваются
  `cn()` из `@/shared/lib/cn` (clsx + tailwind-merge). У корневого элемента ставится `data-slot`.
- **Tailwind v4** через плагин `@tailwindcss/vite`. Конфиг-файла `tailwind.config` нет —
  тема, CSS-переменные и `@custom-variant dark` объявлены прямо в `src/index.css`.
- Иконки — `lucide-react`.

Добавление компонента из shadcn: `npx shadcn@latest add <name>`. По `components.json` алиасы
`components: @/shared` и `utils: @/shared/lib`, то есть файл упадёт в `src/shared/ui/<name>.tsx` —
после этого его нужно перенести в папку `src/shared/ui/<name>/`, создать рядом `index.ts`, дописать
реэкспорт в баррел и заменить импорты `@/shared/...` внутри файла на относительные.

## Алиасы путей

Задаются в двух местах и должны совпадать: `tsconfig.app.json` (`paths`, для типов) и
`vite.config.ts` (`resolve.alias`, для сборки и Storybook). В Vite прописан общий префикс `@` →
`./src`, поэтому новые слои (`@/features/...`, `@/pages/...`) резолвятся без правки vite-конфига,
но путь всё равно надо добавить в `tsconfig.app.json`.

## Storybook

Stories лежат рядом с компонентом (`button.stories.tsx`). `title` повторяет путь к компоненту в
нижнем регистре: `"shared/ui/button"`, `"widgets/header"`. Глобальные стили подключаются в `.storybook/preview.tsx`
импортом `../src/index.css`. Подключены аддоны a11y (режим `test: "todo"` — нарушения только
показываются, CI не падает), docs, vitest и mcp.

## TypeScript

`tsconfig.app.json` строгий по неиспользуемому коду: `noUnusedLocals` и `noUnusedParameters`
включены, `verbatimModuleSyntax: true` — импорты типов пишем как `import type { ... }`.
`yarn build` падает на любой из этих ошибок.

## Git

- **GitHub Flow**: короткая ветка от `main` → PR в `main`. Имя ветки `<type>/<kebab-описание>`
  латиницей: `feat/add-header`, `fix/logo-hover`.
- **Conventional Commits**: `<type>(<scope>): <описание>`. Описание по-русски, со строчной буквы,
  без точки, в безличной форме прошедшего времени: `feat(logo): добавлена анимация уголков`.
  `scope` (слайс или компонент) необязателен. Установка пакетов — `build`, конфиги — `chore`,
  а не `feat`. Автоматической проверки (commitlint) нет — формат соблюдаем вручную.
