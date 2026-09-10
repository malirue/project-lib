import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./button";
import { Heart, Search, Star } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "shared/ui/button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    variant: {
      control: "radio",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "destructive",
        "link",
      ],
    },
    size: {
      control: "radio",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
    },
    disabled: { control: "boolean" },
    "aria-invalid": { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: { children: "Кнопка", variant: "default", size: "default" },
};

export const WithIconStart: Story = {
  args: {
    variant: "default",
    size: "default",
    children: (
      <>
        <Search size={16} className="mr-2" />
        Найти
      </>
    ),
  },
};

export const WithIconEnd: Story = {
  args: {
    variant: "secondary",
    size: "sm",
    children: (
      <>
        В избранное
        <Heart size={16} className="ml-2" />
      </>
    ),
  },
};

// Для кнопки-иконки лучше не использовать img/svg, а взять иконку Lucide
export const IconOnly: Story = {
  args: {
    variant: "ghost",
    size: "icon-sm",
    children: <Star size={20} />,
    "aria-label": "Избранное",
  },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline", size: "default" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary", size: "default" },
};

export const Ghost: Story = {
  args: { children: "Ghost", variant: "ghost", size: "default" },
};

export const Destructive: Story = {
  args: {
    children: "Удалить",
    variant: "destructive",
    size: "default",
  },
};

export const Link: Story = {
  args: { children: "Ссылка-кнопка", variant: "link", size: "default" },
};

export const Small: Story = {
  args: { children: "Sm", variant: "default", size: "sm" },
};

export const Large: Story = {
  args: { children: "Большая", variant: "default", size: "lg" },
};

export const Disabled: Story = {
  args: { children: "Неактивна", disabled: true, variant: "default" },
};

export const Invalid: Story = {
  args: { children: "Ошибка", "aria-invalid": true, variant: "default" },
};
