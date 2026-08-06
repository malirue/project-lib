# ProjectLib (React + TypeScript + Vite)

## Архитектура

> [!IMPORTANT]
> Раздел в разработке

Используемые ресурсы:

- https://habr.com/ru/companies/sportmaster_lab/articles/972410/
- https://habr.com/ru/companies/piter/articles/744824/
- https://habr.com/ru/companies/otus/articles/835810/

### Общая стуктура папок

```
src/
├── app/
├── entities/
├── features/
├── widgets/
├── pages/
├── shared/
│   ├── ui/
│   ├── lib/              # вспомогательные утилиты
│   └── mocks/            # моковые данные
└── tests
```

#### shared

> _"«общие примитивы» — кнопка, инпут"_

> [!IMPORTANT]
> shared не зависит ни от чего. Если компоненту нужна логика сущности — это уже не shared.

```
shared/    # инфраструктурные примитивы и утилиты
├── ui           # UI‑примитивы
├── lib          # чистые функции и утилиты (валидаторы, форматирование, хелперы)
└── mocks        #  моковые данные (для тестов и Storybook)
```

Архитектура компонента на примере

```
shared/ui/Button/
├── Button.tsx                # реализация, только пропсы и логика отображения
├── Button.module.scss        # стили (CSS Modules)
├── Button.stories.tsx        # Storybook
├── Button.test.tsx           # юнит‑тесты (Vitest)
└── index.ts                  # реэкспорт
```

#### entities

> _"«что это?» — пользователь, статья"_

Сущности

- Модели и логика конкретных бизнес‑объектов с идентичностью и смыслом
- Базовые UI: простые карточки и др.

```
entities/user/
├── model/                    # Domain: чистая логика, без UI и без HTTP
├── api/                      # Infrastructure: адаптеры к внешним источникам HTTP клиент
├── ui/                       # Presentation: отображение сущности
│   ├── UserAvatar/
│   │   ├── UserAvatar.tsx
│   │   ├── UserAvatar.module.scss
│   │   ├── UserAvatar.stories.tsx
│   │   ├── UserAvatar.test.tsx
│   │   └── index.ts
│   └── index.ts
├── index.ts
└── types.ts                  # публичные типы сущности
```

#### features

> _действие, приносящее бизнес‑ценность_

Слой отвечает на вопрос «что пользователь хочет сделать?». Это не просто UI, а законченный пользовательский сценарий с бизнес‑логикой: «поставить лайк», «подписаться».

> [!IMPORTANT]
> features может использовать entities и shared, но не должна знать про другие фичи и страницы.

```
features/offer-swap/
├── useOfferSwapButton.ts            # хуки
├── OfferSwapButton.tsx              # использует shared и/или entities
├── OfferSwapButton.module.scss
├── OfferSwapButton.stories.tsx
├── OfferSwapButton.test.tsx
└── index.ts                         # публичный API фичи
```

#### widgets

Композиционные блоки, собирающие сущности и фичи в смысловые куски. Это «кирпичики» страниц. Законченный, независимый функциональный блок

> [!IMPORTANT]
>
> - Виджет не должен содержать сложной доменной логики. Он отвечает за композицию и отображение.
> - Ошибки, загрузка, пустой список — это состояния, которые виджет просто отображает, а не «решает».

```
widgets/feed/
├── useFeed.ts    # хук для подготовки данных. Формально - модель
├── Feed.tsx          # собирает сам виджет. Формально - UI
├── Feed.module.scss
├── Feed.stories.tsx
└── index.ts
```

#### pages

Страницы как сборка из entities/features

```
pages/profile/
├── ProfilePage.tsx
├── ProfilePage.stories.tsx
└── index.ts
```

#### app

Точка входа и глобальная настройка
Это «обвязка» приложения: провайдеры, роутер, глобальные стили, инициализация.

Что обычно здесь:

- App.tsx — корневой компонент, подключает провайдеры (Redux, Router).
- store/ — стор.
- styles/ — глобальные стили (reset, переменные, шрифты).

Компонентов «по смыслу» тут почти нет — это инфраструктурный слой.

#### tests

Тесты
