import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group";
import {
  Search,
  Mail,
  User,
  Eye,
  EyeOff,
  Calendar,
  DollarSign,
} from "lucide-react";
import { useState } from "react";

const meta: Meta<typeof InputGroup> = {
  title: "shared/ui/input-group",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Дополнительные CSS классы",
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Basic: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Имя пользователя" />
      </InputGroup>

      <InputGroup>
        <InputGroupInput placeholder="Электронная почта" />
        <InputGroupAddon align="inline-end">
          <InputGroupText>.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Search className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Поиск..." />
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Адрес электронной почты" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Отправить</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithButtons: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <InputGroup>
        <InputGroupInput placeholder="Введите сумму" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="outline">USD</InputGroupButton>
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <InputGroupButton>Оплатить</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="inline-start">
          <InputGroupButton variant="outline" size="xs">
            <User className="size-3.5" />
          </InputGroupButton>
        </InputGroupAddon>
        <InputGroupInput placeholder="Полное имя" />
        <InputGroupAddon align="inline-end">
          <InputGroupButton variant="ghost" size="icon-xs">
            <Eye className="size-3.5" />
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Сумма</label>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <InputGroupText>$</InputGroupText>
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" />
          <InputGroupAddon align="inline-end">
            <InputGroupText>USD</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Дата</label>
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <Calendar className="size-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="Выберите дату" />
        </InputGroup>
      </div>
    </div>
  ),
};

export const BlockLayout: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText className="text-xs font-medium">Сумма</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="0.00" />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-xs">Минимум: $10.00</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText className="text-xs font-medium">
            Описание
          </InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Введите описание..." />
        <InputGroupAddon align="block-end">
          <InputGroupText className="text-xs">Необязательно</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Textarea: Story = {
  render: () => (
    <div className="w-[400px] space-y-4">
      <InputGroup>
        <InputGroupAddon align="block-start">
          <InputGroupText>Сообщение</InputGroupText>
        </InputGroupAddon>
        <InputGroupTextarea
          placeholder="Введите ваше сообщение здесь..."
          rows={4}
        />
        <InputGroupAddon align="block-end">
          <InputGroupButton variant="outline" size="xs">
            Отправить
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <InputGroup data-disabled>
        <InputGroupAddon align="inline-start">
          <User className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Отключенное поле" disabled />
      </InputGroup>

      <InputGroup data-disabled>
        <InputGroupInput placeholder="Отключено с кнопкой" disabled />
        <InputGroupAddon align="inline-end">
          <InputGroupButton disabled>Отправить</InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const Invalid: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Mail className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Электронная почта" aria-invalid="true" />
      </InputGroup>

      <div className="space-y-1.5">
        <label className="text-sm font-medium text-destructive">Пароль</label>
        <InputGroup>
          <InputGroupInput placeholder="Введите пароль" aria-invalid="true" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton variant="ghost" size="icon-xs">
              <EyeOff className="size-3.5" />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <p className="text-sm text-destructive">
          Пароль должен содержать минимум 8 символов
        </p>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div className="w-[400px] space-y-6">
      <div className="space-y-1.5">
        <label className="text-sm font-medium">Поиск пользователей</label>
        <InputGroup className="border-blue-200 bg-blue-50/50 focus-within:border-blue-400 dark:bg-blue-950/20">
          <InputGroupAddon align="inline-start">
            <Search className="size-4 text-blue-500" />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Поиск..."
            className="placeholder:text-blue-300"
          />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              variant="default"
              size="xs"
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              Найти
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>

      <div className="space-y-1.5">
        <label className="text-sm font-medium">Цена</label>
        <InputGroup className="border-emerald-200 bg-emerald-50/50 dark:bg-emerald-950/20">
          <InputGroupAddon align="inline-start">
            <DollarSign className="size-4 text-emerald-500" />
          </InputGroupAddon>
          <InputGroupInput placeholder="0.00" className="text-emerald-700" />
          <InputGroupAddon align="inline-end">
            <InputGroupButton
              variant="outline"
              size="xs"
              className="border-emerald-200"
            >
              USD
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="w-[400px] space-y-6">
        <div className="space-y-1.5">
          <label className="text-sm font-medium">Пароль</label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <User className="size-4" />
            </InputGroupAddon>
            <InputGroupInput
              type={showPassword ? "text" : "password"}
              placeholder="Введите пароль"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                variant="ghost"
                size="icon-xs"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="size-3.5" />
                ) : (
                  <Eye className="size-3.5" />
                )}
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <p className="text-sm text-muted-foreground">
            Длина пароля: {value.length} символов
          </p>
        </div>

        <div className="space-y-1.5">
          <label className="text-sm font-medium">Поиск</label>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <Search className="size-4" />
            </InputGroupAddon>
            <InputGroupInput
              placeholder="Введите текст для поиска..."
              onChange={(e) => setValue(e.target.value)}
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                variant="default"
                size="xs"
                onClick={() => alert(`Поиск по запросу: ${value}`)}
              >
                Найти
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    );
  },
};

export const Responsive: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <p className="text-sm text-muted-foreground">
        Измените размер окна для проверки адаптивности
      </p>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <Search className="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Поиск..." />
        <InputGroupAddon align="inline-end" className="hidden sm:flex">
          <InputGroupButton variant="default" size="xs">
            Найти
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="max-sm:flex-col max-sm:h-auto">
        <InputGroupAddon align="block-start" className="sm:hidden">
          <InputGroupText className="text-xs font-medium">Метка</InputGroupText>
        </InputGroupAddon>
        <InputGroupAddon align="inline-start" className="max-sm:hidden">
          <InputGroupText>Метка</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder="Поле ввода" />
        <InputGroupAddon
          align="block-end"
          className="max-sm:border-t max-sm:pt-2"
        >
          <InputGroupButton variant="outline" size="xs">
            Действие
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
