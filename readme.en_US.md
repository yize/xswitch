<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="440" src="https://img.alicdn.com/tfs/TB1yll4lyqAXuNjy1XdXXaYcVXa-880-560.png">
  </a>
</p>

[中文版](./readme.md)

## XSwitch

[![Chrome version][badge-cws]][link-cws] [![Chrome version][badge-cws-count]][link-cws] [![Build Status][badge-travis]][link-travis] [![Coverage Status][badge-coverage]][link-coverage] [![license][badge-license]][link-xswitch]

A [Chrome Extension][link-cws] for redirecting/forwarding request urls.

<a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
  <img src="https://img.alicdn.com/tfs/TB1SNbynC_I8KJjy0FoXXaFnVXa-1672-1018.png">
</a>

## Features

- [x] Redirect `request.url`
- [x] Global switch control
- [x] Disable browser cache
- [x] JSON comments
- [x] Rule suggestions
- [x] CORS
- [x] CORS & browser cache control
- [x] Rules Grouping

## Usage

更多说明：[https://yuque.com/jiushen/blog/xswitch-readme](https://yuque.com/jiushen/blog/xswitch-readme)

Rules will be executed in order before all requests are initiated.

```js
{
  // proxyRules
  "proxy": [
    [
      "//alinw.alicdn.com/platform/daily-test/isDaily.js",
      "//alinw.alicdn.com/platform/daily-test/isDaily.json"
    ],
    // string replace, global mode
    [
      "alinw",
      "g"
    ]
    // replace all x.min to x
    [
      ".min",
      ""
    ],
    // use reg
    [
      "(.*)/platform/daily-test/(.*).js$",
      "http://127.0.0.1:3000/daily-test/$1.js"
    ],
    // replace to inline JavaScript
    [
      "https://alinw.alicdn.com/platform/daily-test/isDaily.js",
      "data:text/javascript,window.__isDaily = true;"
    ]
  ],
  // urls that want CORS
  "cors": [
    "cors.a.com",
    "(.*).b.com"
  ]
}
```

## Configure rules with AI through MCP

XSwitch includes a local `stdio` MCP server and communicates securely with the extension through Chrome Native Messaging. Rules and messages stay on the local machine, and regular web pages cannot access the rule-management API.

First-time setup does not require a manual source checkout or terminal commands. Open XSwitch settings, copy the setup prompt, and send it to an AI client with local terminal access, such as Codex or Claude Code. The prompt includes the current extension ID and instructs the AI to install the native bridge, configure its own MCP client, and verify the connection. The AI only asks for one final action when the client must restart to load the new MCP server.

MCP is enabled by default and can be disconnected from the settings page at any time. The server exposes these tools:

- `get_xswitch_state` reads the extension state, options, and every rule group.
- `upsert_xswitch_rule_group` creates or partially updates a group, proxy rules, and CORS patterns.
- `delete_xswitch_rule_group` deletes a non-default group.
- `set_xswitch_enabled` enables or disables all XSwitch rules.
- `set_xswitch_options` updates the global cache-clearing and CORS options.
- `list_xswitch_backups` lists recent local rollback snapshots.
- `restore_xswitch_backup` restores a snapshot, or undoes the latest MCP change when no backup ID is provided.

Every MCP write saves a complete snapshot in the extension before changing data. Failed writes or validation are rolled back automatically, while the 10 most recent successful snapshots are retained. Backup contents are never returned by the listing tool or sent off the local machine.

Developers can still install or remove the native bridge manually:

```bash
npm install
npm run mcp:install-host -- --extension-id <extension-id>
npm run mcp:install-host -- --uninstall
```

Requirements: macOS or Linux and Node.js 20+. Pass `--browser edge` or `--browser chromium` when applicable.

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
