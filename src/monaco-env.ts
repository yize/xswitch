// 只引入 Monaco 内核 editor.api + JSON 语言贡献，而不是全量 barrel，
// 从而剔除 60+ 种语言 tokenizer 与 ts/css/html 语言服务，大幅减小体积。
// XSwitch 只用到 JSON 编辑，所需仅内核编辑器 + JSON 校验/补全/格式化。
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
// 注意：瘦身的 ESM 构建不会把 jsonDefaults 挂到 monaco.languages.json，
// 必须直接从 contribution 模块拿它的具名导出来配置。
import * as jsonContribution from "monaco-editor/esm/vs/language/json/monaco.contribution";
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";

// 通过 Vite 的 ?worker 导入为 Monaco 提供 Web Worker。
// 扩展页面同源加载 worker，符合 MV3 的 script-src 'self' 策略。
// 若 worker 实例化失败，Monaco 会自动退回主线程运行，编辑仍可用。
self.MonacoEnvironment = {
  getWorker(_workerId: string, label: string) {
    if (label === "json") {
      return new jsonWorker();
    }
    return new editorWorker();
  },
};

// XSwitch 的配置是 JSONC（带注释 + 尾逗号），需放开 JSON 语言服务的
// 严格校验，否则注释和尾逗号会被标成语法错误。仍保留基本 JSON 校验。
const jsonDefaults = (
  jsonContribution as unknown as {
    jsonDefaults?: {
      setDiagnosticsOptions: (options: Record<string, unknown>) => void;
    };
  }
).jsonDefaults;

jsonDefaults?.setDiagnosticsOptions({
  validate: true,
  allowComments: true,
  trailingCommas: "ignore",
  schemaValidation: "ignore",
});

// 自定义明/暗主题，把编辑器背景对齐应用底色（暗色 #141414 与 antd darkAlgorithm
// 的容器底色一致），避免编辑区与周围面板之间出现色差缝。
monaco.editor.defineTheme("xswitch-light", {
  base: "vs",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#ffffff",
  },
});

monaco.editor.defineTheme("xswitch-dark", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#141414",
    "editorGutter.background": "#141414",
    "minimap.background": "#141414",
  },
});

export default monaco;


