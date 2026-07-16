import { defineConfig } from "vitest/config";
import { fileURLToPath, URL } from "node:url";

// 测试单独用 vitest 配置，避免 CRXJS 插件在测试期间运行。
export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "node",
    include: ["__tests__/**/*.spec.ts"],
  },
});
