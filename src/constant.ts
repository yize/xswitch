export const cleanJSONReg = /(,+)([^a-z0-9["])/gi;

export const DEFAULT_DATA = `{
  // Use IntelliSense to learn about possible links.
  // Type \`rule\` to quick insert rule.
  // 输入 rule 来快速插入规则
  // For more information, visit: https://github.com/yize/xswitch
  "proxy": [
    [
      ".production.min.js",
      // ".production(.min)?.js",
      ".development.js"
      // "react.development.js",
    ],
    [
      "16.4.1",
      "16.4.0",
    ]
    // then try visit https://unpkg.com/react@16.4.1/umd/react.production.min.js
  ],
  // urls that want CORS
  "cors": [
    "mocks.a.com",
    "mocks.b.com"
  ]
}
`;
