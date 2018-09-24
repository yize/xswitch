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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["k"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["l"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["t"] = setPrototypeOf;
/* harmony export (immutable) */ __webpack_exports__["m"] = isValidArrayIndex;
/* harmony export (immutable) */ __webpack_exports__["p"] = nextId;
/* harmony export (immutable) */ __webpack_exports__["g"] = hasOwnProperty;
/* harmony export (immutable) */ __webpack_exports__["q"] = objectAssign;
/* harmony export (immutable) */ __webpack_exports__["r"] = once;
/* unused harmony export fail */
/* harmony export (immutable) */ __webpack_exports__["i"] = invariant;
/* harmony export (immutable) */ __webpack_exports__["w"] = walk;
/* harmony export (immutable) */ __webpack_exports__["b"] = addHiddenProp;
/* harmony export (immutable) */ __webpack_exports__["a"] = addHiddenFinalProp;
/* harmony export (immutable) */ __webpack_exports__["n"] = looseEqual;
/* harmony export (immutable) */ __webpack_exports__["o"] = looseIndexOf;
/* harmony export (immutable) */ __webpack_exports__["u"] = splitPath;
/* harmony export (immutable) */ __webpack_exports__["j"] = isDecoratorTarget;
/* harmony export (immutable) */ __webpack_exports__["c"] = createPropertyInitializerDescriptor;
/* harmony export (immutable) */ __webpack_exports__["h"] = initializeInstance;
/* harmony export (immutable) */ __webpack_exports__["f"] = get;
/* harmony export (immutable) */ __webpack_exports__["s"] = set;
/* harmony export (immutable) */ __webpack_exports__["d"] = del;
/* harmony export (immutable) */ __webpack_exports__["e"] = extend;
/* harmony export (immutable) */ __webpack_exports__["v"] = throttle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_state__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_proxy__ = __webpack_require__(7);


function isObject(value) {
    return value !== null && typeof value === 'object';
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
    }
    else {
        target.__proto__ = proto;
    }
}
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}
function nextId() {
    return (++__WEBPACK_IMPORTED_MODULE_0__global_state__["a" /* globalState */].guid).toString(32).toLocaleLowerCase();
}
var prototypeHasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwnProperty(obj, key) {
    return obj && prototypeHasOwnProperty.call(obj, key);
}
function objectAssign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
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
        throw new Error('[recore] Invariant failed: ' + message + (thing ? " in '" + thing + "'" : ''));
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
        value: value,
    });
}
function addHiddenFinalProp(object, propName, value) {
    Object.defineProperty(object, propName, {
        enumerable: false,
        writable: false,
        configurable: true,
        value: value,
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
        if (looseEqual(arr[i], val))
            return i;
    }
    return -1;
}
var RE_PATH = /^([^/]*)(?:\/(.*))?$/;
var RE_PATH_REVERSE = /^(?:(.*)\/)?([^/])$/;
function splitPath(path, reverse) {
    if (reverse === void 0) { reverse = false; }
    return reverse ? RE_PATH_REVERSE.exec(path) : RE_PATH.exec(path);
}
function isDecoratorTarget(a) {
    return a.__obxDecorators ? true : false;
}
var descriptorCache = {};
function createPropertyInitializerDescriptor(prop) {
    return (descriptorCache[prop] || (descriptorCache[prop] = {
        configurable: true,
        enumerable: false,
        get: function () {
            initializeInstance(this);
            // todo: not safe
            return this[prop];
        },
        set: function (value) {
            initializeInstance(this);
            // todo: not safe
            this[prop] = value;
        },
    }));
}
function initializeInstance(target) {
    if (target.__obxInitialized === true) {
        return;
    }
    addHiddenProp(target, '__obxInitialized', true);
    if (!Object(__WEBPACK_IMPORTED_MODULE_1__observable_proxy__["d" /* hasObservableProxy */])(target)) {
        var name = (target.constructor.name || 'ObservableObject') + '@' + nextId();
        var proxy = new __WEBPACK_IMPORTED_MODULE_1__observable_proxy__["a" /* default */](name, target);
        Object(__WEBPACK_IMPORTED_MODULE_1__observable_proxy__["e" /* injectObservableProxy */])(target, proxy);
    }
}
function get(target, key) {
    var proxy = Object(__WEBPACK_IMPORTED_MODULE_1__observable_proxy__["c" /* getObservableProxy */])(target);
    if (proxy) {
        return proxy.get(key);
    }
}
function set(target, key, val) {
    var proxy = Object(__WEBPACK_IMPORTED_MODULE_1__observable_proxy__["c" /* getObservableProxy */])(target);
    if (proxy) {
        proxy.set(key, val);
    }
}
function del(target, key) {
    var proxy = Object(__WEBPACK_IMPORTED_MODULE_1__observable_proxy__["c" /* getObservableProxy */])(target);
    if (proxy) {
        proxy.del(key);
    }
}
function extend(target, properties) {
    var proxy = Object(__WEBPACK_IMPORTED_MODULE_1__observable_proxy__["c" /* getObservableProxy */])(target);
    if (proxy) {
        proxy.extend(properties);
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
        return (lastCalled === undefined || (timeSinceLastCalled >= wait)
            || (timeSinceLastCalled < 0) || timeSinceLastInvoked >= wait);
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
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var time = Date.now();
        var isInvoking = shouldInvoke(time);
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
/* 1 */
/***/ (function(module, exports) {

module.exports = window.React;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__(39);
var isBuffer = __webpack_require__(64);
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
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    }
    else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
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
    return (typeof window !== 'undefined' &&
        typeof document !== 'undefined');
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
    }
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    }
    else {
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
function merge( /* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = merge(result[key], val);
        }
        else {
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
        }
        else {
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
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DerivationState; });
/* unused harmony export CaughtException */
/* harmony export (immutable) */ __webpack_exports__["c"] = isCaughtException;
/* harmony export (immutable) */ __webpack_exports__["g"] = shouldCompute;
/* harmony export (immutable) */ __webpack_exports__["e"] = runDerivedFunction;
/* harmony export (immutable) */ __webpack_exports__["b"] = clearObserving;
/* harmony export (immutable) */ __webpack_exports__["h"] = untracked;
/* harmony export (immutable) */ __webpack_exports__["j"] = untrackedStart;
/* harmony export (immutable) */ __webpack_exports__["i"] = untrackedEnd;
/* unused harmony export changeDependenciesStateTo0 */
/* harmony export (immutable) */ __webpack_exports__["f"] = setDerivationDirty;
/* harmony export (immutable) */ __webpack_exports__["d"] = resetDerivationState;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__global_state__ = __webpack_require__(6);


var DerivationState;
(function (DerivationState) {
    // before being run or (outside batch and not being observed)
    // at this point derivation is not holding any data about dependency tree
    DerivationState[DerivationState["NOT_TRACKING"] = -1] = "NOT_TRACKING";
    // no shallow dependency changed since last computation
    // won't recalculate derivation
    DerivationState[DerivationState["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    // A shallow dependency has changed since last computation and the derivation
    // will need to recompute when it's needed next.
    DerivationState[DerivationState["DIRTY"] = 1] = "DIRTY";
})(DerivationState || (DerivationState = {}));
var CaughtException = /** @class */ (function () {
    function CaughtException(cause) {
        this.cause = cause;
        // Empty
    }
    return CaughtException;
}());

function isCaughtException(e) {
    return e instanceof CaughtException;
}
function shouldCompute(derivation) {
    switch (derivation.dependenciesState) {
        case DerivationState.UP_TO_DATE:
            return false;
        case DerivationState.NOT_TRACKING:
        case DerivationState.DIRTY:
            return true;
    }
}
function runDerivedFunction(derivation, f, context, extraArguments) {
    var prevTracking = __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* globalState */].trackingDerivation;
    // pre allocate array allocation + room for variation in deps
    derivation.newObserving = new Array(derivation.observing.length + 100);
    derivation.unboundDepsCount = 0;
    derivation.runId = ++__WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* globalState */].runId;
    __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* globalState */].trackingDerivation = derivation;
    var result;
    try {
        result = extraArguments
            ? f.apply(context, [context].concat(extraArguments))
            : f.call(context, context);
    }
    catch (e) {
        result = new CaughtException(e);
    }
    __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* globalState */].trackingDerivation = prevTracking;
    changeDependenciesStateTo0(derivation);
    bindDependencies(derivation);
    return result;
}
function bindDependencies(derivation) {
    var prevObserving = derivation.observing;
    var observing = (derivation.observing = derivation.newObserving);
    var lowestNewObservingDerivationState = DerivationState.UP_TO_DATE;
    // Go through all new observables and check diffValue: (this list can contain duplicates):
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
        }
        // Upcast is 'safe' here, because if dep is IObservable, `dependenciesState` will be undefined,
        // not hitting the condition
        if (dep.dependenciesState > lowestNewObservingDerivationState) {
            lowestNewObservingDerivationState = dep.dependenciesState;
        }
    }
    observing.length = i0;
    derivation.newObserving = null;
    // Go through all old observables and check diffValue: (it is unique after last bindDependencies)
    //   0: it's not in new observables, unobserve it
    //   1: it keeps being observed, don't want to notify it. change to 0
    l = prevObserving.length;
    while (l--) {
        var dep = prevObserving[l];
        if (!dep.diffFlag) {
            Object(__WEBPACK_IMPORTED_MODULE_0__observable__["e" /* removeObserver */])(dep, derivation);
        }
        dep.diffFlag = false;
    }
    // Go through all new observables and check diffValue: (now it should be unique)
    //   0: it was set to 0 in last loop. don't need to do anything.
    //   1: it wasn't observed, let's observe it. set back to 0
    while (i0--) {
        var dep = observing[i0];
        if (dep.diffFlag) {
            dep.diffFlag = false;
            Object(__WEBPACK_IMPORTED_MODULE_0__observable__["a" /* addObserver */])(dep, derivation);
        }
    }
    // Some new observed derivations may become stale during this derivation computation
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
        Object(__WEBPACK_IMPORTED_MODULE_0__observable__["e" /* removeObserver */])(obs[i], derivation);
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
    var prev = __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* globalState */].trackingDerivation;
    __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* globalState */].trackingDerivation = null;
    return prev;
}
function untrackedEnd(prev) {
    __WEBPACK_IMPORTED_MODULE_1__global_state__["a" /* globalState */].trackingDerivation = prev;
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
function resetDerivationState(derivation) {
    derivation.dependenciesState = DerivationState.NOT_TRACKING;
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Navigator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history__ = __webpack_require__(33);

var Navigator = /** @class */ (function () {
    function Navigator() {
    }
    Navigator.prototype.init = function (options) {
        if (options === void 0) { options = {}; }
        if (!this.history) {
            if (typeof options === 'string') {
                options = { mode: options };
            }
            if (options.mode === 'hash') {
                this.history = Object(__WEBPACK_IMPORTED_MODULE_0_history__["b" /* createHashHistory */])(options);
            }
            else {
                this.history = Object(__WEBPACK_IMPORTED_MODULE_0_history__["a" /* createBrowserHistory */])(options);
            }
        }
    };
    Navigator.prototype.getHistory = function () {
        return this.history;
    };
    Navigator.prototype.goto = function (path, state) {
        if (this.history) {
            this.history.push(path, state);
        }
    };
    Navigator.prototype.goBack = function () {
        if (this.history) {
            this.history.goBack();
        }
    };
    return Navigator;
}());

/* harmony default export */ __webpack_exports__["a"] = (new Navigator());


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addObserver;
/* harmony export (immutable) */ __webpack_exports__["e"] = removeObserver;
/* unused harmony export queueForUnobservation */
/* harmony export (immutable) */ __webpack_exports__["g"] = startBatch;
/* harmony export (immutable) */ __webpack_exports__["c"] = endBatch;
/* harmony export (immutable) */ __webpack_exports__["f"] = reportObserved;
/* harmony export (immutable) */ __webpack_exports__["d"] = propagateChanged;
/* harmony export (immutable) */ __webpack_exports__["b"] = asObservable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__derivation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_state__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observable_proxy__ = __webpack_require__(7);




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
    observable.observers.forEach(function (d) { return Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["f" /* setDerivationDirty */])(d); });
}
function asObservable(thing) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["k" /* isObject */])(thing)) {
        return;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_3__observable_proxy__["d" /* hasObservableProxy */])(thing)) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__observable_proxy__["c" /* getObservableProxy */])(thing);
    }
    if ((Array.isArray(thing) || Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* isPlainObject */])(thing)) && Object.isExtensible(thing)) {
        var name = (thing.constructor.name || 'ObservableObject') + '@' + Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* nextId */])();
        var proxy = new __WEBPACK_IMPORTED_MODULE_3__observable_proxy__["a" /* default */](name, thing);
        Object(__WEBPACK_IMPORTED_MODULE_3__observable_proxy__["e" /* injectObservableProxy */])(thing, proxy);
        return proxy;
    }
}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Globals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalState; });
/* unused harmony export getGlobalState */
var Globals = /** @class */ (function () {
    function Globals() {
        /**
         * Currently running derivation
         */
        this.trackingDerivation = null;
        /**
         * Are we running a computation currently? (not a reaction)
         */
        this.computationDepth = 0;
        /**
         * Each time a derivation is tracked, it is assigned a unique run-id
         */
        this.runId = 0;
        /**
         * 'guid' for general purpose. Will be persisted amongst resets.
         */
        this.guid = 0;
        /**
         * Are we in a batch block? (and how many of them)
         */
        this.inBatch = 0;
        /**
         * Observables that don't have observers anymore
         */
        this.pendingUnobservations = [];
        /**
         * List of scheduled, not yet executed, reactions.
         */
        this.pendingReactions = [];
        /**
         * Are we currently processing reactions?
         */
        this.isRunningReactions = false;
        /**
         * disable dynamic observe
         */
        this.dynamicObserveDisabled = false;
    }
    return Globals;
}());

var globalState = new Globals();
function getGlobalState() {
    return globalState;
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = defineObservableProperty;
/* harmony export (immutable) */ __webpack_exports__["e"] = injectObservableProxy;
/* harmony export (immutable) */ __webpack_exports__["c"] = getObservableProxy;
/* harmony export (immutable) */ __webpack_exports__["d"] = hasObservableProxy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__observable_property__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__derivation__ = __webpack_require__(3);




function observeArray(items) {
    for (var i = 0, l = items.length; i < l; i++) {
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["b" /* asObservable */])(items[i]);
    }
}
function formatNestValue(nestPath, val) {
    var _a;
    if (!nestPath) {
        return val;
    }
    var pathArray = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["u" /* splitPath */])(nestPath, true);
    if (!pathArray) {
        return val;
    }
    var _ = pathArray[0], path = pathArray[1], key = pathArray[2];
    return formatNestValue(path, key ? (_a = {}, _a[key] = val, _a) : val);
}
var ObservableProxy = /** @class */ (function () {
    function ObservableProxy(name, value) {
        this.name = name;
        this.value = value;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["p" /* nextId */])();
        this.observing = [];
        this.observers = new Set();
        this.dependenciesState = __WEBPACK_IMPORTED_MODULE_3__derivation__["a" /* DerivationState */].NOT_TRACKING;
        this.lowestObserverState = __WEBPACK_IMPORTED_MODULE_3__derivation__["a" /* DerivationState */].UP_TO_DATE;
        if (Array.isArray(value)) {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["t" /* setPrototypeOf */])(value, arrayMethods);
            observeArray(value);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["l" /* isPlainObject */])(value)) {
            Object(__WEBPACK_IMPORTED_MODULE_0__utils__["w" /* walk */])(value, defineObservableProperty);
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["j" /* isDecoratorTarget */])(value)) {
            var decorators = value.__obxDecorators;
            if (decorators) {
                Object(__WEBPACK_IMPORTED_MODULE_0__utils__["w" /* walk */])(decorators, function (_, key, d) {
                    var descriptor = d.descriptor;
                    var initialValue = descriptor
                        ? descriptor.initializer ? descriptor.initializer.call(value) : descriptor.value
                        : undefined;
                    if (descriptor) {
                        delete descriptor.initializer;
                    }
                    defineObservableProperty(value, key, initialValue, {
                        set: descriptor && descriptor.set,
                        get: descriptor && descriptor.get,
                    });
                });
            }
        }
    }
    ObservableProxy.prototype.onBecomeDirty = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["d" /* propagateChanged */])(this);
    };
    ObservableProxy.prototype.onBecomeUnobserved = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__derivation__["b" /* clearObserving */])(this);
    };
    ObservableProxy.prototype.onBecomeObserved = function () {
    };
    ObservableProxy.prototype.getAsProxy = function (path) {
        if (path === '') {
            return this;
        }
        var pathArray = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["u" /* splitPath */])(String(path));
        if (!pathArray) {
            return this;
        }
        var _ = pathArray[0], entry = pathArray[1], nestPath = pathArray[2];
        if (!entry) {
            return this.get(nestPath);
        }
        var target = this.value;
        var ret = null;
        if (Array.isArray(target) && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["m" /* isValidArrayIndex */])(entry)) {
            ret = target[Number(entry)];
        }
        else if (entry in target && !(entry in Object.prototype)) {
            ret = target[entry];
        }
        if (ret == null) {
            return;
        }
        if (!hasObservableProxy(ret)) {
            return;
        }
        var proxy = getObservableProxy(ret);
        if (nestPath) {
            return proxy.getAsProxy(nestPath);
        }
        return proxy;
    };
    ObservableProxy.prototype.get = function (path) {
        if (path == null || path === '') {
            return this.value;
        }
        var pathArray = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["u" /* splitPath */])(String(path));
        if (!pathArray) {
            return undefined;
        }
        var _ = pathArray[0], entry = pathArray[1], nestPath = pathArray[2];
        if (!entry) {
            return this.get(nestPath);
        }
        var target = this.value;
        var ret;
        if (Array.isArray(target) && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["m" /* isValidArrayIndex */])(entry)) {
            ret = target[Number(entry)];
        }
        else if (entry in target && !(entry in Object.prototype)) {
            ret = target[entry];
        }
        if (ret == null || !nestPath) {
            return ret;
        }
        if (!hasObservableProxy(ret)) {
            return undefined;
        }
        return getObservableProxy(ret).get(nestPath);
    };
    ObservableProxy.prototype.set = function (path, val) {
        if (path === '') {
            return;
        }
        var pathArray = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["u" /* splitPath */])(String(path));
        if (!pathArray) {
            return;
        }
        var _ = pathArray[0], entry = pathArray[1], nestPath = pathArray[2];
        if (!entry) {
            this.set(nestPath, val);
            return;
        }
        var target = this.value;
        if (Array.isArray(target) && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["m" /* isValidArrayIndex */])(entry)) {
            var index = Number(entry);
            var v = void 0;
            if (!nestPath || (v = target[index]) == null) { // tslint:disable-line
                target.length = Math.max(target.length, index);
                target.splice(index, 1, formatNestValue(nestPath, val));
                return;
            }
            if (hasObservableProxy(v)) {
                getObservableProxy(v).set(nestPath, val);
                return;
            }
            // todo: some exception to throw
            return;
        }
        if (entry in target && !(entry in Object.prototype)) {
            var v = void 0;
            if (!nestPath || (v = target[entry]) == null) { // tslint:disable-line
                target[entry] = formatNestValue(nestPath, val);
                return;
            }
            if (hasObservableProxy(v)) {
                getObservableProxy(v).set(nestPath, val);
                return;
            }
            // todo: some exception to throw
            return;
        }
        defineObservableProperty(target, entry, formatNestValue(nestPath, val));
        this.reportChange();
    };
    ObservableProxy.prototype.reportChange = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["g" /* startBatch */])();
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["d" /* propagateChanged */])(this);
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["c" /* endBatch */])();
    };
    ObservableProxy.prototype.del = function (path) {
        if (!path) {
            return;
        }
        var pathArray = Object(__WEBPACK_IMPORTED_MODULE_0__utils__["u" /* splitPath */])(String(path), true);
        if (!pathArray) {
            return;
        }
        var _ = pathArray[0], nestPath = pathArray[1], entry = pathArray[2];
        if (!entry) {
            this.del(nestPath);
            return;
        }
        if (nestPath) {
            var adm = this.getAsProxy(nestPath);
            if (adm) {
                adm.del(entry);
            }
            return;
        }
        if (Array.isArray(this.value) && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["m" /* isValidArrayIndex */])(entry)) {
            this.value.splice(Number(entry), 1);
            return;
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* hasOwnProperty */])(this.value, entry)) {
            return;
        }
        delete this.value[entry];
        this.reportChange();
    };
    ObservableProxy.prototype.extend = function (properties) {
        var _this = this;
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["g" /* startBatch */])();
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["w" /* walk */])(properties, function (_, key, val) { return _this.set(key, val); });
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["c" /* endBatch */])();
    };
    return ObservableProxy;
}());
/* harmony default export */ __webpack_exports__["a"] = (ObservableProxy);
function defineObservableProperty(obj, key, val, descriptor, shallow) {
    if (shallow === void 0) { shallow = false; }
    if (!descriptor) {
        descriptor = Object.getOwnPropertyDescriptor(obj, key);
    }
    if (descriptor && descriptor.configurable === false) {
        return;
    }
    var getter = descriptor && descriptor.get;
    var setter = descriptor && descriptor.set;
    var property = new __WEBPACK_IMPORTED_MODULE_1__observable_property__["a" /* default */](key, obj, getter, setter, val, undefined, shallow);
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function () { return property.get(); },
        set: function (newVal) { return property.set(newVal); },
    });
}
var SYMBOL_OBSERVABLE = '__obx';
function injectObservableProxy(obj, proxy) {
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* addHiddenFinalProp */])(obj, SYMBOL_OBSERVABLE, proxy);
}
function getObservableProxy(obj) {
    return obj ? obj[SYMBOL_OBSERVABLE] : undefined;
}
function hasObservableProxy(obj) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* hasOwnProperty */])(obj, SYMBOL_OBSERVABLE) && obj[SYMBOL_OBSERVABLE] instanceof ObservableProxy;
}
var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
[
    'push', 'pop', 'shift', 'unshift',
    'splice', 'sort', 'reverse',
].forEach(function (method) {
    var original = arrayProto[method];
    Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* addHiddenProp */])(arrayMethods, method, function mutator() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = original.apply(this, args);
        var inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
            case 'splice':
                inserted = args.slice(2);
                break;
        }
        if (inserted) {
            observeArray(inserted);
        }
        var proxy = getObservableProxy(this);
        if (proxy) {
            proxy.reportChange();
        }
        return result;
    });
});


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchResult; });
/* harmony export (immutable) */ __webpack_exports__["c"] = matchPath;
/* harmony export (immutable) */ __webpack_exports__["b"] = generatePath;
/* harmony export (immutable) */ __webpack_exports__["d"] = resolve;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_path_to_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_path_to_regexp__);

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;
function compilePath(pattern, options) {
    var cacheKey = "" + options.end + options.strict + options.sensitive;
    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    if (cache[pattern])
        return cache[pattern];
    var keys = [];
    var re = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__(pattern, keys, options);
    var compiledPattern = { re: re, keys: keys };
    if (cacheCount < cacheLimit) {
        cache[pattern] = compiledPattern;
        cacheCount++;
    }
    return compiledPattern;
}
function compileGenerator(pattern) {
    var cacheKey = pattern;
    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    if (cache.generator)
        return cache.generator;
    var compiledGenerator = __WEBPACK_IMPORTED_MODULE_0_path_to_regexp__["compile"](pattern);
    if (cacheCount < cacheLimit) {
        cache.generator = compiledGenerator;
        cacheCount++;
    }
    return compiledGenerator;
}
var MatchResult = /** @class */ (function () {
    function MatchResult(path, url, isExact, params) {
        if (path === void 0) { path = '/'; }
        if (url === void 0) { url = '/'; }
        if (isExact === void 0) { isExact = false; }
        if (params === void 0) { params = {}; }
        this.path = path;
        this.url = url;
        this.isExact = isExact;
        this.params = params;
    }
    return MatchResult;
}());

/**
 * Public API for matching a URL pathname to a path pattern.
 */
function matchPath(pathname, options, parent) {
    if (options === void 0) { options = {}; }
    if (typeof options === "string") {
        options = { path: options };
    }
    var path = options.path, _a = options.exact, exact = _a === void 0 ? false : _a, _b = options.strict, strict = _b === void 0 ? false : _b, _c = options.sensitive, sensitive = _c === void 0 ? false : _c;
    if (path == null) {
        return parent;
    }
    if (path.slice(-3) === '/**' || path === '**') {
        path = path === '**' ? '' : (path.slice(0, -3) || '/');
        exact = false;
    }
    path = resolve(path, parent ? parent.url : '/');
    var _d = compilePath(path, { end: exact, strict: strict, sensitive: sensitive }), re = _d.re, keys = _d.keys;
    var match = re.exec(pathname);
    if (!match) {
        return null;
    }
    var url = match[0], values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact)
        return null;
    return new MatchResult(path, path === '/' && url === '' ? '/' : url, isExact, keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
    }, {}));
}
;
/**
 * Public API for generating a URL pathname from a pattern and parameters.
 */
function generatePath(pattern, params) {
    if (pattern === void 0) { pattern = '/'; }
    if (params === void 0) { params = {}; }
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
    path = path.replace(RE_IDLE_DOT, '/');
    // a///b/////c ==> a/b/c
    path = path.replace(RE_MULTI_SLASH, '$1/');
    // a/b/c/../../d  ==>  a/b/../d  ==>  a/d
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
        id = "" + base + id;
    }
    return normalize(id);
}


/***/ }),
/* 9 */
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
    var pathname = location.pathname, search = location.search, hash = location.hash;
    var path = pathname || '/';
    if (search && search !== '?')
        path += search.charAt(0) === '?' ? search : '?' + search;
    if (hash && hash !== '#')
        path += hash.charAt(0) === '#' ? hash : '#' + hash;
    return path;
};


/***/ }),
/* 10 */
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
var warning = function () { };
if (true) {
    warning = function (condition, format, args) {
        var len = arguments.length;
        args = new Array(len > 2 ? len - 2 : 0);
        for (var key = 2; key < len; key++) {
            args[key - 2] = arguments[key];
        }
        if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' +
                'message argument');
        }
        if (format.length < 10 || (/^[s\W]*$/).test(format)) {
            throw new Error('The warning format should be able to uniquely identify this ' +
                'warning. Please, use a more descriptive format than: ' + format);
        }
        if (!condition) {
            var argIndex = 0;
            var message = 'Warning: ' +
                format.replace(/%s/g, function () {
                    return args[argIndex++];
                });
            if (typeof console !== 'undefined') {
                console.error(message);
            }
            try {
                // This error was thrown as a convenience so that you can use this stack
                // to find the callsite that caused this warning to fire.
                throw new Error(message);
            }
            catch (x) { }
        }
    };
}
module.exports = warning;


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return locationsAreEqual; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_resolve_pathname__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_value_equal__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PathUtils__ = __webpack_require__(9);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };



var createLocation = function createLocation(path, state, key, currentLocation) {
    var location = void 0;
    if (typeof path === 'string') {
        // Two-arg form: push(path, state)
        location = Object(__WEBPACK_IMPORTED_MODULE_2__PathUtils__["d" /* parsePath */])(path);
        location.state = state;
    }
    else {
        // One-arg form: push(location)
        location = _extends({}, path);
        if (location.pathname === undefined)
            location.pathname = '';
        if (location.search) {
            if (location.search.charAt(0) !== '?')
                location.search = '?' + location.search;
        }
        else {
            location.search = '';
        }
        if (location.hash) {
            if (location.hash.charAt(0) !== '#')
                location.hash = '#' + location.hash;
        }
        else {
            location.hash = '';
        }
        if (state !== undefined && location.state === undefined)
            location.state = state;
    }
    try {
        location.pathname = decodeURI(location.pathname);
    }
    catch (e) {
        if (e instanceof URIError) {
            throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
        }
        else {
            throw e;
        }
    }
    if (key)
        location.key = key;
    if (currentLocation) {
        // Resolve incomplete/relative pathname relative to current location.
        if (!location.pathname) {
            location.pathname = currentLocation.pathname;
        }
        else if (location.pathname.charAt(0) !== '/') {
            location.pathname = Object(__WEBPACK_IMPORTED_MODULE_0_resolve_pathname__["a" /* default */])(location.pathname, currentLocation.pathname);
        }
    }
    else {
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMPTY_FUNC; });
/* harmony export (immutable) */ __webpack_exports__["f"] = isObject;
/* unused harmony export isFunction */
/* harmony export (immutable) */ __webpack_exports__["g"] = isString;
/* unused harmony export isUndefined */
/* unused harmony export isNull */
/* harmony export (immutable) */ __webpack_exports__["e"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["c"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["b"] = isArray;
/* unused harmony export entries */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isEqual; });
/* harmony export (immutable) */ __webpack_exports__["h"] = random;
var EMPTY_FUNC = function () { };
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
    return Object.entries ? Object.entries(source) : Object.keys(source).map(function (k) { return [k, source[k]]; });
};
var isEqual = function (left, right) {
    if (left === right) {
        return true;
    }
    else if (typeof left !== typeof right || typeof left !== 'object' || Array.isArray(left) !== Array.isArray(right)) {
        return false;
    }
    else if (Array.isArray(left)) {
        return left.length === right.length && !left.map(function (l, index) { return isEqual(l, right[index]); }).includes(false);
    }
    else if (isObject(left) && isObject(right)) {
        return isEqual(entries(left), entries(right));
    }
    return false;
};
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = optionWarn;
function optionWarn(type, option) {
    console.warn("Unknown option for " + type + " generator, receiving type: " + typeof option + " value:", option);
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prop__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obx_listener__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__observable_view__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_reaction__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__obx_derivation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ghost_area__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__virtual_area__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__obx_observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__obx_observable_proxy__ = __webpack_require__(7);










var Area = /** @class */ (function () {
    function Area(scope, config) {
        var _this = this;
        this.scope = scope;
        this.config = config;
        this.sleepMarked = false;
        this.sleeping = false;
        this.revision = -1;
        this.areasMap = {};
        this.areas = [];
        this.viewsData = {};
        this.exprsData = {};
        this.views = {};
        this.exprs = {};
        this.notify = false;
        this.running = false;
        this.priority = config.priority || 0;
        this.key = config.key || Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["p" /* nextId */])();
        var views = (config.views || []).map(function (viewConfig) {
            var view = new __WEBPACK_IMPORTED_MODULE_3__observable_view__["a" /* default */](_this, viewConfig);
            _this.views[view.key] = view;
            return view;
        });
        var exprs = (config.exprs || []).map(function (exprConfig) {
            var expr = new __WEBPACK_IMPORTED_MODULE_0__prop__["a" /* default */](_this, exprConfig);
            _this.exprs[expr.key] = expr;
            return expr;
        });
        this.reaction = new __WEBPACK_IMPORTED_MODULE_4__obx_reaction__["a" /* Reaction */]("Area@" + this.key, function () {
            _this.revision += 1;
            _this.running = true;
            _this.viewsData = {};
            _this.exprsData = {};
            views.forEach(function (view) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(_this.viewsData, view.key)) {
                    _this.viewsData[view.key] = view.props;
                }
            });
            exprs.forEach(function (expr) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(_this.exprsData, expr.key)) {
                    _this.exprsData[expr.key] = expr.getData();
                }
            });
            if (Object(__WEBPACK_IMPORTED_MODULE_9__obx_observable_proxy__["d" /* hasObservableProxy */])(_this.scope)) {
                var proxy = Object(__WEBPACK_IMPORTED_MODULE_9__obx_observable_proxy__["c" /* getObservableProxy */])(_this.scope);
                Object(__WEBPACK_IMPORTED_MODULE_8__obx_observable__["f" /* reportObserved */])(proxy);
            }
            _this.running = false;
            if (_this.notify) {
                Object(__WEBPACK_IMPORTED_MODULE_2__obx_listener__["a" /* notifyListeners */])(_this);
            }
            else {
                _this.notify = true;
            }
        }, this.priority);
    }
    Area.prototype.replaceScope = function (scope) {
        this.scope = scope;
        this.notify = false;
        Object(__WEBPACK_IMPORTED_MODULE_5__obx_derivation__["d" /* resetDerivationState */])(this.reaction);
    };
    Area.prototype.p = function (name) {
        if (this.running) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.viewsData, name) && Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.views, name)) {
                this.viewsData[name] = this.views[name].props;
            }
        }
        else {
            this.checkRun();
        }
        return this.viewsData[name];
    };
    Area.prototype.e = function (name) {
        if (this.running) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.exprsData, name) && Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.exprs, name)) {
                this.exprsData[name] = this.exprs[name].getData();
            }
        }
        else {
            this.checkRun();
        }
        return this.exprsData[name];
    };
    Area.prototype.c = function (config, ghost) {
        var _this = this;
        if (ghost === void 0) { ghost = false; }
        if (config.key === this.key) {
            return this;
        }
        var area;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.areasMap, config.key)) {
            area = this.areasMap[config.key];
            if (area.scope !== this.scope) {
                area.replaceScope(this.scope);
            }
            return area;
        }
        var notifier = function (immediately) {
            if (immediately) {
                _this.runImmediately();
            }
            else {
                Object(__WEBPACK_IMPORTED_MODULE_5__obx_derivation__["f" /* setDerivationDirty */])(_this.reaction);
            }
        };
        if (ghost) {
            area = new __WEBPACK_IMPORTED_MODULE_6__ghost_area__["a" /* default */](this.scope, config, notifier);
        }
        else if (config.virtual) {
            area = new __WEBPACK_IMPORTED_MODULE_7__virtual_area__["a" /* default */](this.scope, config, notifier);
        }
        else {
            area = new Area(this.scope, config);
        }
        this.areas.push(area);
        this.areasMap[area.key] = area;
        return area;
    };
    Area.prototype.isDirty = function () {
        return this.reaction.isDirty();
    };
    Area.prototype.getRevision = function () {
        this.checkRun();
        return this.revision;
    };
    Area.prototype.mark = function (sleep) {
        this.sleepMarked = sleep;
        if (sleep === false) {
            this.wakeup();
        }
    };
    Area.prototype.sleep = function () {
        if (this.sleeping) {
            return;
        }
        this.sleepMarked = false;
        this.revision = -1;
        this.sleeping = true;
        this.reaction.sleep();
        this.areas.forEach(function (area) { return area.sleep(); });
    };
    Area.prototype.wakeup = function () {
        if (!this.sleeping) {
            return;
        }
        this.sleeping = false;
        this.reaction.wakeup();
        this.areas.forEach(function (area) { return area.wakeup(); });
    };
    Area.prototype.observe = function (fn) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__obx_listener__["b" /* registerListener */])(this, fn);
    };
    Area.prototype.runImmediately = function () {
        if (this.isDirty()) {
            this.reaction.run();
        }
    };
    Area.prototype.checkRun = function () {
        if (this.revision < 0 || this.isDirty()) {
            this.notify = false;
            this.reaction.run();
            this.notify = true;
        }
    };
    return Area;
}());
/* harmony default export */ __webpack_exports__["a"] = (Area);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__obx_observable_property__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obx_derivation__ = __webpack_require__(3);


var Prop = /** @class */ (function () {
    function Prop(area, config, view) {
        this.area = area;
        this.spread = false;
        this.key = config.key;
        if (config.expr) {
            this.reactiveData = new __WEBPACK_IMPORTED_MODULE_0__obx_observable_property__["a" /* default */](config.key, area.scope, config.expr, undefined, config.value, [area, view], true);
        }
        else {
            this.data = config.value;
        }
        this.spread = Boolean(config.spread);
    }
    Prop.prototype.getData = function () {
        if (this.reactiveData) {
            if (this.reactiveData.scope !== this.area.scope) {
                this.reactiveData.scope = this.area.scope;
                Object(__WEBPACK_IMPORTED_MODULE_1__obx_derivation__["d" /* resetDerivationState */])(this.reactiveData);
            }
            return this.reactiveData.get();
        }
        else {
            return this.data;
        }
    };
    Prop.prototype.isSpread = function () {
        return this.spread;
    };
    return Prop;
}());
/* harmony default export */ __webpack_exports__["a"] = (Prop);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = nextTick;
var callbacks = [];
var pending = false;
function flush() {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var _i = 0, copies_1 = copies; _i < copies_1.length; _i++) {
        var fn = copies_1[_i];
        fn();
    }
}
var timerFlush;
if (false) {
    timerFlush = function () { return process.nextTick(flush); };
}
else if (typeof Promise === 'function') { // tslint:disable-line
    var timer_1 = Promise.resolve(); // tslint:disable-line
    timerFlush = function () {
        timer_1.then(flush);
        // if (isIOS) setTimeout(noop)
    };
}
else if (typeof MessageChannel === 'function') {
    var channel = new MessageChannel();
    var port_1 = channel.port2;
    channel.port1.onmessage = flush;
    timerFlush = function () {
        port_1.postMessage(1);
    };
}
else {
    timerFlush = function () {
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = XFor;
/* harmony export (immutable) */ __webpack_exports__["b"] = X;
/* harmony export (immutable) */ __webpack_exports__["g"] = xId;
/* harmony export (immutable) */ __webpack_exports__["f"] = xAssign;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return V; });
/* harmony export (immutable) */ __webpack_exports__["h"] = xModifiers;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return globalHelpers; });
/* harmony export (immutable) */ __webpack_exports__["e"] = runApp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__x__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_link__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router_nav_link__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__router_route__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__router_redirect__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router_utils__ = __webpack_require__(8);










function XFor(data, delegate) {
    if (Array.isArray(data)) {
        return data.map(function (item, index) { return delegate(String(index), item); });
    }
    if (data) {
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
    // todo: error handler
    return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_3__x__["a" /* default */], {
        key: area.key,
        area: area,
        children: render,
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
        }
        else if (target.type === 'checkbox') {
            var data_1 = getter();
            if (Array.isArray(data_1)) {
                if (target.checked) {
                    data_1.push(target.value);
                }
                else {
                    var l = data_1.length;
                    while (l-- >= 0) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__core_obx_utils__["n" /* looseEqual */])(data_1[l], target.value)) {
                            data_1.splice(l, 1);
                        }
                    }
                }
                setter(data_1);
            }
            else {
                setter(target.checked);
            }
        }
        else {
            setter(target.value);
        }
    }
    else if (target.nodeName === 'SELECT') {
        var data_2 = Array.prototype.filter.call(target.options, function (o) { return o.selected; })
            .map(function (o) { return o.value; });
        setter(target.multiple ? data_2 : data_2[0]);
    }
    else {
        setter(target.value);
    }
}
function notFound(type) {
    return function () { return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])('div', null, "Component \"" + type + "\" Not Found."); };
}
function getComponent(maps, name) {
    var ns = name.split('.');
    var key = ns.shift();
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__core_obx_utils__["g" /* hasOwnProperty */])(maps, key)) {
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
        return Object(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"])(type, props);
    }
    return __WEBPACK_IMPORTED_MODULE_1_react__["createElement"].apply(void 0, [type, props].concat(children));
}
var V = function (type, props, children) {
    return create(V.get(type), props, children);
};
function register(maps, typeOrMaps, Component) {
    if (typeof typeOrMaps === 'string' && Component) {
        maps[typeOrMaps] = Component;
    }
    else if (Object(__WEBPACK_IMPORTED_MODULE_2__core_obx_utils__["k" /* isObject */])(typeOrMaps)) {
        Object.keys(typeOrMaps).forEach(function (key) {
            maps[key] = typeOrMaps[key];
        });
    }
}
function wrapperWith(P, maps) {
    var R = function (type, props, children) {
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
    R.wrapperWith = function (xmaps) { return wrapperWith(R, xmaps); };
    R.register = function (type, Component) { return register(maps, type, Component); };
    return R;
}
var globalMaps = {};
var internalMaps = {
    Fragment: __WEBPACK_IMPORTED_MODULE_1_react__["Fragment"],
    Link: __WEBPACK_IMPORTED_MODULE_4__router_link__["a" /* default */],
    NavLink: __WEBPACK_IMPORTED_MODULE_5__router_nav_link__["a" /* default */],
    Route: __WEBPACK_IMPORTED_MODULE_6__router_route__["a" /* default */],
    Redirect: __WEBPACK_IMPORTED_MODULE_7__router_redirect__["a" /* default */],
};
V.get = function (type) {
    if (typeof type === 'string') {
        var temp = getComponent(globalMaps, type);
        if (temp) {
            return temp;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__core_obx_utils__["g" /* hasOwnProperty */])(internalMaps, type)) {
            return internalMaps[type];
        }
    }
    return type;
};
V.register = function (typeOrMaps, Component) { return register(globalMaps, typeOrMaps, Component); };
V.wrapperWith = function (maps) { return wrapperWith(V, maps); };
var ModifiersMap = {
    stop: function (e) {
        e.stopPropagation();
    },
    prevent: function (e) {
        e.preventDefault();
    },
    enter: function (e) {
        if (e.keyCode !== 13) {
            return false;
        }
    },
    tab: function (e) {
        if (e.keyCode !== 9) {
            return false;
        }
    },
    delete: function (e) {
        // 'Backspace', 'Delete'
        if (e.keyCode !== 8 && e.keyCode !== 46) {
            return false;
        }
    },
    esc: function (e) {
        if (e.keyCode !== 27) {
            return false;
        }
    },
    space: function (e) {
        if (e.keyCode !== 32) {
            return false;
        }
    },
    up: function (e) {
        if (e.keyCode !== 38) {
            return false;
        }
    },
    down: function (e) {
        if (e.keyCode !== 40) {
            return false;
        }
    },
    left: function (e) {
        if (e.keyCode !== 37) {
            return false;
        }
    },
    right: function (e) {
        if (e.keyCode !== 39) {
            return false;
        }
    }
};
function xModifiers(modifiers) {
    var modifierQueue = modifiers.map(function (modifier) { return ModifiersMap[modifier]; }).filter(Boolean);
    return function (_, e) {
        if (e && e.nativeEvent) {
            var brk = modifierQueue.some(function (fn) { return fn(e) === false; });
            if (brk) {
                return false;
            }
        }
    };
}
var globalHelpers = {};
function runApp(AppComponent, config) {
    if (config === void 0) { config = {}; }
    // init history
    __WEBPACK_IMPORTED_MODULE_8__navigator__["a" /* default */].init(config.history);
    var location = __WEBPACK_IMPORTED_MODULE_8__navigator__["a" /* default */].history.location;
    if (config.globalComponents) {
        register(globalMaps, config.globalComponents);
    }
    if (config.globalHelpers) {
        Object(__WEBPACK_IMPORTED_MODULE_2__core_obx_utils__["q" /* objectAssign */])(globalHelpers, config.globalHelpers);
    }
    var container = document.createElement('div');
    document.body.appendChild(container);
    container.id = 'app';
    Object(__WEBPACK_IMPORTED_MODULE_0_react_dom__["render"])(V(AppComponent, {
        match: new __WEBPACK_IMPORTED_MODULE_9__router_utils__["a" /* MatchResult */]('/', '/', location.pathname === '/', {}),
    }), container);
}


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);

var createTransitionManager = function createTransitionManager() {
    var prompt = null;
    var setPrompt = function setPrompt(nextPrompt) {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(prompt == null, 'A history supports only one prompt at a time');
        prompt = nextPrompt;
        return function () {
            if (prompt === nextPrompt)
                prompt = null;
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
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_0_warning___default()(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
                    callback(true);
                }
            }
            else {
                // Return false from a transition hook to cancel the transition.
                callback(result !== false);
            }
        }
        else {
            callback(true);
        }
    };
    var listeners = [];
    var appendListener = function appendListener(fn) {
        var isActive = true;
        var listener = function listener() {
            if (isActive)
                fn.apply(undefined, arguments);
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var _a = Object(__WEBPACK_IMPORTED_MODULE_0_react__["createContext"])({}), Provider = _a.Provider, Consumer = _a.Consumer;
var ViewContext = /** @class */ (function () {
    function ViewContext(match, controller) {
        this.match = match;
        this.controller = controller;
    }
    ViewContext.Provider = Provider;
    ViewContext.Consumer = Consumer;
    return ViewContext;
}());
/* harmony default export */ __webpack_exports__["a"] = (ViewContext);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export __extends */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["b"] = __rest;
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* unused harmony export __awaiter */
/* unused harmony export __generator */
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
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b)
            if (b.hasOwnProperty(p))
                d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
            if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
        return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = { label: 0, sent: function () { if (t[0] & 1)
            throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f)
            throw new TypeError("Generator is already executing.");
        while (_)
            try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                    return t;
                if (y = 0, t)
                    op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return { value: op[1], done: false };
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
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                        if (t[2])
                            _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            }
            catch (e) {
                op = [6, e];
                y = 0;
            }
            finally {
                f = t = 0;
            }
        if (op[0] & 5)
            throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
    }
}
function __exportStar(m, exports) {
    for (var p in m)
        if (!exports.hasOwnProperty(p))
            exports[p] = m[p];
}
function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m)
        return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length)
                o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m)
        return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
    }
    catch (error) {
        e = { error: error };
    }
    finally {
        try {
            if (r && !r.done && (m = i["return"]))
                m.call(i);
        }
        finally {
            if (e)
                throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n])
        i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try {
        step(g[n](v));
    }
    catch (e) {
        settle(q[0][3], e);
    } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]); }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", { value: raw });
    }
    else {
        cooked.raw = raw;
    }
    return cooked;
}
;
function __importStar(mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
var normalizeHeaderName = __webpack_require__(66);
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
        adapter = __webpack_require__(40);
    }
    else if (true) {
        // For node use HTTP adapter
        adapter = __webpack_require__(40);
    }
    return adapter;
}
var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) ||
                utils.isArrayBuffer(data) ||
                utils.isBuffer(data) ||
                utils.isStream(data) ||
                utils.isFile(data) ||
                utils.isBlob(data)) {
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
                }
                catch (e) { /* Ignore */ }
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createRandom; });
/* harmony export (immutable) */ __webpack_exports__["a"] = basicGenerator;
var chars = '0123456789abcdefghijklmnopqrstuvwxyz'.split('');
var createRandom = function (length) {
    return new Array(length)
        .fill(0)
        .map(function (_, index) { return chars[index]; })
        .join('');
};
function basicGenerator(option) {
    var randomLength = Math.floor(Math.random() * 5);
    if (!option) {
        return createRandom(randomLength);
    }
    var length = option.length || null;
    var _a = option, min = _a.min, max = _a.max;
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scope__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx_observable_proxy__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib__ = __webpack_require__(30);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};





var ViewController = /** @class */ (function (_super) {
    __extends(ViewController, _super);
    function ViewController(props) {
        var _this = _super.call(this) || this;
        Object(__WEBPACK_IMPORTED_MODULE_3__obx_observable_proxy__["b" /* defineObservableProperty */])(_this, '$props', props, undefined, true);
        Object(__WEBPACK_IMPORTED_MODULE_3__obx_observable_proxy__["b" /* defineObservableProperty */])(_this, '$refs', {});
        return _this;
    }
    ViewController.prototype.__m = function (config) {
        if (!this.__area) {
            this.__area = new __WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */](this, config);
        }
        return this.__area;
    };
    ViewController.prototype.$init = function (params) {
        // 初始化, times: 1
    };
    ViewController.prototype.$receive = function (params) {
        // 再次进入页面，times: 0+
    };
    ViewController.prototype.$didMount = function () {
        // 页面视图挂载 times: 1
    };
    ViewController.prototype.$didCatch = function (e) {
        // 页面渲染错误 times: 0+
    };
    ViewController.prototype.$destroy = function () {
        // 页面卸载 times: 1
    };
    ViewController.prototype.$action = function (actions, area) {
        var _this = this;
        if (!Array.isArray(actions)) {
            actions = [actions];
        }
        var actionList = parseActions(actions, this);
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return doAction(actionList, _this, { scope: area.scope }, args);
        };
    };
    ViewController.prototype.$ = function (key) {
        var ret = this.$get(key);
        if (ret !== undefined) {
            return ret;
        }
        var helpers = this.__vxHelpers;
        if (Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["g" /* hasOwnProperty */])(helpers, key)) {
            return helpers[key];
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["g" /* hasOwnProperty */])(__WEBPACK_IMPORTED_MODULE_4__lib__["h" /* globalHelpers */], key)) {
            return __WEBPACK_IMPORTED_MODULE_4__lib__["h" /* globalHelpers */][key];
        }
        if (window) {
            return window[key];
        }
    };
    ViewController.prototype.$get = function (key) {
        Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["h" /* initializeInstance */])(this);
        return _super.prototype.$get.call(this, key);
    };
    ViewController.prototype.$set = function (key, val) {
        Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["h" /* initializeInstance */])(this);
        return _super.prototype.$set.call(this, key, val);
    };
    ViewController.prototype.$del = function (key) {
        Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["h" /* initializeInstance */])(this);
        return _super.prototype.$del.call(this, key);
    };
    ViewController.prototype.$extend = function (properties) {
        Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["h" /* initializeInstance */])(this);
        return _super.prototype.$extend.call(this, properties);
    };
    ViewController.prototype.$derive = function (data) {
        Object(__WEBPACK_IMPORTED_MODULE_2__obx_utils__["h" /* initializeInstance */])(this);
        return _super.prototype.$derive.call(this, data);
    };
    return ViewController;
}(__WEBPACK_IMPORTED_MODULE_0__scope__["a" /* BaseScope */]));
/* harmony default export */ __webpack_exports__["a"] = (ViewController);
function parseActions(actions, context) {
    return actions.map(function (action) {
        if (!action) {
            return null;
        }
        if (Array.isArray(action)) {
            var subActions_1 = parseActions(action, context);
            return {
                name: 'ActionGroup',
                fn: function (params) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    return doAction(subActions_1, context, params, args);
                },
            };
        }
        var t = typeof action;
        if (t === 'string') {
            if (action in context) {
                return {
                    name: action,
                    fn: context[action],
                };
            }
            return null;
        }
        if (t === 'function') {
            return {
                name: 'anonymous',
                fn: action,
            };
        }
        if (action.name) {
            return {
                name: action.name,
                fn: context[action.name],
                params: action.params,
            };
        }
        return null;
    }).filter(Boolean);
}
function doAction(queue, context, params, args) {
    if (!queue) {
        return;
    }
    queue = queue.slice(0);
    var _resolve;
    var i = new Promise(function (resolve) {
        _resolve = resolve;
    });
    var fail = function (e) {
        console.error(e); // tslint:disable-line
    };
    var next = function (previousResult) {
        var item = queue.shift();
        if (!item) {
            return _resolve();
        }
        var res;
        try {
            res = item.fn.apply(context, [__assign({}, params, { previousResult: previousResult }, item.params)].concat(args));
        }
        catch (e) {
            return fail(e);
        }
        if (res === false) {
            // interrupt
            return null;
        }
        if (res && res.then) {
            res.then(next).catch(fail);
        }
        else if (res instanceof Error) {
            fail(res);
        }
        else {
            next(res);
        }
        return null;
    };
    next();
    return i;
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global_state__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__derivation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__observable_proxy__ = __webpack_require__(7);





var ObservableProperty = /** @class */ (function () {
    function ObservableProperty(name, scope, getter, setter, value, extraGetterParams, shallow) {
        if (shallow === void 0) { shallow = false; }
        this.name = name;
        this.scope = scope;
        this.getter = getter;
        this.setter = setter;
        this.value = value;
        this.extraGetterParams = extraGetterParams;
        this.shallow = shallow;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["p" /* nextId */])();
        this.observing = [];
        this.observers = new Set();
        this.dependenciesState = __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].NOT_TRACKING;
        this.lowestObserverState = __WEBPACK_IMPORTED_MODULE_1__derivation__["a" /* DerivationState */].UP_TO_DATE;
        this.isComputing = false;
        this.isRunningSetter = false;
        this.externalSetted = false;
    }
    ObservableProperty.prototype.onBecomeDirty = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["d" /* propagateChanged */])(this);
    };
    ObservableProperty.prototype.onBecomeUnobserved = function () {
        Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["b" /* clearObserving */])(this);
    };
    ObservableProperty.prototype.onBecomeObserved = function () { };
    ObservableProperty.prototype.get = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* invariant */])(!this.isComputing, "Cycle detected in computation " + this.name, this.getter);
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["f" /* reportObserved */])(this);
        if (!this.getter || this.externalSetted) {
            this.externalSetted = false;
        }
        else if (Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["g" /* shouldCompute */])(this)) {
            Object(__WEBPACK_IMPORTED_MODULE_2__observable__["g" /* startBatch */])();
            this.computeValue();
            Object(__WEBPACK_IMPORTED_MODULE_2__observable__["c" /* endBatch */])();
        }
        var result = this.value;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["c" /* isCaughtException */])(result)) {
            throw result.cause;
        }
        var proxy = this.shallow ? Object(__WEBPACK_IMPORTED_MODULE_4__observable_proxy__["c" /* getObservableProxy */])(result) : Object(__WEBPACK_IMPORTED_MODULE_2__observable__["b" /* asObservable */])(result);
        if (proxy) {
            Object(__WEBPACK_IMPORTED_MODULE_2__observable__["f" /* reportObserved */])(proxy);
        }
        return result;
    };
    ObservableProperty.prototype.set = function (value) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* invariant */])(!this.isRunningSetter, "The setter of computed value '" + this.name + "' is trying to update itself.");
        var oldValue = this.value;
        this.externalSetted = !this.setter;
        // equals compare
        if (!Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["c" /* isCaughtException */])(oldValue) && oldValue === value) {
            return;
        }
        this.isRunningSetter = true;
        if (this.externalSetted) {
            this.value = value;
        }
        else {
            var prevTracking = Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["j" /* untrackedStart */])();
            try {
                this.setter.call(this.scope, value);
            }
            finally {
                Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["i" /* untrackedEnd */])(prevTracking);
            }
        }
        this.isRunningSetter = false;
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["g" /* startBatch */])();
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["d" /* propagateChanged */])(this);
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["c" /* endBatch */])();
    };
    ObservableProperty.prototype.computeValue = function () {
        var oldValue = this.value;
        this.isComputing = true;
        __WEBPACK_IMPORTED_MODULE_0__global_state__["a" /* globalState */].computationDepth++;
        this.value = Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["e" /* runDerivedFunction */])(this, this.getter, this.scope, this.extraGetterParams);
        __WEBPACK_IMPORTED_MODULE_0__global_state__["a" /* globalState */].computationDepth--;
        this.isComputing = false;
        return (Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["c" /* isCaughtException */])(oldValue) || Object(__WEBPACK_IMPORTED_MODULE_1__derivation__["c" /* isCaughtException */])(this.value) || this.value !== oldValue);
    };
    return ObservableProperty;
}());
/* harmony default export */ __webpack_exports__["a"] = (ObservableProperty);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__prop__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx_observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_derivation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__obx_global_state__ = __webpack_require__(6);







function matchClassProperty(key) {
    if (key === 'class' || key === 'className') {
        return true;
    }
    if (key.substr(0, 6) === 'class.') {
        return key.substr(6);
    }
    if (key.substr(0, 10) === 'className.') {
        return key.substr(10);
    }
    return false;
}
function matchStyleProperty(key) {
    if (key === 'style') {
        return true;
    }
    if (key.substr(0, 6) === 'style.') {
        return key.substr(6);
    }
    return false;
}
function processData(key, value, klass, styles, rest, listen) {
    var _a;
    var m = matchClassProperty(key);
    if (m) {
        if (m === true) {
            klass.push(value);
        }
        else {
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
        }
        else {
            if (value !== '' && value != null) {
                styles.push((_a = {},
                    _a[m] = value,
                    _a));
            }
        }
        return;
    }
    rest[key] = listen(value);
}
var ObservableView = /** @class */ (function () {
    function ObservableView(area, _a) {
        var key = _a.key, name = _a.name, props = _a.props;
        var _this = this;
        this.area = area;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["p" /* nextId */])();
        this.observing = [];
        this.observers = new Set();
        this.dependenciesState = __WEBPACK_IMPORTED_MODULE_4__obx_derivation__["a" /* DerivationState */].NOT_TRACKING;
        this.lowestObserverState = __WEBPACK_IMPORTED_MODULE_4__obx_derivation__["a" /* DerivationState */].UP_TO_DATE;
        this.isComputing = false;
        this.propsArr = [];
        this.propsMap = {};
        this.key = key;
        this.name = name + "@" + this.id;
        this.propsArr = (props || []).map(function (config) {
            var prop = new __WEBPACK_IMPORTED_MODULE_2__prop__["a" /* default */](area, config, _this);
            if (!prop.isSpread()) {
                _this.propsMap[prop.key] = prop;
            }
            return prop;
        });
        this.scope = this.area.scope;
        var component = this.scope.__V.get(name);
        var listen = function (prop) {
            if (typeof prop === 'function') {
                var v_1 = _this; // tslint:disable-line
                return function f() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var ret = prop.apply(this, args);
                    v_1.refresh();
                    return ret;
                };
            }
            return prop;
        };
        this.computeFn = function () {
            var maps = {};
            var klass = [];
            var styles = [];
            for (var i = 0, l = _this.propsArr.length; i < l; i++) {
                var prop = _this.propsArr[i];
                if (prop.isSpread()) {
                    var spreadData = prop.getData();
                    for (var key_1 in spreadData) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(spreadData, key_1)) {
                            processData(key_1, spreadData[key_1], klass, styles, maps, listen);
                        }
                    }
                }
                else {
                    processData(prop.key, prop.getData(), klass, styles, maps, listen);
                }
            }
            if (!maps.key) {
                maps.key = _this.key + "-" + _this.id;
            }
            if (klass.length > 0) {
                maps.className = __WEBPACK_IMPORTED_MODULE_0_classnames__(klass);
            }
            if (styles.length > 0) {
                maps.style = __WEBPACK_IMPORTED_MODULE_1__obx_utils__["q" /* objectAssign */].apply(void 0, [{}].concat(styles));
            }
            if (maps.ref && typeof maps.ref === 'string') {
                var refKey_1 = maps.ref;
                maps.ref = function (ref) {
                    _this.scope.$set("$refs/" + refKey_1, ref);
                };
            }
            if ('x-model' in maps) {
                var data = maps['x-model'];
                delete maps['x-model'];
                if (component === 'input') {
                    if (maps.type === 'radio') {
                        maps.checked = Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["n" /* looseEqual */])(maps.value, data);
                    }
                    else if (maps.type === 'checkbox') {
                        if (Array.isArray(data)) {
                            maps.checked = Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["o" /* looseIndexOf */])(data, maps.value) > -1;
                        }
                        else {
                            maps.checked = Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["n" /* looseEqual */])(data, true);
                        }
                    }
                    else {
                        maps.value = data;
                    }
                }
                else if (component && component.propTypes) {
                    maps[component.propTypes.checked ? 'checked' : 'value'] = data;
                }
                else {
                    maps.value = data;
                }
            }
            return maps;
        };
    }
    ObservableView.prototype.onBecomeDirty = function () {
        Object(__WEBPACK_IMPORTED_MODULE_3__obx_observable__["d" /* propagateChanged */])(this);
    };
    ObservableView.prototype.onBecomeUnobserved = function () {
        Object(__WEBPACK_IMPORTED_MODULE_4__obx_derivation__["b" /* clearObserving */])(this);
    };
    ObservableView.prototype.onBecomeObserved = function () {
    };
    Object.defineProperty(ObservableView.prototype, "props", {
        get: function () {
            Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["i" /* invariant */])(!this.isComputing, "Cycle detected in computation " + this.name);
            Object(__WEBPACK_IMPORTED_MODULE_3__obx_observable__["f" /* reportObserved */])(this);
            this.checkRun();
            var result = this.data;
            if (Object(__WEBPACK_IMPORTED_MODULE_4__obx_derivation__["c" /* isCaughtException */])(result)) {
                throw result.cause;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    ObservableView.prototype.refresh = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_4__obx_derivation__["g" /* shouldCompute */])(this)) {
            this.area.runImmediately();
        }
    };
    ObservableView.prototype.checkRun = function () {
        if (this.scope !== this.area.scope || Object(__WEBPACK_IMPORTED_MODULE_4__obx_derivation__["g" /* shouldCompute */])(this)) {
            this.scope = this.area.scope;
            Object(__WEBPACK_IMPORTED_MODULE_3__obx_observable__["g" /* startBatch */])();
            this.isComputing = true;
            __WEBPACK_IMPORTED_MODULE_5__obx_global_state__["a" /* globalState */].computationDepth++;
            this.data = Object(__WEBPACK_IMPORTED_MODULE_4__obx_derivation__["e" /* runDerivedFunction */])(this, this.computeFn);
            __WEBPACK_IMPORTED_MODULE_5__obx_global_state__["a" /* globalState */].computationDepth--;
            this.isComputing = false;
            Object(__WEBPACK_IMPORTED_MODULE_3__obx_observable__["c" /* endBatch */])();
        }
    };
    return ObservableView;
}());
/* harmony default export */ __webpack_exports__["a"] = (ObservableView);


/***/ }),
/* 26 */
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
            if (!arg)
                continue;
            var argType = typeof arg;
            if (argType === 'string' || argType === 'number') {
                classes.push(arg);
            }
            else if (Array.isArray(arg) && arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) {
                    classes.push(inner);
                }
            }
            else if (argType === 'object') {
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
    }
    else if (true) {
        // register as 'classnames', consistent with npm package name
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return classNames;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {
        window.classNames = classNames;
    }
}());


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reaction; });
/* unused harmony export runReactions */
/* harmony export (immutable) */ __webpack_exports__["b"] = autorun;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__derivation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__next_tick__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__global_state__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(0);





var Reaction = /** @class */ (function () {
    function Reaction(name, action, priority, throttleWait) {
        if (priority === void 0) { priority = 0; }
        if (throttleWait === void 0) { throttleWait = 8; }
        this.name = name;
        this.action = action;
        this.priority = priority;
        this.observing = [];
        this.dependenciesState = __WEBPACK_IMPORTED_MODULE_0__derivation__["a" /* DerivationState */].NOT_TRACKING;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["p" /* nextId */])();
        this.scheduled = false;
        this.sleeping = false;
        this.running = false;
        this.firstRun = true;
        if (throttleWait > 0) {
            this.scheduleRun = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["v" /* throttle */])(this.run.bind(this), throttleWait);
        }
        else {
            this.scheduleRun = this.run.bind(this);
        }
    }
    Reaction.prototype.onBecomeDirty = function () {
        this.schedule();
    };
    Reaction.prototype.schedule = function () {
        if (this.scheduled || this.sleeping) {
            return;
        }
        this.scheduled = true;
        scheduleReaction(this);
    };
    Reaction.prototype.isScheduled = function () {
        return this.scheduled;
    };
    Reaction.prototype.isDirty = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_0__derivation__["g" /* shouldCompute */])(this);
    };
    Reaction.prototype.run = function () {
        var _this = this;
        // todo: warning this.running
        if (this.sleeping || this.running) {
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["g" /* startBatch */])();
        if (Object(__WEBPACK_IMPORTED_MODULE_0__derivation__["g" /* shouldCompute */])(this)) {
            this.running = true;
            var result = Object(__WEBPACK_IMPORTED_MODULE_0__derivation__["e" /* runDerivedFunction */])(this, this.action, {
                dispose: function () { return _this.sleep(); },
                firstRun: this.firstRun,
            });
            this.firstRun = false;
            this.running = false;
            // if (isCaughtException(result)) this.reportExceptionInDerivation(result.cause)
        }
        if (this.sleeping) {
            Object(__WEBPACK_IMPORTED_MODULE_0__derivation__["b" /* clearObserving */])(this);
        }
        Object(__WEBPACK_IMPORTED_MODULE_2__observable__["c" /* endBatch */])();
    };
    Reaction.prototype.sleep = function () {
        if (this.sleeping) {
            return;
        }
        this.sleeping = true;
        if (!this.running) {
            Object(__WEBPACK_IMPORTED_MODULE_2__observable__["g" /* startBatch */])();
            Object(__WEBPACK_IMPORTED_MODULE_0__derivation__["b" /* clearObserving */])(this);
            Object(__WEBPACK_IMPORTED_MODULE_2__observable__["c" /* endBatch */])();
            deScheduleReaction(this);
        }
    };
    Reaction.prototype.wakeup = function () {
        this.sleeping = false;
    };
    return Reaction;
}());

var flushIndex = 0;
var flushWaiting = false;
function scheduleReaction(reaction) {
    var pendingReactions = __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* globalState */].pendingReactions, isRunningReactions = __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* globalState */].isRunningReactions;
    if (!isRunningReactions) {
        pendingReactions.push(reaction);
    }
    else {
        var i = pendingReactions.length - 1;
        while (i > flushIndex && pendingReactions[i].priority < reaction.priority) {
            i--;
        }
        pendingReactions.splice(i + 1, 0, reaction);
    }
    runReactions();
}
function deScheduleReaction(reaction) {
    var pendingReactions = __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* globalState */].pendingReactions, isRunningReactions = __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* globalState */].isRunningReactions;
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
        Object(__WEBPACK_IMPORTED_MODULE_1__next_tick__["a" /* nextTick */])(flushReactions);
    }
}
var MAX_REACTION_ITERATIONS = 100;
function flushReactions() {
    __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* globalState */].isRunningReactions = true;
    var allReactions = __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* globalState */].pendingReactions;
    var pendingLength = 0;
    var iterations = 0;
    allReactions.sort(function (a, b) { return b.priority - a.priority; });
    while (allReactions.length > pendingLength) {
        pendingLength = allReactions.length;
        if (++iterations === MAX_REACTION_ITERATIONS) {
            // tslint:disable-next-line
            console.error("Reaction doesn't converge to a stable state after " + MAX_REACTION_ITERATIONS + " iterations." +
                (" Probably there is a cycle in the reactive function: " + allReactions[0]));
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
    __WEBPACK_IMPORTED_MODULE_3__global_state__["a" /* globalState */].isRunningReactions = false;
}
function autorun(action, options) {
    if (options === void 0) { options = {}; }
    var name = action.name || "Autorun@" + Object(__WEBPACK_IMPORTED_MODULE_4__utils__["p" /* nextId */])();
    if (typeof options === 'number') {
        options = { throttle: options };
    }
    var reaction = new Reaction(name, action, 0, options.throttle || 0);
    if (options.runFirstNow) {
        reaction.run();
    }
    else {
        reaction.schedule();
    }
    return function () {
        reaction.sleep();
    };
}


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__area__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obx_next_tick__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__virtual_area__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_derivation__ = __webpack_require__(3);





var GhostArea = /** @class */ (function () {
    function GhostArea(scope, config, notifier) {
        this.scope = scope;
        this.config = config;
        this.notifier = notifier;
        this.sleeping = false;
        this.areas = [];
        this.areasMap = {};
        this.marked = false;
        this.key = config.key;
    }
    GhostArea.prototype.replaceScope = function (scope) {
        this.scope = scope;
    };
    // 迭代派生域
    GhostArea.prototype.w = function (data) {
        var _this = this;
        var key = data.$id;
        if (!this.marked) {
            this.marked = true;
            this.areas.forEach(function (item) { return item.mark(true); });
            Object(__WEBPACK_IMPORTED_MODULE_2__obx_next_tick__["a" /* nextTick */])(function () {
                _this.marked = false;
                _this.areas.forEach(function (item) {
                    if (item.sleepMarked) {
                        item.sleep();
                    }
                });
            });
        }
        var area;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.areasMap, key)) {
            area = this.areasMap[key];
            if (area.scope.$super !== this.scope || area.scope.$each !== data.$each) {
                var scope_1 = this.scope.$derive(data);
                Object(__WEBPACK_IMPORTED_MODULE_4__obx_derivation__["h" /* untracked */])(function () { return area.replaceScope(scope_1); });
            }
            area.mark(false);
        }
        else {
            var scope = this.scope.$derive(data);
            area = this.config.virtual === true
                ? new __WEBPACK_IMPORTED_MODULE_3__virtual_area__["a" /* default */](scope, this.config, this.notifier)
                : new __WEBPACK_IMPORTED_MODULE_0__area__["a" /* default */](scope, this.config);
            this.areas.push(area);
            this.areasMap[key] = area;
        }
        area.key = key;
        return area;
    };
    GhostArea.prototype.sleep = function () {
        if (this.sleeping) {
            return;
        }
        this.sleeping = true;
        this.areas.forEach(function (area) { return area.sleep(); });
    };
    GhostArea.prototype.wakeup = function () {
        this.sleeping = false;
    };
    GhostArea.prototype.runImmediately = function () {
        this.notifier(true);
    };
    return GhostArea;
}());
/* harmony default export */ __webpack_exports__["a"] = (GhostArea);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__prop__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__observable_view__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__obx_derivation__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__obx_observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__area__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ghost_area__ = __webpack_require__(28);







var VirtualArea = /** @class */ (function () {
    function VirtualArea(scope, config, notifier) {
        var _this = this;
        this.scope = scope;
        this.config = config;
        this.notifier = notifier;
        this.id = Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["p" /* nextId */])();
        this.observing = [];
        this.dependenciesState = __WEBPACK_IMPORTED_MODULE_3__obx_derivation__["a" /* DerivationState */].NOT_TRACKING;
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
        this.key = config.key || this.id;
        this.name = "varea@" + this.key;
        var views = (config.views || []).map(function (viewConfig) {
            var view = new __WEBPACK_IMPORTED_MODULE_2__observable_view__["a" /* default */](_this, viewConfig);
            _this.views[view.key] = view;
            return view;
        });
        var exprs = (config.exprs || []).map(function (exprConfig) {
            var expr = new __WEBPACK_IMPORTED_MODULE_0__prop__["a" /* default */](_this, exprConfig);
            _this.exprs[expr.key] = expr;
            return expr;
        });
        this.reaction = function () {
            _this.viewsData = {};
            _this.exprsData = {};
            views.forEach(function (view) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(_this.viewsData, view.key)) {
                    _this.viewsData[view.key] = view.props;
                }
            });
            exprs.forEach(function (expr) {
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(_this.exprsData, expr.key)) {
                    _this.exprsData[expr.key] = expr.getData();
                }
            });
        };
    }
    VirtualArea.prototype.onBecomeDirty = function () {
        this.notifier();
    };
    VirtualArea.prototype.replaceScope = function (scope) {
        this.scope = scope;
        Object(__WEBPACK_IMPORTED_MODULE_3__obx_derivation__["d" /* resetDerivationState */])(this);
    };
    /**
     * get view props data
     */
    VirtualArea.prototype.p = function (name) {
        if (this.running) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.viewsData, name) && Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.views, name)) {
                this.viewsData[name] = this.views[name].props;
            }
        }
        else {
            this.checkRun();
        }
        return this.viewsData[name];
    };
    /**
     * get expr data
     */
    VirtualArea.prototype.e = function (name) {
        if (this.running) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.exprsData, name) && Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.exprs, name)) {
                this.exprsData[name] = this.exprs[name].getData();
            }
        }
        else {
            this.checkRun();
        }
        return this.exprsData[name];
    };
    VirtualArea.prototype.c = function (config, ghost) {
        if (ghost === void 0) { ghost = false; }
        if (config.key === this.key) {
            return this;
        }
        var area;
        if (Object(__WEBPACK_IMPORTED_MODULE_1__obx_utils__["g" /* hasOwnProperty */])(this.areasMap, config.key)) {
            area = this.areasMap[config.key];
            if (area.scope !== this.scope) {
                area.replaceScope(this.scope);
            }
            return area;
        }
        if (ghost) {
            area = new __WEBPACK_IMPORTED_MODULE_6__ghost_area__["a" /* default */](this.scope, config, this.notifier);
        }
        else if (config.virtual) {
            area = new VirtualArea(this.scope, config, this.notifier);
        }
        else {
            area = new __WEBPACK_IMPORTED_MODULE_5__area__["a" /* default */](this.scope, config);
        }
        this.areasMap[area.key] = area;
        this.areas.push(area);
        return area;
    };
    VirtualArea.prototype.mark = function (sleep) {
        this.sleepMarked = sleep;
        if (sleep === false) {
            this.wakeup();
        }
    };
    VirtualArea.prototype.sleep = function () {
        if (this.sleeping) {
            return;
        }
        this.sleepMarked = false;
        this.sleeping = true;
        Object(__WEBPACK_IMPORTED_MODULE_4__obx_observable__["g" /* startBatch */])();
        this.areas.forEach(function (area) { return area.sleep(); });
        if (!this.running) {
            Object(__WEBPACK_IMPORTED_MODULE_3__obx_derivation__["b" /* clearObserving */])(this);
        }
        Object(__WEBPACK_IMPORTED_MODULE_4__obx_observable__["c" /* endBatch */])();
    };
    VirtualArea.prototype.wakeup = function () {
        if (!this.sleeping) {
            return;
        }
        this.sleeping = false;
        this.areas.forEach(function (area) { return area.wakeup(); });
    };
    VirtualArea.prototype.runImmediately = function () {
        this.notifier(true);
    };
    VirtualArea.prototype.checkRun = function () {
        if (this.sleeping) {
            return;
        }
        Object(__WEBPACK_IMPORTED_MODULE_4__obx_observable__["g" /* startBatch */])();
        if (Object(__WEBPACK_IMPORTED_MODULE_3__obx_derivation__["g" /* shouldCompute */])(this)) {
            this.running = true;
            Object(__WEBPACK_IMPORTED_MODULE_3__obx_derivation__["e" /* runDerivedFunction */])(this, this.reaction);
            this.running = false;
        }
        if (this.sleeping) {
            Object(__WEBPACK_IMPORTED_MODULE_3__obx_derivation__["b" /* clearObserving */])(this);
        }
        Object(__WEBPACK_IMPORTED_MODULE_4__obx_observable__["c" /* endBatch */])();
    };
    return VirtualArea;
}());
/* harmony default export */ __webpack_exports__["a"] = (VirtualArea);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__inject__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__compose__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__inject__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_2__navigator__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_3__service__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router__ = __webpack_require__(98);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__router__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_5__utils__["h"]; });









/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_view_controller__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__router_utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_context__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







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
        }
        else {
            k = decode(p.substring(0, n));
            v = decode(p.substring(n + 1));
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_3__core_obx_utils__["g" /* hasOwnProperty */])(params, k)) {
            if (!Array.isArray(params[k])) {
                params[k] = [params[k]];
            }
            params[k].push(v);
        }
        else {
            params[k] = v;
        }
    }
    return params;
}
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || objA === null
        || typeof objB !== 'object' || objB === null) {
        return false;
    }
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    // Test for A's keys different from B.
    var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    for (var i = 0; i < keysA.length; i++) {
        if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }
    return true;
}
function compose(renderFactory, ControllerType, routerView) {
    var lazyRender = null;
    if (!ControllerType) {
        ControllerType = /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            class_1.prototype.$receive = function (props) {
                if (props) {
                    this.$extend(props); // todo: should be here?
                }
            };
            return class_1;
        }(__WEBPACK_IMPORTED_MODULE_2__core_view_controller__["a" /* default */]));
    }
    var proto = ControllerType.prototype;
    Object(__WEBPACK_IMPORTED_MODULE_3__core_obx_utils__["i" /* invariant */])(proto instanceof __WEBPACK_IMPORTED_MODULE_2__core_view_controller__["a" /* default */], "Controller " + ControllerType.name + " must be extends \"ViewController\"");
    if (routerView) {
        Object.defineProperty(proto, '$routerView', {
            configurable: false,
            enumerable: false,
            get: function () {
                console.warn('$routerView is deprecated, use <RouterView /> instead.');
                return routerView(this);
            },
        });
    }
    Object.defineProperty(proto, '__routerView', {
        configurable: false,
        enumerable: false,
        value: function (props) {
            return routerView ? routerView(this, props) : null;
        },
    });
    function createController(parent, props) {
        var _V = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* V */];
        if (!lazyRender) {
            var components = ControllerType.components;
            if (components) {
                _V = __WEBPACK_IMPORTED_MODULE_1__utils__["a" /* V */].wrapperWith(components);
            }
            lazyRender = renderFactory(_V);
        }
        var controller = new ControllerType(props);
        controller.$parent = parent;
        // controller.__root = controller;
        controller.__vxHelpers = ControllerType.helpers;
        controller.__V = _V;
        return controller;
    }
    function compileRequest(props, state) {
        var controller = state.controller;
        var match = props.match, parentController = props.parentController, defined = props.defined, extras = __rest(props, ["match", "parentController", "defined"]);
        if (match instanceof __WEBPACK_IMPORTED_MODULE_4__router_utils__["a" /* MatchResult */]) {
            var location = __WEBPACK_IMPORTED_MODULE_5__navigator__["a" /* default */].history.location;
            var uri = location.pathname + location.search;
            if (!controller
                || state.uri !== uri || state.state !== location.state
                || !shallowEqual(state.props, extras)) {
                var nextState = {
                    uri: uri,
                    defined: defined,
                    state: location.state,
                    extras: extras,
                };
                var request = __assign({}, nextState, { path: location.pathname, params: match.params, query: parseQuery(location.search) });
                if (!controller) {
                    controller = createController(parentController, request);
                    controller.$init(request);
                    nextState.controller = controller;
                }
                else {
                    controller.$set('$props', request);
                    controller.$receive(request);
                }
                return nextState;
            }
        }
        else if (!controller) {
            controller = createController(parentController, extras);
            controller.$init(extras);
            return {
                controller: controller,
            };
        }
        else {
            // shallowEqual ?
            controller.$set('$props', extras);
            controller.$receive(extras);
        }
        return null;
    }
    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {};
            return _this;
        }
        View.getDerivedStateFromProps = function (props, state) {
            return compileRequest(props, state);
        };
        View.prototype.componentWillUnmount = function () {
            if (this.state.controller) {
                this.state.controller.$destroy();
            }
        };
        View.prototype.shouldComponentUpdate = function () {
            // todo: update $refs
            return false;
        };
        View.prototype.componentDidMount = function () {
            if (this.state.controller) {
                this.state.controller.$didMount();
            }
        };
        View.prototype.componentDidCatch = function () {
            // todo:?
        };
        View.prototype.render = function () {
            if (!this.state.controller) {
                return null;
            }
            var out = lazyRender(this.state.controller);
            if (this.props.match instanceof __WEBPACK_IMPORTED_MODULE_4__router_utils__["a" /* MatchResult */]) {
                return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* V */])(__WEBPACK_IMPORTED_MODULE_6__view_context__["a" /* default */].Provider, {
                    value: {
                        match: this.props.match,
                        controller: this.state.controller,
                    },
                }, out);
            }
            return out;
        };
        View.displayName = ControllerType.name || 'View';
        return View;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
    return View;
}


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_history__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigator__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};



function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
var Link = /** @class */ (function (_super) {
    __extends(Link, _super);
    function Link() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
                var _a = _this.props, replace = _a.replace, to = _a.to;
                var history = __WEBPACK_IMPORTED_MODULE_2__navigator__["a" /* default */].history;
                if (history) {
                    if (replace) {
                        history.replace(to);
                    }
                    else {
                        history.push(to);
                    }
                }
            }
        };
        return _this;
    }
    Link.prototype.render = function () {
        var _a = this.props, replace = _a.replace, to = _a.to, rest = __rest(_a, ["replace", "to"]); // eslint-disable-line no-unused-vars
        var history = __WEBPACK_IMPORTED_MODULE_2__navigator__["a" /* default */].history;
        var location = typeof to === 'string'
            ? Object(__WEBPACK_IMPORTED_MODULE_1_history__["c" /* createLocation */])(to, null, undefined, history.location)
            : to;
        var href = history.createHref(location);
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('a', __assign({}, rest, { onClick: this.handleClick, href: href }));
    };
    Link.displayName = 'Link';
    Link.defaultProps = {
        replace: false
    };
    return Link;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Link);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createBrowserHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createHashHistory__ = __webpack_require__(54);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__createHashHistory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createMemoryHistory__ = __webpack_require__(55);
/* unused harmony reexport createMemoryHistory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LocationUtils__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__LocationUtils__["a"]; });
/* unused harmony reexport locationsAreEqual */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PathUtils__ = __webpack_require__(9);
/* unused harmony reexport parsePath */
/* unused harmony reexport createPath */










/***/ }),
/* 34 */
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
            error = new Error('Minified exception occurred; use the non-minified dev environment ' +
                'for the full error message and additional helpful warnings.');
        }
        else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(format.replace(/%s/g, function () { return args[argIndex++]; }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1; // we don't care about invariant's own frame
        throw error;
    }
};
module.exports = invariant;


/***/ }),
/* 35 */
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
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1)
        return false;
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_context__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var Route = /** @class */ (function (_super) {
    __extends(Route, _super);
    function Route(props) {
        var _this = _super.call(this, props) || this;
        _this.dispose = __WEBPACK_IMPORTED_MODULE_1__navigator__["a" /* default */].history.listen(function () {
            _this.forceUpdate();
        });
        return _this;
    }
    Route.prototype.componentWillUnmount = function () {
        this.dispose();
    };
    Route.prototype.computeMatch = function (props, ctx) {
        var computedMatch = props.computedMatch, path = props.path, strict = props.strict, exact = props.exact, sensitive = props.sensitive;
        if (computedMatch)
            return computedMatch; // maybe already computed the match for us
        var pathname = __WEBPACK_IMPORTED_MODULE_1__navigator__["a" /* default */].history.location.pathname;
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* matchPath */])(pathname, { path: path, strict: strict, exact: exact, sensitive: sensitive }, ctx.match);
    };
    Route.prototype.render = function () {
        var _this = this;
        var children = this.props.children;
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_3__view_context__["a" /* default */].Consumer, null, function (ctx) {
            var match = _this.computeMatch(_this.props, ctx);
            return children({ match: match });
        });
    };
    Route.displayName = 'Route';
    return Route;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Route);


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(8);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



/**
 * The public API for updating the location programmatically
 * with a component.
 */
var Redirect = /** @class */ (function (_super) {
    __extends(Redirect, _super);
    function Redirect() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Redirect.prototype.componentDidMount = function () {
        this.perform();
    };
    Redirect.prototype.computeTo = function (_a) {
        var computedMatch = _a.computedMatch, to = _a.to;
        if (computedMatch) {
            if (typeof to === 'string') {
                return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* generatePath */])(to, computedMatch.params);
            }
            else {
                return __assign({}, to, { pathname: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* generatePath */])(to.pathname, computedMatch.params) });
            }
        }
        return to;
    };
    Redirect.prototype.perform = function () {
        var history = __WEBPACK_IMPORTED_MODULE_1__navigator__["a" /* default */].history;
        var to = this.computeTo(this.props);
        if (this.props.push) {
            history.push(to);
        }
        else {
            history.replace(to);
        }
    };
    Redirect.prototype.render = function () {
        return null;
    };
    Redirect.defaultProps = {
        push: false
    };
    return Redirect;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Redirect);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0_axios___default.a; });

/* harmony default export */ __webpack_exports__["a"] = (function (config) {
    return __WEBPACK_IMPORTED_MODULE_0_axios___default()(config);
});



/***/ }),
/* 39 */
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
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
var settle = __webpack_require__(67);
var buildURL = __webpack_require__(69);
var parseHeaders = __webpack_require__(70);
var isURLSameOrigin = __webpack_require__(71);
var createError = __webpack_require__(41);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(72);
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // Let the browser set it
        }
        var request = new XMLHttpRequest();
        var loadEvent = 'onreadystatechange';
        var xDomain = false;
        // For IE 8/9 CORS support
        // Only supports POST and GET calls and doesn't returns the response headers.
        // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
        if ("development" !== 'test' &&
            typeof window !== 'undefined' &&
            window.XDomainRequest && !('withCredentials' in request) &&
            !isURLSameOrigin(config.url)) {
            request = new window.XDomainRequest();
            loadEvent = 'onload';
            xDomain = true;
            request.onprogress = function handleProgress() { };
            request.ontimeout = function handleTimeout() { };
        }
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        // Listen for ready state
        request[loadEvent] = function handleLoad() {
            if (!request || (request.readyState !== 4 && !xDomain)) {
                return;
            }
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
            }
            // Prepare the response
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
            settle(resolve, reject, response);
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            var cookies = __webpack_require__(73);
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
                cookies.read(config.xsrfCookieName) :
                undefined;
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
        }
        // Add headers to the request
        if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                    // Remove Content-Type if data is undefined
                    delete requestHeaders[key];
                }
                else {
                    // Otherwise add header to the request
                    request.setRequestHeader(key, val);
                }
            });
        }
        // Add withCredentials to request if needed
        if (config.withCredentials) {
            request.withCredentials = true;
        }
        // Add responseType to request if needed
        if (config.responseType) {
            try {
                request.responseType = config.responseType;
            }
            catch (e) {
                // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                if (config.responseType !== 'json') {
                    throw e;
                }
            }
        }
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
        }
        // Not all browsers support upload events
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
                reject(cancel);
                // Clean up request
                request = null;
            });
        }
        if (requestData === undefined) {
            requestData = null;
        }
        // Send the request
        request.send(requestData);
    });
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var enhanceError = __webpack_require__(68);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};


/***/ }),
/* 43 */
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
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ignorableError;
function ignorableError(msg) {
    console.warn(msg);
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getTypeMark */
/* harmony export (immutable) */ __webpack_exports__["c"] = UNSAFE_type;
/* harmony export (immutable) */ __webpack_exports__["b"] = UNSAFE_or;
/* harmony export (immutable) */ __webpack_exports__["a"] = UNSAFE_and;
/* harmony export (immutable) */ __webpack_exports__["d"] = parse;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notification_console__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(12);



function getTypeMark(t) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (t.$s_type) {
        return t;
    }
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["g" /* isString */])(t)) {
        Object(__WEBPACK_IMPORTED_MODULE_1__notification_console__["a" /* ignorableError */])("expect getTypeMark() with a string but receiving " + typeof t);
        return;
    }
    var isOptional = t[t.length - 1] === '?';
    var result = {
        $s_type: isOptional ? t.slice(0, t.length - 1) : t,
    };
    isOptional && (result.$s_optional = isOptional);
    switch (t) {
        case 'and':
        case 'or':
            result.$s_param = args.map(function (t) { return getTypeMark(t); });
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
    if (value.$s_type) {
        return value;
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* isArray */])(value)) {
        return getTypeMark('array', value[0]);
    }
    if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["f" /* isObject */])(value)) {
        var result_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, value);
        Object.keys(result_1).forEach(function (k) {
            result_1[k] = parse(result_1[k]);
        });
        return getTypeMark('object', result_1);
    }
    else {
        return UNSAFE_type(value);
    }
}


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_view_controller__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_obx_reaction__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_obx_next_tick__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_obx_decorators__ = __webpack_require__(102);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "observable", function() { return __WEBPACK_IMPORTED_MODULE_4__core_obx_decorators__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib__ = __webpack_require__(30);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "service", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RoutePage404", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createDynamicLoader", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createRouter", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "XFor", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "X", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xId", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xAssign", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "V", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "xModifiers", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "globalHelpers", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "runApp", function() { return __WEBPACK_IMPORTED_MODULE_5__lib__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ViewController", function() { return __WEBPACK_IMPORTED_MODULE_0__core_view_controller__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "autorun", function() { return __WEBPACK_IMPORTED_MODULE_1__core_obx_reaction__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return __WEBPACK_IMPORTED_MODULE_2__core_obx_next_tick__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return __WEBPACK_IMPORTED_MODULE_3__core_obx_utils__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_3__core_obx_utils__["s"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return __WEBPACK_IMPORTED_MODULE_3__core_obx_utils__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return __WEBPACK_IMPORTED_MODULE_3__core_obx_utils__["e"]; });




var version = "0.3.8";
// tslint:disable-next-line
console.log("%cRecore %cv" + version, 'color:#000;font-weight:bold;', 'color:green;font-weight:bold;');





/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseScope; });
/* unused harmony export asScope */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__obx_utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__obx_observable_proxy__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__obx_observable__ = __webpack_require__(5);



var BaseScope = /** @class */ (function () {
    function BaseScope() {
    }
    BaseScope.prototype.$get = function (key) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__obx_utils__["f" /* get */])(this, key);
    };
    BaseScope.prototype.$set = function (key, val) {
        Object(__WEBPACK_IMPORTED_MODULE_0__obx_utils__["s" /* set */])(this, key, val);
    };
    BaseScope.prototype.$del = function (key) {
        Object(__WEBPACK_IMPORTED_MODULE_0__obx_utils__["d" /* del */])(this, key);
    };
    BaseScope.prototype.$extend = function (properties) {
        Object(__WEBPACK_IMPORTED_MODULE_0__obx_utils__["e" /* extend */])(this, properties);
    };
    BaseScope.prototype.$derive = function (data) {
        return asScope(data, this);
    };
    BaseScope.prototype.$ = function (key) {
        return this.$get(key);
    };
    return BaseScope;
}());

function asScope(data, parentScope) {
    if (parentScope === void 0) { parentScope = null; }
    Object(__WEBPACK_IMPORTED_MODULE_2__obx_observable__["b" /* asObservable */])(data);
    if (parentScope) {
        var a = Object(__WEBPACK_IMPORTED_MODULE_1__obx_observable_proxy__["c" /* getObservableProxy */])(data);
        var b = Object(__WEBPACK_IMPORTED_MODULE_1__obx_observable_proxy__["c" /* getObservableProxy */])(parentScope);
        a.parent = b;
    }
    Object(__WEBPACK_IMPORTED_MODULE_0__obx_utils__["a" /* addHiddenFinalProp */])(data, '$super', parentScope);
    Object(__WEBPACK_IMPORTED_MODULE_0__obx_utils__["t" /* setPrototypeOf */])(data, parentScope || new BaseScope());
    return data;
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hasListeners */
/* harmony export (immutable) */ __webpack_exports__["b"] = registerListener;
/* harmony export (immutable) */ __webpack_exports__["a"] = notifyListeners;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__derivation__ = __webpack_require__(3);


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
    }
    else {
        listenable.listened = true;
    }
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["r" /* once */])(function () {
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
/* 49 */
/***/ (function(module, exports) {

module.exports = window.ReactDOM;

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function renderError(error) {
    if (true) {
        if (error === true) {
            return null;
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('pre', { style: {
                border: '1px solid #ffa39e',
                backgroundColor: '#fff1f0',
                padding: '8px 15px',
            } }, error.message + ": " + error.stack);
    }
    // todo: by globalReportErrorHandler?
    return '<Error>';
}
var X = /** @class */ (function (_super) {
    __extends(X, _super);
    function X(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { revision: -1, error: null };
        var area = _this.props.area;
        _this.dispose = area.observe(function () { return _this.setState({
            revision: area.getRevision(),
            error: null,
        }); });
        return _this;
    }
    X.getDerivedStateFromProps = function (props, state) {
        var area = props.area;
        if (area.isDirty() || state.revision < 0) {
            var revision = state.revision;
            var error = null;
            try {
                revision = area.getRevision();
            }
            catch (e) {
                error = true;
            }
            return {
                revision: revision,
                error: error,
            };
        }
        return null;
    };
    X.prototype.componentWillUnmount = function () {
        if (this.dispose) {
            this.dispose();
        }
    };
    X.prototype.componentDidCatch = function (err, info) {
        var message = err.message || String(err);
        var stack = info && info.componentStack || '';
        var error = { message: message, stack: stack };
        var area = this.props.area;
        try {
            area.scope.$didCatch(error, area);
        }
        catch (e) { }
        this.setState({ error: error });
    };
    X.prototype.shouldComponentUpdate = function (_, nextState) {
        return nextState.revision !== this.state.revision || nextState.error !== null;
    };
    X.prototype.render = function () {
        if (this.state.error) {
            return renderError(this.state.error);
        }
        return this.props.children(this.props.area);
    };
    X.displayName = 'X';
    return X;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (X);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(35);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };






var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';
var getHistoryState = function getHistoryState() {
    try {
        return window.history.state || {};
    }
    catch (e) {
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
    var _props$forceRefresh = props.forceRefresh, forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh, _props$getUserConfirm = props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm, _props$keyLength = props.keyLength, keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
    var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';
    var getDOMLocation = function getDOMLocation(historyState) {
        var _ref = historyState || {}, key = _ref.key, state = _ref.state;
        var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
        var path = pathname + search + hash;
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
        if (basename)
            path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);
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
        if (Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["d" /* isExtraneousPopstateEvent */])(event))
            return;
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
        }
        else {
            var action = 'POP';
            transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                if (ok) {
                    setState({ action: action, location: location });
                }
                else {
                    revertPop(location);
                }
            });
        }
    };
    var revertPop = function revertPop(fromLocation) {
        var toLocation = history.location;
        // TODO: We could probably make this more reliable by
        // keeping a list of keys we've seen in sessionStorage.
        // Instead, we just default to 0 for keys we don't know.
        var toIndex = allKeys.indexOf(toLocation.key);
        if (toIndex === -1)
            toIndex = 0;
        var fromIndex = allKeys.indexOf(fromLocation.key);
        if (fromIndex === -1)
            fromIndex = 0;
        var delta = toIndex - fromIndex;
        if (delta) {
            forceNextPop = true;
            go(delta);
        }
    };
    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key];
    // Public interface
    var createHref = function createHref(location) {
        return basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location);
    };
    var push = function push(path, state) {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
        var action = 'PUSH';
        var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok)
                return;
            var href = createHref(location);
            var key = location.key, state = location.state;
            if (canUseHistory) {
                globalHistory.pushState({ key: key, state: state }, null, href);
                if (forceRefresh) {
                    window.location.href = href;
                }
                else {
                    var prevIndex = allKeys.indexOf(history.location.key);
                    var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
                    nextKeys.push(location.key);
                    allKeys = nextKeys;
                    setState({ action: action, location: location });
                }
            }
            else {
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
            if (!ok)
                return;
            var href = createHref(location);
            var key = location.key, state = location.state;
            if (canUseHistory) {
                globalHistory.replaceState({ key: key, state: state }, null, href);
                if (forceRefresh) {
                    window.location.replace(href);
                }
                else {
                    var prevIndex = allKeys.indexOf(history.location.key);
                    if (prevIndex !== -1)
                        allKeys[prevIndex] = location.key;
                    setState({ action: action, location: location });
                }
            }
            else {
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
            if (needsHashChangeListener)
                Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["a" /* addEventListener */])(window, HashChangeEvent, handleHashChange);
        }
        else if (listenerCount === 0) {
            Object(__WEBPACK_IMPORTED_MODULE_5__DOMUtils__["e" /* removeEventListener */])(window, PopStateEvent, handlePopState);
            if (needsHashChangeListener)
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
/* harmony default export */ __webpack_exports__["a"] = (createBrowserHistory);


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isAbsolute(pathname) {
    return pathname.charAt(0) === '/';
}
// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
        list[i] = list[k];
    }
    list.pop();
}
// This implementation is based heavily on node's url.parse
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
    }
    else if (toParts.length) {
        // to is relative, drop the filename
        fromParts.pop();
        fromParts = fromParts.concat(toParts);
    }
    if (!fromParts.length)
        return '/';
    var hasTrailingSlash = void 0;
    if (fromParts.length) {
        var last = fromParts[fromParts.length - 1];
        hasTrailingSlash = last === '.' || last === '..' || last === '';
    }
    else {
        hasTrailingSlash = false;
    }
    var up = 0;
    for (var i = fromParts.length; i >= 0; i--) {
        var part = fromParts[i];
        if (part === '.') {
            spliceOne(fromParts, i);
        }
        else if (part === '..') {
            spliceOne(fromParts, i);
            up++;
        }
        else if (up) {
            spliceOne(fromParts, i);
            up--;
        }
    }
    if (!mustEndAbs)
        for (; up--; up) {
            fromParts.unshift('..');
        }
    if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0])))
        fromParts.unshift('');
    var result = fromParts.join('/');
    if (hasTrailingSlash && result.substr(-1) !== '/')
        result += '/';
    return result;
}
/* harmony default export */ __webpack_exports__["a"] = (resolvePathname);


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
function valueEqual(a, b) {
    if (a === b)
        return true;
    if (a == null || b == null)
        return false;
    if (Array.isArray(a)) {
        return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
            return valueEqual(item, b[index]);
        });
    }
    var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
    var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);
    if (aType !== bType)
        return false;
    if (aType === 'object') {
        var aValue = a.valueOf();
        var bValue = b.valueOf();
        if (aValue !== a || bValue !== b)
            return valueEqual(aValue, bValue);
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length)
            return false;
        return aKeys.every(function (key) {
            return valueEqual(a[key], b[key]);
        });
    }
    return false;
}
/* harmony default export */ __webpack_exports__["a"] = (valueEqual);


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PathUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransitionManager__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOMUtils__ = __webpack_require__(35);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };






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
    var _props$getUserConfirm = props.getUserConfirmation, getUserConfirmation = _props$getUserConfirm === undefined ? __WEBPACK_IMPORTED_MODULE_5__DOMUtils__["c" /* getConfirmation */] : _props$getUserConfirm, _props$hashType = props.hashType, hashType = _props$hashType === undefined ? 'slash' : _props$hashType;
    var basename = props.basename ? Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["g" /* stripTrailingSlash */])(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["a" /* addLeadingSlash */])(props.basename)) : '';
    var _HashPathCoders$hashT = HashPathCoders[hashType], encodePath = _HashPathCoders$hashT.encodePath, decodePath = _HashPathCoders$hashT.decodePath;
    var getDOMLocation = function getDOMLocation() {
        var path = decodePath(getHashPath());
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(!basename || Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["c" /* hasBasename */])(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
        if (basename)
            path = Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["e" /* stripBasename */])(path, basename);
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
        }
        else {
            var location = getDOMLocation();
            var prevLocation = history.location;
            if (!forceNextPop && Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["b" /* locationsAreEqual */])(prevLocation, location))
                return; // A hashchange doesn't always == location change.
            if (ignorePath === Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location))
                return; // Ignore this change; we already setState in push/replace.
            ignorePath = null;
            handlePop(location);
        }
    };
    var handlePop = function handlePop(location) {
        if (forceNextPop) {
            forceNextPop = false;
            setState();
        }
        else {
            var action = 'POP';
            transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
                if (ok) {
                    setState({ action: action, location: location });
                }
                else {
                    revertPop(location);
                }
            });
        }
    };
    var revertPop = function revertPop(fromLocation) {
        var toLocation = history.location;
        // TODO: We could probably make this more reliable by
        // keeping a list of paths we've seen in sessionStorage.
        // Instead, we just default to 0 for paths we don't know.
        var toIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(toLocation));
        if (toIndex === -1)
            toIndex = 0;
        var fromIndex = allPaths.lastIndexOf(Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(fromLocation));
        if (fromIndex === -1)
            fromIndex = 0;
        var delta = toIndex - fromIndex;
        if (delta) {
            forceNextPop = true;
            go(delta);
        }
    };
    // Ensure the hash is encoded properly before doing anything else.
    var path = getHashPath();
    var encodedPath = encodePath(path);
    if (path !== encodedPath)
        replaceHashPath(encodedPath);
    var initialLocation = getDOMLocation();
    var allPaths = [Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(initialLocation)];
    // Public interface
    var createHref = function createHref(location) {
        return '#' + encodePath(basename + Object(__WEBPACK_IMPORTED_MODULE_3__PathUtils__["b" /* createPath */])(location));
    };
    var push = function push(path, state) {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(state === undefined, 'Hash history cannot push state; it is ignored');
        var action = 'PUSH';
        var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, undefined, undefined, history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok)
                return;
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
                setState({ action: action, location: location });
            }
            else {
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
            if (!ok)
                return;
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
            if (prevIndex !== -1)
                allPaths[prevIndex] = path;
            setState({ action: action, location: location });
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
        }
        else if (listenerCount === 0) {
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
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PathUtils__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LocationUtils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createTransitionManager__ = __webpack_require__(18);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
        }
    }
} return target; };




var clamp = function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
};
/**
 * Creates a history object that stores locations in memory.
 */
var createMemoryHistory = function createMemoryHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var getUserConfirmation = props.getUserConfirmation, _props$initialEntries = props.initialEntries, initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries, _props$initialIndex = props.initialIndex, initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex, _props$keyLength = props.keyLength, keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;
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
    });
    // Public interface
    var createHref = __WEBPACK_IMPORTED_MODULE_1__PathUtils__["b" /* createPath */];
    var push = function push(path, state) {
        __WEBPACK_IMPORTED_MODULE_0_warning___default()(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');
        var action = 'PUSH';
        var location = Object(__WEBPACK_IMPORTED_MODULE_2__LocationUtils__["a" /* createLocation */])(path, state, createKey(), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok)
                return;
            var prevIndex = history.index;
            var nextIndex = prevIndex + 1;
            var nextEntries = history.entries.slice(0);
            if (nextEntries.length > nextIndex) {
                nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
            }
            else {
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
            if (!ok)
                return;
            history.entries[history.index] = location;
            setState({ action: action, location: location });
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
            }
            else {
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__route__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__link__ = __webpack_require__(32);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};





var NavLink = /** @class */ (function (_super) {
    __extends(NavLink, _super);
    function NavLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavLink.prototype.render = function () {
        var _a = this.props, to = _a.to, exact = _a.exact, strict = _a.strict, isActive = _a.isActive, className = _a.className, style = _a.style, activeClassName = _a.activeClassName, activeStyle = _a.activeStyle, ariaCurrent = _a["aria-current"], rest = __rest(_a, ["to", "exact", "strict", "isActive", "className", "style", "activeClassName", "activeStyle", 'aria-current']);
        var path = typeof to === 'object' ? to.pathname : to;
        var location = __WEBPACK_IMPORTED_MODULE_2__navigator__["a" /* default */].history.location;
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_3__route__["a" /* default */], {
            path: path || '',
            exact: exact,
            strict: strict,
            children: function (_a) {
                var match = _a.match;
                __WEBPACK_IMPORTED_MODULE_2__navigator__["a" /* default */].history.location;
                var actived = !!(isActive ? isActive(match, location) : match);
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_4__link__["a" /* default */], __assign({ to: to, className: __WEBPACK_IMPORTED_MODULE_1_classnames___default()(className, actived && activeClassName), style: actived ? __assign({}, style, activeStyle) : style, 'aria-current': (actived && ariaCurrent) || null }, rest));
            }
        });
    };
    NavLink.displayName = 'NavLink';
    NavLink.defaultProps = {
        activeClassName: 'active',
        'aria-current': 'page',
    };
    return NavLink;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (NavLink);


/***/ }),
/* 57 */
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
var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // ":test(\\d+)?" => ["test", "\d+", undefined, "?"]
    // "(\\d+)"  => [undefined, undefined, "\d+", undefined]
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g');
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
    var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
    var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while ((res = PATH_REGEXP.exec(str)) !== null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
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
        }
        // Push the current path onto the tokens.
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
    }
    // Push any remaining characters.
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
    var matches = new Array(tokens.length);
    // Compile all the patterns before compilation.
    for (var i = 0; i < tokens.length; i++) {
        if (typeof tokens[i] === 'object') {
            matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
        }
    }
    return function (data, options) {
        var path = '';
        var encode = (options && options.encode) || encodeURIComponent;
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
                    if (token.optional)
                        continue;
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
                if (token.partial)
                    path += token.prefix;
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
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
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
    var isEndDelimited = tokens.length === 0;
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === 'string') {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        }
        else {
            var capture = token.repeat
                ? '(?:' + token.pattern + ')(?:' + escapeString(token.delimiter) + '(?:' + token.pattern + '))*'
                : token.pattern;
            if (keys)
                keys.push(token);
            if (token.optional) {
                if (token.partial) {
                    route += escapeString(token.prefix) + '(' + capture + ')?';
                }
                else {
                    route += '(?:' + escapeString(token.prefix) + '(' + capture + '))?';
                }
            }
            else {
                route += escapeString(token.prefix) + '(' + capture + ')';
            }
        }
    }
    if (end) {
        if (!strict)
            route += '(?:' + delimiter + ')?';
        route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
    }
    else {
        if (!strict)
            route += '(?:' + delimiter + '(?=' + endsWith + '))?';
        if (!isEndDelimited)
            route += '(?=' + delimiter + '|' + endsWith + ')';
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
        return arrayToRegexp(/** @type {!Array} */ (path), keys, options);
    }
    return stringToRegexp(/** @type {string} */ (path), keys, options);
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = inject;
function inject(_a) {
    var components = _a.components, helpers = _a.helpers;
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
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__ = __webpack_require__(60);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "requestJsonp", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "RequestGroup", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "type", function() { return __WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["g"]; });

__WEBPACK_IMPORTED_MODULE_0__ali_shimmer__["f" /* service */].interceptors.response.use(function (response) {
    // Do something with response data
    if (!response.data.success) {
        // 后端规范 errorMsg
        return Promise.reject(new Error(response.data.errorMsg));
    }
    // 如果成功直接暴露出content里面的内容
    return response.data.content;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__request_jsonp__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_index__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_requestGroup__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__type_types__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__core_requestGroup__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__request_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__request_index__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__request_jsonp__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__type_types__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__type_types__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__type_types__["c"]; });




if (true) {
    console.warn("Shimmer is working on *development* mode!\n\tFor production builds, please set 'process.env.NODE_ENV' to 'production' in your bundler");
}



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);

var count = 0;
function noop() { }
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
        console.log('data', data, fn);
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
    var url = config.url, otherConfig = __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __rest */](config, ["url"]);
    return new Promise(function (resolve, reject) {
        jsonp(config.url, otherConfig, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
/* harmony default export */ __webpack_exports__["a"] = (requestJsonp);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(63);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
var bind = __webpack_require__(39);
var Axios = __webpack_require__(65);
var defaults = __webpack_require__(21);
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Factory for creating new instances
axios.create = function create(instanceConfig) {
    return createInstance(utils.merge(defaults, instanceConfig));
};
// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(43);
axios.CancelToken = __webpack_require__(79);
axios.isCancel = __webpack_require__(42);
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = __webpack_require__(80);
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 64 */
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
}
// For Node v0.10 support. Remove this eventually.
function isSlowBuffer(obj) {
    return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0));
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defaults = __webpack_require__(21);
var utils = __webpack_require__(2);
var InterceptorManager = __webpack_require__(74);
var dispatchRequest = __webpack_require__(75);
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
    config = utils.merge(defaults, { method: 'get' }, this.defaults, config);
    config.method = config.method.toLowerCase();
    // Hook up interceptors middleware
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
};
// Provide aliases for supported request methods
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var createError = __webpack_require__(41);
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    // Note: status is not exposed by XDomainRequest
    if (!response.status || !validateStatus || validateStatus(response.status)) {
        resolve(response);
    }
    else {
        reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
    }
};


/***/ }),
/* 68 */
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
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
function encode(val) {
    return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
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
    }
    else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
    }
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
                return;
            }
            if (utils.isArray(val)) {
                key = key + '[]';
            }
            else {
                val = [val];
            }
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                    v = v.toISOString();
                }
                else if (utils.isObject(v)) {
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
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
];
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
            }
            else {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }
    });
    return parsed;
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
module.exports = (utils.isStandardBrowserEnv() ?
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
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
            urlParsingNode.setAttribute('href', href);
            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
                href: urlParsingNode.href,
                protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                host: urlParsingNode.host,
                search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                hostname: urlParsingNode.hostname,
                port: urlParsingNode.port,
                pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                    urlParsingNode.pathname :
                    '/' + urlParsingNode.pathname
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
            var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
        };
    })() :
    // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
            return true;
        };
    })());


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
function E() {
    this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';
function btoa(input) {
    var str = String(input);
    var output = '';
    for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars; 
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1); 
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
module.exports = (utils.isStandardBrowserEnv() ?
    // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
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
                return (match ? decodeURIComponent(match[3]) : null);
            },
            remove: function remove(name) {
                this.write(name, '', Date.now() - 86400000);
            }
        };
    })() :
    // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
        return {
            write: function write() { },
            read: function read() { return null; },
            remove: function remove() { }
        };
    })());


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
var transformData = __webpack_require__(76);
var isCancel = __webpack_require__(42);
var defaults = __webpack_require__(21);
var isAbsoluteURL = __webpack_require__(77);
var combineURLs = __webpack_require__(78);
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
    throwIfCancellationRequested(config);
    // Support baseURL config
    if (config.baseURL && !isAbsoluteURL(config.url)) {
        config.url = combineURLs(config.baseURL, config.url);
    }
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData(config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
    utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData(response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
            }
        }
        return Promise.reject(reason);
    });
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var utils = __webpack_require__(2);
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
/* 77 */
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
/* 78 */
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
    return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Cancel = __webpack_require__(43);
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
/* 80 */
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
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__type__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_types__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__snapshot_storage__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notification__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mock_convert__ = __webpack_require__(97);







var RequestGroup = (function () {
    function RequestGroup(baseConfig, options) {
        this.baseConfig = baseConfig;
        this.options = options;
        this.storage = new __WEBPACK_IMPORTED_MODULE_4__snapshot_storage__["a" /* default */]();
    }
    RequestGroup.prototype.create = function (name, _config, _a) {
        var _b = _a === void 0 ? {} : _a, request = _b.request, response = _b.response;
        var self = this;
        var requestTypeMark = Object(__WEBPACK_IMPORTED_MODULE_2__type_types__["d" /* parse */])(request);
        var responseTypeMark = Object(__WEBPACK_IMPORTED_MODULE_2__type_types__["d" /* parse */])(response);
        var requestChecker = Object(__WEBPACK_IMPORTED_MODULE_1__type__["b" /* getProdChecker */])(requestTypeMark);
        var baseConfig = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, this.baseConfig, _config);
        var responseChecker = "development" !== 'production' && this.options.mode === 'development' ? null : Object(__WEBPACK_IMPORTED_MODULE_1__type__["b" /* getProdChecker */])(responseTypeMark);
        if ("development" !== 'production' && this.options.mode === 'joint') {
            if (!('url' in baseConfig)) {
                console.error("a request with no url has been found, with config", _config);
            }
        }
        var result = function (param) {
            var config = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, baseConfig, { data: param });
            if (true) {
                if (self.options.mode === 'development') {
                    if (responseChecker === null) {
                        var responseTypeMarkWithMock = Object(__WEBPACK_IMPORTED_MODULE_6__mock_convert__["a" /* UNSAFE_MockConfigApplyToTypeMark */])(result.mock, responseTypeMark);
                        responseChecker = Object(__WEBPACK_IMPORTED_MODULE_1__type__["a" /* getMockChecker */])(responseTypeMarkWithMock);
                    }
                    var requestCheckResult = requestChecker(param);
                    console.log("requesting with config", _config);
                    if (requestCheckResult) {
                        console.warn(requestCheckResult.errorMsg);
                    }
                    var reponseMock = responseChecker(undefined);
                    return Promise.resolve(reponseMock && reponseMock.corrected);
                }
                else {
                    var requestCheckResult = requestChecker(param);
                    var configPromise = Promise.resolve(config);
                    console.log("requesting with config", _config);
                    if (requestCheckResult) {
                        var option = {
                            corrected: requestCheckResult.corrected,
                        };
                        configPromise = Object(__WEBPACK_IMPORTED_MODULE_5__notification__["a" /* default */])({ name: name, url: config.url, isResponse: false, errorMsg: requestCheckResult.errorMsg }, option)
                            .then(function (r) { return r[1]; })
                            .then(function (c) { return (__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __assign */]({}, config, { data: c })); });
                    }
                    return configPromise.then(function (config) {
                        return Object(__WEBPACK_IMPORTED_MODULE_3__request__["a" /* default */])(config)
                            .then(function (r) { return r.data; })
                            .then(function (response) {
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
                                return Object(__WEBPACK_IMPORTED_MODULE_5__notification__["a" /* default */])({ name: name, url: config.url, isResponse: true, errorMsg: responseCheckResult.errorMsg }, option_1).then(function (r) { return r[1]; });
                            }
                            self.storage.setStorage(config, response);
                            return response;
                        })
                            .catch(function (error) {
                            console.error('response error', error);
                            var responseCheckResult = responseChecker(undefined);
                            if (responseCheckResult) {
                                console.error(responseCheckResult.errorMsg);
                                var storageResults = self.storage.getAllStorageFromConfig(config);
                                if (storageResults.length > 0) {
                                    console.log('got response data from storage');
                                }
                                var option_2 = {};
                                storageResults.forEach(function (v, i) {
                                    option_2["" + i] = v;
                                });
                                option_2.corrected = responseCheckResult.corrected;
                                return Object(__WEBPACK_IMPORTED_MODULE_5__notification__["a" /* default */])({ name: name, url: config.url, isResponse: true, errorMsg: responseCheckResult.errorMsg }, option_2).then(function (r) { return r[1]; });
                            }
                            throw error;
                        });
                    });
                }
            }
            else {
                return makeRequest(config)
                    .then(function (r) { return r.data; })
                    .then(function (response) {
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
        result.mock = Object(__WEBPACK_IMPORTED_MODULE_6__mock_convert__["b" /* UNSAFE_typeMarkToMockBase */])(responseTypeMark);
        return result;
    };
    return RequestGroup;
}());
/* harmony default export */ __webpack_exports__["a"] = (RequestGroup);


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getProdChecker;
/* harmony export (immutable) */ __webpack_exports__["a"] = getMockChecker;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notification_console__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mock_index__ = __webpack_require__(83);



function createErrorMsg(expected, actual, path) {
    if (path === void 0) {
        path = [];
    }
    return "expected " + (path.join('.') || '(root)') + " to be " + expected + ", but got " + actual;
}
function getProdChecker(mark, path) {
    if (path === void 0) {
        path = [];
    }
    switch (mark.$s_type) {
        case 'and': {
            var checkers_1 = mark.$s_param.map(function (m) { return getProdChecker(m, path); });
            return function (original) {
                var result = checkers_1.map(function (c) { return c(original); });
                var errors = result.filter(Boolean);
                if (errors.length > 0) {
                    return {
                        errorMsg: errors.map(function (e) { return e.errorMsg; }).join('\n\tand '),
                        original: original,
                    };
                }
                return;
            };
        }
        case 'or': {
            var checkers_2 = mark.$s_param.map(function (m) { return getProdChecker(m, path); });
            return function (original) {
                var result = checkers_2.map(function (c) { return c(original); });
                var errors = result.filter(Boolean);
                if (errors.length === result.length) {
                    return {
                        errorMsg: errors.map(function (e) { return e.errorMsg; }).join('\n\tor '),
                        original: original,
                    };
                }
                return;
            };
        }
        case 'array': {
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
                            original: original,
                        };
                    }
                    else {
                        o = Array.from ? Array.from(original) : [];
                        errorMsgs.push(createErrorMsg('array', original, path));
                    }
                }
                var result = o.map(function (v, i) { return getProdChecker(mark.$s_param, path.concat(["" + i]))(v); });
                var errors = result.filter(Boolean);
                if (errors.length > 0) {
                    return {
                        corrected: result.map(function (r, i) { return (r && 'corrected' in r ? r.corrected : o[i]); }),
                        errorMsg: errors.map(function (e) { return e.errorMsg; }).join('\n\tand '),
                        original: original,
                    };
                }
                return;
            };
        }
        case 'object': {
            var param_1 = mark.$s_param;
            var paramKeys_1 = Object.keys(param_1);
            var checkers_3 = paramKeys_1.map(function (k) { return [k, getProdChecker(param_1[k], path.concat([k]))]; });
            return function (original) {
                var errorMsgs = [];
                if (original == null && mark.$s_optional) {
                    return;
                }
                var o = original;
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* isObject */])(original)) {
                    if (false) {
                        return {
                            corrected: {},
                            errorMsg: createErrorMsg('object', original, path),
                            original: original,
                        };
                    }
                    else {
                        o = {};
                        errorMsgs.push(createErrorMsg('object', original, path));
                    }
                }
                var result = checkers_3.map(function (_a) {
                    var k = _a[0], c = _a[1];
                    return c(o[k]);
                });
                var errors = result.filter(Boolean);
                if (errors.length > 0) {
                    var corrected_1 = {};
                    result.forEach(function (r, i) {
                        var key = paramKeys_1[i];
                        corrected_1[key] = r && 'corrected' in r ? r.corrected : o[key];
                    });
                    errorMsgs.push.apply(errorMsgs, errors.map(function (e) { return e.errorMsg; }));
                    return {
                        corrected: corrected_1,
                        errorMsg: errorMsgs.join('\n\tand '),
                        original: original,
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
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* isString */])(original)) {
                    return {
                        corrected: Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* isNumber */])(original) ? "" + original : Object(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* isObject */])(original) && original.toString ? original.toString() : original ? "" + original : '',
                        errorMsg: createErrorMsg('string', original, path),
                        original: original,
                    };
                }
                return;
            };
        case 'number':
            return function (original) {
                if (original == null && mark.$s_optional) {
                    return;
                }
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* isNumber */])(original)) {
                    return {
                        corrected: Number(original) || 0,
                        errorMsg: createErrorMsg('number', original, path),
                        original: original,
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
                        original: original,
                    };
                }
                return;
            };
        case 'undefined':
            return function (original) {
                if (original !== undefined) {
                    return {
                        errorMsg: createErrorMsg('undefined', original, path),
                        original: original,
                    };
                }
                return;
            };
        case 'null':
            return function (original) {
                if (original !== null) {
                    return {
                        errorMsg: createErrorMsg('null', original, path),
                        original: original,
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
        case 'and': {
            var checkers_4 = mark.$s_param.map(function (m) { return getMockChecker(m, path); });
            return function (original) {
                var result = checkers_4.map(function (c) { return c(original); });
                var errors = result.filter(Boolean);
                if (errors.length > 0) {
                    return {
                        errorMsg: errors.map(function (e) { return e.errorMsg; }).join('\n\tand '),
                        original: original,
                    };
                }
                return;
            };
        }
        case 'or': {
            var checkers_5 = mark.$s_param.map(function (m) { return getMockChecker(m, path); });
            return function (original) {
                var result = checkers_5.map(function (c) { return c(original); });
                var errors = result.filter(Boolean);
                if (errors.length === result.length) {
                    return {
                        errorMsg: errors.map(function (e) { return e.errorMsg; }).join('\n\tor '),
                        original: original,
                    };
                }
                return;
            };
        }
        case 'array': {
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
                            original: original,
                        };
                    }
                    else {
                        o = Array.from ? Array.from(original) : [];
                        errorMsgs.push(createErrorMsg('array', original, path));
                    }
                }
                var result = o.map(function (v, i) { return getMockChecker(mark.$s_param, path.concat(["" + i]))(v); });
                var errors = result.filter(Boolean);
                if (errors.length > 0) {
                    return {
                        corrected: result.map(function (r, i) { return (r && 'corrected' in r ? r.corrected : o[i]); }),
                        errorMsg: errors.map(function (e) { return e.errorMsg; }).join('\n\tand '),
                        original: original,
                    };
                }
                return;
            };
        }
        case 'object': {
            var param_2 = mark.$s_param;
            var paramKeys_2 = Object.keys(param_2);
            var checkers_6 = paramKeys_2.map(function (k) { return [k, getMockChecker(param_2[k], path.concat([k]))]; });
            return function (original) {
                var errorMsgs = [];
                if (original == null && mark.$s_optional) {
                    return;
                }
                var o = original;
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["f" /* isObject */])(original)) {
                    if (false) {
                        return {
                            corrected: {},
                            errorMsg: createErrorMsg('object', original, path),
                            original: original,
                        };
                    }
                    else {
                        o = {};
                        errorMsgs.push(createErrorMsg('object', original, path));
                    }
                }
                var result = checkers_6.map(function (_a) {
                    var k = _a[0], c = _a[1];
                    return c(o[k]);
                });
                var errors = result.filter(Boolean);
                if (errors.length > 0) {
                    var corrected_2 = {};
                    result.forEach(function (r, i) {
                        var key = paramKeys_2[i];
                        corrected_2[key] = r && 'corrected' in r ? r.corrected : o[key];
                    });
                    errorMsgs.push.apply(errorMsgs, errors.map(function (e) { return e.errorMsg; }));
                    return {
                        corrected: corrected_2,
                        errorMsg: errorMsgs.join('\n\tand '),
                        original: original,
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
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* isString */])(original)) {
                    return {
                        corrected: Object(__WEBPACK_IMPORTED_MODULE_2__mock_index__["c" /* stringGenerator */])(mark.$s_mock),
                        errorMsg: createErrorMsg('string', original, path),
                        original: original,
                    };
                }
                return;
            };
        case 'number':
            return function (original) {
                if (original == null && mark.$s_optional) {
                    return;
                }
                if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["e" /* isNumber */])(original)) {
                    return {
                        corrected: Object(__WEBPACK_IMPORTED_MODULE_2__mock_index__["b" /* numberGenerator */])(mark.$s_mock),
                        errorMsg: createErrorMsg('number', original, path),
                        original: original,
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
                        original: original,
                    };
                }
                return;
            };
        case 'undefined':
            return function (original) {
                if (original !== undefined) {
                    return {
                        errorMsg: createErrorMsg('undefined', original, path),
                        original: original,
                    };
                }
                return;
            };
        case 'null':
            return function (original) {
                if (original !== null) {
                    return {
                        errorMsg: createErrorMsg('null', original, path),
                        original: original,
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
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__generators_array__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__generators_boolean__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__generators_number__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generators_string__ = __webpack_require__(92);
/* unused harmony reexport arrayGenerator */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__generators_boolean__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__generators_number__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__generators_string__["a"]; });







/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export arrayGenerator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basic__ = __webpack_require__(85);



function arrayGenerator(option) {
    if (option === void 0) {
        option = { is: 'basic' };
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
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basicGenerator;
var DEFAULT_ARRAY_LENGTH = 6;
function basicGenerator(options) {
    if (options === void 0) {
        options = { length: DEFAULT_ARRAY_LENGTH };
    }
    var result = Array(options.length || DEFAULT_ARRAY_LENGTH).fill({});
    var getValue = options && options.getValue;
    if (getValue) {
        return result.map(function () { return getValue(); });
    }
    return result;
}


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = booleanGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic__ = __webpack_require__(87);


function booleanGenerator(option) {
    if (option === void 0) {
        option = { is: 'basic' };
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
/* 87 */
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
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = numberGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__float__ = __webpack_require__(91);




function numberGenerator(option) {
    if (option === void 0) {
        option = { is: 'basic' };
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
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basicGenerator;
function basicGenerator(option) {
    var randomNumber = Math.random() * 1000;
    if (!option) {
        return randomNumber;
    }
    var _a = option, min = _a.min, max = _a.max;
    if (min && max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return randomNumber;
}


/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dateGenerator;
function dateGenerator() {
    return Date.now();
}


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = floatGenerator;
function floatGenerator(options) {
    var max = options.max, min = options.min, fixed = options.fixed;
    var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return Number(randomnumber.toFixed(fixed));
}


/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = stringGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basic__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tele__ = __webpack_require__(94);




function stringGenerator(option) {
    if (option === void 0) {
        option = { is: 'basic' };
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
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = emailGenerator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__(22);
var domains = ['gmail.com', 'hotmail.com', 'qq.com', '163.com'];

function emailGenerator() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__basic__["a" /* basicGenerator */])() + domains[0];
}


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTelRandom */
/* harmony export (immutable) */ __webpack_exports__["a"] = telGenerator;
/* unused harmony export mobileTelGenerator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic__ = __webpack_require__(22);

var tels = '0123456789';
var createTelRandom = function (length) {
    return new Array(length)
        .fill(0)
        .map(function (_, index) { return tels[index]; })
        .join('');
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
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getStorage */
/* unused harmony export setStorage */
/* unused harmony export removeItem */
/* unused harmony export clearAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(12);

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
var SnapShotManager = (function () {
    function SnapShotManager() {
        console.log('snapshot');
    }
    SnapShotManager.prototype.keyGenerator = function (config) {
        var url = config.url;
        var key = config.key;
        if (!key) {
            return md5(url);
        }
        else {
            return md5(key);
        }
    };
    SnapShotManager.prototype.getPrefixUrlFromKey = function (key) {
        var _a = key.split('/'), prefix = _a[0], url = _a[1], time = _a.slice(2);
        var prefixString = prefix + '/' + url;
        return prefixString;
    };
    SnapShotManager.prototype.getSavedList = function (key) {
        var _this = this;
        var savedList = Array.from(Array(localStorage.length), function (d, i) { return i; })
            .filter(function (item, index) {
            var prefixString = _this.getPrefixUrlFromKey(key);
            var localStorageKey = localStorage.key(index) || '';
            return localStorageKey.startsWith(prefixString);
        })
            .map(function (index) {
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
        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["d" /* isEqual */])(lastSavedItem, responseConfig)) {
            return;
        }
        setStorage(key, responseConfig);
    };
    SnapShotManager.prototype.getStorage = function (config) {
        var key = this.keyGenerator(config);
        var savedList = this.getSavedList(key);
        key = savedList[Object(__WEBPACK_IMPORTED_MODULE_0__utils_index__["h" /* random */])(0, savedList.length - 1)];
        return getStorage(key);
    };
    SnapShotManager.prototype.getAllStorageFromConfig = function (config) {
        var key = this.keyGenerator(config);
        var savedList = this.getSavedList(key);
        return savedList.map(function (keyItem) { return getStorage(keyItem); });
    };
    SnapShotManager.prototype.clearAll = function () {
        clearAll();
    };
    return SnapShotManager;
}());
/* harmony default export */ __webpack_exports__["a"] = (SnapShotManager);


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = logRequestErrorWithCorrectionSelections;
function logRequestErrorWithCorrectionSelections(_, options) {
    var opts = options || {};
    var keys = Object.keys(opts);
    return Promise.resolve([keys[0], opts[keys[0]]]);
}


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = UNSAFE_typeMarkToMockBase;
/* harmony export (immutable) */ __webpack_exports__["a"] = UNSAFE_MockConfigApplyToTypeMark;
function UNSAFE_typeMarkToMockBase(mark) {
    if (mark.$s_type === 'object') {
        var result_1 = {};
        var param_1 = mark.$s_param;
        Object.keys(param_1).forEach(function (k) {
            result_1[k] = UNSAFE_typeMarkToMockBase(param_1[k]);
        });
        return result_1;
    }
    else {
        return {};
    }
}
function UNSAFE_MockConfigApplyToTypeMark(config, mark) {
    if (mark.$s_type === 'and' || mark.$s_type === 'or') {
        return mark;
    }
    else if (mark.$s_type === 'object') {
        var param_2 = mark.$s_param;
        Object.keys(param_2).forEach(function (k) {
            param_2[k] = UNSAFE_MockConfigApplyToTypeMark(config[k], param_2[k]);
        });
        return mark;
    }
    else {
        if (Object.keys(config).length > 0) {
            mark.$s_mock = config;
        }
        return mark;
    }
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutePage404; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createDynamicLoader;
/* harmony export (immutable) */ __webpack_exports__["c"] = createRouter;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__compose__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__route_wrapper__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redirect__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(8);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};








var RoutePage404 = function (_a) {
    var match = _a.match, defined = _a.defined;
    if (true) {
        console.error("404 NotFound: file \"" + defined.main + "\" was not exists.");
        return "404 NotFound: file \"" + defined.main + "\" was not exists.";
    }
    return "404 NotFound: page \"" + match.url + "\" was not found.";
};
function createDynamicLoader(loader) {
    var page = function (props) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_3__loader__["a" /* default */], __assign({ loader: loader }, props));
    };
    page.displayName = 'DynamicPage';
    return page;
}
function createRouter(config, pagesMap, externals, page) {
    if (externals) {
        if (typeof externals === 'function') {
            // todo: support thenable return
            config = externals(config);
        }
        else {
            config = __assign({}, config, externals);
        }
    }
    var _a = config.exact, exact = _a === void 0 ? false : _a, baseDir = config.baseDir, beforeRoute = config.beforeRoute;
    // normalize routes
    var routes = config.routes ? config.routes.map(function (route) {
        var ret = {
            path: route.path,
            exact: route.exact != null ? route.exact : exact,
        };
        if (route.redirect) {
            ret.children = function (_a) {
                var match = _a.match;
                return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_6__redirect__["a" /* default */], {
                    computedMatch: match,
                    to: route.redirect
                });
            };
            return ret;
        }
        if (!route.main)
            return null;
        var key = Object(__WEBPACK_IMPORTED_MODULE_7__utils__["d" /* resolve */])(route.main, baseDir);
        if (!beforeRoute) {
            ret.children = function (props) { return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(pagesMap[key], props); };
        }
        else {
            ret.children = function (props) { return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_4__route_wrapper__["a" /* default */], __assign({}, props, { beforeRoute: beforeRoute, Component: pagesMap[key] })); };
        }
        return ret;
    }).filter(Boolean) : null;
    function factory(parentController, props) {
        return routes ? Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */], __assign({}, props, { parentController: parentController,
            routes: routes })) : null;
    }
    if (page) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__compose__["a" /* default */])(function ViewFactory() {
            return function (controller) { return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* X */])(controller.__m({ key: 'main' }), function (_a) {
                var scope = _a.scope;
                return scope.__routerView();
            }); };
        }, typeof page === 'object' ? page : undefined, factory);
    }
    return factory;
}


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
/**
 * 动态加载Wrapper
 * @author changming<changming.zy@alibaba-inc.com>
 */

function interopRequireDefault(obj) { return obj && obj.__esModule ? obj.default : obj; }
var Loader = /** @class */ (function (_super) {
    __extends(Loader, _super);
    function Loader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            Component: null,
        };
        return _this;
    }
    Loader.prototype.componentDidMount = function () {
        var _this = this;
        // todo: support more states
        this.props.loader().then(function (Component) {
            _this.setState({ Component: interopRequireDefault(Component) });
        });
    };
    Loader.prototype.render = function () {
        var _a = this.props, loader = _a.loader, props = __rest(_a, ["loader"]);
        var Component = this.state.Component;
        if (Component) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Component, props);
        }
        // todo: customer loading handler?
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', null, 'loading');
    };
    Loader.displayName = 'Loader';
    return Loader;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Loader);


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigator__ = __webpack_require__(4);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
    var t = typeof res;
    return t === 'string' || t === 'number';
}
var RouteWrapper = /** @class */ (function (_super) {
    __extends(RouteWrapper, _super);
    function RouteWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            authPassed: AuthStatus.not,
            prevComponent: null,
        };
        return _this;
    }
    RouteWrapper.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.Component !== prevState.prevComponent) {
            return {
                authPassed: AuthStatus.not,
                prevComponent: nextProps.Component,
            };
        }
        return null;
    };
    RouteWrapper.prototype.componentDidUpdate = function () {
        if (this.state.authPassed === AuthStatus.not) {
            this.checkAuth();
        }
    };
    RouteWrapper.prototype.componentDidMount = function () {
        this.checkAuth();
    };
    RouteWrapper.prototype.checkAuth = function () {
        var _this = this;
        var _a = this.props, beforeRoute = _a.beforeRoute, defined = _a.defined, match = _a.match;
        var history = __WEBPACK_IMPORTED_MODULE_1__navigator__["a" /* default */].history;
        if (beforeRoute) {
            var ret_1 = beforeRoute(defined, match, history);
            if (ret_1 === true) {
                this.setState({ authPassed: AuthStatus.pass });
            }
            else if (ret_1 === false) {
                this.setState({ authPassed: AuthStatus.fail });
            }
            else if (isRedirect(ret_1)) {
                history.replace(String(ret_1));
            }
            else if (ret_1 && ret_1.then) {
                ret_1.then(function (res) {
                    if (isRedirect(res)) {
                        history.replace(String(ret_1));
                        return;
                    }
                    _this.setState({ authPassed: AuthStatus.pass });
                }, function (res) {
                    if (isRedirect(res)) {
                        history.replace(String(ret_1));
                        return;
                    }
                    _this.setState({ authPassed: AuthStatus.fail });
                });
            }
        }
        else {
            this.setState({ authPassed: AuthStatus.pass });
        }
    };
    RouteWrapper.prototype.render = function () {
        var _a = this.props, Component = _a.Component, beforeRoute = _a.beforeRoute, others = __rest(_a, ["Component", "beforeRoute"]);
        if (this.state.authPassed === AuthStatus.pass) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(Component, others);
        }
        else if (this.state.authPassed === AuthStatus.fail) {
            return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', null, 'You have no authority to view this page');
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])('div', null, 'loading');
    };
    return RouteWrapper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (RouteWrapper);


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_context__ = __webpack_require__(19);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};




var Router = /** @class */ (function (_super) {
    __extends(Router, _super);
    function Router(props) {
        var _this = _super.call(this, props) || this;
        _this.dispose = __WEBPACK_IMPORTED_MODULE_1__navigator__["a" /* default */].history.listen(function () {
            _this.forceUpdate();
        });
        return _this;
    }
    Router.prototype.componentWillUnmount = function () {
        this.dispose();
    };
    Router.prototype.render = function () {
        var _a = this.props, routes = _a.routes, rest = __rest(_a, ["routes"]);
        var location = __WEBPACK_IMPORTED_MODULE_1__navigator__["a" /* default */].history.location;
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(__WEBPACK_IMPORTED_MODULE_3__view_context__["a" /* default */].Consumer, null, function (ctx) {
            var match;
            var defined;
            for (var i = 0, l = routes.length; i < l; i++) {
                defined = routes[i];
                match = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* matchPath */])(location.pathname, defined, ctx.match);
                if (match) {
                    break;
                }
            }
            return match ? defined.children(__assign({ match: match, defined: defined }, rest)) : null;
        });
    };
    return Router;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (Router);


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = observable;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function observable(target, prop, descriptor) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0__utils__["g" /* hasOwnProperty */])(target, '__obxDecorators')) {
        var inheritedDecorators = target.__obxDecorators;
        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* addHiddenProp */])(target, '__obxDecorators', __assign({}, inheritedDecorators));
    }
    target.__obxDecorators[prop] = {
        prop: prop,
        descriptor: descriptor,
    };
    return Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* createPropertyInitializerDescriptor */])(prop);
}


/***/ })
/******/ ]);
});
//# sourceMappingURL=recore.umd.js.map