import type { Meta, StoryObj } from "@storybook/react-vite";
import { UnderConstructionPage } from "./under-construction-page";

const meta: Meta<typeof UnderConstructionPage> = {
  title: "pages/under-construction",
  component: UnderConstructionPage,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UnderConstructionPage>;

export const Default: Story = {};
