import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "./header";

const meta: Meta<typeof Header> = {
  title: "widgets/header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

/** Только логотип — для страниц, с которых ещё некуда вести. */
export const WithoutNavigation: Story = {
  args: {
    showNavigation: false,
  },
};
