import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "./logo";

const meta: Meta<typeof Logo> = {
  title: "shared/ui/logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "default", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Logo size="sm" />
      <Logo size="default" />
      <Logo size="lg" />
    </div>
  ),
};

/** Цвета уголков и «Lib» переопределяются CSS-переменными. */
export const CustomColors: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Logo className="[--logo-corner-color:var(--color-destructive)] [--logo-accent-color:var(--color-destructive)]" />
      <Logo
        className="[--logo-corner-color:var(--color-muted-foreground)]"
        accentClassName="text-destructive"
      />
    </div>
  ),
};

/**
 * Уголки можно приглушить только в тёмной теме — переключите тему в тулбаре,
 * чтобы увидеть разницу между обычным логотипом и приглушённым.
 */
export const MutedCornersInDark: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      <Logo />
      <Logo className="dark:[--logo-corner-color:var(--color-muted-foreground)]" />
    </div>
  ),
};
