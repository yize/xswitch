# XSwitch Manifest V3 升级指南

## 🚨 问题

Chrome从版本88开始不再支持Manifest V2，所有使用V2的插件已被下架或无法安装。

## 📋 主要变化

### 1. Manifest.json 变更

```json
// V2 → V3
{
  "manifest_version": 2 → 3,
  
  "browser_action": {
    // → "action": {
    "default_icon": {...},
    "default_popup": "XSwitch.html"
  },
  
  "background": {
    "scripts": ["background.min.js"]
    // → "service_worker": "background.min.js"
  },
  
  "permissions": [
    "webRequest",
    "webRequestBlocking"
    // → "declarativeNetRequest",
    // → "declarativeNetRequestFeedback"
  ],
  
  // 新增
  "host_permissions": [
    "<all_urls>"
  ]
}
```

### 2. webRequest → declarativeNetRequest

**V2 (阻塞式):**
```javascript
chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    return { redirectUrl: newUrl };
  },
  { urls: ['<all_urls>'] },
  ['blocking']
);
```

**V3 (声明式):**
```javascript
// 1. 先定义规则
const rules = [{
  id: 1,
  priority: 1,
  condition: {
    urlFilter: 'example.com',
    resourceTypes: ['main_frame'],
  },
  action: {
    type: 'redirect',
    redirect: { url: 'new-url.com' },
  },
}];

// 2. 添加规则
chrome.declarativeNetRequest.updateDynamicRules({
  addRules: rules,
  removeRuleIds: [1],
});

// 3. 监听事件
chrome.declarativeNetRequest.onBeforeRequest.addListener(
  (details) => {
    return { cancel: false };
  },
  { urls: ['<all_urls>'] }
);
```

### 3. 响应头修改

**V2:**
```javascript
chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    details.responseHeaders.push({
      name: 'Access-Control-Allow-Origin',
      value: '*'
    });
    return { responseHeaders: details.responseHeaders };
  },
  { urls: ['<all_urls>'] },
  ['blocking', 'responseHeaders']
);
```

**V3:**
```javascript
// V3中使用 modifyHeaders
chrome.declarativeNetRequest.onHeadersReceived.addListener(
  (details) => {
    return {
      responseHeaders: [
        ...details.responseHeaders,
        { name: 'Access-Control-Allow-Origin', value: '*' }
      ]
    };
  },
  { urls: ['<all_urls>'] },
  ['blocking', 'responseHeaders']
);
```

### 4. Service Worker

V3中background脚本是Service Worker，不能持久化运行。

```javascript
// V2: 脚本一直运行
let globalState = {};

// V3: Service Worker可能在不活动时被终止
// 需要使用chrome.storage持久化状态
chrome.storage.local.set({ globalState });
```

### 5. API 变化

| V2 API | V3 等效 |
|---------|---------|
| `chrome.webRequest` | `chrome.declarativeNetRequest` |
| `chrome.browserAction` | `chrome.action` |
| `chrome.runtime.lastError` | `chrome.runtime.lastError` (仍然支持) |
| `window.matchMedia` | 在service worker中不可用 |

## 🔧 迁移步骤

### 步骤1: 更新 manifest.json
- 升级 `manifest_version` 到 3
- 将 `browser_action` 改为 `action`
- 将 `background.scripts` 改为 `background.service_worker`
- 将 `webRequest` 相关权限移到单独的 `host_permissions`
- 添加 `declarativeNetRequest` 权限

### 步骤2: 重写 background.ts
- 将所有 `chrome.webRequest` 调用改为 `chrome.declarativeNetRequest`
- 将动态拦截改为声明式规则
- 移除持久化状态，改用chrome.storage
- 将 `chrome.browserAction` 改为 `chrome.action`

### 步骤3: 更新构建配置
- 确保生成service worker而非persistent script
- 更新webpack配置

### 步骤4: 测试
- 测试URL转发规则
- 测试CORS跨域
- 测试缓存禁用
- 测试图标和角标

## ⚠️ 已知限制

1. **正则表达式限制**: declarativeNetRequest只支持有限的正则表达式
2. **动态修改请求**: V3中不能像V2那样动态修改每个请求
3. **状态持久化**: Service Worker可能被终止，需要依赖chrome.storage
4. **matchMedia**: Service Worker中不可用，需要其他方式检测主题

## 📦 构建命令

```bash
# V3 构建
npm run build:v3

# 发布
npm run pub:v3
```

## 🔗 参考文档

- [Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Migrating to Manifest V3](https://developer.chrome.com/docs/extensions/mv3/migration/)
- [Declarative Net Request](https://developer.chrome.com/docs/extensions/reference/declarativeNetRequest/)
