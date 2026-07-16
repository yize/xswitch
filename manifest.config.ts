import { defineManifest } from "@crxjs/vite-plugin";
import pkg from "./package.json";

// XSwitch Manifest V3 定义。CRXJS 会据此生成最终 manifest.json，
// 并把下面指向源码的 html/ts 入口改写成构建产物路径。
export default defineManifest({
  manifest_version: 3,
  name: "Xswitch",
  short_name: "xsc",
  description:
    "A tool for redirecting URLs and allowing CORS to make the local development experience easy and happy.",
  version: pkg.version,
  icons: {
    "48": "images/grey_128.png",
    "128": "images/grey_128.png",
  },
  action: {
    default_icon: "images/grey_128.png",
    default_title: "Xswitch",
    default_popup: "src/pages/popup/index.html",
  },
  options_page: "src/pages/options/index.html",
  background: {
    service_worker: "src/background.ts",
    type: "module",
  },
  permissions: [
    "storage",
    "browsingData",
    "webRequest",
    "declarativeNetRequest",
  ],
  host_permissions: ["<all_urls>"],
  commands: {
    _execute_action: {
      suggested_key: {
        windows: "Ctrl+Shift+X",
        mac: "Command+Shift+X",
        default: "Ctrl+Shift+X",
      },
    },
  },
});
