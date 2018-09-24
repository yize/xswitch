/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 166);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UrlType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Enabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return IconBackgroundColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BadgeText; });
var UrlType;

(function (UrlType) {
  UrlType["REG"] = "reg";
  UrlType["STRING"] = "string";
})(UrlType || (UrlType = {}));

var Enabled;

(function (Enabled) {
  Enabled["YES"] = "enabled";
  Enabled["NO"] = "disabled";
})(Enabled || (Enabled = {}));

var IconBackgroundColor;

(function (IconBackgroundColor) {
  IconBackgroundColor["ON"] = "#1890ff";
  IconBackgroundColor["OFF"] = "#bfbfbf";
  IconBackgroundColor["ERROR"] = "#f5222d";
})(IconBackgroundColor || (IconBackgroundColor = {}));

var BadgeText;

(function (BadgeText) {
  BadgeText["ERROR"] = "Error";
  BadgeText["OFF"] = "OFF";
  BadgeText["ON"] = "ON";
})(BadgeText || (BadgeText = {}));

/***/ }),

/***/ 13:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _forward__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(31);




var _, _2, _chrome$storage$sync$, _chrome$storage$sync$2;




var clearRunning = false;
var clearCacheEnabled = true;
var corsEnabled = true;
var parseError = false;
var jsonActiveKeys = ['0'];
var conf = {
  0: (_ = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_, _constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"], []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"], []), _)
};
chrome.storage.sync.get((_chrome$storage$sync$ = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_chrome$storage$sync$, _constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"], {
  0: (_2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_2, _constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"], []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_2, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"], []), _2)
}), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_chrome$storage$sync$, _constants__WEBPACK_IMPORTED_MODULE_3__[/* ACTIVE_KEYS */ "b"], ['0']), _chrome$storage$sync$), function (result) {
  jsonActiveKeys = result[_constants__WEBPACK_IMPORTED_MODULE_3__[/* ACTIVE_KEYS */ "b"]];

  if (result && result[_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]]) {
    conf = result[_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]];
    var config = getActiveConfig(conf);
    _forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, config);
  } else {
    var _forward$JSON_CONFIG;

    _forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]] = (_forward$JSON_CONFIG = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_forward$JSON_CONFIG, _constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"], []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_forward$JSON_CONFIG, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"], []), _forward$JSON_CONFIG);
    parseError = false;
  }
});

function getActiveConfig(config) {
  var activeKeys = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(jsonActiveKeys);

  var json = config['0'];
  activeKeys.forEach(function (key) {
    if (config[key] && key !== '0') {
      if (config[key][_constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"]]) {
        if (!json[_constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"]]) {
          json[_constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"]] = [];
        }

        json[_constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"]] = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(json[_constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"]]).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(config[key][_constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"]]));
      }

      if (config[key][_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"]]) {
        if (!json[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"]]) {
          json[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"]] = [];
        }

        json[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"]] = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(json[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"]]).concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(config[key][_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"]]));
      }
    }
  });
  return json;
}

chrome.storage.sync.get((_chrome$storage$sync$2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_chrome$storage$sync$2, _constants__WEBPACK_IMPORTED_MODULE_3__[/* DISABLED */ "q"], _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].YES), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_chrome$storage$sync$2, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CLEAR_CACHE_ENABLED */ "f"], _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].YES), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_chrome$storage$sync$2, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_ENABLED_STORAGE_KEY */ "h"], _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].YES), _chrome$storage$sync$2), function (result) {
  _forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* DISABLED */ "q"]] = result[_constants__WEBPACK_IMPORTED_MODULE_3__[/* DISABLED */ "q"]];
  clearCacheEnabled = result[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CLEAR_CACHE_ENABLED */ "f"]] === _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].YES;
  corsEnabled = result[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_ENABLED_STORAGE_KEY */ "h"]] === _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].YES;
  setIcon();
});
chrome.storage.onChanged.addListener(function (changes) {
  var _3;

  if (changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* ACTIVE_KEYS */ "b"]]) {
    jsonActiveKeys = changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* ACTIVE_KEYS */ "b"]].newValue;
  }

  if (changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]]) {
    var config = getActiveConfig(changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]].newValue);
    _forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, config);
  }

  if (changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* DISABLED */ "q"]]) {
    _forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* DISABLED */ "q"]] = changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* DISABLED */ "q"]].newValue;
  }

  if (changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CLEAR_CACHE_ENABLED */ "f"]]) {
    clearCacheEnabled = changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CLEAR_CACHE_ENABLED */ "f"]].newValue === _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].YES;
  }

  if (changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_ENABLED_STORAGE_KEY */ "h"]]) {
    corsEnabled = changes[_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_ENABLED_STORAGE_KEY */ "h"]].newValue === _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].YES;
  }

  chrome.storage.sync.get(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()({}, _constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"], {
    0: (_3 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_3, _constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"], []), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(_3, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS_STORAGE */ "i"], []), _3)
  }), function (result) {
    if (result && result[_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]]) {
      conf = result[_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]];

      var _config = getActiveConfig(conf);

      _forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]] = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, _config);
    }

    setIcon();
  });
});
chrome.webRequest.onBeforeRequest.addListener(function (details) {
  if (_forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* DISABLED */ "q"]] !== _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].NO) {
    if (clearCacheEnabled) {
      clearCache();
    }

    return _forward__WEBPACK_IMPORTED_MODULE_5__["default"].onBeforeRequestCallback(details);
  }

  return {};
}, {
  urls: [_constants__WEBPACK_IMPORTED_MODULE_3__[/* ALL_URLS */ "c"]]
}, [_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLOCKING */ "e"]]); // Breaking the CORS Limitation

chrome.webRequest.onHeadersReceived.addListener(headersReceivedListener, {
  urls: [_constants__WEBPACK_IMPORTED_MODULE_3__[/* ALL_URLS */ "c"]]
}, [_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLOCKING */ "e"], _constants__WEBPACK_IMPORTED_MODULE_3__[/* RESPONSE_HEADERS */ "L"]]);
chrome.webRequest.onBeforeSendHeaders.addListener(function (details) {
  return _forward__WEBPACK_IMPORTED_MODULE_5__["default"].onBeforeSendHeadersCallback(details);
}, {
  urls: [_constants__WEBPACK_IMPORTED_MODULE_3__[/* ALL_URLS */ "c"]]
}, [_constants__WEBPACK_IMPORTED_MODULE_3__[/* BLOCKING */ "e"], _constants__WEBPACK_IMPORTED_MODULE_3__[/* REQUEST_HEADERS */ "K"]]);

function setBadgeAndBackgroundColor(text, color) {
  var _chrome = chrome,
      browserAction = _chrome.browserAction;
  browserAction.setBadgeText({
    text: _constants__WEBPACK_IMPORTED_MODULE_3__[/* EMPTY_STRING */ "s"] + text
  });
  browserAction.setBadgeBackgroundColor({
    color: color
  });
}

function setIcon() {
  if (parseError) {
    setBadgeAndBackgroundColor(_enums__WEBPACK_IMPORTED_MODULE_4__[/* BadgeText */ "a"].ERROR, _enums__WEBPACK_IMPORTED_MODULE_4__[/* IconBackgroundColor */ "c"].ERROR);
    return;
  }

  if (_forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* DISABLED */ "q"]] !== _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].NO) {
    setBadgeAndBackgroundColor(_forward__WEBPACK_IMPORTED_MODULE_5__["default"][_constants__WEBPACK_IMPORTED_MODULE_3__[/* JSON_CONFIG */ "w"]][_constants__WEBPACK_IMPORTED_MODULE_3__[/* PROXY_STORAGE_KEY */ "I"]].length, _enums__WEBPACK_IMPORTED_MODULE_4__[/* IconBackgroundColor */ "c"].ON);
  } else {
    setBadgeAndBackgroundColor(_enums__WEBPACK_IMPORTED_MODULE_4__[/* BadgeText */ "a"].OFF, _enums__WEBPACK_IMPORTED_MODULE_4__[/* IconBackgroundColor */ "c"].OFF);
    return;
  }
}

function headersReceivedListener(details) {
  return _forward__WEBPACK_IMPORTED_MODULE_5__["default"].onHeadersReceivedCallback(details, corsEnabled);
}

function clearCache() {
  if (!clearRunning) {
    clearRunning = true;
    var millisecondsPerWeek = _constants__WEBPACK_IMPORTED_MODULE_3__[/* MILLISECONDS_PER_WEEK */ "A"];
    var oneWeekAgo = new Date().getTime() - millisecondsPerWeek;
    chrome.browsingData.removeCache({
      since: oneWeekAgo
    }, function () {
      clearRunning = false;
    });
  }
}

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return REG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ALL_URLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return BLOCKING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return REQUEST_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return RESPONSE_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return DEFAULT_CREDENTIALS_RESPONSE_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return CORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACCESS_CONTROL_REQUEST_HEADERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return DEFAULT_CORS_ORIGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return DEFAULT_CORS_METHODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return DEFAULT_CORS_CREDENTIALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return ORIGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return JSON_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return JSONC_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return EDITING_CONFIG_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return TAB_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ACTIVE_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return CLEAR_CACHE_ENABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return CORS_STORAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return CORS_ENABLED_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return PROXY_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return MILLISECONDS_PER_WEEK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return RULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return LANGUAGE_JSON; });
/* unused harmony export CHANGE */
/* unused harmony export DOM_CONTENT_LOADED */
/* unused harmony export SWITCH_DOM_ID */
/* unused harmony export SWITCH_INNER_DOM_ID */
/* unused harmony export SWITCH_AREA_DOM_ID */
/* unused harmony export NEW_TAB_DOM_ID */
/* unused harmony export OPEN_README_DOM_ID */
/* unused harmony export CONTAINER_DOM_ID */
/* unused harmony export STATUS_DOM_ID */
/* unused harmony export CLEAR_CACHE_ENABLED_DOM_ID */
/* unused harmony export CORS_ENABLED_DOM_ID */
/* unused harmony export SWITCH_CHECKED_CLASSNAME */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return POPUP_HTML_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return MONACO_VS_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return MONACO_CONTRIBUTION_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return HELP_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return DEFAULT_FONT_FAMILY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return PLATFORM_MAC; });
/* unused harmony export OPTIONS_SAVED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return EMPTY_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return KEY_DOWN; });
/* unused harmony export CLICK */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ANYTHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return FORMAT_DOCUMENT_CMD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return KEY_CODE_S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return SHOW_FOLDING_CONTROLS; });
/* unused harmony export OPACITY_VISIBLE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return NULL_STRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return RULE_COMPLETION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return DEFAULT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return DEFAULT_DUP_DATA; });
var REG = {
  TRIM_JSON: /(,+)([^a-z0-9["])/gi,
  CHROME_EXTENSION: /^chrome-extension:\/\//i,
  // support [ ] ( ) \ * ^ $
  FORWARD: /\\|\[|]|\(|\)|\*|\$|\^/i,
  WHITESPACE: /\s+/g,
  X_HEADER: /^x-/
};
var ALL_URLS = '<all_urls>';
var BLOCKING = 'blocking';
var REQUEST_HEADERS = 'requestHeaders';
var RESPONSE_HEADERS = 'responseHeaders';
var DEFAULT_CREDENTIALS_RESPONSE_HEADERS = 'Content-Type, access-control-allow-headers, Authorization, X-Requested-With, X-Referer';
var CORS = {
  METHODS: 'access-control-allow-methods',
  CREDENTIALS: 'access-control-allow-credentials',
  ORIGIN: 'access-control-allow-origin',
  HEADERS: 'access-control-allow-headers'
};
var ACCESS_CONTROL_REQUEST_HEADERS = 'access-control-request-headers';
var DEFAULT_CORS_ORIGIN = '*';
var DEFAULT_CORS_METHODS = '*';
var DEFAULT_CORS_CREDENTIALS = 'true';
var ORIGIN = 'origin';
/**
 * Disabled storage key
 */

var DISABLED = 'disabled';
/**
 * pure JSON storage key
 */

var JSON_CONFIG = 'config';
/**
 * JSON with comments storage key
 */

var JSONC_CONFIG = 'config_for_shown';
var EDITING_CONFIG_KEY = 'config_editing_key';
var TAB_LIST = 'tab_list';
var ACTIVE_KEYS = 'active_keys';
var CLEAR_CACHE_ENABLED = 'clearCacheEnabled';
var CORS_STORAGE = 'cors';
var CORS_ENABLED_STORAGE_KEY = 'corsEnabled';
var PROXY_STORAGE_KEY = 'proxy';
var MILLISECONDS_PER_WEEK = 1000 * 60 * 60 * 24 * 7;
var RULE = 'rule';
var LANGUAGE_JSON = 'json';
var CHANGE = 'change';
var DOM_CONTENT_LOADED = 'DOMContentLoaded';
var SWITCH_DOM_ID = 'J_Switch';
var SWITCH_INNER_DOM_ID = 'J_SwitchInner';
var SWITCH_AREA_DOM_ID = 'J_SwitchArea';
var NEW_TAB_DOM_ID = 'J_OpenInNewTab';
var OPEN_README_DOM_ID = 'J_OpenReadme';
var CONTAINER_DOM_ID = 'J_Container';
var STATUS_DOM_ID = 'J_Status';
var CLEAR_CACHE_ENABLED_DOM_ID = 'J_ClearCacheEnabled';
var CORS_ENABLED_DOM_ID = 'J_CorsEnabled';
var SWITCH_CHECKED_CLASSNAME = 'ant-switch-checked';
var POPUP_HTML_PATH = 'XSwitch.html';
var PREFIX =  false ? undefined : './';
var MONACO_VS_PATH =  false ? undefined : './lib/monaco-editor/min/vs';
var MONACO_CONTRIBUTION_PATH = 'vs/language/json/monaco.contribution';
var HELP_URL = 'https://yuque.com/jiushen/blog/xswitch-readme';
var DEFAULT_FONT_FAMILY = 'source-code-pro,Menlo,Monaco,Consolas,Courier New,monospace';
var PLATFORM_MAC = 'Mac';
var OPTIONS_SAVED = 'Options saved.';
var EMPTY_STRING = '';
var KEY_DOWN = 'keydown';
var CLICK = 'click';
var ANYTHING = 'anyString';
var FORMAT_DOCUMENT_CMD = 'editor.action.formatDocument';
var KEY_CODE_S = 83;
var SHOW_FOLDING_CONTROLS = 'always';
var OPACITY_VISIBLE = '1';
var NULL_STRING = 'null';
var RULE_COMPLETION = "[\n  \"${1:from}\",\n  \"${1:to}\",\n],";
var DEFAULT_DATA = "{\n  // Use IntelliSense to learn about possible links.\n  // Type `rule` to quick insert rule.\n  // \u8F93\u5165 rule \u6765\u5FEB\u901F\u63D2\u5165\u89C4\u5219\n  // For more information, visit: https://github.com/yize/xswitch\n  \"proxy\": [\n    [\n      \".production.min.js\",\n      // \".production(.min)?.js\",\n      \".development.js\"\n      // \"react.development.js\",\n    ],\n    // then try visit https://unpkg.com/react@16.4.1/umd/react.production.min.js\n  ],\n  // urls that want CORS\n  \"cors\": [\n    \"mocks.a.com\",\n    \"mocks.b.com\"\n  ]\n}\n";
var DEFAULT_DUP_DATA = "{\n  \"proxy\": [\n  ],\n  \"cors\": [\n  ]\n}\n";

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);






/**
 * get url type
 * @param url urls
 * @param reg rule
 */
var matchUrl = function matchUrl(url, reg) {
  if (_constants__WEBPACK_IMPORTED_MODULE_3__[/* REG */ "J"].FORWARD.test(reg)) {
    // support ??
    var r = new RegExp(reg.replace('??', '\\?\\?'), 'i');
    var matched = r.test(url);

    if (matched) {
      return _enums__WEBPACK_IMPORTED_MODULE_4__[/* UrlType */ "d"].REG;
    }
  } else {
    var _matched = url.indexOf(reg) > -1;

    if (_matched) {
      return _enums__WEBPACK_IMPORTED_MODULE_4__[/* UrlType */ "d"].STRING;
    }
  }

  return false;
};

var Forward =
/*#__PURE__*/
function () {
  function Forward() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Forward);

    this._lastRequestId = null;
    this._disabled = _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].YES;
    this._config = {};
    this._originRequest = new Map();
    this._originRequestHeaders = new Map();
    this._urls = new Array(200);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Forward, [{
    key: "onHeadersReceivedCallback",
    // Breaking the CORS Limitation
    value: function onHeadersReceivedCallback(details) {
      var cors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      // has cors rules
      var corsMap = this.config.cors;
      var corsMatched = false;

      if (corsMap && corsMap.length) {
        corsMap.forEach(function (rule) {
          if (matchUrl(details.url, rule)) {
            corsMatched = true;
          }
        });
      }

      var disabled = this.disabled === _enums__WEBPACK_IMPORTED_MODULE_4__[/* Enabled */ "b"].NO || !cors || !corsMatched;

      if (disabled) {
        return {};
      }

      var originUrl = details.url;
      var resHeaders = [];
      var CORSOrigin = (this._originRequest.get(details.requestId) ? this._originRequest.get(details.requestId) : details.initiator) || _constants__WEBPACK_IMPORTED_MODULE_3__[/* DEFAULT_CORS_ORIGIN */ "l"];

      if (details.responseHeaders && details.responseHeaders.filter) {
        var hasCredentials = false;
        var tempOrigin = _constants__WEBPACK_IMPORTED_MODULE_3__[/* EMPTY_STRING */ "s"];
        resHeaders = details.responseHeaders.filter(function (responseHeader) {
          // Already has access-control-allow-origin headers
          if (_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].ORIGIN === responseHeader.name.toLowerCase()) {
            tempOrigin = responseHeader.value;
          }

          if (_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].CREDENTIALS === responseHeader.name.toLowerCase()) {
            hasCredentials = responseHeader.value;
          }

          if ([_constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].ORIGIN, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].CREDENTIALS, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].METHODS, _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].HEADERS].indexOf(responseHeader.name.toLowerCase()) < 0) {
            return true;
          }

          return false;
        }); // only when hasCredentials

        if (hasCredentials) {
          CORSOrigin = tempOrigin;
        }
      } // suck point


      if (CORSOrigin === _constants__WEBPACK_IMPORTED_MODULE_3__[/* DEFAULT_CORS_ORIGIN */ "l"] && this._originRequest.get(details.requestId) === _constants__WEBPACK_IMPORTED_MODULE_3__[/* NULL_STRING */ "D"]) {
        CORSOrigin = _constants__WEBPACK_IMPORTED_MODULE_3__[/* DEFAULT_CORS_ORIGIN */ "l"];
      }

      resHeaders.push({
        name: _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].ORIGIN,
        value: CORSOrigin
      });
      resHeaders.push({
        name: _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].CREDENTIALS,
        value: _constants__WEBPACK_IMPORTED_MODULE_3__[/* DEFAULT_CORS_CREDENTIALS */ "j"]
      });
      resHeaders.push({
        name: _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].METHODS,
        value: _constants__WEBPACK_IMPORTED_MODULE_3__[/* DEFAULT_CORS_METHODS */ "k"]
      });
      var CORSHeader = _constants__WEBPACK_IMPORTED_MODULE_3__[/* EMPTY_STRING */ "s"];

      if (this._originRequestHeaders.get(details.requestId)) {
        CORSHeader = ',' + this._originRequestHeaders.get(details.requestId);
      }

      resHeaders.push({
        name: _constants__WEBPACK_IMPORTED_MODULE_3__[/* CORS */ "g"].HEADERS,
        value: _constants__WEBPACK_IMPORTED_MODULE_3__[/* DEFAULT_CREDENTIALS_RESPONSE_HEADERS */ "m"] + CORSHeader
      });
      return {
        responseHeaders: resHeaders
      };
    }
  }, {
    key: "redirectToMatchingRule",
    value: function redirectToMatchingRule(details) {
      var rules = this.config.proxy;
      var redirectUrl = details.url; // in case of chrome-extension downtime

      if (!rules || !rules.length || _constants__WEBPACK_IMPORTED_MODULE_3__[/* REG */ "J"].CHROME_EXTENSION.test(redirectUrl)) {
        return {};
      }

      if (/http(s?):\/\/.*\.(js|css|json|jsonp)/.test(redirectUrl) && this._urls.indexOf(redirectUrl) < 0) {
        this._urls.shift();

        this._urls.push(redirectUrl);
      }

      try {
        for (var i = 0; i < rules.length; i++) {
          var rule = rules[i];

          if (rule && rule[0] && typeof rule[1] === 'string') {
            var reg = rule[0];
            var matched = matchUrl(redirectUrl, reg);

            if (details.requestId !== this._lastRequestId) {
              if (matched === _enums__WEBPACK_IMPORTED_MODULE_4__[/* UrlType */ "d"].REG) {
                var r = new RegExp(reg.replace('??', '\\?\\?'), 'i');
                redirectUrl = redirectUrl.replace(r, rule[1]);
              } else if (matched === _enums__WEBPACK_IMPORTED_MODULE_4__[/* UrlType */ "d"].STRING) {
                redirectUrl = redirectUrl.split(rule[0]).join(rule[1]);
              }
            }
          }
        }
      } catch (e) {
        console.error('rule match error', e);
      }

      this._lastRequestId = details.requestId;
      return redirectUrl === details.url ? {} : {
        redirectUrl: redirectUrl
      };
    }
  }, {
    key: "onBeforeSendHeadersCallback",
    value: function onBeforeSendHeadersCallback(details) {
      var headers = [];

      for (var i = 0; i < details.requestHeaders.length; ++i) {
        var requestName = details.requestHeaders[i].name.toLowerCase();

        if (requestName === _constants__WEBPACK_IMPORTED_MODULE_3__[/* ORIGIN */ "E"]) {
          this._originRequest.set(details.requestId, details.requestHeaders[i].value);
        } else if (requestName === _constants__WEBPACK_IMPORTED_MODULE_3__[/* ACCESS_CONTROL_REQUEST_HEADERS */ "a"] || _constants__WEBPACK_IMPORTED_MODULE_3__[/* REG */ "J"].X_HEADER.test(requestName)) {
          headers.push(requestName);
        }
      }

      if (headers.length) {
        this._originRequestHeaders.set(details.requestId, headers.join(','));
      }

      return {
        requestHeaders: details.requestHeaders
      };
    }
  }, {
    key: "onBeforeRequestCallback",
    value: function onBeforeRequestCallback(details) {
      return this.redirectToMatchingRule(details);
    }
  }, {
    key: "urls",
    // for cache
    get: function get() {
      return this._urls;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(newValue) {
      this._disabled = newValue;
    }
  }, {
    key: "config",
    get: function get() {
      return this._config;
    },
    set: function set(newValue) {
      this._config = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, newValue);
    }
  }]);

  return Forward;
}();

if (!window._forward) {
  window._forward = new Forward();
}

/* harmony default export */ __webpack_exports__["default"] = (window._forward);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(13);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(167);

var iterableToArray = __webpack_require__(168);

var nonIterableSpread = __webpack_require__(169);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ })

/******/ });
//# sourceMappingURL=background.js.map