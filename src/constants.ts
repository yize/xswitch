export const REG = {
  TRIM_JSON: /(,+)([^a-z0-9["])/gi,
  CHROME_EXTENSION: /^chrome-extension:\/\//i,
  // support [ ] ( ) \ * ^ $
  FORWARD: /\\|\[|]|\(|\)|\*|\$|\^/i,
  WHITESPACE: /\s+/g,
  X_HEADER: /^x-/
};

export const ALL_URLS = '<all_urls>';
export const BLOCKING = 'blocking';
export const REQUEST_HEADERS = 'requestHeaders';
export const RESPONSE_HEADERS = 'responseHeaders';
export const DEFAULT_CREDENTIALS_RESPONSE_HEADERS = 'Content-Type, access-control-allow-headers, Authorization, X-Requested-With, X-Referer';
export const CORS = {
  METHODS: 'access-control-allow-methods',
  CREDENTIALS: 'access-control-allow-credentials',
  ORIGIN: 'access-control-allow-origin',
  HEADERS: 'access-control-allow-headers'
};
export const ACCESS_CONTROL_REQUEST_HEADERS = 'access-control-request-headers';
export const DEFAULT_CORS_ORIGIN = '*';
export const DEFAULT_CORS_METHODS = '*';
export const DEFAULT_CORS_CREDENTIALS = 'true';
export const ORIGIN = 'origin';
/**
 * Disabled storage key
 */
export const DISABLED_STORAGE_KEY = 'disabled';
/**
 * pure JSON storage key
 */
export const JSONC_STORAGE_KEY = 'config_for_shown';
/**
 * JSON with comments storage key
 */
export const JSON_STORAGE_KEY = 'config';
export const CLEAR_CACHE_ENABLED_STORAGE_KEY = 'clearCacheEnabled';
export const CORS_STORAGE_KEY = 'cors';
export const CORS_ENABLED_STORAGE_KEY = 'corsEnabled';
export const PROXY_STORAGE_KEY = 'proxy';
export const MILLISECONDS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;
export const RULE = 'rule';
export const LANGUAGE_JSON = 'json';
export const CHANGE = 'change';
export const DOM_CONTENT_LOADED = 'DOMContentLoaded';
export const SWITCH_DOM_ID = 'J_Switch';
export const SWITCH_INNER_DOM_ID = 'J_SwitchInner';
export const SWITCH_AREA_DOM_ID = 'J_SwitchArea';
export const NEW_TAB_DOM_ID = 'J_OpenInNewTab';
export const OPEN_README_DOM_ID = 'J_OpenReadme';
export const CONTAINER_DOM_ID = 'J_Container';
export const STATUS_DOM_ID = 'J_Status';
export const CLEAR_CACHE_ENABLED_DOM_ID = 'J_ClearCacheEnabled';
export const CORS_ENABLED_DOM_ID = 'J_CorsEnabled';
export const SWITCH_CHECKED_CLASSNAME = 'ant-switch-checked';
export const POPUP_HTML_PATH = 'XSwitch.html';
export const PREFIX = process.env.NODE_ENV !== 'production' ? '/build/' : './';
export const MONACO_VS_PATH = process.env.NODE_ENV !== 'production'
  ? '/build/lib/monaco-editor/min/vs'
  : './lib/monaco-editor/min/vs';
export const MONACO_CONTRIBUTION_PATH = 'vs/language/json/monaco.contribution';
export const HELP_URL = 'https://yuque.com/jiushen/blog/xswitch-readme';
export const DEFAULT_FONT_FAMILY = 'source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace';
export const PLATFORM_MAC = 'Mac';
export const OPTIONS_SAVED = 'Options saved.';
export const EMPTY_STRING = '';
export const KEY_DOWN = 'keydown';
export const CLICK = 'click';
export const ANYTHING = 'anyString';
export const FORMAT_DOCUMENT_CMD = 'editor.action.formatDocument';
export const KEY_CODE_S = 83;
export const SHOW_FOLDING_CONTROLS = 'always';
export const OPACITY_VISIBLE = '1';
export const NULL_STRING = 'null';
export const RULE_COMPLETION = `[
  "\${1:from}",
  "\${1:to}",
],`;

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
