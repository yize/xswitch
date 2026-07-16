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

// Monaco 深路径 editor.api / json.contribution 的类型通过 tsconfig paths
// 指向各自的 .d.ts；json 贡献的 .d.ts 为 export {}，代码里用类型断言取 jsonDefaults。

declare global {
  interface Window {
    MonacoEnvironment?: import("monaco-editor").Environment;
  }
}

export {};
