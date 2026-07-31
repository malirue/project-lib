import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    // setupFiles: "./src/test/setupTests.ts", файл, который Vitest запустит перед каждым тестом
    exclude: ["e2e/**"],
    coverage: {
      reporter: ["text", "html"],
      exclude: ["src/test/**"],
    },
  },
});
