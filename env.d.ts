/// <reference types="vite/client" />
/// <reference types="chrome" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

// Vite ?worker 导入
declare module "*?worker" {
  const workerConstructor: {
    new (options?: { name?: string }): Worker;
  };
  export default workerConstructor;
}

// Monaco 深路径 editor.api 的类型通过 tsconfig paths 指向 editor.api.d.ts。
// JSON 语言贡献仅作副作用导入，无需类型。
declare module "monaco-editor/esm/vs/language/json/monaco.contribution";

declare global {
  interface Window {
    MonacoEnvironment?: import("monaco-editor").Environment;
  }
}

export {};
