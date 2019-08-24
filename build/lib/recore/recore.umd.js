(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Recore"] = factory();
	else
		root["Recore"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["n"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["o"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["v"] = setPrototypeOf;
/* harmony export (immutable) */ __webpack_exports__["p"] = isValidArrayIndex;
/* harmony export (immutable) */ __webpack_exports__["s"] = nextId;
/* harmony export (immutable) */ __webpack_exports__["k"] = hasOwnProperty;
/* harmony export (immutable) */ __webpack_exports__["t"] = objectAssign;
/* harmony export (immutable) */ __webpack_exports__["u"] = once;
/* harmony export (immutable) */ __webpack_exports__["i"] = fail;
/* harmony export (immutable) */ __webpack_exports__["m"] = invariant;
/* harmony export (immutable) */ __webpack_exports__["y"] = walk;
/* harmony export (immutable) */ __webpack_exports__["g"] = addHiddenProp;
/* harmony export (immutable) */ __webpack_exports__["f"] = addHiddenFinalProp;
/* harmony export (immutable) */ __webpack_exports__["q"] = looseEqual;
/* harmony export (immutable) */ __webpack_exports__["r"] = looseIndexOf;
/* harmony export (immutable) */ __webpack_exports__["w"] = splitPath;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SYMBOL_DECORATORS; });
/* unused harmony export isDecoratorTarget */
/* harmony export (immutable) */ __webpack_exports__["j"] = getObxDecorators;
/* harmony export (immutable) */ __webpack_exports__["h"] = createPropertyInitializerDescriptor;
/* unused harmony export SYMBOL_INITIALIZED */
/* harmony export (immutable) */ __webpack_exports__["l"] = initializeInstance;
/* harmony export (immutable) */ __webpack_exports__["c"] = $get;
/* harmony export (immutable) */ __webpack_exports__["d"] = $set;
/* harmony export (immutable) */ __webpack_exports__["a"] = $del;
/* harmony export (immutable) */ __webpack_exports__["b"] = $extend;
/* harmony export (immutable) */ __webpack_exports__["x"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_obx__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observable_obx_instance__ = __webpack_require__(77);




function isObject(value) {
  return value !== null && __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(value) === 'object';
}
function isPlainObject(value) {
  if (!isObject(value)) {
    return false;
  }

  var proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}
function setPrototypeOf(target, proto) {
  // tslint:disable-next-line
  if (typeof Object.setPrototypeOf !== 'undefined') {
    Object.setPrototypeOf(target, proto); // tslint:disable-line
  } else {
    target.__proto__ = proto;
  }
}
function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function nextId() {
  return (++__WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* globalState */].guid).toString(32).toLocaleLowerCase();
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
  return obj && prototypeHasOwnProperty.call(obj, key);
}
function objectAssign(target) {
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }

  if (Object.assign) {
    return Object.assign.apply(Object, [target].concat(sources));
  }

  for (var i = 0, l = sources.length; i < l; i++) {
    var source = sources[i];

    for (var key in source) {
      if (hasOwnProperty(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
}
function once(func) {
  var invoked = false;
  return function () {
    if (invoked) {
      return;
    }

    invoked = true;
    return func.apply(this, arguments);
  };
}
function fail(message, thing) {
  invariant(false, message, thing);
  throw 'X'; // tslint:disable-line
}
function invariant(check, message, thing) {
  if (!check) {
    throw new Error('[recore] Invariant failed: ' + message + (thing ? " in '".concat(thing, "'") : ''));
  }
}
function walk(obj, fn) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    fn(obj, keys[i], obj[keys[i]]);
  }
}
function addHiddenProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: true,
    configurable: true,
    value: value
  });
}
function addHiddenFinalProp(object, propName, value) {
  Object.defineProperty(object, propName, {
    enumerable: false,
    writable: false,
    configurable: true,
    value: value
  });
}
function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  if (!isObject(a) && !isObject(b)) {
    return String(a) === String(b);
  }

  return false;
}
function looseIndexOf(arr, val) {
  for (var i = 0, l = arr.length; i < l; i++) {
    if (looseEqual(arr[i], val)) return i;
  }

  return -1;
}
var RE_PATH = /^([^/]*)(?:\/(.*))?$/;
var RE_PATH_REVERSE = /^(?:(.*)\/)?([^/]+)$/;
function splitPath(path) {
  var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return reverse ? RE_PATH_REVERSE.exec(path) : RE_PATH.exec(path);
}
var SYMBOL_DECORATORS = Symbol('__obxDecorators');
function isDecoratorTarget(a) {
  return a[SYMBOL_DECORATORS] ? true : false;
}
function getObxDecorators(a) {
  return a[SYMBOL_DECORATORS];
}
var descriptorCache = {};
function createPropertyInitializerDescriptor(prop) {
  return descriptorCache[prop] || (descriptorCache[prop] = {
    configurable: true,
    enumerable: false,
    get: function get() {
      initializeInstance(this); // TODO not safe

      return this[prop];
    },
    set: function set(value) {
      initializeInstance(this); // TODO not safe

      this[prop] = value;
    }
  });
}
var SYMBOL_INITIALIZED = Symbol('__obxInitialized');
function initializeInstance(target) {
  if (target[SYMBOL_INITIALIZED] === true) {
    return;
  }

  addHiddenProp(target, SYMBOL_INITIALIZED, true);

  if (!Object(__WEBPACK_IMPORTED_MODULE_2__observable_obx__["f" /* hasObx */])(target)) {
    var _name = (target.constructor.name || 'ObservableObject') + '@' + nextId();

    var obx = new __WEBPACK_IMPORTED_MODULE_3__observable_obx_instance__["a" /* default */](_name, target);
    Object(__WEBPACK_IMPORTED_MODULE_2__observable_obx__["g" /* injectObx */])(target, obx);
  }
}
function $get(target, key) {
  var obx = Object(__WEBPACK_IMPORTED_MODULE_2__observable_obx__["e" /* getObx */])(target);

  if (obx) {
    return obx.get(key);
  }
}
function $set(target, key, val) {
  var obx = Object(__WEBPACK_IMPORTED_MODULE_2__observable_obx__["e" /* getObx */])(target);

  if (obx) {
    obx.set(key, val);
  }
}
function $del(target, key) {
  var obx = Object(__WEBPACK_IMPORTED_MODULE_2__observable_obx__["e" /* getObx */])(target);

  if (obx) {
    obx.del(key);
  }
}
function $extend(target, properties) {
  var obx = Object(__WEBPACK_IMPORTED_MODULE_2__observable_obx__["e" /* getObx */])(target);

  if (obx) {
    obx.extend(properties);
  }
}
var useRAF = typeof requestAnimationFrame === 'function';
function throttle(func, wait) {
  var lastArgs;
  var lastThis;
  var result;
  var timerId;
  var lastCalled;
  var lastInvoked = 0;

  function invoke(time) {
    var args = lastArgs;
    var thisArg = lastThis;
    lastArgs = undefined;
    lastThis = undefined;
    lastInvoked = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function startTimer(pendingFunc, wait) {
    if (useRAF) {
      return requestAnimationFrame(pendingFunc);
    }

    return setTimeout(pendingFunc, wait);
  }

  function leadingEdge(time) {
    lastInvoked = time;
    timerId = startTimer(timerExpired, wait);
    return invoke(time);
  }

  function shouldInvoke(time) {
    var timeSinceLastCalled = time - lastCalled;
    var timeSinceLastInvoked = time - lastInvoked;
    return lastCalled === undefined || timeSinceLastCalled >= wait || timeSinceLastCalled < 0 || timeSinceLastInvoked >= wait;
  }

  function remainingWait(time) {
    var timeSinceLastCalled = time - lastCalled;
    var timeSinceLastInvoked = time - lastInvoked;
    return Math.min(wait - timeSinceLastCalled, wait - timeSinceLastInvoked);
  }

  function timerExpired() {
    var time = Date.now();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }

    timerId = startTimer(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    if (lastArgs) {
      return invoke(time);
    }

    lastArgs = undefined;
    lastThis = undefined;
    return result;
  }

  function debounced() {
    var time = Date.now();
    var isInvoking = shouldInvoke(time);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    lastArgs = args;
    lastThis = this;
    lastCalled = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCalled);
      }

      timerId = startTimer(timerExpired, wait);
      return invoke(lastCalled);
    }

    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait);
    }

    return result;
  }

  return debounced;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13);

var assertThisInitialized = __webpack_require__(40);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(72);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObxFlag; });
/* harmony export (immutable) */ __webpack_exports__["d"] = formatNestValue;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SYMBOL_OBX; });
/* harmony export (immutable) */ __webpack_exports__["g"] = injectObx;
/* harmony export (immutable) */ __webpack_exports__["e"] = getObx;
/* harmony export (immutable) */ __webpack_exports__["f"] = hasObx;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_slicedToArray__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obx_property__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__derivation__ = __webpack_require__(12);









var ObxFlag;

(function (ObxFlag) {
  ObxFlag[ObxFlag["REF"] = 0] = "REF";
  ObxFlag[ObxFlag["VAL"] = 1] = "VAL";
  ObxFlag[ObxFlag["SHALLOW"] = 2] = "SHALLOW";
  ObxFlag[ObxFlag["DEEP"] = 3] = "DEEP";
})(ObxFlag || (ObxFlag = {}));

function formatNestValue(nestPath, val) {
  if (!nestPath) {
    return val;
  }

  var pathArray = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["w" /* splitPath */])(nestPath, true);

  if (!pathArray) {
    return val;
  }

  var _pathArray = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_slicedToArray___default()(pathArray, 3),
      _ = _pathArray[0],
      path = _pathArray[1],
      key = _pathArray[2];

  return formatNestValue(path, key ? __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_defineProperty___default()({}, key, val) : val);
}

var Obx =
/*#__PURE__*/
function () {
  function Obx(name, target) {
    var obxFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ObxFlag.DEEP;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Obx);

    this.name = name;
    this.target = target;
    this.obxFlag = obxFlag;
    this.id = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["s" /* nextId */])();
    this.localVer = 0;
    this.observing = [];
    this.observers = new Set();
    this.dependenciesState = __WEBPACK_IMPORTED_MODULE_8__derivation__["a" /* DerivationState */].NOT_TRACKING;
    this.lowestObserverState = __WEBPACK_IMPORTED_MODULE_8__derivation__["a" /* DerivationState */].UP_TO_DATE;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Obx, [{
    key: "onBecomeDirty",
    value: function onBecomeDirty() {
      Object(__WEBPACK_IMPORTED_MODULE_7__observable__["f" /* propagateChanged */])(this);
    }
  }, {
    key: "onBecomeUnobserved",
    value: function onBecomeUnobserved() {
      Object(__WEBPACK_IMPORTED_MODULE_8__derivation__["b" /* clearObserving */])(this);
    }
  }, {
    key: "onBecomeObserved",
    value: function onBecomeObserved() {}
  }, {
    key: "reportChange",
    value: function reportChange() {
      Object(__WEBPACK_IMPORTED_MODULE_7__observable__["l" /* startBatch */])();
      this.localVer++;
      Object(__WEBPACK_IMPORTED_MODULE_7__observable__["f" /* propagateChanged */])(this);
      Object(__WEBPACK_IMPORTED_MODULE_7__observable__["c" /* endBatch */])();
    }
  }, {
    key: "getAsObx",
    value: function getAsObx(path) {
      if (path === '') {
        return this;
      }

      var entry = path;
      var nestPath = '';

      if (__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(path) !== 'symbol') {
        var pathArray = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["w" /* splitPath */])(String(path));

        if (!pathArray) {
          return this;
        }

        entry = pathArray[1];
        nestPath = pathArray[2];
      }

      if (!entry) {
        return this.get(nestPath);
      }

      var ret = this.internalGet(entry);

      if (!hasObx(ret) && nestPath) {
        ret = this.internalGet(path);
      }

      var obx = getObx(ret);

      if (obx && nestPath) {
        return obx.getAsObx(nestPath);
      }

      return obx;
    }
  }, {
    key: "internalGet",
    value: function internalGet(key) {
      return this.target[key];
    }
  }, {
    key: "get",
    value: function get(path) {
      if (path == null || path === '') {
        return this.target;
      }

      var entry = path;
      var nestPath = '';

      if (__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(path) !== 'symbol') {
        var pathArray = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["w" /* splitPath */])(String(path));

        if (!pathArray) {
          return undefined;
        }

        entry = pathArray[1];
        nestPath = pathArray[2];
      }

      if (!entry) {
        return this.get(nestPath);
      }

      var ret = this.internalGet(entry);

      if (!nestPath) {
        return ret;
      }

      if (!hasObx(ret)) {
        return this.internalGet(path);
      }

      return getObx(ret).get(nestPath);
    }
  }, {
    key: "internalSet",
    value: function internalSet(key, val) {
      var nestPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      if (this.obxFlag > ObxFlag.REF) {
        Object(__WEBPACK_IMPORTED_MODULE_6__obx_property__["b" /* defineObxProperty */])(this.target, key, formatNestValue(nestPath, val), undefined, this.obxFlag);
      } else {
        this.target[key] = formatNestValue(nestPath, val);
      }

      this.reportChange();
    }
  }, {
    key: "set",
    value: function set(path, val) {
      if (path === '') {
        return;
      }

      var entry = path;
      var nestPath = '';

      if (__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(path) !== 'symbol') {
        var pathArray = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["w" /* splitPath */])(String(path));

        if (!pathArray) {
          return;
        }

        entry = pathArray[1];
        nestPath = pathArray[2];
      }

      if (!entry) {
        if (nestPath) {
          this.set(nestPath, val);
        }

        return;
      }

      this.internalSet(entry, val, nestPath);
    }
  }, {
    key: "internalDel",
    value: function internalDel(key) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_5__utils__["k" /* hasOwnProperty */])(this.target, key)) {
        return;
      }

      delete this.target[key];
      this.reportChange();
    }
  }, {
    key: "del",
    value: function del(path) {
      if (!path) {
        return;
      }

      var entry = path;
      var nestPath = '';

      if (__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(path) !== 'symbol') {
        var pathArray = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["w" /* splitPath */])(String(path), true);

        if (!pathArray) {
          return;
        }

        entry = pathArray[2];
        nestPath = pathArray[1];
      }

      if (!entry) {
        this.del(nestPath);
        return;
      }

      if (nestPath) {
        var obx = this.getAsObx(nestPath);

        if (obx) {
          obx.del(entry);
        } else {
          this.internalDel(path);
        }

        return;
      }

      this.internalDel(entry);
    }
  }, {
    key: "extend",
    value: function extend(properties) {
      var _this = this;

      Object(__WEBPACK_IMPORTED_MODULE_7__observable__["l" /* startBatch */])();
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["y" /* walk */])(properties, function (_, key, val) {
        return _this.set(key, val);
      });
      Object(__WEBPACK_IMPORTED_MODULE_7__observable__["c" /* endBatch */])();
    }
  }]);

  return Obx;
}();

/* harmony default export */ __webpack_exports__["c"] = (Obx);
var SYMBOL_OBX = Symbol('__obx');
function injectObx(obj, obx) {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils__["f" /* addHiddenFinalProp */])(obj, SYMBOL_OBX, obx);
}
function getObx(obj) {
  return obj ? obj[SYMBOL_OBX] : undefined;
}
function hasObx(obj) {
  return Object(__WEBPACK_IMPORTED_MODULE_5__utils__["k" /* hasOwnProperty */])(obj, SYMBOL_OBX) && obj[SYMBOL_OBX] instanceof Obx;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Navigator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_history__ = __webpack_require__(51);



var Navigator =
/*#__PURE__*/
function () {
  function Navigator() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Navigator);

    this.history = null;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Navigator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.history) {
        if (typeof options === 'string') {
          options = {
            mode: options
          };
        }

        if (options.mode === 'hash') {
          this.history = Object(__WEBPACK_IMPORTED_MODULE_2_history__["b" /* createHashHistory */])(options);
        } else {
          this.history = Object(__WEBPACK_IMPORTED_MODULE_2_history__["a" /* createBrowserHistory */])(options);
        }
      }
    }
  }, {
    key: "getHistory",
    value: function getHistory() {
      return this.history;
    }
  }, {
    key: "goto",
    value: function goto(path, state) {
      if (this.history) {
        this.history.push(path, state);
      }
    }
  }, {
    key: "goBack",
    value: function goBack() {
      if (this.history) {
        this.history.goBack();
      }
    }
  }]);

  return Navigator;
}();
/* harmony default export */ __webpack_exports__["a"] = (new Navigator());

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(59);

var isBuffer = __webpack_require__(99);
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios


var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */

function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */


function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */


function isFormData(val) {
  return typeof FormData !== 'undefined' && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */


function isArrayBufferView(val) {
  var result;

  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && val.buffer instanceof ArrayBuffer;
  }

  return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */


function isString(val) {
  return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */


function isNumber(val) {
  return typeof val === 'number';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */


function isUndefined(val) {
  return typeof val === 'undefined';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */


function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */


function isDate(val) {
  return toString.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */


function isFile(val) {
  return toString.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */


function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */


function isFunction(val) {
  return toString.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */


function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */


function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */


function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */


function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }

  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */


function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  } // Force an array if not already something iterable


  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */


function merge()
/* obj1, obj2, obj3, ... */
{
  var result = {};

  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }

  return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */


function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addObserver;
/* harmony export (immutable) */ __webpack_exports__["h"] = removeObserver;
/* unused harmony export queueForUnobservation */
/* harmony export (immutable) */ __webpack_exports__["l"] = startBatch;
/* harmony export (immutable) */ __webpack_exports__["c"] = endBatch;
/* harmony export (immutable) */ __webpack_exports__["j"] = reportObserved;
/* harmony export (immutable) */ __webpack_exports__["f"] = propagateChanged;
/* harmony export (immutable) */ __webpack_exports__["e"] = propagateChangeConfirmed;
/* harmony export (immutable) */ __webpack_exports__["g"] = propagateMaybeChanged;
/* harmony export (immutable) */ __webpack_exports__["b"] = asObservable;
/* harmony export (immutable) */ __webpack_exports__["d"] = observeIterable;
/* harmony export (immutable) */ __webpack_exports__["k"] = reportPropValue;
/* harmony export (immutable) */ __webpack_exports__["i"] = reportChildValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__derivation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_state__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx__ = __webpack_require__(7);




function addObserver(observable, node) {
  observable.observers.add(node);

  if (observable.lowestObserverState > node.dependenciesState) {
    observable.lowestObserverState = node.dependenciesState;
  }
}
function removeObserver(observable, node) {
  observable.observers.delete(node);

  if (observable.observers.size === 0) {
    // deleting last observer
    queueForUnobservation(observable);
  }
}
function queueForUnobservation(observable) {
  if (!observable.isPendingUnobservation) {
    observable.isPendingUnobservation = true;
    __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].pendingUnobservations.push(observable);
  }
}
function startBatch() {
  __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].inBatch++;
}
function endBatch() {
  if (--__WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].inBatch === 0) {
    // the batch is actually about to finish, all unobserving should happen here.
    var list = __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].pendingUnobservations;

    for (var i = 0; i < list.length; i++) {
      var observable = list[i];
      observable.isPendingUnobservation = false;

      if (observable.observers.size === 0) {
        if (observable.isBeingObserved) {
          // if this observable had reactive observers, trigger the hooks
          observable.isBeingObserved = false;
          observable.onBecomeUnobserved();
        }
      }
    }

    __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].pendingUnobservations = [];
  }
}
function reportObserved(observable) {
  var derivation = __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].trackingDerivation;

  if (!derivation) {
    return;
  }

  if (derivation.runId !== observable.lastAccessedBy) {
    observable.lastAccessedBy = derivation.runId;
    derivation.newObserving[derivation.unboundDepsCount++] = observable;

    if (!observable.isBeingObserved) {
      observable.isBeingObserved = true;
      observable.onBecomeObserved();
    }
  }
}
function propagateChanged(observable) {
  if (observable.lowestObserverState === __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].DIRTY) {
    return;
  }

  observable.lowestObserverState = __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].DIRTY;
  observable.observers.forEach(function (d) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["f" /* setDerivationDirty */])(d);
  });
}
function propagateChangeConfirmed(observable) {
  if (observable.lowestObserverState === __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].DIRTY) {
    return;
  }

  observable.lowestObserverState = __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].DIRTY;
  observable.observers.forEach(function (d) {
    if (d.dependenciesState === __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].MYBE_DIRTY) {
      d.dependenciesState = __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].DIRTY;
    } else if (d.dependenciesState === __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].UP_TO_DATE) {
      observable.lowestObserverState = __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].UP_TO_DATE;
    }
  });
}
function propagateMaybeChanged(observable) {
  if (observable.lowestObserverState !== __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].UP_TO_DATE) {
    return;
  }

  observable.lowestObserverState = __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].MYBE_DIRTY;
  observable.observers.forEach(function (d) {
    if (d.dependenciesState === __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].UP_TO_DATE) {
      d.dependenciesState = __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].MYBE_DIRTY;
      d.onBecomeDirty();
    }
  });
}
function asObservable(thing, obxFlag) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["n" /* isObject */])(thing)) {
    return;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_3__obx__["f" /* hasObx */])(thing)) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__obx__["e" /* getObx */])(thing);
  }

  if (!Object.isExtensible(thing)) {
    return;
  }

  var name = (thing.constructor.name || 'ObservableObject') + '@' + Object(__WEBPACK_IMPORTED_MODULE_0__utils__["s" /* nextId */])();
  var ObxContructor = asObservable.getObxContructor(thing);
  var obx = ObxContructor ? new ObxContructor(name, thing, obxFlag) : null;

  if (obx) {
    Object(__WEBPACK_IMPORTED_MODULE_3__obx__["g" /* injectObx */])(thing, obx);
    return obx;
  }
}

asObservable.getObxContructor = function () {
  return __WEBPACK_IMPORTED_MODULE_3__obx__["c" /* default */];
};

function observeIterable(items, obxFlag) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var n = _step.value;
      asObservable(n, obxFlag);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}
function reportPropValue(propValue, propFlag) {
  if (propValue == null) return;
  var x = propFlag > __WEBPACK_IMPORTED_MODULE_3__obx__["a" /* ObxFlag */].REF ? asObservable(propValue, propFlag) : Object(__WEBPACK_IMPORTED_MODULE_3__obx__["e" /* getObx */])(propValue);

  if (x) {
    reportObserved(x);
  }
}
function reportChildValue(propValue, ownerFlag) {
  if (propValue == null) return;
  var x = ownerFlag > __WEBPACK_IMPORTED_MODULE_3__obx__["a" /* ObxFlag */].VAL ? asObservable(propValue, ownerFlag === __WEBPACK_IMPORTED_MODULE_3__obx__["a" /* ObxFlag */].DEEP ? __WEBPACK_IMPORTED_MODULE_3__obx__["a" /* ObxFlag */].DEEP : __WEBPACK_IMPORTED_MODULE_3__obx__["a" /* ObxFlag */].VAL) : Object(__WEBPACK_IMPORTED_MODULE_3__obx__["e" /* getObx */])(propValue);

  if (x) {
    reportObserved(x);
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(29);

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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DerivationState; });
/* unused harmony export CaughtException */
/* harmony export (immutable) */ __webpack_exports__["c"] = isCaughtException;
/* unused harmony export isModifiedValue */
/* harmony export (immutable) */ __webpack_exports__["g"] = shouldCompute;
/* harmony export (immutable) */ __webpack_exports__["e"] = runDerivedFunction;
/* harmony export (immutable) */ __webpack_exports__["b"] = clearObserving;
/* harmony export (immutable) */ __webpack_exports__["h"] = untracked;
/* harmony export (immutable) */ __webpack_exports__["j"] = untrackedStart;
/* harmony export (immutable) */ __webpack_exports__["i"] = untrackedEnd;
/* unused harmony export changeDependenciesStateTo0 */
/* harmony export (immutable) */ __webpack_exports__["f"] = setDerivationDirty;
/* unused harmony export setDerivationMybeDirty */
/* harmony export (immutable) */ __webpack_exports__["d"] = resetDerivationState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_state__ = __webpack_require__(17);



var DerivationState;

(function (DerivationState) {
  DerivationState[DerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
  DerivationState[DerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
  DerivationState[DerivationState["MYBE_DIRTY"] = 1] = "MYBE_DIRTY";
  DerivationState[DerivationState["DIRTY"] = 2] = "DIRTY";
})(DerivationState || (DerivationState = {}));

var CaughtException = function CaughtException(cause) {// Empty

  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, CaughtException);

  this.cause = cause;
};
function isCaughtException(e) {
  return e instanceof CaughtException;
}
function isModifiedValue(v) {
  return v.ifModified ? true : false;
}
function shouldCompute(derivation) {
  switch (derivation.dependenciesState) {
    case DerivationState.UP_TO_DATE:
      return false;

    case DerivationState.NOT_TRACKING:
    case DerivationState.DIRTY:
      return true;

    case DerivationState.MYBE_DIRTY:
      {
        var prevUntracked = untrackedStart();
        var obs = derivation.observing;
        var l = obs.length;

        for (var i = 0; i < l; i++) {
          var obj = obs[i];

          if (isModifiedValue(obj)) {
            obj.ifModified();
          }

          if (derivation.dependenciesState === DerivationState.DIRTY) {
            untrackedEnd(prevUntracked);
            return true;
          }
        }

        changeDependenciesStateTo0(derivation);
        untrackedEnd(prevUntracked);
        return false;
      }
  }
}
function runDerivedFunction(derivation, f, context, extraArguments) {
  var prevTracking = __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].trackingDerivation; // pre allocate array allocation + room for variation in deps

  derivation.newObserving = new Array(derivation.observing.length + 100);
  derivation.unboundDepsCount = 0;
  derivation.runId = ++__WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].runId;
  __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].trackingDerivation = derivation;
  var result;

  try {
    result = extraArguments ? f.apply(context, [context].concat(extraArguments)) : f.call(context, context);
  } catch (e) {
    result = new CaughtException(e);
  }

  __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].trackingDerivation = prevTracking;
  changeDependenciesStateTo0(derivation);
  bindDependencies(derivation);
  return result;
}

function bindDependencies(derivation) {
  var prevObserving = derivation.observing;
  var observing = derivation.observing = derivation.newObserving;
  var lowestNewObservingDerivationState = DerivationState.UP_TO_DATE; // Go through all new observables and check diffValue: (this list can contain duplicates):
  //   0: first occurrence, change to 1 and keep it
  //   1: extra occurrence, drop it

  var i0 = 0;
  var l = derivation.unboundDepsCount;

  for (var i = 0; i < l; i++) {
    var dep = observing[i];

    if (!dep.diffFlag) {
      dep.diffFlag = true;

      if (i0 !== i) {
        observing[i0] = dep;
      }

      i0++;
    } // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
    // not hitting the condition


    if (dep.dependenciesState > lowestNewObservingDerivationState) {
      lowestNewObservingDerivationState = dep.dependenciesState;
    }
  }

  observing.length = i0;
  derivation.newObserving = null; // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
  //   0: it's not in new observables, unobserve it
  //   1: it keeps being observed, don't want to notify it. change to 0

  l = prevObserving.length;

  while (l--) {
    var _dep = prevObserving[l];

    if (!_dep.diffFlag) {
      Object(__WEBPACK_IMPORTED_MODULE_1__observable_observable__["h" /* removeObserver */])(_dep, derivation);
    }

    _dep.diffFlag = false;
  } // Go through all new observables and check diffValue: (now it should be unique)
  //   0: it was set to 0 in last loop. don't need to do anything.
  //   1: it wasn't observed, let's observe it. set back to 0


  while (i0--) {
    var _dep2 = observing[i0];

    if (_dep2.diffFlag) {
      _dep2.diffFlag = false;
      Object(__WEBPACK_IMPORTED_MODULE_1__observable_observable__["a" /* addObserver */])(_dep2, derivation);
    }
  } // Some new observed derivations may become stale during this derivation computation
  // so they have had no chance to propagate staleness (#916)


  if (lowestNewObservingDerivationState !== DerivationState.UP_TO_DATE) {
    derivation.dependenciesState = lowestNewObservingDerivationState;
    derivation.onBecomeDirty();
  }
}

function clearObserving(derivation) {
  var obs = derivation.observing;
  derivation.observing = [];
  var i = obs.length;

  while (i--) {
    Object(__WEBPACK_IMPORTED_MODULE_1__observable_observable__["h" /* removeObserver */])(obs[i], derivation);
  }

  derivation.dependenciesState = DerivationState.NOT_TRACKING;
}
function untracked(action) {
  var prev = untrackedStart();
  var res = action();
  untrackedEnd(prev);
  return res;
}
function untrackedStart() {
  var prev = __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].trackingDerivation;
  __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].trackingDerivation = null;
  return prev;
}
function untrackedEnd(prev) {
  __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].trackingDerivation = prev;
}
function changeDependenciesStateTo0(derivation) {
  if (derivation.dependenciesState === DerivationState.UP_TO_DATE) {
    return;
  }

  derivation.dependenciesState = DerivationState.UP_TO_DATE;
  var obs = derivation.observing;
  var i = obs.length;

  while (i--) {
    obs[i].lowestObserverState = DerivationState.UP_TO_DATE;
  }
}
function setDerivationDirty(derivation) {
  if (derivation.dependenciesState === DerivationState.UP_TO_DATE) {
    derivation.onBecomeDirty();
  }

  derivation.dependenciesState = DerivationState.DIRTY;
}
function setDerivationMybeDirty(derivation) {
  if (derivation.dependenciesState === DerivationState.UP_TO_DATE) {
    derivation.onBecomeDirty();
  }

  derivation.dependenciesState = DerivationState.MYBE_DIRTY;
}
function resetDerivationState(derivation) {
  derivation.dependenciesState = DerivationState.NOT_TRACKING;
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _typeof2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return typeof obj;
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof2(obj);
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["e"] = __rest;
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (immutable) */ __webpack_exports__["b"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["d"] = __generator;
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __asyncGenerator */
/* unused harmony export __asyncDelegator */
/* unused harmony export __asyncValues */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/* global Reflect, Promise */
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}
function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}
;
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(79);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchResult; });
/* harmony export (immutable) */ __webpack_exports__["d"] = matchPath;
/* harmony export (immutable) */ __webpack_exports__["b"] = generatePath;
/* harmony export (immutable) */ __webpack_exports__["e"] = resolve;
/* harmony export (immutable) */ __webpack_exports__["c"] = locationIs;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toArray__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path_to_regexp__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path_to_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_utils__ = __webpack_require__(56);




var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(pattern, options) {
  var cacheKey = "".concat(options.end).concat(options.strict).concat(options.sensitive);
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
  if (cache[pattern]) return cache[pattern];
  var keys = [];
  var re = __WEBPACK_IMPORTED_MODULE_2_path_to_regexp___default()(pattern, keys, options);
  var compiledPattern = {
    re: re,
    keys: keys
  };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
}

function compileGenerator(pattern) {
  var cacheKey = pattern;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
  if (cache.generator) return cache.generator;
  var compiledGenerator = __WEBPACK_IMPORTED_MODULE_2_path_to_regexp___default.a.compile(pattern);

  if (cacheCount < cacheLimit) {
    cache.generator = compiledGenerator;
    cacheCount++;
  }

  return compiledGenerator;
}

var MatchResult = function MatchResult() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/';
  var isExact = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, MatchResult);

  this.path = path;
  this.url = url;
  this.isExact = isExact;
  this.params = params;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */

function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var parent = arguments.length > 2 ? arguments[2] : undefined;

  if (typeof options === "string") {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;

  if (path == null) {
    return parent;
  }

  if (path.slice(-3) === '/**' || path === '**') {
    path = path === '**' ? '' : path.slice(0, -3) || '/';
    exact = false;
  }

  path = resolve(path, parent ? parent.url : '/');

  var _compilePath = compilePath(path, {
    end: exact,
    strict: strict,
    sensitive: sensitive
  }),
      re = _compilePath.re,
      keys = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) {
    return null;
  }

  var _match = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_toArray___default()(match),
      url = _match[0],
      values = _match.slice(1);

  var isExact = pathname === url;
  if (exact && !isExact) return null;
  return new MatchResult(path, path === '/' && url === '' ? '/' : url, isExact, keys.reduce(function (memo, key, index) {
    memo[key.name] = values[index];
    return memo;
  }, {}));
}
;

/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
function generatePath() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/';
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (pattern === '/') {
    return pattern;
  }

  var generator = compileGenerator(pattern);
  return generator(params);
}
var RE_IDLE_DOT = /\/\.(\/|$)/g;
var RE_DOUBLE_DOT = /\/[^/]+\/\.\.\//;
var RE_MULTI_SLASH = /([^:/])\/+\//g;

function normalize(path) {
  // /a/b/./c/./d/. ==> /a/b/c/d
  path = path.replace(RE_IDLE_DOT, '/'); // a///b/////c ==> a/b/c

  path = path.replace(RE_MULTI_SLASH, '$1/'); // a/b/c/../../d  ==>  a/b/../d  ==>  a/d

  while (RE_DOUBLE_DOT.test(path)) {
    path = path.replace(RE_DOUBLE_DOT, '/');
  }

  return path;
}

function resolve(id, base) {
  id = id.replace(/\\/g, '/');

  if (id[0] !== '/' && base) {
    if (base.slice(-1) !== '/') {
      base += '/';
    }

    id = "".concat(base).concat(id);
  }

  return normalize(id);
}
function locationIs(loc1, loc2) {
  if (loc1 === loc2) {
    return true;
  }

  if (!loc1 || !loc2 || loc1.pathname + loc1.search !== loc2.pathname + loc2.search) {
    return false;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_3__core_utils__["a" /* shallowEqual */])(loc1.state, loc2.state);
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Globals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalState; });
/* unused harmony export getGlobalState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);

var Globals = function Globals() {
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Globals);

  this.trackingDerivation = null;
  this.computationDepth = 0;
  this.runId = 0;
  this.guid = 0;
  this.inBatch = 0;
  this.pendingUnobservations = [];
  this.pendingReactions = [];
  this.isRunningReactions = false;
  this.dynamicObserveDisabled = false;
};
var globalState = new Globals();
function getGlobalState() {
  return globalState;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_FUNC; });
/* harmony export (immutable) */ __webpack_exports__["g"] = isObject;
/* unused harmony export isFunction */
/* harmony export (immutable) */ __webpack_exports__["h"] = isString;
/* unused harmony export isUndefined */
/* unused harmony export isNull */
/* harmony export (immutable) */ __webpack_exports__["f"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["b"] = isArray;
/* unused harmony export entries */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isEqual; });
/* harmony export (immutable) */ __webpack_exports__["k"] = random;
/* harmony export (immutable) */ __webpack_exports__["i"] = isWeb;
/* unused harmony export getTime */
/* harmony export (immutable) */ __webpack_exports__["d"] = isDingTalk;
/* unused harmony export type */
/* harmony export (immutable) */ __webpack_exports__["j"] = promisify;
/* unused harmony export getStorage */
/* unused harmony export setStorage */
/* harmony export (immutable) */ __webpack_exports__["l"] = withTicket;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_qs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_qs__);


var EMPTY_FUNC = function () {};
function isObject(value) {
  return value !== null && typeof value === 'object';
}
function isFunction(value) {
  return typeof value === 'function';
}
function isString(value) {
  return typeof value === 'string';
}
function isUndefined(value) {
  return value === 'undefined';
}
function isNull(value) {
  return value === null;
}
function isNumber(value) {
  return typeof value === 'number';
}
function isBoolean(value) {
  return typeof value === 'boolean';
}
function isArray(value) {
  return Array.isArray ? Array.isArray(value) : Object.prototype.toString.call(value) === '[object Array]';
}
var entries = function (source) {
  return Object.entries ? Object.entries(source) : Object.keys(source).map(function (k) {
    return [k, source[k]];
  });
};
var isEqual = function (left, right) {
  if (left === right) {
    return true;
  } else if (typeof left !== typeof right || typeof left !== 'object' || Array.isArray(left) !== Array.isArray(right)) {
    return false;
  } else if (Array.isArray(left)) {
    return left.length === right.length && !left.map(function (l, index) {
      return isEqual(l, right[index]);
    }).includes(false);
  } else if (isObject(left) && isObject(right)) {
    return isEqual(entries(left), entries(right));
  }

  return false;
};
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isWeb() {
  return dd && !dd.getSystemInfoSync();
}
function getTime() {
  return +new Date();
}
function isDingTalk() {
  try {
    return dd && dd.getSystemInfoSync() || /DingTalk/i.test(window.navigator.userAgent);
  } catch (err) {
    return false;
  }
}
function type(opt) {
  return Object.prototype.toString.call(opt).slice(8, -1).toLowerCase();
}
function promisify(func, opts) {
  return new Promise(function (resolve, reject) {
    if (type(func) !== 'function') {
      return resolve(func);
    }

    func(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, opts, {
      success: function (json) {
        resolve(json);
      },
      fail: function (err) {
        reject(err);
      }
    }));
    return null;
  });
}
function getStorage(key) {
  return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!!isWeb()) return [3, 2];
          return [4, promisify(dd.getStorage, {
            key: key
          })];

        case 1:
          return [2, _a.sent().data || []];

        case 2:
          return [2, localStorage.getItem(key) || []];
      }
    });
  });
}
function setStorage(key, data) {
  return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!!isWeb()) return [3, 2];
          return [4, promisify(dd.setStorage, {
            key: key,
            data: data
          })];

        case 1:
          _a.sent();

          return [3, 3];

        case 2:
          localStorage.setItem(key, data);
          _a.label = 3;

        case 3:
          return [2];
      }
    });
  });
}
function withTicket(url, ticket) {
  if (!ticket) return url;
  var spliter = url.split('?');
  var str = spliter[1] || '';
  var query = __WEBPACK_IMPORTED_MODULE_1_qs__["stringify"](__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, __WEBPACK_IMPORTED_MODULE_1_qs__["parse"](str), {
    SSO_TICKET: ticket
  }));
  return spliter[0] + "?" + query;
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObxProperty; });
/* harmony export (immutable) */ __webpack_exports__["c"] = ensureObxProperty;
/* harmony export (immutable) */ __webpack_exports__["b"] = defineObxProperty;
/* unused harmony export getObxProperty */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_state__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__derivation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obx__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proxy__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__compare__ = __webpack_require__(76);










function getVer(obj) {
  var obx = Object(__WEBPACK_IMPORTED_MODULE_6__obx__["e" /* getObx */])(obj);
  return obx ? obx.localVer : 0;
}

var ObxProperty =
/*#__PURE__*/
function () {
  function ObxProperty(name, scope, getter, setter, value, extraGetterParams) {
    var obxFlag = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : __WEBPACK_IMPORTED_MODULE_6__obx__["a" /* ObxFlag */].DEEP;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ObxProperty);

    this.name = name;
    this.scope = scope;
    this.getter = getter;
    this.setter = setter;
    this.value = value;
    this.extraGetterParams = extraGetterParams;
    this.obxFlag = obxFlag;
    this.id = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["s" /* nextId */])();
    this.observing = [];
    this.observers = new Set();
    this.dependenciesState = __WEBPACK_IMPORTED_MODULE_3__derivation__["a" /* DerivationState */].NOT_TRACKING;
    this.lowestObserverState = __WEBPACK_IMPORTED_MODULE_3__derivation__["a" /* DerivationState */].UP_TO_DATE;
    this.isComputing = false;
    this.isRunningSetter = false;
    this.pending = false;
    this.pendingValue = null;
    this.objectVer = 0;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ObxProperty, [{
    key: "onBecomeDirty",
    value: function onBecomeDirty() {
      Object(__WEBPACK_IMPORTED_MODULE_4__observable__["g" /* propagateMaybeChanged */])(this);
    }
  }, {
    key: "onBecomeUnobserved",
    value: function onBecomeUnobserved() {
      Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["b" /* clearObserving */])(this);
    }
  }, {
    key: "onBecomeObserved",
    value: function onBecomeObserved() {}
  }, {
    key: "ifModified",
    value: function ifModified() {
      if (this.getter && Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["g" /* shouldCompute */])(this)) {
        Object(__WEBPACK_IMPORTED_MODULE_4__observable__["l" /* startBatch */])();

        if (this.computeValue()) {
          Object(__WEBPACK_IMPORTED_MODULE_4__observable__["e" /* propagateChangeConfirmed */])(this);
          this.objectVer = getVer(this.value);
        }

        Object(__WEBPACK_IMPORTED_MODULE_4__observable__["c" /* endBatch */])();
      } else if (this.pending) {
        this.pending = false;
        var oldValue = this.value;
        this.value = this.pendingValue;

        if (!this.is(this.value, oldValue)) {
          Object(__WEBPACK_IMPORTED_MODULE_4__observable__["e" /* propagateChangeConfirmed */])(this);
          this.objectVer = getVer(this.value);
        }
      }
    }
  }, {
    key: "is",
    value: function is(oldValue, value) {
      return Object(__WEBPACK_IMPORTED_MODULE_8__compare__["a" /* is */])(oldValue, value) && getVer(value) === this.objectVer;
    }
  }, {
    key: "get",
    value: function get() {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["m" /* invariant */])(!this.isComputing, "Cycle detected in computation ".concat(this.name), this.getter);
      Object(__WEBPACK_IMPORTED_MODULE_4__observable__["j" /* reportObserved */])(this);
      this.ifModified();
      var result = this.value;

      if (Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["c" /* isCaughtException */])(result)) {
        throw result.cause;
      }

      Object(__WEBPACK_IMPORTED_MODULE_4__observable__["k" /* reportPropValue */])(result, this.obxFlag);
      return Object(__WEBPACK_IMPORTED_MODULE_7__proxy__["d" /* getProxiedValue */])(result);
    }
  }, {
    key: "set",
    value: function set(value) {
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["m" /* invariant */])(!this.isRunningSetter, "The setter of observable value '".concat(this.name, "' is trying to update itself."));
      Object(__WEBPACK_IMPORTED_MODULE_5__utils__["m" /* invariant */])(Boolean(this.setter || !this.getter), "Cannot assign a new value to readonly value '".concat(this.name, "'."));
      var oldValue = this.pending ? this.pendingValue : this.value;

      if (!Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["c" /* isCaughtException */])(oldValue) && this.is(oldValue, value)) {
        return;
      }

      if (!this.setter) {
        this.pendingValue = value;

        if (!this.pending) {
          this.pending = true;
          Object(__WEBPACK_IMPORTED_MODULE_4__observable__["g" /* propagateMaybeChanged */])(this);
        }
      } else {
        this.isRunningSetter = true;
        var prevTracking = Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["j" /* untrackedStart */])();

        try {
          this.setter.call(this.scope, value);
        } finally {
          Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["i" /* untrackedEnd */])(prevTracking);
        }

        this.isRunningSetter = false;
        Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["f" /* setDerivationDirty */])(this);
      }
    }
  }, {
    key: "computeValue",
    value: function computeValue() {
      var oldValue = this.value;
      this.isComputing = true;
      __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].computationDepth++;
      this.value = Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["e" /* runDerivedFunction */])(this, this.getter, this.scope, this.extraGetterParams);
      __WEBPACK_IMPORTED_MODULE_2__global_state__["a" /* globalState */].computationDepth--;
      this.isComputing = false;
      return Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["c" /* isCaughtException */])(oldValue) || Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["c" /* isCaughtException */])(this.value) || !this.is(this.value, oldValue);
    }
  }]);

  return ObxProperty;
}();



function isObxProperty(descriptor) {
  if (!descriptor || !descriptor.get) {
    return false;
  }

  return descriptor.get[__WEBPACK_IMPORTED_MODULE_6__obx__["b" /* SYMBOL_OBX */]] ? true : false;
}

function ensureObxProperty(obj, prop) {
  var obxFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_6__obx__["a" /* ObxFlag */].DEEP;
  var descriptor = Object.getOwnPropertyDescriptor(obj, prop);

  if (!descriptor || isObxProperty(descriptor)) {
    return;
  }

  defineObxProperty(obj, prop, undefined, descriptor, obxFlag);
}
function defineObxProperty(obj, key, val, descriptor) {
  var obxFlag = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : __WEBPACK_IMPORTED_MODULE_6__obx__["a" /* ObxFlag */].DEEP;

  if (!descriptor) {
    descriptor = Object.getOwnPropertyDescriptor(obj, key);
  }

  if (descriptor && descriptor.configurable === false) {
    return;
  }

  if (val == null && descriptor && Object(__WEBPACK_IMPORTED_MODULE_5__utils__["k" /* hasOwnProperty */])(descriptor, 'value')) {
    val = descriptor.value;
  }

  var getter = descriptor && descriptor.get;
  var setter = descriptor && descriptor.set;
  var property = new ObxProperty(String(key), obj, getter, setter, val, undefined, obxFlag);

  var get = function get() {
    return property.get();
  };

  get[__WEBPACK_IMPORTED_MODULE_6__obx__["b" /* SYMBOL_OBX */]] = property;
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: get,
    set: function set(newVal) {
      return property.set(newVal);
    }
  });
}
function getObxProperty(obj, key) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, key);

  if (!descriptor || !descriptor.get) {
    return null;
  }

  return descriptor.get[__WEBPACK_IMPORTED_MODULE_6__obx__["b" /* SYMBOL_OBX */]];
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SYMBOL_PROXY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SYMBOL_RAW; });
/* harmony export (immutable) */ __webpack_exports__["e"] = isProxied;
/* unused harmony export getProxy */
/* unused harmony export setProxy */
/* harmony export (immutable) */ __webpack_exports__["d"] = getProxiedValue;
/* unused harmony export getRawValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportProxy; });
/* harmony export (immutable) */ __webpack_exports__["c"] = createProxy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);

var SYMBOL_PROXY = Symbol('__proxy');
var SYMBOL_RAW = Symbol('__raw');
function isProxied(target) {
  return SYMBOL_PROXY in target;
}
function getProxy(target) {
  return target[SYMBOL_PROXY];
}
function setProxy(target, proxy) {
  Object(__WEBPACK_IMPORTED_MODULE_0__utils__["f" /* addHiddenFinalProp */])(target, SYMBOL_PROXY, proxy);
}
function getProxiedValue(target) {
  return target && getProxy(target) || target;
}
function getRawValue(target) {
  return target && target[SYMBOL_RAW] || target;
}
var supportProxy = 'Proxy' in global;
function createProxy(target, taps) {
  if (isProxied(target)) {
    return getProxy(target);
  }

  var proxy = new Proxy(target, taps);
  setProxy(target, proxy);
  return proxy;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(22)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return stripLeadingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return stripBasename; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return stripTrailingSlash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return parsePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createPath; });
var addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};
var stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};
var hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};
var stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};
var stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};
var parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};
var createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;
  return path;
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(3);

var superPropBase = __webpack_require__(71);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["c"] = XFor;
/* harmony export (immutable) */ __webpack_exports__["b"] = X;
/* harmony export (immutable) */ __webpack_exports__["h"] = xId;
/* harmony export (immutable) */ __webpack_exports__["g"] = xAssign;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V; });
/* harmony export (immutable) */ __webpack_exports__["i"] = xModifiers;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return globalHelpers; });
/* harmony export (immutable) */ __webpack_exports__["e"] = reportError;
/* harmony export (immutable) */ __webpack_exports__["f"] = runApp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_obx_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__x__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_link__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_nav_link__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__router_route__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_redirect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router_root__ = __webpack_require__(92);













function iterMap(data, fn) {
  data.forEach(fn);
}

function iterSet(data, fn) {
  var index = 0;
  data.forEach(function (item) {
    fn(item, String(index++));
  });
}

function XFor(data, delegate) {
  if (Array.isArray(data)) {
    return data.map(function (item, index) {
      return delegate(String(index), item);
    });
  }

  if (data) {
    if (data instanceof Set || data instanceof Map) {
      var frags = [];

      var fn = function fn(item, key) {
        frags.push(delegate(key, item));
      };

      data instanceof Map ? iterMap(data, fn) : iterSet(data, fn);
      return frags;
    }

    return Object.keys(data).map(function (key) {
      return delegate(key, data[key]);
    });
  }

  return null;
}
function X(area, render) {
  if (area.isVirtual) {
    return render(area);
  }

  return Object(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_5__x__["a" /* default */], {
    key: area.key,
    area: area,
    children: render
  });
}
function xId(obj, defaultKey) {
  return String(obj && obj.$id || defaultKey);
}

function isNativeEvent(e) {
  if (e && e.nativeEvent && e.target) {
    return true;
  }

  return false;
}

function xAssign(setter, getter, data) {
  if (!isNativeEvent(data)) {
    setter(data);
    return;
  }

  var target = data.target;

  if (target.nodeName === 'INPUT') {
    if (target.type === 'radio') {
      if (target.checked) {
        setter(target.value);
      }
    } else if (target.type === 'checkbox') {
      var _data = getter();

      if (Array.isArray(_data)) {
        if (target.checked) {
          _data.push(target.value);
        } else {
          var l = _data.length;

          while (l-- >= 0) {
            if (Object(__WEBPACK_IMPORTED_MODULE_4__core_obx_utils__["q" /* looseEqual */])(_data[l], target.value)) {
              _data.splice(l, 1);
            }
          }
        }

        setter(_data);
      } else {
        setter(target.checked);
      }
    } else {
      setter(target.value);
    }
  } else if (target.nodeName === 'SELECT') {
    var _data2 = Array.prototype.filter.call(target.options, function (o) {
      return o.selected;
    }).map(function (o) {
      return o.value;
    });

    setter(target.multiple ? _data2 : _data2[0]);
  } else {
    setter(target.value);
  }
}

function notFound(type) {
  return function () {
    return Object(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"])('div', null, "Component \"".concat(type, "\" Not Found."));
  };
}

function getComponent(maps, name) {
  var ns = name.split('.');
  var key = ns.shift();

  if (!Object(__WEBPACK_IMPORTED_MODULE_4__core_obx_utils__["k" /* hasOwnProperty */])(maps, key)) {
    return null;
  }

  var component = maps[key];

  while (ns.length > 0) {
    key = ns.shift();
    component = component[key];

    if (!component) {
      return notFound(name);
    }
  }

  return component;
}

function create(type, props, children) {
  if (!children || children.length < 1) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"])(type, props);
  }

  return __WEBPACK_IMPORTED_MODULE_3_react__["createElement"].apply(void 0, [type, props].concat(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_toConsumableArray___default()(children)));
}

var V = function V(type, props, children) {
  return create(V.get(type), props, children);
};

function register(maps, typeOrMaps, Component) {
  if (typeof typeOrMaps === 'string' && Component) {
    maps[typeOrMaps] = Component;
  } else if (Object(__WEBPACK_IMPORTED_MODULE_4__core_obx_utils__["n" /* isObject */])(typeOrMaps)) {
    Object.keys(typeOrMaps).forEach(function (key) {
      maps[key] = typeOrMaps[key];
    });
  }
}

function wrapperWith(P, maps) {
  var R = function R(type, props, children) {
    return create(R.get(type), props, children);
  };

  R.get = function (type) {
    if (typeof type === 'string') {
      var temp = getComponent(maps, type);

      if (temp) {
        return temp;
      }
    }

    return P.get(type);
  };

  R.wrapperWith = function (xmaps) {
    return wrapperWith(R, xmaps);
  };

  R.register = function (type, Component) {
    return register(maps, type, Component);
  };

  return R;
}

var globalMaps = {};
var internalMaps = {
  Fragment: __WEBPACK_IMPORTED_MODULE_3_react__["Fragment"],
  Link: __WEBPACK_IMPORTED_MODULE_6__router_link__["a" /* default */],
  NavLink: __WEBPACK_IMPORTED_MODULE_7__router_nav_link__["a" /* default */],
  Route: __WEBPACK_IMPORTED_MODULE_8__router_route__["a" /* default */],
  Redirect: __WEBPACK_IMPORTED_MODULE_9__router_redirect__["a" /* default */]
};

V.get = function (type) {
  if (typeof type === 'string') {
    var temp = getComponent(globalMaps, type);

    if (temp) {
      return temp;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_4__core_obx_utils__["k" /* hasOwnProperty */])(internalMaps, type)) {
      return internalMaps[type];
    }

    if (true) {
      if (/^(A-Z)/.test(type)) {
        Object(__WEBPACK_IMPORTED_MODULE_4__core_obx_utils__["i" /* fail */])("Component \"type\" not registered.");
      }
    }
  }

  return type;
};

V.register = function (typeOrMaps, Component) {
  return register(globalMaps, typeOrMaps, Component);
};

V.wrapperWith = function (maps) {
  return wrapperWith(V, maps);
};

var ModifiersMap = {
  stop: function stop(e) {
    e.stopPropagation();
  },
  prevent: function prevent(e) {
    e.preventDefault();
  },
  enter: function enter(e) {
    if (e.keyCode !== 13) {
      return false;
    }
  },
  ctrl: function ctrl(e) {
    if (!e.ctrlKey) {
      return false;
    }
  },
  alt: function alt(e) {
    if (!e.altKey) {
      return false;
    }
  },
  shift: function shift(e) {
    if (!e.shiftKey) {
      return false;
    }
  },
  meta: function meta(e) {
    if (!e.metaKey) {
      return false;
    }
  },
  tab: function tab(e) {
    if (e.keyCode !== 9) {
      return false;
    }
  },
  delete: function _delete(e) {
    // 'Backspace', 'Delete'
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      return false;
    }
  },
  esc: function esc(e) {
    if (e.keyCode !== 27) {
      return false;
    }
  },
  space: function space(e) {
    if (e.keyCode !== 32) {
      return false;
    }
  },
  up: function up(e) {
    if (e.keyCode !== 38) {
      return false;
    }
  },
  down: function down(e) {
    if (e.keyCode !== 40) {
      return false;
    }
  },
  left: function left(e) {
    if (e.keyCode !== 37) {
      return false;
    }
  },
  right: function right(e) {
    if (e.keyCode !== 39) {
      return false;
    }
  }
};
function xModifiers(modifiers) {
  var modifierQueue = modifiers.map(function (modifier) {
    return ModifiersMap[modifier];
  }).filter(Boolean);
  return function (e) {
    if (e && e.nativeEvent) {
      var brk = modifierQueue.some(function (fn) {
        return fn(e) === false;
      });

      if (brk) {
        return false;
      }
    }
  };
}
var globalHelpers = {};
function reportError(e) {
  // TODO refactor
  var _ref = global,
      AliMonitor = _ref.AliMonitor;

  if (AliMonitor) {
    AliMonitor.reportError(typeof e === 'string' ? new Error(e) : e);
  }
}
function runApp(AppComponent) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // init history
  __WEBPACK_IMPORTED_MODULE_10__navigator__["a" /* default */].init(config.history);

  if (config.globalComponents) {
    register(globalMaps, config.globalComponents);
  }

  if (config.globalHelpers) {
    Object(__WEBPACK_IMPORTED_MODULE_4__core_obx_utils__["t" /* objectAssign */])(globalHelpers, config.globalHelpers);
  }

  var containerId = config.containerId || 'app';
  var container = document.getElementById(containerId);

  if (!container) {
    container = document.createElement('div');
    document.body.appendChild(container);
    container.id = containerId;
  }

  Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["render"])(Object(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_11__router_root__["a" /* default */], null, function (props) {
    return Object(__WEBPACK_IMPORTED_MODULE_3_react__["createElement"])(AppComponent, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, props, {
      key: 'appRoot'
    }));
  }), container);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(22)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function () {};

if (true) {
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);

    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });

      if (typeof console !== 'undefined') {
        console.error(message);
      }

      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(21);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};




var createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};
var locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && Object(__WEBPACK_IMPORTED_MODULE_1_value_equal__["a" /* default */])(a.state, b.state);
};

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navigator__ = __webpack_require__(8);





var _createContext = Object(__WEBPACK_IMPORTED_MODULE_2_react__["createContext"])({}),
    Provider = _createContext.Provider,
    Consumer = _createContext.Consumer;

var RouteContext =
/*#__PURE__*/
function () {
  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(RouteContext, [{
    key: "history",
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_3__navigator__["a" /* default */].history;
    }
  }, {
    key: "location",
    get: function get() {
      return this.history.location;
    }
  }]);

  function RouteContext(match) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, RouteContext);

    this.match = match;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(RouteContext, [{
    key: "setMatch",
    value: function setMatch(match) {
      this.match = match;
    }
  }]);

  return RouteContext;
}();

RouteContext.Provider = Provider;
RouteContext.Consumer = Consumer;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = optionWarn;
function optionWarn(type, option) {
  console.warn("Unknown option for " + type + " generator, receiving type: " + typeof option + " value:", option);
}

/***/ }),
/* 29 */
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Area; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_listener__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observable_view__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obx_reaction__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__obx_derivation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ghost_area__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__virtual_area__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__obx_observable_observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__obx_observable_obx__ = __webpack_require__(7);













var Area =
/*#__PURE__*/
function () {
  function Area(scope, config) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Area);

    this.scope = scope;
    this.config = config;
    this.key = void 0;
    this.priority = void 0;
    this.sleepMarked = false;
    this.sleeping = false;
    this.revision = -1;
    this.areasMap = {};
    this.areas = [];
    this.viewsData = {};
    this.exprsData = {};
    this.views = {};
    this.exprs = {};
    this.reaction = void 0;
    this.notify = false;
    this.running = false;
    this.priority = config.priority || 0;
    this.key = config.key || Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["s" /* nextId */])();
    var views = (config.views || []).map(function (viewConfig) {
      var view = new __WEBPACK_IMPORTED_MODULE_5__observable_view__["a" /* default */](_this, viewConfig);
      _this.views[view.key] = view;
      return view;
    });
    var exprs = (config.exprs || []).map(function (exprConfig) {
      var expr = new __WEBPACK_IMPORTED_MODULE_2__prop__["a" /* default */](_this, exprConfig);
      _this.exprs[expr.key] = expr;
      return expr;
    });
    this.reaction = new __WEBPACK_IMPORTED_MODULE_6__obx_reaction__["a" /* Reaction */]("Area@".concat(this.key), function () {
      _this.revision += 1;
      _this.running = true;
      _this.viewsData = {};
      _this.exprsData = {};
      views.forEach(function (view) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(_this.viewsData, view.key)) {
          _this.viewsData[view.key] = view.props;
        }
      });
      exprs.forEach(function (expr) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(_this.exprsData, expr.key)) {
          _this.exprsData[expr.key] = expr.getData();
        }
      });

      if (Object(__WEBPACK_IMPORTED_MODULE_11__obx_observable_obx__["f" /* hasObx */])(_this.scope)) {
        var obx = Object(__WEBPACK_IMPORTED_MODULE_11__obx_observable_obx__["e" /* getObx */])(_this.scope);
        Object(__WEBPACK_IMPORTED_MODULE_10__obx_observable_observable__["j" /* reportObserved */])(obx);
      }

      _this.running = false;

      if (_this.notify) {
        Object(__WEBPACK_IMPORTED_MODULE_4__obx_listener__["a" /* notifyListeners */])(_this);
      } else {
        _this.notify = true;
      }
    }, this.priority, config.throttle || 10);
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Area, [{
    key: "replaceScope",
    value: function replaceScope(scope) {
      this.scope = scope;
      this.notify = false;
      Object(__WEBPACK_IMPORTED_MODULE_7__obx_derivation__["d" /* resetDerivationState */])(this.reaction);
    }
  }, {
    key: "p",
    value: function p(name) {
      if (this.running) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.viewsData, name) && Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.views, name)) {
          this.viewsData[name] = this.views[name].props;
        }
      } else {
        this.checkRun();
      }

      return this.viewsData[name];
    }
  }, {
    key: "e",
    value: function e(name) {
      if (this.running) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.exprsData, name) && Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.exprs, name)) {
          this.exprsData[name] = this.exprs[name].getData();
        }
      } else {
        this.checkRun();
      }

      return this.exprsData[name];
    }
  }, {
    key: "c",
    value: function c(config) {
      var _this2 = this;

      var ghost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (config.key === this.key) {
        return this;
      }

      var area;

      if (Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.areasMap, config.key)) {
        area = this.areasMap[config.key];

        if (area.scope !== this.scope) {
          area.replaceScope(this.scope);
        }

        return area;
      }

      var notifier = function notifier(immediately) {
        if (immediately) {
          _this2.runImmediately();
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_7__obx_derivation__["f" /* setDerivationDirty */])(_this2.reaction);
        }
      };

      if (ghost) {
        area = new __WEBPACK_IMPORTED_MODULE_8__ghost_area__["a" /* default */](this.scope, config, notifier);
      } else if (config.virtual) {
        area = new __WEBPACK_IMPORTED_MODULE_9__virtual_area__["a" /* default */](this.scope, config, notifier);
      } else {
        area = new Area(this.scope, config);
      }

      this.areas.push(area);
      this.areasMap[area.key] = area;
      return area;
    }
  }, {
    key: "isDirty",
    value: function isDirty() {
      return this.reaction.isDirty();
    }
  }, {
    key: "getRevision",
    value: function getRevision() {
      this.checkRun();
      return this.revision;
    }
  }, {
    key: "mark",
    value: function mark(sleep) {
      this.sleepMarked = sleep;

      if (sleep === false) {
        this.wakeup();
      }
    }
  }, {
    key: "sleep",
    value: function sleep() {
      if (this.sleeping) {
        return;
      }

      this.sleepMarked = false;
      this.revision = -1;
      this.sleeping = true;
      this.reaction.sleep();
      this.areas.forEach(function (area) {
        return area.sleep();
      });
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      if (!this.sleeping) {
        return;
      }

      this.sleeping = false;
      this.reaction.wakeup();
      this.areas.forEach(function (area) {
        return area.wakeup();
      });
    }
  }, {
    key: "observe",
    value: function observe(fn) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__obx_listener__["b" /* registerListener */])(this, fn);
    }
  }, {
    key: "runImmediately",
    value: function runImmediately() {
      if (this.isDirty()) {
        this.reaction.run();
      }
    }
  }, {
    key: "checkRun",
    value: function checkRun() {
      if (this.revision < 0 || this.isDirty()) {
        this.notify = false;
        this.reaction.scheduleRun();
        this.notify = true;
      }
    }
  }]);

  return Area;
}();



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obx_observable_obx_property__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx_derivation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_observable_obx__ = __webpack_require__(7);






var Prop =
/*#__PURE__*/
function () {
  function Prop(area, config, view) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Prop);

    this.area = area;
    this.key = void 0;
    this.spread = false;
    this.data = void 0;
    this.reactiveData = null;
    this.key = config.key;

    if (config.expr) {
      this.reactiveData = new __WEBPACK_IMPORTED_MODULE_2__obx_observable_obx_property__["a" /* default */](config.key, area.scope, config.expr, undefined, config.value, [area, view], __WEBPACK_IMPORTED_MODULE_4__obx_observable_obx__["a" /* ObxFlag */].REF);
    } else {
      this.data = config.value;
    }

    this.spread = Boolean(config.spread);
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Prop, [{
    key: "getData",
    value: function getData() {
      if (this.reactiveData) {
        if (this.reactiveData.scope !== this.area.scope) {
          this.reactiveData.scope = this.area.scope;
          Object(__WEBPACK_IMPORTED_MODULE_3__obx_derivation__["d" /* resetDerivationState */])(this.reactiveData);
        }

        return this.reactiveData.get();
      } else {
        return this.data;
      }
    }
  }, {
    key: "isSpread",
    value: function isSpread() {
      return this.spread;
    }
  }]);

  return Prop;
}();



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nextTick;
var callbacks = [];
var pending = false;

function flush() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = copies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var fn = _step.value;
      fn();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

var timerFlush;

if (false) {
  timerFlush = function timerFlush() {
    return process.nextTick(flush);
  };
} else if (typeof Promise === 'function') {
  // tslint:disable-line
  var timer = Promise.resolve(); // tslint:disable-line

  timerFlush = function timerFlush() {
    timer.then(flush); // if (isIOS) setTimeout(noop)
  };
} else if (typeof MessageChannel === 'function') {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flush;

  timerFlush = function timerFlush() {
    port.postMessage(1);
  };
} else {
  timerFlush = function timerFlush() {
    setTimeout(flush, 0);
  };
}

function nextTick(callback) {
  var _resovle;

  callbacks.push(function () {
    callback && callback();

    _resovle();
  });

  if (!pending) {
    pending = true;
    timerFlush();
  }

  return new Promise(function (resolve) {
    _resovle = resolve;
  });
}

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_history__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navigator__ = __webpack_require__(8);











function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var Link =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Link, _Component);

  function Link() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Link);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Link)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.handleClick = function (event) {
      if (_this.props.onClick) {
        _this.props.onClick(event);
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore everything but left clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          var _this$props = _this.props,
              _replace = _this$props.replace,
              _to = _this$props.to;
          var history = __WEBPACK_IMPORTED_MODULE_9__navigator__["a" /* default */].history;

          if (history) {
            if (_replace) {
              history.replace(_to);
            } else {
              history.push(_to);
            }
          }
        }
    };

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Link, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          replace = _this$props2.replace,
          to = _this$props2.to,
          rest = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props2, ["replace", "to"]); // eslint-disable-line no-unused-vars


      var history = __WEBPACK_IMPORTED_MODULE_9__navigator__["a" /* default */].history;
      var location = typeof to === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_8_history__["c" /* createLocation */])(to, null, undefined, history.location) : to;
      var href = history.createHref(location);
      return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])('a', __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, rest, {
        onClick: this.handleClick,
        href: href
      }));
    }
  }]);

  return Link;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

Link.displayName = 'Link';
Link.defaultProps = {
  replace: false
};


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);


var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

/* harmony default export */ __webpack_exports__["a"] = (createTransitionManager);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = request;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return makeRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return makeDDHttpRequest; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_ResponseError__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_ticket__ = __webpack_require__(119);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2_axios___default.a; });
var _this = this;







var defaultResponseAdaptor = function (data) {
  if (data.success) {
    return Promise.resolve(data.content);
  } else {
    return Promise.reject(new __WEBPACK_IMPORTED_MODULE_1__core_ResponseError__["b" /* ShimmerResponseError */](data.errorMsg, data.errorCode));
  }
};

var callFunctionNumber = 0;

var ddResponseAdaptor = function (data, service, config) {
  return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](_this, void 0, void 0, function () {
    var error, access_token, url;
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!service.env || !service.appName) {
            return [2, Promise.reject("env or appName not null")];
          }

          if (!data.hasError) return [3, 3];
          error = data.errors[0];
          if (!(error.code === '302')) return [3, 2];
          return [4, Object(__WEBPACK_IMPORTED_MODULE_4__utils_ticket__["a" /* default */])({
            env: service.env,
            appName: service.appName
          })];

        case 1:
          access_token = _a.sent().access_token;
          url = config.url;
          url = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* withTicket */])(url, access_token);
          config.url = url;
          callFunctionNumber++;

          if (callFunctionNumber > 1) {
            callFunctionNumber = 0;
            return [2, Promise.reject("以尝试调用一次失败， 不再重新调用")];
          }

          service(config);
          _a.label = 2;

        case 2:
          return [2, Promise.reject(new __WEBPACK_IMPORTED_MODULE_1__core_ResponseError__["b" /* ShimmerResponseError */](error.msg, error.code))];

        case 3:
          return [2, Promise.resolve(data.content)];
      }
    });
  });
};

function request(config) {
  if (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["d" /* isDingTalk */])()) {
    return makeDDHttpRequest(config).then(function (r) {
      return r.data;
    }).then(function (data) {
      return ddResponseAdaptor(data, request, config);
    });
  }

  return __WEBPACK_IMPORTED_MODULE_2_axios___default()(config).then(function (r) {
    return r.data;
  }).then(defaultResponseAdaptor);
}
var makeRequest = function (config) {
  return __WEBPACK_IMPORTED_MODULE_2_axios___default()(config);
};
var makeDDHttpRequest = function (config) {
  return new Promise(function (resolve, reject) {
    dd.httpRequest(__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, config, {
      success: resolve,
      fail: reject
    }));
  });
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ShimmerResponseError; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(14);

var CODE = 'SHIMMER_RESPONSE_ERR';

var ShimmerResponseError = function (_super) {
  __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __extends */](ShimmerResponseError, _super);

  function ShimmerResponseError(message, errorCode) {
    var _this = _super.call(this, message) || this;

    _this.errorCode = errorCode;
    _this.code = CODE;
    return _this;
  }

  return ShimmerResponseError;
}(Error);



/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

var normalizeHeaderName = __webpack_require__(101);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;

  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(60);
  } else if (true) {
    // For node use HTTP adapter
    adapter = __webpack_require__(60);
  }

  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),
  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
      return data;
    }

    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }

    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }

    return data;
  }],
  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) {
        /* Ignore */
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};
defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createRandom; });
/* harmony export (immutable) */ __webpack_exports__["a"] = basicGenerator;
var chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var createRandom = function (length) {
  return new Array(length).fill(0).map(function (_, index) {
    return chars[index];
  }).join('');
};
function basicGenerator(option) {
  var randomLength = Math.floor(Math.random() * 5 + 1);

  if (!option) {
    return createRandom(randomLength);
  }

  var length = option.length || null;
  var _a = option,
      min = _a.min,
      max = _a.max;

  if (length) {
    return createRandom(length);
  }

  if (min && max) {
    var length_1 = max - min + 1;
    return createRandom(length_1);
  }

  return createRandom(randomLength);
}

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scope__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__area__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__obx_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__obx_observable_obx_property__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__lib__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__obx_observable_obx__ = __webpack_require__(7);
















var ViewController =
/*#__PURE__*/
function (_BaseScope) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(ViewController, _BaseScope);

  function ViewController(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, ViewController);

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(ViewController).call(this));
    _this.$parent = void 0;
    _this.$props = {};
    _this.__area = null;
    Object(__WEBPACK_IMPORTED_MODULE_12__obx_observable_obx_property__["b" /* defineObxProperty */])(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), '$props', props, {}, __WEBPACK_IMPORTED_MODULE_14__obx_observable_obx__["a" /* ObxFlag */].REF);
    Object(__WEBPACK_IMPORTED_MODULE_12__obx_observable_obx_property__["b" /* defineObxProperty */])(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(__WEBPACK_IMPORTED_MODULE_8__babel_runtime_helpers_assertThisInitialized___default()(_this)), '$refs', {}, {}, __WEBPACK_IMPORTED_MODULE_14__obx_observable_obx__["a" /* ObxFlag */].SHALLOW);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(ViewController, [{
    key: "__m",
    value: function __m(config) {
      if (!this.__area) {
        this.__area = new __WEBPACK_IMPORTED_MODULE_10__area__["a" /* default */](this, config);
      }

      return this.__area;
    }
  }, {
    key: "$init",
    value: function $init(params) {// 初始化, times: 1
    }
  }, {
    key: "$receive",
    value: function $receive(params) {// 再次进入页面，times: 0+
    }
  }, {
    key: "$enter",
    value: function $enter(firstEnter, params) {
      // 页面进入时（初始化 + 再次进入页面）, times: 1+
      if (firstEnter) {
        this.$init(params);
      } else {
        this.$receive(params);
      }
    }
  }, {
    key: "$didMount",
    value: function $didMount() {// 页面视图挂载 times: 1
    }
  }, {
    key: "$didCatch",
    value: function $didCatch(e) {// 页面渲染错误 times: 0+
    }
  }, {
    key: "$destroy",
    value: function $destroy() {// 页面卸载 times: 1
    }
  }, {
    key: "$action",
    value: function $action(actions, area) {
      var _this2 = this;

      if (!Array.isArray(actions)) {
        actions = [actions];
      }

      var actionList = parseActions(actions, this);
      return function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return doAction(actionList, _this2, area.scope, args);
      };
    }
  }, {
    key: "$",
    value: function $(key) {
      var ret = this.$get(key);

      if (ret !== undefined) {
        if (typeof ret === 'function') {
          return ret.bind(this);
        }

        return ret;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["k" /* hasOwnProperty */])(this.$props, key)) {
        return this.$props[key];
      }

      var helpers = this.__vxHelpers;

      if (Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["k" /* hasOwnProperty */])(helpers, key)) {
        return helpers[key];
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["k" /* hasOwnProperty */])(__WEBPACK_IMPORTED_MODULE_13__lib__["n" /* globalHelpers */], key)) {
        return __WEBPACK_IMPORTED_MODULE_13__lib__["n" /* globalHelpers */][key];
      }

      if (global) {
        return global[key];
      }
    }
  }, {
    key: "$get",
    value: function $get(key) {
      Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["l" /* initializeInstance */])(this);
      return __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(ViewController.prototype), "$get", this).call(this, key);
    }
  }, {
    key: "$set",
    value: function $set(key, val) {
      Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["l" /* initializeInstance */])(this);
      return __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(ViewController.prototype), "$set", this).call(this, key, val);
    }
  }, {
    key: "$del",
    value: function $del(key) {
      Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["l" /* initializeInstance */])(this);
      return __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(ViewController.prototype), "$del", this).call(this, key);
    }
  }, {
    key: "$extend",
    value: function $extend(properties) {
      Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["l" /* initializeInstance */])(this);
      return __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(ViewController.prototype), "$extend", this).call(this, properties);
    }
  }, {
    key: "$derive",
    value: function $derive(data) {
      Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["l" /* initializeInstance */])(this);
      return __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(ViewController.prototype), "$derive", this).call(this, data);
    }
  }]);

  return ViewController;
}(__WEBPACK_IMPORTED_MODULE_9__scope__["a" /* BaseScope */]);



function parseActions(actions, context) {
  return actions.map(function (action) {
    if (!action) {
      return null;
    }

    if (Array.isArray(action)) {
      var subActions = parseActions(action, context);
      return {
        name: 'ActionGroup',
        fn: function fn() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          var scope = args.pop();
          return doAction(subActions, context, scope, args);
        }
      };
    }

    var t = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof___default()(action);

    if (t === 'function') {
      return {
        name: 'anonymous',
        fn: action
      };
    } // recore-loader not support yet


    if (t === 'string' && typeof context[action] === 'function') {
      if (action in context) {
        return {
          name: action,
          fn: context[action].bind(context)
        };
      }

      return null;
    } // recore-loader not support yet


    if (action.name && typeof context[action.name] === 'function') {
      return {
        name: action.name,
        fn: context[action.name].bind(context),
        params: action.params
      };
    }

    return null;
  }).filter(Boolean);
}

function derive(parent, data) {
  Object(__WEBPACK_IMPORTED_MODULE_11__obx_utils__["v" /* setPrototypeOf */])(data, parent);
  return data;
}

function doAction(queue, context, scope, args) {
  if (!queue) {
    return;
  }

  queue = queue.slice(0);

  var _resolve;

  var i = new Promise(function (resolve) {
    _resolve = resolve;
  });

  var fail = function fail(e) {
    if (false) {
      reportError(e);
    } else {
      console.error(e); // tslint:disable-line
    }
  };

  var next = function next(previousResult) {
    var item = queue.shift();

    if (!item) {
      return _resolve();
    }

    var res;

    try {
      var actionContextData = derive(scope, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
        previousResult: previousResult
      }, item.params));
      res = item.fn.apply(context, args.concat([actionContextData]));
    } catch (e) {
      return fail(e);
    }

    if (res === false) {
      // interrupt
      return null;
    }

    if (res && res.then) {
      res.then(next).catch(fail);
    } else if (res instanceof Error) {
      fail(res);
    } else {
      next(res);
    }

    return null;
  };

  next();
  return i;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(22)))

/***/ }),
/* 40 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObservableView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__prop__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__obx_derivation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__obx_global_state__ = __webpack_require__(17);











function matchClassProperty(key) {
  if (key === 'class' || key === 'className') {
    return true;
  }

  if (key.slice(0, 6) === 'class.') {
    return key.slice(6);
  }

  if (key.slice(0, 10) === 'className.') {
    return key.slice(10);
  }

  return false;
}

function matchStyleProperty(key) {
  if (key === 'style') {
    return true;
  }

  if (key.slice(0, 6) === 'style.') {
    return key.slice(6);
  }

  return false;
}

var RE_EVENT = /^on[A-Z]/;

function matchEventProperty(key) {
  return RE_EVENT.test(key);
}

function combo(fns) {
  if (fns.length < 2) {
    return fns[0];
  }

  return function () {
    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    for (var i = 0, l = fns.length; i < l; i++) {
      fns[i].apply(this, rest);
    }
  };
}

function mergeEvents(maps, events, listen) {
  Object.keys(events).forEach(function (type) {
    maps[type] = listen(combo(events[type]));
  });
}

function processData(key, value, klass, styles, events, rest, listen) {
  var m = matchClassProperty(key);

  if (m) {
    if (m === true) {
      klass.push(value);
    } else {
      if (value) {
        klass.push(m);
      }
    }

    return;
  }

  m = matchStyleProperty(key);

  if (m) {
    if (m === true) {
      styles.push(value);
    } else {
      if (value !== '' && value != null) {
        styles.push(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_defineProperty___default()({}, m, value));
      }
    }

    return;
  }

  var isFn = typeof value === 'function';

  if (matchEventProperty(key) && isFn) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_4__obx_utils__["k" /* hasOwnProperty */])(events, key)) {
      events[key] = [value];
    } else {
      events[key].push(value);
    }

    return;
  }

  rest[key] = isFn ? listen(value) : value;
}

var ObservableView =
/*#__PURE__*/
function () {
  function ObservableView(area, _ref) {
    var _this = this;

    var key = _ref.key,
        name = _ref.name,
        props = _ref.props;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ObservableView);

    this.area = area;
    this.id = Object(__WEBPACK_IMPORTED_MODULE_4__obx_utils__["s" /* nextId */])();
    this.key = void 0;
    this.name = void 0;
    this.observing = [];
    this.observers = new Set();
    this.dependenciesState = __WEBPACK_IMPORTED_MODULE_7__obx_derivation__["a" /* DerivationState */].NOT_TRACKING;
    this.lowestObserverState = __WEBPACK_IMPORTED_MODULE_7__obx_derivation__["a" /* DerivationState */].UP_TO_DATE;
    this.scope = void 0;
    this.isComputing = false;
    this.computeFn = void 0;
    this.data = void 0;
    this.propsArr = [];
    this.propsMap = {};
    this.key = key;
    this.name = "".concat(name, "@").concat(this.id);
    this.propsArr = (props || []).map(function (config) {
      var prop = new __WEBPACK_IMPORTED_MODULE_5__prop__["a" /* default */](area, config, _this);

      if (!prop.isSpread()) {
        _this.propsMap[prop.key] = prop;
      }

      return prop;
    });
    this.scope = this.area.scope;

    var component = this.scope.__V.get(name);

    var v = this; // tslint:disable-line

    var listen = function listen(prop) {
      return function f() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var ret = prop.apply(this, args);
        v.refresh();
        return ret;
      };
    };

    this.computeFn = function () {
      var maps = {};
      var klass = [];
      var styles = [];
      var events = {};

      for (var i = 0, l = _this.propsArr.length; i < l; i++) {
        var prop = _this.propsArr[i];

        if (prop.isSpread()) {
          var spreadData = prop.getData();

          for (var _key3 in spreadData) {
            if (Object(__WEBPACK_IMPORTED_MODULE_4__obx_utils__["k" /* hasOwnProperty */])(spreadData, _key3)) {
              processData(_key3, spreadData[_key3], klass, styles, events, maps, listen);
            }
          }
        } else {
          processData(prop.key, prop.getData(), klass, styles, events, maps, listen);
        }
      }

      if (!maps.key) {
        maps.key = "".concat(_this.key, "-").concat(_this.id);
      }

      if (klass.length > 0) {
        maps.className = __WEBPACK_IMPORTED_MODULE_3_classnames___default()(klass);
      }

      if (styles.length > 0) {
        maps.style = __WEBPACK_IMPORTED_MODULE_4__obx_utils__["t" /* objectAssign */].apply(void 0, [{}].concat(styles));
      }

      if (maps.ref && typeof maps.ref === 'string') {
        var refKey = maps.ref;

        maps.ref = function (ref) {
          _this.scope.$set("$refs/".concat(refKey), ref);
        };
      }

      if ('x-model' in maps) {
        var data = maps['x-model'];
        delete maps['x-model'];

        if (component === 'input') {
          if (maps.type === 'radio') {
            maps.checked = Object(__WEBPACK_IMPORTED_MODULE_4__obx_utils__["q" /* looseEqual */])(maps.value, data);
          } else if (maps.type === 'checkbox') {
            if (Array.isArray(data)) {
              maps.checked = Object(__WEBPACK_IMPORTED_MODULE_4__obx_utils__["r" /* looseIndexOf */])(data, maps.value) > -1;
            } else {
              maps.checked = Object(__WEBPACK_IMPORTED_MODULE_4__obx_utils__["q" /* looseEqual */])(data, true);
            }
          } else {
            maps.value = data;
          }
        } else if (component && component.propTypes) {
          maps[component.propTypes.checked ? 'checked' : 'value'] = data;
        } else {
          maps.value = data;
        }
      }

      mergeEvents(maps, events, listen);
      return maps;
    };
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ObservableView, [{
    key: "onBecomeDirty",
    value: function onBecomeDirty() {
      Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["g" /* propagateMaybeChanged */])(this);
    }
  }, {
    key: "onBecomeUnobserved",
    value: function onBecomeUnobserved() {
      Object(__WEBPACK_IMPORTED_MODULE_7__obx_derivation__["b" /* clearObserving */])(this);
    }
  }, {
    key: "onBecomeObserved",
    value: function onBecomeObserved() {}
  }, {
    key: "ifModified",
    value: function ifModified() {
      if (this.checkRun()) {
        Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["e" /* propagateChangeConfirmed */])(this);
      }
    }
  }, {
    key: "refresh",
    value: function refresh() {
      if (Object(__WEBPACK_IMPORTED_MODULE_7__obx_derivation__["g" /* shouldCompute */])(this)) {
        this.area.runImmediately();
      }
    }
  }, {
    key: "checkRun",
    value: function checkRun() {
      if (this.scope !== this.area.scope || Object(__WEBPACK_IMPORTED_MODULE_7__obx_derivation__["g" /* shouldCompute */])(this)) {
        this.scope = this.area.scope;
        Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["l" /* startBatch */])();
        this.isComputing = true;
        __WEBPACK_IMPORTED_MODULE_8__obx_global_state__["a" /* globalState */].computationDepth++;
        this.data = Object(__WEBPACK_IMPORTED_MODULE_7__obx_derivation__["e" /* runDerivedFunction */])(this, this.computeFn);
        __WEBPACK_IMPORTED_MODULE_8__obx_global_state__["a" /* globalState */].computationDepth--;
        this.isComputing = false;
        Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["c" /* endBatch */])();
        return true;
      }

      return false;
    }
  }, {
    key: "props",
    get: function get() {
      Object(__WEBPACK_IMPORTED_MODULE_4__obx_utils__["m" /* invariant */])(!this.isComputing, "Cycle detected in computation ".concat(this.name));
      Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["j" /* reportObserved */])(this);
      this.ifModified();
      var result = this.data;

      if (Object(__WEBPACK_IMPORTED_MODULE_7__obx_derivation__["c" /* isCaughtException */])(result)) {
        throw result.cause;
      }

      return result;
    }
  }]);

  return ObservableView;
}();



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

/* global define */
(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classNames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;
      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if (typeof module !== 'undefined' && module.exports) {
    classNames.default = classNames;
    module.exports = classNames;
  } else if (true) {
    // register as 'classnames', consistent with npm package name
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return classNames;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    window.classNames = classNames;
  }
})();

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reaction; });
/* unused harmony export runReactions */
/* harmony export (immutable) */ __webpack_exports__["b"] = autorun;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__derivation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__next_tick__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observable_observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__global_state__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(2);







var Reaction =
/*#__PURE__*/
function () {
  function Reaction(name, action) {
    var priority = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var throttleWait = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 10;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Reaction);

    this.name = name;
    this.action = action;
    this.priority = priority;
    this.observing = [];
    this.dependenciesState = __WEBPACK_IMPORTED_MODULE_2__derivation__["a" /* DerivationState */].NOT_TRACKING;
    this.id = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["s" /* nextId */])();
    this.scheduled = false;
    this.scheduleRun = void 0;
    this.sleeping = false;
    this.running = false;
    this.firstRun = true;

    if (throttleWait > 0) {
      this.scheduleRun = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["x" /* throttle */])(this.run.bind(this), throttleWait);
    } else {
      this.scheduleRun = this.run.bind(this);
    }
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Reaction, [{
    key: "onBecomeDirty",
    value: function onBecomeDirty() {
      this.schedule();
    }
  }, {
    key: "schedule",
    value: function schedule() {
      if (this.scheduled || this.sleeping) {
        return;
      }

      this.scheduled = true;
      scheduleReaction(this);
    }
  }, {
    key: "isScheduled",
    value: function isScheduled() {
      return this.scheduled;
    }
  }, {
    key: "isDirty",
    value: function isDirty() {
      return Object(__WEBPACK_IMPORTED_MODULE_2__derivation__["g" /* shouldCompute */])(this);
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      // TODO warning this.running
      if (this.sleeping || this.running) {
        return;
      }

      Object(__WEBPACK_IMPORTED_MODULE_4__observable_observable__["l" /* startBatch */])();

      if (Object(__WEBPACK_IMPORTED_MODULE_2__derivation__["g" /* shouldCompute */])(this)) {
        this.running = true;
        var result = Object(__WEBPACK_IMPORTED_MODULE_2__derivation__["e" /* runDerivedFunction */])(this, this.action, {
          dispose: function dispose() {
            return _this.sleep();
          },
          firstRun: this.firstRun
        });
        this.firstRun = false;
        this.running = false; // if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause)
      }

      if (this.sleeping) {
        Object(__WEBPACK_IMPORTED_MODULE_2__derivation__["b" /* clearObserving */])(this);
      }

      Object(__WEBPACK_IMPORTED_MODULE_4__observable_observable__["c" /* endBatch */])();
    }
  }, {
    key: "sleep",
    value: function sleep() {
      if (this.sleeping) {
        return;
      }

      this.sleeping = true;

      if (!this.running) {
        Object(__WEBPACK_IMPORTED_MODULE_4__observable_observable__["l" /* startBatch */])();
        Object(__WEBPACK_IMPORTED_MODULE_2__derivation__["b" /* clearObserving */])(this);
        Object(__WEBPACK_IMPORTED_MODULE_4__observable_observable__["c" /* endBatch */])();
        deScheduleReaction(this);
      }
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      this.sleeping = false;
    }
  }]);

  return Reaction;
}();
var flushIndex = 0;
var flushWaiting = false;

function scheduleReaction(reaction) {
  var pendingReactions = __WEBPACK_IMPORTED_MODULE_5__global_state__["a" /* globalState */].pendingReactions,
      isRunningReactions = __WEBPACK_IMPORTED_MODULE_5__global_state__["a" /* globalState */].isRunningReactions;

  if (!isRunningReactions) {
    pendingReactions.push(reaction);
  } else {
    var i = pendingReactions.length - 1;

    while (i > flushIndex && pendingReactions[i].priority < reaction.priority) {
      i--;
    }

    pendingReactions.splice(i + 1, 0, reaction);
  }

  runReactions();
}

function deScheduleReaction(reaction) {
  var pendingReactions = __WEBPACK_IMPORTED_MODULE_5__global_state__["a" /* globalState */].pendingReactions,
      isRunningReactions = __WEBPACK_IMPORTED_MODULE_5__global_state__["a" /* globalState */].isRunningReactions;

  if (!isRunningReactions) {
    var i = pendingReactions.indexOf(reaction);

    if (i > -1) {
      pendingReactions.splice(i, 1);
    }
  }
}

function runReactions() {
  // queue the flush
  if (!flushWaiting) {
    flushWaiting = true;
    Object(__WEBPACK_IMPORTED_MODULE_3__next_tick__["a" /* nextTick */])(flushReactions);
  }
}
var MAX_REACTION_ITERATIONS = 100;

function flushReactions() {
  __WEBPACK_IMPORTED_MODULE_5__global_state__["a" /* globalState */].isRunningReactions = true;
  var allReactions = __WEBPACK_IMPORTED_MODULE_5__global_state__["a" /* globalState */].pendingReactions;
  var pendingLength = 0;
  var iterations = 0;
  allReactions.sort(function (a, b) {
    return b.priority - a.priority;
  });

  while (allReactions.length > pendingLength) {
    pendingLength = allReactions.length;

    if (++iterations === MAX_REACTION_ITERATIONS) {
      // tslint:disable-next-line
      console.error("Reaction doesn't converge to a stable state after ".concat(MAX_REACTION_ITERATIONS, " iterations.") + " Probably there is a cycle in the reactive function: ".concat(allReactions[0]));
      break;
    }

    for (; flushIndex < pendingLength; flushIndex++) {
      allReactions[flushIndex].scheduled = false;
      allReactions[flushIndex].scheduleRun();
    }
  }

  flushIndex = 0;
  flushWaiting = false;
  allReactions.length = 0;
  __WEBPACK_IMPORTED_MODULE_5__global_state__["a" /* globalState */].isRunningReactions = false;
}

function autorun(action) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var name = action.name || "Autorun@" + Object(__WEBPACK_IMPORTED_MODULE_6__utils__["s" /* nextId */])();

  if (typeof options === 'number') {
    options = {
      throttle: options
    };
  }

  var reaction = new Reaction(name, action, 0, options.throttle || 0);

  if (options.runFirstNow) {
    reaction.run();
  } else {
    reaction.schedule();
  }

  var disposer = function disposer() {
    reaction.sleep();
  };

  disposer.$obx = reaction;
  return disposer;
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GhostArea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_next_tick__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__virtual_area__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obx_derivation__ = __webpack_require__(12);








var GhostArea =
/*#__PURE__*/
function () {
  function GhostArea(scope, config, notifier) {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, GhostArea);

    this.scope = scope;
    this.config = config;
    this.notifier = notifier;
    this.key = void 0;
    this.sleeping = false;
    this.areas = [];
    this.areasMap = {};
    this.marked = false;
    this.key = config.key;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(GhostArea, [{
    key: "replaceScope",
    value: function replaceScope(scope) {
      this.scope = scope;
    } // 迭代派生域

  }, {
    key: "w",
    value: function w(data) {
      var _this = this;

      var key = data.$id;

      if (!this.marked) {
        this.marked = true;
        this.areas.forEach(function (item) {
          return item.mark(true);
        });
        Object(__WEBPACK_IMPORTED_MODULE_4__obx_next_tick__["a" /* nextTick */])(function () {
          _this.marked = false;

          _this.areas.forEach(function (item) {
            if (item.sleepMarked) {
              item.sleep();
            }
          });
        });
      }

      var area;

      if (Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.areasMap, key)) {
        area = this.areasMap[key];

        if (area.scope.$super !== this.scope || area.scope.$each !== data.$each) {
          var _scope = this.scope.$derive(data);

          Object(__WEBPACK_IMPORTED_MODULE_6__obx_derivation__["h" /* untracked */])(function () {
            return area.replaceScope(_scope);
          });
        }

        area.mark(false);
      } else {
        var _scope2 = this.scope.$derive(data);

        area = this.config.virtual === true ? new __WEBPACK_IMPORTED_MODULE_5__virtual_area__["a" /* default */](_scope2, this.config, this.notifier) : new __WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */](_scope2, this.config);
        this.areas.push(area);
        this.areasMap[key] = area;
      }

      area.key = key;
      return area;
    }
  }, {
    key: "sleep",
    value: function sleep() {
      if (this.sleeping) {
        return;
      }

      this.sleeping = true;
      this.areas.forEach(function (area) {
        return area.sleep();
      });
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      this.sleeping = false;
    }
  }, {
    key: "runImmediately",
    value: function runImmediately() {
      this.notifier(true);
    }
  }]);

  return GhostArea;
}();



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VirtualArea; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observable_view__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__obx_derivation__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__area__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ghost_area__ = __webpack_require__(46);










var VirtualArea =
/*#__PURE__*/
function () {
  function VirtualArea(scope, config, notifier) {
    var _this = this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, VirtualArea);

    this.scope = scope;
    this.config = config;
    this.notifier = notifier;
    this.id = Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["s" /* nextId */])();
    this.key = void 0;
    this.name = void 0;
    this.observing = [];
    this.dependenciesState = __WEBPACK_IMPORTED_MODULE_5__obx_derivation__["a" /* DerivationState */].NOT_TRACKING;
    this.isVirtual = true;
    this.sleepMarked = false;
    this.sleeping = false;
    this.running = false;
    this.areasMap = {};
    this.areas = [];
    this.viewsData = {};
    this.exprsData = {};
    this.views = {};
    this.exprs = {};
    this.reaction = void 0;
    this.key = config.key || this.id;
    this.name = "varea@".concat(this.key);
    var views = (config.views || []).map(function (viewConfig) {
      var view = new __WEBPACK_IMPORTED_MODULE_4__observable_view__["a" /* default */](_this, viewConfig);
      _this.views[view.key] = view;
      return view;
    });
    var exprs = (config.exprs || []).map(function (exprConfig) {
      var expr = new __WEBPACK_IMPORTED_MODULE_2__prop__["a" /* default */](_this, exprConfig);
      _this.exprs[expr.key] = expr;
      return expr;
    });

    this.reaction = function () {
      _this.viewsData = {};
      _this.exprsData = {};
      views.forEach(function (view) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(_this.viewsData, view.key)) {
          _this.viewsData[view.key] = view.props;
        }
      });
      exprs.forEach(function (expr) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(_this.exprsData, expr.key)) {
          _this.exprsData[expr.key] = expr.getData();
        }
      });
    };
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(VirtualArea, [{
    key: "onBecomeDirty",
    value: function onBecomeDirty() {
      this.notifier();
    }
  }, {
    key: "replaceScope",
    value: function replaceScope(scope) {
      this.scope = scope;
      Object(__WEBPACK_IMPORTED_MODULE_5__obx_derivation__["d" /* resetDerivationState */])(this);
    }
    /**
     * get view props data
     */

  }, {
    key: "p",
    value: function p(name) {
      if (this.running) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.viewsData, name) && Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.views, name)) {
          this.viewsData[name] = this.views[name].props;
        }
      } else {
        this.checkRun();
      }

      return this.viewsData[name];
    }
    /**
     * get expr data
     */

  }, {
    key: "e",
    value: function e(name) {
      if (this.running) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.exprsData, name) && Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.exprs, name)) {
          this.exprsData[name] = this.exprs[name].getData();
        }
      } else {
        this.checkRun();
      }

      return this.exprsData[name];
    }
  }, {
    key: "c",
    value: function c(config) {
      var ghost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (config.key === this.key) {
        return this;
      }

      var area;

      if (Object(__WEBPACK_IMPORTED_MODULE_3__obx_utils__["k" /* hasOwnProperty */])(this.areasMap, config.key)) {
        area = this.areasMap[config.key];

        if (area.scope !== this.scope) {
          area.replaceScope(this.scope);
        }

        return area;
      }

      if (ghost) {
        area = new __WEBPACK_IMPORTED_MODULE_8__ghost_area__["a" /* default */](this.scope, config, this.notifier);
      } else if (config.virtual) {
        area = new VirtualArea(this.scope, config, this.notifier);
      } else {
        area = new __WEBPACK_IMPORTED_MODULE_7__area__["a" /* default */](this.scope, config);
      }

      this.areasMap[area.key] = area;
      this.areas.push(area);
      return area;
    }
  }, {
    key: "mark",
    value: function mark(sleep) {
      this.sleepMarked = sleep;

      if (sleep === false) {
        this.wakeup();
      }
    }
  }, {
    key: "sleep",
    value: function sleep() {
      if (this.sleeping) {
        return;
      }

      this.sleepMarked = false;
      this.sleeping = true;
      Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["l" /* startBatch */])();
      this.areas.forEach(function (area) {
        return area.sleep();
      });

      if (!this.running) {
        Object(__WEBPACK_IMPORTED_MODULE_5__obx_derivation__["b" /* clearObserving */])(this);
      }

      Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["c" /* endBatch */])();
    }
  }, {
    key: "wakeup",
    value: function wakeup() {
      if (!this.sleeping) {
        return;
      }

      this.sleeping = false;
      this.areas.forEach(function (area) {
        return area.wakeup();
      });
    }
  }, {
    key: "runImmediately",
    value: function runImmediately() {
      this.notifier(true);
    }
  }, {
    key: "checkRun",
    value: function checkRun() {
      if (this.sleeping) {
        return;
      }

      Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["l" /* startBatch */])();

      if (Object(__WEBPACK_IMPORTED_MODULE_5__obx_derivation__["g" /* shouldCompute */])(this)) {
        this.running = true;
        Object(__WEBPACK_IMPORTED_MODULE_5__obx_derivation__["e" /* runDerivedFunction */])(this, this.reaction);
        this.running = false;
      }

      if (this.sleeping) {
        Object(__WEBPACK_IMPORTED_MODULE_5__obx_derivation__["b" /* clearObserving */])(this);
      }

      Object(__WEBPACK_IMPORTED_MODULE_6__obx_observable_observable__["c" /* endBatch */])();
    }
  }]);

  return VirtualArea;
}();



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inject__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__compose__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_1__inject__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__navigator__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_3__service__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(138);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["h"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(24);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__i18ns__ = __webpack_require__(143);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_6__i18ns__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__i18ns__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_6__i18ns__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mockable__ = __webpack_require__(144);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__mockable__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_7__mockable__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__prerendering__ = __webpack_require__(58);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_8__prerendering__["a"]; });











/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_view_controller__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__core_obx_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router_utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__navigator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_utils__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__prerendering__ = __webpack_require__(58);
















function decode(s) {
  if (s) {
    s = s.replace(/\+/g, '%20');
    s = decodeURIComponent(s);
  }

  return s;
}

function parseQuery(search) {
  var params = {};

  if (!search) {
    return params;
  }

  if (search.indexOf('?') === 0) {
    search = search.substring(1);
  }

  var ps = search.split(/[&;]/);
  var p;
  var n;
  var k;
  var v;

  for (var i = 0, l = ps.length; i < l; i++) {
    p = ps[i];
    n = p.indexOf('=');

    if (n === 0) {
      continue;
    }

    if (n < 0) {
      k = p;
      v = null;
    } else {
      k = decode(p.substring(0, n));
      v = decode(p.substring(n + 1));
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_10__core_obx_utils__["k" /* hasOwnProperty */])(params, k)) {
      if (!Array.isArray(params[k])) {
        params[k] = [params[k]];
      }

      params[k].push(v);
    } else {
      params[k] = v;
    }
  }

  return params;
}

function compose(renderFactory, ControllerType, routerView) {
  var lazyRender = null;

  if (!ControllerType) {
    ControllerType =
    /*#__PURE__*/
    function (_ViewController) {
      __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(ControllerType, _ViewController);

      function ControllerType() {
        __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default()(this, ControllerType);

        return __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(ControllerType).apply(this, arguments));
      }

      return ControllerType;
    }(__WEBPACK_IMPORTED_MODULE_9__core_view_controller__["a" /* default */]);
  }

  var proto = ControllerType.prototype;
  Object(__WEBPACK_IMPORTED_MODULE_10__core_obx_utils__["m" /* invariant */])(proto instanceof __WEBPACK_IMPORTED_MODULE_9__core_view_controller__["a" /* default */], "Controller ".concat(ControllerType.name, " must be extends \"ViewController\""));

  if (routerView) {
    Object.defineProperty(proto, '$routerView', {
      configurable: false,
      enumerable: false,
      get: function get() {
        console.warn('$routerView is deprecated, use <RouterView /> instead.');
        return routerView(this);
      }
    });
  }

  Object.defineProperty(proto, '__routerView', {
    configurable: false,
    enumerable: false,
    value: function value(props) {
      return routerView ? routerView(this, props) : null;
    }
  });

  function createController(parent, props) {
    var _V = __WEBPACK_IMPORTED_MODULE_8__utils__["a" /* V */];

    if (!lazyRender) {
      var _ControllerType = ControllerType,
          components = _ControllerType.components;

      if (components) {
        _V = __WEBPACK_IMPORTED_MODULE_8__utils__["a" /* V */].wrapperWith(components);
      }

      lazyRender = renderFactory(_V);
    }

    var controller = new ControllerType(props);
    controller.$parent = parent;
    controller.$prerendering = __WEBPACK_IMPORTED_MODULE_14__prerendering__["a" /* prerendering */];
    controller.__vxHelpers = ControllerType.helpers;
    controller.__V = _V;
    return controller;
  }

  function compileRequest(props, state) {
    var controller = state.controller;

    var match = props.match,
        location = props.location,
        parentController = props.parentController,
        defined = props.defined,
        extras = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default()(props, ["match", "location", "parentController", "defined"]);

    if (match instanceof __WEBPACK_IMPORTED_MODULE_11__router_utils__["a" /* MatchResult */]) {
      var loc = __WEBPACK_IMPORTED_MODULE_12__navigator__["a" /* default */].history.location;

      var _uri = loc.pathname + loc.search;

      if (!controller || state.uri !== _uri || !Object(__WEBPACK_IMPORTED_MODULE_13__core_utils__["a" /* shallowEqual */])(state.state, loc.state) || !Object(__WEBPACK_IMPORTED_MODULE_13__core_utils__["a" /* shallowEqual */])(state.extras, extras)) {
        var nextState = {
          uri: _uri,
          defined: defined,
          state: loc.state,
          extras: extras
        };

        var request = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, ControllerType.defaultProps, nextState, {
          path: loc.pathname,
          params: match.params,
          query: parseQuery(loc.search)
        });

        if (!controller) {
          controller = createController(parentController, request);
          controller.$enter(true, request);
          nextState.controller = controller;
        } else {
          controller.$props = request;
          controller.$enter(false, request);
        }

        return nextState;
      }
    } else if (!controller) {
      var _params = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, ControllerType.defaultProps, extras);

      controller = createController(parentController, _params);
      controller.$enter(true, _params);
      return {
        controller: controller
      };
    } else {
      var _params2 = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, ControllerType.defaultProps, extras);

      controller.$props = _params2;
      controller.$enter(false, _params2);
    }

    return null;
  }

  var View =
  /*#__PURE__*/
  function (_Component) {
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(View, _Component);

    function View() {
      var _getPrototypeOf2;

      var _this;

      __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default()(this, View);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(View)).call.apply(_getPrototypeOf2, [this].concat(args)));
      _this.state = {};
      return _this;
    }

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_createClass___default()(View, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.state.controller) {
          this.state.controller.$destroy();
        }
      }
    }, {
      key: "shouldComponentUpdate",
      value: function shouldComponentUpdate() {
        return false;
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.state.controller) {
          this.state.controller.$didMount();
        }

        if (this.props.match && this.props.match.isExact) {
          document.dispatchEvent(new Event('render-event'));
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (!this.state.controller) {
          return null;
        }

        return lazyRender(this.state.controller);
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(props, state) {
        return compileRequest(props, state);
      }
    }]);

    return View;
  }(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

  View.displayName = ControllerType.name || 'View';
  return View;
}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(88);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__createHashHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(89);
/* unused harmony reexport createMemoryHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* unused harmony reexport locationsAreEqual */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(21);
/* unused harmony reexport parsePath */
/* unused harmony reexport createPath */









/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function (condition, format, a, b, c, d, e, f) {
  if (true) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;

    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame

    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return canUseDOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getConfirmation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return supportsHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return supportsPopStateOnHashChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return supportsGoWithoutReloadUsingHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isExtraneousPopstateEvent; });
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};
var removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};
var getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

var supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
};
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

var supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

var supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

var isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__route__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__link__ = __webpack_require__(33);














var NavLink =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_7__babel_runtime_helpers_inherits___default()(NavLink, _Component);

  function NavLink() {
    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_classCallCheck___default()(this, NavLink);

    return __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_getPrototypeOf___default()(NavLink).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_createClass___default()(NavLink, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          to = _this$props.to,
          exact = _this$props.exact,
          strict = _this$props.strict,
          isActive = _this$props.isActive,
          className = _this$props.className,
          style = _this$props.style,
          activeClassName = _this$props.activeClassName,
          activeStyle = _this$props.activeStyle,
          rest = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["to", "exact", "strict", "isActive", "className", "style", "activeClassName", "activeStyle"]);

      var path = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_typeof___default()(to) === 'object' ? to.pathname : to;
      var _ref = __WEBPACK_IMPORTED_MODULE_10__navigator__["a" /* default */].history,
          location = _ref.location;
      return Object(__WEBPACK_IMPORTED_MODULE_8_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_11__route__["a" /* default */], {
        path: path || '',
        exact: exact,
        strict: strict,
        children: function children(_ref2) {
          var match = _ref2.match;
          var actived = !!(isActive ? isActive(match, location) : match);
          return Object(__WEBPACK_IMPORTED_MODULE_8_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_12__link__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
            to: to,
            className: __WEBPACK_IMPORTED_MODULE_9_classnames___default()(className, actived && activeClassName),
            style: actived ? __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, style, activeStyle) : style
          }, rest));
        }
      });
    }
  }]);

  return NavLink;
}(__WEBPACK_IMPORTED_MODULE_8_react__["Component"]);

NavLink.displayName = 'NavLink';
NavLink.defaultProps = {
  activeClassName: 'active'
};
/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__route_context__ = __webpack_require__(27);










function computeMatch(props, ctx) {
  var computedMatch = props.computedMatch,
      path = props.path,
      strict = props.strict,
      exact = props.exact,
      sensitive = props.sensitive;
  if (computedMatch) return computedMatch; // maybe already computed the match for us

  var pathname = __WEBPACK_IMPORTED_MODULE_6__navigator__["a" /* default */].history.location.pathname;
  return Object(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* matchPath */])(pathname, {
    path: path,
    strict: strict,
    exact: exact,
    sensitive: sensitive
  }, ctx.match);
}

var Route =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(Route, _Component);

  function Route(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Route);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(Route).call(this, props));
    _this.dispose = void 0;
    _this.location = void 0;
    var history = __WEBPACK_IMPORTED_MODULE_6__navigator__["a" /* default */].history;
    _this.location = history.location;
    _this.dispose = history.listen(function () {
      if (!Object(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* locationIs */])(_this.location, history.location)) {
        _this.forceUpdate();
      }

      _this.location = history.location;
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Route, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.dispose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      return Object(__WEBPACK_IMPORTED_MODULE_5_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_8__route_context__["a" /* default */].Consumer, null, function (ctx) {
        _this2.location = ctx.location;
        var match = computeMatch(_this2.props, ctx);
        return children({
          match: match
        });
      });
    }
  }]);

  return Route;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

Route.displayName = 'Route';


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__);

function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(objA) !== 'object' || objA === null || __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(objB) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  } // Test for A's keys different from B.


  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  for (var i = 0; i < keysA.length; i++) {
    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils__ = __webpack_require__(16);










/**
 * The public API for updating the location programmatically
 * with a component.
 */
var Redirect =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Redirect, _Component);

  function Redirect() {
    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Redirect);

    return __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Redirect).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Redirect, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.perform();
    }
  }, {
    key: "computeTo",
    value: function computeTo(_ref) {
      var computedMatch = _ref.computedMatch,
          to = _ref.to;

      if (computedMatch) {
        if (typeof to === 'string') {
          return Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* generatePath */])(to, computedMatch.params);
        } else {
          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, to, {
            pathname: Object(__WEBPACK_IMPORTED_MODULE_8__utils__["b" /* generatePath */])(to.pathname, computedMatch.params)
          });
        }
      }

      return to;
    }
  }, {
    key: "perform",
    value: function perform() {
      var history = __WEBPACK_IMPORTED_MODULE_7__navigator__["a" /* default */].history;
      var to = this.computeTo(this.props);

      if (this.props.push) {
        history.push(to);
      } else {
        history.replace(to);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Redirect;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

Redirect.defaultProps = {
  push: false
};
/* harmony default export */ __webpack_exports__["a"] = (Redirect);

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return prerendering; });
var prerendering = window.__PRERENDER_INJECTED ? true : false;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    return fn.apply(thisArg, args);
  };
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

var settle = __webpack_require__(102);

var buildURL = __webpack_require__(104);

var parseHeaders = __webpack_require__(105);

var isURLSameOrigin = __webpack_require__(106);

var createError = __webpack_require__(61);

var btoa = typeof window !== 'undefined' && window.btoa && window.btoa.bind(window) || __webpack_require__(107);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false; // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.

    if ("development" !== 'test' && typeof window !== 'undefined' && window.XDomainRequest && !('withCredentials' in request) && !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;

      request.onprogress = function handleProgress() {};

      request.ontimeout = function handleTimeout() {};
    } // HTTP basic authentication


    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true); // Set the request timeout in MS

    request.timeout = config.timeout; // Listen for ready state

    request[loadEvent] = function handleLoad() {
      if (!request || request.readyState !== 4 && !xDomain) {
        return;
      } // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request


      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      } // Prepare the response


      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };
      settle(resolve, reject, response); // Clean up request

      request = null;
    }; // Handle low level network errors


    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request)); // Clean up request

      request = null;
    }; // Handle timeout


    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request)); // Clean up request

      request = null;
    }; // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.


    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(108); // Add xsrf header


      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    } // Add headers to the request


    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    } // Add withCredentials to request if needed


    if (config.withCredentials) {
      request.withCredentials = true;
    } // Add responseType to request if needed


    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    } // Handle progress if needed


    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    } // Not all browsers support upload events


    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel); // Clean up request

        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    } // Send the request


    request.send(requestData);
  });
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(103);
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */


module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */

function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty;

var hexTable = function () {
  var array = [];

  for (var i = 0; i < 256; ++i) {
    array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
  }

  return array;
}();

var compactQueue = function compactQueue(queue) {
  while (queue.length > 1) {
    var item = queue.pop();
    var obj = item.obj[item.prop];

    if (Array.isArray(obj)) {
      var compacted = [];

      for (var j = 0; j < obj.length; ++j) {
        if (typeof obj[j] !== 'undefined') {
          compacted.push(obj[j]);
        }
      }

      item.obj[item.prop] = compacted;
    }
  }
};

var arrayToObject = function arrayToObject(source, options) {
  var obj = options && options.plainObjects ? Object.create(null) : {};

  for (var i = 0; i < source.length; ++i) {
    if (typeof source[i] !== 'undefined') {
      obj[i] = source[i];
    }
  }

  return obj;
};

var merge = function merge(target, source, options) {
  if (!source) {
    return target;
  }

  if (typeof source !== 'object') {
    if (Array.isArray(target)) {
      target.push(source);
    } else if (typeof target === 'object') {
      if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
        target[source] = true;
      }
    } else {
      return [target, source];
    }

    return target;
  }

  if (typeof target !== 'object') {
    return [target].concat(source);
  }

  var mergeTarget = target;

  if (Array.isArray(target) && !Array.isArray(source)) {
    mergeTarget = arrayToObject(target, options);
  }

  if (Array.isArray(target) && Array.isArray(source)) {
    source.forEach(function (item, i) {
      if (has.call(target, i)) {
        if (target[i] && typeof target[i] === 'object') {
          target[i] = merge(target[i], item, options);
        } else {
          target.push(item);
        }
      } else {
        target[i] = item;
      }
    });
    return target;
  }

  return Object.keys(source).reduce(function (acc, key) {
    var value = source[key];

    if (has.call(acc, key)) {
      acc[key] = merge(acc[key], value, options);
    } else {
      acc[key] = value;
    }

    return acc;
  }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
  return Object.keys(source).reduce(function (acc, key) {
    acc[key] = source[key];
    return acc;
  }, target);
};

var decode = function (str, decoder, charset) {
  var strWithoutPlus = str.replace(/\+/g, ' ');

  if (charset === 'iso-8859-1') {
    // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
  } // utf-8


  try {
    return decodeURIComponent(strWithoutPlus);
  } catch (e) {
    return strWithoutPlus;
  }
};

var encode = function encode(str, defaultEncoder, charset) {
  // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
  // It has been adapted here for stricter adherence to RFC 3986
  if (str.length === 0) {
    return str;
  }

  var string = typeof str === 'string' ? str : String(str);

  if (charset === 'iso-8859-1') {
    return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
      return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
    });
  }

  var out = '';

  for (var i = 0; i < string.length; ++i) {
    var c = string.charCodeAt(i);

    if (c === 0x2D // -
    || c === 0x2E // .
    || c === 0x5F // _
    || c === 0x7E // ~
    || c >= 0x30 && c <= 0x39 // 0-9
    || c >= 0x41 && c <= 0x5A // a-z
    || c >= 0x61 && c <= 0x7A // A-Z
    ) {
        out += string.charAt(i);
        continue;
      }

    if (c < 0x80) {
      out = out + hexTable[c];
      continue;
    }

    if (c < 0x800) {
      out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    if (c < 0xD800 || c >= 0xE000) {
      out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
      continue;
    }

    i += 1;
    c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
    out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
  }

  return out;
};

var compact = function compact(value) {
  var queue = [{
    obj: {
      o: value
    },
    prop: 'o'
  }];
  var refs = [];

  for (var i = 0; i < queue.length; ++i) {
    var item = queue[i];
    var obj = item.obj[item.prop];
    var keys = Object.keys(obj);

    for (var j = 0; j < keys.length; ++j) {
      var key = keys[j];
      var val = obj[key];

      if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
        queue.push({
          obj: obj,
          prop: key
        });
        refs.push(val);
      }
    }
  }

  compactQueue(queue);
  return value;
};

var isRegExp = function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
  if (obj === null || typeof obj === 'undefined') {
    return false;
  }

  return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
  return [].concat(a, b);
};

module.exports = {
  arrayToObject: arrayToObject,
  assign: assign,
  combine: combine,
  compact: compact,
  decode: decode,
  encode: encode,
  isBuffer: isBuffer,
  isRegExp: isRegExp,
  merge: merge
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;
module.exports = {
  'default': 'RFC3986',
  formatters: {
    RFC1738: function (value) {
      return replace.call(value, percentTwenties, '+');
    },
    RFC3986: function (value) {
      return value;
    }
  },
  RFC1738: 'RFC1738',
  RFC3986: 'RFC3986'
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ignorableError;
function ignorableError(msg) {
  console.warn(msg);
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getTypeMark */
/* harmony export (immutable) */ __webpack_exports__["c"] = UNSAFE_type;
/* harmony export (immutable) */ __webpack_exports__["b"] = UNSAFE_or;
/* harmony export (immutable) */ __webpack_exports__["a"] = UNSAFE_and;
/* harmony export (immutable) */ __webpack_exports__["d"] = parse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_console__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(18);



function getTypeMark(t) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (t.$s_type) {
    return t;
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["h" /* isString */])(t)) {
    Object(__WEBPACK_IMPORTED_MODULE_1__notification_console__["a" /* ignorableError */])("expect getTypeMark() with a string but receiving " + typeof t);
    return;
  }

  var isOptional = t[t.length - 1] === '?';
  var result = {
    $s_type: isOptional ? t.slice(0, t.length - 1) : t
  };
  isOptional && (result.$s_optional = isOptional);

  switch (t) {
    case 'and':
    case 'or':
      result.$s_param = args.map(function (t) {
        return getTypeMark(t);
      });
      delete result.$s_optional;
      break;

    case 'array?':
    case 'array':
      result.$s_param = getTypeMark(args[0] || []);
      break;

    case 'object?':
    case 'object':
      result.$s_param = {};
      var param_1 = args[0];
      Object.keys(param_1 || {}).forEach(function (k) {
        result.$s_param[k] = getTypeMark(param_1[k]);
      });
      break;

    case 'undefined':
    case 'null':
    case 'any':
      result.$s_optional = true;
      break;

    case 'string?':
    case 'string':
    case 'boolean?':
    case 'boolean':
    case 'number?':
    case 'number':
      break;

    default:
      Object(__WEBPACK_IMPORTED_MODULE_1__notification_console__["a" /* ignorableError */])("expect getTypeMark() with a known type but receiving " + t);
      return;
  }

  return result;
}
function UNSAFE_type(t) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  return getTypeMark.apply(void 0, [t].concat(args));
}
function UNSAFE_or() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return getTypeMark.apply(void 0, ['or'].concat(args));
}
function UNSAFE_and() {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return getTypeMark.apply(void 0, ['and'].concat(args));
}
function parse(value) {
  if (value === void 0) {
    value = {};
  }

  if (value.$s_type) {
    return value;
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* isArray */])(value)) {
    return getTypeMark('array', value[0]);
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["g" /* isObject */])(value)) {
    var result_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, value);

    Object.keys(result_1).forEach(function (k) {
      result_1[k] = parse(result_1[k]);
    });
    return getTypeMark('object', result_1);
  } else {
    return UNSAFE_type(value);
  }
}

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObxSet; });
/* harmony export (immutable) */ __webpack_exports__["b"] = patchAccessor;
/* harmony export (immutable) */ __webpack_exports__["c"] = patchMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obx__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proxy__ = __webpack_require__(20);










var ObxSet =
/*#__PURE__*/
function (_Obx) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(ObxSet, _Obx);

  function ObxSet(name, target) {
    var _this;

    var obxFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_6__obx__["a" /* ObxFlag */].DEEP;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ObxSet);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxSet).call(this, name, target, obxFlag));
    Object(__WEBPACK_IMPORTED_MODULE_5__utils__["v" /* setPrototypeOf */])(target, target instanceof Set ? setMethods : weaksetMethods);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ObxSet, [{
    key: "set",
    value: function set(key, val) {
      fail('[Weak]Set objects not support "set"');
    }
  }, {
    key: "get",
    value: function get(key) {
      fail('[Weak]Set objects not support "get"');
    }
  }, {
    key: "del",
    value: function del(key) {
      fail('[Weak]Set objects not support "del"');
    }
  }]);

  return ObxSet;
}(__WEBPACK_IMPORTED_MODULE_6__obx__["c" /* default */]);



function isIterator(v) {
  return v.next ? true : false;
}

function patchAccessor(keys, proto, methods) {
  keys.forEach(function (method) {
    var original = proto[method];
    Object(__WEBPACK_IMPORTED_MODULE_5__utils__["g" /* addHiddenProp */])(methods, method, function accessor() {
      var obx = Object(__WEBPACK_IMPORTED_MODULE_6__obx__["e" /* getObx */])(this);
      var flag = obx ? obx.obxFlag : __WEBPACK_IMPORTED_MODULE_6__obx__["a" /* ObxFlag */].REF;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (method === 'forEach') {
        var fn = args[0];
        var thisArg = args[0] || this;

        args[0] = function (v, a, c) {
          Object(__WEBPACK_IMPORTED_MODULE_7__observable__["i" /* reportChildValue */])(v, flag);
          return fn.call(thisArg, Object(__WEBPACK_IMPORTED_MODULE_8__proxy__["d" /* getProxiedValue */])(v), a, c);
        };

        return original.apply(this, args);
      }

      var result = original.apply(this, args);

      if (method === 'get') {
        Object(__WEBPACK_IMPORTED_MODULE_7__observable__["i" /* reportChildValue */])(result, flag);
        return Object(__WEBPACK_IMPORTED_MODULE_8__proxy__["d" /* getProxiedValue */])(result);
      }

      if (isIterator(result)) {
        var originNext = result.next;
        var isMapIter = String(result) === '[object Map Iterator]';
        var isEntries = method === 'entries';
        var _keys = null;

        if (isEntries && !isMapIter) {
          _keys = ['0', '1'];
        } else if (isMapIter && (isEntries || method === Symbol.iterator)) {
          _keys = ['1'];
        }

        result.next = function next() {
          var n = originNext.call(this);

          if (!n.done) {
            if (_keys) {
              n.value = createResultProxy(n.value, flag, _keys);
            } else {
              n = createResultProxy(n, flag);
            }
          }

          return n;
        };
      }

      return result;
    });
  });
}

function createResultProxy(entries, flag) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['value'];
  return new Proxy(entries, {
    get: function get(target, key) {
      var v = target[key];

      if (v && keys.includes(key)) {
        Object(__WEBPACK_IMPORTED_MODULE_7__observable__["i" /* reportChildValue */])(v, flag);
      }

      return Object(__WEBPACK_IMPORTED_MODULE_8__proxy__["d" /* getProxiedValue */])(v);
    }
  });
}

function patchMutator(keys, proto, methods) {
  keys.forEach(function (method) {
    var original = proto[method];
    Object(__WEBPACK_IMPORTED_MODULE_5__utils__["g" /* addHiddenProp */])(methods, method, function mutator() {
      var size = this.size;

      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var result = original.apply(this, args);
      var obx = Object(__WEBPACK_IMPORTED_MODULE_6__obx__["e" /* getObx */])(this);
      var changed = true;

      switch (method) {
        case 'add':
        case 'clear':
        case 'delete':
          changed = this.size !== size;
          break;
      } // now: "set" not compare values, default changed


      if (obx && changed) {
        obx.reportChange();
      }

      return result;
    });
  });
} // ======= Set ========

var setProto = Set.prototype;
var setMethods = Object.create(setProto);
patchMutator(['add', 'clear', 'delete'], setProto, setMethods);
patchAccessor(['values', 'keys', 'entries', 'forEach', Symbol.iterator], setProto, setMethods); // ======= WeakSet ========

var weaksetProto = WeakSet.prototype;
var weaksetMethods = Object.create(weaksetProto);
patchMutator(['add', 'delete', 'clear'], weaksetProto, weaksetMethods);

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core__ = __webpack_require__(70);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ViewController", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$get", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$set", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$del", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$extend", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "obx", function() { return __WEBPACK_IMPORTED_MODULE_0__core__["i"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(48);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "service", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RoutePage404", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createDynamicLoader", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "XFor", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xId", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xAssign", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xModifiers", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "globalHelpers", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "reportError", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "runApp", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "setLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createI18n", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mockable", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createApi", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "prerendering", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["s"]; });
var version = "1.0.10";

if (true) {
  if (true) {
    // tslint:disable-next-line
    console.log("%cRecore %cv".concat(version, " %cdevelopment"), 'color:#000;font-weight:bold;', 'color:green;font-weight:bold;', 'color:orange;font-weight:bold;');
  } else {
    // tslint:disable-next-line
    console.log("%cRecore %cv".concat(version, " "), 'color:#000;font-weight:bold;', 'color:green;font-weight:bold;');
  }
}





/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view_controller__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obx__ = __webpack_require__(145);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__obx__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__obx__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__obx__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__obx__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__obx__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__obx__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__obx__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__obx__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__view_controller__["a"]; });




/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(3);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseScope; });
/* unused harmony export asScope */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obx_utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx_observable_obx__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_observable_observable__ = __webpack_require__(10);





var BaseScope =
/*#__PURE__*/
function () {
  function BaseScope() {
    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, BaseScope);
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(BaseScope, [{
    key: "$get",
    value: function $get(key) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["c" /* $get */])(this, key);
    }
  }, {
    key: "$set",
    value: function $set(key, val) {
      Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["d" /* $set */])(this, key, val);
    }
  }, {
    key: "$del",
    value: function $del(key) {
      Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["a" /* $del */])(this, key);
    }
  }, {
    key: "$extend",
    value: function $extend(properties) {
      Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["b" /* $extend */])(this, properties);
    }
  }, {
    key: "$derive",
    value: function $derive(data) {
      return asScope(data, this);
    }
  }, {
    key: "$",
    value: function $(key) {
      return this.$get(key);
    }
  }]);

  return BaseScope;
}();
function asScope(data) {
  var parentScope = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // FIXME remove this line
  Object(__WEBPACK_IMPORTED_MODULE_4__obx_observable_observable__["b" /* asObservable */])(data, __WEBPACK_IMPORTED_MODULE_3__obx_observable_obx__["a" /* ObxFlag */].SHALLOW);
  Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["f" /* addHiddenFinalProp */])(data, '$super', parentScope);
  Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["v" /* setPrototypeOf */])(data, parentScope || new BaseScope());
  return data;
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(41);

var iterableToArrayLimit = __webpack_require__(75);

var nonIterableRest = __webpack_require__(42);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = is;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__proxy__ = __webpack_require__(20);

function is(a, b) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__proxy__["d" /* getProxiedValue */])(a) === Object(__WEBPACK_IMPORTED_MODULE_0__proxy__["d" /* getProxiedValue */])(b);
}

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObxInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__obx_property__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__obx__ = __webpack_require__(7);










var ObxInstance =
/*#__PURE__*/
function (_Obx) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(ObxInstance, _Obx);

  function ObxInstance(name, target) {
    var _this;

    var obxFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_8__obx__["a" /* ObxFlag */].REF;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ObxInstance);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxInstance).call(this, name, target, obxFlag));
    var decorators = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* getObxDecorators */])(target);

    if (decorators) {
      Object(__WEBPACK_IMPORTED_MODULE_6__utils__["y" /* walk */])(decorators, function (_, key, d) {
        var descriptor = d.descriptor;
        var initialValue = descriptor ? descriptor.initializer ? descriptor.initializer.call(target) : descriptor.value : undefined;
        Object(__WEBPACK_IMPORTED_MODULE_7__obx_property__["b" /* defineObxProperty */])(target, key, initialValue, {
          set: descriptor && descriptor.set,
          get: descriptor && descriptor.get
        }, d.flag);
      });
    }

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ObxInstance, [{
    key: "internalSet",
    value: function internalSet(key, val) {
      var nestPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var target = this.target;

      if (key in target) {
        var v;

        if (!nestPath || (v = target[key]) == null) {
          // tslint:disable-line
          target[key] = Object(__WEBPACK_IMPORTED_MODULE_8__obx__["d" /* formatNestValue */])(nestPath, val);
          return;
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_8__obx__["f" /* hasObx */])(v)) {
          Object(__WEBPACK_IMPORTED_MODULE_8__obx__["e" /* getObx */])(v).set(nestPath, val);
          return;
        }
      }

      __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxInstance.prototype), "internalSet", this).call(this, key, val, nestPath);
    }
  }]);

  return ObxInstance;
}(__WEBPACK_IMPORTED_MODULE_8__obx__["c" /* default */]);



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hasListeners */
/* harmony export (immutable) */ __webpack_exports__["b"] = registerListener;
/* harmony export (immutable) */ __webpack_exports__["a"] = notifyListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__derivation__ = __webpack_require__(12);


function hasListeners(listenable) {
  return listenable.listeners && listenable.listeners.length > 0;
}
function registerListener(listenable, handler) {
  var listeners = listenable.listeners || (listenable.listeners = []);
  listeners.push(handler);

  if (listenable.listened) {
    if (listeners.length === 1 && listenable.wakeup) {
      listenable.wakeup();
    }
  } else {
    listenable.listened = true;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["u" /* once */])(function () {
    var idx = listeners.indexOf(handler);

    if (idx > -1) {
      listeners.splice(idx, 1);

      if (listeners.length < 1 && listenable.sleep) {
        listenable.sleep();
      }
    }
  });
}
function notifyListeners(listenable, change) {
  var prevU = Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["j" /* untrackedStart */])();
  var listeners = listenable.listeners;

  if (!listeners) {
    return;
  }

  listeners = listeners.slice();

  for (var i = 0, l = listeners.length; i < l; i++) {
    listeners[i](change);
  }

  Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["i" /* untrackedEnd */])(prevU);
}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(81);

var iterableToArray = __webpack_require__(50);

var nonIterableSpread = __webpack_require__(82);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 81 */
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
/* 82 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return X; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(24);








function renderError(error) {
  if (error === true) {
    return null;
  }

  if (true) {
    return Object(__WEBPACK_IMPORTED_MODULE_5_react__["createElement"])('pre', {
      style: {
        border: '1px solid #ffa39e',
        backgroundColor: '#fff1f0',
        padding: '8px 15px'
      }
    }, "".concat(error.message, ": ").concat(error.stack));
  } else {
    reportError(error);
  }

  return '<Error>';
}

var X =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(X, _Component);

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(X, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var area = props.area;

      if (area.isDirty() || state.revision < 0) {
        var _revision = state.revision;
        var _error = null;

        try {
          _revision = area.getRevision();
        } catch (e) {
          _error = true;
        }

        return {
          revision: _revision,
          error: _error
        };
      }

      return null;
    }
  }]);

  function X(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, X);

    _this = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_getPrototypeOf___default()(X).call(this, props));
    _this.state = {
      revision: -1,
      error: null
    };
    _this.dispose = void 0;
    var area = _this.props.area;
    _this.dispose = area.observe(function () {
      return _this.setState({
        revision: area.getRevision(),
        error: null
      });
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(X, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.dispose) {
        this.dispose();
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err, info) {
      var message = err.message || String(err);
      var stack = info && info.componentStack || '';
      var error = {
        message: message,
        stack: stack
      };
      var area = this.props.area;

      try {
        area.scope.$didCatch(error, area);
      } catch (e) {}

      this.setState({
        error: error
      });
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(_, nextState) {
      return nextState.revision !== this.state.revision || nextState.error !== null;
    }
  }, {
    key: "render",
    value: function render() {
      if (this.state.error) {
        return renderError(this.state.error);
      }

      return this.props.children(this.props.area);
    }
  }]);

  return X;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

X.displayName = 'X';


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(53);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

var getHistoryState = function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
};
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


var createBrowserHistory = function createBrowserHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Browser history needs a DOM');
  var globalHistory = window.history;
  var canUseHistory = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["g" /* supportsHistory */])();
  var needsHashChangeListener = !Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["h" /* supportsPopStateOnHashChange */])();
  var _props$forceRefresh = props.forceRefresh,
      forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
      _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';

  var getDOMLocation = function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);
    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, key);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var handlePopState = function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event)) return;
    handlePop(getDOMLocation(event.state));
  };

  var handleHashChange = function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  };

  var forceNextPop = false;

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  var createHref = function createHref(location) {
    return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
        window.location.href = href;
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
        window.location.replace(href);
      }
    });
  };

  var go = function go(n) {
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);
      if (needsHashChangeListener) Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createBrowserHistory);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
} // About 1.5x faster than the two-arg version of Array#splice()


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
} // This implementation is based heavily on node's url.parse


function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];
  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';
  var hasTrailingSlash = void 0;

  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;

  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }
  if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');
  var result = fromParts.join('/');
  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);
  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();
    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["a"] = (valueEqual);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(53);
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};







var HashChangeEvent = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */])(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["f" /* stripLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  },
  slash: {
    encodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */],
    decodePath: __WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */]
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');
  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  __WEBPACK_IMPORTED_MODULE_1_invariant___default()(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["b" /* canUseDOM */], 'Hash history needs a DOM');
  var globalHistory = window.history;
  var canGoWithoutReload = Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["f" /* supportsGoWithoutReloadUsingHash */])();
  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
  var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
    if (basename) path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);
    return Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path);
  };

  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_4__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }; // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)]; // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
  };

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot replace state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
};

/* harmony default export */ __webpack_exports__["a"] = (createHashHistory);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(34);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};






var clamp = function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
};
/**
 * Creates a history object that stores locations in memory.
 */


var createMemoryHistory = function createMemoryHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var getUserConfirmation = props.getUserConfirmation,
      _props$initialEntries = props.initialEntries,
      initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
      _props$initialIndex = props.initialIndex,
      initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
      _props$keyLength = props.keyLength,
      keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
  var transitionManager = Object(__WEBPACK_IMPORTED_MODULE_3__createTransitionManager__["a" /* default */])();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  };

  var createKey = function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  };

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, createKey()) : Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];

  var push = function push(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'PUSH';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  };

  var replace = function replace(path, state) {
    __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
    var action = 'REPLACE';
    var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  };

  var go = function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var canGo = function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  };

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    return transitionManager.setPrompt(prompt);
  };

  var listen = function listen(listener) {
    return transitionManager.appendListener(listener);
  };

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
};

/* unused harmony default export */ var _unused_webpack_default_export = (createMemoryHistory);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(41);

var iterableToArray = __webpack_require__(50);

var nonIterableRest = __webpack_require__(42);

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp;
module.exports.parse = parse;
module.exports.compile = compile;
module.exports.tokensToFunction = tokensToFunction;
module.exports.tokensToRegExp = tokensToRegExp;
/**
 * Default configs.
 */

var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
// "(\\d+)"  => [undefined, undefined, "\d+", undefined]
'(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || DEFAULT_DELIMITER;
  var delimiters = options && options.delimiters || DEFAULT_DELIMITERS;
  var pathEscaped = false;
  var res;

  while ((res = PATH_REGEXP.exec(str)) !== null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      pathEscaped = true;
      continue;
    }

    var prev = '';
    var next = str[index];
    var name = res[2];
    var capture = res[3];
    var group = res[4];
    var modifier = res[5];

    if (!pathEscaped && path.length) {
      var k = path.length - 1;

      if (delimiters.indexOf(path[k]) > -1) {
        prev = path[k];
        path = path.slice(0, k);
      }
    } // Push the current path onto the tokens.


    if (path) {
      tokens.push(path);
      path = '';
      pathEscaped = false;
    }

    var partial = prev !== '' && next !== undefined && next !== prev;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = prev || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prev,
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Push any remaining characters.


  if (path || index < str.length) {
    tokens.push(path + str.substr(index));
  }

  return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */


function compile(str, options) {
  return tokensToFunction(parse(str, options));
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (data, options) {
    var path = '';
    var encode = options && options.encode || encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data ? data[token.name] : undefined;
      var segment;

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but got array');
        }

        if (value.length === 0) {
          if (token.optional) continue;
          throw new TypeError('Expected "' + token.name + '" to not be empty');
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j], token);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '"');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        segment = encode(String(value), token);

        if (!matches[i].test(segment)) {
          throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
        }

        path += token.prefix + segment;
        continue;
      }

      if (token.optional) {
        // Prepend partial segment prefixes.
        if (token.partial) path += token.prefix;
        continue;
      }

      throw new TypeError('Expected "' + token.name + '" to be ' + (token.repeat ? 'an array' : 'a string'));
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {Array=}  keys
 * @return {!RegExp}
 */


function regexpToRegexp(path, keys) {
  if (!keys) return path; // Use a negative lookahead to match only capturing groups.

  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        pattern: null
      });
    }
  }

  return path;
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  return new RegExp('(?:' + parts.join('|') + ')', flags(options));
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}  tokens
 * @param  {Array=}  keys
 * @param  {Object=} options
 * @return {!RegExp}
 */


function tokensToRegExp(tokens, keys, options) {
  options = options || {};
  var strict = options.strict;
  var start = options.start !== false;
  var end = options.end !== false;
  var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
  var delimiters = options.delimiters || DEFAULT_DELIMITERS;
  var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
  var route = start ? '^' : '';
  var isEndDelimited = tokens.length === 0; // Iterate over the tokens and create our regexp string.

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
      isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
    } else {
      var capture = token.repeat ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*' : token.pattern;
      if (keys) keys.push(token);

      if (token.optional) {
        if (token.partial) {
          route += escapeString(token.prefix) + '(' + capture + ')?';
        } else {
          route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
        }
      } else {
        route += escapeString(token.prefix) + '(' + capture + ')';
      }
    }
  }

  if (end) {
    if (!strict) route += '(?:' + delimiter + ')?';
    route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
  } else {
    if (!strict) route += '(?:' + delimiter + '(?=' + endsWith + '))?';
    if (!isEndDelimited) route += '(?=' + delimiter + '|' + endsWith + ')';
  }

  return new RegExp(route, flags(options));
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {Array=}                keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */


function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp) {
    return regexpToRegexp(path, keys);
  }

  if (Array.isArray(path)) {
    return arrayToRegexp(
    /** @type {!Array} */
    path, keys, options);
  }

  return stringToRegexp(
  /** @type {string} */
  path, keys, options);
}

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Root; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__route_context__ = __webpack_require__(27);










var Root =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(Root, _Component);

  function Root(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, Root);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(Root).call(this, props));
    _this.dispose = void 0;
    _this.rootContext = void 0;
    _this.location = void 0;
    var history = __WEBPACK_IMPORTED_MODULE_6__navigator__["a" /* default */].history;
    _this.location = history.location;
    _this.rootContext = new __WEBPACK_IMPORTED_MODULE_8__route_context__["a" /* default */](new __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* MatchResult */]('/', '/', _this.location.pathname === '/'));
    _this.dispose = history.listen(function () {
      var location = history.location;

      if (!Object(__WEBPACK_IMPORTED_MODULE_7__utils__["c" /* locationIs */])(_this.location, location)) {
        _this.rootContext.setMatch(new __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* MatchResult */]('/', '/', location.pathname === '/'));

        _this.forceUpdate();
      }

      _this.location = location;
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(Root, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.dispose();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var _this$rootContext = this.rootContext,
          location = _this$rootContext.location,
          match = _this$rootContext.match;
      return Object(__WEBPACK_IMPORTED_MODULE_5_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_8__route_context__["a" /* default */].Provider, {
        value: this.rootContext
      }, children({
        match: match,
        location: location,
        defined: {}
      }));
    }
  }]);

  return Root;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inject;
function inject(_ref) {
  var components = _ref.components,
      helpers = _ref.helpers;
  return function (ControllerType) {
    if (components) {
      ControllerType.components = components;
    }

    if (helpers) {
      ControllerType.helpers = helpers;
    }
  };
}

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__ = __webpack_require__(95);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RequestGroup", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "request", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "service", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "requestJsonp", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "and", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "or", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "type", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResponseErrorCode", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["b"]; });


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_jsonp__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_requestGroup__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_types__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_ResponseError__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__core_requestGroup__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__request_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__request_index__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__request_jsonp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__type_types__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__type_types__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__type_types__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__core_ResponseError__["a"]; });





var version = '0.3.1';

if (true) {
  console.log("%cShimmer %cv" + version + " %cdevelopment", 'color:#000;font-weight:bold;', 'color:green;font-weight:bold;', 'color:orange;font-weight:bold;');
} else {
  console.log("%cShimmer %cv" + version, 'color:#000;font-weight:bold;', 'color:green;font-weight:bold;');
}



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(14);

var count = 0;

function noop() {}

function jsonp(url, opts, fn) {
  if ('function' === typeof opts) {
    fn = opts;
    opts = {};
  }

  if (!opts) {
    opts = {};
  }

  var prefix = opts.prefix || '__jp';
  var id = opts.name || prefix + count++;
  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script = null;
  var timer = null;

  if (timeout) {
    timer = setTimeout(function () {
      cleanup();

      if (fn) {
        fn(new Error('Timeout'));
      }
    }, timeout);
  }

  function cleanup() {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
    }

    window[id] = noop;

    if (timer) {
      clearTimeout(timer);
    }
  }

  function cancel() {
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function (data) {
    cleanup();

    if (fn) {
      fn(null, data);
    }
  };

  url += (-1 * url.indexOf('?') - 1 ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');
  script = document.createElement('script');
  script.src = url;
  target.parentNode && target.parentNode.insertBefore(script, target);
  return cancel;
}

var requestJsonp = function (config) {
  var url = config.url,
      otherConfig = __WEBPACK_IMPORTED_MODULE_0_tslib__["e" /* __rest */](config, ["url"]);

  return new Promise(function (resolve, reject) {
    jsonp(config.url, otherConfig, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["a"] = (requestJsonp);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(98);

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

var bind = __webpack_require__(59);

var Axios = __webpack_require__(100);

var defaults = __webpack_require__(37);
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */


function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context); // Copy axios.prototype to instance

  utils.extend(instance, Axios.prototype, context); // Copy context to instance

  utils.extend(instance, context);
  return instance;
} // Create the default instance to be exported


var axios = createInstance(defaults); // Expose Axios class to allow class inheritance

axios.Axios = Axios; // Factory for creating new instances

axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
}; // Expose Cancel & CancelToken


axios.Cancel = __webpack_require__(63);
axios.CancelToken = __webpack_require__(114);
axios.isCancel = __webpack_require__(62); // Expose all/spread

axios.all = function all(promises) {
  return Promise.all(promises);
};

axios.spread = __webpack_require__(115);
module.exports = axios; // Allow use of default import syntax in TypeScript

module.exports.default = axios;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer);
};

function isBuffer(obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
} // For Node v0.10 support. Remove this eventually.


function isSlowBuffer(obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(37);

var utils = __webpack_require__(9);

var InterceptorManager = __webpack_require__(109);

var dispatchRequest = __webpack_require__(110);
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */


function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */


Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {
    method: 'get'
  }, this.defaults, config);
  config.method = config.method.toLowerCase(); // Hook up interceptors middleware

  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
}; // Provide aliases for supported request methods


utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function (url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});
module.exports = Axios;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(61);
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */


module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus; // Note: status is not exposed by XDomainRequest

  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
  }
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */

module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;

  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  return error;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, '+').replace(/%5B/gi, '[').replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */


module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;

  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }

        parts.push(encode(key) + '=' + encode(v));
      });
    });
    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9); // Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers


var ignoreDuplicateOf = ['age', 'authorization', 'content-length', 'content-type', 'etag', 'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since', 'last-modified', 'location', 'max-forwards', 'proxy-authorization', 'referer', 'retry-after', 'user-agent'];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */

module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) {
    return parsed;
  }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }

      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });
  return parsed;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
  var msie = /(msie|trident)/i.test(navigator.userAgent);
  var urlParsingNode = document.createElement('a');
  var originURL;
  /**
  * Parse a URL to discover it's components
  *
  * @param {String} url The URL to be parsed
  * @returns {Object}
  */

  function resolveURL(url) {
    var href = url;

    if (msie) {
      // IE needs attribute set twice to normalize properties
      urlParsingNode.setAttribute('href', href);
      href = urlParsingNode.href;
    }

    urlParsingNode.setAttribute('href', href); // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils

    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname
    };
  }

  originURL = resolveURL(window.location.href);
  /**
  * Determine if a URL shares the same origin as the current location
  *
  * @param {String} requestURL The URL to test
  * @returns {boolean} True if URL shares the same origin, otherwise false
  */

  return function isURLSameOrigin(requestURL) {
    var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return function isURLSameOrigin() {
    return true;
  };
}();

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}

E.prototype = new Error();
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';

  for ( // initialize result and counter
  var block, charCode, idx = 0, map = chars; // if the next str index does not exist:
  //   change the mapping table to "="
  //   check if d has no fractional digits
  str.charAt(idx | 0) || (map = '=', idx % 1); // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
  output += map.charAt(63 & block >> 8 - idx % 1 * 8)) {
    charCode = str.charCodeAt(idx += 3 / 4);

    if (charCode > 0xFF) {
      throw new E();
    }

    block = block << 8 | charCode;
  }

  return output;
}

module.exports = btoa;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      var cookie = [];
      cookie.push(name + '=' + encodeURIComponent(value));

      if (utils.isNumber(expires)) {
        cookie.push('expires=' + new Date(expires).toGMTString());
      }

      if (utils.isString(path)) {
        cookie.push('path=' + path);
      }

      if (utils.isString(domain)) {
        cookie.push('domain=' + domain);
      }

      if (secure === true) {
        cookie.push('secure');
      }

      document.cookie = cookie.join('; ');
    },
    read: function read(name) {
      var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, '', Date.now() - 86400000);
    }
  };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
  return {
    write: function write() {},
    read: function read() {
      return null;
    },
    remove: function remove() {}
  };
}();

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

function InterceptorManager() {
  this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */


InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */


InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */


InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);

var transformData = __webpack_require__(111);

var isCancel = __webpack_require__(62);

var defaults = __webpack_require__(37);

var isAbsoluteURL = __webpack_require__(112);

var combineURLs = __webpack_require__(113);
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */


module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config); // Support baseURL config

  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  } // Ensure headers exist


  config.headers = config.headers || {}; // Transform request data

  config.data = transformData(config.data, config.headers, config.transformRequest); // Flatten headers

  config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
  utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
    delete config.headers[method];
  });
  var adapter = config.adapter || defaults.adapter;
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config); // Transform response data

    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config); // Transform response data

      if (reason && reason.response) {
        reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
      }
    }

    return Promise.reject(reason);
  });
};

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(9);
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */


module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });
  return data;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */

module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */

module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '') : baseURL;
};

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(63);
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */


function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });
  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */


CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */


CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */

module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(117);

var parse = __webpack_require__(118);

var formats = __webpack_require__(65);

module.exports = {
  formats: formats,
  parse: parse,
  stringify: stringify
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(64);

var formats = __webpack_require__(65);

var arrayPrefixGenerators = {
  brackets: function brackets(prefix) {
    // eslint-disable-line func-name-matching
    return prefix + '[]';
  },
  indices: function indices(prefix, key) {
    // eslint-disable-line func-name-matching
    return prefix + '[' + key + ']';
  },
  repeat: function repeat(prefix) {
    // eslint-disable-line func-name-matching
    return prefix;
  }
};
var isArray = Array.isArray;
var push = Array.prototype.push;

var pushToArray = function (arr, valueOrArray) {
  push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;
var defaults = {
  addQueryPrefix: false,
  allowDots: false,
  charset: 'utf-8',
  charsetSentinel: false,
  delimiter: '&',
  encode: true,
  encoder: utils.encode,
  encodeValuesOnly: false,
  // deprecated
  indices: false,
  serializeDate: function serializeDate(date) {
    // eslint-disable-line func-name-matching
    return toISO.call(date);
  },
  skipNulls: false,
  strictNullHandling: false
};

var stringify = function stringify( // eslint-disable-line func-name-matching
object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset) {
  var obj = object;

  if (typeof filter === 'function') {
    obj = filter(prefix, obj);
  } else if (obj instanceof Date) {
    obj = serializeDate(obj);
  }

  if (obj === null) {
    if (strictNullHandling) {
      return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset) : prefix;
    }

    obj = '';
  }

  if (typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean' || utils.isBuffer(obj)) {
    if (encoder) {
      var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset);
      return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset))];
    }

    return [formatter(prefix) + '=' + formatter(String(obj))];
  }

  var values = [];

  if (typeof obj === 'undefined') {
    return values;
  }

  var objKeys;

  if (Array.isArray(filter)) {
    objKeys = filter;
  } else {
    var keys = Object.keys(obj);
    objKeys = sort ? keys.sort(sort) : keys;
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (skipNulls && obj[key] === null) {
      continue;
    }

    if (Array.isArray(obj)) {
      pushToArray(values, stringify(obj[key], generateArrayPrefix(prefix, key), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    } else {
      pushToArray(values, stringify(obj[key], prefix + (allowDots ? '.' + key : '[' + key + ']'), generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    }
  }

  return values;
};

module.exports = function (object, opts) {
  var obj = object;
  var options = opts ? utils.assign({}, opts) : {};

  if (options.encoder !== null && options.encoder !== undefined && typeof options.encoder !== 'function') {
    throw new TypeError('Encoder has to be a function.');
  }

  var delimiter = typeof options.delimiter === 'undefined' ? defaults.delimiter : options.delimiter;
  var strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;
  var skipNulls = typeof options.skipNulls === 'boolean' ? options.skipNulls : defaults.skipNulls;
  var encode = typeof options.encode === 'boolean' ? options.encode : defaults.encode;
  var encoder = typeof options.encoder === 'function' ? options.encoder : defaults.encoder;
  var sort = typeof options.sort === 'function' ? options.sort : null;
  var allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;
  var serializeDate = typeof options.serializeDate === 'function' ? options.serializeDate : defaults.serializeDate;
  var encodeValuesOnly = typeof options.encodeValuesOnly === 'boolean' ? options.encodeValuesOnly : defaults.encodeValuesOnly;
  var charset = options.charset || defaults.charset;

  if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {
    throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  if (typeof options.format === 'undefined') {
    options.format = formats['default'];
  } else if (!Object.prototype.hasOwnProperty.call(formats.formatters, options.format)) {
    throw new TypeError('Unknown format option provided.');
  }

  var formatter = formats.formatters[options.format];
  var objKeys;
  var filter;

  if (typeof options.filter === 'function') {
    filter = options.filter;
    obj = filter('', obj);
  } else if (Array.isArray(options.filter)) {
    filter = options.filter;
    objKeys = filter;
  }

  var keys = [];

  if (typeof obj !== 'object' || obj === null) {
    return '';
  }

  var arrayFormat;

  if (options.arrayFormat in arrayPrefixGenerators) {
    arrayFormat = options.arrayFormat;
  } else if ('indices' in options) {
    arrayFormat = options.indices ? 'indices' : 'repeat';
  } else {
    arrayFormat = 'indices';
  }

  var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

  if (!objKeys) {
    objKeys = Object.keys(obj);
  }

  if (sort) {
    objKeys.sort(sort);
  }

  for (var i = 0; i < objKeys.length; ++i) {
    var key = objKeys[i];

    if (skipNulls && obj[key] === null) {
      continue;
    }

    pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, strictNullHandling, skipNulls, encode ? encoder : null, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
  }

  var joined = keys.join(delimiter);
  var prefix = options.addQueryPrefix === true ? '?' : '';

  if (options.charsetSentinel) {
    if (charset === 'iso-8859-1') {
      // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
      prefix += 'utf8=%26%2310003%3B&';
    } else {
      // encodeURIComponent('✓')
      prefix += 'utf8=%E2%9C%93&';
    }
  }

  return joined.length > 0 ? prefix + joined : '';
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(64);

var has = Object.prototype.hasOwnProperty;
var defaults = {
  allowDots: false,
  allowPrototypes: false,
  arrayLimit: 20,
  charset: 'utf-8',
  charsetSentinel: false,
  decoder: utils.decode,
  delimiter: '&',
  depth: 5,
  ignoreQueryPrefix: false,
  interpretNumericEntities: false,
  parameterLimit: 1000,
  parseArrays: true,
  plainObjects: false,
  strictNullHandling: false
};

var interpretNumericEntities = function (str) {
  return str.replace(/&#(\d+);/g, function ($0, numberStr) {
    return String.fromCharCode(parseInt(numberStr, 10));
  });
}; // This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.


var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.

var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
  var obj = {};
  var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
  var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
  var parts = cleanStr.split(options.delimiter, limit);
  var skipIndex = -1; // Keep track of where the utf8 sentinel was found

  var i;
  var charset = options.charset;

  if (options.charsetSentinel) {
    for (i = 0; i < parts.length; ++i) {
      if (parts[i].indexOf('utf8=') === 0) {
        if (parts[i] === charsetSentinel) {
          charset = 'utf-8';
        } else if (parts[i] === isoSentinel) {
          charset = 'iso-8859-1';
        }

        skipIndex = i;
        i = parts.length; // The eslint settings do not allow break;
      }
    }
  }

  for (i = 0; i < parts.length; ++i) {
    if (i === skipIndex) {
      continue;
    }

    var part = parts[i];
    var bracketEqualsPos = part.indexOf(']=');
    var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;
    var key, val;

    if (pos === -1) {
      key = options.decoder(part, defaults.decoder, charset);
      val = options.strictNullHandling ? null : '';
    } else {
      key = options.decoder(part.slice(0, pos), defaults.decoder, charset);
      val = options.decoder(part.slice(pos + 1), defaults.decoder, charset);
    }

    if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
      val = interpretNumericEntities(val);
    }

    if (has.call(obj, key)) {
      obj[key] = utils.combine(obj[key], val);
    } else {
      obj[key] = val;
    }
  }

  return obj;
};

var parseObject = function (chain, val, options) {
  var leaf = val;

  for (var i = chain.length - 1; i >= 0; --i) {
    var obj;
    var root = chain[i];

    if (root === '[]' && options.parseArrays) {
      obj = [].concat(leaf);
    } else {
      obj = options.plainObjects ? Object.create(null) : {};
      var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
      var index = parseInt(cleanRoot, 10);

      if (!options.parseArrays && cleanRoot === '') {
        obj = {
          0: leaf
        };
      } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
        obj = [];
        obj[index] = leaf;
      } else {
        obj[cleanRoot] = leaf;
      }
    }

    leaf = obj;
  }

  return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options) {
  if (!givenKey) {
    return;
  } // Transform dot notation to bracket notation


  var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey; // The regex chunks

  var brackets = /(\[[^[\]]*])/;
  var child = /(\[[^[\]]*])/g; // Get the parent

  var segment = brackets.exec(key);
  var parent = segment ? key.slice(0, segment.index) : key; // Stash the parent if it exists

  var keys = [];

  if (parent) {
    // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
    if (!options.plainObjects && has.call(Object.prototype, parent)) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(parent);
  } // Loop through children appending to the array until we hit depth


  var i = 0;

  while ((segment = child.exec(key)) !== null && i < options.depth) {
    i += 1;

    if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
      if (!options.allowPrototypes) {
        return;
      }
    }

    keys.push(segment[1]);
  } // If there's a remainder, just add whatever is left


  if (segment) {
    keys.push('[' + key.slice(segment.index) + ']');
  }

  return parseObject(keys, val, options);
};

module.exports = function (str, opts) {
  var options = opts ? utils.assign({}, opts) : {};

  if (options.decoder !== null && options.decoder !== undefined && typeof options.decoder !== 'function') {
    throw new TypeError('Decoder has to be a function.');
  }

  options.ignoreQueryPrefix = options.ignoreQueryPrefix === true;
  options.delimiter = typeof options.delimiter === 'string' || utils.isRegExp(options.delimiter) ? options.delimiter : defaults.delimiter;
  options.depth = typeof options.depth === 'number' ? options.depth : defaults.depth;
  options.arrayLimit = typeof options.arrayLimit === 'number' ? options.arrayLimit : defaults.arrayLimit;
  options.parseArrays = options.parseArrays !== false;
  options.decoder = typeof options.decoder === 'function' ? options.decoder : defaults.decoder;
  options.allowDots = typeof options.allowDots === 'undefined' ? defaults.allowDots : !!options.allowDots;
  options.plainObjects = typeof options.plainObjects === 'boolean' ? options.plainObjects : defaults.plainObjects;
  options.allowPrototypes = typeof options.allowPrototypes === 'boolean' ? options.allowPrototypes : defaults.allowPrototypes;
  options.parameterLimit = typeof options.parameterLimit === 'number' ? options.parameterLimit : defaults.parameterLimit;
  options.strictNullHandling = typeof options.strictNullHandling === 'boolean' ? options.strictNullHandling : defaults.strictNullHandling;

  if (typeof options.charset !== 'undefined' && options.charset !== 'utf-8' && options.charset !== 'iso-8859-1') {
    throw new Error('The charset option must be either utf-8, iso-8859-1, or undefined');
  }

  if (typeof options.charset === 'undefined') {
    options.charset = defaults.charset;
  }

  if (str === '' || str === null || typeof str === 'undefined') {
    return options.plainObjects ? Object.create(null) : {};
  }

  var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
  var obj = options.plainObjects ? Object.create(null) : {}; // Iterate over the keys and setup the new object

  var keys = Object.keys(tempObj);

  for (var i = 0; i < keys.length; ++i) {
    var key = keys[i];
    var newObj = parseKeys(key, tempObj[key], options);
    obj = utils.merge(obj, newObj, options);
  }

  return utils.compact(obj);
};

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getCode */
/* harmony export (immutable) */ __webpack_exports__["a"] = getSSOTicket;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__index__ = __webpack_require__(18);





function getWebCode(DEFAULTS) {
  return new Promise(function (resolve, reject) {
    dd.runtime.permission.requestAuthCode({
      corpId: DEFAULTS.corpId,
      onSuccess: function (result) {
        resolve(result.code);
      },
      onFail: function (err) {
        reject(err);
      }
    });
  });
}

function getCode(DEFAULTS) {
  return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
    var response;
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_a) {
      switch (_a.label) {
        case 0:
          if (!(Object(__WEBPACK_IMPORTED_MODULE_3__index__["i" /* isWeb */])() && dd)) return [3, 2];
          return [4, getWebCode(DEFAULTS)];

        case 1:
          response = _a.sent();
          return [3, 4];

        case 2:
          return [4, Object(__WEBPACK_IMPORTED_MODULE_3__index__["j" /* promisify */])(dd.getAuthCode)];

        case 3:
          response = _a.sent().authCode;
          _a.label = 4;

        case 4:
          return [2, response];
      }
    });
  });
}
function getSSOTicket(opt) {
  return __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __awaiter */](this, void 0, void 0, function () {
    var DEFAULTS, appName, corpId, _a, ssoURL, code, response;

    return __WEBPACK_IMPORTED_MODULE_0_tslib__["d" /* __generator */](this, function (_b) {
      switch (_b.label) {
        case 0:
          DEFAULTS = Object(__WEBPACK_IMPORTED_MODULE_2__config__["a" /* default */])(opt);
          appName = DEFAULTS.appName, corpId = DEFAULTS.corpId, _a = DEFAULTS.ssoURL, ssoURL = _a === void 0 ? '' : _a;

          if (!appName || !corpId) {
            throw new Error('appName and corpId is required');
          }

          if (!Object(__WEBPACK_IMPORTED_MODULE_3__index__["d" /* isDingTalk */])()) {
            throw new Error('Only support the Dingtalk environment');
          }

          return [4, getCode(DEFAULTS)];

        case 1:
          code = _b.sent();
          return [4, Object(__WEBPACK_IMPORTED_MODULE_1__request_index__["b" /* makeDDHttpRequest */])({
            url: ssoURL,
            data: {
              code: code,
              corpid: corpId,
              client_id: appName,
              grant_type: 'SSO_TICKET'
            }
          })];

        case 2:
          response = _b.sent();
          return [2, response.data];
      }
    });
  });
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(14);

var defaults = {};
/* harmony default export */ __webpack_exports__["a"] = (function (opt) {
  if (opt === void 0) {
    opt = {};
  }

  if (Object.keys(defaults).length) {
    return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, defaults, opt);
  }

  var CONSTANTS = {
    development: {
      corpId: 'ding9aa0b506990cba7b',
      ssoURL: 'https://login-test.alibaba-inc.com/rpc/ssoToken/getSSOTicketByDingtalk.json',
      refreshTicketTime: 5 * 60 * 1000
    },
    production: {
      corpId: 'dingd8e1123006514592',
      ssoURL: 'https://login.alibaba-inc.com/rpc/ssoToken/getSSOTicketByDingtalk.json',
      refreshTicketTime: 5 * 60 * 1000
    }
  };
  defaults = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, CONSTANTS[opt.env || 'production'], opt);
  return defaults;
});

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_types__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__snapshot_storage__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mock_convert__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ResponseError__ = __webpack_require__(36);









var defaultResponseAdaptor = function (data) {
  if (data.success) {
    return Promise.resolve(data.content);
  } else {
    return Promise.reject(new __WEBPACK_IMPORTED_MODULE_7__ResponseError__["b" /* ShimmerResponseError */](data.errorMsg, data.errorCode));
  }
};

var RequestGroup = function () {
  function RequestGroup(baseConfig, options) {
    if (baseConfig === void 0) {
      baseConfig = {};
    }

    if (options === void 0) {
      options = {};
    }

    this.baseConfig = baseConfig;
    this.options = options;
    this.storage = new __WEBPACK_IMPORTED_MODULE_4__snapshot_storage__["a" /* default */]();
  }

  RequestGroup.prototype.create = function (name, _config, _a) {
    var _b = _a === void 0 ? {} : _a,
        request = _b.request,
        response = _b.response;

    var self = this;
    var requestTypeMark = Object(__WEBPACK_IMPORTED_MODULE_2__type_types__["d" /* parse */])(request);
    var responseTypeMark = Object(__WEBPACK_IMPORTED_MODULE_2__type_types__["d" /* parse */])(response);
    var requestChecker = Object(__WEBPACK_IMPORTED_MODULE_1__type__["b" /* getProdChecker */])(requestTypeMark);

    var baseConfig = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.baseConfig, _config);

    var responseChecker = "development" !== 'production' && (this.options.mode === 'development' || this.options.mode === undefined) ? null : Object(__WEBPACK_IMPORTED_MODULE_1__type__["b" /* getProdChecker */])(responseTypeMark);

    if ("development" !== 'production' && this.options.mode === 'joint') {
      if (!('url' in baseConfig)) {
        console.error("a request with no url has been found, with config", _config);
      }
    }

    var result = function (param) {
      if (param === void 0) {
        param = {};
      }

      var config = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, baseConfig, baseConfig.method !== 'get' ? {
        data: param
      } : {
        params: param
      });

      if (true) {
        if (self.options.mode === 'development' || self.options.mode === undefined) {
          if (responseChecker === null) {
            if ('mock' in result) {
              if (typeof result.mock === 'function') {
                return Promise.resolve(result.mock(param));
              } else {
                return Promise.resolve(result.mock);
              }
            }

            var responseTypeMarkWithMock = Object(__WEBPACK_IMPORTED_MODULE_6__mock_convert__["a" /* UNSAFE_MockConfigApplyToTypeMark */])(Object(__WEBPACK_IMPORTED_MODULE_6__mock_convert__["b" /* UNSAFE_typeMarkToMockBase */])(responseTypeMark), responseTypeMark);
            responseChecker = Object(__WEBPACK_IMPORTED_MODULE_1__type__["a" /* getMockChecker */])(responseTypeMarkWithMock);
          }

          var requestCheckResult = requestChecker(param);
          console.log("requesting with config", _config);

          if (requestCheckResult) {
            console.warn(requestCheckResult.errorMsg);
          }

          var reponseMock = responseChecker(undefined);
          return Promise.resolve(reponseMock && reponseMock.corrected);
        } else {
          var requestCheckResult = requestChecker(param);
          var configPromise = Promise.resolve(config);
          console.log("requesting with config", _config);

          if (requestCheckResult) {
            var option = {
              corrected: requestCheckResult.corrected
            };
            configPromise = Object(__WEBPACK_IMPORTED_MODULE_5__notification__["a" /* default */])({
              name: name,
              url: config.url,
              isResponse: false,
              errorMsg: requestCheckResult.errorMsg
            }, option).then(function (r) {
              return r[1];
            }).then(function (c) {
              return __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, config, {
                data: c
              });
            });
          }

          return configPromise.then(function (config) {
            return Object(__WEBPACK_IMPORTED_MODULE_3__request__["c" /* makeRequest */])(config).then(function (r) {
              return r.data;
            }).then(self.options.responseAdaptor || defaultResponseAdaptor).then(function (response) {
              var responseCheckResult = responseChecker(response);

              if (responseCheckResult) {
                console.error(responseCheckResult.errorMsg);
                var storageResults = self.storage.getAllStorageFromConfig(config);

                if (storageResults.length > 0) {
                  console.log('got response data from storage');
                }

                var option_1 = {};
                storageResults.forEach(function (v, i) {
                  option_1["" + i] = v;
                });
                option_1.corrected = responseCheckResult.corrected;
                return Object(__WEBPACK_IMPORTED_MODULE_5__notification__["a" /* default */])({
                  name: name,
                  url: config.url,
                  isResponse: true,
                  errorMsg: responseCheckResult.errorMsg
                }, option_1).then(function (r) {
                  return r[1];
                });
              }

              self.storage.setStorage(config, response);
              return response;
            }).catch(function (error) {
              console.error('Shimmer response error:', error);
              var responseCheckResult = responseChecker(undefined);

              if (responseCheckResult) {
                console.error(responseCheckResult.errorMsg);
                var storageResults = self.storage.getAllStorageFromConfig(config);
                var option_2 = {};
                storageResults.forEach(function (v, i) {
                  option_2["" + i] = v;
                });
                option_2.corrected = responseCheckResult.corrected;
                return Object(__WEBPACK_IMPORTED_MODULE_5__notification__["a" /* default */])({
                  name: name,
                  url: config.url,
                  isResponse: true,
                  errorMsg: responseCheckResult.errorMsg
                }, option_2).then(function (r) {
                  return r[1];
                });
              }

              throw error;
            });
          });
        }
      } else {
        return makeRequest(config).then(function (r) {
          return r.data;
        }).then(function (response) {
          var responseCheckResult = responseChecker(response);

          if (responseCheckResult) {
            console.error(responseCheckResult.errorMsg);
            var finalResponse = responseCheckResult.corrected;
            setTimeout(function () {
              throw new Error("" + config.baseURL + config.url + " response type error " + JSON.stringify(responseCheckResult.errorMsg));
            }, 0);
            return finalResponse;
          }

          return response;
        });
      }
    };

    return result;
  };

  return RequestGroup;
}();

/* harmony default export */ __webpack_exports__["a"] = (RequestGroup);

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getProdChecker;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMockChecker;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_console__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_index__ = __webpack_require__(123);




function createErrorMsg(expected, actual, path) {
  if (path === void 0) {
    path = [];
  }

  return "expected response." + (path.join('.') || '(root)') + " to be " + expected + ", but got " + actual;
}

function getProdChecker(mark, path) {
  if (path === void 0) {
    path = [];
  }

  switch (mark.$s_type) {
    case 'and':
      {
        var checkers_1 = mark.$s_param.map(function (m) {
          return getProdChecker(m, path);
        });
        return function (original) {
          var result = checkers_1.map(function (c) {
            return c(original);
          });
          var errors = result.filter(Boolean);

          if (errors.length > 0) {
            return {
              errorMsg: errors.map(function (e) {
                return e.errorMsg;
              }).join('\n\tand '),
              original: original
            };
          }

          return;
        };
      }

    case 'or':
      {
        var checkers_2 = mark.$s_param.map(function (m) {
          return getProdChecker(m, path);
        });
        return function (original) {
          var result = checkers_2.map(function (c) {
            return c(original);
          });
          var errors = result.filter(Boolean);

          if (errors.length === result.length) {
            return {
              errorMsg: errors.map(function (e) {
                return e.errorMsg;
              }).join('\n\tor '),
              original: original
            };
          }

          return;
        };
      }

    case 'array':
      {
        return function (original) {
          var errorMsgs = [];

          if (original == null && mark.$s_optional) {
            return;
          }

          var o = original;

          if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isArray */])(original)) {
            if (false) {
              return {
                corrected: Array.from ? Array.from(original || []) : [],
                errorMsg: createErrorMsg('array', original, path),
                original: original
              };
            } else {
              o = Array.from ? Array.from(original) : [];
              errorMsgs.push(createErrorMsg('array', original, path));
            }
          }

          var result = o.map(function (v, i) {
            return getProdChecker(mark.$s_param, path.concat(["" + i]))(v);
          });
          var errors = result.filter(Boolean);

          if (errors.length > 0) {
            return {
              corrected: result.map(function (r, i) {
                return r && 'corrected' in r ? r.corrected : o[i];
              }),
              errorMsg: errors.map(function (e) {
                return e.errorMsg;
              }).join('\n\tand '),
              original: original
            };
          }

          return;
        };
      }

    case 'object':
      {
        var param_1 = mark.$s_param;
        var paramKeys_1 = Object.keys(param_1);
        var checkers_3 = paramKeys_1.map(function (k) {
          return [k, getProdChecker(param_1[k], path.concat([k]))];
        });
        return function (original) {
          var errorMsgs = [];

          if (original == null && mark.$s_optional) {
            return;
          }

          var o = original;

          if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* isObject */])(original)) {
            if (false) {
              return {
                corrected: {},
                errorMsg: createErrorMsg('object', original, path),
                original: original
              };
            } else {
              o = {};
              errorMsgs.push(createErrorMsg('object', original, path));
            }
          }

          var result = checkers_3.map(function (_a) {
            var k = _a[0],
                c = _a[1];
            return c(o[k]);
          });
          var errors = result.filter(Boolean);

          if (errors.length > 0) {
            var corrected_1 = {};
            result.forEach(function (r, i) {
              var key = paramKeys_1[i];
              corrected_1[key] = r && 'corrected' in r ? r.corrected : o[key];
            });
            errorMsgs.push.apply(errorMsgs, errors.map(function (e) {
              return e.errorMsg;
            }));
            return {
              corrected: corrected_1,
              errorMsg: errorMsgs.join('\n\tand '),
              original: original
            };
          }

          return;
        };
      }

    case 'string':
      return function (original) {
        if (original == null && mark.$s_optional) {
          return;
        }

        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* isString */])(original)) {
          return {
            corrected: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* isNumber */])(original) ? "" + original : Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* isObject */])(original) && original.toString ? original.toString() : original ? "" + original : '',
            errorMsg: createErrorMsg('string', original, path),
            original: original
          };
        }

        return;
      };

    case 'number':
      return function (original) {
        if (original == null && mark.$s_optional) {
          return;
        }

        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* isNumber */])(original)) {
          return {
            corrected: Number(original) || 0,
            errorMsg: createErrorMsg('number', original, path),
            original: original
          };
        }

        return;
      };

    case 'boolean':
      return function (original) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* isBoolean */])(original)) {
          return {
            corrected: !!original,
            errorMsg: createErrorMsg('boolean', original, path),
            original: original
          };
        }

        return;
      };

    case 'undefined':
      return function (original) {
        if (original !== undefined) {
          return {
            errorMsg: createErrorMsg('undefined', original, path),
            original: original
          };
        }

        return;
      };

    case 'null':
      return function (original) {
        if (original !== null) {
          return {
            errorMsg: createErrorMsg('null', original, path),
            original: original
          };
        }

        return;
      };

    default:
      Object(__WEBPACK_IMPORTED_MODULE_0__notification_console__["a" /* ignorableError */])("expect getChecker with a known mark but receiving " + mark);

    case 'any':
      return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* EMPTY_FUNC */];
  }
}
function getMockChecker(mark, path) {
  if (path === void 0) {
    path = [];
  }

  switch (mark.$s_type) {
    case 'and':
      {
        var checkers_4 = mark.$s_param.map(function (m) {
          return getMockChecker(m, path);
        });
        return function (original) {
          var result = checkers_4.map(function (c) {
            return c(original);
          });
          var errors = result.filter(Boolean);

          if (errors.length > 0) {
            return {
              errorMsg: errors.map(function (e) {
                return e.errorMsg;
              }).join('\n\tand '),
              original: original
            };
          }

          return;
        };
      }

    case 'or':
      {
        var checkers_5 = mark.$s_param.map(function (m) {
          return getMockChecker(m, path);
        });
        return function (original) {
          var result = checkers_5.map(function (c) {
            return c(original);
          });
          var errors = result.filter(Boolean);

          if (errors.length === result.length) {
            return {
              errorMsg: errors.map(function (e) {
                return e.errorMsg;
              }).join('\n\tor '),
              original: original
            };
          }

          return;
        };
      }

    case 'array':
      {
        return function (original) {
          var errorMsgs = [];

          if (original == null && mark.$s_optional) {
            return;
          }

          var o = original;

          if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* isArray */])(original)) {
            if (false) {
              return {
                corrected: Array.from ? Array.from(original || []) : [],
                errorMsg: createErrorMsg('array', original, path),
                original: original
              };
            } else {
              o = Array.from ? Array.from(original) : [];
              errorMsgs.push(createErrorMsg('array', original, path));
            }
          }

          var result = o.map(function (v, i) {
            return getMockChecker(mark.$s_param, path.concat(["" + i]))(v);
          });
          var errors = result.filter(Boolean);

          if (errors.length > 0) {
            return {
              corrected: result.map(function (r, i) {
                return r && 'corrected' in r ? r.corrected : o[i];
              }),
              errorMsg: errors.map(function (e) {
                return e.errorMsg;
              }).join('\n\tand '),
              original: original
            };
          }

          return;
        };
      }

    case 'object':
      {
        var param_2 = mark.$s_param;
        var paramKeys_2 = Object.keys(param_2);
        var checkers_6 = paramKeys_2.map(function (k) {
          return [k, getMockChecker(param_2[k], path.concat([k]))];
        });
        return function (original) {
          var errorMsgs = [];

          if (original == null && mark.$s_optional) {
            return;
          }

          var o = original;

          if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* isObject */])(original)) {
            if (false) {
              return {
                corrected: {},
                errorMsg: createErrorMsg('object', original, path),
                original: original
              };
            } else {
              o = {};
              errorMsgs.push(createErrorMsg('object', original, path));
            }
          }

          var result = checkers_6.map(function (_a) {
            var k = _a[0],
                c = _a[1];
            return c(o[k]);
          });
          var errors = result.filter(Boolean);

          if (errors.length > 0) {
            var corrected_2 = {};
            result.forEach(function (r, i) {
              var key = paramKeys_2[i];
              corrected_2[key] = r && 'corrected' in r ? r.corrected : o[key];
            });
            errorMsgs.push.apply(errorMsgs, errors.map(function (e) {
              return e.errorMsg;
            }));
            return {
              corrected: corrected_2,
              errorMsg: errorMsgs.join('\n\tand '),
              original: original
            };
          }

          return;
        };
      }

    case 'string':
      return function (original) {
        if (original == null && mark.$s_optional) {
          return;
        }

        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* isString */])(original)) {
          return {
            corrected: Object(__WEBPACK_IMPORTED_MODULE_2__mock_index__["c" /* stringGenerator */])(mark.$s_mock),
            errorMsg: createErrorMsg('string', original, path),
            original: original
          };
        }

        return;
      };

    case 'number':
      return function (original) {
        if (original == null && mark.$s_optional) {
          return;
        }

        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* isNumber */])(original)) {
          return {
            corrected: Object(__WEBPACK_IMPORTED_MODULE_2__mock_index__["b" /* numberGenerator */])(mark.$s_mock),
            errorMsg: createErrorMsg('number', original, path),
            original: original
          };
        }

        return;
      };

    case 'boolean':
      return function (original) {
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* isBoolean */])(original)) {
          return {
            corrected: Object(__WEBPACK_IMPORTED_MODULE_2__mock_index__["a" /* booleanGenerator */])(mark.$s_mock),
            errorMsg: createErrorMsg('boolean', original, path),
            original: original
          };
        }

        return;
      };

    case 'undefined':
      return function (original) {
        if (original !== undefined) {
          return {
            errorMsg: createErrorMsg('undefined', original, path),
            original: original
          };
        }

        return;
      };

    case 'null':
      return function (original) {
        if (original !== null) {
          return {
            errorMsg: createErrorMsg('null', original, path),
            original: original
          };
        }

        return;
      };

    default:
      Object(__WEBPACK_IMPORTED_MODULE_0__notification_console__["a" /* ignorableError */])("expect getChecker with a known mark but receiving " + mark);

    case 'any':
      return __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* EMPTY_FUNC */];
  }
}

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_array__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generators_boolean__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generators_number__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generators_string__ = __webpack_require__(132);
/* unused harmony reexport arrayGenerator */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__generators_boolean__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__generators_number__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__generators_string__["a"]; });






/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export arrayGenerator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic__ = __webpack_require__(125);



function arrayGenerator(option) {
  if (option === void 0) {
    option = {
      is: 'basic'
    };
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* isArray */])(option)) {
    return option;
  }

  switch (option.is) {
    default:
      Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* optionWarn */])('string', option);

    case 'basic':
      return Object(__WEBPACK_IMPORTED_MODULE_2__basic__["a" /* basicGenerator */])(option);
  }
}

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basicGenerator;
var DEFAULT_ARRAY_LENGTH = 6;
function basicGenerator(options) {
  if (options === void 0) {
    options = {
      length: DEFAULT_ARRAY_LENGTH
    };
  }

  var result = Array(options.length || DEFAULT_ARRAY_LENGTH).fill({});
  var getValue = options && options.getValue;

  if (getValue) {
    return result.map(function () {
      return getValue();
    });
  }

  return result;
}

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = booleanGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic__ = __webpack_require__(127);


function booleanGenerator(option) {
  if (option === void 0) {
    option = {
      is: 'basic'
    };
  }

  if (typeof option === 'boolean') {
    return option;
  }

  switch (option.is) {
    default:
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* optionWarn */])('string', option);

    case 'basic':
      return Object(__WEBPACK_IMPORTED_MODULE_1__basic__["a" /* basicGenerator */])(option);
  }
}

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basicGenerator;
function basicGenerator(option) {
  var defualtValue = Math.random() > 0.5 ? true : false;

  if (!option) {
    return defualtValue;
  }

  if (option.trueRate) {
    return Math.random() > option.trueRate ? true : false;
  }

  return defualtValue;
}

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = numberGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__float__ = __webpack_require__(131);




function numberGenerator(option) {
  if (option === void 0) {
    option = {
      is: 'basic'
    };
  }

  if (typeof option === 'number') {
    return option;
  }

  switch (option.is) {
    case 'date':
      return Object(__WEBPACK_IMPORTED_MODULE_2__date__["a" /* dateGenerator */])();

    case 'float':
      return Object(__WEBPACK_IMPORTED_MODULE_3__float__["a" /* floatGenerator */])(option);

    default:
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* optionWarn */])('string', option);

    case 'basic':
      return Object(__WEBPACK_IMPORTED_MODULE_1__basic__["a" /* basicGenerator */])(option);
  }
}

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basicGenerator;
function basicGenerator(option) {
  var randomNumber = Math.random() * 1000;

  if (!option) {
    return randomNumber;
  }

  var _a = option,
      min = _a.min,
      max = _a.max;

  if (min && max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return randomNumber;
}

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dateGenerator;
function dateGenerator() {
  return Date.now();
}

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = floatGenerator;
function floatGenerator(options) {
  var max = options.max,
      min = options.min,
      fixed = options.fixed;
  var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return Number(randomnumber.toFixed(fixed));
}

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stringGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tele__ = __webpack_require__(134);




function stringGenerator(option) {
  if (option === void 0) {
    option = {
      is: 'basic'
    };
  }

  if (typeof option === 'string') {
    return option;
  }

  switch (option.is) {
    case 'email':
      return Object(__WEBPACK_IMPORTED_MODULE_2__email__["a" /* emailGenerator */])();

    case 'tel':
    case 'telephone':
      return Object(__WEBPACK_IMPORTED_MODULE_3__tele__["a" /* telGenerator */])();

    case 'mobile':
      return Object(__WEBPACK_IMPORTED_MODULE_3__tele__["a" /* telGenerator */])();

    default:
      Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* optionWarn */])('string', option);

    case 'basic':
      return Object(__WEBPACK_IMPORTED_MODULE_1__basic__["a" /* basicGenerator */])(option);
  }
}

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__(38);
var domains = ['gmail.com', 'hotmail.com', 'qq.com', '163.com'];

function emailGenerator() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__basic__["a" /* basicGenerator */])() + domains[0];
}

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTelRandom */
/* harmony export (immutable) */ __webpack_exports__["a"] = telGenerator;
/* unused harmony export mobileTelGenerator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__(38);

var tels = '0123456789';
var createTelRandom = function (length) {
  return new Array(length).fill(0).map(function (_, index) {
    return tels[index];
  }).join('');
};
function telGenerator() {
  var areaCode = Object(__WEBPACK_IMPORTED_MODULE_0__basic__["b" /* createRandom */])(4);
  var endPhone = Object(__WEBPACK_IMPORTED_MODULE_0__basic__["b" /* createRandom */])(7);
  return areaCode + "-" + endPhone;
}
function mobileTelGenerator() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__basic__["b" /* createRandom */])(11);
}

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getStorage */
/* unused harmony export setStorage */
/* unused harmony export removeItem */
/* unused harmony export clearAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(18);

var prefix = 'recoreService';

var md5 = function (url) {
  var content = url || '/unknown_url';
  content = "" + prefix + content + "/" + Date.now();
  return content;
};

var getStorage = function (name) {
  var v = localStorage.getItem(name);
  return v && JSON.parse(v);
};
var setStorage = function (name, value) {
  return localStorage.setItem(name, JSON.stringify(value));
};
var removeItem = function (key) {
  return localStorage.removeItem(key);
};
var clearAll = function () {
  return localStorage.clear();
};

var SnapShotManager = function () {
  function SnapShotManager() {}

  SnapShotManager.prototype.keyGenerator = function (config) {
    var url = config.url;
    var key = config.key;

    if (!key) {
      return md5(url);
    } else {
      return md5(key);
    }
  };

  SnapShotManager.prototype.getPrefixUrlFromKey = function (key) {
    var _a = key.split('/'),
        prefix = _a[0],
        url = _a[1],
        time = _a.slice(2);

    var prefixString = prefix + '/' + url;
    return prefixString;
  };

  SnapShotManager.prototype.getSavedList = function (key) {
    var _this = this;

    var savedList = Array.from(Array(localStorage.length), function (d, i) {
      return i;
    }).filter(function (item, index) {
      var prefixString = _this.getPrefixUrlFromKey(key);

      var localStorageKey = localStorage.key(index) || '';
      return localStorageKey.startsWith(prefixString);
    }).map(function (index) {
      return localStorage.key(index) || '';
    });
    return savedList;
  };

  SnapShotManager.prototype.setStorage = function (config, responseConfig) {
    var key = this.keyGenerator(config);
    var savedList = this.getSavedList(key);

    if (savedList.length >= 5) {
      var start = savedList[0];
      removeItem(start);
    }

    var lastKey = savedList[savedList.length - 1];
    var lastSavedItem = getStorage(lastKey);

    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["e" /* isEqual */])(lastSavedItem, responseConfig)) {
      return;
    }

    setStorage(key, responseConfig);
  };

  SnapShotManager.prototype.getStorage = function (config) {
    var key = this.keyGenerator(config);
    var savedList = this.getSavedList(key);
    key = savedList[Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["k" /* random */])(0, savedList.length - 1)];
    return getStorage(key);
  };

  SnapShotManager.prototype.getAllStorageFromConfig = function (config) {
    var key = this.keyGenerator(config);
    var savedList = this.getSavedList(key);
    return savedList.map(function (keyItem) {
      return getStorage(keyItem);
    });
  };

  SnapShotManager.prototype.clearAll = function () {
    clearAll();
  };

  return SnapShotManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (SnapShotManager);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = logRequestErrorWithCorrectionSelections;
function logRequestErrorWithCorrectionSelections(_, options) {
  var opts = options || {};
  var keys = Object.keys(opts);
  return Promise.resolve([keys[0], opts[keys[0]]]);
}

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = UNSAFE_typeMarkToMockBase;
/* harmony export (immutable) */ __webpack_exports__["a"] = UNSAFE_MockConfigApplyToTypeMark;
function UNSAFE_typeMarkToMockBase(mark) {
  if (mark.$s_type === 'object') {
    var result_1 = {};
    var param_1 = mark.$s_param;
    Object.keys(param_1 || {}).forEach(function (k) {
      result_1[k] = UNSAFE_typeMarkToMockBase(param_1[k]);
    });
    return result_1;
  } else {
    return {};
  }
}
function UNSAFE_MockConfigApplyToTypeMark(config, mark) {
  if (mark.$s_type === 'and' || mark.$s_type === 'or') {
    return mark;
  } else if (mark.$s_type === 'object') {
    var param_2 = mark.$s_param;
    Object.keys(param_2 || {}).forEach(function (k) {
      param_2[k] = UNSAFE_MockConfigApplyToTypeMark(config[k], param_2[k]);
    });
    return mark;
  } else {
    if (Object.keys(config || {}).length > 0) {
      mark.$s_mock = config;
    }

    return mark;
  }
}

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return RoutePage404; });
/* harmony export (immutable) */ __webpack_exports__["e"] = createDynamicLoader;
/* harmony export (immutable) */ __webpack_exports__["f"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__route_wrapper__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__redirect__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__link__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_link__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__with_router__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_12__with_router__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_9__link__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_10__nav_link__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_11__utils__["d"]; });














var RoutePage404 = function RoutePage404(_ref) {
  var match = _ref.match,
      defined = _ref.defined;
  var msg = "route page \"".concat(match.url, "\" of file \"").concat(defined.main, "\" was not exists");

  if (true) {
    console.error("404 NotFound: ".concat(msg, "."));
    return "404 NotFound: ".concat(msg, ".");
  } else {
    reportError(msg);
  }

  return "404 NotFound: page \"".concat(match.url, "\" was not found.");
};
function createDynamicLoader(loader) {
  var page = function page(props) {
    return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_5__loader__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({
      loader: loader
    }, props));
  };

  page.displayName = 'DynamicPage';
  return page;
}

// TODO remove these codes, refactor
function patchBeforeRoute(beforeRoute) {
  var meta = document.head.querySelector('meta[name="data-spm"]');
  var spmA = meta ? meta.content : null;

  if (!spmA) {
    return beforeRoute;
  }

  return function (defined) {
    var spmB = defined.spmB;

    if (spmB) {
      if (!window.AliMonitorQueue) {
        window.AliMonitorQueue = [];
      }

      document.body.dataset.spm = spmB;
      window.AliMonitorQueue.push(function () {
        window.AliMonitor.switchPage({
          spmA: spmA,
          spmB: spmB
        });
      });
    }

    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }

    return beforeRoute ? beforeRoute.apply(void 0, [defined].concat(rest)) : true;
  };
}

function createRouter(config, pagesMap, hooks, page) {
  if (hooks) {
    if (typeof hooks === 'function') {
      // TODO support thenable return
      config = hooks(config) || config;
    } else {
      config = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, config, hooks);
    }
  }

  var _config = config,
      _config$exact = _config.exact,
      exact = _config$exact === void 0 ? false : _config$exact,
      baseDir = _config.baseDir,
      beforeRoute = _config.beforeRoute;
  var normalizedRoutes = null;
  var normalized = false;

  function getRoutes() {
    if (normalized) {
      return normalizedRoutes;
    }

    normalized = true;

    if (!config.routes) {
      return normalizedRoutes;
    }

    var patchedBeforeRoute = patchBeforeRoute(beforeRoute); // normalize routes

    normalizedRoutes = config.routes.map(function (route) {
      var ret = {
        defined: route,
        path: route.path,
        exact: route.exact != null ? route.exact : exact
      };

      if (route.children) {
        ret.children = route.children;
        return ret;
      }

      if (route.redirect) {
        ret.children = function (_ref2) {
          var match = _ref2.match;
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_8__redirect__["a" /* default */], {
            computedMatch: match,
            to: route.redirect
          });
        };

        return ret;
      }

      var Component;

      if (route.main) {
        var key = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["e" /* resolve */])(route.main, baseDir);
        Component = pagesMap[key];
      } else {
        Component = function Component() {
          return null;
        };
      }

      if (!patchedBeforeRoute) {
        ret.children = function (props) {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(Component, props);
        };
      } else {
        ret.children = function (props) {
          return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_6__route_wrapper__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, props, {
            beforeRoute: patchedBeforeRoute,
            Component: Component
          }));
        };
      }

      return ret;
    }).filter(Boolean);
    return normalizedRoutes;
  }

  function factory(parentController, props) {
    var routes = getRoutes();
    return routes ? Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_7__router__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectSpread___default()({}, props, {
      parentController: parentController,
      routes: routes,
      fixed: true
    })) : null;
  }

  if (page) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* default */])(function ViewFactory() {
      return function (controller) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__utils__["b" /* X */])(controller.__m({
          key: 'main'
        }), function (_ref3) {
          var scope = _ref3.scope;
          return scope.__routerView();
        });
      };
    }, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_typeof___default()(page) === 'object' ? page : undefined, factory);
  }

  return factory;
}

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);







/**
 * 动态加载Wrapper
 * @author changming<changming.zy@alibaba-inc.com>
 */


function interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj.default : obj;
}

var Loader =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(Loader, _Component);

  function Loader() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, Loader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(Loader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      Component: null
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(Loader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // TODO support more states
      this.props.loader().then(function (Component) {
        _this2.setState({
          Component: interopRequireDefault(Component)
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          loader = _this$props.loader,
          props = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["loader"]);

      var Component = this.state.Component;

      if (Component) {
        return Object(__WEBPACK_IMPORTED_MODULE_6_react__["createElement"])(Component, props);
      } // TODO customer loading handler?


      return Object(__WEBPACK_IMPORTED_MODULE_6_react__["createElement"])('div', null, 'loading');
    }
  }]);

  return Loader;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

Loader.displayName = 'Loader';
/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_typeof__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigator__ = __webpack_require__(8);








/**
 * RouteWrapper
 * @author changming<changming.zy@alibaba-inc.com>
 */


var AuthStatus;

(function (AuthStatus) {
  AuthStatus["not"] = "NOT";
  AuthStatus["pass"] = "PASS";
  AuthStatus["fail"] = "FAIL";
})(AuthStatus || (AuthStatus = {}));

function isRedirect(res) {
  var t = __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_typeof___default()(res);

  return t === 'string' || t === 'number';
}

var RouteWrapper =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(RouteWrapper, _Component);

  function RouteWrapper() {
    var _getPrototypeOf2;

    var _this;

    __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_classCallCheck___default()(this, RouteWrapper);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_possibleConstructorReturn___default()(this, (_getPrototypeOf2 = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_getPrototypeOf___default()(RouteWrapper)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      authPassed: AuthStatus.not,
      prevComponent: null
    };
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_createClass___default()(RouteWrapper, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.state.authPassed === AuthStatus.not) {
        this.checkAuth();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkAuth();
    }
  }, {
    key: "checkAuth",
    value: function checkAuth() {
      var _this2 = this;

      var _this$props = this.props,
          beforeRoute = _this$props.beforeRoute,
          defined = _this$props.defined,
          match = _this$props.match;
      var history = __WEBPACK_IMPORTED_MODULE_8__navigator__["a" /* default */].history;

      if (beforeRoute) {
        var ret = beforeRoute(defined, match, history);

        if (ret === true) {
          this.setState({
            authPassed: AuthStatus.pass
          });
        } else if (ret === false) {
          this.setState({
            authPassed: AuthStatus.fail
          });
        } else if (isRedirect(ret)) {
          history.replace(String(ret));
        } else if (ret && ret.then) {
          ret.then(function (res) {
            if (isRedirect(res)) {
              history.replace(String(ret));
              return;
            }

            _this2.setState({
              authPassed: AuthStatus.pass
            });
          }, function (res) {
            if (isRedirect(res)) {
              history.replace(String(ret));
              return;
            }

            _this2.setState({
              authPassed: AuthStatus.fail
            });
          });
        }
      } else {
        this.setState({
          authPassed: AuthStatus.pass
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Component = _this$props2.Component,
          beforeRoute = _this$props2.beforeRoute,
          others = __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectWithoutProperties___default()(_this$props2, ["Component", "beforeRoute"]);

      if (this.state.authPassed === AuthStatus.pass) {
        return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(Component, others);
      } else if (this.state.authPassed === AuthStatus.fail) {
        return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])('div', null, 'You have no authority to view this page');
      }

      return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])('div', null, 'loading');
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.Component !== prevState.prevComponent) {
        return {
          authPassed: AuthStatus.not,
          prevComponent: nextProps.Component
        };
      }

      return null;
    }
  }]);

  return RouteWrapper;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (RouteWrapper);

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Router; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__route_context__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_obx_utils__ = __webpack_require__(2);













var Router =
/*#__PURE__*/
function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(Router, _Component);

  function Router(props) {
    var _this;

    __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, Router);

    _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(Router).call(this, props));
    _this.dispose = void 0;
    _this.contextMap = {};
    _this.location = void 0;
    var history = __WEBPACK_IMPORTED_MODULE_8__navigator__["a" /* default */].history;
    _this.location = history.location;
    _this.dispose = history.listen(function () {
      if (!Object(__WEBPACK_IMPORTED_MODULE_9__utils__["c" /* locationIs */])(_this.location, history.location)) {
        _this.forceUpdate();
      }

      _this.location = history.location;
    });
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(Router, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.dispose();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate() {
      // TODO compare rest allow "rest" props passthrough
      if (this.props.fixed) {
        return false;
      }

      return true;
    }
  }, {
    key: "getSubContext",
    value: function getSubContext(path, match) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_11__core_obx_utils__["k" /* hasOwnProperty */])(this.contextMap, path)) {
        this.contextMap[path] = new __WEBPACK_IMPORTED_MODULE_10__route_context__["a" /* default */](match);
      } else {
        this.contextMap[path].setMatch(match);
      }

      return this.contextMap[path];
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          routes = _this$props.routes,
          fixed = _this$props.fixed,
          rest = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["routes", "fixed"]);

      var _ref = __WEBPACK_IMPORTED_MODULE_8__navigator__["a" /* default */].history,
          location = _ref.location;
      this.location = location;
      return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_10__route_context__["a" /* default */].Consumer, null, function (ctx) {
        var match;
        var route;

        for (var i = 0, l = routes.length; i < l; i++) {
          route = routes[i];
          match = Object(__WEBPACK_IMPORTED_MODULE_9__utils__["d" /* matchPath */])(location.pathname, route, ctx.match);

          if (match) {
            break;
          }
        }

        if (!match) {
          return null;
        }

        return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_10__route_context__["a" /* default */].Provider, {
          value: _this2.getSubContext(route.path, match)
        }, route.children(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
          match: match,
          location: location,
          defined: route.defined
        }, rest)));
      });
    }
  }]);

  return Router;
}(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]);



/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = withRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__route_context__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__navigator__ = __webpack_require__(8);











function withRouter(Custom) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    __WEBPACK_IMPORTED_MODULE_6__babel_runtime_helpers_inherits___default()(WithRouter, _Component);

    function WithRouter(props) {
      var _this;

      __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_classCallCheck___default()(this, WithRouter);

      _this = __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_getPrototypeOf___default()(WithRouter).call(this, props));
      _this.dispose = null;
      _this.asRoutePage = false;
      _this.location = void 0;

      if (props.match instanceof __WEBPACK_IMPORTED_MODULE_9__utils__["a" /* MatchResult */] && props.location) {
        _this.asRoutePage = true;
      } else {
        var history = __WEBPACK_IMPORTED_MODULE_10__navigator__["a" /* default */].history;
        _this.location = history.location;
        _this.dispose = history.listen(function () {
          if (!Object(__WEBPACK_IMPORTED_MODULE_9__utils__["c" /* locationIs */])(_this.location, history.location)) {
            _this.forceUpdate();
          }

          _this.location = history.location;
        });
      }

      return _this;
    }

    __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_createClass___default()(WithRouter, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (this.dispose) {
          this.dispose();
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var _this$props = this.props,
            wrappedComponentRef = _this$props.wrappedComponentRef,
            originProps = __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_objectWithoutProperties___default()(_this$props, ["wrappedComponentRef"]);

        return this.asRoutePage ? Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(Custom, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, originProps, {
          ref: wrappedComponentRef
        })) : Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_8__route_context__["a" /* default */].Consumer, null, function (ctx) {
          var match = ctx.match,
              history = ctx.history,
              location = ctx.location;
          _this2.location = location;
          return Object(__WEBPACK_IMPORTED_MODULE_7_react__["createElement"])(Custom, __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({
            match: match,
            location: location,
            history: history
          }, originProps, {
            ref: wrappedComponentRef
          }));
        });
      }
    }]);

    return WithRouter;
  }(__WEBPACK_IMPORTED_MODULE_7_react__["Component"]), _class.displayName = "withRouter(".concat(Custom.displayName || Custom.name, ")"), _class.WrappedComponent = Custom, _temp;
}

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (immutable) */ __webpack_exports__["c"] = setLocale;
/* harmony export (immutable) */ __webpack_exports__["b"] = getLocale;
/* harmony export (immutable) */ __webpack_exports__["a"] = createI18n;
var languageMap = {
  en: 'en_US',
  zh: 'zh_CN',
  zt: 'zh_TW',
  es: 'es_ES',
  pt: 'pt_PT',
  fr: 'fr_FR',
  de: 'de_DE',
  it: 'it_IT',
  ru: 'ru_RU',
  ja: 'ja_JP',
  ko: 'ko_KR',
  ar: 'ar_SA',
  tr: 'tr_TR',
  th: 'th_TH',
  vi: 'vi_VN',
  nl: 'nl_NL',
  he: 'iw_IL',
  id: 'in_ID',
  pl: 'pl_PL',
  hi: 'hi_IN',
  uk: 'uk_UA',
  ms: 'ms_MY',
  tl: 'tl_PH'
};
var localeCached = null;
function setLocale(locale) {
  localeCached = locale;
}
function getLocale() {
  if (localeCached) {
    return localeCached;
  }

  var _ref = global,
      g_config = _ref.g_config,
      navigator = _ref.navigator;

  if (g_config) {
    if (g_config.locale) {
      localeCached = languageMap[g_config.locale] || g_config.locale;
      return localeCached;
    }
  }

  localeCached = navigator.language.replace('-', '_') || 'zh_CN';
  return localeCached;
}
function createI18n(key, locale) {
  if (locale) {
    setLocale(locale);
  } else {
    locale = getLocale();
  }

  var i18n;

  if (global[key]) {
    i18n = global[key][locale] || {};
  } else {
    key = "".concat(key, "_").concat(locale.replace('_', '-').toLocaleLowerCase());
    i18n = global[key] || {};
  }

  return function (key) {
    return i18n[key];
  };
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(22)))

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mockable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createApi; });
function mockable(fn) {
  var f = function f() {
    if (f.mock) {
      return f.mock.apply(f, arguments);
    }

    return fn.apply(void 0, arguments);
  };

  return f;
}
var createApi = mockable;

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reaction__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__next_tick__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observable_obx_array__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observable_obx_object__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__observable_obx_set__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__observable_obx_map__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__observable_observable__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__reaction__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__next_tick__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__utils__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__decorators__ = __webpack_require__(149);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__decorators__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__decorators__["b"]; });









__WEBPACK_IMPORTED_MODULE_7__observable_observable__["b" /* asObservable */].getObxContructor = function (thing) {
  if (Array.isArray(thing)) {
    return __WEBPACK_IMPORTED_MODULE_3__observable_obx_array__["a" /* default */];
  }

  if (thing instanceof Set || thing instanceof WeakSet) {
    return __WEBPACK_IMPORTED_MODULE_5__observable_obx_set__["a" /* default */];
  }

  if (thing instanceof Map) {
    return __WEBPACK_IMPORTED_MODULE_6__observable_obx_map__["a" /* default */];
  }

  if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["o" /* isPlainObject */])(thing)) {
    return __WEBPACK_IMPORTED_MODULE_4__observable_obx_object__["a" /* default */];
  }

  return null;
}; // export api





/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export childFlag */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObxArray; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__proxy__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__obx__ = __webpack_require__(7);










function childFlag(flag) {
  return flag === __WEBPACK_IMPORTED_MODULE_9__obx__["a" /* ObxFlag */].DEEP ? __WEBPACK_IMPORTED_MODULE_9__obx__["a" /* ObxFlag */].DEEP : __WEBPACK_IMPORTED_MODULE_9__obx__["a" /* ObxFlag */].VAL;
}

var ObxArray =
/*#__PURE__*/
function (_Obx) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(ObxArray, _Obx);

  function ObxArray(name, target) {
    var _this;

    var obxFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_9__obx__["a" /* ObxFlag */].DEEP;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ObxArray);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxArray).call(this, name, target, obxFlag));

    if (__WEBPACK_IMPORTED_MODULE_8__proxy__["f" /* supportProxy */]) {
      _this.target = Object(__WEBPACK_IMPORTED_MODULE_8__proxy__["c" /* createProxy */])(target, arrayProxyTraps);
    } else if (obxFlag > __WEBPACK_IMPORTED_MODULE_9__obx__["a" /* ObxFlag */].VAL) {
      Object(__WEBPACK_IMPORTED_MODULE_7__observable__["d" /* observeIterable */])(target, childFlag(obxFlag));
    }

    Object(__WEBPACK_IMPORTED_MODULE_6__utils__["v" /* setPrototypeOf */])(target, arrayMethods);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ObxArray, [{
    key: "internalSet",
    value: function internalSet(key, val) {
      var nestPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var target = this.target;

      if (Object(__WEBPACK_IMPORTED_MODULE_6__utils__["p" /* isValidArrayIndex */])(key)) {
        var index = Number(key);
        var v;

        if (!nestPath || (v = target[index]) == null) {
          // tslint:disable-line
          target.length = Math.max(target.length, index);
          target.splice(index, 1, Object(__WEBPACK_IMPORTED_MODULE_9__obx__["d" /* formatNestValue */])(nestPath, val));
          return;
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_9__obx__["f" /* hasObx */])(v)) {
          Object(__WEBPACK_IMPORTED_MODULE_9__obx__["e" /* getObx */])(v).set(nestPath, val);
          return;
        }
      }

      __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxArray.prototype), "internalSet", this).call(this, key, val, nestPath);
    }
  }, {
    key: "internalDel",
    value: function internalDel(key) {
      if (Object(__WEBPACK_IMPORTED_MODULE_6__utils__["p" /* isValidArrayIndex */])(key)) {
        this.target.splice(Number(key), 1);
        return;
      }

      __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxArray.prototype), "internalDel", this).call(this, key);
    }
  }]);

  return ObxArray;
}(__WEBPACK_IMPORTED_MODULE_9__obx__["c" /* default */]); // ======= patches ========



var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
  var original = arrayProto[method];
  Object(__WEBPACK_IMPORTED_MODULE_6__utils__["g" /* addHiddenProp */])(arrayMethods, method, function mutator() {
    var obx = Object(__WEBPACK_IMPORTED_MODULE_9__obx__["e" /* getObx */])(this);
    var proxied = Object(__WEBPACK_IMPORTED_MODULE_8__proxy__["e" /* isProxied */])(this);
    var length = this.length;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = original.apply(this, args);
    var changed = true;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        changed = inserted.length > 0;
        break;

      case 'splice':
        inserted = args.slice(2);
        changed = inserted.length > 0 || this.length !== length;
        break;

      case 'pop':
      case 'shift':
        changed = this.length !== length;
        break;
    }

    if (!proxied && obx.obxFlag > __WEBPACK_IMPORTED_MODULE_9__obx__["a" /* ObxFlag */].VAL) {
      if (inserted && inserted.length > 0) {
        Object(__WEBPACK_IMPORTED_MODULE_7__observable__["d" /* observeIterable */])(inserted, childFlag(obx.obxFlag));
      }
    }

    if (obx && changed) {
      obx.reportChange();
    }

    return result;
  });
});
var arrayProxyTraps = {
  has: function has(rawTarget, name) {
    if (name === __WEBPACK_IMPORTED_MODULE_9__obx__["b" /* SYMBOL_OBX */] || name === __WEBPACK_IMPORTED_MODULE_8__proxy__["b" /* SYMBOL_RAW */]) {
      return true;
    }

    return name in rawTarget;
  },
  get: function get(rawTarget, name) {
    if (name === __WEBPACK_IMPORTED_MODULE_8__proxy__["b" /* SYMBOL_RAW */]) {
      return rawTarget;
    }

    if (name === __WEBPACK_IMPORTED_MODULE_9__obx__["b" /* SYMBOL_OBX */] || name === __WEBPACK_IMPORTED_MODULE_8__proxy__["a" /* SYMBOL_PROXY */] || name in arrayMethods) {
      return rawTarget[name];
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_6__utils__["p" /* isValidArrayIndex */])(name)) {
      var v = rawTarget[Number(name)];
      var obx = Object(__WEBPACK_IMPORTED_MODULE_9__obx__["e" /* getObx */])(rawTarget);

      if (obx) {
        Object(__WEBPACK_IMPORTED_MODULE_7__observable__["i" /* reportChildValue */])(v, obx.obxFlag);
      }

      return Object(__WEBPACK_IMPORTED_MODULE_8__proxy__["d" /* getProxiedValue */])(v);
    }

    return Object(__WEBPACK_IMPORTED_MODULE_8__proxy__["d" /* getProxiedValue */])(rawTarget[name]);
  },
  set: function set(rawTarget, name, value) {
    if (name === 'length') {
      rawTarget[name] = value;
      return true;
    }

    if (name === __WEBPACK_IMPORTED_MODULE_9__obx__["b" /* SYMBOL_OBX */] || name === __WEBPACK_IMPORTED_MODULE_8__proxy__["a" /* SYMBOL_PROXY */] || name in arrayMethods) {
      return false;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_6__utils__["p" /* isValidArrayIndex */])(name)) {
      var index = Number(name);
      rawTarget.length = Math.max(rawTarget.length, index);
      rawTarget.splice(index, 1, value);
      return true;
    }

    rawTarget[name] = value;
    return true;
  },
  deleteProperty: function deleteProperty(rawTarget, name) {
    if (name === __WEBPACK_IMPORTED_MODULE_9__obx__["b" /* SYMBOL_OBX */] || name === __WEBPACK_IMPORTED_MODULE_8__proxy__["a" /* SYMBOL_PROXY */] || name in arrayMethods) {
      return false;
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_6__utils__["p" /* isValidArrayIndex */])(name)) {
      rawTarget.splice(Number(name), 1);
      return true;
    }

    delete rawTarget[name];
    return true;
  },
  preventExtensions: function preventExtensions() {
    return false;
  }
};

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObxObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__proxy__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__obx__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__obx_property__ = __webpack_require__(19);











function propFlag(flag) {
  return flag === __WEBPACK_IMPORTED_MODULE_8__obx__["a" /* ObxFlag */].DEEP ? __WEBPACK_IMPORTED_MODULE_8__obx__["a" /* ObxFlag */].DEEP : flag - 1;
}

var ObxObject =
/*#__PURE__*/
function (_Obx) {
  __WEBPACK_IMPORTED_MODULE_5__babel_runtime_helpers_inherits___default()(ObxObject, _Obx);

  function ObxObject(name, target) {
    var _this;

    var obxFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_8__obx__["a" /* ObxFlag */].DEEP;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ObxObject);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxObject).call(this, name, target, obxFlag));

    if (__WEBPACK_IMPORTED_MODULE_7__proxy__["f" /* supportProxy */]) {
      _this.target = Object(__WEBPACK_IMPORTED_MODULE_7__proxy__["c" /* createProxy */])(target, objectProxyTraps);
    } else if (obxFlag > __WEBPACK_IMPORTED_MODULE_8__obx__["a" /* ObxFlag */].REF) {
      Object(__WEBPACK_IMPORTED_MODULE_6__utils__["y" /* walk */])(target, function (obj, key, val) {
        Object(__WEBPACK_IMPORTED_MODULE_9__obx_property__["b" /* defineObxProperty */])(obj, key, val, undefined, propFlag(obxFlag));
      });
    }

    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ObxObject, [{
    key: "internalSet",
    value: function internalSet(key, val) {
      var nestPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      var target = this.target;

      if (key in target && !(key in objectProto)) {
        var v;

        if (!nestPath || (v = target[key]) == null) {
          // tslint:disable-line
          target[key] = Object(__WEBPACK_IMPORTED_MODULE_8__obx__["d" /* formatNestValue */])(nestPath, val);
          return;
        }

        if (Object(__WEBPACK_IMPORTED_MODULE_8__obx__["f" /* hasObx */])(v)) {
          Object(__WEBPACK_IMPORTED_MODULE_8__obx__["e" /* getObx */])(v).set(nestPath, val);
          return;
        }
      }

      __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_get___default()(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxObject.prototype), "internalSet", this).call(this, key, val, nestPath);
    }
  }]);

  return ObxObject;
}(__WEBPACK_IMPORTED_MODULE_8__obx__["c" /* default */]);


var objectProto = Object.prototype;
var objectProxyTraps = {
  has: function has(rawTarget, name) {
    if (name === __WEBPACK_IMPORTED_MODULE_8__obx__["b" /* SYMBOL_OBX */] || name === __WEBPACK_IMPORTED_MODULE_7__proxy__["b" /* SYMBOL_RAW */]) {
      return true;
    }

    return name in rawTarget;
  },
  get: function get(rawTarget, name) {
    if (name === __WEBPACK_IMPORTED_MODULE_7__proxy__["b" /* SYMBOL_RAW */]) {
      return rawTarget;
    }

    if (name === __WEBPACK_IMPORTED_MODULE_8__obx__["b" /* SYMBOL_OBX */] || name === __WEBPACK_IMPORTED_MODULE_7__proxy__["a" /* SYMBOL_PROXY */] || name in objectProto) {
      return rawTarget[name];
    }

    if (Object(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* hasOwnProperty */])(rawTarget, name)) {
      var obx = Object(__WEBPACK_IMPORTED_MODULE_8__obx__["e" /* getObx */])(rawTarget);

      if (obx) {
        Object(__WEBPACK_IMPORTED_MODULE_9__obx_property__["c" /* ensureObxProperty */])(rawTarget, name, propFlag(obx.obxFlag));
      }
    }

    return Object(__WEBPACK_IMPORTED_MODULE_7__proxy__["d" /* getProxiedValue */])(rawTarget[name]);
  },
  set: function set(rawTarget, name, value) {
    if (name === __WEBPACK_IMPORTED_MODULE_8__obx__["b" /* SYMBOL_OBX */] || name === __WEBPACK_IMPORTED_MODULE_7__proxy__["a" /* SYMBOL_PROXY */] || name in objectProto) {
      return false;
    }

    if (!(name in rawTarget)) {
      var obx = Object(__WEBPACK_IMPORTED_MODULE_8__obx__["e" /* getObx */])(rawTarget);

      if (obx) {
        Object(__WEBPACK_IMPORTED_MODULE_9__obx_property__["b" /* defineObxProperty */])(rawTarget, name, value, undefined, propFlag(obx.obxFlag));
        obx.reportChange();
        return true;
      }
    }

    rawTarget[name] = value;
    return true;
  },
  deleteProperty: function deleteProperty(rawTarget, name) {
    if (name === __WEBPACK_IMPORTED_MODULE_8__obx__["b" /* SYMBOL_OBX */] || name === __WEBPACK_IMPORTED_MODULE_7__proxy__["a" /* SYMBOL_PROXY */] || !Object(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* hasOwnProperty */])(rawTarget, name)) {
      return false;
    }

    delete rawTarget[name];
    var obx = Object(__WEBPACK_IMPORTED_MODULE_8__obx__["e" /* getObx */])(rawTarget);

    if (obx) {
      obx.reportChange();
    }

    return true;
  },
  preventExtensions: function preventExtensions() {
    return false;
  }
};

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObxMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__obx__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__obx_set__ = __webpack_require__(68);









var ObxMap =
/*#__PURE__*/
function (_Obx) {
  __WEBPACK_IMPORTED_MODULE_4__babel_runtime_helpers_inherits___default()(ObxMap, _Obx);

  function ObxMap(name, target) {
    var _this;

    var obxFlag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_6__obx__["a" /* ObxFlag */].DEEP;

    __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_classCallCheck___default()(this, ObxMap);

    _this = __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_possibleConstructorReturn___default()(this, __WEBPACK_IMPORTED_MODULE_3__babel_runtime_helpers_getPrototypeOf___default()(ObxMap).call(this, name, target, obxFlag));
    Object(__WEBPACK_IMPORTED_MODULE_5__utils__["v" /* setPrototypeOf */])(target, mapMethods);
    return _this;
  }

  __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_createClass___default()(ObxMap, [{
    key: "internalSet",
    value: function internalSet(key, val) {
      var nestPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      this.target.set(key, val);
      var target = this.target;
      var v;

      if (!nestPath || (v = target.get(key)) == null) {
        // tslint:disable-line
        target.set(key, Object(__WEBPACK_IMPORTED_MODULE_6__obx__["d" /* formatNestValue */])(nestPath, val));
        return;
      }

      if (Object(__WEBPACK_IMPORTED_MODULE_6__obx__["f" /* hasObx */])(v)) {
        Object(__WEBPACK_IMPORTED_MODULE_6__obx__["e" /* getObx */])(v).set(nestPath, val);
        return;
      }
    }
  }, {
    key: "internalGet",
    value: function internalGet(key) {
      return this.target.get(key);
    }
  }, {
    key: "internalDel",
    value: function internalDel(key) {
      this.target.delete(key);
    }
  }]);

  return ObxMap;
}(__WEBPACK_IMPORTED_MODULE_6__obx__["c" /* default */]); // ======= Map ========



var mapProto = Map.prototype;
var mapMethods = Object.create(mapProto);
Object(__WEBPACK_IMPORTED_MODULE_7__obx_set__["c" /* patchMutator */])(['set', 'clear', 'delete'], mapProto, mapMethods);
Object(__WEBPACK_IMPORTED_MODULE_7__obx_set__["b" /* patchAccessor */])(['values', 'entries', Symbol.iterator, 'forEach', 'get'], mapProto, mapMethods);

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observable;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return obx; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_obx__ = __webpack_require__(7);


 // deep

function observable(target, prop, descriptor) {
  var flag = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : __WEBPACK_IMPORTED_MODULE_2__observable_obx__["a" /* ObxFlag */].DEEP;

  if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["k" /* hasOwnProperty */])(target, __WEBPACK_IMPORTED_MODULE_1__utils__["e" /* SYMBOL_DECORATORS */])) {
    var inheritedDecorators = target[__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* SYMBOL_DECORATORS */]];
    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* addHiddenProp */])(target, __WEBPACK_IMPORTED_MODULE_1__utils__["e" /* SYMBOL_DECORATORS */], __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_objectSpread___default()({}, inheritedDecorators));
  }

  target[__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* SYMBOL_DECORATORS */]][prop] = {
    prop: prop,
    descriptor: descriptor,
    flag: flag
  };
  return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["h" /* createPropertyInitializerDescriptor */])(prop);
}
var obx = observable; // deep

observable.deep = function (target, prop, descriptor) {
  return observable(target, prop, descriptor, __WEBPACK_IMPORTED_MODULE_2__observable_obx__["a" /* ObxFlag */].DEEP);
}; // shallow


observable.shallow = function (target, prop, descriptor) {
  return observable(target, prop, descriptor, __WEBPACK_IMPORTED_MODULE_2__observable_obx__["a" /* ObxFlag */].SHALLOW);
}; // value


observable.val = function (target, prop, descriptor) {
  return observable(target, prop, descriptor, __WEBPACK_IMPORTED_MODULE_2__observable_obx__["a" /* ObxFlag */].VAL);
}; // alias value


observable.self = observable.val; // ref

observable.ref = function (target, prop, descriptor) {
  return observable(target, prop, descriptor, __WEBPACK_IMPORTED_MODULE_2__observable_obx__["a" /* ObxFlag */].REF);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=recore.js.map