import * as monaco from "monaco-editor";
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
