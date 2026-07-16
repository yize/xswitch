// 只引入 Monaco 内核 editor.api + JSON 语言贡献，而不是全量 barrel，
// 从而剔除 60+ 种语言 tokenizer 与 ts/css/html 语言服务，大幅减小体积。
// XSwitch 只用到 JSON 编辑，所需仅内核编辑器 + JSON 校验/补全/格式化。
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "monaco-editor/esm/vs/language/json/monaco.contribution";
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

export default monaco;
