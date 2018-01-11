window.DEFAULT_DATA = `{
  // proxyRules
  "proxy": [
    [
      "//g.alicdn.com/platform/daily-test/isDaily.js",
      "//alinw.alicdn.com/platform/daily-test/isDaily.js"
    ]
    // you can also use RegExp
    // [
    //   "//g.alicdn.com/platform/daily-test/(.*).js",
    //   "//localhost:3000/daily-test/$1.js"
    // ]
    // [
    //   "source",
    //   "target"
    // ]
    // you can add rules here
  ]
}
`;
