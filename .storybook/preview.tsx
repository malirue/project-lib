///<reference types="vite/client" />
import "../src/index.css";
import type { Preview } from "@storybook/react-vite";
import type { ReactRenderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  decorators: [
    // Переключатель тем в тулбаре: вешает класс `dark` на <html>,
    // как это будет делать провайдер темы в приложении.
    withThemeByClassName<ReactRenderer>({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
      parentSelector: "html",
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
