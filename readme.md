<p align="center">
  <a href="https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg">
    <img width="440" src="https://img.alicdn.com/tfs/TB1yll4lyqAXuNjy1XdXXaYcVXa-880-560.png">
  </a>
</p>

[English](./readme.en_US.md)

## XSwitch

[![Chrome version][badge-cws]][link-cws] [![Chrome version][badge-cws-count]][link-cws] [![Build Status][badge-travis]][link-travis] [![Coverage Status][badge-coverage]][link-coverage] [![license][badge-license]][link-xswitch]

一个用来做请求链接转发的 [Chrome 浏览器插件][link-cws]，因为采用的是浏览器原生 API，安全性和性能能得到保障。

[![XSwitch-intro](https://cdn.nlark.com/yuque/0/2018/png/137701/1536999137086-9377abf2-ac97-4ccf-ae71-de178bf7238a.png)](https://www.youtube.com/watch?v=--gQM3ysCzc)

## 功能

- [x] 请求地址转发
- [x] 全局插件启用开关
- [x] 可禁用浏览器缓存
- [x] 可在 JSON 中写注释
- [x] 自动补全
- [x] 支持 CORS，支持 withCredentials
- [x] 跨域和缓存禁用键
- [ ] 分组规则

## 用法

所有的规则，会按照定义的顺序从前往后执行，即使匹配到了规则，也会继续往下匹配。

小提示：把 `HTTPS` 的链接转发到 `http://127.0.0.1` 下，浏览器不会出安全提示。如果之前习惯用 `localhost` 的同学，可以尝试下。

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

更多说明：[https://yuque.com/jiushen/blog/xswitch-readme](https://yuque.com/jiushen/blog/xswitch-readme)

- 访问 [https://alinw.alicdn.com/platform/daily-test/isDaily.js](https://alinw.alicdn.com/platform/daily-test/isDaily.js)
- 最终, 你的 URL 会被改写成 [https://<b>g.alicdn.com</b>/platform/daily-test/isDaily.<b>json</b>](https://g.alicdn.com/platform/daily-test/isDaily.json)

## License

[MIT](https://opensource.org/licenses/MIT) © [yize.shc](https://ithans.com)

[link-xswitch]: https://github.com/yize/xswitch
[link-cws]: https://chrome.google.com/webstore/detail/idkjhjggpffolpidfkikidcokdkdaogg
[link-me]: https://github.com/Microsoft/monaco-editor
[link-travis]: https://travis-ci.org/yize/xswitch
[link-coverage]: https://coveralls.io/github/yize/xswitch?branch=master
[badge-travis]: https://travis-ci.org/yize/xswitch.svg?branch=master
[badge-coverage]: https://coveralls.io/repos/github/yize/xswitch/badge.svg?branch=master
[badge-license]: https://img.shields.io/github/license/yize/xswitch.svg
[badge-cws]: https://img.shields.io/chrome-web-store/v/idkjhjggpffolpidfkikidcokdkdaogg.svg?label=chrome
[badge-cws-count]: https://img.shields.io/chrome-web-store/users/idkjhjggpffolpidfkikidcokdkdaogg.svg
