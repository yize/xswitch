<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="440" src="https://img.alicdn.com/tfs/TB1yll4lyqAXuNjy1XdXXaYcVXa-880-560.png">
  </a>
</p>

[English](./readme.en_US.md)

## XSwitch

[![Chrome version][badge-cws]][link-cws] [![Chrome version][badge-cws-count]][link-cws] [![Build Status][badge-travis]][link-travis] [![Coverage Status][badge-coverage]][link-coverage] [![license][badge-license]][link-xswitch]

一个用来做请求链接转发的 [Chrome 浏览器插件][link-cws]，因为采用的是浏览器原生 `API`，安全性和性能能得到保障。

[![XSwitch-intro](https://cdn.nlark.com/yuque/0/2018/png/137701/1536999137086-9377abf2-ac97-4ccf-ae71-de178bf7238a.png)](https://www.youtube.com/watch?v=--gQM3ysCzc)

[优酷视频介绍](https://v.youku.com/v_show/id_XMzgyNDgwODAwNA==.html)

## 功能

- [x] 请求地址转发
- [x] 全局插件启用开关
- [x] 可禁用浏览器缓存
- [x] 采用 [jsonc](https://komkom.github.io/) 以支持在转发规则中写注释
- [x] 可以使用 Monaco Editor（VSCode）中的部分快捷键，比如通过 `⌘K` `⌘F` 组合键可以实现格式化 JSON 的功能 
- [x] 自动补全
- [x] 支持 CORS，支持 withCredentials
- [x] 跨域和缓存禁用键（右键点击浏览器工具栏的 XSwitch 插件图标 - 设置）
- [x] 分组规则

## 用法

所有的规则，会按照定义的顺序从前往后执行，即使匹配到了规则，也会继续往下匹配，直到最后一条启用的规则。

**小提示：把 `HTTPS` 的链接转发到 `http://127.0.0.1` 下，浏览器不会出安全提示。习惯用 `localhost` 的同学，可以尝试下这个。**

```js
{
  // 转发规则
  "proxy": [
    [
      "//alinw.alicdn.com/platform/daily-test/isDaily.js", // 匹配 URL
      "//alinw.alicdn.com/platform/daily-test/isDaily.json" // 替换成这个 URL
    ],
    // 字符串替换，会全局匹配
    [
      "alinw",
      "g"
    ]
    // 把链接里所有的 .min 替换掉
    // [
    //   ".min",
    //   ""
    // ],
    // 正则
    // [
    //   "(.*)/platform/daily-test/(.*).js$",
    //   "http://127.0.0.1:3000/daily-test/$1.js"
    // ],
    // 直接转换成 inline 模式的 JavaScript
    // [
    //   "https://alinw.alicdn.com/platform/daily-test/isDaily.js",
    //   "data:text/javascript,window.__isDaily = true;"
    // ]
  ],
  // 希望开启 CORS 跨域的链接
  "cors": [
    "cors.a.com",
    "(.*).b.com"
  ]
}
```

## 通过 MCP 使用 AI 配置规则

XSwitch 内置本地 `stdio` MCP Server，并通过 Chrome Native Messaging 与扩展安全通信。规则和通信都保留在本机，普通网页不能调用规则读写接口。

首次使用不需要手动 checkout 仓库或执行终端命令：打开 XSwitch 设置页，复制“配置 Prompt”并发送给具备本地终端权限的 Codex、Claude Code 等 AI 客户端。Prompt 已包含当前扩展 ID，并要求 AI 自动完成本机桥接安装、客户端 MCP 配置和连通性验证。只有客户端必须重启才能加载新 MCP 时，AI 才会提示这一个动作。

MCP 默认开启，可在设置页随时断开。它提供以下工具：

- `get_xswitch_state`：读取开关、选项和全部规则分组
- `upsert_xswitch_rule_group`：增量新增或修改分组、转发规则和 CORS 匹配项
- `delete_xswitch_rule_group`：删除非默认分组
- `set_xswitch_enabled`：启用或停用全部 XSwitch 规则
- `set_xswitch_options`：修改清除缓存和 CORS 全局选项
- `list_xswitch_backups`：查看最近的本机回滚快照
- `restore_xswitch_backup`：恢复指定快照；省略备份 ID 时撤销最近一次 MCP 修改

所有 MCP 写操作都会先在扩展本地保存完整快照。写入或校验失败时会自动恢复；成功写入后保留最近 10 份历史。备份内容不会通过列表工具返回，也不会离开本机。

开发者仍可手动安装或卸载本机桥接：

```bash
npm install
npm run mcp:install-host -- --extension-id <扩展ID>
npm run mcp:install-host -- --uninstall
```

要求：macOS 或 Linux、Node.js 20+。Edge 或 Chromium 用户可额外传入 `--browser edge` 或 `--browser chromium`。

更多说明：[https://yuque.com/jiushen/blog/xswitch-readme](https://yuque.com/jiushen/blog/xswitch-readme)

- 访问 [https://alinw.alicdn.com/platform/daily-test/isDaily.js](https://alinw.alicdn.com/platform/daily-test/isDaily.js)
- 最终, 你的 URL 会被改写成 [https://<b>g.alicdn.com</b>/platform/daily-test/isDaily.<b>json</b>](https://g.alicdn.com/platform/daily-test/isDaily.json)

## License

[MIT](https://opensource.org/licenses/MIT) © [yize.shc](https://www.yuque.com/jiushen)

[link-xswitch]: https://github.com/yize/xswitch
[link-cws]: https://chrome.google.com/webstore/detail/xswitch/idkjhjggpffolpidfkikidcokdkdaogg
[link-me]: https://github.com/Microsoft/monaco-editor
[link-travis]: https://travis-ci.org/yize/xswitch
[link-coverage]: https://coveralls.io/github/yize/xswitch?branch=master
[badge-travis]: https://travis-ci.org/yize/xswitch.svg?branch=master
[badge-coverage]: https://coveralls.io/repos/github/yize/xswitch/badge.svg?branch=master
[badge-license]: https://img.shields.io/github/license/yize/xswitch.svg
[badge-cws]: https://img.shields.io/chrome-web-store/v/idkjhjggpffolpidfkikidcokdkdaogg.svg?label=chrome
[badge-cws-count]: https://img.shields.io/chrome-web-store/users/idkjhjggpffolpidfkikidcokdkdaogg.svg
