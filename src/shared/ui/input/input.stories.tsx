import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./input";
import { fn } from "@storybook/test";

const meta = {
  title: "shared/ui/input",
  tags: ["autodocs"],
  component: Input,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel", "url", "search"],
      description: "Тип поля ввода",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
    placeholder: {
      control: "text",
      description: "Плейсхолдер",
    },
    value: {
      control: "text",
      description: "Значение поля",
    },
    defaultValue: {
      control: "text",
      description: "Значение по умолчанию",
    },
    required: {
      control: "boolean",
      description: "Обязательное поле",
    },
    "aria-invalid": {
      control: "boolean",
      description: "Состояние ошибки",
    },
  },
  args: {
    onChange: fn(),
    onFocus: fn(),
    onBlur: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Базовый инпут
export const Default: Story = {
  args: {
    placeholder: "Введите текст...",
  },
};

// С различными типами
export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
      <Input type="search" placeholder="Search input" />
      <Input type="tel" placeholder="Tel input" />
      <Input type="url" placeholder="URL input" />
    </div>
  ),
};

// С значениями
export const WithValue: Story = {
  args: {
    value: "Содержимое поля",
    placeholder: "Введите текст...",
  },
};

// Плейсхолдер
export const Placeholder: Story = {
  args: {
    placeholder: "Напишите что-нибудь...",
  },
};

// Отключенный
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Отключенное поле",
    value: "Недоступно для ввода",
  },
};

// Состояние ошибки
export const Invalid: Story = {
  args: {
    "aria-invalid": true,
    placeholder: "Поле с ошибкой",
    value: "Неверное значение",
  },
  parameters: {
    docs: {
      description: {
        story:
          'Используйте `aria-invalid="true"` для отображения состояния ошибки',
      },
    },
  },
};

// Обязательное поле
export const Required: Story = {
  args: {
    required: true,
    placeholder: "Обязательное поле",
  },
};

// Размеры
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex items-center gap-4">
        <span className="text-sm w-20">Default:</span>
        <Input placeholder="Обычный размер" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm w-20">Small:</span>
        <Input placeholder="Маленький размер" className="h-7 text-xs px-2" />
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm w-20">Large:</span>
        <Input placeholder="Большой размер" className="h-11 text-base px-3.5" />
      </div>
    </div>
  ),
};

// С кастомными стилями
export const CustomStyles: Story = {
  args: {
    className: "border-2 border-blue-500 bg-blue-50/50 dark:bg-blue-950/20",
    placeholder: "Кастомные стили",
  },
};

// Формы
export const FormExample: Story = {
  render: () => (
    <form
      className="flex flex-col gap-4 w-80"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="space-y-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" placeholder="example@email.com" />
      </div>
      <div className="space-y-1.5">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <Input id="password" type="password" placeholder="Введите пароль" />
      </div>
      <button
        type="submit"
        className="mt-2 h-9 rounded-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
      >
        Войти
      </button>
    </form>
  ),
};

// Группа инпутов
export const InputGroup: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div className="flex gap-2">
        <Input placeholder="Имя" className="flex-1" />
        <Input placeholder="Фамилия" className="flex-1" />
      </div>
      <Input placeholder="Email" type="email" />
      <div className="flex gap-2">
        <Input placeholder="Город" className="flex-1" />
        <Input placeholder="Индекс" className="w-32" />
      </div>
    </div>
  ),
};
