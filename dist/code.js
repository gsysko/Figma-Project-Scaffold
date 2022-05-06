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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/construct.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/construct.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");


function _construct(Parent, args, Class) {
  if (Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__["default"])()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeFunction; });
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteralLoose; });
function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _wrapNativeSuper; });
/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");
/* harmony import */ var _isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isNativeFunction.js */ "./node_modules/@babel/runtime/helpers/esm/isNativeFunction.js");
/* harmony import */ var _construct_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./construct.js */ "./node_modules/@babel/runtime/helpers/esm/construct.js");




function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !Object(_isNativeFunction_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return Object(_construct_js__WEBPACK_IMPORTED_MODULE_3__["default"])(Class, arguments, Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__["default"])(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

/***/ }),

/***/ "./node_modules/polished/dist/polished.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/polished/dist/polished.esm.js ***!
  \****************************************************/
/*! exports provided: adjustHue, animation, backgroundImages, backgrounds, between, border, borderColor, borderRadius, borderStyle, borderWidth, buttons, clearFix, complement, cover, cssVar, darken, desaturate, directionalProperty, easeIn, easeInOut, easeOut, ellipsis, em, fluidRange, fontFace, getContrast, getLuminance, getValueAndUnit, grayscale, hiDPI, hideText, hideVisually, hsl, hslToColorString, hsla, important, invert, lighten, linearGradient, margin, math, meetsContrastGuidelines, mix, modularScale, normalize, opacify, padding, parseToHsl, parseToRgb, position, radialGradient, readableColor, rem, remToPx, retinaImage, rgb, rgbToColorString, rgba, saturate, setHue, setLightness, setSaturation, shade, size, stripUnit, textInputs, timingFunctions, tint, toColorString, transitions, transparentize, triangle, wordWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustHue", function() { return curriedAdjustHue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImages", function() { return backgroundImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgrounds", function() { return backgrounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "border", function() { return border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderColor", function() { return borderColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderStyle", function() { return borderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderWidth", function() { return borderWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttons", function() { return buttons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearFix", function() { return clearFix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complement", function() { return complement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cover", function() { return cover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cssVar", function() { return cssVar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return curriedDarken$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desaturate", function() { return curriedDesaturate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directionalProperty", function() { return directionalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeIn", function() { return easeIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOut", function() { return easeInOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOut", function() { return easeOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ellipsis", function() { return ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "em", function() { return em$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fluidRange", function() { return fluidRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontFace", function() { return fontFace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContrast", function() { return getContrast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return getLuminance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueAndUnit", function() { return getValueAndUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grayscale", function() { return grayscale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hiDPI", function() { return hiDPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideText", function() { return hideText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideVisually", function() { return hideVisually; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslToColorString", function() { return hslToColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsla", function() { return hsla; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "important", function() { return important; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invert", function() { return invert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return curriedLighten$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearGradient", function() { return linearGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "margin", function() { return margin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "math", function() { return math; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetsContrastGuidelines", function() { return meetsContrastGuidelines; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mix", function() { return mix$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modularScale", function() { return modularScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalize", function() { return normalize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opacify", function() { return curriedOpacify$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padding", function() { return padding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToHsl", function() { return parseToHsl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseToRgb", function() { return parseToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "position", function() { return position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "radialGradient", function() { return radialGradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readableColor", function() { return readableColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rem", function() { return rem$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remToPx", function() { return remToPx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retinaImage", function() { return retinaImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToColorString", function() { return rgbToColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgba", function() { return rgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturate", function() { return curriedSaturate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setHue", function() { return curriedSetHue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLightness", function() { return curriedSetLightness$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSaturation", function() { return curriedSetSaturation$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shade", function() { return curriedShade$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "size", function() { return size; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripUnit", function() { return stripUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInputs", function() { return textInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timingFunctions", function() { return timingFunctions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tint", function() { return curriedTint$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toColorString", function() { return toColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitions", function() { return transitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transparentize", function() { return curriedTransparentize$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triangle", function() { return triangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordWrap", function() { return wordWrap; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteralLoose */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteralLoose.js");






function last() {
  var _ref;

  return _ref = arguments.length - 1, _ref < 0 || arguments.length <= _ref ? undefined : arguments[_ref];
}

function negation(a) {
  return -a;
}

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function max() {
  return Math.max.apply(Math, arguments);
}

function min() {
  return Math.min.apply(Math, arguments);
}

function comma() {
  return Array.of.apply(Array, arguments);
}

var defaultSymbols = {
  symbols: {
    '*': {
      infix: {
        symbol: '*',
        f: multiplication,
        notation: 'infix',
        precedence: 4,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: '*',
      regSymbol: '\\*'
    },
    '/': {
      infix: {
        symbol: '/',
        f: division,
        notation: 'infix',
        precedence: 4,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: '/',
      regSymbol: '/'
    },
    '+': {
      infix: {
        symbol: '+',
        f: addition,
        notation: 'infix',
        precedence: 2,
        rightToLeft: 0,
        argCount: 2
      },
      prefix: {
        symbol: '+',
        f: last,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '+',
      regSymbol: '\\+'
    },
    '-': {
      infix: {
        symbol: '-',
        f: subtraction,
        notation: 'infix',
        precedence: 2,
        rightToLeft: 0,
        argCount: 2
      },
      prefix: {
        symbol: '-',
        f: negation,
        notation: 'prefix',
        precedence: 3,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '-',
      regSymbol: '-'
    },
    ',': {
      infix: {
        symbol: ',',
        f: comma,
        notation: 'infix',
        precedence: 1,
        rightToLeft: 0,
        argCount: 2
      },
      symbol: ',',
      regSymbol: ','
    },
    '(': {
      prefix: {
        symbol: '(',
        f: last,
        notation: 'prefix',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: '(',
      regSymbol: '\\('
    },
    ')': {
      postfix: {
        symbol: ')',
        f: undefined,
        notation: 'postfix',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: ')',
      regSymbol: '\\)'
    },
    min: {
      func: {
        symbol: 'min',
        f: min,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'min',
      regSymbol: 'min\\b'
    },
    max: {
      func: {
        symbol: 'max',
        f: max,
        notation: 'func',
        precedence: 0,
        rightToLeft: 0,
        argCount: 1
      },
      symbol: 'max',
      regSymbol: 'max\\b'
    }
  }
};
var defaultSymbolMap = defaultSymbols;

// based on https://github.com/styled-components/styled-components/blob/fcf6f3804c57a14dd7984dfab7bc06ee2edca044/src/utils/error.js

/**
 * Parse errors.md and turn it into a simple hash of code: message
 * @private
 */
var ERRORS = {
  "1": "Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",
  "2": "Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",
  "3": "Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",
  "4": "Couldn't generate valid rgb string from %s, it returned %s.\n\n",
  "5": "Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",
  "6": "Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",
  "7": "Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",
  "8": "Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",
  "9": "Please provide a number of steps to the modularScale helper.\n\n",
  "10": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "11": "Invalid value passed as base to modularScale, expected number or em string but got \"%s\"\n\n",
  "12": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got \"%s\" instead.\n\n",
  "13": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got \"%s\" instead.\n\n",
  "14": "Passed invalid pixel value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "15": "Passed invalid base value (\"%s\") to %s(), please pass a value like \"12px\" or 12.\n\n",
  "16": "You must provide a template to this method.\n\n",
  "17": "You passed an unsupported selector state to this method.\n\n",
  "18": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "19": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "20": "expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "21": "expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "22": "expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",
  "23": "fontFace expects a name of a font-family.\n\n",
  "24": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "25": "fontFace expects localFonts to be an array.\n\n",
  "26": "fontFace expects fileFormats to be an array.\n\n",
  "27": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "28": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "29": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "30": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "31": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",
  "32": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",
  "33": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",
  "34": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "35": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "36": "Property must be a string value.\n\n",
  "37": "Syntax Error at %s.\n\n",
  "38": "Formula contains a function that needs parentheses at %s.\n\n",
  "39": "Formula is missing closing parenthesis at %s.\n\n",
  "40": "Formula has too many closing parentheses at %s.\n\n",
  "41": "All values in a formula must have the same unit or be unitless.\n\n",
  "42": "Please provide a number of steps to the modularScale helper.\n\n",
  "43": "Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",
  "44": "Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",
  "45": "Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",
  "46": "Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",
  "47": "minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",
  "48": "fromSize and toSize must be provided as stringified numbers with the same units.\n\n",
  "49": "Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",
  "50": "Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",
  "51": "Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",
  "52": "fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",
  "53": "fontFace expects localFonts to be an array.\n\n",
  "54": "fontFace expects fileFormats to be an array.\n\n",
  "55": "fontFace expects a name of a font-family.\n\n",
  "56": "linearGradient requries at least 2 color-stops to properly render.\n\n",
  "57": "radialGradient requries at least 2 color-stops to properly render.\n\n",
  "58": "Please supply a filename to retinaImage() as the first argument.\n\n",
  "59": "Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",
  "60": "Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",
  "61": "Property must be a string value.\n\n",
  "62": "borderRadius expects a radius value as a string or number as the second argument.\n\n",
  "63": "borderRadius expects one of \"top\", \"bottom\", \"left\" or \"right\" as the first argument.\n\n",
  "64": "The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",
  "65": "To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",
  "66": "The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",
  "67": "You must provide a template to this method.\n\n",
  "68": "You passed an unsupported selector state to this method.\n\n",
  "69": "Expected a string ending in \"px\" or a number passed as the first argument to %s(), got %s instead.\n\n",
  "70": "Expected a string ending in \"px\" or a number passed as the second argument to %s(), got %s instead.\n\n",
  "71": "Passed invalid pixel value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "72": "Passed invalid base value %s to %s(), please pass a value like \"12px\" or 12.\n\n",
  "73": "Please provide a valid CSS variable.\n\n",
  "74": "CSS variable not found and no default was provided.\n\n",
  "75": "important requires a valid style object, got a %s instead.\n\n",
  "76": "fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",
  "77": "remToPx expects a value in \"rem\" but you provided it in \"%s\".\n\n",
  "78": "base must be set in \"px\" or \"%\" but you set it in \"%s\".\n"
};
/**
 * super basic version of sprintf
 * @private
 */

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var a = args[0];
  var b = [];
  var c;

  for (c = 1; c < args.length; c += 1) {
    b.push(args[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 * @private
 */


var PolishedError = /*#__PURE__*/function (_Error) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(PolishedError, _Error);

  function PolishedError(code) {
    var _this;

    if (false) {} else {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      _this = _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(args))) || this;
    }

    return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this);
  }

  return PolishedError;
}( /*#__PURE__*/Object(_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_3__["default"])(Error));

var unitRegExp = /((?!\w)a|na|hc|mc|dg|me[r]?|xe|ni(?![a-zA-Z])|mm|cp|tp|xp|q(?!s)|hv|xamv|nimv|wv|sm|s(?!\D|$)|ged|darg?|nrut)/g; // Merges additional math functionality into the defaults.

function mergeSymbolMaps(additionalSymbols) {
  var symbolMap = {};
  symbolMap.symbols = additionalSymbols ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultSymbolMap.symbols, additionalSymbols.symbols) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, defaultSymbolMap.symbols);
  return symbolMap;
}

function exec(operators, values) {
  var _ref;

  var op = operators.pop();
  values.push(op.f.apply(op, (_ref = []).concat.apply(_ref, values.splice(-op.argCount))));
  return op.precedence;
}

function calculate(expression, additionalSymbols) {
  var symbolMap = mergeSymbolMaps(additionalSymbols);
  var match;
  var operators = [symbolMap.symbols['('].prefix];
  var values = [];
  var pattern = new RegExp( // Pattern for numbers
  "\\d+(?:\\.\\d+)?|" + // ...and patterns for individual operators/function names
  Object.keys(symbolMap.symbols).map(function (key) {
    return symbolMap.symbols[key];
  }) // longer symbols should be listed first
  // $FlowFixMe
  .sort(function (a, b) {
    return b.symbol.length - a.symbol.length;
  }) // $FlowFixMe
  .map(function (val) {
    return val.regSymbol;
  }).join('|') + "|(\\S)", 'g');
  pattern.lastIndex = 0; // Reset regular expression object

  var afterValue = false;

  do {
    match = pattern.exec(expression);

    var _ref2 = match || [')', undefined],
        token = _ref2[0],
        bad = _ref2[1];

    var notNumber = symbolMap.symbols[token];
    var notNewValue = notNumber && !notNumber.prefix && !notNumber.func;
    var notAfterValue = !notNumber || !notNumber.postfix && !notNumber.infix; // Check for syntax errors:

    if (bad || (afterValue ? notAfterValue : notNewValue)) {
      throw new PolishedError(37, match ? match.index : expression.length, expression);
    }

    if (afterValue) {
      // We either have an infix or postfix operator (they should be mutually exclusive)
      var curr = notNumber.postfix || notNumber.infix;

      do {
        var prev = operators[operators.length - 1];
        if ((curr.precedence - prev.precedence || prev.rightToLeft) > 0) break; // Apply previous operator, since it has precedence over current one
      } while (exec(operators, values)); // Exit loop after executing an opening parenthesis or function


      afterValue = curr.notation === 'postfix';

      if (curr.symbol !== ')') {
        operators.push(curr); // Postfix always has precedence over any operator that follows after it

        if (afterValue) exec(operators, values);
      }
    } else if (notNumber) {
      // prefix operator or function
      operators.push(notNumber.prefix || notNumber.func);

      if (notNumber.func) {
        // Require an opening parenthesis
        match = pattern.exec(expression);

        if (!match || match[0] !== '(') {
          throw new PolishedError(38, match ? match.index : expression.length, expression);
        }
      }
    } else {
      // number
      values.push(+token);
      afterValue = true;
    }
  } while (match && operators.length);

  if (operators.length) {
    throw new PolishedError(39, match ? match.index : expression.length, expression);
  } else if (match) {
    throw new PolishedError(40, match ? match.index : expression.length, expression);
  } else {
    return values.pop();
  }
}

function reverseString(str) {
  return str.split('').reverse().join('');
}
/**
 * Helper for doing math with CSS Units. Accepts a formula as a string. All values in the formula must have the same unit (or be unitless). Supports complex formulas utliziing addition, subtraction, multiplication, division, square root, powers, factorial, min, max, as well as parentheses for order of operation.
 *
 *In cases where you need to do calculations with mixed units where one unit is a [relative length unit](https://developer.mozilla.org/en-US/docs/Web/CSS/length#Relative_length_units), you will want to use [CSS Calc](https://developer.mozilla.org/en-US/docs/Web/CSS/calc).
 *
 * *warning* While we've done everything possible to ensure math safely evalutes formulas expressed as strings, you should always use extreme caution when passing `math` user provided values.
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: math('12rem + 8rem'),
 *   fontSize: math('(12px + 2px) * 3'),
 *   fontSize: math('3px^2 + sqrt(4)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${math('12rem + 8rem')};
 *   fontSize: ${math('(12px + 2px) * 3')};
 *   fontSize: ${math('3px^2 + sqrt(4)')};
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   fontSize: '20rem',
 *   fontSize: '42px',
 *   fontSize: '11px',
 * }
 */


function math(formula, additionalSymbols) {
  var reversedFormula = reverseString(formula);
  var formulaMatch = reversedFormula.match(unitRegExp); // Check that all units are the same

  if (formulaMatch && !formulaMatch.every(function (unit) {
    return unit === formulaMatch[0];
  })) {
    throw new PolishedError(41);
  }

  var cleanFormula = reverseString(reversedFormula.replace(unitRegExp, ''));
  return "" + calculate(cleanFormula, additionalSymbols) + (formulaMatch ? reverseString(formulaMatch[0]) : '');
}

var cssVariableRegex = /--[\S]*/g;
/**
 * Fetches the value of a passed CSS Variable in the :root scope, or otherwise returns a defaultValue if provided.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'background': cssVar('--background-color'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${cssVar('--background-color')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'background': 'red'
 * }
 */

function cssVar(cssVariable, defaultValue) {
  if (!cssVariable || !cssVariable.match(cssVariableRegex)) {
    throw new PolishedError(73);
  }

  var variableValue;
  /* eslint-disable */

  /* istanbul ignore next */

  if (typeof document !== 'undefined' && document.documentElement !== null) {
    variableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariable);
  }
  /* eslint-enable */


  if (variableValue) {
    return variableValue.trim();
  } else if (defaultValue) {
    return defaultValue;
  }

  throw new PolishedError(74);
}

// @private
function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var positionMap$1 = ['Top', 'Right', 'Bottom', 'Left'];

function generateProperty(property, position) {
  if (!property) return position.toLowerCase();
  var splitProperty = property.split('-');

  if (splitProperty.length > 1) {
    splitProperty.splice(1, 0, position);
    return splitProperty.reduce(function (acc, val) {
      return "" + acc + capitalizeString(val);
    });
  }

  var joinedProperty = property.replace(/([a-z])([A-Z])/g, "$1" + position + "$2");
  return property === joinedProperty ? "" + property + position : joinedProperty;
}

function generateStyles(property, valuesWithDefaults) {
  var styles = {};

  for (var i = 0; i < valuesWithDefaults.length; i += 1) {
    if (valuesWithDefaults[i] || valuesWithDefaults[i] === 0) {
      styles[generateProperty(property, positionMap$1[i])] = valuesWithDefaults[i];
    }
  }

  return styles;
}
/**
 * Enables shorthand for direction-based properties. It accepts a property (hyphenated or camelCased) and up to four values that map to top, right, bottom, and left, respectively. You can optionally pass an empty string to get only the directional values as properties. You can also optionally pass a null argument for a directional value to ignore it.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...directionalProperty('padding', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${directionalProperty('padding', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */


function directionalProperty(property) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  //  prettier-ignore
  var firstValue = values[0],
      _values$ = values[1],
      secondValue = _values$ === void 0 ? firstValue : _values$,
      _values$2 = values[2],
      thirdValue = _values$2 === void 0 ? firstValue : _values$2,
      _values$3 = values[3],
      fourthValue = _values$3 === void 0 ? secondValue : _values$3;
  var valuesWithDefaults = [firstValue, secondValue, thirdValue, fourthValue];
  return generateStyles(property, valuesWithDefaults);
}

/**
 * Check if a string ends with something
 * @private
 */
function endsWith(string, suffix) {
  return string.substr(-suffix.length) === suffix;
}

var cssRegex$1 = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value minus its unit of measure.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100
 * }
 */

function stripUnit(value) {
  if (typeof value !== 'string') return value;
  var matchedValue = value.match(cssRegex$1);
  return matchedValue ? parseFloat(value) : value;
}

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */

var pxtoFactory = function pxtoFactory(to) {
  return function (pxval, base) {
    if (base === void 0) {
      base = '16px';
    }

    var newPxval = pxval;
    var newBase = base;

    if (typeof pxval === 'string') {
      if (!endsWith(pxval, 'px')) {
        throw new PolishedError(69, to, pxval);
      }

      newPxval = stripUnit(pxval);
    }

    if (typeof base === 'string') {
      if (!endsWith(base, 'px')) {
        throw new PolishedError(70, to, base);
      }

      newBase = stripUnit(base);
    }

    if (typeof newPxval === 'string') {
      throw new PolishedError(71, pxval, to);
    }

    if (typeof newBase === 'string') {
      throw new PolishedError(72, base, to);
    }

    return "" + newPxval / newBase + to;
  };
};

var pixelsto = pxtoFactory;

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */

var em = /*#__PURE__*/pixelsto('em');
var em$1 = em;

var cssRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
/**
 * Returns a given CSS value and its unit as elements of an array.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   '--dimension': getValueAndUnit('100px')[0],
 *   '--unit': getValueAndUnit('100px')[1],
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   --dimension: ${getValueAndUnit('100px')[0]};
 *   --unit: ${getValueAndUnit('100px')[1]};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   '--dimension': 100,
 *   '--unit': 'px',
 * }
 */

function getValueAndUnit(value) {
  if (typeof value !== 'string') return [value, ''];
  var matchedValue = value.match(cssRegex);
  if (matchedValue) return [parseFloat(value), matchedValue[2]];
  return [value, undefined];
}

/**
 * Helper for targeting rules in a style block generated by polished modules that need !important-level specificity. Can optionally specify a rule (or rules) to target specific rules.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...important(cover())
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${important(cover())}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute !important',
 *   'top': '0 !important',
 *   'right: '0 !important',
 *   'bottom': '0 !important',
 *   'left: '0 !important'
 * }
 */

function important(styleBlock, rules) {
  if (typeof styleBlock !== 'object' || styleBlock === null) {
    throw new PolishedError(75, typeof styleBlock);
  }

  var newStyleBlock = {};
  Object.keys(styleBlock).forEach(function (key) {
    if (typeof styleBlock[key] === 'object' && styleBlock[key] !== null) {
      newStyleBlock[key] = important(styleBlock[key], rules);
    } else if (!rules || rules && (rules === key || rules.indexOf(key) >= 0)) {
      newStyleBlock[key] = styleBlock[key] + " !important";
    } else {
      newStyleBlock[key] = styleBlock[key];
    }
  });
  return newStyleBlock;
}

var ratioNames = {
  minorSecond: 1.067,
  majorSecond: 1.125,
  minorThird: 1.2,
  majorThird: 1.25,
  perfectFourth: 1.333,
  augFourth: 1.414,
  perfectFifth: 1.5,
  minorSixth: 1.6,
  goldenSection: 1.618,
  majorSixth: 1.667,
  minorSeventh: 1.778,
  majorSeventh: 1.875,
  octave: 2,
  majorTenth: 2.5,
  majorEleventh: 2.667,
  majorTwelfth: 3,
  doubleOctave: 4
};

function getRatio(ratioName) {
  return ratioNames[ratioName];
}
/**
 * Establish consistent measurements and spacial relationships throughout your projects by incrementing an em or rem value up or down a defined scale. We provide a list of commonly used scales as pre-defined variables.
 * @example
 * // Styles as object usage
 * const styles = {
 *    // Increment two steps up the default scale
 *   'fontSize': modularScale(2)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *    // Increment two steps up the default scale
 *   fontSize: ${modularScale(2)}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'fontSize': '1.77689em'
 * }
 */


function modularScale(steps, base, ratio) {
  if (base === void 0) {
    base = '1em';
  }

  if (ratio === void 0) {
    ratio = 1.333;
  }

  if (typeof steps !== 'number') {
    throw new PolishedError(42);
  }

  if (typeof ratio === 'string' && !ratioNames[ratio]) {
    throw new PolishedError(43);
  }

  var _ref = typeof base === 'string' ? getValueAndUnit(base) : [base, ''],
      realBase = _ref[0],
      unit = _ref[1];

  var realRatio = typeof ratio === 'string' ? getRatio(ratio) : ratio;

  if (typeof realBase === 'string') {
    throw new PolishedError(44, base);
  }

  return "" + realBase * Math.pow(realRatio, steps) + (unit || '');
}

/**
 * Convert pixel value to rems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @function
 * @param {string|number} pxval
 * @param {string|number} [base='16px']
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': rem('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${rem('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1rem'
 * }
 */

var rem = /*#__PURE__*/pixelsto('rem');
var rem$1 = rem;

var defaultFontSize = 16;

function convertBase(base) {
  var deconstructedValue = getValueAndUnit(base);

  if (deconstructedValue[1] === 'px') {
    return parseFloat(base);
  }

  if (deconstructedValue[1] === '%') {
    return parseFloat(base) / 100 * defaultFontSize;
  }

  throw new PolishedError(78, deconstructedValue[1]);
}

function getBaseFromDoc() {
  /* eslint-disable */

  /* istanbul ignore next */
  if (typeof document !== 'undefined' && document.documentElement !== null) {
    var rootFontSize = getComputedStyle(document.documentElement).fontSize;
    return rootFontSize ? convertBase(rootFontSize) : defaultFontSize;
  }
  /* eslint-enable */

  /* istanbul ignore next */


  return defaultFontSize;
}
/**
 * Convert rem values to px. By default, the base value is pulled from the font-size property on the root element (if it is set in % or px). It defaults to 16px if not found on the root. You can also override the base value by providing your own base in % or px.
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': remToPx('1.6rem')
 *   'height': remToPx('1.6rem', '10px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${remToPx('1.6rem')}
 *   height: ${remToPx('1.6rem', '10px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '25.6px',
 *   'height': '16px',
 * }
 */


function remToPx(value, base) {
  var deconstructedValue = getValueAndUnit(value);

  if (deconstructedValue[1] !== 'rem' && deconstructedValue[1] !== '') {
    throw new PolishedError(77, deconstructedValue[1]);
  }

  var newBase = base ? convertBase(base) : getBaseFromDoc();
  return deconstructedValue[0] * newBase + "px";
}

var functionsMap$3 = {
  back: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  circ: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  cubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  expo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  quad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  quart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  quint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  sine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)'
};
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': easeIn('quad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${easeIn('quad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */

function easeIn(functionName) {
  return functionsMap$3[functionName.toLowerCase().trim()];
}

var functionsMap$2 = {
  back: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  circ: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  cubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  expo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  quad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  quart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  quint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  sine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
};
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': easeInOut('quad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${easeInOut('quad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
 * }
 */

function easeInOut(functionName) {
  return functionsMap$2[functionName.toLowerCase().trim()];
}

var functionsMap$1 = {
  back: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  cubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  circ: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  expo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  quad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  quart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  quint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  sine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)'
};
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': easeOut('quad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${easeOut('quad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
 * }
 */

function easeOut(functionName) {
  return functionsMap$1[functionName.toLowerCase().trim()];
}

/**
 * Returns a CSS calc formula for linear interpolation of a property between two values. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px').
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   fontSize: between('20px', '100px', '400px', '1000px'),
 *   fontSize: between('20px', '100px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   fontSize: ${between('20px', '100px', '400px', '1000px')};
 *   fontSize: ${between('20px', '100px')}
 * `
 *
 * // CSS as JS Output
 *
 * h1: {
 *   'fontSize': 'calc(-33.33333333333334px + 13.333333333333334vw)',
 *   'fontSize': 'calc(-9.090909090909093px + 9.090909090909092vw)'
 * }
 */

function between(fromSize, toSize, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  var _getValueAndUnit = getValueAndUnit(fromSize),
      unitlessFromSize = _getValueAndUnit[0],
      fromSizeUnit = _getValueAndUnit[1];

  var _getValueAndUnit2 = getValueAndUnit(toSize),
      unitlessToSize = _getValueAndUnit2[0],
      toSizeUnit = _getValueAndUnit2[1];

  var _getValueAndUnit3 = getValueAndUnit(minScreen),
      unitlessMinScreen = _getValueAndUnit3[0],
      minScreenUnit = _getValueAndUnit3[1];

  var _getValueAndUnit4 = getValueAndUnit(maxScreen),
      unitlessMaxScreen = _getValueAndUnit4[0],
      maxScreenUnit = _getValueAndUnit4[1];

  if (typeof unitlessMinScreen !== 'number' || typeof unitlessMaxScreen !== 'number' || !minScreenUnit || !maxScreenUnit || minScreenUnit !== maxScreenUnit) {
    throw new PolishedError(47);
  }

  if (typeof unitlessFromSize !== 'number' || typeof unitlessToSize !== 'number' || fromSizeUnit !== toSizeUnit) {
    throw new PolishedError(48);
  }

  if (fromSizeUnit !== minScreenUnit || toSizeUnit !== maxScreenUnit) {
    throw new PolishedError(76);
  }

  var slope = (unitlessFromSize - unitlessToSize) / (unitlessMinScreen - unitlessMaxScreen);
  var base = unitlessToSize - slope * unitlessMaxScreen;
  return "calc(" + base.toFixed(2) + (fromSizeUnit || '') + " + " + (100 * slope).toFixed(2) + "vw)";
}

/**
 * CSS to contain a float (credit to CSSMojo).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 *
 * // CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */
function clearFix(parent) {
  var _ref;

  if (parent === void 0) {
    parent = '&';
  }

  var pseudoSelector = parent + "::after";
  return _ref = {}, _ref[pseudoSelector] = {
    clear: 'both',
    content: '""',
    display: 'table'
  }, _ref;
}

/**
 * CSS to fully cover an area. Can optionally be passed an offset to act as a "padding".
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...cover()
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${cover()}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'position': 'absolute',
 *   'top': '0',
 *   'right: '0',
 *   'bottom': '0',
 *   'left: '0'
 * }
 */
function cover(offset) {
  if (offset === void 0) {
    offset = 0;
  }

  return {
    position: 'absolute',
    top: offset,
    right: offset,
    bottom: offset,
    left: offset
  };
}

/**
 * CSS to represent truncated text with an ellipsis. You can optionally pass a max-width and number of lines before truncating.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */
function ellipsis(width, lines) {
  if (lines === void 0) {
    lines = 1;
  }

  var styles = {
    display: 'inline-block',
    maxWidth: width || '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
  };
  return lines > 1 ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles, {
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: lines,
    display: '-webkit-box',
    whiteSpace: 'normal'
  }) : styles;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Returns a set of media queries that resizes a property (or set of properties) between a provided fromSize and toSize. Accepts optional minScreen (defaults to '320px') and maxScreen (defaults to '1200px') to constrain the interpolation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...fluidRange(
 *    {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${fluidRange(
 *      {
 *        prop: 'padding',
 *        fromSize: '20px',
 *        toSize: '100px',
 *      },
 *      '400px',
 *      '1000px',
 *    )}
 * `
 *
 * // CSS as JS Output
 *
 * div: {
 *   "@media (min-width: 1000px)": Object {
 *     "padding": "100px",
 *   },
 *   "@media (min-width: 400px)": Object {
 *     "padding": "calc(-33.33333333333334px + 13.333333333333334vw)",
 *   },
 *   "padding": "20px",
 * }
 */
function fluidRange(cssProp, minScreen, maxScreen) {
  if (minScreen === void 0) {
    minScreen = '320px';
  }

  if (maxScreen === void 0) {
    maxScreen = '1200px';
  }

  if (!Array.isArray(cssProp) && typeof cssProp !== 'object' || cssProp === null) {
    throw new PolishedError(49);
  }

  if (Array.isArray(cssProp)) {
    var mediaQueries = {};
    var fallbacks = {};

    for (var _iterator = _createForOfIteratorHelperLoose(cssProp), _step; !(_step = _iterator()).done;) {
      var _extends2, _extends3;

      var obj = _step.value;

      if (!obj.prop || !obj.fromSize || !obj.toSize) {
        throw new PolishedError(50);
      }

      fallbacks[obj.prop] = obj.fromSize;
      mediaQueries["@media (min-width: " + minScreen + ")"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mediaQueries["@media (min-width: " + minScreen + ")"], (_extends2 = {}, _extends2[obj.prop] = between(obj.fromSize, obj.toSize, minScreen, maxScreen), _extends2));
      mediaQueries["@media (min-width: " + maxScreen + ")"] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mediaQueries["@media (min-width: " + maxScreen + ")"], (_extends3 = {}, _extends3[obj.prop] = obj.toSize, _extends3));
    }

    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fallbacks, mediaQueries);
  } else {
    var _ref, _ref2, _ref3;

    if (!cssProp.prop || !cssProp.fromSize || !cssProp.toSize) {
      throw new PolishedError(51);
    }

    return _ref3 = {}, _ref3[cssProp.prop] = cssProp.fromSize, _ref3["@media (min-width: " + minScreen + ")"] = (_ref = {}, _ref[cssProp.prop] = between(cssProp.fromSize, cssProp.toSize, minScreen, maxScreen), _ref), _ref3["@media (min-width: " + maxScreen + ")"] = (_ref2 = {}, _ref2[cssProp.prop] = cssProp.toSize, _ref2), _ref3;
  }
}

var dataURIRegex = /^\s*data:([a-z]+\/[a-z-]+(;[a-z-]+=[a-z-]+)?)?(;charset=[a-z0-9-]+)?(;base64)?,[a-z0-9!$&',()*+,;=\-._~:@/?%\s]*\s*$/i;
var formatHintMap = {
  woff: 'woff',
  woff2: 'woff2',
  ttf: 'truetype',
  otf: 'opentype',
  eot: 'embedded-opentype',
  svg: 'svg',
  svgz: 'svg'
};

function generateFormatHint(format, formatHint) {
  if (!formatHint) return '';
  return " format(\"" + formatHintMap[format] + "\")";
}

function isDataURI(fontFilePath) {
  return !!fontFilePath.replace(/\s+/g, ' ').match(dataURIRegex);
}

function generateFileReferences(fontFilePath, fileFormats, formatHint) {
  if (isDataURI(fontFilePath)) {
    return "url(\"" + fontFilePath + "\")" + generateFormatHint(fileFormats[0], formatHint);
  }

  var fileFontReferences = fileFormats.map(function (format) {
    return "url(\"" + fontFilePath + "." + format + "\")" + generateFormatHint(format, formatHint);
  });
  return fileFontReferences.join(', ');
}

function generateLocalReferences(localFonts) {
  var localFontReferences = localFonts.map(function (font) {
    return "local(\"" + font + "\")";
  });
  return localFontReferences.join(', ');
}

function generateSources(fontFilePath, localFonts, fileFormats, formatHint) {
  var fontReferences = [];
  if (localFonts) fontReferences.push(generateLocalReferences(localFonts));

  if (fontFilePath) {
    fontReferences.push(generateFileReferences(fontFilePath, fileFormats, formatHint));
  }

  return fontReferences.join(', ');
}
/**
 * CSS for a @font-face declaration. Defaults to check for local copies of the font on the user's machine. You can disable this by passing `null` to localFonts.
 *
 * @example
 * // Styles as object basic usage
 * const styles = {
 *    ...fontFace({
 *      'fontFamily': 'Sans-Pro',
 *      'fontFilePath': 'path/to/file'
 *    })
 * }
 *
 * // styled-components basic usage
 * const GlobalStyle = createGlobalStyle`${
 *   fontFace({
 *     'fontFamily': 'Sans-Pro',
 *     'fontFilePath': 'path/to/file'
 *   }
 * )}`
 *
 * // CSS as JS Output
 *
 * '@font-face': {
 *   'fontFamily': 'Sans-Pro',
 *   'src': 'url("path/to/file.eot"), url("path/to/file.woff2"), url("path/to/file.woff"), url("path/to/file.ttf"), url("path/to/file.svg")',
 * }
 */


function fontFace(_ref) {
  var fontFamily = _ref.fontFamily,
      fontFilePath = _ref.fontFilePath,
      fontStretch = _ref.fontStretch,
      fontStyle = _ref.fontStyle,
      fontVariant = _ref.fontVariant,
      fontWeight = _ref.fontWeight,
      _ref$fileFormats = _ref.fileFormats,
      fileFormats = _ref$fileFormats === void 0 ? ['eot', 'woff2', 'woff', 'ttf', 'svg'] : _ref$fileFormats,
      _ref$formatHint = _ref.formatHint,
      formatHint = _ref$formatHint === void 0 ? false : _ref$formatHint,
      _ref$localFonts = _ref.localFonts,
      localFonts = _ref$localFonts === void 0 ? [fontFamily] : _ref$localFonts,
      unicodeRange = _ref.unicodeRange,
      fontDisplay = _ref.fontDisplay,
      fontVariationSettings = _ref.fontVariationSettings,
      fontFeatureSettings = _ref.fontFeatureSettings;
  // Error Handling
  if (!fontFamily) throw new PolishedError(55);

  if (!fontFilePath && !localFonts) {
    throw new PolishedError(52);
  }

  if (localFonts && !Array.isArray(localFonts)) {
    throw new PolishedError(53);
  }

  if (!Array.isArray(fileFormats)) {
    throw new PolishedError(54);
  }

  var fontFaceDeclaration = {
    '@font-face': {
      fontFamily: fontFamily,
      src: generateSources(fontFilePath, localFonts, fileFormats, formatHint),
      unicodeRange: unicodeRange,
      fontStretch: fontStretch,
      fontStyle: fontStyle,
      fontVariant: fontVariant,
      fontWeight: fontWeight,
      fontDisplay: fontDisplay,
      fontVariationSettings: fontVariationSettings,
      fontFeatureSettings: fontFeatureSettings
    }
  }; // Removes undefined fields for cleaner css object.

  return JSON.parse(JSON.stringify(fontFaceDeclaration));
}

/**
 * CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */
function hideText() {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  };
}

/**
 * CSS to hide content visually but remain accessible to screen readers.
 * from [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/9a176f57af1cfe8ec70300da4621fb9b07e5fa31/src/css/main.css#L121)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...hideVisually(),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hideVisually()};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'border': '0',
 *   'clip': 'rect(0 0 0 0)',
 *   'height': '1px',
 *   'margin': '-1px',
 *   'overflow': 'hidden',
 *   'padding': '0',
 *   'position': 'absolute',
 *   'whiteSpace': 'nowrap',
 *   'width': '1px',
 * }
 */
function hideVisually() {
  return {
    border: '0',
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px'
  };
}

/**
 * Generates a media query to target HiDPI devices.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  [hiDPI(1.5)]: {
 *    width: 200px;
 *  }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${hiDPI(1.5)} {
 *     width: 200px;
 *   }
 * `
 *
 * // CSS as JS Output
 *
 * '@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
 *  only screen and (min--moz-device-pixel-ratio: 1.5),
 *  only screen and (-o-min-device-pixel-ratio: 1.5/1),
 *  only screen and (min-resolution: 144dpi),
 *  only screen and (min-resolution: 1.5dppx)': {
 *   'width': '200px',
 * }
 */
function hiDPI(ratio) {
  if (ratio === void 0) {
    ratio = 1.3;
  }

  return "\n    @media only screen and (-webkit-min-device-pixel-ratio: " + ratio + "),\n    only screen and (min--moz-device-pixel-ratio: " + ratio + "),\n    only screen and (-o-min-device-pixel-ratio: " + ratio + "/1),\n    only screen and (min-resolution: " + Math.round(ratio * 96) + "dpi),\n    only screen and (min-resolution: " + ratio + "dppx)\n  ";
}

function constructGradientValue(literals) {
  var template = '';

  for (var _len = arguments.length, substitutions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    substitutions[_key - 1] = arguments[_key];
  }

  for (var i = 0; i < literals.length; i += 1) {
    template += literals[i];

    if (i === substitutions.length - 1 && substitutions[i]) {
      var definedValues = substitutions.filter(function (substitute) {
        return !!substitute;
      }); // Adds leading coma if properties preceed color-stops

      if (definedValues.length > 1) {
        template = template.slice(0, -1);
        template += ", " + substitutions[i]; // No trailing space if color-stops is the only param provided
      } else if (definedValues.length === 1) {
        template += "" + substitutions[i];
      }
    } else if (substitutions[i]) {
      template += substitutions[i] + " ";
    }
  }

  return template.trim();
}

var _templateObject$1;

/**
 * CSS for declaring a linear gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${linearGradient({
        colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
        toDirection: 'to top right',
        fallback: '#FFF',
      })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#FFF',
 *   'backgroundImage': 'linear-gradient(to top right, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
function linearGradient(_ref) {
  var colorStops = _ref.colorStops,
      fallback = _ref.fallback,
      _ref$toDirection = _ref.toDirection,
      toDirection = _ref$toDirection === void 0 ? '' : _ref$toDirection;

  if (!colorStops || colorStops.length < 2) {
    throw new PolishedError(56);
  }

  return {
    backgroundColor: fallback || colorStops[0].replace(/,\s+/g, ',').split(' ')[0].replace(/,(?=\S)/g, ', '),
    backgroundImage: constructGradientValue(_templateObject$1 || (_templateObject$1 = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(["linear-gradient(", "", ")"])), toDirection, colorStops.join(', ').replace(/,(?=\S)/g, ', '))
  };
}

/**
 * CSS to normalize abnormalities across browsers (normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css)
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *    ...normalize(),
 * }
 *
 * // styled-components usage
 * const GlobalStyle = createGlobalStyle`${normalize()}`
 *
 * // CSS as JS Output
 *
 * html {
 *   lineHeight: 1.15,
 *   textSizeAdjust: 100%,
 * } ...
 */
function normalize() {
  var _ref;

  return [(_ref = {
    html: {
      lineHeight: '1.15',
      textSizeAdjust: '100%'
    },
    body: {
      margin: '0'
    },
    main: {
      display: 'block'
    },
    h1: {
      fontSize: '2em',
      margin: '0.67em 0'
    },
    hr: {
      boxSizing: 'content-box',
      height: '0',
      overflow: 'visible'
    },
    pre: {
      fontFamily: 'monospace, monospace',
      fontSize: '1em'
    },
    a: {
      backgroundColor: 'transparent'
    },
    'abbr[title]': {
      borderBottom: 'none',
      textDecoration: 'underline'
    }
  }, _ref["b,\n    strong"] = {
    fontWeight: 'bolder'
  }, _ref["code,\n    kbd,\n    samp"] = {
    fontFamily: 'monospace, monospace',
    fontSize: '1em'
  }, _ref.small = {
    fontSize: '80%'
  }, _ref["sub,\n    sup"] = {
    fontSize: '75%',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'baseline'
  }, _ref.sub = {
    bottom: '-0.25em'
  }, _ref.sup = {
    top: '-0.5em'
  }, _ref.img = {
    borderStyle: 'none'
  }, _ref["button,\n    input,\n    optgroup,\n    select,\n    textarea"] = {
    fontFamily: 'inherit',
    fontSize: '100%',
    lineHeight: '1.15',
    margin: '0'
  }, _ref["button,\n    input"] = {
    overflow: 'visible'
  }, _ref["button,\n    select"] = {
    textTransform: 'none'
  }, _ref["button,\n    html [type=\"button\"],\n    [type=\"reset\"],\n    [type=\"submit\"]"] = {
    WebkitAppearance: 'button'
  }, _ref["button::-moz-focus-inner,\n    [type=\"button\"]::-moz-focus-inner,\n    [type=\"reset\"]::-moz-focus-inner,\n    [type=\"submit\"]::-moz-focus-inner"] = {
    borderStyle: 'none',
    padding: '0'
  }, _ref["button:-moz-focusring,\n    [type=\"button\"]:-moz-focusring,\n    [type=\"reset\"]:-moz-focusring,\n    [type=\"submit\"]:-moz-focusring"] = {
    outline: '1px dotted ButtonText'
  }, _ref.fieldset = {
    padding: '0.35em 0.625em 0.75em'
  }, _ref.legend = {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: '0',
    whiteSpace: 'normal'
  }, _ref.progress = {
    verticalAlign: 'baseline'
  }, _ref.textarea = {
    overflow: 'auto'
  }, _ref["[type=\"checkbox\"],\n    [type=\"radio\"]"] = {
    boxSizing: 'border-box',
    padding: '0'
  }, _ref["[type=\"number\"]::-webkit-inner-spin-button,\n    [type=\"number\"]::-webkit-outer-spin-button"] = {
    height: 'auto'
  }, _ref['[type="search"]'] = {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px'
  }, _ref['[type="search"]::-webkit-search-decoration'] = {
    WebkitAppearance: 'none'
  }, _ref['::-webkit-file-upload-button'] = {
    WebkitAppearance: 'button',
    font: 'inherit'
  }, _ref.details = {
    display: 'block'
  }, _ref.summary = {
    display: 'list-item'
  }, _ref.template = {
    display: 'none'
  }, _ref['[hidden]'] = {
    display: 'none'
  }, _ref), {
    'abbr[title]': {
      textDecoration: 'underline dotted'
    }
  }];
}

var _templateObject;

/**
 * CSS for declaring a radial gradient, including a fallback background-color. The fallback is either the first color-stop or an explicitly passed fallback color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${radialGradient({
 *     colorStops: ['#00FFFF 0%', 'rgba(0, 0, 255, 0) 50%', '#0000FF 95%'],
 *     extent: 'farthest-corner at 45px 45px',
 *     position: 'center',
 *     shape: 'ellipse',
 *   })}
 *`
 *
 * // CSS as JS Output
 *
 * div: {
 *   'backgroundColor': '#00FFFF',
 *   'backgroundImage': 'radial-gradient(center ellipse farthest-corner at 45px 45px, #00FFFF 0%, rgba(0, 0, 255, 0) 50%, #0000FF 95%)',
 * }
 */
function radialGradient(_ref) {
  var colorStops = _ref.colorStops,
      _ref$extent = _ref.extent,
      extent = _ref$extent === void 0 ? '' : _ref$extent,
      fallback = _ref.fallback,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? '' : _ref$position,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? '' : _ref$shape;

  if (!colorStops || colorStops.length < 2) {
    throw new PolishedError(57);
  }

  return {
    backgroundColor: fallback || colorStops[0].split(' ')[0],
    backgroundImage: constructGradientValue(_templateObject || (_templateObject = Object(_babel_runtime_helpers_esm_taggedTemplateLiteralLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(["radial-gradient(", "", "", "", ")"])), position, shape, extent, colorStops.join(', '))
  };
}

/**
 * A helper to generate a retina background image and non-retina
 * background image. The retina background image will output to a HiDPI media query. The mixin uses
 * a _2x.png filename suffix by default.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *  ...retinaImage('my-img')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${retinaImage('my-img')}
 * `
 *
 * // CSS as JS Output
 * div {
 *   backgroundImage: 'url(my-img.png)',
 *   '@media only screen and (-webkit-min-device-pixel-ratio: 1.3),
 *    only screen and (min--moz-device-pixel-ratio: 1.3),
 *    only screen and (-o-min-device-pixel-ratio: 1.3/1),
 *    only screen and (min-resolution: 144dpi),
 *    only screen and (min-resolution: 1.5dppx)': {
 *     backgroundImage: 'url(my-img_2x.png)',
 *   }
 * }
 */
function retinaImage(filename, backgroundSize, extension, retinaFilename, retinaSuffix) {
  var _ref;

  if (extension === void 0) {
    extension = 'png';
  }

  if (retinaSuffix === void 0) {
    retinaSuffix = '_2x';
  }

  if (!filename) {
    throw new PolishedError(58);
  } // Replace the dot at the beginning of the passed extension if one exists


  var ext = extension.replace(/^\./, '');
  var rFilename = retinaFilename ? retinaFilename + "." + ext : "" + filename + retinaSuffix + "." + ext;
  return _ref = {
    backgroundImage: "url(" + filename + "." + ext + ")"
  }, _ref[hiDPI()] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    backgroundImage: "url(" + rFilename + ")"
  }, backgroundSize ? {
    backgroundSize: backgroundSize
  } : {}), _ref;
}

/* eslint-disable key-spacing */
var functionsMap = {
  easeInBack: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
  easeInCirc: 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
  easeInCubic: 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
  easeInExpo: 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
  easeInQuad: 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
  easeInQuart: 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
  easeInQuint: 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
  easeInSine: 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
  easeOutBack: 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
  easeOutCubic: 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
  easeOutCirc: 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
  easeOutExpo: 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
  easeOutQuad: 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
  easeOutQuart: 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
  easeOutQuint: 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
  easeOutSine: 'cubic-bezier(0.390,  0.575, 0.565, 1.000)',
  easeInOutBack: 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
  easeInOutCirc: 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
  easeInOutCubic: 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
  easeInOutExpo: 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
  easeInOutQuad: 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
  easeInOutQuart: 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
  easeInOutQuint: 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
  easeInOutSine: 'cubic-bezier(0.445,  0.050, 0.550, 0.950)'
};
/* eslint-enable key-spacing */

function getTimingFunction(functionName) {
  return functionsMap[functionName];
}
/**
 * String to represent common easing functions as demonstrated here: (github.com/jaukia/easie).
 *
 * @deprecated - This will be deprecated in v5 in favor of `easeIn`, `easeOut`, `easeInOut`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   'transitionTimingFunction': timingFunctions('easeInQuad')
 * }
 *
 * // styled-components usage
 *  const div = styled.div`
 *   transitionTimingFunction: ${timingFunctions('easeInQuad')};
 * `
 *
 * // CSS as JS Output
 *
 * 'div': {
 *   'transitionTimingFunction': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
 * }
 */


function timingFunctions(timingFunction) {
  return getTimingFunction(timingFunction);
}

var getBorderWidth = function getBorderWidth(pointingDirection, height, width) {
  var fullWidth = "" + width[0] + (width[1] || '');
  var halfWidth = "" + width[0] / 2 + (width[1] || '');
  var fullHeight = "" + height[0] + (height[1] || '');
  var halfHeight = "" + height[0] / 2 + (height[1] || '');

  switch (pointingDirection) {
    case 'top':
      return "0 " + halfWidth + " " + fullHeight + " " + halfWidth;

    case 'topLeft':
      return fullWidth + " " + fullHeight + " 0 0";

    case 'left':
      return halfHeight + " " + fullWidth + " " + halfHeight + " 0";

    case 'bottomLeft':
      return fullWidth + " 0 0 " + fullHeight;

    case 'bottom':
      return fullHeight + " " + halfWidth + " 0 " + halfWidth;

    case 'bottomRight':
      return "0 0 " + fullWidth + " " + fullHeight;

    case 'right':
      return halfHeight + " 0 " + halfHeight + " " + fullWidth;

    case 'topRight':
    default:
      return "0 " + fullWidth + " " + fullHeight + " 0";
  }
};

var getBorderColor = function getBorderColor(pointingDirection, foregroundColor) {
  switch (pointingDirection) {
    case 'top':
    case 'bottomRight':
      return {
        borderBottomColor: foregroundColor
      };

    case 'right':
    case 'bottomLeft':
      return {
        borderLeftColor: foregroundColor
      };

    case 'bottom':
    case 'topLeft':
      return {
        borderTopColor: foregroundColor
      };

    case 'left':
    case 'topRight':
      return {
        borderRightColor: foregroundColor
      };

    default:
      throw new PolishedError(59);
  }
};
/**
 * CSS to represent triangle with any pointing direction with an optional background color.
 *
 * @example
 * // Styles as object usage
 *
 * const styles = {
 *   ...triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })
 * }
 *
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${triangle({ pointingDirection: 'right', width: '100px', height: '100px', foregroundColor: 'red' })}
 *
 *
 * // CSS as JS Output
 *
 * div: {
 *  'borderColor': 'transparent transparent transparent red',
 *  'borderStyle': 'solid',
 *  'borderWidth': '50px 0 50px 100px',
 *  'height': '0',
 *  'width': '0',
 * }
 */


function triangle(_ref) {
  var pointingDirection = _ref.pointingDirection,
      height = _ref.height,
      width = _ref.width,
      foregroundColor = _ref.foregroundColor,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? 'transparent' : _ref$backgroundColor;
  var widthAndUnit = getValueAndUnit(width);
  var heightAndUnit = getValueAndUnit(height);

  if (isNaN(heightAndUnit[0]) || isNaN(widthAndUnit[0])) {
    throw new PolishedError(60);
  }

  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    width: '0',
    height: '0',
    borderColor: backgroundColor
  }, getBorderColor(pointingDirection, foregroundColor), {
    borderStyle: 'solid',
    borderWidth: getBorderWidth(pointingDirection, heightAndUnit, widthAndUnit)
  });
}

/**
 * Provides an easy way to change the `wordWrap` property.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * // CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */
function wordWrap(wrap) {
  if (wrap === void 0) {
    wrap = 'break-word';
  }

  var wordBreak = wrap === 'break-word' ? 'break-all' : wrap;
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak: wordBreak
  };
}

function colorToInt(color) {
  return Math.round(color * 255);
}

function convertToInt(red, green, blue) {
  return colorToInt(red) + "," + colorToInt(green) + "," + colorToInt(blue);
}

function hslToRgb(hue, saturation, lightness, convert) {
  if (convert === void 0) {
    convert = convertToInt;
  }

  if (saturation === 0) {
    // achromatic
    return convert(lightness, lightness, lightness);
  } // formulae from https://en.wikipedia.org/wiki/HSL_and_HSV


  var huePrime = (hue % 360 + 360) % 360 / 60;
  var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
  var secondComponent = chroma * (1 - Math.abs(huePrime % 2 - 1));
  var red = 0;
  var green = 0;
  var blue = 0;

  if (huePrime >= 0 && huePrime < 1) {
    red = chroma;
    green = secondComponent;
  } else if (huePrime >= 1 && huePrime < 2) {
    red = secondComponent;
    green = chroma;
  } else if (huePrime >= 2 && huePrime < 3) {
    green = chroma;
    blue = secondComponent;
  } else if (huePrime >= 3 && huePrime < 4) {
    green = secondComponent;
    blue = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    red = secondComponent;
    blue = chroma;
  } else if (huePrime >= 5 && huePrime < 6) {
    red = chroma;
    blue = secondComponent;
  }

  var lightnessModification = lightness - chroma / 2;
  var finalRed = red + lightnessModification;
  var finalGreen = green + lightnessModification;
  var finalBlue = blue + lightnessModification;
  return convert(finalRed, finalGreen, finalBlue);
}

var namedColorMap = {
  aliceblue: 'f0f8ff',
  antiquewhite: 'faebd7',
  aqua: '00ffff',
  aquamarine: '7fffd4',
  azure: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '000',
  blanchedalmond: 'ffebcd',
  blue: '0000ff',
  blueviolet: '8a2be2',
  brown: 'a52a2a',
  burlywood: 'deb887',
  cadetblue: '5f9ea0',
  chartreuse: '7fff00',
  chocolate: 'd2691e',
  coral: 'ff7f50',
  cornflowerblue: '6495ed',
  cornsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: '00ffff',
  darkblue: '00008b',
  darkcyan: '008b8b',
  darkgoldenrod: 'b8860b',
  darkgray: 'a9a9a9',
  darkgreen: '006400',
  darkgrey: 'a9a9a9',
  darkkhaki: 'bdb76b',
  darkmagenta: '8b008b',
  darkolivegreen: '556b2f',
  darkorange: 'ff8c00',
  darkorchid: '9932cc',
  darkred: '8b0000',
  darksalmon: 'e9967a',
  darkseagreen: '8fbc8f',
  darkslateblue: '483d8b',
  darkslategray: '2f4f4f',
  darkslategrey: '2f4f4f',
  darkturquoise: '00ced1',
  darkviolet: '9400d3',
  deeppink: 'ff1493',
  deepskyblue: '00bfff',
  dimgray: '696969',
  dimgrey: '696969',
  dodgerblue: '1e90ff',
  firebrick: 'b22222',
  floralwhite: 'fffaf0',
  forestgreen: '228b22',
  fuchsia: 'ff00ff',
  gainsboro: 'dcdcdc',
  ghostwhite: 'f8f8ff',
  gold: 'ffd700',
  goldenrod: 'daa520',
  gray: '808080',
  green: '008000',
  greenyellow: 'adff2f',
  grey: '808080',
  honeydew: 'f0fff0',
  hotpink: 'ff69b4',
  indianred: 'cd5c5c',
  indigo: '4b0082',
  ivory: 'fffff0',
  khaki: 'f0e68c',
  lavender: 'e6e6fa',
  lavenderblush: 'fff0f5',
  lawngreen: '7cfc00',
  lemonchiffon: 'fffacd',
  lightblue: 'add8e6',
  lightcoral: 'f08080',
  lightcyan: 'e0ffff',
  lightgoldenrodyellow: 'fafad2',
  lightgray: 'd3d3d3',
  lightgreen: '90ee90',
  lightgrey: 'd3d3d3',
  lightpink: 'ffb6c1',
  lightsalmon: 'ffa07a',
  lightseagreen: '20b2aa',
  lightskyblue: '87cefa',
  lightslategray: '789',
  lightslategrey: '789',
  lightsteelblue: 'b0c4de',
  lightyellow: 'ffffe0',
  lime: '0f0',
  limegreen: '32cd32',
  linen: 'faf0e6',
  magenta: 'f0f',
  maroon: '800000',
  mediumaquamarine: '66cdaa',
  mediumblue: '0000cd',
  mediumorchid: 'ba55d3',
  mediumpurple: '9370db',
  mediumseagreen: '3cb371',
  mediumslateblue: '7b68ee',
  mediumspringgreen: '00fa9a',
  mediumturquoise: '48d1cc',
  mediumvioletred: 'c71585',
  midnightblue: '191970',
  mintcream: 'f5fffa',
  mistyrose: 'ffe4e1',
  moccasin: 'ffe4b5',
  navajowhite: 'ffdead',
  navy: '000080',
  oldlace: 'fdf5e6',
  olive: '808000',
  olivedrab: '6b8e23',
  orange: 'ffa500',
  orangered: 'ff4500',
  orchid: 'da70d6',
  palegoldenrod: 'eee8aa',
  palegreen: '98fb98',
  paleturquoise: 'afeeee',
  palevioletred: 'db7093',
  papayawhip: 'ffefd5',
  peachpuff: 'ffdab9',
  peru: 'cd853f',
  pink: 'ffc0cb',
  plum: 'dda0dd',
  powderblue: 'b0e0e6',
  purple: '800080',
  rebeccapurple: '639',
  red: 'f00',
  rosybrown: 'bc8f8f',
  royalblue: '4169e1',
  saddlebrown: '8b4513',
  salmon: 'fa8072',
  sandybrown: 'f4a460',
  seagreen: '2e8b57',
  seashell: 'fff5ee',
  sienna: 'a0522d',
  silver: 'c0c0c0',
  skyblue: '87ceeb',
  slateblue: '6a5acd',
  slategray: '708090',
  slategrey: '708090',
  snow: 'fffafa',
  springgreen: '00ff7f',
  steelblue: '4682b4',
  tan: 'd2b48c',
  teal: '008080',
  thistle: 'd8bfd8',
  tomato: 'ff6347',
  turquoise: '40e0d0',
  violet: 'ee82ee',
  wheat: 'f5deb3',
  white: 'fff',
  whitesmoke: 'f5f5f5',
  yellow: 'ff0',
  yellowgreen: '9acd32'
};
/**
 * Checks if a string is a CSS named color and returns its equivalent hex value, otherwise returns the original color.
 * @private
 */

function nameToHex(color) {
  if (typeof color !== 'string') return color;
  var normalizedColorName = color.toLowerCase();
  return namedColorMap[normalizedColorName] ? "#" + namedColorMap[normalizedColorName] : color;
}

var hexRegex = /^#[a-fA-F0-9]{6}$/;
var hexRgbaRegex = /^#[a-fA-F0-9]{8}$/;
var reducedHexRegex = /^#[a-fA-F0-9]{3}$/;
var reducedRgbaHexRegex = /^#[a-fA-F0-9]{4}$/;
var rgbRegex = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i;
var rgbaRegex = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
var hslRegex = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i;
var hslaRegex = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
/**
 * Returns an RgbColor or RgbaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a RgbColor or RgbaColor object back to a string.
 *
 * @example
 * // Assigns `{ red: 255, green: 0, blue: 0 }` to color1
 * const color1 = parseToRgb('rgb(255, 0, 0)');
 * // Assigns `{ red: 92, green: 102, blue: 112, alpha: 0.75 }` to color2
 * const color2 = parseToRgb('hsla(210, 10%, 40%, 0.75)');
 */

function parseToRgb(color) {
  if (typeof color !== 'string') {
    throw new PolishedError(3);
  }

  var normalizedColor = nameToHex(color);

  if (normalizedColor.match(hexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16)
    };
  }

  if (normalizedColor.match(hexRgbaRegex)) {
    var alpha = parseFloat((parseInt("" + normalizedColor[7] + normalizedColor[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[2], 16),
      green: parseInt("" + normalizedColor[3] + normalizedColor[4], 16),
      blue: parseInt("" + normalizedColor[5] + normalizedColor[6], 16),
      alpha: alpha
    };
  }

  if (normalizedColor.match(reducedHexRegex)) {
    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16)
    };
  }

  if (normalizedColor.match(reducedRgbaHexRegex)) {
    var _alpha = parseFloat((parseInt("" + normalizedColor[4] + normalizedColor[4], 16) / 255).toFixed(2));

    return {
      red: parseInt("" + normalizedColor[1] + normalizedColor[1], 16),
      green: parseInt("" + normalizedColor[2] + normalizedColor[2], 16),
      blue: parseInt("" + normalizedColor[3] + normalizedColor[3], 16),
      alpha: _alpha
    };
  }

  var rgbMatched = rgbRegex.exec(normalizedColor);

  if (rgbMatched) {
    return {
      red: parseInt("" + rgbMatched[1], 10),
      green: parseInt("" + rgbMatched[2], 10),
      blue: parseInt("" + rgbMatched[3], 10)
    };
  }

  var rgbaMatched = rgbaRegex.exec(normalizedColor.substring(0, 50));

  if (rgbaMatched) {
    return {
      red: parseInt("" + rgbaMatched[1], 10),
      green: parseInt("" + rgbaMatched[2], 10),
      blue: parseInt("" + rgbaMatched[3], 10),
      alpha: parseFloat("" + rgbaMatched[4]) > 1 ? parseFloat("" + rgbaMatched[4]) / 100 : parseFloat("" + rgbaMatched[4])
    };
  }

  var hslMatched = hslRegex.exec(normalizedColor);

  if (hslMatched) {
    var hue = parseInt("" + hslMatched[1], 10);
    var saturation = parseInt("" + hslMatched[2], 10) / 100;
    var lightness = parseInt("" + hslMatched[3], 10) / 100;
    var rgbColorString = "rgb(" + hslToRgb(hue, saturation, lightness) + ")";
    var hslRgbMatched = rgbRegex.exec(rgbColorString);

    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString);
    }

    return {
      red: parseInt("" + hslRgbMatched[1], 10),
      green: parseInt("" + hslRgbMatched[2], 10),
      blue: parseInt("" + hslRgbMatched[3], 10)
    };
  }

  var hslaMatched = hslaRegex.exec(normalizedColor.substring(0, 50));

  if (hslaMatched) {
    var _hue = parseInt("" + hslaMatched[1], 10);

    var _saturation = parseInt("" + hslaMatched[2], 10) / 100;

    var _lightness = parseInt("" + hslaMatched[3], 10) / 100;

    var _rgbColorString = "rgb(" + hslToRgb(_hue, _saturation, _lightness) + ")";

    var _hslRgbMatched = rgbRegex.exec(_rgbColorString);

    if (!_hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, _rgbColorString);
    }

    return {
      red: parseInt("" + _hslRgbMatched[1], 10),
      green: parseInt("" + _hslRgbMatched[2], 10),
      blue: parseInt("" + _hslRgbMatched[3], 10),
      alpha: parseFloat("" + hslaMatched[4]) > 1 ? parseFloat("" + hslaMatched[4]) / 100 : parseFloat("" + hslaMatched[4])
    };
  }

  throw new PolishedError(5);
}

function rgbToHsl(color) {
  // make sure rgb are contained in a set of [0, 255]
  var red = color.red / 255;
  var green = color.green / 255;
  var blue = color.blue / 255;
  var max = Math.max(red, green, blue);
  var min = Math.min(red, green, blue);
  var lightness = (max + min) / 2;

  if (max === min) {
    // achromatic
    if (color.alpha !== undefined) {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness,
        alpha: color.alpha
      };
    } else {
      return {
        hue: 0,
        saturation: 0,
        lightness: lightness
      };
    }
  }

  var hue;
  var delta = max - min;
  var saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0);
      break;

    case green:
      hue = (blue - red) / delta + 2;
      break;

    default:
      // blue case
      hue = (red - green) / delta + 4;
      break;
  }

  hue *= 60;

  if (color.alpha !== undefined) {
    return {
      hue: hue,
      saturation: saturation,
      lightness: lightness,
      alpha: color.alpha
    };
  }

  return {
    hue: hue,
    saturation: saturation,
    lightness: lightness
  };
}

/**
 * Returns an HslColor or HslaColor object. This utility function is only useful
 * if want to extract a color component. With the color util `toColorString` you
 * can convert a HslColor or HslaColor object back to a string.
 *
 * @example
 * // Assigns `{ hue: 0, saturation: 1, lightness: 0.5 }` to color1
 * const color1 = parseToHsl('rgb(255, 0, 0)');
 * // Assigns `{ hue: 128, saturation: 1, lightness: 0.5, alpha: 0.75 }` to color2
 * const color2 = parseToHsl('hsla(128, 100%, 50%, 0.75)');
 */
function parseToHsl(color) {
  // Note: At a later stage we can optimize this function as right now a hsl
  // color would be parsed converted to rgb values and converted back to hsl.
  return rgbToHsl(parseToRgb(color));
}

/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
var reduceHexValue = function reduceHexValue(value) {
  if (value.length === 7 && value[1] === value[2] && value[3] === value[4] && value[5] === value[6]) {
    return "#" + value[1] + value[3] + value[5];
  }

  return value;
};

var reduceHexValue$1 = reduceHexValue;

function numberToHex(value) {
  var hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function colorToHex(color) {
  return numberToHex(Math.round(color * 255));
}

function convertToHex(red, green, blue) {
  return reduceHexValue$1("#" + colorToHex(red) + colorToHex(green) + colorToHex(blue));
}

function hslToHex(hue, saturation, lightness) {
  return hslToRgb(hue, saturation, lightness, convertToHex);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsl(359, 0.75, 0.4),
 *   background: hsl({ hue: 360, saturation: 0.75, lightness: 0.4 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsl(359, 0.75, 0.4)};
 *   background: ${hsl({ hue: 360, saturation: 0.75, lightness: 0.4 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#b3191c";
 *   background: "#b3191c";
 * }
 */
function hsl(value, saturation, lightness) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number') {
    return hslToHex(value, saturation, lightness);
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined) {
    return hslToHex(value.hue, value.saturation, value.lightness);
  }

  throw new PolishedError(1);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hsla(359, 0.75, 0.4, 0.7),
 *   background: hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 }),
 *   background: hsla(359, 0.75, 0.4, 1),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hsla(359, 0.75, 0.4, 0.7)};
 *   background: ${hsla({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0,7 })};
 *   background: ${hsla(359, 0.75, 0.4, 1)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(179,25,28,0.7)";
 *   background: "rgba(179,25,28,0.7)";
 *   background: "#b3191c";
 * }
 */
function hsla(value, saturation, lightness, alpha) {
  if (typeof value === 'number' && typeof saturation === 'number' && typeof lightness === 'number' && typeof alpha === 'number') {
    return alpha >= 1 ? hslToHex(value, saturation, lightness) : "rgba(" + hslToRgb(value, saturation, lightness) + "," + alpha + ")";
  } else if (typeof value === 'object' && saturation === undefined && lightness === undefined && alpha === undefined) {
    return value.alpha >= 1 ? hslToHex(value.hue, value.saturation, value.lightness) : "rgba(" + hslToRgb(value.hue, value.saturation, value.lightness) + "," + value.alpha + ")";
  }

  throw new PolishedError(2);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible hex notation.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgb(255, 205, 100),
 *   background: rgb({ red: 255, green: 205, blue: 100 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgb(255, 205, 100)};
 *   background: ${rgb({ red: 255, green: 205, blue: 100 })};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffcd64";
 *   background: "#ffcd64";
 * }
 */
function rgb(value, green, blue) {
  if (typeof value === 'number' && typeof green === 'number' && typeof blue === 'number') {
    return reduceHexValue$1("#" + numberToHex(value) + numberToHex(green) + numberToHex(blue));
  } else if (typeof value === 'object' && green === undefined && blue === undefined) {
    return reduceHexValue$1("#" + numberToHex(value.red) + numberToHex(value.green) + numberToHex(value.blue));
  }

  throw new PolishedError(6);
}

/**
 * Returns a string value for the color. The returned result is the smallest possible rgba or hex notation.
 *
 * Can also be used to fade a color by passing a hex value or named CSS color along with an alpha value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgba(255, 205, 100, 0.7),
 *   background: rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 }),
 *   background: rgba(255, 205, 100, 1),
 *   background: rgba('#ffffff', 0.4),
 *   background: rgba('black', 0.7),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgba(255, 205, 100, 0.7)};
 *   background: ${rgba({ red: 255, green: 205, blue: 100, alpha: 0.7 })};
 *   background: ${rgba(255, 205, 100, 1)};
 *   background: ${rgba('#ffffff', 0.4)};
 *   background: ${rgba('black', 0.7)};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,205,100,0.7)";
 *   background: "rgba(255,205,100,0.7)";
 *   background: "#ffcd64";
 *   background: "rgba(255,255,255,0.4)";
 *   background: "rgba(0,0,0,0.7)";
 * }
 */
function rgba(firstValue, secondValue, thirdValue, fourthValue) {
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    var rgbValue = parseToRgb(firstValue);
    return "rgba(" + rgbValue.red + "," + rgbValue.green + "," + rgbValue.blue + "," + secondValue + ")";
  } else if (typeof firstValue === 'number' && typeof secondValue === 'number' && typeof thirdValue === 'number' && typeof fourthValue === 'number') {
    return fourthValue >= 1 ? rgb(firstValue, secondValue, thirdValue) : "rgba(" + firstValue + "," + secondValue + "," + thirdValue + "," + fourthValue + ")";
  } else if (typeof firstValue === 'object' && secondValue === undefined && thirdValue === undefined && fourthValue === undefined) {
    return firstValue.alpha >= 1 ? rgb(firstValue.red, firstValue.green, firstValue.blue) : "rgba(" + firstValue.red + "," + firstValue.green + "," + firstValue.blue + "," + firstValue.alpha + ")";
  }

  throw new PolishedError(7);
}

var isRgb = function isRgb(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isRgba = function isRgba(color) {
  return typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number' && typeof color.alpha === 'number';
};

var isHsl = function isHsl(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined');
};

var isHsla = function isHsla(color) {
  return typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number' && typeof color.alpha === 'number';
};
/**
 * Converts a RgbColor, RgbaColor, HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb`, `rgba`, `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: toColorString({ red: 255, green: 205, blue: 100 }),
 *   background: toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 *   background: toColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${toColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${toColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 *   background: ${toColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${toColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */


function toColorString(color) {
  if (typeof color !== 'object') throw new PolishedError(8);
  if (isRgba(color)) return rgba(color);
  if (isRgb(color)) return rgb(color);
  if (isHsla(color)) return hsla(color);
  if (isHsl(color)) return hsl(color);
  throw new PolishedError(8);
}

// Type definitions taken from https://github.com/gcanti/flow-static-land/blob/master/src/Fun.js
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-redeclare
function curried(f, length, acc) {
  return function fn() {
    // eslint-disable-next-line prefer-rest-params
    var combined = acc.concat(Array.prototype.slice.call(arguments));
    return combined.length >= length ? f.apply(this, combined) : curried(f, length, combined);
  };
} // eslint-disable-next-line no-redeclare


function curry(f) {
  // eslint-disable-line no-redeclare
  return curried(f, f.length, []);
}

/**
 * Changes the hue of the color. Hue is a number between 0 to 360. The first
 * argument for adjustHue is the amount of degrees the color is rotated around
 * the color wheel, always producing a positive hue value.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: adjustHue(180, '#448'),
 *   background: adjustHue('180', 'rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${adjustHue(180, '#448')};
 *   background: ${adjustHue('180', 'rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#888844";
 *   background: "rgba(136,136,68,0.7)";
 * }
 */

function adjustHue(degree, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    hue: hslColor.hue + parseFloat(degree)
  }));
} // prettier-ignore


var curriedAdjustHue = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(adjustHue);
var curriedAdjustHue$1 = curriedAdjustHue;

/**
 * Returns the complement of the provided color. This is identical to adjustHue(180, <color>).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: complement('#448'),
 *   background: complement('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${complement('#448')};
 *   background: ${complement('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#884";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function complement(color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    hue: (hslColor.hue + 180) % 360
  }));
}

function guard(lowerBoundary, upperBoundary, value) {
  return Math.max(lowerBoundary, Math.min(upperBoundary, value));
}

/**
 * Returns a string value for the darkened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: darken(0.2, '#FFCD64'),
 *   background: darken('0.2', 'rgba(255,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${darken(0.2, '#FFCD64')};
 *   background: ${darken('0.2', 'rgba(255,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#ffbd31";
 *   background: "rgba(255,189,49,0.7)";
 * }
 */

function darken(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDarken = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(darken);
var curriedDarken$1 = curriedDarken;

/**
 * Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

function desaturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation - parseFloat(amount))
  }));
} // prettier-ignore


var curriedDesaturate = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(desaturate);
var curriedDesaturate$1 = curriedDesaturate;

/**
 * Returns a number (float) representing the luminance of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff',
 *   background: getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)',
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${getLuminance('#CCCD64') >= getLuminance('#0000ff') ? '#CCCD64' : '#0000ff'};
 *   background: ${getLuminance('rgba(58, 133, 255, 1)') >= getLuminance('rgba(255, 57, 149, 1)') ?
 *                             'rgba(58, 133, 255, 1)' :
 *                             'rgba(255, 57, 149, 1)'};
 *
 * // CSS in JS Output
 *
 * div {
 *   background: "#CCCD64";
 *   background: "rgba(58, 133, 255, 1)";
 * }
 */

function getLuminance(color) {
  if (color === 'transparent') return 0;
  var rgbColor = parseToRgb(color);

  var _Object$keys$map = Object.keys(rgbColor).map(function (key) {
    var channel = rgbColor[key] / 255;
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
  }),
      r = _Object$keys$map[0],
      g = _Object$keys$map[1],
      b = _Object$keys$map[2];

  return parseFloat((0.2126 * r + 0.7152 * g + 0.0722 * b).toFixed(3));
}

/**
 * Returns the contrast ratio between two colors based on
 * [W3's recommended equation for calculating contrast](http://www.w3.org/TR/WCAG20/#contrast-ratiodef).
 *
 * @example
 * const contrastRatio = getContrast('#444', '#fff');
 */

function getContrast(color1, color2) {
  var luminance1 = getLuminance(color1);
  var luminance2 = getLuminance(color2);
  return parseFloat((luminance1 > luminance2 ? (luminance1 + 0.05) / (luminance2 + 0.05) : (luminance2 + 0.05) / (luminance1 + 0.05)).toFixed(2));
}

/**
 * Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

function grayscale(color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    saturation: 0
  }));
}

/**
 * Converts a HslColor or HslaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `hsl` or `hsla`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 }),
 *   background: hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${hslToColorString({ hue: 240, saturation: 1, lightness: 0.5 })};
 *   background: ${hslToColorString({ hue: 360, saturation: 0.75, lightness: 0.4, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#00f";
 *   background: "rgba(179,25,25,0.72)";
 * }
 */
function hslToColorString(color) {
  if (typeof color === 'object' && typeof color.hue === 'number' && typeof color.saturation === 'number' && typeof color.lightness === 'number') {
    if (color.alpha && typeof color.alpha === 'number') {
      return hsla({
        hue: color.hue,
        saturation: color.saturation,
        lightness: color.lightness,
        alpha: color.alpha
      });
    }

    return hsl({
      hue: color.hue,
      saturation: color.saturation,
      lightness: color.lightness
    });
  }

  throw new PolishedError(45);
}

/**
 * Inverts the red, green and blue values of a color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */

function invert(color) {
  if (color === 'transparent') return color; // parse color string to rgb

  var value = parseToRgb(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, value, {
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue
  }));
}

/**
 * Returns a string value for the lightened color.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: lighten(0.2, '#CCCD64'),
 *   background: lighten('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${lighten(0.2, '#FFCD64')};
 *   background: ${lighten('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e5e6b1";
 *   background: "rgba(229,230,177,0.7)";
 * }
 */

function lighten(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    lightness: guard(0, 1, hslColor.lightness + parseFloat(amount))
  }));
} // prettier-ignore


var curriedLighten = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(lighten);
var curriedLighten$1 = curriedLighten;

/**
 * Determines which contrast guidelines have been met for two colors.
 * Based on the [contrast calculations recommended by W3](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html).
 *
 * @example
 * const scores = meetsContrastGuidelines('#444', '#fff');
 */
function meetsContrastGuidelines(color1, color2) {
  var contrastRatio = getContrast(color1, color2);
  return {
    AA: contrastRatio >= 4.5,
    AALarge: contrastRatio >= 3,
    AAA: contrastRatio >= 7,
    AAALarge: contrastRatio >= 4.5
  };
}

/**
 * Mixes the two provided colors together by calculating the average of each of the RGB components weighted to the first color by the provided weight.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: mix(0.5, '#f00', '#00f')
 *   background: mix(0.25, '#f00', '#00f')
 *   background: mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${mix(0.5, '#f00', '#00f')};
 *   background: ${mix(0.25, '#f00', '#00f')};
 *   background: ${mix('0.5', 'rgba(255, 0, 0, 0.5)', '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#7f007f";
 *   background: "#3f00bf";
 *   background: "rgba(63, 0, 191, 0.75)";
 * }
 */

function mix(weight, color, otherColor) {
  if (color === 'transparent') return otherColor;
  if (otherColor === 'transparent') return color;
  if (weight === 0) return otherColor;
  var parsedColor1 = parseToRgb(color);

  var color1 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor1, {
    alpha: typeof parsedColor1.alpha === 'number' ? parsedColor1.alpha : 1
  });

  var parsedColor2 = parseToRgb(otherColor);

  var color2 = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor2, {
    alpha: typeof parsedColor2.alpha === 'number' ? parsedColor2.alpha : 1
  }); // The formula is copied from the original Sass implementation:
  // http://sass-lang.com/documentation/Sass/Script/Functions.html#mix-instance_method


  var alphaDelta = color1.alpha - color2.alpha;
  var x = parseFloat(weight) * 2 - 1;
  var y = x * alphaDelta === -1 ? x : x + alphaDelta;
  var z = 1 + x * alphaDelta;
  var weight1 = (y / z + 1) / 2.0;
  var weight2 = 1 - weight1;
  var mixedColor = {
    red: Math.floor(color1.red * weight1 + color2.red * weight2),
    green: Math.floor(color1.green * weight1 + color2.green * weight2),
    blue: Math.floor(color1.blue * weight1 + color2.blue * weight2),
    alpha: color1.alpha * parseFloat(weight) + color2.alpha * (1 - parseFloat(weight))
  };
  return rgba(mixedColor);
} // prettier-ignore


var curriedMix = /*#__PURE__*/curry
/* ::<number | string, string, string, string> */
(mix);
var mix$1 = curriedMix;

/**
 * Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify('0.5', 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify('0.5', 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

function opacify(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor, {
    alpha: guard(0, 1, (alpha * 100 + parseFloat(amount) * 100) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedOpacify = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(opacify);
var curriedOpacify$1 = curriedOpacify;

var defaultReturnIfLightColor = '#000';
var defaultReturnIfDarkColor = '#fff';
/**
 * Returns black or white (or optional passed colors) for best
 * contrast depending on the luminosity of the given color.
 * When passing custom return colors, strict mode ensures that the
 * return color always meets or exceeds WCAG level AA or greater. If this test
 * fails, the default return color (black or white) is returned in place of the
 * custom return color. You can optionally turn off strict mode.
 *
 * Follows [W3C specs for readability](https://www.w3.org/TR/WCAG20-TECHS/G18.html).
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('black', '#001', '#ff8'),
 *   color: readableColor('white', '#001', '#ff8'),
 *   color: readableColor('red', '#333', '#ddd', true)
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('black', '#001', '#ff8')};
 *   color: ${readableColor('white', '#001', '#ff8')};
 *   color: ${readableColor('red', '#333', '#ddd', true)};
 * `
 *
 * // CSS in JS Output
 * element {
 *   color: "#fff";
 *   color: "#ff8";
 *   color: "#001";
 *   color: "#000";
 * }
 */

function readableColor(color, returnIfLightColor, returnIfDarkColor, strict) {
  if (returnIfLightColor === void 0) {
    returnIfLightColor = defaultReturnIfLightColor;
  }

  if (returnIfDarkColor === void 0) {
    returnIfDarkColor = defaultReturnIfDarkColor;
  }

  if (strict === void 0) {
    strict = true;
  }

  var isColorLight = getLuminance(color) > 0.179;
  var preferredReturnColor = isColorLight ? returnIfLightColor : returnIfDarkColor;

  if (!strict || getContrast(color, preferredReturnColor) >= 4.5) {
    return preferredReturnColor;
  }

  return isColorLight ? defaultReturnIfLightColor : defaultReturnIfDarkColor;
}

/**
 * Converts a RgbColor or RgbaColor object to a color string.
 * This util is useful in case you only know on runtime which color object is
 * used. Otherwise we recommend to rely on `rgb` or `rgba`.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: rgbToColorString({ red: 255, green: 205, blue: 100 }),
 *   background: rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 }),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100 })};
 *   background: ${rgbToColorString({ red: 255, green: 205, blue: 100, alpha: 0.72 })};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#ffcd64";
 *   background: "rgba(255,205,100,0.72)";
 * }
 */
function rgbToColorString(color) {
  if (typeof color === 'object' && typeof color.red === 'number' && typeof color.green === 'number' && typeof color.blue === 'number') {
    if (typeof color.alpha === 'number') {
      return rgba({
        red: color.red,
        green: color.green,
        blue: color.blue,
        alpha: color.alpha
      });
    }

    return rgb({
      red: color.red,
      green: color.green,
      blue: color.blue
    });
  }

  throw new PolishedError(46);
}

/**
 * Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate('0.2', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate('0.2', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */

function saturate(amount, color) {
  if (color === 'transparent') return color;
  var hslColor = parseToHsl(color);
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, hslColor, {
    saturation: guard(0, 1, hslColor.saturation + parseFloat(amount))
  }));
} // prettier-ignore


var curriedSaturate = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(saturate);
var curriedSaturate$1 = curriedSaturate;

/**
 * Sets the hue of a color to the provided value. The hue range can be
 * from 0 and 359.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setHue(42, '#CCCD64'),
 *   background: setHue('244', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setHue(42, '#CCCD64')};
 *   background: ${setHue('244', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#cdae64";
 *   background: "rgba(107,100,205,0.7)";
 * }
 */

function setHue(hue, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    hue: parseFloat(hue)
  }));
} // prettier-ignore


var curriedSetHue = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(setHue);
var curriedSetHue$1 = curriedSetHue;

/**
 * Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

function setLightness(lightness, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    lightness: parseFloat(lightness)
  }));
} // prettier-ignore


var curriedSetLightness = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(setLightness);
var curriedSetLightness$1 = curriedSetLightness;

/**
 * Sets the saturation of a color to the provided value. The saturation range can be
 * from 0 and 1.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation('0.75', 'rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation('0.75', 'rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

function setSaturation(saturation, color) {
  if (color === 'transparent') return color;
  return toColorString(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parseToHsl(color), {
    saturation: parseFloat(saturation)
  }));
} // prettier-ignore


var curriedSetSaturation = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(setSaturation);
var curriedSetSaturation$1 = curriedSetSaturation;

/**
 * Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#00003f";
 * }
 */

function shade(percentage, color) {
  if (color === 'transparent') return color;
  return mix$1(parseFloat(percentage), 'rgb(0, 0, 0)', color);
} // prettier-ignore


var curriedShade = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(shade);
var curriedShade$1 = curriedShade;

/**
 * Tints a color by mixing it with white. `tint` can produce
 * hue shifts, where as `lighten` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: tint(0.25, '#00f')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${tint(0.25, '#00f')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "#bfbfff";
 * }
 */

function tint(percentage, color) {
  if (color === 'transparent') return color;
  return mix$1(parseFloat(percentage), 'rgb(255, 255, 255)', color);
} // prettier-ignore


var curriedTint = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(tint);
var curriedTint$1 = curriedTint;

/**
 * Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff'),
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize('0.5', 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')};
 *   background: ${transparentize('0.5', 'rgba(255, 0, 0, 0.8)')};
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

function transparentize(amount, color) {
  if (color === 'transparent') return color;
  var parsedColor = parseToRgb(color);
  var alpha = typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1;

  var colorWithAlpha = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parsedColor, {
    alpha: guard(0, 1, +(alpha * 100 - parseFloat(amount) * 100).toFixed(2) / 100)
  });

  return rgba(colorWithAlpha);
} // prettier-ignore


var curriedTransparentize = /*#__PURE__*/curry
/* ::<number | string, string, string> */
(transparentize);
var curriedTransparentize$1 = curriedTransparentize;

/**
 * Shorthand for easily setting the animation property. Allows either multiple arrays with animations
 * or a single animation spread over the arguments.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation(['rotate', '1s', 'ease-in-out'], ['colorchange', '2s'])}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out, colorchange 2s'
 * }
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...animation('rotate', '1s', 'ease-in-out')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${animation('rotate', '1s', 'ease-in-out')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'animation': 'rotate 1s ease-in-out'
 * }
 */
function animation() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  // Allow single or multiple animations passed
  var multiMode = Array.isArray(args[0]);

  if (!multiMode && args.length > 8) {
    throw new PolishedError(64);
  }

  var code = args.map(function (arg) {
    if (multiMode && !Array.isArray(arg) || !multiMode && Array.isArray(arg)) {
      throw new PolishedError(65);
    }

    if (Array.isArray(arg) && arg.length > 8) {
      throw new PolishedError(66);
    }

    return Array.isArray(arg) ? arg.join(' ') : arg;
  }).join(', ');
  return {
    animation: code
  };
}

/**
 * Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */
function backgroundImages() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    backgroundImage: properties.join(', ')
  };
}

/**
 * Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */
function backgrounds() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  return {
    background: properties.join(', ')
  };
}

var sideMap = ['top', 'right', 'bottom', 'left'];
/**
 * Shorthand for the border property that splits out individual properties for use with tools like Fela and Styletron. A side keyword can optionally be passed to target only one side's border properties.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...border('1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderColor': 'red',
 *   'borderStyle': 'solid',
 *   'borderWidth': `1px`,
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...border('top', '1px', 'solid', 'red')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${border('top', '1px', 'solid', 'red')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderTopStyle': 'solid',
 *   'borderTopWidth': `1px`,
 * }
 */

function border(sideKeyword) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (typeof sideKeyword === 'string' && sideMap.indexOf(sideKeyword) >= 0) {
    var _ref;

    return _ref = {}, _ref["border" + capitalizeString(sideKeyword) + "Width"] = values[0], _ref["border" + capitalizeString(sideKeyword) + "Style"] = values[1], _ref["border" + capitalizeString(sideKeyword) + "Color"] = values[2], _ref;
  } else {
    values.unshift(sideKeyword);
    return {
      borderWidth: values[0],
      borderStyle: values[1],
      borderColor: values[2]
    };
  }
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */
function borderColor() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderColor'].concat(values));
}

/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */
function borderRadius(side, radius) {
  var uppercaseSide = capitalizeString(side);

  if (!radius && radius !== 0) {
    throw new PolishedError(62);
  }

  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    var _ref;

    return _ref = {}, _ref["border" + uppercaseSide + "RightRadius"] = radius, _ref["border" + uppercaseSide + "LeftRadius"] = radius, _ref;
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    var _ref2;

    return _ref2 = {}, _ref2["borderTop" + uppercaseSide + "Radius"] = radius, _ref2["borderBottom" + uppercaseSide + "Radius"] = radius, _ref2;
  }

  throw new PolishedError(63);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */
function borderStyle() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderStyle'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */
function borderWidth() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['borderWidth'].concat(values));
}

function generateSelectors(template, state) {
  var stateSuffix = state ? ":" + state : '';
  return template(stateSuffix);
}
/**
 * Function helper that adds an array of states to a template of selectors. Used in textInputs and buttons.
 * @private
 */


function statefulSelectors(states, template, stateMap) {
  if (!template) throw new PolishedError(67);
  if (states.length === 0) return generateSelectors(template, null);
  var selectors = [];

  for (var i = 0; i < states.length; i += 1) {
    if (stateMap && stateMap.indexOf(states[i]) < 0) {
      throw new PolishedError(68);
    }

    selectors.push(generateSelectors(template, states[i]));
  }

  selectors = selectors.join(',');
  return selectors;
}

var stateMap$1 = [undefined, null, 'active', 'focus', 'hover'];

function template$1(state) {
  return "button" + state + ",\n  input[type=\"button\"]" + state + ",\n  input[type=\"reset\"]" + state + ",\n  input[type=\"submit\"]" + state;
}
/**
 * Populates selectors that target all buttons. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [buttons('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${buttons('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'button:active,
 *  'input[type="button"]:active,
 *  'input[type=\"reset\"]:active,
 *  'input[type=\"submit\"]:active: {
 *   'border': 'none'
 * }
 */


function buttons() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template$1, stateMap$1);
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */
function margin() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['margin'].concat(values));
}

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */
function padding() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return directionalProperty.apply(void 0, ['padding'].concat(values));
}

var positionMap = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
/**
 * Shorthand accepts up to five values, including null to skip a value, and maps them to their respective directions. The first value can optionally be a position keyword.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...position('12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 *
 * // Styles as object usage
 * const styles = {
 *   ...position('absolute', '12px', '24px', '36px', '48px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${position('absolute', '12px', '24px', '36px', '48px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'position': 'absolute',
 *   'top': '12px',
 *   'right': '24px',
 *   'bottom': '36px',
 *   'left': '48px'
 * }
 */

function position(firstValue) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }

  if (positionMap.indexOf(firstValue) >= 0 && firstValue) {
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, directionalProperty.apply(void 0, [''].concat(values)), {
      position: firstValue
    });
  } else {
    return directionalProperty.apply(void 0, ['', firstValue].concat(values));
  }
}

/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */
function size(height, width) {
  if (width === void 0) {
    width = height;
  }

  return {
    height: height,
    width: width
  };
}

var stateMap = [undefined, null, 'active', 'focus', 'hover'];

function template(state) {
  return "input[type=\"color\"]" + state + ",\n    input[type=\"date\"]" + state + ",\n    input[type=\"datetime\"]" + state + ",\n    input[type=\"datetime-local\"]" + state + ",\n    input[type=\"email\"]" + state + ",\n    input[type=\"month\"]" + state + ",\n    input[type=\"number\"]" + state + ",\n    input[type=\"password\"]" + state + ",\n    input[type=\"search\"]" + state + ",\n    input[type=\"tel\"]" + state + ",\n    input[type=\"text\"]" + state + ",\n    input[type=\"time\"]" + state + ",\n    input[type=\"url\"]" + state + ",\n    input[type=\"week\"]" + state + ",\n    input:not([type])" + state + ",\n    textarea" + state;
}
/**
 * Populates selectors that target all text inputs. You can pass optional states to append to the selectors.
 * @example
 * // Styles as object usage
 * const styles = {
 *   [textInputs('active')]: {
 *     'border': 'none'
 *   }
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   > ${textInputs('active')} {
 *     border: none;
 *   }
 * `
 *
 * // CSS in JS Output
 *
 *  'input[type="color"]:active,
 *  input[type="date"]:active,
 *  input[type="datetime"]:active,
 *  input[type="datetime-local"]:active,
 *  input[type="email"]:active,
 *  input[type="month"]:active,
 *  input[type="number"]:active,
 *  input[type="password"]:active,
 *  input[type="search"]:active,
 *  input[type="tel"]:active,
 *  input[type="text"]:active,
 *  input[type="time"]:active,
 *  input[type="url"]:active,
 *  input[type="week"]:active,
 *  input:not([type]):active,
 *  textarea:active': {
 *   'border': 'none'
 * }
 */


function textInputs() {
  for (var _len = arguments.length, states = new Array(_len), _key = 0; _key < _len; _key++) {
    states[_key] = arguments[_key];
  }

  return statefulSelectors(states, template, stateMap);
}

/**
 * Accepts any number of transition values as parameters for creating a single transition statement. You may also pass an array of properties as the first parameter that you would like to apply the same transition values to (second parameter).
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s'),
 *   ...transitions(['color', 'background-color'], '2.0s ease-in 2s')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')};
 *   ${transitions(['color', 'background-color'], '2.0s ease-in 2s'),};
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 *   'transition': 'color 2.0s ease-in 2s, background-color 2.0s ease-in 2s',
 * }
 */

function transitions() {
  for (var _len = arguments.length, properties = new Array(_len), _key = 0; _key < _len; _key++) {
    properties[_key] = arguments[_key];
  }

  if (Array.isArray(properties[0]) && properties.length === 2) {
    var value = properties[1];

    if (typeof value !== 'string') {
      throw new PolishedError(61);
    }

    var transitionsString = properties[0].map(function (property) {
      return property + " " + value;
    }).join(', ');
    return {
      transition: transitionsString
    };
  } else {
    return {
      transition: properties.join(', ')
    };
  }
}




/***/ }),

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ "./node_modules/polished/dist/polished.esm.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

// This plugin will open a window to prompt the user to enter project details, and
// it will then create a document structure and thumbnail.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
const TEMPLATE_CONTENTS = "c769a6265556c091cc1d8c05762c71ecbf97314b";
const TEMPLATE_BLOCKS = "52058e4454d829872482b8551f4918cb828880d6";
const TEMPLATE_INFO = "d45b3005516f887724940a5a10663adcff9dc4b4";
const COMPONENT_TITLE = "dcc85144737cc8736a780b6e428a146ae4560606";
const COMPONENT_BLOCK = "59a17c300d40d952e4025d551ef25f906d92f437";
//Font styles
const WEB_XXXLARGE = "95e94ac41a8cc79d097111a8785d3b5976c70f99";
const PADDING_H = 40;
const PADDING_V = 40;
const SPACING = 24;
const FONT_TITLES = { family: "Menlo", style: "Regular" };
const FONT_BODIES = { family: "SF Pro Text", style: "Regular" };
const SOLID = 'SOLID';
const NORMAL = 'NORMAL';
const BLACK = {
    "type": SOLID,
    "visible": true,
    "opacity": 1,
    "blendMode": NORMAL,
    "color": {
        "r": 0,
        "g": 0,
        "b": 0
    }
};
const WHITE = {
    "type": SOLID,
    "visible": true,
    "opacity": 1,
    "blendMode": NORMAL,
    "color": {
        "r": 1,
        "g": 1,
        "b": 1
    }
};
var LIGHT_TEXT_COLOR_STYLE;
var DARK_TEXT_COLOR_STYLE;
let LIGHT_COLORS_CUSTOM = [
    {
        name: "primary",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "message",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "action",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    }
];
let DARK_COLORS_CUSTOM = [
    {
        name: "primary",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "message",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "action",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    }
];
let LIGHT_COLORS_GENERATED = [
    {
        name: "onPrimary",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "onMessage",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "onAction",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "actionBackground",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "onActionBackground",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
];
let DARK_COLORS_GENERATED = [
    {
        name: "onPrimary",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "onMessage",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "onAction",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "actionBackground",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "onActionBackground",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
];
let LIGHT_COLORS_FIXED = [
    {
        name: "note",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 0.9411764740943909,
                "b": 0.8588235378265381
            }
        }
    },
    {
        name: "onNote",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0,
                "g": 0,
                "b": 0
            }
        }
    }, {
        name: "inboundMessage",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.95686274766922,
                "g": 0.9647058844566345,
                "b": 0.9725490212440491
            }
        }
    },
    {
        name: "systemMessage",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "borderSystemMessage",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 0.11999999731779099,
            "blendMode": NORMAL,
            "color": {
                "r": 0,
                "g": 0,
                "b": 0
            }
        }
    },
    {
        name: "background",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "onBackground",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0,
                "g": 0,
                "b": 0
            }
        }
    },
    {
        name: "elevated",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "danger",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 0.9411764740943909,
                "b": 0.9450980424880981
            }
        }
    },
    {
        name: "onDanger",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.5490196347236633,
                "g": 0.13725490868091583,
                "b": 0.1725490242242813
            }
        }
    },
    {
        name: "success",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.0117647061124444,
                "g": 0.5058823823928833,
                "b": 0.32549020648002625
            }
        }
    },
    {
        name: "notify",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.800000011920929,
                "g": 0.20000000298023224,
                "b": 0.250980406999588
            }
        }
    },
    {
        name: "disabled",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.800000011920929,
                "g": 0.800000011920929,
                "b": 0.800000011920929
            }
        }
    },
    {
        name: "icon",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.18431372940540314,
                "g": 0.2235294133424759,
                "b": 0.2549019753932953
            }
        }
    }
];
let DARK_COLORS_FIXED = [
    {
        name: "note",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.9960784316062927,
                "g": 0.8392156958580017,
                "b": 0.658823549747467
            }
        }
    },
    {
        name: "onNote",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0,
                "g": 0,
                "b": 0
            }
        }
    },
    {
        name: "inboundMessage",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.18431372940540314,
                "g": 0.2235294133424759,
                "b": 0.2549019753932953
            }
        }
    },
    {
        name: "systemMessage",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0,
                "g": 0,
                "b": 0
            }
        }
    },
    {
        name: "borderSystemMessage",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 0.3499999940395355,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "background",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0,
                "g": 0,
                "b": 0
            }
        }
    },
    {
        name: "onBackground",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 1,
                "g": 1,
                "b": 1
            }
        }
    },
    {
        name: "elevated",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.10000000149011612,
                "g": 0.10000000149011612,
                "b": 0.10000000149011612
            }
        }
    },
    {
        name: "danger",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.40784314274787903,
                "g": 0.07058823853731155,
                "b": 0.09803921729326248
            }
        }
    },
    {
        name: "onDanger",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.9607843160629272,
                "g": 0.8352941274642944,
                "b": 0.8470588326454163
            }
        }
    },
    {
        name: "success",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.16078431904315948,
                "g": 0.6117647290229797,
                "b": 0.4000000059604645
            }
        }
    },
    {
        name: "notify",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.18431372940540314,
                "g": 0.2235294133424759,
                "b": 0.2549019753932953
            }
        }
    },
    {
        name: "disabled",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.18431372940540314,
                "g": 0.2235294133424759,
                "b": 0.2549019753932953
            }
        }
    },
    {
        name: "icon",
        fill: {
            "type": SOLID,
            "visible": true,
            "opacity": 1,
            "blendMode": NORMAL,
            "color": {
                "r": 0.529411792755127,
                "g": 0.572549045085907,
                "b": 0.615686297416687
            }
        }
    }
];
// This shows the HTML page in "ui.html".
switch (figma.command) {
    case "update":
        updateGeneratedColors("light");
        updateGeneratedColors("dark");
        figma.closePlugin();
        break;
    default:
        figma.showUI(__html__);
        figma.ui.resize(400, 330);
        if (figma.root.getPluginData("status") == "run") {
            //TODO evaluate if there is some way to reconfigure the pages after initial setup.
            // figma.ui.resize(400, 136)
            figma.ui.postMessage("about");
        }
        if (figma.root.getPluginData("status") == "themed") {
            updateGeneratedColors("light");
            updateGeneratedColors("dark");
            figma.closePlugin();
        }
        break;
}
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    switch (msg.type) {
        case "resize":
            figma.ui.resize(400, msg.height);
            break;
        case "create-project":
            figma.ui.hide();
            yield loadResources();
            figma.root.setRelaunchData({ about: "This document was formated with Ztart" });
            figma.root.setPluginData("status", "run");
            yield createProject(msg.projectTitle, msg.projectType, msg.projectDescription);
            break;
        case "create-theme":
            figma.ui.hide();
            yield loadResources();
            figma.root.setRelaunchData({ update: "Regenerate accessible theme colors" });
            figma.root.setPluginData("status", "themed");
            yield createTheme(msg.themeName, msg.primaryColor, msg.messageColor, msg.actionColor);
            break;
    }
});
function createProject(title, type, description) {
    return __awaiter(this, void 0, void 0, function* () {
        // Set page names and renames the default "Page 1"
        figma.currentPage.name = "📖 About";
        switch (type) {
            case "Exploration":
                createPage("🤔 Problem definition");
                createPage("🔬 Research");
                createPage("🏝 Explorations");
                createPage("         ↪ Solution A");
                createPage("         ↪ Solution B");
                break;
            case "Product":
                createPage("................................................................................................");
                createPage("📐 Design Specs");
                createPage("         ↪ Ready for dev");
                createPage("         ↪ Shipped");
                createPage("................................................................................................");
                createPage("🕹 Prototypes");
                createPage("         ↪ Prototype A");
                createPage("................................................................................................");
                createPage("🏝 Explorations");
                createPage("         ↪ Exploration A");
                createPage("................................................................................................");
                createPage("📦 Archives");
                createPage("         ↪ Archive A");
                break;
            case "Library":
                createPage("❓ How to...");
                createPage("         ↪ Use this library");
                createPage("         ↪ Contribute");
                createPage("................................................................................................");
                createPage("Component A");
                createPage("Component B");
                createPage("Component C");
                createPage("................................................................................................");
                createPage("🚧 Component template");
                break;
        }
        //Add a thumnail to the first page.
        yield createThumbnail(title, type).then(() => __awaiter(this, void 0, void 0, function* () {
            createProjectDetails(description, type);
        }));
        if (type == "Library") {
            let targets = [yield createUse(), yield createContribute()];
            yield createHowTo(targets);
            //Go to the component template page
            figma.currentPage = figma.root.children[figma.root.children.length - 1];
            // Prepare a component template
            //Create title
            let title = (yield figma.importComponentByKeyAsync(COMPONENT_TITLE)).createInstance();
            title.name = "Component title";
            setText(title.findChild(node => node.type == "TEXT"), "Component name");
            title.resize(1280, title.height);
            title.x = 80;
            title.y = 80;
            //Create building blocks area
            let building_blocks = figma.createFrame();
            building_blocks.name = "Building blocks";
            building_blocks.resize(1440, building_blocks.height);
            building_blocks.x = 0;
            building_blocks.y = 1520;
            building_blocks.layoutMode = "VERTICAL";
            let block = (yield figma.importComponentByKeyAsync(COMPONENT_BLOCK)).createInstance();
            let blockTitleText = block.findChild(node => node.type == "TEXT");
            yield figma.loadFontAsync(blockTitleText.fontName);
            blockTitleText.textAutoResize = "HEIGHT";
            blockTitleText.layoutAlign = "STRETCH";
            blockTitleText.characters = "Building blocks";
            block.layoutAlign = "STRETCH";
            building_blocks.appendChild(block);
            let building_block_area = figma.createFrame();
            building_block_area.name = "Place componnents here...";
            building_block_area.layoutMode = "HORIZONTAL";
            building_blocks.appendChild(building_block_area);
            building_block_area.resize(1440, 480);
            building_block_area.layoutGrow = 0;
            building_block_area.counterAxisSizingMode = "AUTO";
            building_block_area.primaryAxisSizingMode = "AUTO";
            building_block_area.verticalPadding = PADDING_V;
            building_block_area.horizontalPadding = PADDING_H;
            building_block_area.itemSpacing = 40;
            building_block_area.fills = [];
            building_blocks.counterAxisSizingMode = "AUTO";
            //Create background
            var background = figma.createRectangle();
            background.resize(1440, 1440);
            background.name = "Background";
            background.fills = [{ "type": SOLID, "visible": true, "opacity": 1, "blendMode": NORMAL, "color": { "r": 1, "g": 1, "b": 1 } }];
            // Create description
            var descriptionText = figma.createText();
            try {
                yield figma.importStyleByKeyAsync(WEB_XXXLARGE).then(baseStyle => { descriptionText.textStyleId = baseStyle.id; });
            }
            catch (error) {
                figma.notify("Font styles are missing!");
            }
            descriptionText.resize(1280, 88);
            descriptionText.name = "Description";
            descriptionText.x = 80;
            descriptionText.y = 352;
            descriptionText.autoRename = false;
            yield figma.loadFontAsync(descriptionText.fontName);
            descriptionText.textAutoResize = "HEIGHT";
            descriptionText.characters = "Type a description of the component here, and place any components/variants in the space below ↘️";
            figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
            // Then add the template to any pages with 'Component' in the title
            figma.root.findChildren(pageNode => pageNode.name.includes("Component")).forEach(pageNode => {
                pageNode.appendChild(building_blocks.clone());
                pageNode.appendChild(background.clone());
                pageNode.appendChild(descriptionText.clone());
                pageNode.appendChild(title.clone());
                figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
            });
            //Clear up the "extra" template
            title.remove();
            building_blocks.remove();
            descriptionText.remove();
            background.remove();
        }
        figma.currentPage = figma.root.children[0];
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        figma.closePlugin();
    });
}
function createProjectDetails(description, type) {
    let detailsFrame = figma.createFrame();
    detailsFrame.name = "Project details";
    detailsFrame.y = 340;
    detailsFrame.resizeWithoutConstraints(640, 1);
    detailsFrame.layoutMode = "VERTICAL";
    detailsFrame.counterAxisSizingMode = "FIXED";
    detailsFrame.verticalPadding = PADDING_V;
    detailsFrame.horizontalPadding = PADDING_H;
    detailsFrame.itemSpacing = SPACING;
    figma.currentPage.appendChild(detailsFrame);
    detailsFrame.appendChild(createDetail("Description", description !== "" ? description : "<Enter a description here>"));
    detailsFrame.appendChild(createDetail("External Links", "<Add links here> →\n<E.g. Confluence> →\n<E.g. Google Doc> →"));
    detailsFrame.appendChild(createDetail("Slack Channels", "#<channel name here>\n#<channel name here>"));
    detailsFrame.appendChild(createDetail("Points of Contact", "Design - <link Slack profile here>\nProduct - <link Slack profile here>\nEngineering - <link Slack profile here>"));
    // Frame for wrapping the list of page examples.
    let listFrame = figma.createFrame();
    listFrame.name = "Add other pages, as needed...";
    listFrame.y = detailsFrame.y + detailsFrame.height + SPACING;
    listFrame.resizeWithoutConstraints(640, 1);
    listFrame.layoutMode = "VERTICAL";
    listFrame.counterAxisSizingMode = "FIXED";
    listFrame.verticalPadding = PADDING_V;
    listFrame.horizontalPadding = PADDING_H;
    listFrame.itemSpacing = 8;
    figma.currentPage.appendChild(listFrame);
    // Not all projects need a prototype, shipped it/released, or research page.
    // However in order to make adding one of these pages easily, we add some
    // text to our scratch page so we can copy/paste them with the proper emoji.
    switch (type) {
        case "Exploration":
            listFrame.appendChild(createPageExample("⏳ History"));
            listFrame.appendChild(createPageExample("✅ Next steps"));
            break;
        case "Product":
            listFrame.appendChild(createPageExample("💅🏽 Styles"));
            listFrame.appendChild(createPageExample("⚙️ Components"));
            break;
        case "Library":
            listFrame.appendChild(createPageExample("💅🏽 Styles"));
            listFrame.appendChild(createPageExample("🚀 Roadmap"));
            break;
    }
    figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
}
// This function adds a thumbnail to your first page.
function createThumbnail(title, type) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.importComponentByKeyAsync("ac0b158c37de3fa8ba94d2b3801913aea262ffcb").catch(reason => {
            figma.notify("Annotation Kit library is required for thumbnails.");
            figma.closePlugin();
        }).then((component) => __awaiter(this, void 0, void 0, function* () {
            let thumbnailFrame = figma.createFrame();
            thumbnailFrame.name = "Thumbnail";
            thumbnailFrame.resizeWithoutConstraints(640, 320);
            if (component) {
                let thumbnail = component.createInstance();
                thumbnail.scaleFactor = 1 / 3;
                thumbnailFrame.appendChild(thumbnail);
                figma.currentPage.appendChild(thumbnailFrame);
                let label = thumbnail.findOne(node => node.name == "File Name");
                yield figma.loadFontAsync(label.fontName).then(() => {
                    if (title !== "") {
                        label.characters = title;
                    }
                    else {
                        label.characters = "Enter title here";
                    }
                });
                let badge = thumbnail.findOne(node => node.name == "Badge" && node.type == "INSTANCE");
                let badgeText = badge.findOne(node => node.name == "Badge" && node.type == "TEXT");
                yield figma.loadFontAsync(badgeText.fontName).then(() => {
                    badgeText.characters = type;
                });
                if (type == "Exploration") {
                    badge.fillStyleId = (yield figma.importStyleByKeyAsync("0ee1c479d3f21d475227a4520cb481bd98af5af5")).id;
                }
                else if (type == "Library") {
                    badge.fillStyleId = (yield figma.importStyleByKeyAsync("a3aa8c64d10a0b1ee92b3dc6e5f278ac978c56cf")).id;
                    badgeText.fillStyleId = (yield figma.importStyleByKeyAsync("492c9645d67f026dd37c301c61577504bd7d8ad7")).id;
                }
            }
            figma.setFileThumbnailNodeAsync(thumbnailFrame);
        }));
    });
}
// Adds a new page.
function createPage(title) {
    let page = figma.createPage();
    page.name = title;
}
// Adds a section to your details frame.
function createDetail(title, body) {
    let detailFrame = figma.createFrame();
    detailFrame.name = title;
    detailFrame.layoutMode = "VERTICAL";
    detailFrame.counterAxisSizingMode = "AUTO";
    detailFrame.layoutAlign = "STRETCH";
    detailFrame.itemSpacing = 8;
    let titleText = figma.createText();
    titleText.fontName = FONT_TITLES;
    titleText.fontSize = 17;
    titleText.characters = title;
    titleText.layoutAlign = "STRETCH";
    detailFrame.appendChild(titleText);
    let bodyText = figma.createText();
    bodyText.fontName = FONT_BODIES;
    bodyText.fontSize = 14;
    bodyText.characters = body;
    bodyText.layoutAlign = "STRETCH";
    detailFrame.appendChild(bodyText);
    return detailFrame;
}
// Adds an example to your list frame.
function createPageExample(text) {
    let linkLabel = figma.createText();
    linkLabel.fontName = FONT_BODIES;
    linkLabel.fontSize = 14;
    linkLabel.characters = text;
    return linkLabel;
}
function createHowTo(targets) {
    return __awaiter(this, void 0, void 0, function* () {
        let howPage = figma.root.children.find(node => node.name == "❓ How to...");
        figma.currentPage = howPage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "How to...", "");
        yield addContent(frame1, "Use this library", targets[0]);
        yield addContent(frame1, "Contribute", targets[1]);
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
    });
}
function createUse() {
    return __awaiter(this, void 0, void 0, function* () {
        let usePage = figma.root.children.find(node => node.name == "         ↪ Use this library");
        figma.currentPage = usePage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "Using this library", "", "1) Add sections here\n\nOptionally, add more sections to help describe the usage of your library.");
        yield addContent(frame1, "Purpose", yield createSlideFrame(TEMPLATE_INFO, "Using this library", "Purpose", "2) Describe the purpose\n\nThis library was created to fill a need. Describe that need and let designers what does (and doesn’t) fit within this library.\n\nYou can also add an image to the right that represents your library.", "E.g. The Conversation Kit is a Figma library - and set of accompanying tools - that give designers everything they need to design a consistent conversational experience across any number of products and platforms."));
        yield addContent(frame1, "Principles", yield createSlideFrame(TEMPLATE_BLOCKS, "Using this library", "Principles", "3) Add your own principles\n\nPrinciples keep foundational decisions consistent, and set precedent for how each component is used and built."));
        yield addContent(frame1, "Instructions", yield createSlideFrame(TEMPLATE_INFO, "Using this library", "Instructions", "4) Add step-by-step instructions\n\nInclude instructions of where the assets can be found, how they are organized, how variants and overrides work, and any other details needed to use the library.", "1. Do this\nDo that\nProfit"));
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        return frame1;
    });
}
function createContribute() {
    return __awaiter(this, void 0, void 0, function* () {
        let contributePage = figma.root.children.find(node => node.name == "         ↪ Contribute");
        figma.currentPage = contributePage;
        let frame1 = yield createSlideFrame(TEMPLATE_CONTENTS, "Contributing", "", "1) Add sections here\n\nOptionally, add more sections to help describe how other designers can add to this library.");
        yield addContent(frame1, "Conventions", yield createSlideFrame(TEMPLATE_BLOCKS, "Contributing", "Conventions", "2) Add your own conventions\n\nWhat conventions does a designer need to be aware of to make components that work in a similar way to all the rest?"));
        yield addContent(frame1, "Instructions", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Instructions", "3) Add step-by-step instructions\n\nInclude instructions on how to start a branch, organize pages, and request review.", "1. Create a Branch: Press the chevron next to the file name in the toolbar, and select Create branch.... Give it a name in the following format ➕<Component name>.\nDuplicate the ‘🚧 Component template’ page, and rename it according to the page naming converntions.\nPerform your explorations/work on this page.\nComplete the pre-publish checklist.\nRequest review by sharing the branch with <team slack channel or point-of-contact>"));
        yield addContent(frame1, "Checklist", yield createSlideFrame(TEMPLATE_INFO, "Contributing", "Checklist", "4) Build a checklist\n\nWhat considerations do you go through before deciding if a component is ready to “go live”? These may refer back to your conventions.", "☑️  Did you do this?\n☑️  Did you do that?\n☑️  What about the other thing?"));
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        return frame1;
    });
}
//TODO Implement an interface so title can be ommited.
function createSlideFrame(id, supertitleText, titleText, instructionText, contentText) {
    return __awaiter(this, void 0, void 0, function* () {
        let pageContents = figma.currentPage.children;
        let lastAdded = pageContents[pageContents.length - 1];
        let frame1 = figma.createFrame();
        frame1.name = titleText ? supertitleText.concat("/", titleText) : supertitleText;
        frame1.resize(1920, 1080);
        frame1.y = lastAdded ? lastAdded.y + 1180 : 0;
        let format = (yield figma.importComponentByKeyAsync(id)).createInstance();
        frame1.insertChild(0, format);
        let supertitle;
        let title;
        let content;
        switch (id) {
            case TEMPLATE_CONTENTS:
                supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Table of contents");
                if (supertitle) {
                    yield setText(supertitle, supertitleText);
                }
                let sections = format.findChild(node => node.name == "Sections");
                sections.children.forEach(node => node.visible = false);
                break;
            case TEMPLATE_BLOCKS:
                supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Supertitle");
                if (supertitle) {
                    yield setText(supertitle, supertitleText.toUpperCase());
                }
                title = format.findOne(node => node.type == "TEXT" && node.characters == "What else does it solve?");
                if (title && titleText) {
                    yield setText(title, titleText);
                }
                break;
            case TEMPLATE_INFO:
                supertitle = format.findOne(node => node.type == "TEXT" && node.name == "Heading" && node.characters == "SUPERTITLE");
                if (supertitle) {
                    yield setText(supertitle, supertitleText.toUpperCase());
                }
                title = format.findOne(node => node.type == "TEXT" && node.characters == "Heading");
                if (title && titleText) {
                    yield setText(title, titleText);
                }
                content = format.findOne(node => node.type == "TEXT" && node.name == "Content");
                if (content && contentText) {
                    yield setText(content, contentText);
                }
                break;
        }
        figma.currentPage.insertChild(figma.currentPage.children.length, frame1);
        if (instructionText) {
            let stickie = yield (yield figma.importComponentByKeyAsync("d4df8b884dbe7ac182612b61cb2091b9244bdf67")).createInstance();
            stickie.y = frame1.y;
            stickie.x = frame1.x - 40 - 272;
            let note = stickie.findChild(node => node.name === "Note");
            yield setText(note, instructionText);
            figma.currentPage.insertChild(figma.currentPage.children.length, stickie);
        }
        return frame1;
    });
}
function addContent(tableFrame, title, target) {
    return __awaiter(this, void 0, void 0, function* () {
        let table = tableFrame.children[0];
        let sections = table.findChild(node => node.name == "Sections");
        let section = sections.children.find(node => node.visible == false);
        yield setText(section, title);
        section.hyperlink = { type: "NODE", value: target.id };
        section.visible = true;
    });
}
function setText(node, text) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.loadFontAsync(node.fontName);
        node.characters = text;
        // Check if it should be an ordered or unordered list.
        if (text.startsWith("1. ")) {
            node.characters = node.characters.substring(3);
            node.setRangeListOptions(0, node.characters.length, { type: "ORDERED" });
        }
        else if (text.startsWith("- ")) {
            node.characters = node.characters.substring(3);
            node.setRangeListOptions(0, node.characters.length, { type: "UNORDERED" });
        }
    });
}
function createTheme(themeName, primaryColor, messageColor, actionColor) {
    return __awaiter(this, void 0, void 0, function* () {
        figma.currentPage = figma.root.children[0];
        // Set page names and renames the default "Page 1"
        figma.currentPage.name = "00 Overview";
        createPage("01 Colors");
        createPage("02 Icons");
        createPage("03 Images");
        //Add a thumnail to the first page.
        yield createThumbnail(themeName, "Theme").then(() => __awaiter(this, void 0, void 0, function* () {
            //TODO set thumbnail BG to primary color
        }));
        figma.currentPage = figma.root.children[1];
        LIGHT_COLORS_CUSTOM[0].fill.color = hexToRGB(primaryColor);
        LIGHT_COLORS_CUSTOM[1].fill.color = hexToRGB(messageColor);
        LIGHT_COLORS_CUSTOM[2].fill.color = hexToRGB(actionColor);
        DARK_COLORS_CUSTOM[0].fill.color = hexToRGB(primaryColor);
        DARK_COLORS_CUSTOM[1].fill.color = hexToRGB(messageColor);
        DARK_COLORS_CUSTOM[2].fill.color = hexToRGB(actionColor);
        yield createMode("light", themeName, primaryColor, messageColor, actionColor);
        yield createMode("dark", themeName, primaryColor, messageColor, actionColor);
        figma.viewport.scrollAndZoomIntoView(figma.currentPage.children);
        figma.closePlugin();
    });
}
function createMode(mode, themeName, primaryColor, messageColor, actionColor) {
    return __awaiter(this, void 0, void 0, function* () {
        let modeFrame = figma.createFrame();
        modeFrame.name = (mode == "light" ? "☀️" : "☽");
        modeFrame.fills = [];
        modeFrame.primaryAxisSizingMode, modeFrame.counterAxisSizingMode = "AUTO";
        modeFrame.layoutMode = "VERTICAL";
        modeFrame.itemSpacing = 64;
        if (mode == "dark")
            modeFrame.x = 2080;
        let titleInstance = (yield figma.importComponentByKeyAsync(COMPONENT_TITLE)).createInstance();
        yield setText(titleInstance.findChild(node => node.name == "Section name"), mode == "light" ? "Light mode" : "Dark mode");
        titleInstance.layoutAlign = "STRETCH";
        modeFrame.appendChild(titleInstance);
        let colorsFrame = figma.createFrame();
        colorsFrame.name = "Colors";
        colorsFrame.fills = (mode == "light" ? [WHITE] : [BLACK]);
        colorsFrame.primaryAxisSizingMode, colorsFrame.counterAxisSizingMode = "AUTO";
        colorsFrame.layoutMode = "HORIZONTAL";
        colorsFrame.verticalPadding = 120;
        colorsFrame.horizontalPadding = 120;
        colorsFrame.itemSpacing = 120;
        modeFrame.appendChild(colorsFrame);
        let customizableFrame = figma.createFrame();
        customizableFrame.name = "Fixed";
        customizableFrame.fills = [];
        customizableFrame.primaryAxisSizingMode, customizableFrame.counterAxisSizingMode = "AUTO";
        customizableFrame.layoutMode = "VERTICAL";
        customizableFrame.itemSpacing = 80;
        let blockInstance = (mode == "light" ? (yield figma.importComponentByKeyAsync(COMPONENT_BLOCK)).createInstance() : (yield figma.importComponentByKeyAsync("52b4796a679cb0e606ba878f94d6ef5b72603028")).createInstance());
        yield setText(blockInstance.findChild(node => node.name == "Section name"), "Customizable");
        blockInstance.layoutGrow = 0;
        blockInstance.counterAxisSizingMode = "FIXED";
        blockInstance.resizeWithoutConstraints(800, blockInstance.height);
        customizableFrame.appendChild(blockInstance);
        let fixedFrame = customizableFrame.clone();
        colorsFrame.appendChild(customizableFrame);
        fixedFrame.name = "Fixed";
        fixedFrame.primaryAxisSizingMode, fixedFrame.counterAxisSizingMode = "AUTO";
        fixedFrame.layoutMode = "VERTICAL";
        fixedFrame.itemSpacing = 80;
        yield setText(fixedFrame.findOne(node => node.type == "TEXT" && node.name == "Section name"), "Fixed");
        colorsFrame.appendChild(fixedFrame);
        if (mode == "light") {
            //TODO need to include focus state colors
            LIGHT_COLORS_CUSTOM.forEach(color => createStyle(themeName, mode, color.name, color.fill, customizableFrame));
            LIGHT_COLORS_GENERATED.forEach(color => createStyle(themeName, mode, color.name, color.fill, fixedFrame));
            updateGeneratedColors(mode);
            LIGHT_COLORS_FIXED.forEach(color => createStyle(themeName, mode, color.name, color.fill, fixedFrame));
        }
        else {
            DARK_COLORS_CUSTOM.forEach(color => createStyle(themeName, mode, color.name, color.fill, customizableFrame));
            DARK_COLORS_GENERATED.forEach(color => createStyle(themeName, mode, color.name, color.fill, fixedFrame));
            updateGeneratedColors(mode);
            DARK_COLORS_FIXED.forEach(color => createStyle(themeName, mode, color.name, color.fill, fixedFrame));
        }
        figma.root.children[1].appendChild(modeFrame);
    });
}
function createStyle(themeName, mode, colorName, fill, exampleTarget) {
    return __awaiter(this, void 0, void 0, function* () {
        let newStyle = figma.createPaintStyle();
        newStyle.name = themeName + "(" + mode + ")/" + colorName;
        newStyle.setPluginData("colorName", colorName);
        newStyle.setPluginData("colorMode", mode);
        newStyle.paints = [fill];
        let exampleFrame = figma.createFrame();
        exampleFrame.name = colorName + " example";
        exampleFrame.fills = [];
        exampleFrame.primaryAxisSizingMode = "AUTO";
        exampleFrame.counterAxisSizingMode = "AUTO";
        exampleFrame.layoutMode = "HORIZONTAL";
        exampleFrame.counterAxisAlignItems = "CENTER";
        exampleFrame.paddingLeft = PADDING_H;
        exampleFrame.itemSpacing = SPACING;
        let swatchFrame = figma.createFrame();
        swatchFrame.fills = [];
        let exampleColor = figma.createEllipse();
        exampleColor.setPluginData("colorName", colorName);
        exampleColor.fillStyleId = newStyle.id;
        swatchFrame.appendChild(exampleColor);
        //TODO may need to implement a regex to exlude colors that coincidentally start with these letters
        if (colorName.startsWith("on")) {
            let exampleTextColor = figma.createText();
            exampleTextColor.fontName = FONT_TITLES;
            exampleTextColor.characters = "T";
            exampleTextColor.fontSize = 64;
            exampleTextColor.fillStyleId = newStyle.id;
            let exampleTextColorBackgroundName = colorName.charAt(2).toLowerCase() + colorName.slice(3);
            //TODO Null check needed?
            let exampleStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == exampleTextColorBackgroundName);
            exampleColor.fillStyleId = exampleStyle.id;
            swatchFrame.appendChild(exampleTextColor);
            exampleTextColor.x = 30.5;
            exampleTextColor.y = 14;
        }
        if (colorName.startsWith("border")) {
            debugger;
            let exampleBorderColorBackgroundName = colorName.charAt(6).toLowerCase() + colorName.slice(7);
            //TODO Null check needed?
            try {
                let exampleBackgroundStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == exampleBorderColorBackgroundName);
                exampleColor.strokeStyleId = newStyle.id;
                exampleColor.fillStyleId = exampleBackgroundStyle.id;
                exampleColor.strokeWeight = 4;
            }
            catch (error) {
                debugger;
            }
        }
        let exampleText = figma.createText();
        exampleText.fontName = FONT_TITLES;
        exampleText.fontSize = 48;
        exampleText.characters = colorName;
        exampleText.fillStyleId = (mode == "light" ? LIGHT_TEXT_COLOR_STYLE.id : DARK_TEXT_COLOR_STYLE.id);
        exampleFrame.appendChild(swatchFrame);
        exampleFrame.appendChild(exampleText);
        exampleTarget.appendChild(exampleFrame);
    });
}
function updateGeneratedColors(mode) {
    let currentPrimaryColor = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "primary").paints[0].color;
    let currentMessageColor = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "message").paints[0].color;
    let currentActionColor = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "action").paints[0].color;
    let onPrimaryStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onPrimary");
    onPrimaryStyle.paints = [mixPaint(getAccessibleTextColor(currentPrimaryColor))];
    let onMessageStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onMessage");
    onMessageStyle.paints = [mixPaint(getAccessibleTextColor(currentMessageColor))];
    let onActionStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onAction");
    onActionStyle.paints = [mixPaint(getAccessibleTextColor(currentActionColor))];
    let [actionForegroundColor, actionBackgroundColor] = getAccessibleForegroundAndBackgroundColors(currentActionColor, mode);
    let actionForegroundStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onActionBackground");
    actionForegroundStyle.paints = [mixPaint(actionForegroundColor)];
    let actionBackgroundStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "actionBackground");
    actionBackgroundStyle.paints = [mixPaint(actionBackgroundColor)];
}
function loadResources() {
    return __awaiter(this, void 0, void 0, function* () {
        // Need to load a font here to generate the other page examples.
        yield figma.loadFontAsync(FONT_TITLES);
        yield figma.loadFontAsync(FONT_BODIES);
        LIGHT_TEXT_COLOR_STYLE = yield figma.importStyleByKeyAsync("f207233833aea62e2f0163bb4b6c6ed602459ba1");
        DARK_TEXT_COLOR_STYLE = yield figma.importStyleByKeyAsync("5638e43c82613c7f15c60e3e8e9496c17763ae49");
    });
}
// ~~~~~~Helper Functions~~~~~~~~~~~ //
function RGBToHSL(rgb) {
    let r = rgb.r;
    let g = rgb.g;
    let b = rgb.b;
    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0;
    // Calculate hue
    // No difference
    if (delta == 0)
        h = 0;
    // Red is max
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
        h = (b - r) / delta + 2;
    // Blue is max
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;
    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { hue: h, saturation: s, lightness: l };
}
function HSLToRGB(hsl) {
    let h = hsl.hue;
    let s = hsl.saturation;
    let l = hsl.lightness;
    // Must be fractions of 1
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s, x = c * (1 - Math.abs((h / 60) % 2 - 1)), m = l - c / 2, r = 0, g = 0, b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.max(r + m, 0);
    g = Math.max(g + m, 0);
    b = Math.max(b + m, 0);
    return { r: r, g: g, b: b };
}
function hexToRGB(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const number = Number.parseInt(hex, 16);
    const red = number >> 16;
    const green = (number >> 8) & 255;
    const blue = number & 255;
    return { r: red / 256, g: green / 256, b: blue / 256 };
}
function getAccessibleTextColor(backgroundColor) {
    let testHSL = Object(polished__WEBPACK_IMPORTED_MODULE_0__["hsl"])(360, 1, 1);
    let backgroundHex = Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(Math.round(backgroundColor.r * 255), Math.round(backgroundColor.g * 255), Math.round(backgroundColor.b * 255));
    let backgroundHSL = RGBToHSL(backgroundColor);
    let suggestedDarkColor = Object(polished__WEBPACK_IMPORTED_MODULE_0__["hsl"])({ hue: backgroundHSL.hue, saturation: Math.min(backgroundHSL.saturation, 30) / 100, lightness: Math.min(backgroundHSL.lightness, 20) / 100 });
    let foregroundHex = Object(polished__WEBPACK_IMPORTED_MODULE_0__["readableColor"])(backgroundHex, suggestedDarkColor, "#fff", true);
    let foregroundColor = hexToRGB(foregroundHex);
    return foregroundColor;
}
function getAccessibleForegroundAndBackgroundColors(sourceColor, mode) {
    let sourcColorHSL = RGBToHSL(sourceColor);
    let foregroundColor, backgroundColor;
    if (mode == 'light') { //Calculate light mode values.
        foregroundColor = HSLToRGB({
            hue: sourcColorHSL.hue,
            saturation: sourcColorHSL.saturation,
            lightness: Math.min(sourcColorHSL.lightness, 25)
        });
        backgroundColor = HSLToRGB({
            hue: sourcColorHSL.hue,
            saturation: sourcColorHSL.saturation,
            lightness: Math.max(sourcColorHSL.lightness, 95)
        });
    }
    else {
        //Calculate dark mode values.
        foregroundColor = HSLToRGB({
            hue: sourcColorHSL.hue,
            saturation: sourcColorHSL.saturation,
            lightness: Math.max(sourcColorHSL.lightness, 85)
        });
        backgroundColor = HSLToRGB({
            hue: sourcColorHSL.hue,
            saturation: Math.min(sourcColorHSL.saturation, 30),
            lightness: Math.min(sourcColorHSL.lightness, 20)
        });
    }
    return [foregroundColor, backgroundColor];
}
function mixPaint(color) {
    return {
        "type": SOLID,
        "visible": true,
        "opacity": 1,
        "blendMode": NORMAL,
        "color": color
    };
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvZGlzdC9wb2xpc2hlZC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltd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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUM0QjtBQUNoQjtBQUNJO0FBQ3NCOztBQUVoRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFdBQVc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpR0FBaUcsYUFBYTtBQUM5RztBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YscUdBQTJCO0FBQ2pIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRkFBa0YscUdBQTJCO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGtCQUFrQixrRkFBUTtBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUcsS0FBSztBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0ZBQXNGO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFVBQVUsc0ZBQXNGO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGtGQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLEVBQUU7QUFDaEMsa0NBQWtDLEVBQUU7QUFDcEMscUNBQXFDLEVBQUU7QUFDdkMseUNBQXlDLEVBQUU7QUFDM0MsNkJBQTZCLElBQUksaUJBQWlCLElBQUksaUJBQWlCLElBQUk7QUFDM0Usb0NBQW9DLElBQUksaUJBQWlCLElBQUksaUJBQWlCLElBQUk7QUFDbEYsNkJBQTZCLElBQUksbUNBQW1DLElBQUksNEJBQTRCLElBQUk7QUFDeEcsb0NBQW9DLElBQUksbUNBQW1DLElBQUksNEJBQTRCLElBQUk7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBLGdCQUFnQiw4Q0FBOEM7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3Q0FBd0M7QUFDeEQ7QUFDQSxnQkFBZ0IsdURBQXVEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBNkM7QUFDbkU7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpREFBaUQ7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLCtDQUErQztBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDhFQUE4RSx5QkFBeUIsRUFBRTtBQUMxSTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsNENBQTRDLEVBQUU7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsa0JBQWtCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxvQkFBb0I7QUFDckY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0Esa0JBQWtCLG9EQUFHO0FBQ3JCLHdCQUF3QixvREFBRztBQUMzQjtBQUNBLDZCQUE2QixvREFBRyxFQUFFLDJJQUEySTtBQUM3Syx3QkFBd0IsOERBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IGZyb20gXCIuL2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZUZ1bmN0aW9uKGZuKSB7XG4gIHJldHVybiBGdW5jdGlvbi50b1N0cmluZy5jYWxsKGZuKS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKSAhPT0gLTE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcInVuZGVmaW5lZFwiIHx8ICFSZWZsZWN0LmNvbnN0cnVjdCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoUmVmbGVjdC5jb25zdHJ1Y3Quc2hhbSkgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIFByb3h5ID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiB0cnVlO1xuXG4gIHRyeSB7XG4gICAgQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKHN0cmluZ3MsIHJhdykge1xuICBpZiAoIXJhdykge1xuICAgIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG4gIH1cblxuICBzdHJpbmdzLnJhdyA9IHJhdztcbiAgcmV0dXJuIHN0cmluZ3M7XG59IiwiaW1wb3J0IGdldFByb3RvdHlwZU9mIGZyb20gXCIuL2dldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBpc05hdGl2ZUZ1bmN0aW9uIGZyb20gXCIuL2lzTmF0aXZlRnVuY3Rpb24uanNcIjtcbmltcG9ydCBjb25zdHJ1Y3QgZnJvbSBcIi4vY29uc3RydWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gIHZhciBfY2FjaGUgPSB0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIgPyBuZXcgTWFwKCkgOiB1bmRlZmluZWQ7XG5cbiAgX3dyYXBOYXRpdmVTdXBlciA9IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgICBpZiAoQ2xhc3MgPT09IG51bGwgfHwgIWlzTmF0aXZlRnVuY3Rpb24oQ2xhc3MpKSByZXR1cm4gQ2xhc3M7XG5cbiAgICBpZiAodHlwZW9mIENsYXNzICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIF9jYWNoZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgaWYgKF9jYWNoZS5oYXMoQ2xhc3MpKSByZXR1cm4gX2NhY2hlLmdldChDbGFzcyk7XG5cbiAgICAgIF9jYWNoZS5zZXQoQ2xhc3MsIFdyYXBwZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIFdyYXBwZXIoKSB7XG4gICAgICByZXR1cm4gY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIGdldFByb3RvdHlwZU9mKHRoaXMpLmNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICB2YWx1ZTogV3JhcHBlcixcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgQ2xhc3MpO1xuICB9O1xuXG4gIHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcyc7XG5pbXBvcnQgX2Fzc2VydFRoaXNJbml0aWFsaXplZCBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF93cmFwTmF0aXZlU3VwZXIgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vd3JhcE5hdGl2ZVN1cGVyJztcbmltcG9ydCBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UnO1xuXG5mdW5jdGlvbiBsYXN0KCkge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxLCBfcmVmIDwgMCB8fCBhcmd1bWVudHMubGVuZ3RoIDw9IF9yZWYgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbX3JlZl07XG59XG5cbmZ1bmN0aW9uIG5lZ2F0aW9uKGEpIHtcbiAgcmV0dXJuIC1hO1xufVxuXG5mdW5jdGlvbiBhZGRpdGlvbihhLCBiKSB7XG4gIHJldHVybiBhICsgYjtcbn1cblxuZnVuY3Rpb24gc3VidHJhY3Rpb24oYSwgYikge1xuICByZXR1cm4gYSAtIGI7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxpY2F0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgKiBiO1xufVxuXG5mdW5jdGlvbiBkaXZpc2lvbihhLCBiKSB7XG4gIHJldHVybiBhIC8gYjtcbn1cblxuZnVuY3Rpb24gbWF4KCkge1xuICByZXR1cm4gTWF0aC5tYXguYXBwbHkoTWF0aCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gbWluKCkge1xuICByZXR1cm4gTWF0aC5taW4uYXBwbHkoTWF0aCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gY29tbWEoKSB7XG4gIHJldHVybiBBcnJheS5vZi5hcHBseShBcnJheSwgYXJndW1lbnRzKTtcbn1cblxudmFyIGRlZmF1bHRTeW1ib2xzID0ge1xuICBzeW1ib2xzOiB7XG4gICAgJyonOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICcqJyxcbiAgICAgICAgZjogbXVsdGlwbGljYXRpb24sXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiA0LFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcqJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFwqJ1xuICAgIH0sXG4gICAgJy8nOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICcvJyxcbiAgICAgICAgZjogZGl2aXNpb24sXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiA0LFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcvJyxcbiAgICAgIHJlZ1N5bWJvbDogJy8nXG4gICAgfSxcbiAgICAnKyc6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJysnLFxuICAgICAgICBmOiBhZGRpdGlvbixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDIsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHByZWZpeDoge1xuICAgICAgICBzeW1ib2w6ICcrJyxcbiAgICAgICAgZjogbGFzdCxcbiAgICAgICAgbm90YXRpb246ICdwcmVmaXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAzLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcrJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFwrJ1xuICAgIH0sXG4gICAgJy0nOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICctJyxcbiAgICAgICAgZjogc3VidHJhY3Rpb24sXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAyLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBwcmVmaXg6IHtcbiAgICAgICAgc3ltYm9sOiAnLScsXG4gICAgICAgIGY6IG5lZ2F0aW9uLFxuICAgICAgICBub3RhdGlvbjogJ3ByZWZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDMsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJy0nLFxuICAgICAgcmVnU3ltYm9sOiAnLSdcbiAgICB9LFxuICAgICcsJzoge1xuICAgICAgaW5maXg6IHtcbiAgICAgICAgc3ltYm9sOiAnLCcsXG4gICAgICAgIGY6IGNvbW1hLFxuICAgICAgICBub3RhdGlvbjogJ2luZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMSxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAyXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnLCcsXG4gICAgICByZWdTeW1ib2w6ICcsJ1xuICAgIH0sXG4gICAgJygnOiB7XG4gICAgICBwcmVmaXg6IHtcbiAgICAgICAgc3ltYm9sOiAnKCcsXG4gICAgICAgIGY6IGxhc3QsXG4gICAgICAgIG5vdGF0aW9uOiAncHJlZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnKCcsXG4gICAgICByZWdTeW1ib2w6ICdcXFxcKCdcbiAgICB9LFxuICAgICcpJzoge1xuICAgICAgcG9zdGZpeDoge1xuICAgICAgICBzeW1ib2w6ICcpJyxcbiAgICAgICAgZjogdW5kZWZpbmVkLFxuICAgICAgICBub3RhdGlvbjogJ3Bvc3RmaXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcpJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFwpJ1xuICAgIH0sXG4gICAgbWluOiB7XG4gICAgICBmdW5jOiB7XG4gICAgICAgIHN5bWJvbDogJ21pbicsXG4gICAgICAgIGY6IG1pbixcbiAgICAgICAgbm90YXRpb246ICdmdW5jJyxcbiAgICAgICAgcHJlY2VkZW5jZTogMCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnbWluJyxcbiAgICAgIHJlZ1N5bWJvbDogJ21pblxcXFxiJ1xuICAgIH0sXG4gICAgbWF4OiB7XG4gICAgICBmdW5jOiB7XG4gICAgICAgIHN5bWJvbDogJ21heCcsXG4gICAgICAgIGY6IG1heCxcbiAgICAgICAgbm90YXRpb246ICdmdW5jJyxcbiAgICAgICAgcHJlY2VkZW5jZTogMCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnbWF4JyxcbiAgICAgIHJlZ1N5bWJvbDogJ21heFxcXFxiJ1xuICAgIH1cbiAgfVxufTtcbnZhciBkZWZhdWx0U3ltYm9sTWFwID0gZGVmYXVsdFN5bWJvbHM7XG5cbi8vIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9zdHlsZWQtY29tcG9uZW50cy9ibG9iL2ZjZjZmMzgwNGM1N2ExNGRkNzk4NGRmYWI3YmMwNmVlMmVkY2EwNDQvc3JjL3V0aWxzL2Vycm9yLmpzXG5cbi8qKlxuICogUGFyc2UgZXJyb3JzLm1kIGFuZCB0dXJuIGl0IGludG8gYSBzaW1wbGUgaGFzaCBvZiBjb2RlOiBtZXNzYWdlXG4gKiBAcHJpdmF0ZVxuICovXG52YXIgRVJST1JTID0ge1xuICBcIjFcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsKDM2MCwgMC43NSwgMC40KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiMlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2xhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gaHNsYSgzNjAsIDAuNzUsIDAuNCwgMC43KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyBodWU6IDI1NSwgc2F0dXJhdGlvbjogMC40LCBsaWdodG5lc3M6IDAuNzUsIGFscGhhOiAwLjcgfSkuXFxuXFxuXCIsXG4gIFwiM1wiOiBcIlBhc3NlZCBhbiBpbmNvcnJlY3QgYXJndW1lbnQgdG8gYSBjb2xvciBmdW5jdGlvbiwgcGxlYXNlIHBhc3MgYSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSBjb2xvci5cXG5cXG5cIixcbiAgXCI0XCI6IFwiQ291bGRuJ3QgZ2VuZXJhdGUgdmFsaWQgcmdiIHN0cmluZyBmcm9tICVzLCBpdCByZXR1cm5lZCAlcy5cXG5cXG5cIixcbiAgXCI1XCI6IFwiQ291bGRuJ3QgcGFyc2UgdGhlIGNvbG9yIHN0cmluZy4gUGxlYXNlIHByb3ZpZGUgdGhlIGNvbG9yIGFzIGEgc3RyaW5nIGluIGhleCwgcmdiLCByZ2JhLCBoc2wgb3IgaHNsYSBub3RhdGlvbi5cXG5cXG5cIixcbiAgXCI2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYiwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwKSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLlxcblxcblwiLFxuICBcIjdcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIHJnYigyNTUsIDIwNSwgMTAwLCAwLjc1KSBvciBhbiBvYmplY3QgZS5nLiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43NSB9KS5cXG5cXG5cIixcbiAgXCI4XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjlcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCIxMFwiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjExXCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbSBzdHJpbmcgYnV0IGdvdCBcXFwiJXNcXFwiXFxuXFxuXCIsXG4gIFwiMTJcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTNcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjE0XCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTVcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE2XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE3XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxOFwiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjE5XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIyMFwiOiBcImV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiMjFcIjogXCJleHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIyXCI6IFwiZXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjNcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjI0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjI1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI2XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyN1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjI4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjI5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjMwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjMxXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjMyXCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJylcXG5cXG5cIixcbiAgXCIzM1wiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzNFwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM1XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjM2XCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCIzN1wiOiBcIlN5bnRheCBFcnJvciBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOFwiOiBcIkZvcm11bGEgY29udGFpbnMgYSBmdW5jdGlvbiB0aGF0IG5lZWRzIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjM5XCI6IFwiRm9ybXVsYSBpcyBtaXNzaW5nIGNsb3NpbmcgcGFyZW50aGVzaXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDBcIjogXCJGb3JtdWxhIGhhcyB0b28gbWFueSBjbG9zaW5nIHBhcmVudGhlc2VzIGF0ICVzLlxcblxcblwiLFxuICBcIjQxXCI6IFwiQWxsIHZhbHVlcyBpbiBhIGZvcm11bGEgbXVzdCBoYXZlIHRoZSBzYW1lIHVuaXQgb3IgYmUgdW5pdGxlc3MuXFxuXFxuXCIsXG4gIFwiNDJcIjogXCJQbGVhc2UgcHJvdmlkZSBhIG51bWJlciBvZiBzdGVwcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlci5cXG5cXG5cIixcbiAgXCI0M1wiOiBcIlBsZWFzZSBwYXNzIGEgbnVtYmVyIG9yIG9uZSBvZiB0aGUgcHJlZGVmaW5lZCBzY2FsZXMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIgYXMgdGhlIHJhdGlvLlxcblxcblwiLFxuICBcIjQ0XCI6IFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgYXMgYmFzZSB0byBtb2R1bGFyU2NhbGUsIGV4cGVjdGVkIG51bWJlciBvciBlbS9yZW0gc3RyaW5nIGJ1dCBnb3QgJXMuXFxuXFxuXCIsXG4gIFwiNDVcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byBoc2xUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byByZ2JUb0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiNDdcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OFwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDlcIjogXCJFeHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUwXCI6IFwiRXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MVwiOiBcIkV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUyXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBlaXRoZXIgdGhlIHBhdGggdG8gdGhlIGZvbnQgZmlsZShzKSBvciBhIG5hbWUgb2YgYSBsb2NhbCBjb3B5LlxcblxcblwiLFxuICBcIjUzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBsb2NhbEZvbnRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU0XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBmaWxlRm9ybWF0cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiNTZcIjogXCJsaW5lYXJHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1N1wiOiBcInJhZGlhbEdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU4XCI6IFwiUGxlYXNlIHN1cHBseSBhIGZpbGVuYW1lIHRvIHJldGluYUltYWdlKCkgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjU5XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gdHJpYW5nbGUsIHBsZWFzZSBwYXNzIGNvcnJlY3QgcG9pbnRpbmdEaXJlY3Rpb24gZS5nLiAncmlnaHQnLlxcblxcblwiLFxuICBcIjYwXCI6IFwiUGFzc2VkIGFuIGludmFsaWQgdmFsdWUgdG8gYGhlaWdodGAgb3IgYHdpZHRoYC4gUGxlYXNlIHByb3ZpZGUgYSBwaXhlbCBiYXNlZCB1bml0LlxcblxcblwiLFxuICBcIjYxXCI6IFwiUHJvcGVydHkgbXVzdCBiZSBhIHN0cmluZyB2YWx1ZS5cXG5cXG5cIixcbiAgXCI2MlwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIGEgcmFkaXVzIHZhbHVlIGFzIGEgc3RyaW5nIG9yIG51bWJlciBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjYzXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgb25lIG9mIFxcXCJ0b3BcXFwiLCBcXFwiYm90dG9tXFxcIiwgXFxcImxlZnRcXFwiIG9yIFxcXCJyaWdodFxcXCIgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxcblxcblwiLFxuICBcIjY0XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgb25seSB0YWtlcyA4IGFyZ3VtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2NVwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXFxcblRvIHBhc3MgYSBzaW5nbGUgYW5pbWF0aW9uIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBzaW1wbGUgdmFsdWVzLCBlLmcuIGFuaW1hdGlvbigncm90YXRlJywgJzJzJykuXFxuXFxuXCIsXG4gIFwiNjZcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY3XCI6IFwiWW91IG11c3QgcHJvdmlkZSBhIHRlbXBsYXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY4XCI6IFwiWW91IHBhc3NlZCBhbiB1bnN1cHBvcnRlZCBzZWxlY3RvciBzdGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OVwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzBcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIHNlY29uZCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MVwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiNzJcIjogXCJQYXNzZWQgaW52YWxpZCBiYXNlIHZhbHVlICVzIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiNzNcIjogXCJQbGVhc2UgcHJvdmlkZSBhIHZhbGlkIENTUyB2YXJpYWJsZS5cXG5cXG5cIixcbiAgXCI3NFwiOiBcIkNTUyB2YXJpYWJsZSBub3QgZm91bmQgYW5kIG5vIGRlZmF1bHQgd2FzIHByb3ZpZGVkLlxcblxcblwiLFxuICBcIjc1XCI6IFwiaW1wb3J0YW50IHJlcXVpcmVzIGEgdmFsaWQgc3R5bGUgb2JqZWN0LCBnb3QgYSAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjc2XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cyBhcyBtaW5TY3JlZW4gYW5kIG1heFNjcmVlbi5cXG5cXG5cIixcbiAgXCI3N1wiOiBcInJlbVRvUHggZXhwZWN0cyBhIHZhbHVlIGluIFxcXCJyZW1cXFwiIGJ1dCB5b3UgcHJvdmlkZWQgaXQgaW4gXFxcIiVzXFxcIi5cXG5cXG5cIixcbiAgXCI3OFwiOiBcImJhc2UgbXVzdCBiZSBzZXQgaW4gXFxcInB4XFxcIiBvciBcXFwiJVxcXCIgYnV0IHlvdSBzZXQgaXQgaW4gXFxcIiVzXFxcIi5cXG5cIlxufTtcbi8qKlxuICogc3VwZXIgYmFzaWMgdmVyc2lvbiBvZiBzcHJpbnRmXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhID0gYXJnc1swXTtcbiAgdmFyIGIgPSBbXTtcbiAgdmFyIGM7XG5cbiAgZm9yIChjID0gMTsgYyA8IGFyZ3MubGVuZ3RoOyBjICs9IDEpIHtcbiAgICBiLnB1c2goYXJnc1tjXSk7XG4gIH1cblxuICBiLmZvckVhY2goZnVuY3Rpb24gKGQpIHtcbiAgICBhID0gYS5yZXBsYWNlKC8lW2Etel0vLCBkKTtcbiAgfSk7XG4gIHJldHVybiBhO1xufVxuLyoqXG4gKiBDcmVhdGUgYW4gZXJyb3IgZmlsZSBvdXQgb2YgZXJyb3JzLm1kIGZvciBkZXZlbG9wbWVudCBhbmQgYSBzaW1wbGUgd2ViIGxpbmsgdG8gdGhlIGZ1bGwgZXJyb3JzXG4gKiBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxudmFyIFBvbGlzaGVkRXJyb3IgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9FcnJvcikge1xuICBfaW5oZXJpdHNMb29zZShQb2xpc2hlZEVycm9yLCBfRXJyb3IpO1xuXG4gIGZ1bmN0aW9uIFBvbGlzaGVkRXJyb3IoY29kZSkge1xuICAgIHZhciBfdGhpcztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIFwiQW4gZXJyb3Igb2NjdXJyZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvcG9saXNoZWQvYmxvYi9tYWluL3NyYy9pbnRlcm5hbEhlbHBlcnMvZXJyb3JzLm1kI1wiICsgY29kZSArIFwiIGZvciBtb3JlIGluZm9ybWF0aW9uLlwiKSB8fCB0aGlzO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcyA9IF9FcnJvci5jYWxsKHRoaXMsIGZvcm1hdC5hcHBseSh2b2lkIDAsIFtFUlJPUlNbY29kZV1dLmNvbmNhdChhcmdzKSkpIHx8IHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICB9XG5cbiAgcmV0dXJuIFBvbGlzaGVkRXJyb3I7XG59KCAvKiNfX1BVUkVfXyovX3dyYXBOYXRpdmVTdXBlcihFcnJvcikpO1xuXG52YXIgdW5pdFJlZ0V4cCA9IC8oKD8hXFx3KWF8bmF8aGN8bWN8ZGd8bWVbcl0/fHhlfG5pKD8hW2EtekEtWl0pfG1tfGNwfHRwfHhwfHEoPyFzKXxodnx4YW12fG5pbXZ8d3Z8c218cyg/IVxcRHwkKXxnZWR8ZGFyZz98bnJ1dCkvZzsgLy8gTWVyZ2VzIGFkZGl0aW9uYWwgbWF0aCBmdW5jdGlvbmFsaXR5IGludG8gdGhlIGRlZmF1bHRzLlxuXG5mdW5jdGlvbiBtZXJnZVN5bWJvbE1hcHMoYWRkaXRpb25hbFN5bWJvbHMpIHtcbiAgdmFyIHN5bWJvbE1hcCA9IHt9O1xuICBzeW1ib2xNYXAuc3ltYm9scyA9IGFkZGl0aW9uYWxTeW1ib2xzID8gX2V4dGVuZHMoe30sIGRlZmF1bHRTeW1ib2xNYXAuc3ltYm9scywgYWRkaXRpb25hbFN5bWJvbHMuc3ltYm9scykgOiBfZXh0ZW5kcyh7fSwgZGVmYXVsdFN5bWJvbE1hcC5zeW1ib2xzKTtcbiAgcmV0dXJuIHN5bWJvbE1hcDtcbn1cblxuZnVuY3Rpb24gZXhlYyhvcGVyYXRvcnMsIHZhbHVlcykge1xuICB2YXIgX3JlZjtcblxuICB2YXIgb3AgPSBvcGVyYXRvcnMucG9wKCk7XG4gIHZhbHVlcy5wdXNoKG9wLmYuYXBwbHkob3AsIChfcmVmID0gW10pLmNvbmNhdC5hcHBseShfcmVmLCB2YWx1ZXMuc3BsaWNlKC1vcC5hcmdDb3VudCkpKSk7XG4gIHJldHVybiBvcC5wcmVjZWRlbmNlO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUoZXhwcmVzc2lvbiwgYWRkaXRpb25hbFN5bWJvbHMpIHtcbiAgdmFyIHN5bWJvbE1hcCA9IG1lcmdlU3ltYm9sTWFwcyhhZGRpdGlvbmFsU3ltYm9scyk7XG4gIHZhciBtYXRjaDtcbiAgdmFyIG9wZXJhdG9ycyA9IFtzeW1ib2xNYXAuc3ltYm9sc1snKCddLnByZWZpeF07XG4gIHZhciB2YWx1ZXMgPSBbXTtcbiAgdmFyIHBhdHRlcm4gPSBuZXcgUmVnRXhwKCAvLyBQYXR0ZXJuIGZvciBudW1iZXJzXG4gIFwiXFxcXGQrKD86XFxcXC5cXFxcZCspP3xcIiArIC8vIC4uLmFuZCBwYXR0ZXJucyBmb3IgaW5kaXZpZHVhbCBvcGVyYXRvcnMvZnVuY3Rpb24gbmFtZXNcbiAgT2JqZWN0LmtleXMoc3ltYm9sTWFwLnN5bWJvbHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHN5bWJvbE1hcC5zeW1ib2xzW2tleV07XG4gIH0pIC8vIGxvbmdlciBzeW1ib2xzIHNob3VsZCBiZSBsaXN0ZWQgZmlyc3RcbiAgLy8gJEZsb3dGaXhNZVxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHJldHVybiBiLnN5bWJvbC5sZW5ndGggLSBhLnN5bWJvbC5sZW5ndGg7XG4gIH0pIC8vICRGbG93Rml4TWVcbiAgLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbC5yZWdTeW1ib2w7XG4gIH0pLmpvaW4oJ3wnKSArIFwifChcXFxcUylcIiwgJ2cnKTtcbiAgcGF0dGVybi5sYXN0SW5kZXggPSAwOyAvLyBSZXNldCByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0XG5cbiAgdmFyIGFmdGVyVmFsdWUgPSBmYWxzZTtcblxuICBkbyB7XG4gICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoZXhwcmVzc2lvbik7XG5cbiAgICB2YXIgX3JlZjIgPSBtYXRjaCB8fCBbJyknLCB1bmRlZmluZWRdLFxuICAgICAgICB0b2tlbiA9IF9yZWYyWzBdLFxuICAgICAgICBiYWQgPSBfcmVmMlsxXTtcblxuICAgIHZhciBub3ROdW1iZXIgPSBzeW1ib2xNYXAuc3ltYm9sc1t0b2tlbl07XG4gICAgdmFyIG5vdE5ld1ZhbHVlID0gbm90TnVtYmVyICYmICFub3ROdW1iZXIucHJlZml4ICYmICFub3ROdW1iZXIuZnVuYztcbiAgICB2YXIgbm90QWZ0ZXJWYWx1ZSA9ICFub3ROdW1iZXIgfHwgIW5vdE51bWJlci5wb3N0Zml4ICYmICFub3ROdW1iZXIuaW5maXg7IC8vIENoZWNrIGZvciBzeW50YXggZXJyb3JzOlxuXG4gICAgaWYgKGJhZCB8fCAoYWZ0ZXJWYWx1ZSA/IG5vdEFmdGVyVmFsdWUgOiBub3ROZXdWYWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDM3LCBtYXRjaCA/IG1hdGNoLmluZGV4IDogZXhwcmVzc2lvbi5sZW5ndGgsIGV4cHJlc3Npb24pO1xuICAgIH1cblxuICAgIGlmIChhZnRlclZhbHVlKSB7XG4gICAgICAvLyBXZSBlaXRoZXIgaGF2ZSBhbiBpbmZpeCBvciBwb3N0Zml4IG9wZXJhdG9yICh0aGV5IHNob3VsZCBiZSBtdXR1YWxseSBleGNsdXNpdmUpXG4gICAgICB2YXIgY3VyciA9IG5vdE51bWJlci5wb3N0Zml4IHx8IG5vdE51bWJlci5pbmZpeDtcblxuICAgICAgZG8ge1xuICAgICAgICB2YXIgcHJldiA9IG9wZXJhdG9yc1tvcGVyYXRvcnMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICgoY3Vyci5wcmVjZWRlbmNlIC0gcHJldi5wcmVjZWRlbmNlIHx8IHByZXYucmlnaHRUb0xlZnQpID4gMCkgYnJlYWs7IC8vIEFwcGx5IHByZXZpb3VzIG9wZXJhdG9yLCBzaW5jZSBpdCBoYXMgcHJlY2VkZW5jZSBvdmVyIGN1cnJlbnQgb25lXG4gICAgICB9IHdoaWxlIChleGVjKG9wZXJhdG9ycywgdmFsdWVzKSk7IC8vIEV4aXQgbG9vcCBhZnRlciBleGVjdXRpbmcgYW4gb3BlbmluZyBwYXJlbnRoZXNpcyBvciBmdW5jdGlvblxuXG5cbiAgICAgIGFmdGVyVmFsdWUgPSBjdXJyLm5vdGF0aW9uID09PSAncG9zdGZpeCc7XG5cbiAgICAgIGlmIChjdXJyLnN5bWJvbCAhPT0gJyknKSB7XG4gICAgICAgIG9wZXJhdG9ycy5wdXNoKGN1cnIpOyAvLyBQb3N0Zml4IGFsd2F5cyBoYXMgcHJlY2VkZW5jZSBvdmVyIGFueSBvcGVyYXRvciB0aGF0IGZvbGxvd3MgYWZ0ZXIgaXRcblxuICAgICAgICBpZiAoYWZ0ZXJWYWx1ZSkgZXhlYyhvcGVyYXRvcnMsIHZhbHVlcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub3ROdW1iZXIpIHtcbiAgICAgIC8vIHByZWZpeCBvcGVyYXRvciBvciBmdW5jdGlvblxuICAgICAgb3BlcmF0b3JzLnB1c2gobm90TnVtYmVyLnByZWZpeCB8fCBub3ROdW1iZXIuZnVuYyk7XG5cbiAgICAgIGlmIChub3ROdW1iZXIuZnVuYykge1xuICAgICAgICAvLyBSZXF1aXJlIGFuIG9wZW5pbmcgcGFyZW50aGVzaXNcbiAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWMoZXhwcmVzc2lvbik7XG5cbiAgICAgICAgaWYgKCFtYXRjaCB8fCBtYXRjaFswXSAhPT0gJygnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMzgsIG1hdGNoID8gbWF0Y2guaW5kZXggOiBleHByZXNzaW9uLmxlbmd0aCwgZXhwcmVzc2lvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gbnVtYmVyXG4gICAgICB2YWx1ZXMucHVzaCgrdG9rZW4pO1xuICAgICAgYWZ0ZXJWYWx1ZSA9IHRydWU7XG4gICAgfVxuICB9IHdoaWxlIChtYXRjaCAmJiBvcGVyYXRvcnMubGVuZ3RoKTtcblxuICBpZiAob3BlcmF0b3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDM5LCBtYXRjaCA/IG1hdGNoLmluZGV4IDogZXhwcmVzc2lvbi5sZW5ndGgsIGV4cHJlc3Npb24pO1xuICB9IGVsc2UgaWYgKG1hdGNoKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDAsIG1hdGNoID8gbWF0Y2guaW5kZXggOiBleHByZXNzaW9uLmxlbmd0aCwgZXhwcmVzc2lvbik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbHVlcy5wb3AoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZXZlcnNlU3RyaW5nKHN0cikge1xuICByZXR1cm4gc3RyLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XG59XG4vKipcbiAqIEhlbHBlciBmb3IgZG9pbmcgbWF0aCB3aXRoIENTUyBVbml0cy4gQWNjZXB0cyBhIGZvcm11bGEgYXMgYSBzdHJpbmcuIEFsbCB2YWx1ZXMgaW4gdGhlIGZvcm11bGEgbXVzdCBoYXZlIHRoZSBzYW1lIHVuaXQgKG9yIGJlIHVuaXRsZXNzKS4gU3VwcG9ydHMgY29tcGxleCBmb3JtdWxhcyB1dGxpemlpbmcgYWRkaXRpb24sIHN1YnRyYWN0aW9uLCBtdWx0aXBsaWNhdGlvbiwgZGl2aXNpb24sIHNxdWFyZSByb290LCBwb3dlcnMsIGZhY3RvcmlhbCwgbWluLCBtYXgsIGFzIHdlbGwgYXMgcGFyZW50aGVzZXMgZm9yIG9yZGVyIG9mIG9wZXJhdGlvbi5cbiAqXG4gKkluIGNhc2VzIHdoZXJlIHlvdSBuZWVkIHRvIGRvIGNhbGN1bGF0aW9ucyB3aXRoIG1peGVkIHVuaXRzIHdoZXJlIG9uZSB1bml0IGlzIGEgW3JlbGF0aXZlIGxlbmd0aCB1bml0XShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvbGVuZ3RoI1JlbGF0aXZlX2xlbmd0aF91bml0cyksIHlvdSB3aWxsIHdhbnQgdG8gdXNlIFtDU1MgQ2FsY10oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2NhbGMpLlxuICpcbiAqICp3YXJuaW5nKiBXaGlsZSB3ZSd2ZSBkb25lIGV2ZXJ5dGhpbmcgcG9zc2libGUgdG8gZW5zdXJlIG1hdGggc2FmZWx5IGV2YWx1dGVzIGZvcm11bGFzIGV4cHJlc3NlZCBhcyBzdHJpbmdzLCB5b3Ugc2hvdWxkIGFsd2F5cyB1c2UgZXh0cmVtZSBjYXV0aW9uIHdoZW4gcGFzc2luZyBgbWF0aGAgdXNlciBwcm92aWRlZCB2YWx1ZXMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBmb250U2l6ZTogbWF0aCgnMTJyZW0gKyA4cmVtJyksXG4gKiAgIGZvbnRTaXplOiBtYXRoKCcoMTJweCArIDJweCkgKiAzJyksXG4gKiAgIGZvbnRTaXplOiBtYXRoKCczcHheMiArIHNxcnQoNCknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgZm9udFNpemU6ICR7bWF0aCgnMTJyZW0gKyA4cmVtJyl9O1xuICogICBmb250U2l6ZTogJHttYXRoKCcoMTJweCArIDJweCkgKiAzJyl9O1xuICogICBmb250U2l6ZTogJHttYXRoKCczcHheMiArIHNxcnQoNCknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICBmb250U2l6ZTogJzIwcmVtJyxcbiAqICAgZm9udFNpemU6ICc0MnB4JyxcbiAqICAgZm9udFNpemU6ICcxMXB4JyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIG1hdGgoZm9ybXVsYSwgYWRkaXRpb25hbFN5bWJvbHMpIHtcbiAgdmFyIHJldmVyc2VkRm9ybXVsYSA9IHJldmVyc2VTdHJpbmcoZm9ybXVsYSk7XG4gIHZhciBmb3JtdWxhTWF0Y2ggPSByZXZlcnNlZEZvcm11bGEubWF0Y2godW5pdFJlZ0V4cCk7IC8vIENoZWNrIHRoYXQgYWxsIHVuaXRzIGFyZSB0aGUgc2FtZVxuXG4gIGlmIChmb3JtdWxhTWF0Y2ggJiYgIWZvcm11bGFNYXRjaC5ldmVyeShmdW5jdGlvbiAodW5pdCkge1xuICAgIHJldHVybiB1bml0ID09PSBmb3JtdWxhTWF0Y2hbMF07XG4gIH0pKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDEpO1xuICB9XG5cbiAgdmFyIGNsZWFuRm9ybXVsYSA9IHJldmVyc2VTdHJpbmcocmV2ZXJzZWRGb3JtdWxhLnJlcGxhY2UodW5pdFJlZ0V4cCwgJycpKTtcbiAgcmV0dXJuIFwiXCIgKyBjYWxjdWxhdGUoY2xlYW5Gb3JtdWxhLCBhZGRpdGlvbmFsU3ltYm9scykgKyAoZm9ybXVsYU1hdGNoID8gcmV2ZXJzZVN0cmluZyhmb3JtdWxhTWF0Y2hbMF0pIDogJycpO1xufVxuXG52YXIgY3NzVmFyaWFibGVSZWdleCA9IC8tLVtcXFNdKi9nO1xuLyoqXG4gKiBGZXRjaGVzIHRoZSB2YWx1ZSBvZiBhIHBhc3NlZCBDU1MgVmFyaWFibGUgaW4gdGhlIDpyb290IHNjb3BlLCBvciBvdGhlcndpc2UgcmV0dXJucyBhIGRlZmF1bHRWYWx1ZSBpZiBwcm92aWRlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnYmFja2dyb3VuZCc6IGNzc1ZhcignLS1iYWNrZ3JvdW5kLWNvbG9yJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Y3NzVmFyKCctLWJhY2tncm91bmQtY29sb3InKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnYmFja2dyb3VuZCc6ICdyZWQnXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gY3NzVmFyKGNzc1ZhcmlhYmxlLCBkZWZhdWx0VmFsdWUpIHtcbiAgaWYgKCFjc3NWYXJpYWJsZSB8fCAhY3NzVmFyaWFibGUubWF0Y2goY3NzVmFyaWFibGVSZWdleCkpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3Myk7XG4gIH1cblxuICB2YXIgdmFyaWFibGVWYWx1ZTtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlVmFsdWUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZShjc3NWYXJpYWJsZSk7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG5cbiAgaWYgKHZhcmlhYmxlVmFsdWUpIHtcbiAgICByZXR1cm4gdmFyaWFibGVWYWx1ZS50cmltKCk7XG4gIH0gZWxzZSBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDc0KTtcbn1cblxuLy8gQHByaXZhdGVcbmZ1bmN0aW9uIGNhcGl0YWxpemVTdHJpbmcoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbnZhciBwb3NpdGlvbk1hcCQxID0gWydUb3AnLCAnUmlnaHQnLCAnQm90dG9tJywgJ0xlZnQnXTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVQcm9wZXJ0eShwcm9wZXJ0eSwgcG9zaXRpb24pIHtcbiAgaWYgKCFwcm9wZXJ0eSkgcmV0dXJuIHBvc2l0aW9uLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBzcGxpdFByb3BlcnR5ID0gcHJvcGVydHkuc3BsaXQoJy0nKTtcblxuICBpZiAoc3BsaXRQcm9wZXJ0eS5sZW5ndGggPiAxKSB7XG4gICAgc3BsaXRQcm9wZXJ0eS5zcGxpY2UoMSwgMCwgcG9zaXRpb24pO1xuICAgIHJldHVybiBzcGxpdFByb3BlcnR5LnJlZHVjZShmdW5jdGlvbiAoYWNjLCB2YWwpIHtcbiAgICAgIHJldHVybiBcIlwiICsgYWNjICsgY2FwaXRhbGl6ZVN0cmluZyh2YWwpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGpvaW5lZFByb3BlcnR5ID0gcHJvcGVydHkucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgXCIkMVwiICsgcG9zaXRpb24gKyBcIiQyXCIpO1xuICByZXR1cm4gcHJvcGVydHkgPT09IGpvaW5lZFByb3BlcnR5ID8gXCJcIiArIHByb3BlcnR5ICsgcG9zaXRpb24gOiBqb2luZWRQcm9wZXJ0eTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTdHlsZXMocHJvcGVydHksIHZhbHVlc1dpdGhEZWZhdWx0cykge1xuICB2YXIgc3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXNXaXRoRGVmYXVsdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAodmFsdWVzV2l0aERlZmF1bHRzW2ldIHx8IHZhbHVlc1dpdGhEZWZhdWx0c1tpXSA9PT0gMCkge1xuICAgICAgc3R5bGVzW2dlbmVyYXRlUHJvcGVydHkocHJvcGVydHksIHBvc2l0aW9uTWFwJDFbaV0pXSA9IHZhbHVlc1dpdGhEZWZhdWx0c1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3R5bGVzO1xufVxuLyoqXG4gKiBFbmFibGVzIHNob3J0aGFuZCBmb3IgZGlyZWN0aW9uLWJhc2VkIHByb3BlcnRpZXMuIEl0IGFjY2VwdHMgYSBwcm9wZXJ0eSAoaHlwaGVuYXRlZCBvciBjYW1lbENhc2VkKSBhbmQgdXAgdG8gZm91ciB2YWx1ZXMgdGhhdCBtYXAgdG8gdG9wLCByaWdodCwgYm90dG9tLCBhbmQgbGVmdCwgcmVzcGVjdGl2ZWx5LiBZb3UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhbiBlbXB0eSBzdHJpbmcgdG8gZ2V0IG9ubHkgdGhlIGRpcmVjdGlvbmFsIHZhbHVlcyBhcyBwcm9wZXJ0aWVzLiBZb3UgY2FuIGFsc28gb3B0aW9uYWxseSBwYXNzIGEgbnVsbCBhcmd1bWVudCBmb3IgYSBkaXJlY3Rpb25hbCB2YWx1ZSB0byBpZ25vcmUgaXQuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5kaXJlY3Rpb25hbFByb3BlcnR5KCdwYWRkaW5nJywgJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2RpcmVjdGlvbmFsUHJvcGVydHkoJ3BhZGRpbmcnLCAnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAncGFkZGluZ1RvcCc6ICcxMnB4JyxcbiAqICAgJ3BhZGRpbmdSaWdodCc6ICcyNHB4JyxcbiAqICAgJ3BhZGRpbmdCb3R0b20nOiAnMzZweCcsXG4gKiAgICdwYWRkaW5nTGVmdCc6ICc0OHB4J1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gZGlyZWN0aW9uYWxQcm9wZXJ0eShwcm9wZXJ0eSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgLy8gIHByZXR0aWVyLWlnbm9yZVxuICB2YXIgZmlyc3RWYWx1ZSA9IHZhbHVlc1swXSxcbiAgICAgIF92YWx1ZXMkID0gdmFsdWVzWzFdLFxuICAgICAgc2Vjb25kVmFsdWUgPSBfdmFsdWVzJCA9PT0gdm9pZCAwID8gZmlyc3RWYWx1ZSA6IF92YWx1ZXMkLFxuICAgICAgX3ZhbHVlcyQyID0gdmFsdWVzWzJdLFxuICAgICAgdGhpcmRWYWx1ZSA9IF92YWx1ZXMkMiA9PT0gdm9pZCAwID8gZmlyc3RWYWx1ZSA6IF92YWx1ZXMkMixcbiAgICAgIF92YWx1ZXMkMyA9IHZhbHVlc1szXSxcbiAgICAgIGZvdXJ0aFZhbHVlID0gX3ZhbHVlcyQzID09PSB2b2lkIDAgPyBzZWNvbmRWYWx1ZSA6IF92YWx1ZXMkMztcbiAgdmFyIHZhbHVlc1dpdGhEZWZhdWx0cyA9IFtmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSwgZm91cnRoVmFsdWVdO1xuICByZXR1cm4gZ2VuZXJhdGVTdHlsZXMocHJvcGVydHksIHZhbHVlc1dpdGhEZWZhdWx0cyk7XG59XG5cbi8qKlxuICogQ2hlY2sgaWYgYSBzdHJpbmcgZW5kcyB3aXRoIHNvbWV0aGluZ1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZW5kc1dpdGgoc3RyaW5nLCBzdWZmaXgpIHtcbiAgcmV0dXJuIHN0cmluZy5zdWJzdHIoLXN1ZmZpeC5sZW5ndGgpID09PSBzdWZmaXg7XG59XG5cbnZhciBjc3NSZWdleCQxID0gL14oWystXT8oPzpcXGQrfFxcZCpcXC5cXGQrKSkoW2Etel0qfCUpJC87XG4vKipcbiAqIFJldHVybnMgYSBnaXZlbiBDU1MgdmFsdWUgbWludXMgaXRzIHVuaXQgb2YgbWVhc3VyZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnLS1kaW1lbnNpb24nOiBzdHJpcFVuaXQoJzEwMHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgLS1kaW1lbnNpb246ICR7c3RyaXBVbml0KCcxMDBweCcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgICctLWRpbWVuc2lvbic6IDEwMFxuICogfVxuICovXG5cbmZ1bmN0aW9uIHN0cmlwVW5pdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgcmV0dXJuIHZhbHVlO1xuICB2YXIgbWF0Y2hlZFZhbHVlID0gdmFsdWUubWF0Y2goY3NzUmVnZXgkMSk7XG4gIHJldHVybiBtYXRjaGVkVmFsdWUgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlO1xufVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIHBpeGVsLXRvLXggY29udmVydGVyc1xuICogQHByaXZhdGVcbiAqL1xuXG52YXIgcHh0b0ZhY3RvcnkgPSBmdW5jdGlvbiBweHRvRmFjdG9yeSh0bykge1xuICByZXR1cm4gZnVuY3Rpb24gKHB4dmFsLCBiYXNlKSB7XG4gICAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgICAgYmFzZSA9ICcxNnB4JztcbiAgICB9XG5cbiAgICB2YXIgbmV3UHh2YWwgPSBweHZhbDtcbiAgICB2YXIgbmV3QmFzZSA9IGJhc2U7XG5cbiAgICBpZiAodHlwZW9mIHB4dmFsID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKCFlbmRzV2l0aChweHZhbCwgJ3B4JykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjksIHRvLCBweHZhbCk7XG4gICAgICB9XG5cbiAgICAgIG5ld1B4dmFsID0gc3RyaXBVbml0KHB4dmFsKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIWVuZHNXaXRoKGJhc2UsICdweCcpKSB7XG4gICAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDcwLCB0bywgYmFzZSk7XG4gICAgICB9XG5cbiAgICAgIG5ld0Jhc2UgPSBzdHJpcFVuaXQoYmFzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXdQeHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDcxLCBweHZhbCwgdG8pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmV3QmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDcyLCBiYXNlLCB0byk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFwiXCIgKyBuZXdQeHZhbCAvIG5ld0Jhc2UgKyB0bztcbiAgfTtcbn07XG5cbnZhciBwaXhlbHN0byA9IHB4dG9GYWN0b3J5O1xuXG4vKipcbiAqIENvbnZlcnQgcGl4ZWwgdmFsdWUgdG8gZW1zLiBUaGUgZGVmYXVsdCBiYXNlIHZhbHVlIGlzIDE2cHgsIGJ1dCBjYW4gYmUgY2hhbmdlZCBieSBwYXNzaW5nIGFcbiAqIHNlY29uZCBhcmd1bWVudCB0byB0aGUgZnVuY3Rpb24uXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gcHh2YWxcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2Jhc2U9JzE2cHgnXVxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ2hlaWdodCc6IGVtKCcxNnB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgaGVpZ2h0OiAke2VtKCcxNnB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnaGVpZ2h0JzogJzFlbSdcbiAqIH1cbiAqL1xuXG52YXIgZW0gPSAvKiNfX1BVUkVfXyovcGl4ZWxzdG8oJ2VtJyk7XG52YXIgZW0kMSA9IGVtO1xuXG52YXIgY3NzUmVnZXggPSAvXihbKy1dPyg/OlxcZCt8XFxkKlxcLlxcZCspKShbYS16XSp8JSkkLztcbi8qKlxuICogUmV0dXJucyBhIGdpdmVuIENTUyB2YWx1ZSBhbmQgaXRzIHVuaXQgYXMgZWxlbWVudHMgb2YgYW4gYXJyYXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJy0tZGltZW5zaW9uJzogZ2V0VmFsdWVBbmRVbml0KCcxMDBweCcpWzBdLFxuICogICAnLS11bml0JzogZ2V0VmFsdWVBbmRVbml0KCcxMDBweCcpWzFdLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAtLWRpbWVuc2lvbjogJHtnZXRWYWx1ZUFuZFVuaXQoJzEwMHB4JylbMF19O1xuICogICAtLXVuaXQ6ICR7Z2V0VmFsdWVBbmRVbml0KCcxMDBweCcpWzFdfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgICctLWRpbWVuc2lvbic6IDEwMCxcbiAqICAgJy0tdW5pdCc6ICdweCcsXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZ2V0VmFsdWVBbmRVbml0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gW3ZhbHVlLCAnJ107XG4gIHZhciBtYXRjaGVkVmFsdWUgPSB2YWx1ZS5tYXRjaChjc3NSZWdleCk7XG4gIGlmIChtYXRjaGVkVmFsdWUpIHJldHVybiBbcGFyc2VGbG9hdCh2YWx1ZSksIG1hdGNoZWRWYWx1ZVsyXV07XG4gIHJldHVybiBbdmFsdWUsIHVuZGVmaW5lZF07XG59XG5cbi8qKlxuICogSGVscGVyIGZvciB0YXJnZXRpbmcgcnVsZXMgaW4gYSBzdHlsZSBibG9jayBnZW5lcmF0ZWQgYnkgcG9saXNoZWQgbW9kdWxlcyB0aGF0IG5lZWQgIWltcG9ydGFudC1sZXZlbCBzcGVjaWZpY2l0eS4gQ2FuIG9wdGlvbmFsbHkgc3BlY2lmeSBhIHJ1bGUgKG9yIHJ1bGVzKSB0byB0YXJnZXQgc3BlY2lmaWMgcnVsZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uaW1wb3J0YW50KGNvdmVyKCkpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7aW1wb3J0YW50KGNvdmVyKCkpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxuICogICAndG9wJzogJzAgIWltcG9ydGFudCcsXG4gKiAgICdyaWdodDogJzAgIWltcG9ydGFudCcsXG4gKiAgICdib3R0b20nOiAnMCAhaW1wb3J0YW50JyxcbiAqICAgJ2xlZnQ6ICcwICFpbXBvcnRhbnQnXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gaW1wb3J0YW50KHN0eWxlQmxvY2ssIHJ1bGVzKSB7XG4gIGlmICh0eXBlb2Ygc3R5bGVCbG9jayAhPT0gJ29iamVjdCcgfHwgc3R5bGVCbG9jayA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDc1LCB0eXBlb2Ygc3R5bGVCbG9jayk7XG4gIH1cblxuICB2YXIgbmV3U3R5bGVCbG9jayA9IHt9O1xuICBPYmplY3Qua2V5cyhzdHlsZUJsb2NrKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAodHlwZW9mIHN0eWxlQmxvY2tba2V5XSA9PT0gJ29iamVjdCcgJiYgc3R5bGVCbG9ja1trZXldICE9PSBudWxsKSB7XG4gICAgICBuZXdTdHlsZUJsb2NrW2tleV0gPSBpbXBvcnRhbnQoc3R5bGVCbG9ja1trZXldLCBydWxlcyk7XG4gICAgfSBlbHNlIGlmICghcnVsZXMgfHwgcnVsZXMgJiYgKHJ1bGVzID09PSBrZXkgfHwgcnVsZXMuaW5kZXhPZihrZXkpID49IDApKSB7XG4gICAgICBuZXdTdHlsZUJsb2NrW2tleV0gPSBzdHlsZUJsb2NrW2tleV0gKyBcIiAhaW1wb3J0YW50XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlQmxvY2tba2V5XSA9IHN0eWxlQmxvY2tba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbmV3U3R5bGVCbG9jaztcbn1cblxudmFyIHJhdGlvTmFtZXMgPSB7XG4gIG1pbm9yU2Vjb25kOiAxLjA2NyxcbiAgbWFqb3JTZWNvbmQ6IDEuMTI1LFxuICBtaW5vclRoaXJkOiAxLjIsXG4gIG1ham9yVGhpcmQ6IDEuMjUsXG4gIHBlcmZlY3RGb3VydGg6IDEuMzMzLFxuICBhdWdGb3VydGg6IDEuNDE0LFxuICBwZXJmZWN0RmlmdGg6IDEuNSxcbiAgbWlub3JTaXh0aDogMS42LFxuICBnb2xkZW5TZWN0aW9uOiAxLjYxOCxcbiAgbWFqb3JTaXh0aDogMS42NjcsXG4gIG1pbm9yU2V2ZW50aDogMS43NzgsXG4gIG1ham9yU2V2ZW50aDogMS44NzUsXG4gIG9jdGF2ZTogMixcbiAgbWFqb3JUZW50aDogMi41LFxuICBtYWpvckVsZXZlbnRoOiAyLjY2NyxcbiAgbWFqb3JUd2VsZnRoOiAzLFxuICBkb3VibGVPY3RhdmU6IDRcbn07XG5cbmZ1bmN0aW9uIGdldFJhdGlvKHJhdGlvTmFtZSkge1xuICByZXR1cm4gcmF0aW9OYW1lc1tyYXRpb05hbWVdO1xufVxuLyoqXG4gKiBFc3RhYmxpc2ggY29uc2lzdGVudCBtZWFzdXJlbWVudHMgYW5kIHNwYWNpYWwgcmVsYXRpb25zaGlwcyB0aHJvdWdob3V0IHlvdXIgcHJvamVjdHMgYnkgaW5jcmVtZW50aW5nIGFuIGVtIG9yIHJlbSB2YWx1ZSB1cCBvciBkb3duIGEgZGVmaW5lZCBzY2FsZS4gV2UgcHJvdmlkZSBhIGxpc3Qgb2YgY29tbW9ubHkgdXNlZCBzY2FsZXMgYXMgcHJlLWRlZmluZWQgdmFyaWFibGVzLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgIC8vIEluY3JlbWVudCB0d28gc3RlcHMgdXAgdGhlIGRlZmF1bHQgc2NhbGVcbiAqICAgJ2ZvbnRTaXplJzogbW9kdWxhclNjYWxlKDIpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICAvLyBJbmNyZW1lbnQgdHdvIHN0ZXBzIHVwIHRoZSBkZWZhdWx0IHNjYWxlXG4gKiAgIGZvbnRTaXplOiAke21vZHVsYXJTY2FsZSgyKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgICdmb250U2l6ZSc6ICcxLjc3Njg5ZW0nXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiBtb2R1bGFyU2NhbGUoc3RlcHMsIGJhc2UsIHJhdGlvKSB7XG4gIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICBiYXNlID0gJzFlbSc7XG4gIH1cblxuICBpZiAocmF0aW8gPT09IHZvaWQgMCkge1xuICAgIHJhdGlvID0gMS4zMzM7XG4gIH1cblxuICBpZiAodHlwZW9mIHN0ZXBzICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQyKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcmF0aW8gPT09ICdzdHJpbmcnICYmICFyYXRpb05hbWVzW3JhdGlvXSkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQzKTtcbiAgfVxuXG4gIHZhciBfcmVmID0gdHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnID8gZ2V0VmFsdWVBbmRVbml0KGJhc2UpIDogW2Jhc2UsICcnXSxcbiAgICAgIHJlYWxCYXNlID0gX3JlZlswXSxcbiAgICAgIHVuaXQgPSBfcmVmWzFdO1xuXG4gIHZhciByZWFsUmF0aW8gPSB0eXBlb2YgcmF0aW8gPT09ICdzdHJpbmcnID8gZ2V0UmF0aW8ocmF0aW8pIDogcmF0aW87XG5cbiAgaWYgKHR5cGVvZiByZWFsQmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0NCwgYmFzZSk7XG4gIH1cblxuICByZXR1cm4gXCJcIiArIHJlYWxCYXNlICogTWF0aC5wb3cocmVhbFJhdGlvLCBzdGVwcykgKyAodW5pdCB8fCAnJyk7XG59XG5cbi8qKlxuICogQ29udmVydCBwaXhlbCB2YWx1ZSB0byByZW1zLiBUaGUgZGVmYXVsdCBiYXNlIHZhbHVlIGlzIDE2cHgsIGJ1dCBjYW4gYmUgY2hhbmdlZCBieSBwYXNzaW5nIGFcbiAqIHNlY29uZCBhcmd1bWVudCB0byB0aGUgZnVuY3Rpb24uXG4gKiBAZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gcHh2YWxcbiAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gW2Jhc2U9JzE2cHgnXVxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ2hlaWdodCc6IHJlbSgnMTZweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGhlaWdodDogJHtyZW0oJzE2cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgICdoZWlnaHQnOiAnMXJlbSdcbiAqIH1cbiAqL1xuXG52YXIgcmVtID0gLyojX19QVVJFX18qL3BpeGVsc3RvKCdyZW0nKTtcbnZhciByZW0kMSA9IHJlbTtcblxudmFyIGRlZmF1bHRGb250U2l6ZSA9IDE2O1xuXG5mdW5jdGlvbiBjb252ZXJ0QmFzZShiYXNlKSB7XG4gIHZhciBkZWNvbnN0cnVjdGVkVmFsdWUgPSBnZXRWYWx1ZUFuZFVuaXQoYmFzZSk7XG5cbiAgaWYgKGRlY29uc3RydWN0ZWRWYWx1ZVsxXSA9PT0gJ3B4Jykge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGJhc2UpO1xuICB9XG5cbiAgaWYgKGRlY29uc3RydWN0ZWRWYWx1ZVsxXSA9PT0gJyUnKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoYmFzZSkgLyAxMDAgKiBkZWZhdWx0Rm9udFNpemU7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3OCwgZGVjb25zdHJ1Y3RlZFZhbHVlWzFdKTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZUZyb21Eb2MoKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgdmFyIHJvb3RGb250U2l6ZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZTtcbiAgICByZXR1cm4gcm9vdEZvbnRTaXplID8gY29udmVydEJhc2Uocm9vdEZvbnRTaXplKSA6IGRlZmF1bHRGb250U2l6ZTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG4gIHJldHVybiBkZWZhdWx0Rm9udFNpemU7XG59XG4vKipcbiAqIENvbnZlcnQgcmVtIHZhbHVlcyB0byBweC4gQnkgZGVmYXVsdCwgdGhlIGJhc2UgdmFsdWUgaXMgcHVsbGVkIGZyb20gdGhlIGZvbnQtc2l6ZSBwcm9wZXJ0eSBvbiB0aGUgcm9vdCBlbGVtZW50IChpZiBpdCBpcyBzZXQgaW4gJSBvciBweCkuIEl0IGRlZmF1bHRzIHRvIDE2cHggaWYgbm90IGZvdW5kIG9uIHRoZSByb290LiBZb3UgY2FuIGFsc28gb3ZlcnJpZGUgdGhlIGJhc2UgdmFsdWUgYnkgcHJvdmlkaW5nIHlvdXIgb3duIGJhc2UgaW4gJSBvciBweC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdoZWlnaHQnOiByZW1Ub1B4KCcxLjZyZW0nKVxuICogICAnaGVpZ2h0JzogcmVtVG9QeCgnMS42cmVtJywgJzEwcHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBoZWlnaHQ6ICR7cmVtVG9QeCgnMS42cmVtJyl9XG4gKiAgIGhlaWdodDogJHtyZW1Ub1B4KCcxLjZyZW0nLCAnMTBweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2hlaWdodCc6ICcyNS42cHgnLFxuICogICAnaGVpZ2h0JzogJzE2cHgnLFxuICogfVxuICovXG5cblxuZnVuY3Rpb24gcmVtVG9QeCh2YWx1ZSwgYmFzZSkge1xuICB2YXIgZGVjb25zdHJ1Y3RlZFZhbHVlID0gZ2V0VmFsdWVBbmRVbml0KHZhbHVlKTtcblxuICBpZiAoZGVjb25zdHJ1Y3RlZFZhbHVlWzFdICE9PSAncmVtJyAmJiBkZWNvbnN0cnVjdGVkVmFsdWVbMV0gIT09ICcnKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzcsIGRlY29uc3RydWN0ZWRWYWx1ZVsxXSk7XG4gIH1cblxuICB2YXIgbmV3QmFzZSA9IGJhc2UgPyBjb252ZXJ0QmFzZShiYXNlKSA6IGdldEJhc2VGcm9tRG9jKCk7XG4gIHJldHVybiBkZWNvbnN0cnVjdGVkVmFsdWVbMF0gKiBuZXdCYXNlICsgXCJweFwiO1xufVxuXG52YXIgZnVuY3Rpb25zTWFwJDMgPSB7XG4gIGJhY2s6ICdjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KScsXG4gIGNpcmM6ICdjdWJpYy1iZXppZXIoMC42MDAsICAwLjA0MCwgMC45ODAsIDAuMzM1KScsXG4gIGN1YmljOiAnY3ViaWMtYmV6aWVyKDAuNTUwLCAgMC4wNTUsIDAuNjc1LCAwLjE5MCknLFxuICBleHBvOiAnY3ViaWMtYmV6aWVyKDAuOTUwLCAgMC4wNTAsIDAuNzk1LCAwLjAzNSknLFxuICBxdWFkOiAnY3ViaWMtYmV6aWVyKDAuNTUwLCAgMC4wODUsIDAuNjgwLCAwLjUzMCknLFxuICBxdWFydDogJ2N1YmljLWJlemllcigwLjg5NSwgIDAuMDMwLCAwLjY4NSwgMC4yMjApJyxcbiAgcXVpbnQ6ICdjdWJpYy1iZXppZXIoMC43NTUsICAwLjA1MCwgMC44NTUsIDAuMDYwKScsXG4gIHNpbmU6ICdjdWJpYy1iZXppZXIoMC40NzAsICAwLjAwMCwgMC43NDUsIDAuNzE1KSdcbn07XG4vKipcbiAqIFN0cmluZyB0byByZXByZXNlbnQgY29tbW9uIGVhc2luZyBmdW5jdGlvbnMgYXMgZGVtb25zdHJhdGVkIGhlcmU6IChnaXRodWIuY29tL2phdWtpYS9lYXNpZSkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IGVhc2VJbigncXVhZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqICBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICR7ZWFzZUluKCdxdWFkJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnZGl2Jzoge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDg1LCAwLjY4MCwgMC41MzApJyxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBlYXNlSW4oZnVuY3Rpb25OYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbnNNYXAkM1tmdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKS50cmltKCldO1xufVxuXG52YXIgZnVuY3Rpb25zTWFwJDIgPSB7XG4gIGJhY2s6ICdjdWJpYy1iZXppZXIoMC42ODAsIC0wLjU1MCwgMC4yNjUsIDEuNTUwKScsXG4gIGNpcmM6ICdjdWJpYy1iZXppZXIoMC43ODUsICAwLjEzNSwgMC4xNTAsIDAuODYwKScsXG4gIGN1YmljOiAnY3ViaWMtYmV6aWVyKDAuNjQ1LCAgMC4wNDUsIDAuMzU1LCAxLjAwMCknLFxuICBleHBvOiAnY3ViaWMtYmV6aWVyKDEuMDAwLCAgMC4wMDAsIDAuMDAwLCAxLjAwMCknLFxuICBxdWFkOiAnY3ViaWMtYmV6aWVyKDAuNDU1LCAgMC4wMzAsIDAuNTE1LCAwLjk1NSknLFxuICBxdWFydDogJ2N1YmljLWJlemllcigwLjc3MCwgIDAuMDAwLCAwLjE3NSwgMS4wMDApJyxcbiAgcXVpbnQ6ICdjdWJpYy1iZXppZXIoMC44NjAsICAwLjAwMCwgMC4wNzAsIDEuMDAwKScsXG4gIHNpbmU6ICdjdWJpYy1iZXppZXIoMC40NDUsICAwLjA1MCwgMC41NTAsIDAuOTUwKSdcbn07XG4vKipcbiAqIFN0cmluZyB0byByZXByZXNlbnQgY29tbW9uIGVhc2luZyBmdW5jdGlvbnMgYXMgZGVtb25zdHJhdGVkIGhlcmU6IChnaXRodWIuY29tL2phdWtpYS9lYXNpZSkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IGVhc2VJbk91dCgncXVhZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqICBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICR7ZWFzZUluT3V0KCdxdWFkJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnZGl2Jzoge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogJ2N1YmljLWJlemllcigwLjQ1NSwgIDAuMDMwLCAwLjUxNSwgMC45NTUpJyxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBlYXNlSW5PdXQoZnVuY3Rpb25OYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbnNNYXAkMltmdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKS50cmltKCldO1xufVxuXG52YXIgZnVuY3Rpb25zTWFwJDEgPSB7XG4gIGJhY2s6ICdjdWJpYy1iZXppZXIoMC4xNzUsICAwLjg4NSwgMC4zMjAsIDEuMjc1KScsXG4gIGN1YmljOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAgMC42MTAsIDAuMzU1LCAxLjAwMCknLFxuICBjaXJjOiAnY3ViaWMtYmV6aWVyKDAuMDc1LCAgMC44MjAsIDAuMTY1LCAxLjAwMCknLFxuICBleHBvOiAnY3ViaWMtYmV6aWVyKDAuMTkwLCAgMS4wMDAsIDAuMjIwLCAxLjAwMCknLFxuICBxdWFkOiAnY3ViaWMtYmV6aWVyKDAuMjUwLCAgMC40NjAsIDAuNDUwLCAwLjk0MCknLFxuICBxdWFydDogJ2N1YmljLWJlemllcigwLjE2NSwgIDAuODQwLCAwLjQ0MCwgMS4wMDApJyxcbiAgcXVpbnQ6ICdjdWJpYy1iZXppZXIoMC4yMzAsICAxLjAwMCwgMC4zMjAsIDEuMDAwKScsXG4gIHNpbmU6ICdjdWJpYy1iZXppZXIoMC4zOTAsICAwLjU3NSwgMC41NjUsIDEuMDAwKSdcbn07XG4vKipcbiAqIFN0cmluZyB0byByZXByZXNlbnQgY29tbW9uIGVhc2luZyBmdW5jdGlvbnMgYXMgZGVtb25zdHJhdGVkIGhlcmU6IChnaXRodWIuY29tL2phdWtpYS9lYXNpZSkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IGVhc2VPdXQoJ3F1YWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiAgY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAke2Vhc2VPdXQoJ3F1YWQnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdkaXYnOiB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiAnY3ViaWMtYmV6aWVyKDAuMjUwLCAgMC40NjAsIDAuNDUwLCAwLjk0MCknLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIGVhc2VPdXQoZnVuY3Rpb25OYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbnNNYXAkMVtmdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKS50cmltKCldO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBDU1MgY2FsYyBmb3JtdWxhIGZvciBsaW5lYXIgaW50ZXJwb2xhdGlvbiBvZiBhIHByb3BlcnR5IGJldHdlZW4gdHdvIHZhbHVlcy4gQWNjZXB0cyBvcHRpb25hbCBtaW5TY3JlZW4gKGRlZmF1bHRzIHRvICczMjBweCcpIGFuZCBtYXhTY3JlZW4gKGRlZmF1bHRzIHRvICcxMjAwcHgnKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBmb250U2l6ZTogYmV0d2VlbignMjBweCcsICcxMDBweCcsICc0MDBweCcsICcxMDAwcHgnKSxcbiAqICAgZm9udFNpemU6IGJldHdlZW4oJzIwcHgnLCAnMTAwcHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBmb250U2l6ZTogJHtiZXR3ZWVuKCcyMHB4JywgJzEwMHB4JywgJzQwMHB4JywgJzEwMDBweCcpfTtcbiAqICAgZm9udFNpemU6ICR7YmV0d2VlbignMjBweCcsICcxMDBweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBoMToge1xuICogICAnZm9udFNpemUnOiAnY2FsYygtMzMuMzMzMzMzMzMzMzMzMzRweCArIDEzLjMzMzMzMzMzMzMzMzMzNHZ3KScsXG4gKiAgICdmb250U2l6ZSc6ICdjYWxjKC05LjA5MDkwOTA5MDkwOTA5M3B4ICsgOS4wOTA5MDkwOTA5MDkwOTJ2dyknXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gYmV0d2Vlbihmcm9tU2l6ZSwgdG9TaXplLCBtaW5TY3JlZW4sIG1heFNjcmVlbikge1xuICBpZiAobWluU2NyZWVuID09PSB2b2lkIDApIHtcbiAgICBtaW5TY3JlZW4gPSAnMzIwcHgnO1xuICB9XG5cbiAgaWYgKG1heFNjcmVlbiA9PT0gdm9pZCAwKSB7XG4gICAgbWF4U2NyZWVuID0gJzEyMDBweCc7XG4gIH1cblxuICB2YXIgX2dldFZhbHVlQW5kVW5pdCA9IGdldFZhbHVlQW5kVW5pdChmcm9tU2l6ZSksXG4gICAgICB1bml0bGVzc0Zyb21TaXplID0gX2dldFZhbHVlQW5kVW5pdFswXSxcbiAgICAgIGZyb21TaXplVW5pdCA9IF9nZXRWYWx1ZUFuZFVuaXRbMV07XG5cbiAgdmFyIF9nZXRWYWx1ZUFuZFVuaXQyID0gZ2V0VmFsdWVBbmRVbml0KHRvU2l6ZSksXG4gICAgICB1bml0bGVzc1RvU2l6ZSA9IF9nZXRWYWx1ZUFuZFVuaXQyWzBdLFxuICAgICAgdG9TaXplVW5pdCA9IF9nZXRWYWx1ZUFuZFVuaXQyWzFdO1xuXG4gIHZhciBfZ2V0VmFsdWVBbmRVbml0MyA9IGdldFZhbHVlQW5kVW5pdChtaW5TY3JlZW4pLFxuICAgICAgdW5pdGxlc3NNaW5TY3JlZW4gPSBfZ2V0VmFsdWVBbmRVbml0M1swXSxcbiAgICAgIG1pblNjcmVlblVuaXQgPSBfZ2V0VmFsdWVBbmRVbml0M1sxXTtcblxuICB2YXIgX2dldFZhbHVlQW5kVW5pdDQgPSBnZXRWYWx1ZUFuZFVuaXQobWF4U2NyZWVuKSxcbiAgICAgIHVuaXRsZXNzTWF4U2NyZWVuID0gX2dldFZhbHVlQW5kVW5pdDRbMF0sXG4gICAgICBtYXhTY3JlZW5Vbml0ID0gX2dldFZhbHVlQW5kVW5pdDRbMV07XG5cbiAgaWYgKHR5cGVvZiB1bml0bGVzc01pblNjcmVlbiAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHVuaXRsZXNzTWF4U2NyZWVuICE9PSAnbnVtYmVyJyB8fCAhbWluU2NyZWVuVW5pdCB8fCAhbWF4U2NyZWVuVW5pdCB8fCBtaW5TY3JlZW5Vbml0ICE9PSBtYXhTY3JlZW5Vbml0KSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB1bml0bGVzc0Zyb21TaXplICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdW5pdGxlc3NUb1NpemUgIT09ICdudW1iZXInIHx8IGZyb21TaXplVW5pdCAhPT0gdG9TaXplVW5pdCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ4KTtcbiAgfVxuXG4gIGlmIChmcm9tU2l6ZVVuaXQgIT09IG1pblNjcmVlblVuaXQgfHwgdG9TaXplVW5pdCAhPT0gbWF4U2NyZWVuVW5pdCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDc2KTtcbiAgfVxuXG4gIHZhciBzbG9wZSA9ICh1bml0bGVzc0Zyb21TaXplIC0gdW5pdGxlc3NUb1NpemUpIC8gKHVuaXRsZXNzTWluU2NyZWVuIC0gdW5pdGxlc3NNYXhTY3JlZW4pO1xuICB2YXIgYmFzZSA9IHVuaXRsZXNzVG9TaXplIC0gc2xvcGUgKiB1bml0bGVzc01heFNjcmVlbjtcbiAgcmV0dXJuIFwiY2FsYyhcIiArIGJhc2UudG9GaXhlZCgyKSArIChmcm9tU2l6ZVVuaXQgfHwgJycpICsgXCIgKyBcIiArICgxMDAgKiBzbG9wZSkudG9GaXhlZCgyKSArIFwidncpXCI7XG59XG5cbi8qKlxuICogQ1NTIHRvIGNvbnRhaW4gYSBmbG9hdCAoY3JlZGl0IHRvIENTU01vam8pLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICAuLi5jbGVhckZpeCgpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2NsZWFyRml4KCl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICcmOjphZnRlcic6IHtcbiAqICAgJ2NsZWFyJzogJ2JvdGgnLFxuICogICAnY29udGVudCc6ICdcIlwiJyxcbiAqICAgJ2Rpc3BsYXknOiAndGFibGUnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGNsZWFyRml4KHBhcmVudCkge1xuICB2YXIgX3JlZjtcblxuICBpZiAocGFyZW50ID09PSB2b2lkIDApIHtcbiAgICBwYXJlbnQgPSAnJic7XG4gIH1cblxuICB2YXIgcHNldWRvU2VsZWN0b3IgPSBwYXJlbnQgKyBcIjo6YWZ0ZXJcIjtcbiAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltwc2V1ZG9TZWxlY3Rvcl0gPSB7XG4gICAgY2xlYXI6ICdib3RoJyxcbiAgICBjb250ZW50OiAnXCJcIicsXG4gICAgZGlzcGxheTogJ3RhYmxlJ1xuICB9LCBfcmVmO1xufVxuXG4vKipcbiAqIENTUyB0byBmdWxseSBjb3ZlciBhbiBhcmVhLiBDYW4gb3B0aW9uYWxseSBiZSBwYXNzZWQgYW4gb2Zmc2V0IHRvIGFjdCBhcyBhIFwicGFkZGluZ1wiLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmNvdmVyKClcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtjb3ZlcigpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAqICAgJ3RvcCc6ICcwJyxcbiAqICAgJ3JpZ2h0OiAnMCcsXG4gKiAgICdib3R0b20nOiAnMCcsXG4gKiAgICdsZWZ0OiAnMCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gY292ZXIob2Zmc2V0KSB7XG4gIGlmIChvZmZzZXQgPT09IHZvaWQgMCkge1xuICAgIG9mZnNldCA9IDA7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogb2Zmc2V0LFxuICAgIHJpZ2h0OiBvZmZzZXQsXG4gICAgYm90dG9tOiBvZmZzZXQsXG4gICAgbGVmdDogb2Zmc2V0XG4gIH07XG59XG5cbi8qKlxuICogQ1NTIHRvIHJlcHJlc2VudCB0cnVuY2F0ZWQgdGV4dCB3aXRoIGFuIGVsbGlwc2lzLiBZb3UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhIG1heC13aWR0aCBhbmQgbnVtYmVyIG9mIGxpbmVzIGJlZm9yZSB0cnVuY2F0aW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmVsbGlwc2lzKCcyNTBweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7ZWxsaXBzaXMoJzI1MHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICAnZGlzcGxheSc6ICdpbmxpbmUtYmxvY2snLFxuICogICAnbWF4V2lkdGgnOiAnMjUwcHgnLFxuICogICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAqICAgJ3RleHRPdmVyZmxvdyc6ICdlbGxpcHNpcycsXG4gKiAgICd3aGl0ZVNwYWNlJzogJ25vd3JhcCcsXG4gKiAgICd3b3JkV3JhcCc6ICdub3JtYWwnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGVsbGlwc2lzKHdpZHRoLCBsaW5lcykge1xuICBpZiAobGluZXMgPT09IHZvaWQgMCkge1xuICAgIGxpbmVzID0gMTtcbiAgfVxuXG4gIHZhciBzdHlsZXMgPSB7XG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgbWF4V2lkdGg6IHdpZHRoIHx8ICcxMDAlJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHdvcmRXcmFwOiAnbm9ybWFsJ1xuICB9O1xuICByZXR1cm4gbGluZXMgPiAxID8gX2V4dGVuZHMoe30sIHN0eWxlcywge1xuICAgIFdlYmtpdEJveE9yaWVudDogJ3ZlcnRpY2FsJyxcbiAgICBXZWJraXRMaW5lQ2xhbXA6IGxpbmVzLFxuICAgIGRpc3BsYXk6ICctd2Via2l0LWJveCcsXG4gICAgd2hpdGVTcGFjZTogJ25vcm1hbCdcbiAgfSkgOiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcbiAqIFJldHVybnMgYSBzZXQgb2YgbWVkaWEgcXVlcmllcyB0aGF0IHJlc2l6ZXMgYSBwcm9wZXJ0eSAob3Igc2V0IG9mIHByb3BlcnRpZXMpIGJldHdlZW4gYSBwcm92aWRlZCBmcm9tU2l6ZSBhbmQgdG9TaXplLiBBY2NlcHRzIG9wdGlvbmFsIG1pblNjcmVlbiAoZGVmYXVsdHMgdG8gJzMyMHB4JykgYW5kIG1heFNjcmVlbiAoZGVmYXVsdHMgdG8gJzEyMDBweCcpIHRvIGNvbnN0cmFpbiB0aGUgaW50ZXJwb2xhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5mbHVpZFJhbmdlKFxuICogICAge1xuICogICAgICAgIHByb3A6ICdwYWRkaW5nJyxcbiAqICAgICAgICBmcm9tU2l6ZTogJzIwcHgnLFxuICogICAgICAgIHRvU2l6ZTogJzEwMHB4JyxcbiAqICAgICAgfSxcbiAqICAgICAgJzQwMHB4JyxcbiAqICAgICAgJzEwMDBweCcsXG4gKiAgICApXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Zmx1aWRSYW5nZShcbiAqICAgICAge1xuICogICAgICAgIHByb3A6ICdwYWRkaW5nJyxcbiAqICAgICAgICBmcm9tU2l6ZTogJzIwcHgnLFxuICogICAgICAgIHRvU2l6ZTogJzEwMHB4JyxcbiAqICAgICAgfSxcbiAqICAgICAgJzQwMHB4JyxcbiAqICAgICAgJzEwMDBweCcsXG4gKiAgICApfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgXCJAbWVkaWEgKG1pbi13aWR0aDogMTAwMHB4KVwiOiBPYmplY3Qge1xuICogICAgIFwicGFkZGluZ1wiOiBcIjEwMHB4XCIsXG4gKiAgIH0sXG4gKiAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KVwiOiBPYmplY3Qge1xuICogICAgIFwicGFkZGluZ1wiOiBcImNhbGMoLTMzLjMzMzMzMzMzMzMzMzM0cHggKyAxMy4zMzMzMzMzMzMzMzMzMzR2dylcIixcbiAqICAgfSxcbiAqICAgXCJwYWRkaW5nXCI6IFwiMjBweFwiLFxuICogfVxuICovXG5mdW5jdGlvbiBmbHVpZFJhbmdlKGNzc1Byb3AsIG1pblNjcmVlbiwgbWF4U2NyZWVuKSB7XG4gIGlmIChtaW5TY3JlZW4gPT09IHZvaWQgMCkge1xuICAgIG1pblNjcmVlbiA9ICczMjBweCc7XG4gIH1cblxuICBpZiAobWF4U2NyZWVuID09PSB2b2lkIDApIHtcbiAgICBtYXhTY3JlZW4gPSAnMTIwMHB4JztcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShjc3NQcm9wKSAmJiB0eXBlb2YgY3NzUHJvcCAhPT0gJ29iamVjdCcgfHwgY3NzUHJvcCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ5KTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGNzc1Byb3ApKSB7XG4gICAgdmFyIG1lZGlhUXVlcmllcyA9IHt9O1xuICAgIHZhciBmYWxsYmFja3MgPSB7fTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoY3NzUHJvcCksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgX2V4dGVuZHMyLCBfZXh0ZW5kczM7XG5cbiAgICAgIHZhciBvYmogPSBfc3RlcC52YWx1ZTtcblxuICAgICAgaWYgKCFvYmoucHJvcCB8fCAhb2JqLmZyb21TaXplIHx8ICFvYmoudG9TaXplKSB7XG4gICAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDUwKTtcbiAgICAgIH1cblxuICAgICAgZmFsbGJhY2tzW29iai5wcm9wXSA9IG9iai5mcm9tU2l6ZTtcbiAgICAgIG1lZGlhUXVlcmllc1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1pblNjcmVlbiArIFwiKVwiXSA9IF9leHRlbmRzKHt9LCBtZWRpYVF1ZXJpZXNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtaW5TY3JlZW4gKyBcIilcIl0sIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW29iai5wcm9wXSA9IGJldHdlZW4ob2JqLmZyb21TaXplLCBvYmoudG9TaXplLCBtaW5TY3JlZW4sIG1heFNjcmVlbiksIF9leHRlbmRzMikpO1xuICAgICAgbWVkaWFRdWVyaWVzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWF4U2NyZWVuICsgXCIpXCJdID0gX2V4dGVuZHMoe30sIG1lZGlhUXVlcmllc1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1heFNjcmVlbiArIFwiKVwiXSwgKF9leHRlbmRzMyA9IHt9LCBfZXh0ZW5kczNbb2JqLnByb3BdID0gb2JqLnRvU2l6ZSwgX2V4dGVuZHMzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBmYWxsYmFja3MsIG1lZGlhUXVlcmllcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMztcblxuICAgIGlmICghY3NzUHJvcC5wcm9wIHx8ICFjc3NQcm9wLmZyb21TaXplIHx8ICFjc3NQcm9wLnRvU2l6ZSkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTEpO1xuICAgIH1cblxuICAgIHJldHVybiBfcmVmMyA9IHt9LCBfcmVmM1tjc3NQcm9wLnByb3BdID0gY3NzUHJvcC5mcm9tU2l6ZSwgX3JlZjNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtaW5TY3JlZW4gKyBcIilcIl0gPSAoX3JlZiA9IHt9LCBfcmVmW2Nzc1Byb3AucHJvcF0gPSBiZXR3ZWVuKGNzc1Byb3AuZnJvbVNpemUsIGNzc1Byb3AudG9TaXplLCBtaW5TY3JlZW4sIG1heFNjcmVlbiksIF9yZWYpLCBfcmVmM1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1heFNjcmVlbiArIFwiKVwiXSA9IChfcmVmMiA9IHt9LCBfcmVmMltjc3NQcm9wLnByb3BdID0gY3NzUHJvcC50b1NpemUsIF9yZWYyKSwgX3JlZjM7XG4gIH1cbn1cblxudmFyIGRhdGFVUklSZWdleCA9IC9eXFxzKmRhdGE6KFthLXpdK1xcL1thLXotXSsoO1thLXotXSs9W2Etei1dKyk/KT8oO2NoYXJzZXQ9W2EtejAtOS1dKyk/KDtiYXNlNjQpPyxbYS16MC05ISQmJywoKSorLDs9XFwtLl9+OkAvPyVcXHNdKlxccyokL2k7XG52YXIgZm9ybWF0SGludE1hcCA9IHtcbiAgd29mZjogJ3dvZmYnLFxuICB3b2ZmMjogJ3dvZmYyJyxcbiAgdHRmOiAndHJ1ZXR5cGUnLFxuICBvdGY6ICdvcGVudHlwZScsXG4gIGVvdDogJ2VtYmVkZGVkLW9wZW50eXBlJyxcbiAgc3ZnOiAnc3ZnJyxcbiAgc3ZnejogJ3N2Zydcbn07XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm9ybWF0SGludChmb3JtYXQsIGZvcm1hdEhpbnQpIHtcbiAgaWYgKCFmb3JtYXRIaW50KSByZXR1cm4gJyc7XG4gIHJldHVybiBcIiBmb3JtYXQoXFxcIlwiICsgZm9ybWF0SGludE1hcFtmb3JtYXRdICsgXCJcXFwiKVwiO1xufVxuXG5mdW5jdGlvbiBpc0RhdGFVUkkoZm9udEZpbGVQYXRoKSB7XG4gIHJldHVybiAhIWZvbnRGaWxlUGF0aC5yZXBsYWNlKC9cXHMrL2csICcgJykubWF0Y2goZGF0YVVSSVJlZ2V4KTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVGaWxlUmVmZXJlbmNlcyhmb250RmlsZVBhdGgsIGZpbGVGb3JtYXRzLCBmb3JtYXRIaW50KSB7XG4gIGlmIChpc0RhdGFVUkkoZm9udEZpbGVQYXRoKSkge1xuICAgIHJldHVybiBcInVybChcXFwiXCIgKyBmb250RmlsZVBhdGggKyBcIlxcXCIpXCIgKyBnZW5lcmF0ZUZvcm1hdEhpbnQoZmlsZUZvcm1hdHNbMF0sIGZvcm1hdEhpbnQpO1xuICB9XG5cbiAgdmFyIGZpbGVGb250UmVmZXJlbmNlcyA9IGZpbGVGb3JtYXRzLm1hcChmdW5jdGlvbiAoZm9ybWF0KSB7XG4gICAgcmV0dXJuIFwidXJsKFxcXCJcIiArIGZvbnRGaWxlUGF0aCArIFwiLlwiICsgZm9ybWF0ICsgXCJcXFwiKVwiICsgZ2VuZXJhdGVGb3JtYXRIaW50KGZvcm1hdCwgZm9ybWF0SGludCk7XG4gIH0pO1xuICByZXR1cm4gZmlsZUZvbnRSZWZlcmVuY2VzLmpvaW4oJywgJyk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlTG9jYWxSZWZlcmVuY2VzKGxvY2FsRm9udHMpIHtcbiAgdmFyIGxvY2FsRm9udFJlZmVyZW5jZXMgPSBsb2NhbEZvbnRzLm1hcChmdW5jdGlvbiAoZm9udCkge1xuICAgIHJldHVybiBcImxvY2FsKFxcXCJcIiArIGZvbnQgKyBcIlxcXCIpXCI7XG4gIH0pO1xuICByZXR1cm4gbG9jYWxGb250UmVmZXJlbmNlcy5qb2luKCcsICcpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNvdXJjZXMoZm9udEZpbGVQYXRoLCBsb2NhbEZvbnRzLCBmaWxlRm9ybWF0cywgZm9ybWF0SGludCkge1xuICB2YXIgZm9udFJlZmVyZW5jZXMgPSBbXTtcbiAgaWYgKGxvY2FsRm9udHMpIGZvbnRSZWZlcmVuY2VzLnB1c2goZ2VuZXJhdGVMb2NhbFJlZmVyZW5jZXMobG9jYWxGb250cykpO1xuXG4gIGlmIChmb250RmlsZVBhdGgpIHtcbiAgICBmb250UmVmZXJlbmNlcy5wdXNoKGdlbmVyYXRlRmlsZVJlZmVyZW5jZXMoZm9udEZpbGVQYXRoLCBmaWxlRm9ybWF0cywgZm9ybWF0SGludCkpO1xuICB9XG5cbiAgcmV0dXJuIGZvbnRSZWZlcmVuY2VzLmpvaW4oJywgJyk7XG59XG4vKipcbiAqIENTUyBmb3IgYSBAZm9udC1mYWNlIGRlY2xhcmF0aW9uLiBEZWZhdWx0cyB0byBjaGVjayBmb3IgbG9jYWwgY29waWVzIG9mIHRoZSBmb250IG9uIHRoZSB1c2VyJ3MgbWFjaGluZS4gWW91IGNhbiBkaXNhYmxlIHRoaXMgYnkgcGFzc2luZyBgbnVsbGAgdG8gbG9jYWxGb250cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCBiYXNpYyB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAgLi4uZm9udEZhY2Uoe1xuICogICAgICAnZm9udEZhbWlseSc6ICdTYW5zLVBybycsXG4gKiAgICAgICdmb250RmlsZVBhdGgnOiAncGF0aC90by9maWxlJ1xuICogICAgfSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyBiYXNpYyB1c2FnZVxuICogY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWAke1xuICogICBmb250RmFjZSh7XG4gKiAgICAgJ2ZvbnRGYW1pbHknOiAnU2Fucy1Qcm8nLFxuICogICAgICdmb250RmlsZVBhdGgnOiAncGF0aC90by9maWxlJ1xuICogICB9XG4gKiApfWBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ0Bmb250LWZhY2UnOiB7XG4gKiAgICdmb250RmFtaWx5JzogJ1NhbnMtUHJvJyxcbiAqICAgJ3NyYyc6ICd1cmwoXCJwYXRoL3RvL2ZpbGUuZW90XCIpLCB1cmwoXCJwYXRoL3RvL2ZpbGUud29mZjJcIiksIHVybChcInBhdGgvdG8vZmlsZS53b2ZmXCIpLCB1cmwoXCJwYXRoL3RvL2ZpbGUudHRmXCIpLCB1cmwoXCJwYXRoL3RvL2ZpbGUuc3ZnXCIpJyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIGZvbnRGYWNlKF9yZWYpIHtcbiAgdmFyIGZvbnRGYW1pbHkgPSBfcmVmLmZvbnRGYW1pbHksXG4gICAgICBmb250RmlsZVBhdGggPSBfcmVmLmZvbnRGaWxlUGF0aCxcbiAgICAgIGZvbnRTdHJldGNoID0gX3JlZi5mb250U3RyZXRjaCxcbiAgICAgIGZvbnRTdHlsZSA9IF9yZWYuZm9udFN0eWxlLFxuICAgICAgZm9udFZhcmlhbnQgPSBfcmVmLmZvbnRWYXJpYW50LFxuICAgICAgZm9udFdlaWdodCA9IF9yZWYuZm9udFdlaWdodCxcbiAgICAgIF9yZWYkZmlsZUZvcm1hdHMgPSBfcmVmLmZpbGVGb3JtYXRzLFxuICAgICAgZmlsZUZvcm1hdHMgPSBfcmVmJGZpbGVGb3JtYXRzID09PSB2b2lkIDAgPyBbJ2VvdCcsICd3b2ZmMicsICd3b2ZmJywgJ3R0ZicsICdzdmcnXSA6IF9yZWYkZmlsZUZvcm1hdHMsXG4gICAgICBfcmVmJGZvcm1hdEhpbnQgPSBfcmVmLmZvcm1hdEhpbnQsXG4gICAgICBmb3JtYXRIaW50ID0gX3JlZiRmb3JtYXRIaW50ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZm9ybWF0SGludCxcbiAgICAgIF9yZWYkbG9jYWxGb250cyA9IF9yZWYubG9jYWxGb250cyxcbiAgICAgIGxvY2FsRm9udHMgPSBfcmVmJGxvY2FsRm9udHMgPT09IHZvaWQgMCA/IFtmb250RmFtaWx5XSA6IF9yZWYkbG9jYWxGb250cyxcbiAgICAgIHVuaWNvZGVSYW5nZSA9IF9yZWYudW5pY29kZVJhbmdlLFxuICAgICAgZm9udERpc3BsYXkgPSBfcmVmLmZvbnREaXNwbGF5LFxuICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzID0gX3JlZi5mb250VmFyaWF0aW9uU2V0dGluZ3MsXG4gICAgICBmb250RmVhdHVyZVNldHRpbmdzID0gX3JlZi5mb250RmVhdHVyZVNldHRpbmdzO1xuICAvLyBFcnJvciBIYW5kbGluZ1xuICBpZiAoIWZvbnRGYW1pbHkpIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDU1KTtcblxuICBpZiAoIWZvbnRGaWxlUGF0aCAmJiAhbG9jYWxGb250cykge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDUyKTtcbiAgfVxuXG4gIGlmIChsb2NhbEZvbnRzICYmICFBcnJheS5pc0FycmF5KGxvY2FsRm9udHMpKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTMpO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGZpbGVGb3JtYXRzKSkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDU0KTtcbiAgfVxuXG4gIHZhciBmb250RmFjZURlY2xhcmF0aW9uID0ge1xuICAgICdAZm9udC1mYWNlJzoge1xuICAgICAgZm9udEZhbWlseTogZm9udEZhbWlseSxcbiAgICAgIHNyYzogZ2VuZXJhdGVTb3VyY2VzKGZvbnRGaWxlUGF0aCwgbG9jYWxGb250cywgZmlsZUZvcm1hdHMsIGZvcm1hdEhpbnQpLFxuICAgICAgdW5pY29kZVJhbmdlOiB1bmljb2RlUmFuZ2UsXG4gICAgICBmb250U3RyZXRjaDogZm9udFN0cmV0Y2gsXG4gICAgICBmb250U3R5bGU6IGZvbnRTdHlsZSxcbiAgICAgIGZvbnRWYXJpYW50OiBmb250VmFyaWFudCxcbiAgICAgIGZvbnRXZWlnaHQ6IGZvbnRXZWlnaHQsXG4gICAgICBmb250RGlzcGxheTogZm9udERpc3BsYXksXG4gICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3M6IGZvbnRWYXJpYXRpb25TZXR0aW5ncyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3M6IGZvbnRGZWF0dXJlU2V0dGluZ3NcbiAgICB9XG4gIH07IC8vIFJlbW92ZXMgdW5kZWZpbmVkIGZpZWxkcyBmb3IgY2xlYW5lciBjc3Mgb2JqZWN0LlxuXG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZvbnRGYWNlRGVjbGFyYXRpb24pKTtcbn1cblxuLyoqXG4gKiBDU1MgdG8gaGlkZSB0ZXh0IHRvIHNob3cgYSBiYWNrZ3JvdW5kIGltYWdlIGluIGEgU0VPLWZyaWVuZGx5IHdheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnYmFja2dyb3VuZEltYWdlJzogJ3VybChsb2dvLnBuZyknLFxuICogICAuLi5oaWRlVGV4dCgpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kSW1hZ2U6IHVybChsb2dvLnBuZyk7XG4gKiAgICR7aGlkZVRleHQoKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdkaXYnOiB7XG4gKiAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAndXJsKGxvZ28ucG5nKScsXG4gKiAgICd0ZXh0SW5kZW50JzogJzEwMSUnLFxuICogICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAqICAgJ3doaXRlU3BhY2UnOiAnbm93cmFwJyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaGlkZVRleHQoKSB7XG4gIHJldHVybiB7XG4gICAgdGV4dEluZGVudDogJzEwMSUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJ1xuICB9O1xufVxuXG4vKipcbiAqIENTUyB0byBoaWRlIGNvbnRlbnQgdmlzdWFsbHkgYnV0IHJlbWFpbiBhY2Nlc3NpYmxlIHRvIHNjcmVlbiByZWFkZXJzLlxuICogZnJvbSBbSFRNTDUgQm9pbGVycGxhdGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9oNWJwL2h0bWw1LWJvaWxlcnBsYXRlL2Jsb2IvOWExNzZmNTdhZjFjZmU4ZWM3MDMwMGRhNDYyMWZiOWIwN2U1ZmEzMS9zcmMvY3NzL21haW4uY3NzI0wxMjEpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uaGlkZVZpc3VhbGx5KCksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7aGlkZVZpc3VhbGx5KCl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnZGl2Jzoge1xuICogICAnYm9yZGVyJzogJzAnLFxuICogICAnY2xpcCc6ICdyZWN0KDAgMCAwIDApJyxcbiAqICAgJ2hlaWdodCc6ICcxcHgnLFxuICogICAnbWFyZ2luJzogJy0xcHgnLFxuICogICAnb3ZlcmZsb3cnOiAnaGlkZGVuJyxcbiAqICAgJ3BhZGRpbmcnOiAnMCcsXG4gKiAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gKiAgICd3aGl0ZVNwYWNlJzogJ25vd3JhcCcsXG4gKiAgICd3aWR0aCc6ICcxcHgnLFxuICogfVxuICovXG5mdW5jdGlvbiBoaWRlVmlzdWFsbHkoKSB7XG4gIHJldHVybiB7XG4gICAgYm9yZGVyOiAnMCcsXG4gICAgY2xpcDogJ3JlY3QoMCAwIDAgMCknLFxuICAgIGhlaWdodDogJzFweCcsXG4gICAgbWFyZ2luOiAnLTFweCcsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB3aWR0aDogJzFweCdcbiAgfTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBtZWRpYSBxdWVyeSB0byB0YXJnZXQgSGlEUEkgZGV2aWNlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogIFtoaURQSSgxLjUpXToge1xuICogICAgd2lkdGg6IDIwMHB4O1xuICogIH1cbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtoaURQSSgxLjUpfSB7XG4gKiAgICAgd2lkdGg6IDIwMHB4O1xuICogICB9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSksXG4gKiAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNSksXG4gKiAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUvMSksXG4gKiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTQ0ZHBpKSxcbiAqICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxLjVkcHB4KSc6IHtcbiAqICAgJ3dpZHRoJzogJzIwMHB4JyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaGlEUEkocmF0aW8pIHtcbiAgaWYgKHJhdGlvID09PSB2b2lkIDApIHtcbiAgICByYXRpbyA9IDEuMztcbiAgfVxuXG4gIHJldHVybiBcIlxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IFwiICsgcmF0aW8gKyBcIiksXFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiBcIiArIHJhdGlvICsgXCIpLFxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IFwiICsgcmF0aW8gKyBcIi8xKSxcXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogXCIgKyBNYXRoLnJvdW5kKHJhdGlvICogOTYpICsgXCJkcGkpLFxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiBcIiArIHJhdGlvICsgXCJkcHB4KVxcbiAgXCI7XG59XG5cbmZ1bmN0aW9uIGNvbnN0cnVjdEdyYWRpZW50VmFsdWUobGl0ZXJhbHMpIHtcbiAgdmFyIHRlbXBsYXRlID0gJyc7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN1YnN0aXR1dGlvbnMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN1YnN0aXR1dGlvbnNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXRlcmFscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRlbXBsYXRlICs9IGxpdGVyYWxzW2ldO1xuXG4gICAgaWYgKGkgPT09IHN1YnN0aXR1dGlvbnMubGVuZ3RoIC0gMSAmJiBzdWJzdGl0dXRpb25zW2ldKSB7XG4gICAgICB2YXIgZGVmaW5lZFZhbHVlcyA9IHN1YnN0aXR1dGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChzdWJzdGl0dXRlKSB7XG4gICAgICAgIHJldHVybiAhIXN1YnN0aXR1dGU7XG4gICAgICB9KTsgLy8gQWRkcyBsZWFkaW5nIGNvbWEgaWYgcHJvcGVydGllcyBwcmVjZWVkIGNvbG9yLXN0b3BzXG5cbiAgICAgIGlmIChkZWZpbmVkVmFsdWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgIHRlbXBsYXRlICs9IFwiLCBcIiArIHN1YnN0aXR1dGlvbnNbaV07IC8vIE5vIHRyYWlsaW5nIHNwYWNlIGlmIGNvbG9yLXN0b3BzIGlzIHRoZSBvbmx5IHBhcmFtIHByb3ZpZGVkXG4gICAgICB9IGVsc2UgaWYgKGRlZmluZWRWYWx1ZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHRlbXBsYXRlICs9IFwiXCIgKyBzdWJzdGl0dXRpb25zW2ldO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3Vic3RpdHV0aW9uc1tpXSkge1xuICAgICAgdGVtcGxhdGUgKz0gc3Vic3RpdHV0aW9uc1tpXSArIFwiIFwiO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0ZW1wbGF0ZS50cmltKCk7XG59XG5cbnZhciBfdGVtcGxhdGVPYmplY3QkMTtcblxuLyoqXG4gKiBDU1MgZm9yIGRlY2xhcmluZyBhIGxpbmVhciBncmFkaWVudCwgaW5jbHVkaW5nIGEgZmFsbGJhY2sgYmFja2dyb3VuZC1jb2xvci4gVGhlIGZhbGxiYWNrIGlzIGVpdGhlciB0aGUgZmlyc3QgY29sb3Itc3RvcCBvciBhbiBleHBsaWNpdGx5IHBhc3NlZCBmYWxsYmFjayBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5saW5lYXJHcmFkaWVudCh7XG4gICAgICAgIGNvbG9yU3RvcHM6IFsnIzAwRkZGRiAwJScsICdyZ2JhKDAsIDAsIDI1NSwgMCkgNTAlJywgJyMwMDAwRkYgOTUlJ10sXG4gICAgICAgIHRvRGlyZWN0aW9uOiAndG8gdG9wIHJpZ2h0JyxcbiAgICAgICAgZmFsbGJhY2s6ICcjRkZGJyxcbiAgICAgIH0pXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7bGluZWFyR3JhZGllbnQoe1xuICAgICAgICBjb2xvclN0b3BzOiBbJyMwMEZGRkYgMCUnLCAncmdiYSgwLCAwLCAyNTUsIDApIDUwJScsICcjMDAwMEZGIDk1JSddLFxuICAgICAgICB0b0RpcmVjdGlvbjogJ3RvIHRvcCByaWdodCcsXG4gICAgICAgIGZhbGxiYWNrOiAnI0ZGRicsXG4gICAgICB9KX1cbiAqYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgJ2JhY2tncm91bmRDb2xvcic6ICcjRkZGJyxcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICdsaW5lYXItZ3JhZGllbnQodG8gdG9wIHJpZ2h0LCAjMDBGRkZGIDAlLCByZ2JhKDAsIDAsIDI1NSwgMCkgNTAlLCAjMDAwMEZGIDk1JSknLFxuICogfVxuICovXG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudChfcmVmKSB7XG4gIHZhciBjb2xvclN0b3BzID0gX3JlZi5jb2xvclN0b3BzLFxuICAgICAgZmFsbGJhY2sgPSBfcmVmLmZhbGxiYWNrLFxuICAgICAgX3JlZiR0b0RpcmVjdGlvbiA9IF9yZWYudG9EaXJlY3Rpb24sXG4gICAgICB0b0RpcmVjdGlvbiA9IF9yZWYkdG9EaXJlY3Rpb24gPT09IHZvaWQgMCA/ICcnIDogX3JlZiR0b0RpcmVjdGlvbjtcblxuICBpZiAoIWNvbG9yU3RvcHMgfHwgY29sb3JTdG9wcy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTYpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhbGxiYWNrIHx8IGNvbG9yU3RvcHNbMF0ucmVwbGFjZSgvLFxccysvZywgJywnKS5zcGxpdCgnICcpWzBdLnJlcGxhY2UoLywoPz1cXFMpL2csICcsICcpLFxuICAgIGJhY2tncm91bmRJbWFnZTogY29uc3RydWN0R3JhZGllbnRWYWx1ZShfdGVtcGxhdGVPYmplY3QkMSB8fCAoX3RlbXBsYXRlT2JqZWN0JDEgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wibGluZWFyLWdyYWRpZW50KFwiLCBcIlwiLCBcIilcIl0pKSwgdG9EaXJlY3Rpb24sIGNvbG9yU3RvcHMuam9pbignLCAnKS5yZXBsYWNlKC8sKD89XFxTKS9nLCAnLCAnKSlcbiAgfTtcbn1cblxuLyoqXG4gKiBDU1MgdG8gbm9ybWFsaXplIGFibm9ybWFsaXRpZXMgYWNyb3NzIGJyb3dzZXJzIChub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MpXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgIC4uLm5vcm1hbGl6ZSgpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYCR7bm9ybWFsaXplKCl9YFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBodG1sIHtcbiAqICAgbGluZUhlaWdodDogMS4xNSxcbiAqICAgdGV4dFNpemVBZGp1c3Q6IDEwMCUsXG4gKiB9IC4uLlxuICovXG5mdW5jdGlvbiBub3JtYWxpemUoKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBbKF9yZWYgPSB7XG4gICAgaHRtbDoge1xuICAgICAgbGluZUhlaWdodDogJzEuMTUnLFxuICAgICAgdGV4dFNpemVBZGp1c3Q6ICcxMDAlJ1xuICAgIH0sXG4gICAgYm9keToge1xuICAgICAgbWFyZ2luOiAnMCdcbiAgICB9LFxuICAgIG1haW46IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaydcbiAgICB9LFxuICAgIGgxOiB7XG4gICAgICBmb250U2l6ZTogJzJlbScsXG4gICAgICBtYXJnaW46ICcwLjY3ZW0gMCdcbiAgICB9LFxuICAgIGhyOiB7XG4gICAgICBib3hTaXppbmc6ICdjb250ZW50LWJveCcsXG4gICAgICBoZWlnaHQ6ICcwJyxcbiAgICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbiAgICB9LFxuICAgIHByZToge1xuICAgICAgZm9udEZhbWlseTogJ21vbm9zcGFjZSwgbW9ub3NwYWNlJyxcbiAgICAgIGZvbnRTaXplOiAnMWVtJ1xuICAgIH0sXG4gICAgYToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgfSxcbiAgICAnYWJiclt0aXRsZV0nOiB7XG4gICAgICBib3JkZXJCb3R0b206ICdub25lJyxcbiAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJ1xuICAgIH1cbiAgfSwgX3JlZltcImIsXFxuICAgIHN0cm9uZ1wiXSA9IHtcbiAgICBmb250V2VpZ2h0OiAnYm9sZGVyJ1xuICB9LCBfcmVmW1wiY29kZSxcXG4gICAga2JkLFxcbiAgICBzYW1wXCJdID0ge1xuICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UsIG1vbm9zcGFjZScsXG4gICAgZm9udFNpemU6ICcxZW0nXG4gIH0sIF9yZWYuc21hbGwgPSB7XG4gICAgZm9udFNpemU6ICc4MCUnXG4gIH0sIF9yZWZbXCJzdWIsXFxuICAgIHN1cFwiXSA9IHtcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgbGluZUhlaWdodDogJzAnLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIHZlcnRpY2FsQWxpZ246ICdiYXNlbGluZSdcbiAgfSwgX3JlZi5zdWIgPSB7XG4gICAgYm90dG9tOiAnLTAuMjVlbSdcbiAgfSwgX3JlZi5zdXAgPSB7XG4gICAgdG9wOiAnLTAuNWVtJ1xuICB9LCBfcmVmLmltZyA9IHtcbiAgICBib3JkZXJTdHlsZTogJ25vbmUnXG4gIH0sIF9yZWZbXCJidXR0b24sXFxuICAgIGlucHV0LFxcbiAgICBvcHRncm91cCxcXG4gICAgc2VsZWN0LFxcbiAgICB0ZXh0YXJlYVwiXSA9IHtcbiAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXG4gICAgZm9udFNpemU6ICcxMDAlJyxcbiAgICBsaW5lSGVpZ2h0OiAnMS4xNScsXG4gICAgbWFyZ2luOiAnMCdcbiAgfSwgX3JlZltcImJ1dHRvbixcXG4gICAgaW5wdXRcIl0gPSB7XG4gICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICB9LCBfcmVmW1wiYnV0dG9uLFxcbiAgICBzZWxlY3RcIl0gPSB7XG4gICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnXG4gIH0sIF9yZWZbXCJidXR0b24sXFxuICAgIGh0bWwgW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcbiAgICBbdHlwZT1cXFwicmVzZXRcXFwiXSxcXG4gICAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdXCJdID0ge1xuICAgIFdlYmtpdEFwcGVhcmFuY2U6ICdidXR0b24nXG4gIH0sIF9yZWZbXCJidXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuICAgIFt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICAgIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lclwiXSA9IHtcbiAgICBib3JkZXJTdHlsZTogJ25vbmUnLFxuICAgIHBhZGRpbmc6ICcwJ1xuICB9LCBfcmVmW1wiYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcbiAgICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICAgIFt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgICBbdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3JpbmdcIl0gPSB7XG4gICAgb3V0bGluZTogJzFweCBkb3R0ZWQgQnV0dG9uVGV4dCdcbiAgfSwgX3JlZi5maWVsZHNldCA9IHtcbiAgICBwYWRkaW5nOiAnMC4zNWVtIDAuNjI1ZW0gMC43NWVtJ1xuICB9LCBfcmVmLmxlZ2VuZCA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBjb2xvcjogJ2luaGVyaXQnLFxuICAgIGRpc3BsYXk6ICd0YWJsZScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgd2hpdGVTcGFjZTogJ25vcm1hbCdcbiAgfSwgX3JlZi5wcm9ncmVzcyA9IHtcbiAgICB2ZXJ0aWNhbEFsaWduOiAnYmFzZWxpbmUnXG4gIH0sIF9yZWYudGV4dGFyZWEgPSB7XG4gICAgb3ZlcmZsb3c6ICdhdXRvJ1xuICB9LCBfcmVmW1wiW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuICAgIFt0eXBlPVxcXCJyYWRpb1xcXCJdXCJdID0ge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6ICcwJ1xuICB9LCBfcmVmW1wiW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbiAgICBbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b25cIl0gPSB7XG4gICAgaGVpZ2h0OiAnYXV0bydcbiAgfSwgX3JlZlsnW3R5cGU9XCJzZWFyY2hcIl0nXSA9IHtcbiAgICBXZWJraXRBcHBlYXJhbmNlOiAndGV4dGZpZWxkJyxcbiAgICBvdXRsaW5lT2Zmc2V0OiAnLTJweCdcbiAgfSwgX3JlZlsnW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24nXSA9IHtcbiAgICBXZWJraXRBcHBlYXJhbmNlOiAnbm9uZSdcbiAgfSwgX3JlZlsnOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiddID0ge1xuICAgIFdlYmtpdEFwcGVhcmFuY2U6ICdidXR0b24nLFxuICAgIGZvbnQ6ICdpbmhlcml0J1xuICB9LCBfcmVmLmRldGFpbHMgPSB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJ1xuICB9LCBfcmVmLnN1bW1hcnkgPSB7XG4gICAgZGlzcGxheTogJ2xpc3QtaXRlbSdcbiAgfSwgX3JlZi50ZW1wbGF0ZSA9IHtcbiAgICBkaXNwbGF5OiAnbm9uZSdcbiAgfSwgX3JlZlsnW2hpZGRlbl0nXSA9IHtcbiAgICBkaXNwbGF5OiAnbm9uZSdcbiAgfSwgX3JlZiksIHtcbiAgICAnYWJiclt0aXRsZV0nOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSBkb3R0ZWQnXG4gICAgfVxuICB9XTtcbn1cblxudmFyIF90ZW1wbGF0ZU9iamVjdDtcblxuLyoqXG4gKiBDU1MgZm9yIGRlY2xhcmluZyBhIHJhZGlhbCBncmFkaWVudCwgaW5jbHVkaW5nIGEgZmFsbGJhY2sgYmFja2dyb3VuZC1jb2xvci4gVGhlIGZhbGxiYWNrIGlzIGVpdGhlciB0aGUgZmlyc3QgY29sb3Itc3RvcCBvciBhbiBleHBsaWNpdGx5IHBhc3NlZCBmYWxsYmFjayBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5yYWRpYWxHcmFkaWVudCh7XG4gKiAgICAgY29sb3JTdG9wczogWycjMDBGRkZGIDAlJywgJ3JnYmEoMCwgMCwgMjU1LCAwKSA1MCUnLCAnIzAwMDBGRiA5NSUnXSxcbiAqICAgICBleHRlbnQ6ICdmYXJ0aGVzdC1jb3JuZXIgYXQgNDVweCA0NXB4JyxcbiAqICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gKiAgICAgc2hhcGU6ICdlbGxpcHNlJyxcbiAqICAgfSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtyYWRpYWxHcmFkaWVudCh7XG4gKiAgICAgY29sb3JTdG9wczogWycjMDBGRkZGIDAlJywgJ3JnYmEoMCwgMCwgMjU1LCAwKSA1MCUnLCAnIzAwMDBGRiA5NSUnXSxcbiAqICAgICBleHRlbnQ6ICdmYXJ0aGVzdC1jb3JuZXIgYXQgNDVweCA0NXB4JyxcbiAqICAgICBwb3NpdGlvbjogJ2NlbnRlcicsXG4gKiAgICAgc2hhcGU6ICdlbGxpcHNlJyxcbiAqICAgfSl9XG4gKmBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgICdiYWNrZ3JvdW5kQ29sb3InOiAnIzAwRkZGRicsXG4gKiAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAncmFkaWFsLWdyYWRpZW50KGNlbnRlciBlbGxpcHNlIGZhcnRoZXN0LWNvcm5lciBhdCA0NXB4IDQ1cHgsICMwMEZGRkYgMCUsIHJnYmEoMCwgMCwgMjU1LCAwKSA1MCUsICMwMDAwRkYgOTUlKScsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJhZGlhbEdyYWRpZW50KF9yZWYpIHtcbiAgdmFyIGNvbG9yU3RvcHMgPSBfcmVmLmNvbG9yU3RvcHMsXG4gICAgICBfcmVmJGV4dGVudCA9IF9yZWYuZXh0ZW50LFxuICAgICAgZXh0ZW50ID0gX3JlZiRleHRlbnQgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRleHRlbnQsXG4gICAgICBmYWxsYmFjayA9IF9yZWYuZmFsbGJhY2ssXG4gICAgICBfcmVmJHBvc2l0aW9uID0gX3JlZi5wb3NpdGlvbixcbiAgICAgIHBvc2l0aW9uID0gX3JlZiRwb3NpdGlvbiA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHBvc2l0aW9uLFxuICAgICAgX3JlZiRzaGFwZSA9IF9yZWYuc2hhcGUsXG4gICAgICBzaGFwZSA9IF9yZWYkc2hhcGUgPT09IHZvaWQgMCA/ICcnIDogX3JlZiRzaGFwZTtcblxuICBpZiAoIWNvbG9yU3RvcHMgfHwgY29sb3JTdG9wcy5sZW5ndGggPCAyKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTcpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhbGxiYWNrIHx8IGNvbG9yU3RvcHNbMF0uc3BsaXQoJyAnKVswXSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNvbnN0cnVjdEdyYWRpZW50VmFsdWUoX3RlbXBsYXRlT2JqZWN0IHx8IChfdGVtcGxhdGVPYmplY3QgPSBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UoW1wicmFkaWFsLWdyYWRpZW50KFwiLCBcIlwiLCBcIlwiLCBcIlwiLCBcIilcIl0pKSwgcG9zaXRpb24sIHNoYXBlLCBleHRlbnQsIGNvbG9yU3RvcHMuam9pbignLCAnKSlcbiAgfTtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciB0byBnZW5lcmF0ZSBhIHJldGluYSBiYWNrZ3JvdW5kIGltYWdlIGFuZCBub24tcmV0aW5hXG4gKiBiYWNrZ3JvdW5kIGltYWdlLiBUaGUgcmV0aW5hIGJhY2tncm91bmQgaW1hZ2Ugd2lsbCBvdXRwdXQgdG8gYSBIaURQSSBtZWRpYSBxdWVyeS4gVGhlIG1peGluIHVzZXNcbiAqIGEgXzJ4LnBuZyBmaWxlbmFtZSBzdWZmaXggYnkgZGVmYXVsdC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogIC4uLnJldGluYUltYWdlKCdteS1pbWcnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3JldGluYUltYWdlKCdteS1pbWcnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKiBkaXYge1xuICogICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwobXktaW1nLnBuZyknLFxuICogICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjMpLFxuICogICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMyksXG4gKiAgICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMy8xKSxcbiAqICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE0NGRwaSksXG4gKiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxLjVkcHB4KSc6IHtcbiAqICAgICBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwobXktaW1nXzJ4LnBuZyknLFxuICogICB9XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJldGluYUltYWdlKGZpbGVuYW1lLCBiYWNrZ3JvdW5kU2l6ZSwgZXh0ZW5zaW9uLCByZXRpbmFGaWxlbmFtZSwgcmV0aW5hU3VmZml4KSB7XG4gIHZhciBfcmVmO1xuXG4gIGlmIChleHRlbnNpb24gPT09IHZvaWQgMCkge1xuICAgIGV4dGVuc2lvbiA9ICdwbmcnO1xuICB9XG5cbiAgaWYgKHJldGluYVN1ZmZpeCA9PT0gdm9pZCAwKSB7XG4gICAgcmV0aW5hU3VmZml4ID0gJ18yeCc7XG4gIH1cblxuICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTgpO1xuICB9IC8vIFJlcGxhY2UgdGhlIGRvdCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBwYXNzZWQgZXh0ZW5zaW9uIGlmIG9uZSBleGlzdHNcblxuXG4gIHZhciBleHQgPSBleHRlbnNpb24ucmVwbGFjZSgvXlxcLi8sICcnKTtcbiAgdmFyIHJGaWxlbmFtZSA9IHJldGluYUZpbGVuYW1lID8gcmV0aW5hRmlsZW5hbWUgKyBcIi5cIiArIGV4dCA6IFwiXCIgKyBmaWxlbmFtZSArIHJldGluYVN1ZmZpeCArIFwiLlwiICsgZXh0O1xuICByZXR1cm4gX3JlZiA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgZmlsZW5hbWUgKyBcIi5cIiArIGV4dCArIFwiKVwiXG4gIH0sIF9yZWZbaGlEUEkoKV0gPSBfZXh0ZW5kcyh7XG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIHJGaWxlbmFtZSArIFwiKVwiXG4gIH0sIGJhY2tncm91bmRTaXplID8ge1xuICAgIGJhY2tncm91bmRTaXplOiBiYWNrZ3JvdW5kU2l6ZVxuICB9IDoge30pLCBfcmVmO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBrZXktc3BhY2luZyAqL1xudmFyIGZ1bmN0aW9uc01hcCA9IHtcbiAgZWFzZUluQmFjazogJ2N1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpJyxcbiAgZWFzZUluQ2lyYzogJ2N1YmljLWJlemllcigwLjYwMCwgIDAuMDQwLCAwLjk4MCwgMC4zMzUpJyxcbiAgZWFzZUluQ3ViaWM6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA1NSwgMC42NzUsIDAuMTkwKScsXG4gIGVhc2VJbkV4cG86ICdjdWJpYy1iZXppZXIoMC45NTAsICAwLjA1MCwgMC43OTUsIDAuMDM1KScsXG4gIGVhc2VJblF1YWQ6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA4NSwgMC42ODAsIDAuNTMwKScsXG4gIGVhc2VJblF1YXJ0OiAnY3ViaWMtYmV6aWVyKDAuODk1LCAgMC4wMzAsIDAuNjg1LCAwLjIyMCknLFxuICBlYXNlSW5RdWludDogJ2N1YmljLWJlemllcigwLjc1NSwgIDAuMDUwLCAwLjg1NSwgMC4wNjApJyxcbiAgZWFzZUluU2luZTogJ2N1YmljLWJlemllcigwLjQ3MCwgIDAuMDAwLCAwLjc0NSwgMC43MTUpJyxcbiAgZWFzZU91dEJhY2s6ICdjdWJpYy1iZXppZXIoMC4xNzUsICAwLjg4NSwgMC4zMjAsIDEuMjc1KScsXG4gIGVhc2VPdXRDdWJpYzogJ2N1YmljLWJlemllcigwLjIxNSwgIDAuNjEwLCAwLjM1NSwgMS4wMDApJyxcbiAgZWFzZU91dENpcmM6ICdjdWJpYy1iZXppZXIoMC4wNzUsICAwLjgyMCwgMC4xNjUsIDEuMDAwKScsXG4gIGVhc2VPdXRFeHBvOiAnY3ViaWMtYmV6aWVyKDAuMTkwLCAgMS4wMDAsIDAuMjIwLCAxLjAwMCknLFxuICBlYXNlT3V0UXVhZDogJ2N1YmljLWJlemllcigwLjI1MCwgIDAuNDYwLCAwLjQ1MCwgMC45NDApJyxcbiAgZWFzZU91dFF1YXJ0OiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAgMC44NDAsIDAuNDQwLCAxLjAwMCknLFxuICBlYXNlT3V0UXVpbnQ6ICdjdWJpYy1iZXppZXIoMC4yMzAsICAxLjAwMCwgMC4zMjAsIDEuMDAwKScsXG4gIGVhc2VPdXRTaW5lOiAnY3ViaWMtYmV6aWVyKDAuMzkwLCAgMC41NzUsIDAuNTY1LCAxLjAwMCknLFxuICBlYXNlSW5PdXRCYWNrOiAnY3ViaWMtYmV6aWVyKDAuNjgwLCAtMC41NTAsIDAuMjY1LCAxLjU1MCknLFxuICBlYXNlSW5PdXRDaXJjOiAnY3ViaWMtYmV6aWVyKDAuNzg1LCAgMC4xMzUsIDAuMTUwLCAwLjg2MCknLFxuICBlYXNlSW5PdXRDdWJpYzogJ2N1YmljLWJlemllcigwLjY0NSwgIDAuMDQ1LCAwLjM1NSwgMS4wMDApJyxcbiAgZWFzZUluT3V0RXhwbzogJ2N1YmljLWJlemllcigxLjAwMCwgIDAuMDAwLCAwLjAwMCwgMS4wMDApJyxcbiAgZWFzZUluT3V0UXVhZDogJ2N1YmljLWJlemllcigwLjQ1NSwgIDAuMDMwLCAwLjUxNSwgMC45NTUpJyxcbiAgZWFzZUluT3V0UXVhcnQ6ICdjdWJpYy1iZXppZXIoMC43NzAsICAwLjAwMCwgMC4xNzUsIDEuMDAwKScsXG4gIGVhc2VJbk91dFF1aW50OiAnY3ViaWMtYmV6aWVyKDAuODYwLCAgMC4wMDAsIDAuMDcwLCAxLjAwMCknLFxuICBlYXNlSW5PdXRTaW5lOiAnY3ViaWMtYmV6aWVyKDAuNDQ1LCAgMC4wNTAsIDAuNTUwLCAwLjk1MCknXG59O1xuLyogZXNsaW50LWVuYWJsZSBrZXktc3BhY2luZyAqL1xuXG5mdW5jdGlvbiBnZXRUaW1pbmdGdW5jdGlvbihmdW5jdGlvbk5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uc01hcFtmdW5jdGlvbk5hbWVdO1xufVxuLyoqXG4gKiBTdHJpbmcgdG8gcmVwcmVzZW50IGNvbW1vbiBlYXNpbmcgZnVuY3Rpb25zIGFzIGRlbW9uc3RyYXRlZCBoZXJlOiAoZ2l0aHViLmNvbS9qYXVraWEvZWFzaWUpLlxuICpcbiAqIEBkZXByZWNhdGVkIC0gVGhpcyB3aWxsIGJlIGRlcHJlY2F0ZWQgaW4gdjUgaW4gZmF2b3Igb2YgYGVhc2VJbmAsIGBlYXNlT3V0YCwgYGVhc2VJbk91dGAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6IHRpbWluZ0Z1bmN0aW9ucygnZWFzZUluUXVhZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqICBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICR7dGltaW5nRnVuY3Rpb25zKCdlYXNlSW5RdWFkJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnZGl2Jzoge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDg1LCAwLjY4MCwgMC41MzApJyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRpbWluZ0Z1bmN0aW9ucyh0aW1pbmdGdW5jdGlvbikge1xuICByZXR1cm4gZ2V0VGltaW5nRnVuY3Rpb24odGltaW5nRnVuY3Rpb24pO1xufVxuXG52YXIgZ2V0Qm9yZGVyV2lkdGggPSBmdW5jdGlvbiBnZXRCb3JkZXJXaWR0aChwb2ludGluZ0RpcmVjdGlvbiwgaGVpZ2h0LCB3aWR0aCkge1xuICB2YXIgZnVsbFdpZHRoID0gXCJcIiArIHdpZHRoWzBdICsgKHdpZHRoWzFdIHx8ICcnKTtcbiAgdmFyIGhhbGZXaWR0aCA9IFwiXCIgKyB3aWR0aFswXSAvIDIgKyAod2lkdGhbMV0gfHwgJycpO1xuICB2YXIgZnVsbEhlaWdodCA9IFwiXCIgKyBoZWlnaHRbMF0gKyAoaGVpZ2h0WzFdIHx8ICcnKTtcbiAgdmFyIGhhbGZIZWlnaHQgPSBcIlwiICsgaGVpZ2h0WzBdIC8gMiArIChoZWlnaHRbMV0gfHwgJycpO1xuXG4gIHN3aXRjaCAocG9pbnRpbmdEaXJlY3Rpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgICAgcmV0dXJuIFwiMCBcIiArIGhhbGZXaWR0aCArIFwiIFwiICsgZnVsbEhlaWdodCArIFwiIFwiICsgaGFsZldpZHRoO1xuXG4gICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICByZXR1cm4gZnVsbFdpZHRoICsgXCIgXCIgKyBmdWxsSGVpZ2h0ICsgXCIgMCAwXCI7XG5cbiAgICBjYXNlICdsZWZ0JzpcbiAgICAgIHJldHVybiBoYWxmSGVpZ2h0ICsgXCIgXCIgKyBmdWxsV2lkdGggKyBcIiBcIiArIGhhbGZIZWlnaHQgKyBcIiAwXCI7XG5cbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHJldHVybiBmdWxsV2lkdGggKyBcIiAwIDAgXCIgKyBmdWxsSGVpZ2h0O1xuXG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIHJldHVybiBmdWxsSGVpZ2h0ICsgXCIgXCIgKyBoYWxmV2lkdGggKyBcIiAwIFwiICsgaGFsZldpZHRoO1xuXG4gICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgcmV0dXJuIFwiMCAwIFwiICsgZnVsbFdpZHRoICsgXCIgXCIgKyBmdWxsSGVpZ2h0O1xuXG4gICAgY2FzZSAncmlnaHQnOlxuICAgICAgcmV0dXJuIGhhbGZIZWlnaHQgKyBcIiAwIFwiICsgaGFsZkhlaWdodCArIFwiIFwiICsgZnVsbFdpZHRoO1xuXG4gICAgY2FzZSAndG9wUmlnaHQnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCIwIFwiICsgZnVsbFdpZHRoICsgXCIgXCIgKyBmdWxsSGVpZ2h0ICsgXCIgMFwiO1xuICB9XG59O1xuXG52YXIgZ2V0Qm9yZGVyQ29sb3IgPSBmdW5jdGlvbiBnZXRCb3JkZXJDb2xvcihwb2ludGluZ0RpcmVjdGlvbiwgZm9yZWdyb3VuZENvbG9yKSB7XG4gIHN3aXRjaCAocG9pbnRpbmdEaXJlY3Rpb24pIHtcbiAgICBjYXNlICd0b3AnOlxuICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiBmb3JlZ3JvdW5kQ29sb3JcbiAgICAgIH07XG5cbiAgICBjYXNlICdyaWdodCc6XG4gICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBib3JkZXJMZWZ0Q29sb3I6IGZvcmVncm91bmRDb2xvclxuICAgICAgfTtcblxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgY2FzZSAndG9wTGVmdCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBib3JkZXJUb3BDb2xvcjogZm9yZWdyb3VuZENvbG9yXG4gICAgICB9O1xuXG4gICAgY2FzZSAnbGVmdCc6XG4gICAgY2FzZSAndG9wUmlnaHQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9yZGVyUmlnaHRDb2xvcjogZm9yZWdyb3VuZENvbG9yXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDU5KTtcbiAgfVxufTtcbi8qKlxuICogQ1NTIHRvIHJlcHJlc2VudCB0cmlhbmdsZSB3aXRoIGFueSBwb2ludGluZyBkaXJlY3Rpb24gd2l0aCBhbiBvcHRpb25hbCBiYWNrZ3JvdW5kIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKlxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi50cmlhbmdsZSh7IHBvaW50aW5nRGlyZWN0aW9uOiAncmlnaHQnLCB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBmb3JlZ3JvdW5kQ29sb3I6ICdyZWQnIH0pXG4gKiB9XG4gKlxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3RyaWFuZ2xlKHsgcG9pbnRpbmdEaXJlY3Rpb246ICdyaWdodCcsIHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGZvcmVncm91bmRDb2xvcjogJ3JlZCcgfSl9XG4gKlxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAnYm9yZGVyQ29sb3InOiAndHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgcmVkJyxcbiAqICAnYm9yZGVyU3R5bGUnOiAnc29saWQnLFxuICogICdib3JkZXJXaWR0aCc6ICc1MHB4IDAgNTBweCAxMDBweCcsXG4gKiAgJ2hlaWdodCc6ICcwJyxcbiAqICAnd2lkdGgnOiAnMCcsXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0cmlhbmdsZShfcmVmKSB7XG4gIHZhciBwb2ludGluZ0RpcmVjdGlvbiA9IF9yZWYucG9pbnRpbmdEaXJlY3Rpb24sXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodCxcbiAgICAgIHdpZHRoID0gX3JlZi53aWR0aCxcbiAgICAgIGZvcmVncm91bmRDb2xvciA9IF9yZWYuZm9yZWdyb3VuZENvbG9yLFxuICAgICAgX3JlZiRiYWNrZ3JvdW5kQ29sb3IgPSBfcmVmLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGJhY2tncm91bmRDb2xvciA9IF9yZWYkYmFja2dyb3VuZENvbG9yID09PSB2b2lkIDAgPyAndHJhbnNwYXJlbnQnIDogX3JlZiRiYWNrZ3JvdW5kQ29sb3I7XG4gIHZhciB3aWR0aEFuZFVuaXQgPSBnZXRWYWx1ZUFuZFVuaXQod2lkdGgpO1xuICB2YXIgaGVpZ2h0QW5kVW5pdCA9IGdldFZhbHVlQW5kVW5pdChoZWlnaHQpO1xuXG4gIGlmIChpc05hTihoZWlnaHRBbmRVbml0WzBdKSB8fCBpc05hTih3aWR0aEFuZFVuaXRbMF0pKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjApO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICB3aWR0aDogJzAnLFxuICAgIGhlaWdodDogJzAnLFxuICAgIGJvcmRlckNvbG9yOiBiYWNrZ3JvdW5kQ29sb3JcbiAgfSwgZ2V0Qm9yZGVyQ29sb3IocG9pbnRpbmdEaXJlY3Rpb24sIGZvcmVncm91bmRDb2xvciksIHtcbiAgICBib3JkZXJTdHlsZTogJ3NvbGlkJyxcbiAgICBib3JkZXJXaWR0aDogZ2V0Qm9yZGVyV2lkdGgocG9pbnRpbmdEaXJlY3Rpb24sIGhlaWdodEFuZFVuaXQsIHdpZHRoQW5kVW5pdClcbiAgfSk7XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYW4gZWFzeSB3YXkgdG8gY2hhbmdlIHRoZSBgd29yZFdyYXBgIHByb3BlcnR5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLndvcmRXcmFwKCdicmVhay13b3JkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHt3b3JkV3JhcCgnYnJlYWstd29yZCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIG92ZXJmbG93V3JhcDogJ2JyZWFrLXdvcmQnLFxuICogICB3b3JkV3JhcDogJ2JyZWFrLXdvcmQnLFxuICogICB3b3JkQnJlYWs6ICdicmVhay1hbGwnLFxuICogfVxuICovXG5mdW5jdGlvbiB3b3JkV3JhcCh3cmFwKSB7XG4gIGlmICh3cmFwID09PSB2b2lkIDApIHtcbiAgICB3cmFwID0gJ2JyZWFrLXdvcmQnO1xuICB9XG5cbiAgdmFyIHdvcmRCcmVhayA9IHdyYXAgPT09ICdicmVhay13b3JkJyA/ICdicmVhay1hbGwnIDogd3JhcDtcbiAgcmV0dXJuIHtcbiAgICBvdmVyZmxvd1dyYXA6IHdyYXAsXG4gICAgd29yZFdyYXA6IHdyYXAsXG4gICAgd29yZEJyZWFrOiB3b3JkQnJlYWtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29sb3JUb0ludChjb2xvcikge1xuICByZXR1cm4gTWF0aC5yb3VuZChjb2xvciAqIDI1NSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0ludChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiBjb2xvclRvSW50KHJlZCkgKyBcIixcIiArIGNvbG9yVG9JbnQoZ3JlZW4pICsgXCIsXCIgKyBjb2xvclRvSW50KGJsdWUpO1xufVxuXG5mdW5jdGlvbiBoc2xUb1JnYihodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgY29udmVydCkge1xuICBpZiAoY29udmVydCA9PT0gdm9pZCAwKSB7XG4gICAgY29udmVydCA9IGNvbnZlcnRUb0ludDtcbiAgfVxuXG4gIGlmIChzYXR1cmF0aW9uID09PSAwKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIHJldHVybiBjb252ZXJ0KGxpZ2h0bmVzcywgbGlnaHRuZXNzLCBsaWdodG5lc3MpO1xuICB9IC8vIGZvcm11bGFlIGZyb20gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSFNMX2FuZF9IU1ZcblxuXG4gIHZhciBodWVQcmltZSA9IChodWUgJSAzNjAgKyAzNjApICUgMzYwIC8gNjA7XG4gIHZhciBjaHJvbWEgPSAoMSAtIE1hdGguYWJzKDIgKiBsaWdodG5lc3MgLSAxKSkgKiBzYXR1cmF0aW9uO1xuICB2YXIgc2Vjb25kQ29tcG9uZW50ID0gY2hyb21hICogKDEgLSBNYXRoLmFicyhodWVQcmltZSAlIDIgLSAxKSk7XG4gIHZhciByZWQgPSAwO1xuICB2YXIgZ3JlZW4gPSAwO1xuICB2YXIgYmx1ZSA9IDA7XG5cbiAgaWYgKGh1ZVByaW1lID49IDAgJiYgaHVlUHJpbWUgPCAxKSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDEgJiYgaHVlUHJpbWUgPCAyKSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGdyZWVuID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDIgJiYgaHVlUHJpbWUgPCAzKSB7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAzICYmIGh1ZVByaW1lIDwgNCkge1xuICAgIGdyZWVuID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNCAmJiBodWVQcmltZSA8IDUpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA1ICYmIGh1ZVByaW1lIDwgNikge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9XG5cbiAgdmFyIGxpZ2h0bmVzc01vZGlmaWNhdGlvbiA9IGxpZ2h0bmVzcyAtIGNocm9tYSAvIDI7XG4gIHZhciBmaW5hbFJlZCA9IHJlZCArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsR3JlZW4gPSBncmVlbiArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgdmFyIGZpbmFsQmx1ZSA9IGJsdWUgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHJldHVybiBjb252ZXJ0KGZpbmFsUmVkLCBmaW5hbEdyZWVuLCBmaW5hbEJsdWUpO1xufVxuXG52YXIgbmFtZWRDb2xvck1hcCA9IHtcbiAgYWxpY2VibHVlOiAnZjBmOGZmJyxcbiAgYW50aXF1ZXdoaXRlOiAnZmFlYmQ3JyxcbiAgYXF1YTogJzAwZmZmZicsXG4gIGFxdWFtYXJpbmU6ICc3ZmZmZDQnLFxuICBhenVyZTogJ2YwZmZmZicsXG4gIGJlaWdlOiAnZjVmNWRjJyxcbiAgYmlzcXVlOiAnZmZlNGM0JyxcbiAgYmxhY2s6ICcwMDAnLFxuICBibGFuY2hlZGFsbW9uZDogJ2ZmZWJjZCcsXG4gIGJsdWU6ICcwMDAwZmYnLFxuICBibHVldmlvbGV0OiAnOGEyYmUyJyxcbiAgYnJvd246ICdhNTJhMmEnLFxuICBidXJseXdvb2Q6ICdkZWI4ODcnLFxuICBjYWRldGJsdWU6ICc1ZjllYTAnLFxuICBjaGFydHJldXNlOiAnN2ZmZjAwJyxcbiAgY2hvY29sYXRlOiAnZDI2OTFlJyxcbiAgY29yYWw6ICdmZjdmNTAnLFxuICBjb3JuZmxvd2VyYmx1ZTogJzY0OTVlZCcsXG4gIGNvcm5zaWxrOiAnZmZmOGRjJyxcbiAgY3JpbXNvbjogJ2RjMTQzYycsXG4gIGN5YW46ICcwMGZmZmYnLFxuICBkYXJrYmx1ZTogJzAwMDA4YicsXG4gIGRhcmtjeWFuOiAnMDA4YjhiJyxcbiAgZGFya2dvbGRlbnJvZDogJ2I4ODYwYicsXG4gIGRhcmtncmF5OiAnYTlhOWE5JyxcbiAgZGFya2dyZWVuOiAnMDA2NDAwJyxcbiAgZGFya2dyZXk6ICdhOWE5YTknLFxuICBkYXJra2hha2k6ICdiZGI3NmInLFxuICBkYXJrbWFnZW50YTogJzhiMDA4YicsXG4gIGRhcmtvbGl2ZWdyZWVuOiAnNTU2YjJmJyxcbiAgZGFya29yYW5nZTogJ2ZmOGMwMCcsXG4gIGRhcmtvcmNoaWQ6ICc5OTMyY2MnLFxuICBkYXJrcmVkOiAnOGIwMDAwJyxcbiAgZGFya3NhbG1vbjogJ2U5OTY3YScsXG4gIGRhcmtzZWFncmVlbjogJzhmYmM4ZicsXG4gIGRhcmtzbGF0ZWJsdWU6ICc0ODNkOGInLFxuICBkYXJrc2xhdGVncmF5OiAnMmY0ZjRmJyxcbiAgZGFya3NsYXRlZ3JleTogJzJmNGY0ZicsXG4gIGRhcmt0dXJxdW9pc2U6ICcwMGNlZDEnLFxuICBkYXJrdmlvbGV0OiAnOTQwMGQzJyxcbiAgZGVlcHBpbms6ICdmZjE0OTMnLFxuICBkZWVwc2t5Ymx1ZTogJzAwYmZmZicsXG4gIGRpbWdyYXk6ICc2OTY5NjknLFxuICBkaW1ncmV5OiAnNjk2OTY5JyxcbiAgZG9kZ2VyYmx1ZTogJzFlOTBmZicsXG4gIGZpcmVicmljazogJ2IyMjIyMicsXG4gIGZsb3JhbHdoaXRlOiAnZmZmYWYwJyxcbiAgZm9yZXN0Z3JlZW46ICcyMjhiMjInLFxuICBmdWNoc2lhOiAnZmYwMGZmJyxcbiAgZ2FpbnNib3JvOiAnZGNkY2RjJyxcbiAgZ2hvc3R3aGl0ZTogJ2Y4ZjhmZicsXG4gIGdvbGQ6ICdmZmQ3MDAnLFxuICBnb2xkZW5yb2Q6ICdkYWE1MjAnLFxuICBncmF5OiAnODA4MDgwJyxcbiAgZ3JlZW46ICcwMDgwMDAnLFxuICBncmVlbnllbGxvdzogJ2FkZmYyZicsXG4gIGdyZXk6ICc4MDgwODAnLFxuICBob25leWRldzogJ2YwZmZmMCcsXG4gIGhvdHBpbms6ICdmZjY5YjQnLFxuICBpbmRpYW5yZWQ6ICdjZDVjNWMnLFxuICBpbmRpZ286ICc0YjAwODInLFxuICBpdm9yeTogJ2ZmZmZmMCcsXG4gIGtoYWtpOiAnZjBlNjhjJyxcbiAgbGF2ZW5kZXI6ICdlNmU2ZmEnLFxuICBsYXZlbmRlcmJsdXNoOiAnZmZmMGY1JyxcbiAgbGF3bmdyZWVuOiAnN2NmYzAwJyxcbiAgbGVtb25jaGlmZm9uOiAnZmZmYWNkJyxcbiAgbGlnaHRibHVlOiAnYWRkOGU2JyxcbiAgbGlnaHRjb3JhbDogJ2YwODA4MCcsXG4gIGxpZ2h0Y3lhbjogJ2UwZmZmZicsXG4gIGxpZ2h0Z29sZGVucm9keWVsbG93OiAnZmFmYWQyJyxcbiAgbGlnaHRncmF5OiAnZDNkM2QzJyxcbiAgbGlnaHRncmVlbjogJzkwZWU5MCcsXG4gIGxpZ2h0Z3JleTogJ2QzZDNkMycsXG4gIGxpZ2h0cGluazogJ2ZmYjZjMScsXG4gIGxpZ2h0c2FsbW9uOiAnZmZhMDdhJyxcbiAgbGlnaHRzZWFncmVlbjogJzIwYjJhYScsXG4gIGxpZ2h0c2t5Ymx1ZTogJzg3Y2VmYScsXG4gIGxpZ2h0c2xhdGVncmF5OiAnNzg5JyxcbiAgbGlnaHRzbGF0ZWdyZXk6ICc3ODknLFxuICBsaWdodHN0ZWVsYmx1ZTogJ2IwYzRkZScsXG4gIGxpZ2h0eWVsbG93OiAnZmZmZmUwJyxcbiAgbGltZTogJzBmMCcsXG4gIGxpbWVncmVlbjogJzMyY2QzMicsXG4gIGxpbmVuOiAnZmFmMGU2JyxcbiAgbWFnZW50YTogJ2YwZicsXG4gIG1hcm9vbjogJzgwMDAwMCcsXG4gIG1lZGl1bWFxdWFtYXJpbmU6ICc2NmNkYWEnLFxuICBtZWRpdW1ibHVlOiAnMDAwMGNkJyxcbiAgbWVkaXVtb3JjaGlkOiAnYmE1NWQzJyxcbiAgbWVkaXVtcHVycGxlOiAnOTM3MGRiJyxcbiAgbWVkaXVtc2VhZ3JlZW46ICczY2IzNzEnLFxuICBtZWRpdW1zbGF0ZWJsdWU6ICc3YjY4ZWUnLFxuICBtZWRpdW1zcHJpbmdncmVlbjogJzAwZmE5YScsXG4gIG1lZGl1bXR1cnF1b2lzZTogJzQ4ZDFjYycsXG4gIG1lZGl1bXZpb2xldHJlZDogJ2M3MTU4NScsXG4gIG1pZG5pZ2h0Ymx1ZTogJzE5MTk3MCcsXG4gIG1pbnRjcmVhbTogJ2Y1ZmZmYScsXG4gIG1pc3R5cm9zZTogJ2ZmZTRlMScsXG4gIG1vY2Nhc2luOiAnZmZlNGI1JyxcbiAgbmF2YWpvd2hpdGU6ICdmZmRlYWQnLFxuICBuYXZ5OiAnMDAwMDgwJyxcbiAgb2xkbGFjZTogJ2ZkZjVlNicsXG4gIG9saXZlOiAnODA4MDAwJyxcbiAgb2xpdmVkcmFiOiAnNmI4ZTIzJyxcbiAgb3JhbmdlOiAnZmZhNTAwJyxcbiAgb3JhbmdlcmVkOiAnZmY0NTAwJyxcbiAgb3JjaGlkOiAnZGE3MGQ2JyxcbiAgcGFsZWdvbGRlbnJvZDogJ2VlZThhYScsXG4gIHBhbGVncmVlbjogJzk4ZmI5OCcsXG4gIHBhbGV0dXJxdW9pc2U6ICdhZmVlZWUnLFxuICBwYWxldmlvbGV0cmVkOiAnZGI3MDkzJyxcbiAgcGFwYXlhd2hpcDogJ2ZmZWZkNScsXG4gIHBlYWNocHVmZjogJ2ZmZGFiOScsXG4gIHBlcnU6ICdjZDg1M2YnLFxuICBwaW5rOiAnZmZjMGNiJyxcbiAgcGx1bTogJ2RkYTBkZCcsXG4gIHBvd2RlcmJsdWU6ICdiMGUwZTYnLFxuICBwdXJwbGU6ICc4MDAwODAnLFxuICByZWJlY2NhcHVycGxlOiAnNjM5JyxcbiAgcmVkOiAnZjAwJyxcbiAgcm9zeWJyb3duOiAnYmM4ZjhmJyxcbiAgcm95YWxibHVlOiAnNDE2OWUxJyxcbiAgc2FkZGxlYnJvd246ICc4YjQ1MTMnLFxuICBzYWxtb246ICdmYTgwNzInLFxuICBzYW5keWJyb3duOiAnZjRhNDYwJyxcbiAgc2VhZ3JlZW46ICcyZThiNTcnLFxuICBzZWFzaGVsbDogJ2ZmZjVlZScsXG4gIHNpZW5uYTogJ2EwNTIyZCcsXG4gIHNpbHZlcjogJ2MwYzBjMCcsXG4gIHNreWJsdWU6ICc4N2NlZWInLFxuICBzbGF0ZWJsdWU6ICc2YTVhY2QnLFxuICBzbGF0ZWdyYXk6ICc3MDgwOTAnLFxuICBzbGF0ZWdyZXk6ICc3MDgwOTAnLFxuICBzbm93OiAnZmZmYWZhJyxcbiAgc3ByaW5nZ3JlZW46ICcwMGZmN2YnLFxuICBzdGVlbGJsdWU6ICc0NjgyYjQnLFxuICB0YW46ICdkMmI0OGMnLFxuICB0ZWFsOiAnMDA4MDgwJyxcbiAgdGhpc3RsZTogJ2Q4YmZkOCcsXG4gIHRvbWF0bzogJ2ZmNjM0NycsXG4gIHR1cnF1b2lzZTogJzQwZTBkMCcsXG4gIHZpb2xldDogJ2VlODJlZScsXG4gIHdoZWF0OiAnZjVkZWIzJyxcbiAgd2hpdGU6ICdmZmYnLFxuICB3aGl0ZXNtb2tlOiAnZjVmNWY1JyxcbiAgeWVsbG93OiAnZmYwJyxcbiAgeWVsbG93Z3JlZW46ICc5YWNkMzInXG59O1xuLyoqXG4gKiBDaGVja3MgaWYgYSBzdHJpbmcgaXMgYSBDU1MgbmFtZWQgY29sb3IgYW5kIHJldHVybnMgaXRzIGVxdWl2YWxlbnQgaGV4IHZhbHVlLCBvdGhlcndpc2UgcmV0dXJucyB0aGUgb3JpZ2luYWwgY29sb3IuXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG5hbWVUb0hleChjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykgcmV0dXJuIGNvbG9yO1xuICB2YXIgbm9ybWFsaXplZENvbG9yTmFtZSA9IGNvbG9yLnRvTG93ZXJDYXNlKCk7XG4gIHJldHVybiBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdID8gXCIjXCIgKyBuYW1lZENvbG9yTWFwW25vcm1hbGl6ZWRDb2xvck5hbWVdIDogY29sb3I7XG59XG5cbnZhciBoZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezZ9JC87XG52YXIgaGV4UmdiYVJlZ2V4ID0gL14jW2EtZkEtRjAtOV17OH0kLztcbnZhciByZWR1Y2VkSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXszfSQvO1xudmFyIHJlZHVjZWRSZ2JhSGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs0fSQvO1xudmFyIHJnYlJlZ2V4ID0gL15yZ2JcXChcXHMqKFxcZHsxLDN9KVxccyooPzosKT9cXHMqKFxcZHsxLDN9KVxccyooPzosKT9cXHMqKFxcZHsxLDN9KVxccypcXCkkL2k7XG52YXIgcmdiYVJlZ2V4ID0gL15yZ2IoPzphKT9cXChcXHMqKFxcZHsxLDN9KVxccyooPzosKT9cXHMqKFxcZHsxLDN9KVxccyooPzosKT9cXHMqKFxcZHsxLDN9KVxccyooPzosfFxcLylcXHMqKFstK10/XFxkKlsuXT9cXGQrWyVdPylcXHMqXFwpJC9pO1xudmFyIGhzbFJlZ2V4ID0gL15oc2xcXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKyg/OmRlZyk/KVxccyooPzosKT9cXHMqKFxcZHsxLDN9Wy5dP1swLTldPyklXFxzKig/OiwpP1xccyooXFxkezEsM31bLl0/WzAtOV0/KSVcXHMqXFwpJC9pO1xudmFyIGhzbGFSZWdleCA9IC9eaHNsKD86YSk/XFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSsoPzpkZWcpPylcXHMqKD86LCk/XFxzKihcXGR7MSwzfVsuXT9bMC05XT8pJVxccyooPzosKT9cXHMqKFxcZHsxLDN9Wy5dP1swLTldPyklXFxzKig/Oix8XFwvKVxccyooWy0rXT9cXGQqWy5dP1xcZCtbJV0/KVxccypcXCkkL2k7XG4vKipcbiAqIFJldHVybnMgYW4gUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiAyNTUsIGdyZWVuOiAwLCBibHVlOiAwIH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb1JnYigncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgcmVkOiA5MiwgZ3JlZW46IDEwMiwgYmx1ZTogMTEyLCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9SZ2IoJ2hzbGEoMjEwLCAxMCUsIDQwJSwgMC43NSknKTtcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZVRvUmdiKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMyk7XG4gIH1cblxuICB2YXIgbm9ybWFsaXplZENvbG9yID0gbmFtZVRvSGV4KGNvbG9yKTtcblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJlZ2V4KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChoZXhSZ2JhUmVnZXgpKSB7XG4gICAgdmFyIGFscGhhID0gcGFyc2VGbG9hdCgocGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls3XSArIG5vcm1hbGl6ZWRDb2xvcls4XSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpKTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls1XSArIG5vcm1hbGl6ZWRDb2xvcls2XSwgMTYpLFxuICAgICAgYWxwaGE6IGFscGhhXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2gocmVkdWNlZEhleFJlZ2V4KSkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMV0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzJdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzNdLCAxNilcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkUmdiYUhleFJlZ2V4KSkge1xuICAgIHZhciBfYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzRdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KSxcbiAgICAgIGFscGhhOiBfYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKHJnYk1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZ2JhTWF0Y2hlZCA9IHJnYmFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvci5zdWJzdHJpbmcoMCwgNTApKTtcblxuICBpZiAocmdiYU1hdGNoZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIHJnYmFNYXRjaGVkWzRdKSA+IDEgPyBwYXJzZUZsb2F0KFwiXCIgKyByZ2JhTWF0Y2hlZFs0XSkgLyAxMDAgOiBwYXJzZUZsb2F0KFwiXCIgKyByZ2JhTWF0Y2hlZFs0XSlcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbE1hdGNoZWQgPSBoc2xSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvcik7XG5cbiAgaWYgKGhzbE1hdGNoZWQpIHtcbiAgICB2YXIgaHVlID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMV0sIDEwKTtcbiAgICB2YXIgc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG4gICAgdmFyIGxpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzNdLCAxMCkgLyAxMDA7XG4gICAgdmFyIHJnYkNvbG9yU3RyaW5nID0gXCJyZ2IoXCIgKyBoc2xUb1JnYihodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIilcIjtcbiAgICB2YXIgaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMocmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFoc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0LCBub3JtYWxpemVkQ29sb3IsIHJnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFszXSwgMTApXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xhTWF0Y2hlZCA9IGhzbGFSZWdleC5leGVjKG5vcm1hbGl6ZWRDb2xvci5zdWJzdHJpbmcoMCwgNTApKTtcblxuICBpZiAoaHNsYU1hdGNoZWQpIHtcbiAgICB2YXIgX2h1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsxXSwgMTApO1xuXG4gICAgdmFyIF9zYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzJdLCAxMCkgLyAxMDA7XG5cbiAgICB2YXIgX2xpZ2h0bmVzcyA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9yZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgaHNsVG9SZ2IoX2h1ZSwgX3NhdHVyYXRpb24sIF9saWdodG5lc3MpICsgXCIpXCI7XG5cbiAgICB2YXIgX2hzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKF9yZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIV9oc2xSZ2JNYXRjaGVkKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0LCBub3JtYWxpemVkQ29sb3IsIF9yZ2JDb2xvclN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbM10sIDEwKSxcbiAgICAgIGFscGhhOiBwYXJzZUZsb2F0KFwiXCIgKyBoc2xhTWF0Y2hlZFs0XSkgPiAxID8gcGFyc2VGbG9hdChcIlwiICsgaHNsYU1hdGNoZWRbNF0pIC8gMTAwIDogcGFyc2VGbG9hdChcIlwiICsgaHNsYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDUpO1xufVxuXG5mdW5jdGlvbiByZ2JUb0hzbChjb2xvcikge1xuICAvLyBtYWtlIHN1cmUgcmdiIGFyZSBjb250YWluZWQgaW4gYSBzZXQgb2YgWzAsIDI1NV1cbiAgdmFyIHJlZCA9IGNvbG9yLnJlZCAvIDI1NTtcbiAgdmFyIGdyZWVuID0gY29sb3IuZ3JlZW4gLyAyNTU7XG4gIHZhciBibHVlID0gY29sb3IuYmx1ZSAvIDI1NTtcbiAgdmFyIG1heCA9IE1hdGgubWF4KHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbWluID0gTWF0aC5taW4ocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBsaWdodG5lc3MgPSAobWF4ICsgbWluKSAvIDI7XG5cbiAgaWYgKG1heCA9PT0gbWluKSB7XG4gICAgLy8gYWNocm9tYXRpY1xuICAgIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIGh1ZTtcbiAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICB2YXIgc2F0dXJhdGlvbiA9IGxpZ2h0bmVzcyA+IDAuNSA/IGRlbHRhIC8gKDIgLSBtYXggLSBtaW4pIDogZGVsdGEgLyAobWF4ICsgbWluKTtcblxuICBzd2l0Y2ggKG1heCkge1xuICAgIGNhc2UgcmVkOlxuICAgICAgaHVlID0gKGdyZWVuIC0gYmx1ZSkgLyBkZWx0YSArIChncmVlbiA8IGJsdWUgPyA2IDogMCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgZ3JlZW46XG4gICAgICBodWUgPSAoYmx1ZSAtIHJlZCkgLyBkZWx0YSArIDI7XG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBibHVlIGNhc2VcbiAgICAgIGh1ZSA9IChyZWQgLSBncmVlbikgLyBkZWx0YSArIDQ7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGh1ZSAqPSA2MDtcblxuICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICBodWU6IGh1ZSxcbiAgICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGh1ZTogaHVlLFxuICAgIHNhdHVyYXRpb246IHNhdHVyYXRpb24sXG4gICAgbGlnaHRuZXNzOiBsaWdodG5lc3NcbiAgfTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBpcyBvbmx5IHVzZWZ1bFxuICogaWYgd2FudCB0byBleHRyYWN0IGEgY29sb3IgY29tcG9uZW50LiBXaXRoIHRoZSBjb2xvciB1dGlsIGB0b0NvbG9yU3RyaW5nYCB5b3VcbiAqIGNhbiBjb252ZXJ0IGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCBiYWNrIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfWAgdG8gY29sb3IxXG4gKiBjb25zdCBjb2xvcjEgPSBwYXJzZVRvSHNsKCdyZ2IoMjU1LCAwLCAwKScpO1xuICogLy8gQXNzaWducyBgeyBodWU6IDEyOCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUsIGFscGhhOiAwLjc1IH1gIHRvIGNvbG9yMlxuICogY29uc3QgY29sb3IyID0gcGFyc2VUb0hzbCgnaHNsYSgxMjgsIDEwMCUsIDUwJSwgMC43NSknKTtcbiAqL1xuZnVuY3Rpb24gcGFyc2VUb0hzbChjb2xvcikge1xuICAvLyBOb3RlOiBBdCBhIGxhdGVyIHN0YWdlIHdlIGNhbiBvcHRpbWl6ZSB0aGlzIGZ1bmN0aW9uIGFzIHJpZ2h0IG5vdyBhIGhzbFxuICAvLyBjb2xvciB3b3VsZCBiZSBwYXJzZWQgY29udmVydGVkIHRvIHJnYiB2YWx1ZXMgYW5kIGNvbnZlcnRlZCBiYWNrIHRvIGhzbC5cbiAgcmV0dXJuIHJnYlRvSHNsKHBhcnNlVG9SZ2IoY29sb3IpKTtcbn1cblxuLyoqXG4gKiBSZWR1Y2VzIGhleCB2YWx1ZXMgaWYgcG9zc2libGUgZS5nLiAjZmY4ODY2IHRvICNmODZcbiAqIEBwcml2YXRlXG4gKi9cbnZhciByZWR1Y2VIZXhWYWx1ZSA9IGZ1bmN0aW9uIHJlZHVjZUhleFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZS5sZW5ndGggPT09IDcgJiYgdmFsdWVbMV0gPT09IHZhbHVlWzJdICYmIHZhbHVlWzNdID09PSB2YWx1ZVs0XSAmJiB2YWx1ZVs1XSA9PT0gdmFsdWVbNl0pIHtcbiAgICByZXR1cm4gXCIjXCIgKyB2YWx1ZVsxXSArIHZhbHVlWzNdICsgdmFsdWVbNV07XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgcmVkdWNlSGV4VmFsdWUkMSA9IHJlZHVjZUhleFZhbHVlO1xuXG5mdW5jdGlvbiBudW1iZXJUb0hleCh2YWx1ZSkge1xuICB2YXIgaGV4ID0gdmFsdWUudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG5mdW5jdGlvbiBjb2xvclRvSGV4KGNvbG9yKSB7XG4gIHJldHVybiBudW1iZXJUb0hleChNYXRoLnJvdW5kKGNvbG9yICogMjU1KSk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0hleChyZWQsIGdyZWVuLCBibHVlKSB7XG4gIHJldHVybiByZWR1Y2VIZXhWYWx1ZSQxKFwiI1wiICsgY29sb3JUb0hleChyZWQpICsgY29sb3JUb0hleChncmVlbikgKyBjb2xvclRvSGV4KGJsdWUpKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9IZXgoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgcmV0dXJuIGhzbFRvUmdiKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0VG9IZXgpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbCgzNTksIDAuNzUsIDAuNCksXG4gKiAgIGJhY2tncm91bmQ6IGhzbCh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2woMzU5LCAwLjc1LCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2wodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gaHNsVG9IZXgodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaHNsVG9IZXgodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pLFxuICogICBiYWNrZ3JvdW5kOiBoc2xhKDM1OSwgMC43NSwgMC40LCAxKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMCw3IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xhKDM1OSwgMC43NSwgMC40LCAxKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI4LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2xhKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGFscGhhKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYWxwaGEgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGFscGhhID49IDEgPyBoc2xUb0hleCh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSA6IFwicmdiYShcIiArIGhzbFRvUmdiKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpICsgXCIsXCIgKyBhbHBoYSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkICYmIGFscGhhID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdmFsdWUuYWxwaGEgPj0gMSA/IGhzbFRvSGV4KHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSA6IFwicmdiYShcIiArIGhzbFRvUmdiKHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKSArIFwiLFwiICsgdmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDIpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDIwNSwgMTAwKSxcbiAqICAgYmFja2dyb3VuZDogcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoMjU1LCAyMDUsIDEwMCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2IodmFsdWUsIGdyZWVuLCBibHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGJsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHJlZHVjZUhleFZhbHVlJDEoXCIjXCIgKyBudW1iZXJUb0hleCh2YWx1ZSkgKyBudW1iZXJUb0hleChncmVlbikgKyBudW1iZXJUb0hleChibHVlKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBncmVlbiA9PT0gdW5kZWZpbmVkICYmIGJsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiByZWR1Y2VIZXhWYWx1ZSQxKFwiI1wiICsgbnVtYmVyVG9IZXgodmFsdWUucmVkKSArIG51bWJlclRvSGV4KHZhbHVlLmdyZWVuKSArIG51bWJlclRvSGV4KHZhbHVlLmJsdWUpKTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDYpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQ2FuIGFsc28gYmUgdXNlZCB0byBmYWRlIGEgY29sb3IgYnkgcGFzc2luZyBhIGhleCB2YWx1ZSBvciBuYW1lZCBDU1MgY29sb3IgYWxvbmcgd2l0aCBhbiBhbHBoYSB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDAuNyksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43IH0pLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjA1LCAxMDAsIDEpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCcjZmZmZmZmJywgMC40KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgnYmxhY2snLCAwLjcpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoMjU1LCAyMDUsIDEwMCwgMSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJyNmZmZmZmYnLCAwLjQpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKCdibGFjaycsIDAuNyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjQpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDAsMCwwLjcpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYmEoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUsIGZvdXJ0aFZhbHVlKSB7XG4gIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHZhciByZ2JWYWx1ZSA9IHBhcnNlVG9SZ2IoZmlyc3RWYWx1ZSk7XG4gICAgcmV0dXJuIFwicmdiYShcIiArIHJnYlZhbHVlLnJlZCArIFwiLFwiICsgcmdiVmFsdWUuZ3JlZW4gKyBcIixcIiArIHJnYlZhbHVlLmJsdWUgKyBcIixcIiArIHNlY29uZFZhbHVlICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzZWNvbmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHRoaXJkVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBmb3VydGhWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZm91cnRoVmFsdWUgPj0gMSA/IHJnYihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiLFwiICsgdGhpcmRWYWx1ZSArIFwiLFwiICsgZm91cnRoVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ29iamVjdCcgJiYgc2Vjb25kVmFsdWUgPT09IHVuZGVmaW5lZCAmJiB0aGlyZFZhbHVlID09PSB1bmRlZmluZWQgJiYgZm91cnRoVmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmaXJzdFZhbHVlLmFscGhhID49IDEgPyByZ2IoZmlyc3RWYWx1ZS5yZWQsIGZpcnN0VmFsdWUuZ3JlZW4sIGZpcnN0VmFsdWUuYmx1ZSkgOiBcInJnYmEoXCIgKyBmaXJzdFZhbHVlLnJlZCArIFwiLFwiICsgZmlyc3RWYWx1ZS5ncmVlbiArIFwiLFwiICsgZmlyc3RWYWx1ZS5ibHVlICsgXCIsXCIgKyBmaXJzdFZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3KTtcbn1cblxudmFyIGlzUmdiID0gZnVuY3Rpb24gaXNSZ2IoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInICYmICh0eXBlb2YgY29sb3IuYWxwaGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxudmFyIGlzUmdiYSA9IGZ1bmN0aW9uIGlzUmdiYShjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG5cbnZhciBpc0hzbCA9IGZ1bmN0aW9uIGlzSHNsKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNIc2xhID0gZnVuY3Rpb24gaXNIc2xhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJztcbn07XG4vKipcbiAqIENvbnZlcnRzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCB0byBhIGNvbG9yIHN0cmluZy5cbiAqIFRoaXMgdXRpbCBpcyB1c2VmdWwgaW4gY2FzZSB5b3Ugb25seSBrbm93IG9uIHJ1bnRpbWUgd2hpY2ggY29sb3Igb2JqZWN0IGlzXG4gKiB1c2VkLiBPdGhlcndpc2Ugd2UgcmVjb21tZW5kIHRvIHJlbHkgb24gYHJnYmAsIGByZ2JhYCwgYGhzbGAgb3IgYGhzbGFgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcyKVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiMwMGZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyNSwwLjcyKVwiO1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gdG9Db2xvclN0cmluZyhjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnb2JqZWN0JykgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoOCk7XG4gIGlmIChpc1JnYmEoY29sb3IpKSByZXR1cm4gcmdiYShjb2xvcik7XG4gIGlmIChpc1JnYihjb2xvcikpIHJldHVybiByZ2IoY29sb3IpO1xuICBpZiAoaXNIc2xhKGNvbG9yKSkgcmV0dXJuIGhzbGEoY29sb3IpO1xuICBpZiAoaXNIc2woY29sb3IpKSByZXR1cm4gaHNsKGNvbG9yKTtcbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoOCk7XG59XG5cbi8vIFR5cGUgZGVmaW5pdGlvbnMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZ2NhbnRpL2Zsb3ctc3RhdGljLWxhbmQvYmxvYi9tYXN0ZXIvc3JjL0Z1bi5qc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcbmZ1bmN0aW9uIGN1cnJpZWQoZiwgbGVuZ3RoLCBhY2MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZuKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgY29tYmluZWQgPSBhY2MuY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgIHJldHVybiBjb21iaW5lZC5sZW5ndGggPj0gbGVuZ3RoID8gZi5hcHBseSh0aGlzLCBjb21iaW5lZCkgOiBjdXJyaWVkKGYsIGxlbmd0aCwgY29tYmluZWQpO1xuICB9O1xufSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cblxuZnVuY3Rpb24gY3VycnkoZikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlZGVjbGFyZVxuICByZXR1cm4gY3VycmllZChmLCBmLmxlbmd0aCwgW10pO1xufVxuXG4vKipcbiAqIENoYW5nZXMgdGhlIGh1ZSBvZiB0aGUgY29sb3IuIEh1ZSBpcyBhIG51bWJlciBiZXR3ZWVuIDAgdG8gMzYwLiBUaGUgZmlyc3RcbiAqIGFyZ3VtZW50IGZvciBhZGp1c3RIdWUgaXMgdGhlIGFtb3VudCBvZiBkZWdyZWVzIHRoZSBjb2xvciBpcyByb3RhdGVkIGFyb3VuZFxuICogdGhlIGNvbG9yIHdoZWVsLCBhbHdheXMgcHJvZHVjaW5nIGEgcG9zaXRpdmUgaHVlIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGFkanVzdEh1ZSgxODAsICcjNDQ4JyksXG4gKiAgIGJhY2tncm91bmQ6IGFkanVzdEh1ZSgnMTgwJywgJ3JnYmEoMTAxLDEwMCwyMDUsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2FkanVzdEh1ZSgxODAsICcjNDQ4Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2FkanVzdEh1ZSgnMTgwJywgJ3JnYmEoMTAxLDEwMCwyMDUsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjODg4ODQ0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxMzYsMTM2LDY4LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBhZGp1c3RIdWUoZGVncmVlLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGh1ZTogaHNsQ29sb3IuaHVlICsgcGFyc2VGbG9hdChkZWdyZWUpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRBZGp1c3RIdWUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oYWRqdXN0SHVlKTtcbnZhciBjdXJyaWVkQWRqdXN0SHVlJDEgPSBjdXJyaWVkQWRqdXN0SHVlO1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbXBsZW1lbnQgb2YgdGhlIHByb3ZpZGVkIGNvbG9yLiBUaGlzIGlzIGlkZW50aWNhbCB0byBhZGp1c3RIdWUoMTgwLCA8Y29sb3I+KS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBjb21wbGVtZW50KCcjNDQ4JyksXG4gKiAgIGJhY2tncm91bmQ6IGNvbXBsZW1lbnQoJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2NvbXBsZW1lbnQoJyM0NDgnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7Y29tcGxlbWVudCgncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM4ODRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE1MywxNTMsMTUzLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBjb21wbGVtZW50KGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgaHVlOiAoaHNsQ29sb3IuaHVlICsgMTgwKSAlIDM2MFxuICB9KSk7XG59XG5cbmZ1bmN0aW9uIGd1YXJkKGxvd2VyQm91bmRhcnksIHVwcGVyQm91bmRhcnksIHZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1heChsb3dlckJvdW5kYXJ5LCBNYXRoLm1pbih1cHBlckJvdW5kYXJ5LCB2YWx1ZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBkYXJrZW5lZCBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oMC4yLCAnI0ZGQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtkYXJrZW4oJzAuMicsICdyZ2JhKDI1NSwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmJkMzFcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwxODksNDksMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGRhcmtlbihhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgbGlnaHRuZXNzOiBndWFyZCgwLCAxLCBoc2xDb2xvci5saWdodG5lc3MgLSBwYXJzZUZsb2F0KGFtb3VudCkpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWREYXJrZW4gPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oZGFya2VuKTtcbnZhciBjdXJyaWVkRGFya2VuJDEgPSBjdXJyaWVkRGFya2VuO1xuXG4vKipcbiAqIERlY3JlYXNlcyB0aGUgaW50ZW5zaXR5IG9mIGEgY29sb3IuIEl0cyByYW5nZSBpcyBiZXR3ZWVuIDAgdG8gMS4gVGhlIGZpcnN0XG4gKiBhcmd1bWVudCBvZiB0aGUgZGVzYXR1cmF0ZSBmdW5jdGlvbiBpcyB0aGUgYW1vdW50IGJ5IGhvdyBtdWNoIHRoZSBjb2xvclxuICogaW50ZW5zaXR5IHNob3VsZCBiZSBkZWNyZWFzZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZGVzYXR1cmF0ZSgwLjIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUoJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtkZXNhdHVyYXRlKDAuMiwgJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7ZGVzYXR1cmF0ZSgnMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYjhiOTc5XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxODQsMTg1LDEyMSwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZGVzYXR1cmF0ZShhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgc2F0dXJhdGlvbjogZ3VhcmQoMCwgMSwgaHNsQ29sb3Iuc2F0dXJhdGlvbiAtIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZERlc2F0dXJhdGUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oZGVzYXR1cmF0ZSk7XG52YXIgY3VycmllZERlc2F0dXJhdGUkMSA9IGN1cnJpZWREZXNhdHVyYXRlO1xuXG4vKipcbiAqIFJldHVybnMgYSBudW1iZXIgKGZsb2F0KSByZXByZXNlbnRpbmcgdGhlIGx1bWluYW5jZSBvZiBhIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGdldEx1bWluYW5jZSgnI0NDQ0Q2NCcpID49IGdldEx1bWluYW5jZSgnIzAwMDBmZicpID8gJyNDQ0NENjQnIDogJyMwMDAwZmYnLFxuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScpID49IGdldEx1bWluYW5jZSgncmdiYSgyNTUsIDU3LCAxNDksIDEpJykgP1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknIDpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDU3LCAxNDksIDEpJyxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJ307XG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKSd9O1xuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICBiYWNrZ3JvdW5kOiBcIiNDQ0NENjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDU4LCAxMzMsIDI1NSwgMSlcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBnZXRMdW1pbmFuY2UoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gMDtcbiAgdmFyIHJnYkNvbG9yID0gcGFyc2VUb1JnYihjb2xvcik7XG5cbiAgdmFyIF9PYmplY3Qka2V5cyRtYXAgPSBPYmplY3Qua2V5cyhyZ2JDb2xvcikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgY2hhbm5lbCA9IHJnYkNvbG9yW2tleV0gLyAyNTU7XG4gICAgcmV0dXJuIGNoYW5uZWwgPD0gMC4wMzkyOCA/IGNoYW5uZWwgLyAxMi45MiA6IE1hdGgucG93KChjaGFubmVsICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gIH0pLFxuICAgICAgciA9IF9PYmplY3Qka2V5cyRtYXBbMF0sXG4gICAgICBnID0gX09iamVjdCRrZXlzJG1hcFsxXSxcbiAgICAgIGIgPSBfT2JqZWN0JGtleXMkbWFwWzJdO1xuXG4gIHJldHVybiBwYXJzZUZsb2F0KCgwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGIpLnRvRml4ZWQoMykpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbnRyYXN0IHJhdGlvIGJldHdlZW4gdHdvIGNvbG9ycyBiYXNlZCBvblxuICogW1czJ3MgcmVjb21tZW5kZWQgZXF1YXRpb24gZm9yIGNhbGN1bGF0aW5nIGNvbnRyYXN0XShodHRwOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAvI2NvbnRyYXN0LXJhdGlvZGVmKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgY29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0KCcjNDQ0JywgJyNmZmYnKTtcbiAqL1xuXG5mdW5jdGlvbiBnZXRDb250cmFzdChjb2xvcjEsIGNvbG9yMikge1xuICB2YXIgbHVtaW5hbmNlMSA9IGdldEx1bWluYW5jZShjb2xvcjEpO1xuICB2YXIgbHVtaW5hbmNlMiA9IGdldEx1bWluYW5jZShjb2xvcjIpO1xuICByZXR1cm4gcGFyc2VGbG9hdCgobHVtaW5hbmNlMSA+IGx1bWluYW5jZTIgPyAobHVtaW5hbmNlMSArIDAuMDUpIC8gKGx1bWluYW5jZTIgKyAwLjA1KSA6IChsdW1pbmFuY2UyICsgMC4wNSkgLyAobHVtaW5hbmNlMSArIDAuMDUpKS50b0ZpeGVkKDIpKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgY29sb3IgdG8gYSBncmF5c2NhbGUsIGJ5IHJlZHVjaW5nIGl0cyBzYXR1cmF0aW9uIHRvIDAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZ3JheXNjYWxlKCcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGdyYXlzY2FsZSgncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Z3JheXNjYWxlKCcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2dyYXlzY2FsZSgncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM5OTlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE1MywxNTMsMTUzLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBncmF5c2NhbGUoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBwYXJzZVRvSHNsKGNvbG9yKSwge1xuICAgIHNhdHVyYXRpb246IDBcbiAgfSkpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdCB0byBhIGNvbG9yIHN0cmluZy5cbiAqIFRoaXMgdXRpbCBpcyB1c2VmdWwgaW4gY2FzZSB5b3Ugb25seSBrbm93IG9uIHJ1bnRpbWUgd2hpY2ggY29sb3Igb2JqZWN0IGlzXG4gKiB1c2VkLiBPdGhlcndpc2Ugd2UgcmVjb21tZW5kIHRvIHJlbHkgb24gYGhzbGAgb3IgYGhzbGFgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbFRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSksXG4gKiAgIGJhY2tncm91bmQ6IGhzbFRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbFRvQ29sb3JTdHJpbmcoeyBodWU6IDI0MCwgc2F0dXJhdGlvbjogMSwgbGlnaHRuZXNzOiAwLjUgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbFRvQ29sb3JTdHJpbmcoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjMDBmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjUsMC43MilcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsVG9Db2xvclN0cmluZyhjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY29sb3IuaHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3Iuc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmxpZ2h0bmVzcyA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAoY29sb3IuYWxwaGEgJiYgdHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIGhzbGEoe1xuICAgICAgICBodWU6IGNvbG9yLmh1ZSxcbiAgICAgICAgc2F0dXJhdGlvbjogY29sb3Iuc2F0dXJhdGlvbixcbiAgICAgICAgbGlnaHRuZXNzOiBjb2xvci5saWdodG5lc3MsXG4gICAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhzbCh7XG4gICAgICBodWU6IGNvbG9yLmh1ZSxcbiAgICAgIHNhdHVyYXRpb246IGNvbG9yLnNhdHVyYXRpb24sXG4gICAgICBsaWdodG5lc3M6IGNvbG9yLmxpZ2h0bmVzc1xuICAgIH0pO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDUpO1xufVxuXG4vKipcbiAqIEludmVydHMgdGhlIHJlZCwgZ3JlZW4gYW5kIGJsdWUgdmFsdWVzIG9mIGEgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaW52ZXJ0KCcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGludmVydCgncmdiYSgxMDEsMTAwLDIwNSwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aW52ZXJ0KCcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2ludmVydCgncmdiYSgxMDEsMTAwLDIwNSwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjMzMzMjliXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNTQsMTU1LDUwLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBpbnZlcnQoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7IC8vIHBhcnNlIGNvbG9yIHN0cmluZyB0byByZ2JcblxuICB2YXIgdmFsdWUgPSBwYXJzZVRvUmdiKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHZhbHVlLCB7XG4gICAgcmVkOiAyNTUgLSB2YWx1ZS5yZWQsXG4gICAgZ3JlZW46IDI1NSAtIHZhbHVlLmdyZWVuLFxuICAgIGJsdWU6IDI1NSAtIHZhbHVlLmJsdWVcbiAgfSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBsaWdodGVuZWQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogbGlnaHRlbigwLjIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtsaWdodGVuKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbignMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2U1ZTZiMVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjI5LDIzMCwxNzcsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGxpZ2h0ZW4oYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGxpZ2h0bmVzczogZ3VhcmQoMCwgMSwgaHNsQ29sb3IubGlnaHRuZXNzICsgcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkTGlnaHRlbiA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihsaWdodGVuKTtcbnZhciBjdXJyaWVkTGlnaHRlbiQxID0gY3VycmllZExpZ2h0ZW47XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGljaCBjb250cmFzdCBndWlkZWxpbmVzIGhhdmUgYmVlbiBtZXQgZm9yIHR3byBjb2xvcnMuXG4gKiBCYXNlZCBvbiB0aGUgW2NvbnRyYXN0IGNhbGN1bGF0aW9ucyByZWNvbW1lbmRlZCBieSBXM10oaHR0cHM6Ly93d3cudzMub3JnL1dBSS9XQ0FHMjEvVW5kZXJzdGFuZGluZy9jb250cmFzdC1lbmhhbmNlZC5odG1sKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3Qgc2NvcmVzID0gbWVldHNDb250cmFzdEd1aWRlbGluZXMoJyM0NDQnLCAnI2ZmZicpO1xuICovXG5mdW5jdGlvbiBtZWV0c0NvbnRyYXN0R3VpZGVsaW5lcyhjb2xvcjEsIGNvbG9yMikge1xuICB2YXIgY29udHJhc3RSYXRpbyA9IGdldENvbnRyYXN0KGNvbG9yMSwgY29sb3IyKTtcbiAgcmV0dXJuIHtcbiAgICBBQTogY29udHJhc3RSYXRpbyA+PSA0LjUsXG4gICAgQUFMYXJnZTogY29udHJhc3RSYXRpbyA+PSAzLFxuICAgIEFBQTogY29udHJhc3RSYXRpbyA+PSA3LFxuICAgIEFBQUxhcmdlOiBjb250cmFzdFJhdGlvID49IDQuNVxuICB9O1xufVxuXG4vKipcbiAqIE1peGVzIHRoZSB0d28gcHJvdmlkZWQgY29sb3JzIHRvZ2V0aGVyIGJ5IGNhbGN1bGF0aW5nIHRoZSBhdmVyYWdlIG9mIGVhY2ggb2YgdGhlIFJHQiBjb21wb25lbnRzIHdlaWdodGVkIHRvIHRoZSBmaXJzdCBjb2xvciBieSB0aGUgcHJvdmlkZWQgd2VpZ2h0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IG1peCgwLjUsICcjZjAwJywgJyMwMGYnKVxuICogICBiYWNrZ3JvdW5kOiBtaXgoMC4yNSwgJyNmMDAnLCAnIzAwZicpXG4gKiAgIGJhY2tncm91bmQ6IG1peCgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJywgJyMwMGYnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke21peCgwLjUsICcjZjAwJywgJyMwMGYnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7bWl4KDAuMjUsICcjZjAwJywgJyMwMGYnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7bWl4KCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuNSknLCAnIzAwZicpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzdmMDA3ZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiMzZjAwYmZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDYzLCAwLCAxOTEsIDAuNzUpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gbWl4KHdlaWdodCwgY29sb3IsIG90aGVyQ29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gb3RoZXJDb2xvcjtcbiAgaWYgKG90aGVyQ29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgaWYgKHdlaWdodCA9PT0gMCkgcmV0dXJuIG90aGVyQ29sb3I7XG4gIHZhciBwYXJzZWRDb2xvcjEgPSBwYXJzZVRvUmdiKGNvbG9yKTtcblxuICB2YXIgY29sb3IxID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yMSwge1xuICAgIGFscGhhOiB0eXBlb2YgcGFyc2VkQ29sb3IxLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yMS5hbHBoYSA6IDFcbiAgfSk7XG5cbiAgdmFyIHBhcnNlZENvbG9yMiA9IHBhcnNlVG9SZ2Iob3RoZXJDb2xvcik7XG5cbiAgdmFyIGNvbG9yMiA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvcjIsIHtcbiAgICBhbHBoYTogdHlwZW9mIHBhcnNlZENvbG9yMi5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvcjIuYWxwaGEgOiAxXG4gIH0pOyAvLyBUaGUgZm9ybXVsYSBpcyBjb3BpZWQgZnJvbSB0aGUgb3JpZ2luYWwgU2FzcyBpbXBsZW1lbnRhdGlvbjpcbiAgLy8gaHR0cDovL3Nhc3MtbGFuZy5jb20vZG9jdW1lbnRhdGlvbi9TYXNzL1NjcmlwdC9GdW5jdGlvbnMuaHRtbCNtaXgtaW5zdGFuY2VfbWV0aG9kXG5cblxuICB2YXIgYWxwaGFEZWx0YSA9IGNvbG9yMS5hbHBoYSAtIGNvbG9yMi5hbHBoYTtcbiAgdmFyIHggPSBwYXJzZUZsb2F0KHdlaWdodCkgKiAyIC0gMTtcbiAgdmFyIHkgPSB4ICogYWxwaGFEZWx0YSA9PT0gLTEgPyB4IDogeCArIGFscGhhRGVsdGE7XG4gIHZhciB6ID0gMSArIHggKiBhbHBoYURlbHRhO1xuICB2YXIgd2VpZ2h0MSA9ICh5IC8geiArIDEpIC8gMi4wO1xuICB2YXIgd2VpZ2h0MiA9IDEgLSB3ZWlnaHQxO1xuICB2YXIgbWl4ZWRDb2xvciA9IHtcbiAgICByZWQ6IE1hdGguZmxvb3IoY29sb3IxLnJlZCAqIHdlaWdodDEgKyBjb2xvcjIucmVkICogd2VpZ2h0MiksXG4gICAgZ3JlZW46IE1hdGguZmxvb3IoY29sb3IxLmdyZWVuICogd2VpZ2h0MSArIGNvbG9yMi5ncmVlbiAqIHdlaWdodDIpLFxuICAgIGJsdWU6IE1hdGguZmxvb3IoY29sb3IxLmJsdWUgKiB3ZWlnaHQxICsgY29sb3IyLmJsdWUgKiB3ZWlnaHQyKSxcbiAgICBhbHBoYTogY29sb3IxLmFscGhhICogcGFyc2VGbG9hdCh3ZWlnaHQpICsgY29sb3IyLmFscGhhICogKDEgLSBwYXJzZUZsb2F0KHdlaWdodCkpXG4gIH07XG4gIHJldHVybiByZ2JhKG1peGVkQ29sb3IpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZE1peCA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKG1peCk7XG52YXIgbWl4JDEgPSBjdXJyaWVkTWl4O1xuXG4vKipcbiAqIEluY3JlYXNlcyB0aGUgb3BhY2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgZm9yIHRoZSBhbW91bnQgaXMgYmV0d2VlbiAwIHRvIDEuXG4gKlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IG9wYWNpZnkoMC4xLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpJyk7XG4gKiAgIGJhY2tncm91bmQ6IG9wYWNpZnkoMC4yLCAnaHNsYSgwLCAwJSwgMTAwJSwgMC41KScpLFxuICogICBiYWNrZ3JvdW5kOiBvcGFjaWZ5KCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuMiknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtvcGFjaWZ5KDAuMSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScpfTtcbiAqICAgYmFja2dyb3VuZDogJHtvcGFjaWZ5KDAuMiwgJ2hzbGEoMCwgMCUsIDEwMCUsIDAuNSknKX0sXG4gKiAgIGJhY2tncm91bmQ6ICR7b3BhY2lmeSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjIpJyl9LFxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMCwwLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBvcGFjaWZ5KGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBwYXJzZWRDb2xvciA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuICB2YXIgYWxwaGEgPSB0eXBlb2YgcGFyc2VkQ29sb3IuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IuYWxwaGEgOiAxO1xuXG4gIHZhciBjb2xvcldpdGhBbHBoYSA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvciwge1xuICAgIGFscGhhOiBndWFyZCgwLCAxLCAoYWxwaGEgKiAxMDAgKyBwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDApIC8gMTAwKVxuICB9KTtcblxuICByZXR1cm4gcmdiYShjb2xvcldpdGhBbHBoYSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkT3BhY2lmeSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihvcGFjaWZ5KTtcbnZhciBjdXJyaWVkT3BhY2lmeSQxID0gY3VycmllZE9wYWNpZnk7XG5cbnZhciBkZWZhdWx0UmV0dXJuSWZMaWdodENvbG9yID0gJyMwMDAnO1xudmFyIGRlZmF1bHRSZXR1cm5JZkRhcmtDb2xvciA9ICcjZmZmJztcbi8qKlxuICogUmV0dXJucyBibGFjayBvciB3aGl0ZSAob3Igb3B0aW9uYWwgcGFzc2VkIGNvbG9ycykgZm9yIGJlc3RcbiAqIGNvbnRyYXN0IGRlcGVuZGluZyBvbiB0aGUgbHVtaW5vc2l0eSBvZiB0aGUgZ2l2ZW4gY29sb3IuXG4gKiBXaGVuIHBhc3NpbmcgY3VzdG9tIHJldHVybiBjb2xvcnMsIHN0cmljdCBtb2RlIGVuc3VyZXMgdGhhdCB0aGVcbiAqIHJldHVybiBjb2xvciBhbHdheXMgbWVldHMgb3IgZXhjZWVkcyBXQ0FHIGxldmVsIEFBIG9yIGdyZWF0ZXIuIElmIHRoaXMgdGVzdFxuICogZmFpbHMsIHRoZSBkZWZhdWx0IHJldHVybiBjb2xvciAoYmxhY2sgb3Igd2hpdGUpIGlzIHJldHVybmVkIGluIHBsYWNlIG9mIHRoZVxuICogY3VzdG9tIHJldHVybiBjb2xvci4gWW91IGNhbiBvcHRpb25hbGx5IHR1cm4gb2ZmIHN0cmljdCBtb2RlLlxuICpcbiAqIEZvbGxvd3MgW1czQyBzcGVjcyBmb3IgcmVhZGFiaWxpdHldKGh0dHBzOi8vd3d3LnczLm9yZy9UUi9XQ0FHMjAtVEVDSFMvRzE4Lmh0bWwpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGNvbG9yOiByZWFkYWJsZUNvbG9yKCcjMDAwJyksXG4gKiAgIGNvbG9yOiByZWFkYWJsZUNvbG9yKCdibGFjaycsICcjMDAxJywgJyNmZjgnKSxcbiAqICAgY29sb3I6IHJlYWRhYmxlQ29sb3IoJ3doaXRlJywgJyMwMDEnLCAnI2ZmOCcpLFxuICogICBjb2xvcjogcmVhZGFibGVDb2xvcigncmVkJywgJyMzMzMnLCAnI2RkZCcsIHRydWUpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGNvbG9yOiAke3JlYWRhYmxlQ29sb3IoJyMwMDAnKX07XG4gKiAgIGNvbG9yOiAke3JlYWRhYmxlQ29sb3IoJ2JsYWNrJywgJyMwMDEnLCAnI2ZmOCcpfTtcbiAqICAgY29sb3I6ICR7cmVhZGFibGVDb2xvcignd2hpdGUnLCAnIzAwMScsICcjZmY4Jyl9O1xuICogICBjb2xvcjogJHtyZWFkYWJsZUNvbG9yKCdyZWQnLCAnIzMzMycsICcjZGRkJywgdHJ1ZSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBjb2xvcjogXCIjZmZmXCI7XG4gKiAgIGNvbG9yOiBcIiNmZjhcIjtcbiAqICAgY29sb3I6IFwiIzAwMVwiO1xuICogICBjb2xvcjogXCIjMDAwXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gcmVhZGFibGVDb2xvcihjb2xvciwgcmV0dXJuSWZMaWdodENvbG9yLCByZXR1cm5JZkRhcmtDb2xvciwgc3RyaWN0KSB7XG4gIGlmIChyZXR1cm5JZkxpZ2h0Q29sb3IgPT09IHZvaWQgMCkge1xuICAgIHJldHVybklmTGlnaHRDb2xvciA9IGRlZmF1bHRSZXR1cm5JZkxpZ2h0Q29sb3I7XG4gIH1cblxuICBpZiAocmV0dXJuSWZEYXJrQ29sb3IgPT09IHZvaWQgMCkge1xuICAgIHJldHVybklmRGFya0NvbG9yID0gZGVmYXVsdFJldHVybklmRGFya0NvbG9yO1xuICB9XG5cbiAgaWYgKHN0cmljdCA9PT0gdm9pZCAwKSB7XG4gICAgc3RyaWN0ID0gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpc0NvbG9yTGlnaHQgPSBnZXRMdW1pbmFuY2UoY29sb3IpID4gMC4xNzk7XG4gIHZhciBwcmVmZXJyZWRSZXR1cm5Db2xvciA9IGlzQ29sb3JMaWdodCA/IHJldHVybklmTGlnaHRDb2xvciA6IHJldHVybklmRGFya0NvbG9yO1xuXG4gIGlmICghc3RyaWN0IHx8IGdldENvbnRyYXN0KGNvbG9yLCBwcmVmZXJyZWRSZXR1cm5Db2xvcikgPj0gNC41KSB7XG4gICAgcmV0dXJuIHByZWZlcnJlZFJldHVybkNvbG9yO1xuICB9XG5cbiAgcmV0dXJuIGlzQ29sb3JMaWdodCA/IGRlZmF1bHRSZXR1cm5JZkxpZ2h0Q29sb3IgOiBkZWZhdWx0UmV0dXJuSWZEYXJrQ29sb3I7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0IHRvIGEgY29sb3Igc3RyaW5nLlxuICogVGhpcyB1dGlsIGlzIHVzZWZ1bCBpbiBjYXNlIHlvdSBvbmx5IGtub3cgb24gcnVudGltZSB3aGljaCBjb2xvciBvYmplY3QgaXNcbiAqIHVzZWQuIE90aGVyd2lzZSB3ZSByZWNvbW1lbmQgdG8gcmVseSBvbiBgcmdiYCBvciBgcmdiYWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiVG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYlRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JUb0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiVG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcyKVwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2JUb0NvbG9yU3RyaW5nKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiByZ2JhKHtcbiAgICAgICAgcmVkOiBjb2xvci5yZWQsXG4gICAgICAgIGdyZWVuOiBjb2xvci5ncmVlbixcbiAgICAgICAgYmx1ZTogY29sb3IuYmx1ZSxcbiAgICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmdiKHtcbiAgICAgIHJlZDogY29sb3IucmVkLFxuICAgICAgZ3JlZW46IGNvbG9yLmdyZWVuLFxuICAgICAgYmx1ZTogY29sb3IuYmx1ZVxuICAgIH0pO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDYpO1xufVxuXG4vKipcbiAqIEluY3JlYXNlcyB0aGUgaW50ZW5zaXR5IG9mIGEgY29sb3IuIEl0cyByYW5nZSBpcyBiZXR3ZWVuIDAgdG8gMS4gVGhlIGZpcnN0XG4gKiBhcmd1bWVudCBvZiB0aGUgc2F0dXJhdGUgZnVuY3Rpb24gaXMgdGhlIGFtb3VudCBieSBob3cgbXVjaCB0aGUgY29sb3JcbiAqIGludGVuc2l0eSBzaG91bGQgYmUgaW5jcmVhc2VkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNhdHVyYXRlKDAuMiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogc2F0dXJhdGUoJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzYXR1cmF0ZSgwLjIsICcjRkZDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3NhdHVyYXRlKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZTBlMjUwXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyMjQsMjI2LDgwLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzYXR1cmF0ZShhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgc2F0dXJhdGlvbjogZ3VhcmQoMCwgMSwgaHNsQ29sb3Iuc2F0dXJhdGlvbiArIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNhdHVyYXRlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNhdHVyYXRlKTtcbnZhciBjdXJyaWVkU2F0dXJhdGUkMSA9IGN1cnJpZWRTYXR1cmF0ZTtcblxuLyoqXG4gKiBTZXRzIHRoZSBodWUgb2YgYSBjb2xvciB0byB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoZSBodWUgcmFuZ2UgY2FuIGJlXG4gKiBmcm9tIDAgYW5kIDM1OS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBzZXRIdWUoNDIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IHNldEh1ZSgnMjQ0JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NldEh1ZSg0MiwgJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0SHVlKCcyNDQnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNjZGFlNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDEwNywxMDAsMjA1LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzZXRIdWUoaHVlLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHBhcnNlVG9Ic2woY29sb3IpLCB7XG4gICAgaHVlOiBwYXJzZUZsb2F0KGh1ZSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNldEh1ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihzZXRIdWUpO1xudmFyIGN1cnJpZWRTZXRIdWUkMSA9IGN1cnJpZWRTZXRIdWU7XG5cbi8qKlxuICogU2V0cyB0aGUgbGlnaHRuZXNzIG9mIGEgY29sb3IgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGUgbGlnaHRuZXNzIHJhbmdlIGNhbiBiZVxuICogZnJvbSAwIGFuZCAxLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNldExpZ2h0bmVzcygwLjIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IHNldExpZ2h0bmVzcygnMC43NScsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzZXRMaWdodG5lc3MoMC4yLCAnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtzZXRMaWdodG5lc3MoJzAuNzUnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM0ZDRkMTlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyMywyMjQsMTU5LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzZXRMaWdodG5lc3MobGlnaHRuZXNzLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHBhcnNlVG9Ic2woY29sb3IpLCB7XG4gICAgbGlnaHRuZXNzOiBwYXJzZUZsb2F0KGxpZ2h0bmVzcylcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNldExpZ2h0bmVzcyA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihzZXRMaWdodG5lc3MpO1xudmFyIGN1cnJpZWRTZXRMaWdodG5lc3MkMSA9IGN1cnJpZWRTZXRMaWdodG5lc3M7XG5cbi8qKlxuICogU2V0cyB0aGUgc2F0dXJhdGlvbiBvZiBhIGNvbG9yIHRvIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhlIHNhdHVyYXRpb24gcmFuZ2UgY2FuIGJlXG4gKiBmcm9tIDAgYW5kIDEuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogc2V0U2F0dXJhdGlvbigwLjIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IHNldFNhdHVyYXRpb24oJzAuNzUnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0U2F0dXJhdGlvbigwLjIsICcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3NldFNhdHVyYXRpb24oJzAuNzUnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNhZGFkODRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyOCwyMjksNzYsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHNldFNhdHVyYXRpb24oc2F0dXJhdGlvbiwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBwYXJzZVRvSHNsKGNvbG9yKSwge1xuICAgIHNhdHVyYXRpb246IHBhcnNlRmxvYXQoc2F0dXJhdGlvbilcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNldFNhdHVyYXRpb24gPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oc2V0U2F0dXJhdGlvbik7XG52YXIgY3VycmllZFNldFNhdHVyYXRpb24kMSA9IGN1cnJpZWRTZXRTYXR1cmF0aW9uO1xuXG4vKipcbiAqIFNoYWRlcyBhIGNvbG9yIGJ5IG1peGluZyBpdCB3aXRoIGJsYWNrLiBgc2hhZGVgIGNhbiBwcm9kdWNlXG4gKiBodWUgc2hpZnRzLCB3aGVyZSBhcyBgZGFya2VuYCBtYW5pcHVsYXRlcyB0aGUgbHVtaW5hbmNlIGNoYW5uZWwgYW5kIHRoZXJlZm9yZVxuICogZG9lc24ndCBwcm9kdWNlIGh1ZSBzaGlmdHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogc2hhZGUoMC4yNSwgJyMwMGYnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NoYWRlKDAuMjUsICcjMDBmJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjMDAwMDNmXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc2hhZGUocGVyY2VudGFnZSwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiBtaXgkMShwYXJzZUZsb2F0KHBlcmNlbnRhZ2UpLCAncmdiKDAsIDAsIDApJywgY29sb3IpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFNoYWRlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNoYWRlKTtcbnZhciBjdXJyaWVkU2hhZGUkMSA9IGN1cnJpZWRTaGFkZTtcblxuLyoqXG4gKiBUaW50cyBhIGNvbG9yIGJ5IG1peGluZyBpdCB3aXRoIHdoaXRlLiBgdGludGAgY2FuIHByb2R1Y2VcbiAqIGh1ZSBzaGlmdHMsIHdoZXJlIGFzIGBsaWdodGVuYCBtYW5pcHVsYXRlcyB0aGUgbHVtaW5hbmNlIGNoYW5uZWwgYW5kIHRoZXJlZm9yZVxuICogZG9lc24ndCBwcm9kdWNlIGh1ZSBzaGlmdHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdGludCgwLjI1LCAnIzAwZicpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dGludCgwLjI1LCAnIzAwZicpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2JmYmZmZlwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHRpbnQocGVyY2VudGFnZSwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiBtaXgkMShwYXJzZUZsb2F0KHBlcmNlbnRhZ2UpLCAncmdiKDI1NSwgMjU1LCAyNTUpJywgY29sb3IpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFRpbnQgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4odGludCk7XG52YXIgY3VycmllZFRpbnQkMSA9IGN1cnJpZWRUaW50O1xuXG4vKipcbiAqIERlY3JlYXNlcyB0aGUgb3BhY2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgZm9yIHRoZSBhbW91bnQgaXMgYmV0d2VlbiAwIHRvIDEuXG4gKlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKSxcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpLFxuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC45KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC44KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDAsMCwwLjMpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gdHJhbnNwYXJlbnRpemUoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIHBhcnNlZENvbG9yID0gcGFyc2VUb1JnYihjb2xvcik7XG4gIHZhciBhbHBoYSA9IHR5cGVvZiBwYXJzZWRDb2xvci5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvci5hbHBoYSA6IDE7XG5cbiAgdmFyIGNvbG9yV2l0aEFscGhhID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yLCB7XG4gICAgYWxwaGE6IGd1YXJkKDAsIDEsICsoYWxwaGEgKiAxMDAgLSBwYXJzZUZsb2F0KGFtb3VudCkgKiAxMDApLnRvRml4ZWQoMikgLyAxMDApXG4gIH0pO1xuXG4gIHJldHVybiByZ2JhKGNvbG9yV2l0aEFscGhhKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRUcmFuc3BhcmVudGl6ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbih0cmFuc3BhcmVudGl6ZSk7XG52YXIgY3VycmllZFRyYW5zcGFyZW50aXplJDEgPSBjdXJyaWVkVHJhbnNwYXJlbnRpemU7XG5cbi8qKlxuICogU2hvcnRoYW5kIGZvciBlYXNpbHkgc2V0dGluZyB0aGUgYW5pbWF0aW9uIHByb3BlcnR5LiBBbGxvd3MgZWl0aGVyIG11bHRpcGxlIGFycmF5cyB3aXRoIGFuaW1hdGlvbnNcbiAqIG9yIGEgc2luZ2xlIGFuaW1hdGlvbiBzcHJlYWQgb3ZlciB0aGUgYXJndW1lbnRzLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYW5pbWF0aW9uKFsncm90YXRlJywgJzFzJywgJ2Vhc2UtaW4tb3V0J10sIFsnY29sb3JjaGFuZ2UnLCAnMnMnXSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHthbmltYXRpb24oWydyb3RhdGUnLCAnMXMnLCAnZWFzZS1pbi1vdXQnXSwgWydjb2xvcmNoYW5nZScsICcycyddKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2FuaW1hdGlvbic6ICdyb3RhdGUgMXMgZWFzZS1pbi1vdXQsIGNvbG9yY2hhbmdlIDJzJ1xuICogfVxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYW5pbWF0aW9uKCdyb3RhdGUnLCAnMXMnLCAnZWFzZS1pbi1vdXQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2FuaW1hdGlvbigncm90YXRlJywgJzFzJywgJ2Vhc2UtaW4tb3V0Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdhbmltYXRpb24nOiAncm90YXRlIDFzIGVhc2UtaW4tb3V0J1xuICogfVxuICovXG5mdW5jdGlvbiBhbmltYXRpb24oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyBBbGxvdyBzaW5nbGUgb3IgbXVsdGlwbGUgYW5pbWF0aW9ucyBwYXNzZWRcbiAgdmFyIG11bHRpTW9kZSA9IEFycmF5LmlzQXJyYXkoYXJnc1swXSk7XG5cbiAgaWYgKCFtdWx0aU1vZGUgJiYgYXJncy5sZW5ndGggPiA4KSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjQpO1xuICB9XG5cbiAgdmFyIGNvZGUgPSBhcmdzLm1hcChmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKG11bHRpTW9kZSAmJiAhQXJyYXkuaXNBcnJheShhcmcpIHx8ICFtdWx0aU1vZGUgJiYgQXJyYXkuaXNBcnJheShhcmcpKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2NSk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoID4gOCkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjYpO1xuICAgIH1cblxuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGFyZykgPyBhcmcuam9pbignICcpIDogYXJnO1xuICB9KS5qb2luKCcsICcpO1xuICByZXR1cm4ge1xuICAgIGFuaW1hdGlvbjogY29kZVxuICB9O1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgYW55IG51bWJlciBvZiBiYWNrZ3JvdW5kSW1hZ2UgdmFsdWVzIGFzIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgc2luZ2xlIGJhY2tncm91bmQgc3RhdGVtZW50LlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYmFja2dyb3VuZEltYWdlcygndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpJywgJ2xpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKScpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7YmFja2dyb3VuZEltYWdlcygndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpJywgJ2xpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKScpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYmFja2dyb3VuZEltYWdlJzogJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKSwgbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pJ1xuICogfVxuICovXG5mdW5jdGlvbiBiYWNrZ3JvdW5kSW1hZ2VzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcGVydGllcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwcm9wZXJ0aWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHByb3BlcnRpZXMuam9pbignLCAnKVxuICB9O1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgYW55IG51bWJlciBvZiBiYWNrZ3JvdW5kIHZhbHVlcyBhcyBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIHNpbmdsZSBiYWNrZ3JvdW5kIHN0YXRlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJhY2tncm91bmRzKCd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiknLCAnbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pJywgJ2NlbnRlciBuby1yZXBlYXQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JhY2tncm91bmRzKCd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiknLCAnbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pJywgJ2NlbnRlciBuby1yZXBlYXQnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JhY2tncm91bmQnOiAndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpLCBsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiksIGNlbnRlciBuby1yZXBlYXQnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJhY2tncm91bmRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcGVydGllcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwcm9wZXJ0aWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBiYWNrZ3JvdW5kOiBwcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgfTtcbn1cblxudmFyIHNpZGVNYXAgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIHRoZSBib3JkZXIgcHJvcGVydHkgdGhhdCBzcGxpdHMgb3V0IGluZGl2aWR1YWwgcHJvcGVydGllcyBmb3IgdXNlIHdpdGggdG9vbHMgbGlrZSBGZWxhIGFuZCBTdHlsZXRyb24uIEEgc2lkZSBrZXl3b3JkIGNhbiBvcHRpb25hbGx5IGJlIHBhc3NlZCB0byB0YXJnZXQgb25seSBvbmUgc2lkZSdzIGJvcmRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlcignMXB4JywgJ3NvbGlkJywgJ3JlZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyKCcxcHgnLCAnc29saWQnLCAncmVkJyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJDb2xvcic6ICdyZWQnLFxuICogICAnYm9yZGVyU3R5bGUnOiAnc29saWQnLFxuICogICAnYm9yZGVyV2lkdGgnOiBgMXB4YCxcbiAqIH1cbiAqXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlcigndG9wJywgJzFweCcsICdzb2xpZCcsICdyZWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlcigndG9wJywgJzFweCcsICdzb2xpZCcsICdyZWQnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JvcmRlclRvcENvbG9yJzogJ3JlZCcsXG4gKiAgICdib3JkZXJUb3BTdHlsZSc6ICdzb2xpZCcsXG4gKiAgICdib3JkZXJUb3BXaWR0aCc6IGAxcHhgLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIGJvcmRlcihzaWRlS2V5d29yZCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzaWRlS2V5d29yZCA9PT0gJ3N0cmluZycgJiYgc2lkZU1hcC5pbmRleE9mKHNpZGVLZXl3b3JkKSA+PSAwKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW1wiYm9yZGVyXCIgKyBjYXBpdGFsaXplU3RyaW5nKHNpZGVLZXl3b3JkKSArIFwiV2lkdGhcIl0gPSB2YWx1ZXNbMF0sIF9yZWZbXCJib3JkZXJcIiArIGNhcGl0YWxpemVTdHJpbmcoc2lkZUtleXdvcmQpICsgXCJTdHlsZVwiXSA9IHZhbHVlc1sxXSwgX3JlZltcImJvcmRlclwiICsgY2FwaXRhbGl6ZVN0cmluZyhzaWRlS2V5d29yZCkgKyBcIkNvbG9yXCJdID0gdmFsdWVzWzJdLCBfcmVmO1xuICB9IGVsc2Uge1xuICAgIHZhbHVlcy51bnNoaWZ0KHNpZGVLZXl3b3JkKTtcbiAgICByZXR1cm4ge1xuICAgICAgYm9yZGVyV2lkdGg6IHZhbHVlc1swXSxcbiAgICAgIGJvcmRlclN0eWxlOiB2YWx1ZXNbMV0sXG4gICAgICBib3JkZXJDb2xvcjogdmFsdWVzWzJdXG4gICAgfTtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXJDb2xvcigncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAneWVsbG93JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXJDb2xvcigncmVkJywgJ2dyZWVuJywgJ2JsdWUnLCAneWVsbG93Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BDb2xvcic6ICdyZWQnLFxuICogICAnYm9yZGVyUmlnaHRDb2xvcic6ICdncmVlbicsXG4gKiAgICdib3JkZXJCb3R0b21Db2xvcic6ICdibHVlJyxcbiAqICAgJ2JvcmRlckxlZnRDb2xvcic6ICd5ZWxsb3cnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJvcmRlckNvbG9yKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWydib3JkZXJDb2xvciddLmNvbmNhdCh2YWx1ZXMpKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIGEgdmFsdWUgZm9yIHNpZGUgYW5kIGEgdmFsdWUgZm9yIHJhZGl1cyBhbmQgYXBwbGllcyB0aGUgcmFkaXVzIHZhbHVlIHRvIGJvdGggY29ybmVycyBvZiB0aGUgc2lkZS5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlclJhZGl1cygndG9wJywgJzVweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyUmFkaXVzKCd0b3AnLCAnNXB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BSaWdodFJhZGl1cyc6ICc1cHgnLFxuICogICAnYm9yZGVyVG9wTGVmdFJhZGl1cyc6ICc1cHgnLFxuICogfVxuICovXG5mdW5jdGlvbiBib3JkZXJSYWRpdXMoc2lkZSwgcmFkaXVzKSB7XG4gIHZhciB1cHBlcmNhc2VTaWRlID0gY2FwaXRhbGl6ZVN0cmluZyhzaWRlKTtcblxuICBpZiAoIXJhZGl1cyAmJiByYWRpdXMgIT09IDApIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2Mik7XG4gIH1cblxuICBpZiAodXBwZXJjYXNlU2lkZSA9PT0gJ1RvcCcgfHwgdXBwZXJjYXNlU2lkZSA9PT0gJ0JvdHRvbScpIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbXCJib3JkZXJcIiArIHVwcGVyY2FzZVNpZGUgKyBcIlJpZ2h0UmFkaXVzXCJdID0gcmFkaXVzLCBfcmVmW1wiYm9yZGVyXCIgKyB1cHBlcmNhc2VTaWRlICsgXCJMZWZ0UmFkaXVzXCJdID0gcmFkaXVzLCBfcmVmO1xuICB9XG5cbiAgaWYgKHVwcGVyY2FzZVNpZGUgPT09ICdMZWZ0JyB8fCB1cHBlcmNhc2VTaWRlID09PSAnUmlnaHQnKSB7XG4gICAgdmFyIF9yZWYyO1xuXG4gICAgcmV0dXJuIF9yZWYyID0ge30sIF9yZWYyW1wiYm9yZGVyVG9wXCIgKyB1cHBlcmNhc2VTaWRlICsgXCJSYWRpdXNcIl0gPSByYWRpdXMsIF9yZWYyW1wiYm9yZGVyQm90dG9tXCIgKyB1cHBlcmNhc2VTaWRlICsgXCJSYWRpdXNcIl0gPSByYWRpdXMsIF9yZWYyO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjMpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXJTdHlsZSgnc29saWQnLCAnZGFzaGVkJywgJ2RvdHRlZCcsICdkb3VibGUnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlclN0eWxlKCdzb2xpZCcsICdkYXNoZWQnLCAnZG90dGVkJywgJ2RvdWJsZScpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wU3R5bGUnOiAnc29saWQnLFxuICogICAnYm9yZGVyUmlnaHRTdHlsZSc6ICdkYXNoZWQnLFxuICogICAnYm9yZGVyQm90dG9tU3R5bGUnOiAnZG90dGVkJyxcbiAqICAgJ2JvcmRlckxlZnRTdHlsZSc6ICdkb3VibGUnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJvcmRlclN0eWxlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWydib3JkZXJTdHlsZSddLmNvbmNhdCh2YWx1ZXMpKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIHVwIHRvIGZvdXIgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyV2lkdGgoJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlcldpZHRoKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BXaWR0aCc6ICcxMnB4JyxcbiAqICAgJ2JvcmRlclJpZ2h0V2lkdGgnOiAnMjRweCcsXG4gKiAgICdib3JkZXJCb3R0b21XaWR0aCc6ICczNnB4JyxcbiAqICAgJ2JvcmRlckxlZnRXaWR0aCc6ICc0OHB4J1xuICogfVxuICovXG5mdW5jdGlvbiBib3JkZXJXaWR0aCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnYm9yZGVyV2lkdGgnXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU2VsZWN0b3JzKHRlbXBsYXRlLCBzdGF0ZSkge1xuICB2YXIgc3RhdGVTdWZmaXggPSBzdGF0ZSA/IFwiOlwiICsgc3RhdGUgOiAnJztcbiAgcmV0dXJuIHRlbXBsYXRlKHN0YXRlU3VmZml4KTtcbn1cbi8qKlxuICogRnVuY3Rpb24gaGVscGVyIHRoYXQgYWRkcyBhbiBhcnJheSBvZiBzdGF0ZXMgdG8gYSB0ZW1wbGF0ZSBvZiBzZWxlY3RvcnMuIFVzZWQgaW4gdGV4dElucHV0cyBhbmQgYnV0dG9ucy5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBzdGF0ZWZ1bFNlbGVjdG9ycyhzdGF0ZXMsIHRlbXBsYXRlLCBzdGF0ZU1hcCkge1xuICBpZiAoIXRlbXBsYXRlKSB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2Nyk7XG4gIGlmIChzdGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gZ2VuZXJhdGVTZWxlY3RvcnModGVtcGxhdGUsIG51bGwpO1xuICB2YXIgc2VsZWN0b3JzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc3RhdGVNYXAgJiYgc3RhdGVNYXAuaW5kZXhPZihzdGF0ZXNbaV0pIDwgMCkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjgpO1xuICAgIH1cblxuICAgIHNlbGVjdG9ycy5wdXNoKGdlbmVyYXRlU2VsZWN0b3JzKHRlbXBsYXRlLCBzdGF0ZXNbaV0pKTtcbiAgfVxuXG4gIHNlbGVjdG9ycyA9IHNlbGVjdG9ycy5qb2luKCcsJyk7XG4gIHJldHVybiBzZWxlY3RvcnM7XG59XG5cbnZhciBzdGF0ZU1hcCQxID0gW3VuZGVmaW5lZCwgbnVsbCwgJ2FjdGl2ZScsICdmb2N1cycsICdob3ZlciddO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZSQxKHN0YXRlKSB7XG4gIHJldHVybiBcImJ1dHRvblwiICsgc3RhdGUgKyBcIixcXG4gIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdXCIgKyBzdGF0ZTtcbn1cbi8qKlxuICogUG9wdWxhdGVzIHNlbGVjdG9ycyB0aGF0IHRhcmdldCBhbGwgYnV0dG9ucy4gWW91IGNhbiBwYXNzIG9wdGlvbmFsIHN0YXRlcyB0byBhcHBlbmQgdG8gdGhlIHNlbGVjdG9ycy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIFtidXR0b25zKCdhY3RpdmUnKV06IHtcbiAqICAgICAnYm9yZGVyJzogJ25vbmUnXG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgPiAke2J1dHRvbnMoJ2FjdGl2ZScpfSB7XG4gKiAgICAgYm9yZGVyOiBub25lO1xuICogICB9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqICAnYnV0dG9uOmFjdGl2ZSxcbiAqICAnaW5wdXRbdHlwZT1cImJ1dHRvblwiXTphY3RpdmUsXG4gKiAgJ2lucHV0W3R5cGU9XFxcInJlc2V0XFxcIl06YWN0aXZlLFxuICogICdpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXTphY3RpdmU6IHtcbiAqICAgJ2JvcmRlcic6ICdub25lJ1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gYnV0dG9ucygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0YXRlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdGF0ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc3RhdGVmdWxTZWxlY3RvcnMoc3RhdGVzLCB0ZW1wbGF0ZSQxLCBzdGF0ZU1hcCQxKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIHVwIHRvIGZvdXIgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ubWFyZ2luKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHttYXJnaW4oJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ21hcmdpblRvcCc6ICcxMnB4JyxcbiAqICAgJ21hcmdpblJpZ2h0JzogJzI0cHgnLFxuICogICAnbWFyZ2luQm90dG9tJzogJzM2cHgnLFxuICogICAnbWFyZ2luTGVmdCc6ICc0OHB4J1xuICogfVxuICovXG5mdW5jdGlvbiBtYXJnaW4oKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJ21hcmdpbiddLmNvbmNhdCh2YWx1ZXMpKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIHVwIHRvIGZvdXIgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ucGFkZGluZygnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7cGFkZGluZygnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAncGFkZGluZ1RvcCc6ICcxMnB4JyxcbiAqICAgJ3BhZGRpbmdSaWdodCc6ICcyNHB4JyxcbiAqICAgJ3BhZGRpbmdCb3R0b20nOiAnMzZweCcsXG4gKiAgICdwYWRkaW5nTGVmdCc6ICc0OHB4J1xuICogfVxuICovXG5mdW5jdGlvbiBwYWRkaW5nKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWydwYWRkaW5nJ10uY29uY2F0KHZhbHVlcykpO1xufVxuXG52YXIgcG9zaXRpb25NYXAgPSBbJ2Fic29sdXRlJywgJ2ZpeGVkJywgJ3JlbGF0aXZlJywgJ3N0YXRpYycsICdzdGlja3knXTtcbi8qKlxuICogU2hvcnRoYW5kIGFjY2VwdHMgdXAgdG8gZml2ZSB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuIFRoZSBmaXJzdCB2YWx1ZSBjYW4gb3B0aW9uYWxseSBiZSBhIHBvc2l0aW9uIGtleXdvcmQuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5wb3NpdGlvbignMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7cG9zaXRpb24oJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3RvcCc6ICcxMnB4JyxcbiAqICAgJ3JpZ2h0JzogJzI0cHgnLFxuICogICAnYm90dG9tJzogJzM2cHgnLFxuICogICAnbGVmdCc6ICc0OHB4J1xuICogfVxuICpcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ucG9zaXRpb24oJ2Fic29sdXRlJywgJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3Bvc2l0aW9uKCdhYnNvbHV0ZScsICcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gKiAgICd0b3AnOiAnMTJweCcsXG4gKiAgICdyaWdodCc6ICcyNHB4JyxcbiAqICAgJ2JvdHRvbSc6ICczNnB4JyxcbiAqICAgJ2xlZnQnOiAnNDhweCdcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBwb3NpdGlvbihmaXJzdFZhbHVlKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAocG9zaXRpb25NYXAuaW5kZXhPZihmaXJzdFZhbHVlKSA+PSAwICYmIGZpcnN0VmFsdWUpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJyddLmNvbmNhdCh2YWx1ZXMpKSwge1xuICAgICAgcG9zaXRpb246IGZpcnN0VmFsdWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnJywgZmlyc3RWYWx1ZV0uY29uY2F0KHZhbHVlcykpO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRvIHNldCB0aGUgaGVpZ2h0IGFuZCB3aWR0aCBwcm9wZXJ0aWVzIGluIGEgc2luZ2xlIHN0YXRlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnNpemUoJzMwMHB4JywgJzI1MHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtzaXplKCczMDBweCcsICcyNTBweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnaGVpZ2h0JzogJzMwMHB4JyxcbiAqICAgJ3dpZHRoJzogJzI1MHB4JyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gc2l6ZShoZWlnaHQsIHdpZHRoKSB7XG4gIGlmICh3aWR0aCA9PT0gdm9pZCAwKSB7XG4gICAgd2lkdGggPSBoZWlnaHQ7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogaGVpZ2h0LFxuICAgIHdpZHRoOiB3aWR0aFxuICB9O1xufVxuXG52YXIgc3RhdGVNYXAgPSBbdW5kZWZpbmVkLCBudWxsLCAnYWN0aXZlJywgJ2ZvY3VzJywgJ2hvdmVyJ107XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKHN0YXRlKSB7XG4gIHJldHVybiBcImlucHV0W3R5cGU9XFxcImNvbG9yXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcImRhdGVcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWVcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwibW9udGhcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInBhc3N3b3JkXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInNlYXJjaFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ0aW1lXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInVybFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ3ZWVrXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0Om5vdChbdHlwZV0pXCIgKyBzdGF0ZSArIFwiLFxcbiAgICB0ZXh0YXJlYVwiICsgc3RhdGU7XG59XG4vKipcbiAqIFBvcHVsYXRlcyBzZWxlY3RvcnMgdGhhdCB0YXJnZXQgYWxsIHRleHQgaW5wdXRzLiBZb3UgY2FuIHBhc3Mgb3B0aW9uYWwgc3RhdGVzIHRvIGFwcGVuZCB0byB0aGUgc2VsZWN0b3JzLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgW3RleHRJbnB1dHMoJ2FjdGl2ZScpXToge1xuICogICAgICdib3JkZXInOiAnbm9uZSdcbiAqICAgfVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICA+ICR7dGV4dElucHV0cygnYWN0aXZlJyl9IHtcbiAqICAgICBib3JkZXI6IG5vbmU7XG4gKiAgIH1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogICdpbnB1dFt0eXBlPVwiY29sb3JcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJkYXRlXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWVcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cImVtYWlsXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwibW9udGhcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJudW1iZXJcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJwYXNzd29yZFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInNlYXJjaFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInRlbFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInRleHRcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJ0aW1lXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwidXJsXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwid2Vla1wiXTphY3RpdmUsXG4gKiAgaW5wdXQ6bm90KFt0eXBlXSk6YWN0aXZlLFxuICogIHRleHRhcmVhOmFjdGl2ZSc6IHtcbiAqICAgJ2JvcmRlcic6ICdub25lJ1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gdGV4dElucHV0cygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHN0YXRlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdGF0ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gc3RhdGVmdWxTZWxlY3RvcnMoc3RhdGVzLCB0ZW1wbGF0ZSwgc3RhdGVNYXApO1xufVxuXG4vKipcbiAqIEFjY2VwdHMgYW55IG51bWJlciBvZiB0cmFuc2l0aW9uIHZhbHVlcyBhcyBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIHNpbmdsZSB0cmFuc2l0aW9uIHN0YXRlbWVudC4gWW91IG1heSBhbHNvIHBhc3MgYW4gYXJyYXkgb2YgcHJvcGVydGllcyBhcyB0aGUgZmlyc3QgcGFyYW1ldGVyIHRoYXQgeW91IHdvdWxkIGxpa2UgdG8gYXBwbHkgdGhlIHNhbWUgdHJhbnNpdGlvbiB2YWx1ZXMgdG8gKHNlY29uZCBwYXJhbWV0ZXIpLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4udHJhbnNpdGlvbnMoJ29wYWNpdHkgMS4wcyBlYXNlLWluIDBzJywgJ3dpZHRoIDIuMHMgZWFzZS1pbiAycycpLFxuICogICAuLi50cmFuc2l0aW9ucyhbJ2NvbG9yJywgJ2JhY2tncm91bmQtY29sb3InXSwgJzIuMHMgZWFzZS1pbiAycycpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7dHJhbnNpdGlvbnMoJ29wYWNpdHkgMS4wcyBlYXNlLWluIDBzJywgJ3dpZHRoIDIuMHMgZWFzZS1pbiAycycpfTtcbiAqICAgJHt0cmFuc2l0aW9ucyhbJ2NvbG9yJywgJ2JhY2tncm91bmQtY29sb3InXSwgJzIuMHMgZWFzZS1pbiAycycpLH07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICd0cmFuc2l0aW9uJzogJ29wYWNpdHkgMS4wcyBlYXNlLWluIDBzLCB3aWR0aCAyLjBzIGVhc2UtaW4gMnMnXG4gKiAgICd0cmFuc2l0aW9uJzogJ2NvbG9yIDIuMHMgZWFzZS1pbiAycywgYmFja2dyb3VuZC1jb2xvciAyLjBzIGVhc2UtaW4gMnMnLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIHRyYW5zaXRpb25zKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcHJvcGVydGllcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwcm9wZXJ0aWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocHJvcGVydGllc1swXSkgJiYgcHJvcGVydGllcy5sZW5ndGggPT09IDIpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9wZXJ0aWVzWzFdO1xuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDYxKTtcbiAgICB9XG5cbiAgICB2YXIgdHJhbnNpdGlvbnNTdHJpbmcgPSBwcm9wZXJ0aWVzWzBdLm1hcChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICAgIHJldHVybiBwcm9wZXJ0eSArIFwiIFwiICsgdmFsdWU7XG4gICAgfSkuam9pbignLCAnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNpdGlvbnNTdHJpbmdcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uOiBwcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB7IGN1cnJpZWRBZGp1c3RIdWUkMSBhcyBhZGp1c3RIdWUsIGFuaW1hdGlvbiwgYmFja2dyb3VuZEltYWdlcywgYmFja2dyb3VuZHMsIGJldHdlZW4sIGJvcmRlciwgYm9yZGVyQ29sb3IsIGJvcmRlclJhZGl1cywgYm9yZGVyU3R5bGUsIGJvcmRlcldpZHRoLCBidXR0b25zLCBjbGVhckZpeCwgY29tcGxlbWVudCwgY292ZXIsIGNzc1ZhciwgY3VycmllZERhcmtlbiQxIGFzIGRhcmtlbiwgY3VycmllZERlc2F0dXJhdGUkMSBhcyBkZXNhdHVyYXRlLCBkaXJlY3Rpb25hbFByb3BlcnR5LCBlYXNlSW4sIGVhc2VJbk91dCwgZWFzZU91dCwgZWxsaXBzaXMsIGVtJDEgYXMgZW0sIGZsdWlkUmFuZ2UsIGZvbnRGYWNlLCBnZXRDb250cmFzdCwgZ2V0THVtaW5hbmNlLCBnZXRWYWx1ZUFuZFVuaXQsIGdyYXlzY2FsZSwgaGlEUEksIGhpZGVUZXh0LCBoaWRlVmlzdWFsbHksIGhzbCwgaHNsVG9Db2xvclN0cmluZywgaHNsYSwgaW1wb3J0YW50LCBpbnZlcnQsIGN1cnJpZWRMaWdodGVuJDEgYXMgbGlnaHRlbiwgbGluZWFyR3JhZGllbnQsIG1hcmdpbiwgbWF0aCwgbWVldHNDb250cmFzdEd1aWRlbGluZXMsIG1peCQxIGFzIG1peCwgbW9kdWxhclNjYWxlLCBub3JtYWxpemUsIGN1cnJpZWRPcGFjaWZ5JDEgYXMgb3BhY2lmeSwgcGFkZGluZywgcGFyc2VUb0hzbCwgcGFyc2VUb1JnYiwgcG9zaXRpb24sIHJhZGlhbEdyYWRpZW50LCByZWFkYWJsZUNvbG9yLCByZW0kMSBhcyByZW0sIHJlbVRvUHgsIHJldGluYUltYWdlLCByZ2IsIHJnYlRvQ29sb3JTdHJpbmcsIHJnYmEsIGN1cnJpZWRTYXR1cmF0ZSQxIGFzIHNhdHVyYXRlLCBjdXJyaWVkU2V0SHVlJDEgYXMgc2V0SHVlLCBjdXJyaWVkU2V0TGlnaHRuZXNzJDEgYXMgc2V0TGlnaHRuZXNzLCBjdXJyaWVkU2V0U2F0dXJhdGlvbiQxIGFzIHNldFNhdHVyYXRpb24sIGN1cnJpZWRTaGFkZSQxIGFzIHNoYWRlLCBzaXplLCBzdHJpcFVuaXQsIHRleHRJbnB1dHMsIHRpbWluZ0Z1bmN0aW9ucywgY3VycmllZFRpbnQkMSBhcyB0aW50LCB0b0NvbG9yU3RyaW5nLCB0cmFuc2l0aW9ucywgY3VycmllZFRyYW5zcGFyZW50aXplJDEgYXMgdHJhbnNwYXJlbnRpemUsIHRyaWFuZ2xlLCB3b3JkV3JhcCB9O1xuIiwidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG5pbXBvcnQgeyByZ2IsIGhzbCwgcmVhZGFibGVDb2xvciB9IGZyb20gJ3BvbGlzaGVkJztcbi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgcHJvamVjdCBkZXRhaWxzLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgYSBkb2N1bWVudCBzdHJ1Y3R1cmUgYW5kIHRodW1ibmFpbC5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG5jb25zdCBURU1QTEFURV9DT05URU5UUyA9IFwiYzc2OWE2MjY1NTU2YzA5MWNjMWQ4YzA1NzYyYzcxZWNiZjk3MzE0YlwiO1xuY29uc3QgVEVNUExBVEVfQkxPQ0tTID0gXCI1MjA1OGU0NDU0ZDgyOTg3MjQ4MmI4NTUxZjQ5MThjYjgyODg4MGQ2XCI7XG5jb25zdCBURU1QTEFURV9JTkZPID0gXCJkNDViMzAwNTUxNmY4ODc3MjQ5NDBhNWExMDY2M2FkY2ZmOWRjNGI0XCI7XG5jb25zdCBDT01QT05FTlRfVElUTEUgPSBcImRjYzg1MTQ0NzM3Y2M4NzM2YTc4MGI2ZTQyOGExNDZhZTQ1NjA2MDZcIjtcbmNvbnN0IENPTVBPTkVOVF9CTE9DSyA9IFwiNTlhMTdjMzAwZDQwZDk1MmU0MDI1ZDU1MWVmMjVmOTA2ZDkyZjQzN1wiO1xuLy9Gb250IHN0eWxlc1xuY29uc3QgV0VCX1hYWExBUkdFID0gXCI5NWU5NGFjNDFhOGNjNzlkMDk3MTExYTg3ODVkM2I1OTc2YzcwZjk5XCI7XG5jb25zdCBQQURESU5HX0ggPSA0MDtcbmNvbnN0IFBBRERJTkdfViA9IDQwO1xuY29uc3QgU1BBQ0lORyA9IDI0O1xuY29uc3QgRk9OVF9USVRMRVMgPSB7IGZhbWlseTogXCJNZW5sb1wiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbmNvbnN0IEZPTlRfQk9ESUVTID0geyBmYW1pbHk6IFwiU0YgUHJvIFRleHRcIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG5jb25zdCBTT0xJRCA9ICdTT0xJRCc7XG5jb25zdCBOT1JNQUwgPSAnTk9STUFMJztcbmNvbnN0IEJMQUNLID0ge1xuICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICBcIm9wYWNpdHlcIjogMSxcbiAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICAgIFwiclwiOiAwLFxuICAgICAgICBcImdcIjogMCxcbiAgICAgICAgXCJiXCI6IDBcbiAgICB9XG59O1xuY29uc3QgV0hJVEUgPSB7XG4gICAgXCJ0eXBlXCI6IFNPTElELFxuICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgIFwib3BhY2l0eVwiOiAxLFxuICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICBcImJcIjogMVxuICAgIH1cbn07XG52YXIgTElHSFRfVEVYVF9DT0xPUl9TVFlMRTtcbnZhciBEQVJLX1RFWFRfQ09MT1JfU1RZTEU7XG5sZXQgTElHSFRfQ09MT1JTX0NVU1RPTSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwicHJpbWFyeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJhY3Rpb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dO1xubGV0IERBUktfQ09MT1JTX0NVU1RPTSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwicHJpbWFyeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJhY3Rpb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dO1xubGV0IExJR0hUX0NPTE9SU19HRU5FUkFURUQgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uUHJpbWFyeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uQWN0aW9uXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYWN0aW9uQmFja2dyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uQWN0aW9uQmFja2dyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5dO1xubGV0IERBUktfQ09MT1JTX0dFTkVSQVRFRCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25QcmltYXJ5XCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25NZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25BY3Rpb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJhY3Rpb25CYWNrZ3JvdW5kXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25BY3Rpb25CYWNrZ3JvdW5kXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbl07XG5sZXQgTElHSFRfQ09MT1JTX0ZJWEVEID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJub3RlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMC45NDExNzY0NzQwOTQzOTA5LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjg1ODgyMzUzNzgyNjUzODFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uTm90ZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAgbmFtZTogXCJpbmJvdW5kTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuOTU2ODYyNzQ3NjY5MjIsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuOTY0NzA1ODg0NDU2NjM0NSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC45NzI1NDkwMjEyNDQwNDkxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJzeXN0ZW1NZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYm9yZGVyU3lzdGVtTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAwLjExOTk5OTk5NzMxNzc5MDk5LFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJvbkJhY2tncm91bmRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJlbGV2YXRlZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImRhbmdlclwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuOTQxMTc2NDc0MDk0MzkwOSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC45NDUwOTgwNDI0ODgwOTgxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJvbkRhbmdlclwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuNTQ5MDE5NjM0NzIzNjYzMyxcbiAgICAgICAgICAgICAgICBcImdcIjogMC4xMzcyNTQ5MDg2ODA5MTU4MyxcbiAgICAgICAgICAgICAgICBcImJcIjogMC4xNzI1NDkwMjQyMjQyODEzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJzdWNjZXNzXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC4wMTE3NjQ3MDYxMTI0NDQ0LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjUwNTg4MjM4MjM5Mjg4MzMsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMzI1NDkwMjA2NDgwMDI2MjVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm5vdGlmeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuODAwMDAwMDExOTIwOTI5LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjIwMDAwMDAwMjk4MDIzMjI0LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjI1MDk4MDQwNjk5OTU4OFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZGlzYWJsZWRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjgwMDAwMDAxMTkyMDkyOSxcbiAgICAgICAgICAgICAgICBcImdcIjogMC44MDAwMDAwMTE5MjA5MjksXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuODAwMDAwMDExOTIwOTI5XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJpY29uXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC4xODQzMTM3Mjk0MDU0MDMxNCxcbiAgICAgICAgICAgICAgICBcImdcIjogMC4yMjM1Mjk0MTMzNDI0NzU5LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjI1NDkwMTk3NTM5MzI5NTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbl07XG5sZXQgREFSS19DT0xPUlNfRklYRUQgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIm5vdGVcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjk5NjA3ODQzMTYwNjI5MjcsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuODM5MjE1Njk1ODU4MDAxNyxcbiAgICAgICAgICAgICAgICBcImJcIjogMC42NTg4MjM1NDk3NDc0NjdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uTm90ZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImluYm91bmRNZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC4xODQzMTM3Mjk0MDU0MDMxNCxcbiAgICAgICAgICAgICAgICBcImdcIjogMC4yMjM1Mjk0MTMzNDI0NzU5LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjI1NDkwMTk3NTM5MzI5NTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInN5c3RlbU1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJib3JkZXJTeXN0ZW1NZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDAuMzQ5OTk5OTk0MDM5NTM1NSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMCxcbiAgICAgICAgICAgICAgICBcImdcIjogMCxcbiAgICAgICAgICAgICAgICBcImJcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25CYWNrZ3JvdW5kXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZWxldmF0ZWRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjEwMDAwMDAwMTQ5MDExNjEyLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjEwMDAwMDAwMTQ5MDExNjEyLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjEwMDAwMDAwMTQ5MDExNjEyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJkYW5nZXJcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjQwNzg0MzE0Mjc0Nzg3OTAzLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjA3MDU4ODIzODUzNzMxMTU1LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjA5ODAzOTIxNzI5MzI2MjQ4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJvbkRhbmdlclwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuOTYwNzg0MzE2MDYyOTI3MixcbiAgICAgICAgICAgICAgICBcImdcIjogMC44MzUyOTQxMjc0NjQyOTQ0LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjg0NzA1ODgzMjY0NTQxNjNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjE2MDc4NDMxOTA0MzE1OTQ4LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjYxMTc2NDcyOTAyMjk3OTcsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuNDAwMDAwMDA1OTYwNDY0NVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibm90aWZ5XCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC4xODQzMTM3Mjk0MDU0MDMxNCxcbiAgICAgICAgICAgICAgICBcImdcIjogMC4yMjM1Mjk0MTMzNDI0NzU5LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjI1NDkwMTk3NTM5MzI5NTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImRpc2FibGVkXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC4xODQzMTM3Mjk0MDU0MDMxNCxcbiAgICAgICAgICAgICAgICBcImdcIjogMC4yMjM1Mjk0MTMzNDI0NzU5LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjI1NDkwMTk3NTM5MzI5NTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImljb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjUyOTQxMTc5Mjc1NTEyNyxcbiAgICAgICAgICAgICAgICBcImdcIjogMC41NzI1NDkwNDUwODU5MDcsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuNjE1Njg2Mjk3NDE2Njg3XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dO1xuLy8gVGhpcyBzaG93cyB0aGUgSFRNTCBwYWdlIGluIFwidWkuaHRtbFwiLlxuc3dpdGNoIChmaWdtYS5jb21tYW5kKSB7XG4gICAgY2FzZSBcInVwZGF0ZVwiOlxuICAgICAgICB1cGRhdGVHZW5lcmF0ZWRDb2xvcnMoXCJsaWdodFwiKTtcbiAgICAgICAgdXBkYXRlR2VuZXJhdGVkQ29sb3JzKFwiZGFya1wiKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgICAgZmlnbWEuc2hvd1VJKF9faHRtbF9fKTtcbiAgICAgICAgZmlnbWEudWkucmVzaXplKDQwMCwgMzMwKTtcbiAgICAgICAgaWYgKGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YShcInN0YXR1c1wiKSA9PSBcInJ1blwiKSB7XG4gICAgICAgICAgICAvL1RPRE8gZXZhbHVhdGUgaWYgdGhlcmUgaXMgc29tZSB3YXkgdG8gcmVjb25maWd1cmUgdGhlIHBhZ2VzIGFmdGVyIGluaXRpYWwgc2V0dXAuXG4gICAgICAgICAgICAvLyBmaWdtYS51aS5yZXNpemUoNDAwLCAxMzYpXG4gICAgICAgICAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShcImFib3V0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoXCJzdGF0dXNcIikgPT0gXCJ0aGVtZWRcIikge1xuICAgICAgICAgICAgdXBkYXRlR2VuZXJhdGVkQ29sb3JzKFwibGlnaHRcIik7XG4gICAgICAgICAgICB1cGRhdGVHZW5lcmF0ZWRDb2xvcnMoXCJkYXJrXCIpO1xuICAgICAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbn1cbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcInJlc2l6ZVwiOlxuICAgICAgICAgICAgZmlnbWEudWkucmVzaXplKDQwMCwgbXNnLmhlaWdodCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNyZWF0ZS1wcm9qZWN0XCI6XG4gICAgICAgICAgICBmaWdtYS51aS5oaWRlKCk7XG4gICAgICAgICAgICB5aWVsZCBsb2FkUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICBmaWdtYS5yb290LnNldFJlbGF1bmNoRGF0YSh7IGFib3V0OiBcIlRoaXMgZG9jdW1lbnQgd2FzIGZvcm1hdGVkIHdpdGggWnRhcnRcIiB9KTtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcInN0YXR1c1wiLCBcInJ1blwiKTtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZVByb2plY3QobXNnLnByb2plY3RUaXRsZSwgbXNnLnByb2plY3RUeXBlLCBtc2cucHJvamVjdERlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY3JlYXRlLXRoZW1lXCI6XG4gICAgICAgICAgICBmaWdtYS51aS5oaWRlKCk7XG4gICAgICAgICAgICB5aWVsZCBsb2FkUmVzb3VyY2VzKCk7XG4gICAgICAgICAgICBmaWdtYS5yb290LnNldFJlbGF1bmNoRGF0YSh7IHVwZGF0ZTogXCJSZWdlbmVyYXRlIGFjY2Vzc2libGUgdGhlbWUgY29sb3JzXCIgfSk7XG4gICAgICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJzdGF0dXNcIiwgXCJ0aGVtZWRcIik7XG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVUaGVtZShtc2cudGhlbWVOYW1lLCBtc2cucHJpbWFyeUNvbG9yLCBtc2cubWVzc2FnZUNvbG9yLCBtc2cuYWN0aW9uQ29sb3IpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxufSk7XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlLCB0eXBlLCBkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIC8vIFNldCBwYWdlIG5hbWVzIGFuZCByZW5hbWVzIHRoZSBkZWZhdWx0IFwiUGFnZSAxXCJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UubmFtZSA9IFwi8J+TliBBYm91dFwiO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJFeHBsb3JhdGlvblwiOlxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn6SUIFByb2JsZW0gZGVmaW5pdGlvblwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+UrCBSZXNlYXJjaFwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+PnSBFeHBsb3JhdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTb2x1dGlvbiBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogU29sdXRpb24gQlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJQcm9kdWN0XCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+TkCBEZXNpZ24gU3BlY3NcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBSZWFkeSBmb3IgZGV2XCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogU2hpcHBlZFwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5W5IFByb3RvdHlwZXNcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBQcm90b3R5cGUgQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn4+dIEV4cGxvcmF0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIEV4cGxvcmF0aW9uIEFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+TpiBBcmNoaXZlc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIEFyY2hpdmUgQVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMaWJyYXJ5XCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIuKdkyBIb3cgdG8uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBVc2UgdGhpcyBsaWJyYXJ5XCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogQ29udHJpYnV0ZVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCJDb21wb25lbnQgQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiQ29tcG9uZW50IEJcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIkNvbXBvbmVudCBDXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfmqcgQ29tcG9uZW50IHRlbXBsYXRlXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vQWRkIGEgdGh1bW5haWwgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgICAgIHlpZWxkIGNyZWF0ZVRodW1ibmFpbCh0aXRsZSwgdHlwZSkudGhlbigoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0RGV0YWlscyhkZXNjcmlwdGlvbiwgdHlwZSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHR5cGUgPT0gXCJMaWJyYXJ5XCIpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRzID0gW3lpZWxkIGNyZWF0ZVVzZSgpLCB5aWVsZCBjcmVhdGVDb250cmlidXRlKCldO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlSG93VG8odGFyZ2V0cyk7XG4gICAgICAgICAgICAvL0dvIHRvIHRoZSBjb21wb25lbnQgdGVtcGxhdGUgcGFnZVxuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuW2ZpZ21hLnJvb3QuY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAvLyBQcmVwYXJlIGEgY29tcG9uZW50IHRlbXBsYXRlXG4gICAgICAgICAgICAvL0NyZWF0ZSB0aXRsZVxuICAgICAgICAgICAgbGV0IHRpdGxlID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoQ09NUE9ORU5UX1RJVExFKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHRpdGxlLm5hbWUgPSBcIkNvbXBvbmVudCB0aXRsZVwiO1xuICAgICAgICAgICAgc2V0VGV4dCh0aXRsZS5maW5kQ2hpbGQobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIpLCBcIkNvbXBvbmVudCBuYW1lXCIpO1xuICAgICAgICAgICAgdGl0bGUucmVzaXplKDEyODAsIHRpdGxlLmhlaWdodCk7XG4gICAgICAgICAgICB0aXRsZS54ID0gODA7XG4gICAgICAgICAgICB0aXRsZS55ID0gODA7XG4gICAgICAgICAgICAvL0NyZWF0ZSBidWlsZGluZyBibG9ja3MgYXJlYVxuICAgICAgICAgICAgbGV0IGJ1aWxkaW5nX2Jsb2NrcyA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MubmFtZSA9IFwiQnVpbGRpbmcgYmxvY2tzXCI7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MucmVzaXplKDE0NDAsIGJ1aWxkaW5nX2Jsb2Nrcy5oZWlnaHQpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLnggPSAwO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLnkgPSAxNTIwO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgICAgICBsZXQgYmxvY2sgPSAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhDT01QT05FTlRfQkxPQ0spKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgbGV0IGJsb2NrVGl0bGVUZXh0ID0gYmxvY2suZmluZENoaWxkKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoYmxvY2tUaXRsZVRleHQuZm9udE5hbWUpO1xuICAgICAgICAgICAgYmxvY2tUaXRsZVRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgYmxvY2tUaXRsZVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgIGJsb2NrVGl0bGVUZXh0LmNoYXJhY3RlcnMgPSBcIkJ1aWxkaW5nIGJsb2Nrc1wiO1xuICAgICAgICAgICAgYmxvY2subGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy5hcHBlbmRDaGlsZChibG9jayk7XG4gICAgICAgICAgICBsZXQgYnVpbGRpbmdfYmxvY2tfYXJlYSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLm5hbWUgPSBcIlBsYWNlIGNvbXBvbm5lbnRzIGhlcmUuLi5cIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLmFwcGVuZENoaWxkKGJ1aWxkaW5nX2Jsb2NrX2FyZWEpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5yZXNpemUoMTQ0MCwgNDgwKTtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEubGF5b3V0R3JvdyA9IDA7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEudmVydGljYWxQYWRkaW5nID0gUEFERElOR19WO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5ob3Jpem9udGFsUGFkZGluZyA9IFBBRERJTkdfSDtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEuaXRlbVNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEuZmlsbHMgPSBbXTtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIC8vQ3JlYXRlIGJhY2tncm91bmRcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZSgxNDQwLCAxNDQwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQubmFtZSA9IFwiQmFja2dyb3VuZFwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5maWxscyA9IFt7IFwidHlwZVwiOiBTT0xJRCwgXCJ2aXNpYmxlXCI6IHRydWUsIFwib3BhY2l0eVwiOiAxLCBcImJsZW5kTW9kZVwiOiBOT1JNQUwsIFwiY29sb3JcIjogeyBcInJcIjogMSwgXCJnXCI6IDEsIFwiYlwiOiAxIH0gfV07XG4gICAgICAgICAgICAvLyBDcmVhdGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvblRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhXRUJfWFhYTEFSR0UpLnRoZW4oYmFzZVN0eWxlID0+IHsgZGVzY3JpcHRpb25UZXh0LnRleHRTdHlsZUlkID0gYmFzZVN0eWxlLmlkOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkZvbnQgc3R5bGVzIGFyZSBtaXNzaW5nIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5yZXNpemUoMTI4MCwgODgpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0Lm5hbWUgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQueCA9IDgwO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnkgPSAzNTI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQuYXV0b1JlbmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhkZXNjcmlwdGlvblRleHQuZm9udE5hbWUpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5jaGFyYWN0ZXJzID0gXCJUeXBlIGEgZGVzY3JpcHRpb24gb2YgdGhlIGNvbXBvbmVudCBoZXJlLCBhbmQgcGxhY2UgYW55IGNvbXBvbmVudHMvdmFyaWFudHMgaW4gdGhlIHNwYWNlIGJlbG93IOKGmO+4j1wiO1xuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIC8vIFRoZW4gYWRkIHRoZSB0ZW1wbGF0ZSB0byBhbnkgcGFnZXMgd2l0aCAnQ29tcG9uZW50JyBpbiB0aGUgdGl0bGVcbiAgICAgICAgICAgIGZpZ21hLnJvb3QuZmluZENoaWxkcmVuKHBhZ2VOb2RlID0+IHBhZ2VOb2RlLm5hbWUuaW5jbHVkZXMoXCJDb21wb25lbnRcIikpLmZvckVhY2gocGFnZU5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIHBhZ2VOb2RlLmFwcGVuZENoaWxkKGJ1aWxkaW5nX2Jsb2Nrcy5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBwYWdlTm9kZS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIHBhZ2VOb2RlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dC5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBwYWdlTm9kZS5hcHBlbmRDaGlsZCh0aXRsZS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL0NsZWFyIHVwIHRoZSBcImV4dHJhXCIgdGVtcGxhdGVcbiAgICAgICAgICAgIHRpdGxlLnJlbW92ZSgpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLnJlbW92ZSgpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnJlbW92ZSgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW5bMF07XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGV0YWlscyhkZXNjcmlwdGlvbiwgdHlwZSkge1xuICAgIGxldCBkZXRhaWxzRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbHNGcmFtZS5uYW1lID0gXCJQcm9qZWN0IGRldGFpbHNcIjtcbiAgICBkZXRhaWxzRnJhbWUueSA9IDM0MDtcbiAgICBkZXRhaWxzRnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMSk7XG4gICAgZGV0YWlsc0ZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgZGV0YWlsc0ZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICBkZXRhaWxzRnJhbWUudmVydGljYWxQYWRkaW5nID0gUEFERElOR19WO1xuICAgIGRldGFpbHNGcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IFBBRERJTkdfSDtcbiAgICBkZXRhaWxzRnJhbWUuaXRlbVNwYWNpbmcgPSBTUEFDSU5HO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGRldGFpbHNGcmFtZSk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbChcIkRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uICE9PSBcIlwiID8gZGVzY3JpcHRpb24gOiBcIjxFbnRlciBhIGRlc2NyaXB0aW9uIGhlcmU+XCIpKTtcbiAgICBkZXRhaWxzRnJhbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlsKFwiRXh0ZXJuYWwgTGlua3NcIiwgXCI8QWRkIGxpbmtzIGhlcmU+IOKGklxcbjxFLmcuIENvbmZsdWVuY2U+IOKGklxcbjxFLmcuIEdvb2dsZSBEb2M+IOKGklwiKSk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbChcIlNsYWNrIENoYW5uZWxzXCIsIFwiIzxjaGFubmVsIG5hbWUgaGVyZT5cXG4jPGNoYW5uZWwgbmFtZSBoZXJlPlwiKSk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbChcIlBvaW50cyBvZiBDb250YWN0XCIsIFwiRGVzaWduIC0gPGxpbmsgU2xhY2sgcHJvZmlsZSBoZXJlPlxcblByb2R1Y3QgLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XFxuRW5naW5lZXJpbmcgLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XCIpKTtcbiAgICAvLyBGcmFtZSBmb3Igd3JhcHBpbmcgdGhlIGxpc3Qgb2YgcGFnZSBleGFtcGxlcy5cbiAgICBsZXQgbGlzdEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBsaXN0RnJhbWUubmFtZSA9IFwiQWRkIG90aGVyIHBhZ2VzLCBhcyBuZWVkZWQuLi5cIjtcbiAgICBsaXN0RnJhbWUueSA9IGRldGFpbHNGcmFtZS55ICsgZGV0YWlsc0ZyYW1lLmhlaWdodCArIFNQQUNJTkc7XG4gICAgbGlzdEZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDEpO1xuICAgIGxpc3RGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGxpc3RGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgbGlzdEZyYW1lLnZlcnRpY2FsUGFkZGluZyA9IFBBRERJTkdfVjtcbiAgICBsaXN0RnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSBQQURESU5HX0g7XG4gICAgbGlzdEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChsaXN0RnJhbWUpO1xuICAgIC8vIE5vdCBhbGwgcHJvamVjdHMgbmVlZCBhIHByb3RvdHlwZSwgc2hpcHBlZCBpdC9yZWxlYXNlZCwgb3IgcmVzZWFyY2ggcGFnZS5cbiAgICAvLyBIb3dldmVyIGluIG9yZGVyIHRvIG1ha2UgYWRkaW5nIG9uZSBvZiB0aGVzZSBwYWdlcyBlYXNpbHksIHdlIGFkZCBzb21lXG4gICAgLy8gdGV4dCB0byBvdXIgc2NyYXRjaCBwYWdlIHNvIHdlIGNhbiBjb3B5L3Bhc3RlIHRoZW0gd2l0aCB0aGUgcHJvcGVyIGVtb2ppLlxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiRXhwbG9yYXRpb25cIjpcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlRXhhbXBsZShcIuKPsyBIaXN0b3J5XCIpKTtcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlRXhhbXBsZShcIuKchSBOZXh0IHN0ZXBzXCIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUHJvZHVjdFwiOlxuICAgICAgICAgICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+ShfCfj70gU3R5bGVzXCIpKTtcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlRXhhbXBsZShcIuKame+4jyBDb21wb25lbnRzXCIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTGlicmFyeVwiOlxuICAgICAgICAgICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+ShfCfj70gU3R5bGVzXCIpKTtcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlRXhhbXBsZShcIvCfmoAgUm9hZG1hcFwiKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbn1cbi8vIFRoaXMgZnVuY3Rpb24gYWRkcyBhIHRodW1ibmFpbCB0byB5b3VyIGZpcnN0IHBhZ2UuXG5mdW5jdGlvbiBjcmVhdGVUaHVtYm5haWwodGl0bGUsIHR5cGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiYWMwYjE1OGMzN2RlM2ZhOGJhOTRkMmIzODAxOTEzYWVhMjYyZmZjYlwiKS5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiQW5ub3RhdGlvbiBLaXQgbGlicmFyeSBpcyByZXF1aXJlZCBmb3IgdGh1bWJuYWlscy5cIik7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB9KS50aGVuKChjb21wb25lbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB0aHVtYm5haWxGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICB0aHVtYm5haWxGcmFtZS5uYW1lID0gXCJUaHVtYm5haWxcIjtcbiAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDMyMCk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9IGNvbXBvbmVudC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5zY2FsZUZhY3RvciA9IDEgLyAzO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQodGh1bWJuYWlsRnJhbWUpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiRmlsZSBOYW1lXCIpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMobGFiZWwuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSBcIkVudGVyIHRpdGxlIGhlcmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiQmFkZ2VcIiAmJiBub2RlLnR5cGUgPT0gXCJJTlNUQU5DRVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYmFkZ2VUZXh0ID0gYmFkZ2UuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PSBcIkJhZGdlXCIgJiYgbm9kZS50eXBlID09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGJhZGdlVGV4dC5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlVGV4dC5jaGFyYWN0ZXJzID0gdHlwZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSBcIkV4cGxvcmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2UuZmlsbFN0eWxlSWQgPSAoeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFwiMGVlMWM0NzlkM2YyMWQ0NzUyMjdhNDUyMGNiNDgxYmQ5OGFmNWFmNVwiKSkuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJMaWJyYXJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2UuZmlsbFN0eWxlSWQgPSAoeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFwiYTNhYThjNjRkMTBhMGIxZWU5MmIzZGM2ZTVmMjc4YWM5NzhjNTZjZlwiKSkuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlVGV4dC5maWxsU3R5bGVJZCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCI0OTJjOTY0NWQ2N2YwMjZkZDM3YzMwMWM2MTU3NzUwNGJkN2Q4YWQ3XCIpKS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWdtYS5zZXRGaWxlVGh1bWJuYWlsTm9kZUFzeW5jKHRodW1ibmFpbEZyYW1lKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuLy8gQWRkcyBhIG5ldyBwYWdlLlxuZnVuY3Rpb24gY3JlYXRlUGFnZSh0aXRsZSkge1xuICAgIGxldCBwYWdlID0gZmlnbWEuY3JlYXRlUGFnZSgpO1xuICAgIHBhZ2UubmFtZSA9IHRpdGxlO1xufVxuLy8gQWRkcyBhIHNlY3Rpb24gdG8geW91ciBkZXRhaWxzIGZyYW1lLlxuZnVuY3Rpb24gY3JlYXRlRGV0YWlsKHRpdGxlLCBib2R5KSB7XG4gICAgbGV0IGRldGFpbEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBkZXRhaWxGcmFtZS5uYW1lID0gdGl0bGU7XG4gICAgZGV0YWlsRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBkZXRhaWxGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBkZXRhaWxGcmFtZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGRldGFpbEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICBsZXQgdGl0bGVUZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIHRpdGxlVGV4dC5mb250TmFtZSA9IEZPTlRfVElUTEVTO1xuICAgIHRpdGxlVGV4dC5mb250U2l6ZSA9IDE3O1xuICAgIHRpdGxlVGV4dC5jaGFyYWN0ZXJzID0gdGl0bGU7XG4gICAgdGl0bGVUZXh0LmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgICBsZXQgYm9keVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgYm9keVRleHQuZm9udE5hbWUgPSBGT05UX0JPRElFUztcbiAgICBib2R5VGV4dC5mb250U2l6ZSA9IDE0O1xuICAgIGJvZHlUZXh0LmNoYXJhY3RlcnMgPSBib2R5O1xuICAgIGJvZHlUZXh0LmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuYXBwZW5kQ2hpbGQoYm9keVRleHQpO1xuICAgIHJldHVybiBkZXRhaWxGcmFtZTtcbn1cbi8vIEFkZHMgYW4gZXhhbXBsZSB0byB5b3VyIGxpc3QgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVQYWdlRXhhbXBsZSh0ZXh0KSB7XG4gICAgbGV0IGxpbmtMYWJlbCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBsaW5rTGFiZWwuZm9udE5hbWUgPSBGT05UX0JPRElFUztcbiAgICBsaW5rTGFiZWwuZm9udFNpemUgPSAxNDtcbiAgICBsaW5rTGFiZWwuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgcmV0dXJuIGxpbmtMYWJlbDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUhvd1RvKHRhcmdldHMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgaG93UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW4uZmluZChub2RlID0+IG5vZGUubmFtZSA9PSBcIuKdkyBIb3cgdG8uLi5cIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gaG93UGFnZTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQ09OVEVOVFMsIFwiSG93IHRvLi4uXCIsIFwiXCIpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJVc2UgdGhpcyBsaWJyYXJ5XCIsIHRhcmdldHNbMF0pO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJDb250cmlidXRlXCIsIHRhcmdldHNbMV0pO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlVXNlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB1c2VQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiICAgICAgICAg4oaqIFVzZSB0aGlzIGxpYnJhcnlcIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gdXNlUGFnZTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQ09OVEVOVFMsIFwiVXNpbmcgdGhpcyBsaWJyYXJ5XCIsIFwiXCIsIFwiMSkgQWRkIHNlY3Rpb25zIGhlcmVcXG5cXG5PcHRpb25hbGx5LCBhZGQgbW9yZSBzZWN0aW9ucyB0byBoZWxwIGRlc2NyaWJlIHRoZSB1c2FnZSBvZiB5b3VyIGxpYnJhcnkuXCIpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJQdXJwb3NlXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJVc2luZyB0aGlzIGxpYnJhcnlcIiwgXCJQdXJwb3NlXCIsIFwiMikgRGVzY3JpYmUgdGhlIHB1cnBvc2VcXG5cXG5UaGlzIGxpYnJhcnkgd2FzIGNyZWF0ZWQgdG8gZmlsbCBhIG5lZWQuIERlc2NyaWJlIHRoYXQgbmVlZCBhbmQgbGV0IGRlc2lnbmVycyB3aGF0IGRvZXMgKGFuZCBkb2VzbuKAmXQpIGZpdCB3aXRoaW4gdGhpcyBsaWJyYXJ5LlxcblxcbllvdSBjYW4gYWxzbyBhZGQgYW4gaW1hZ2UgdG8gdGhlIHJpZ2h0IHRoYXQgcmVwcmVzZW50cyB5b3VyIGxpYnJhcnkuXCIsIFwiRS5nLiBUaGUgQ29udmVyc2F0aW9uIEtpdCBpcyBhIEZpZ21hIGxpYnJhcnkgLSBhbmQgc2V0IG9mIGFjY29tcGFueWluZyB0b29scyAtIHRoYXQgZ2l2ZSBkZXNpZ25lcnMgZXZlcnl0aGluZyB0aGV5IG5lZWQgdG8gZGVzaWduIGEgY29uc2lzdGVudCBjb252ZXJzYXRpb25hbCBleHBlcmllbmNlIGFjcm9zcyBhbnkgbnVtYmVyIG9mIHByb2R1Y3RzIGFuZCBwbGF0Zm9ybXMuXCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiUHJpbmNpcGxlc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0JMT0NLUywgXCJVc2luZyB0aGlzIGxpYnJhcnlcIiwgXCJQcmluY2lwbGVzXCIsIFwiMykgQWRkIHlvdXIgb3duIHByaW5jaXBsZXNcXG5cXG5QcmluY2lwbGVzIGtlZXAgZm91bmRhdGlvbmFsIGRlY2lzaW9ucyBjb25zaXN0ZW50LCBhbmQgc2V0IHByZWNlZGVudCBmb3IgaG93IGVhY2ggY29tcG9uZW50IGlzIHVzZWQgYW5kIGJ1aWx0LlwiKSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIkluc3RydWN0aW9uc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiVXNpbmcgdGhpcyBsaWJyYXJ5XCIsIFwiSW5zdHJ1Y3Rpb25zXCIsIFwiNCkgQWRkIHN0ZXAtYnktc3RlcCBpbnN0cnVjdGlvbnNcXG5cXG5JbmNsdWRlIGluc3RydWN0aW9ucyBvZiB3aGVyZSB0aGUgYXNzZXRzIGNhbiBiZSBmb3VuZCwgaG93IHRoZXkgYXJlIG9yZ2FuaXplZCwgaG93IHZhcmlhbnRzIGFuZCBvdmVycmlkZXMgd29yaywgYW5kIGFueSBvdGhlciBkZXRhaWxzIG5lZWRlZCB0byB1c2UgdGhlIGxpYnJhcnkuXCIsIFwiMS4gRG8gdGhpc1xcbkRvIHRoYXRcXG5Qcm9maXRcIikpO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gZnJhbWUxO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlQ29udHJpYnV0ZSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgY29udHJpYnV0ZVBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCIgICAgICAgICDihqogQ29udHJpYnV0ZVwiKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBjb250cmlidXRlUGFnZTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQ09OVEVOVFMsIFwiQ29udHJpYnV0aW5nXCIsIFwiXCIsIFwiMSkgQWRkIHNlY3Rpb25zIGhlcmVcXG5cXG5PcHRpb25hbGx5LCBhZGQgbW9yZSBzZWN0aW9ucyB0byBoZWxwIGRlc2NyaWJlIGhvdyBvdGhlciBkZXNpZ25lcnMgY2FuIGFkZCB0byB0aGlzIGxpYnJhcnkuXCIpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJDb252ZW50aW9uc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0JMT0NLUywgXCJDb250cmlidXRpbmdcIiwgXCJDb252ZW50aW9uc1wiLCBcIjIpIEFkZCB5b3VyIG93biBjb252ZW50aW9uc1xcblxcbldoYXQgY29udmVudGlvbnMgZG9lcyBhIGRlc2lnbmVyIG5lZWQgdG8gYmUgYXdhcmUgb2YgdG8gbWFrZSBjb21wb25lbnRzIHRoYXQgd29yayBpbiBhIHNpbWlsYXIgd2F5IHRvIGFsbCB0aGUgcmVzdD9cIikpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJJbnN0cnVjdGlvbnNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9JTkZPLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIkluc3RydWN0aW9uc1wiLCBcIjMpIEFkZCBzdGVwLWJ5LXN0ZXAgaW5zdHJ1Y3Rpb25zXFxuXFxuSW5jbHVkZSBpbnN0cnVjdGlvbnMgb24gaG93IHRvIHN0YXJ0IGEgYnJhbmNoLCBvcmdhbml6ZSBwYWdlcywgYW5kIHJlcXVlc3QgcmV2aWV3LlwiLCBcIjEuIENyZWF0ZSBhIEJyYW5jaDogUHJlc3MgdGhlIGNoZXZyb24gbmV4dCB0byB0aGUgZmlsZSBuYW1lIGluIHRoZSB0b29sYmFyLCBhbmQgc2VsZWN0IENyZWF0ZSBicmFuY2guLi4uIEdpdmUgaXQgYSBuYW1lIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0IOKelTxDb21wb25lbnQgbmFtZT4uXFxuRHVwbGljYXRlIHRoZSDigJjwn5qnIENvbXBvbmVudCB0ZW1wbGF0ZeKAmSBwYWdlLCBhbmQgcmVuYW1lIGl0IGFjY29yZGluZyB0byB0aGUgcGFnZSBuYW1pbmcgY29udmVybnRpb25zLlxcblBlcmZvcm0geW91ciBleHBsb3JhdGlvbnMvd29yayBvbiB0aGlzIHBhZ2UuXFxuQ29tcGxldGUgdGhlIHByZS1wdWJsaXNoIGNoZWNrbGlzdC5cXG5SZXF1ZXN0IHJldmlldyBieSBzaGFyaW5nIHRoZSBicmFuY2ggd2l0aCA8dGVhbSBzbGFjayBjaGFubmVsIG9yIHBvaW50LW9mLWNvbnRhY3Q+XCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiQ2hlY2tsaXN0XCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJDb250cmlidXRpbmdcIiwgXCJDaGVja2xpc3RcIiwgXCI0KSBCdWlsZCBhIGNoZWNrbGlzdFxcblxcbldoYXQgY29uc2lkZXJhdGlvbnMgZG8geW91IGdvIHRocm91Z2ggYmVmb3JlIGRlY2lkaW5nIGlmIGEgY29tcG9uZW50IGlzIHJlYWR5IHRvIOKAnGdvIGxpdmXigJ0/IFRoZXNlIG1heSByZWZlciBiYWNrIHRvIHlvdXIgY29udmVudGlvbnMuXCIsIFwi4piR77iPICBEaWQgeW91IGRvIHRoaXM/XFxu4piR77iPICBEaWQgeW91IGRvIHRoYXQ/XFxu4piR77iPICBXaGF0IGFib3V0IHRoZSBvdGhlciB0aGluZz9cIikpO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gZnJhbWUxO1xuICAgIH0pO1xufVxuLy9UT0RPIEltcGxlbWVudCBhbiBpbnRlcmZhY2Ugc28gdGl0bGUgY2FuIGJlIG9tbWl0ZWQuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZUZyYW1lKGlkLCBzdXBlcnRpdGxlVGV4dCwgdGl0bGVUZXh0LCBpbnN0cnVjdGlvblRleHQsIGNvbnRlbnRUZXh0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50cyA9IGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuO1xuICAgICAgICBsZXQgbGFzdEFkZGVkID0gcGFnZUNvbnRlbnRzW3BhZ2VDb250ZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGZyYW1lMS5uYW1lID0gdGl0bGVUZXh0ID8gc3VwZXJ0aXRsZVRleHQuY29uY2F0KFwiL1wiLCB0aXRsZVRleHQpIDogc3VwZXJ0aXRsZVRleHQ7XG4gICAgICAgIGZyYW1lMS5yZXNpemUoMTkyMCwgMTA4MCk7XG4gICAgICAgIGZyYW1lMS55ID0gbGFzdEFkZGVkID8gbGFzdEFkZGVkLnkgKyAxMTgwIDogMDtcbiAgICAgICAgbGV0IGZvcm1hdCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKGlkKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgZnJhbWUxLmluc2VydENoaWxkKDAsIGZvcm1hdCk7XG4gICAgICAgIGxldCBzdXBlcnRpdGxlO1xuICAgICAgICBsZXQgdGl0bGU7XG4gICAgICAgIGxldCBjb250ZW50O1xuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICBjYXNlIFRFTVBMQVRFX0NPTlRFTlRTOlxuICAgICAgICAgICAgICAgIHN1cGVydGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUgPT0gXCJUYWJsZSBvZiBjb250ZW50c1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHN1cGVydGl0bGUsIHN1cGVydGl0bGVUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNlY3Rpb25zID0gZm9ybWF0LmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb25zXCIpO1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiBub2RlLnZpc2libGUgPSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRFTVBMQVRFX0JMT0NLUzpcbiAgICAgICAgICAgICAgICBzdXBlcnRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiU3VwZXJ0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHN1cGVydGl0bGUsIHN1cGVydGl0bGVUZXh0LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUuY2hhcmFjdGVycyA9PSBcIldoYXQgZWxzZSBkb2VzIGl0IHNvbHZlP1wiKTtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUgJiYgdGl0bGVUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNldFRleHQodGl0bGUsIHRpdGxlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBURU1QTEFURV9JTkZPOlxuICAgICAgICAgICAgICAgIHN1cGVydGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUgPT0gXCJIZWFkaW5nXCIgJiYgbm9kZS5jaGFyYWN0ZXJzID09IFwiU1VQRVJUSVRMRVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHN1cGVydGl0bGUsIHN1cGVydGl0bGVUZXh0LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUuY2hhcmFjdGVycyA9PSBcIkhlYWRpbmdcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICYmIHRpdGxlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHRpdGxlLCB0aXRsZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZW50ID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiQ29udGVudFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCAmJiBjb250ZW50VGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KGNvbnRlbnQsIGNvbnRlbnRUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuaW5zZXJ0Q2hpbGQoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4ubGVuZ3RoLCBmcmFtZTEpO1xuICAgICAgICBpZiAoaW5zdHJ1Y3Rpb25UZXh0KSB7XG4gICAgICAgICAgICBsZXQgc3RpY2tpZSA9IHlpZWxkICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiZDRkZjhiODg0ZGJlN2FjMTgyNjEyYjYxY2IyMDkxYjkyNDRiZGY2N1wiKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHN0aWNraWUueSA9IGZyYW1lMS55O1xuICAgICAgICAgICAgc3RpY2tpZS54ID0gZnJhbWUxLnggLSA0MCAtIDI3MjtcbiAgICAgICAgICAgIGxldCBub3RlID0gc3RpY2tpZS5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT09IFwiTm90ZVwiKTtcbiAgICAgICAgICAgIHlpZWxkIHNldFRleHQobm90ZSwgaW5zdHJ1Y3Rpb25UZXh0KTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmluc2VydENoaWxkKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLmxlbmd0aCwgc3RpY2tpZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZENvbnRlbnQodGFibGVGcmFtZSwgdGl0bGUsIHRhcmdldCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IHRhYmxlRnJhbWUuY2hpbGRyZW5bMF07XG4gICAgICAgIGxldCBzZWN0aW9ucyA9IHRhYmxlLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb25zXCIpO1xuICAgICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25zLmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLnZpc2libGUgPT0gZmFsc2UpO1xuICAgICAgICB5aWVsZCBzZXRUZXh0KHNlY3Rpb24sIHRpdGxlKTtcbiAgICAgICAgc2VjdGlvbi5oeXBlcmxpbmsgPSB7IHR5cGU6IFwiTk9ERVwiLCB2YWx1ZTogdGFyZ2V0LmlkIH07XG4gICAgICAgIHNlY3Rpb24udmlzaWJsZSA9IHRydWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXRUZXh0KG5vZGUsIHRleHQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpO1xuICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSB0ZXh0O1xuICAgICAgICAvLyBDaGVjayBpZiBpdCBzaG91bGQgYmUgYW4gb3JkZXJlZCBvciB1bm9yZGVyZWQgbGlzdC5cbiAgICAgICAgaWYgKHRleHQuc3RhcnRzV2l0aChcIjEuIFwiKSkge1xuICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gbm9kZS5jaGFyYWN0ZXJzLnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgIG5vZGUuc2V0UmFuZ2VMaXN0T3B0aW9ucygwLCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoLCB7IHR5cGU6IFwiT1JERVJFRFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRleHQuc3RhcnRzV2l0aChcIi0gXCIpKSB7XG4gICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSBub2RlLmNoYXJhY3RlcnMuc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgbm9kZS5zZXRSYW5nZUxpc3RPcHRpb25zKDAsIG5vZGUuY2hhcmFjdGVycy5sZW5ndGgsIHsgdHlwZTogXCJVTk9SREVSRURcIiB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGhlbWUodGhlbWVOYW1lLCBwcmltYXJ5Q29sb3IsIG1lc3NhZ2VDb2xvciwgYWN0aW9uQ29sb3IpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW5bMF07XG4gICAgICAgIC8vIFNldCBwYWdlIG5hbWVzIGFuZCByZW5hbWVzIHRoZSBkZWZhdWx0IFwiUGFnZSAxXCJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UubmFtZSA9IFwiMDAgT3ZlcnZpZXdcIjtcbiAgICAgICAgY3JlYXRlUGFnZShcIjAxIENvbG9yc1wiKTtcbiAgICAgICAgY3JlYXRlUGFnZShcIjAyIEljb25zXCIpO1xuICAgICAgICBjcmVhdGVQYWdlKFwiMDMgSW1hZ2VzXCIpO1xuICAgICAgICAvL0FkZCBhIHRodW1uYWlsIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgICAgICB5aWVsZCBjcmVhdGVUaHVtYm5haWwodGhlbWVOYW1lLCBcIlRoZW1lXCIpLnRoZW4oKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy9UT0RPIHNldCB0aHVtYm5haWwgQkcgdG8gcHJpbWFyeSBjb2xvclxuICAgICAgICB9KSk7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlblsxXTtcbiAgICAgICAgTElHSFRfQ09MT1JTX0NVU1RPTVswXS5maWxsLmNvbG9yID0gaGV4VG9SR0IocHJpbWFyeUNvbG9yKTtcbiAgICAgICAgTElHSFRfQ09MT1JTX0NVU1RPTVsxXS5maWxsLmNvbG9yID0gaGV4VG9SR0IobWVzc2FnZUNvbG9yKTtcbiAgICAgICAgTElHSFRfQ09MT1JTX0NVU1RPTVsyXS5maWxsLmNvbG9yID0gaGV4VG9SR0IoYWN0aW9uQ29sb3IpO1xuICAgICAgICBEQVJLX0NPTE9SU19DVVNUT01bMF0uZmlsbC5jb2xvciA9IGhleFRvUkdCKHByaW1hcnlDb2xvcik7XG4gICAgICAgIERBUktfQ09MT1JTX0NVU1RPTVsxXS5maWxsLmNvbG9yID0gaGV4VG9SR0IobWVzc2FnZUNvbG9yKTtcbiAgICAgICAgREFSS19DT0xPUlNfQ1VTVE9NWzJdLmZpbGwuY29sb3IgPSBoZXhUb1JHQihhY3Rpb25Db2xvcik7XG4gICAgICAgIHlpZWxkIGNyZWF0ZU1vZGUoXCJsaWdodFwiLCB0aGVtZU5hbWUsIHByaW1hcnlDb2xvciwgbWVzc2FnZUNvbG9yLCBhY3Rpb25Db2xvcik7XG4gICAgICAgIHlpZWxkIGNyZWF0ZU1vZGUoXCJkYXJrXCIsIHRoZW1lTmFtZSwgcHJpbWFyeUNvbG9yLCBtZXNzYWdlQ29sb3IsIGFjdGlvbkNvbG9yKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1vZGUobW9kZSwgdGhlbWVOYW1lLCBwcmltYXJ5Q29sb3IsIG1lc3NhZ2VDb2xvciwgYWN0aW9uQ29sb3IpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgbW9kZUZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgbW9kZUZyYW1lLm5hbWUgPSAobW9kZSA9PSBcImxpZ2h0XCIgPyBcIuKYgO+4j1wiIDogXCLimL1cIik7XG4gICAgICAgIG1vZGVGcmFtZS5maWxscyA9IFtdO1xuICAgICAgICBtb2RlRnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlLCBtb2RlRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIG1vZGVGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBtb2RlRnJhbWUuaXRlbVNwYWNpbmcgPSA2NDtcbiAgICAgICAgaWYgKG1vZGUgPT0gXCJkYXJrXCIpXG4gICAgICAgICAgICBtb2RlRnJhbWUueCA9IDIwODA7XG4gICAgICAgIGxldCB0aXRsZUluc3RhbmNlID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoQ09NUE9ORU5UX1RJVExFKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgeWllbGQgc2V0VGV4dCh0aXRsZUluc3RhbmNlLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb24gbmFtZVwiKSwgbW9kZSA9PSBcImxpZ2h0XCIgPyBcIkxpZ2h0IG1vZGVcIiA6IFwiRGFyayBtb2RlXCIpO1xuICAgICAgICB0aXRsZUluc3RhbmNlLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgIG1vZGVGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZUluc3RhbmNlKTtcbiAgICAgICAgbGV0IGNvbG9yc0ZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgY29sb3JzRnJhbWUubmFtZSA9IFwiQ29sb3JzXCI7XG4gICAgICAgIGNvbG9yc0ZyYW1lLmZpbGxzID0gKG1vZGUgPT0gXCJsaWdodFwiID8gW1dISVRFXSA6IFtCTEFDS10pO1xuICAgICAgICBjb2xvcnNGcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUsIGNvbG9yc0ZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBjb2xvcnNGcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIGNvbG9yc0ZyYW1lLnZlcnRpY2FsUGFkZGluZyA9IDEyMDtcbiAgICAgICAgY29sb3JzRnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSAxMjA7XG4gICAgICAgIGNvbG9yc0ZyYW1lLml0ZW1TcGFjaW5nID0gMTIwO1xuICAgICAgICBtb2RlRnJhbWUuYXBwZW5kQ2hpbGQoY29sb3JzRnJhbWUpO1xuICAgICAgICBsZXQgY3VzdG9taXphYmxlRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5uYW1lID0gXCJGaXhlZFwiO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5maWxscyA9IFtdO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUsIGN1c3RvbWl6YWJsZUZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5pdGVtU3BhY2luZyA9IDgwO1xuICAgICAgICBsZXQgYmxvY2tJbnN0YW5jZSA9IChtb2RlID09IFwibGlnaHRcIiA/ICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKENPTVBPTkVOVF9CTE9DSykpLmNyZWF0ZUluc3RhbmNlKCkgOiAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcIjUyYjQ3OTZhNjc5Y2IwZTYwNmJhODc4Zjk0ZDZlZjViNzI2MDMwMjhcIikpLmNyZWF0ZUluc3RhbmNlKCkpO1xuICAgICAgICB5aWVsZCBzZXRUZXh0KGJsb2NrSW5zdGFuY2UuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiU2VjdGlvbiBuYW1lXCIpLCBcIkN1c3RvbWl6YWJsZVwiKTtcbiAgICAgICAgYmxvY2tJbnN0YW5jZS5sYXlvdXRHcm93ID0gMDtcbiAgICAgICAgYmxvY2tJbnN0YW5jZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgIGJsb2NrSW5zdGFuY2UucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDgwMCwgYmxvY2tJbnN0YW5jZS5oZWlnaHQpO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5hcHBlbmRDaGlsZChibG9ja0luc3RhbmNlKTtcbiAgICAgICAgbGV0IGZpeGVkRnJhbWUgPSBjdXN0b21pemFibGVGcmFtZS5jbG9uZSgpO1xuICAgICAgICBjb2xvcnNGcmFtZS5hcHBlbmRDaGlsZChjdXN0b21pemFibGVGcmFtZSk7XG4gICAgICAgIGZpeGVkRnJhbWUubmFtZSA9IFwiRml4ZWRcIjtcbiAgICAgICAgZml4ZWRGcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUsIGZpeGVkRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGZpeGVkRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgZml4ZWRGcmFtZS5pdGVtU3BhY2luZyA9IDgwO1xuICAgICAgICB5aWVsZCBzZXRUZXh0KGZpeGVkRnJhbWUuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUgPT0gXCJTZWN0aW9uIG5hbWVcIiksIFwiRml4ZWRcIik7XG4gICAgICAgIGNvbG9yc0ZyYW1lLmFwcGVuZENoaWxkKGZpeGVkRnJhbWUpO1xuICAgICAgICBpZiAobW9kZSA9PSBcImxpZ2h0XCIpIHtcbiAgICAgICAgICAgIC8vVE9ETyBuZWVkIHRvIGluY2x1ZGUgZm9jdXMgc3RhdGUgY29sb3JzXG4gICAgICAgICAgICBMSUdIVF9DT0xPUlNfQ1VTVE9NLmZvckVhY2goY29sb3IgPT4gY3JlYXRlU3R5bGUodGhlbWVOYW1lLCBtb2RlLCBjb2xvci5uYW1lLCBjb2xvci5maWxsLCBjdXN0b21pemFibGVGcmFtZSkpO1xuICAgICAgICAgICAgTElHSFRfQ09MT1JTX0dFTkVSQVRFRC5mb3JFYWNoKGNvbG9yID0+IGNyZWF0ZVN0eWxlKHRoZW1lTmFtZSwgbW9kZSwgY29sb3IubmFtZSwgY29sb3IuZmlsbCwgZml4ZWRGcmFtZSkpO1xuICAgICAgICAgICAgdXBkYXRlR2VuZXJhdGVkQ29sb3JzKG1vZGUpO1xuICAgICAgICAgICAgTElHSFRfQ09MT1JTX0ZJWEVELmZvckVhY2goY29sb3IgPT4gY3JlYXRlU3R5bGUodGhlbWVOYW1lLCBtb2RlLCBjb2xvci5uYW1lLCBjb2xvci5maWxsLCBmaXhlZEZyYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBEQVJLX0NPTE9SU19DVVNUT00uZm9yRWFjaChjb2xvciA9PiBjcmVhdGVTdHlsZSh0aGVtZU5hbWUsIG1vZGUsIGNvbG9yLm5hbWUsIGNvbG9yLmZpbGwsIGN1c3RvbWl6YWJsZUZyYW1lKSk7XG4gICAgICAgICAgICBEQVJLX0NPTE9SU19HRU5FUkFURUQuZm9yRWFjaChjb2xvciA9PiBjcmVhdGVTdHlsZSh0aGVtZU5hbWUsIG1vZGUsIGNvbG9yLm5hbWUsIGNvbG9yLmZpbGwsIGZpeGVkRnJhbWUpKTtcbiAgICAgICAgICAgIHVwZGF0ZUdlbmVyYXRlZENvbG9ycyhtb2RlKTtcbiAgICAgICAgICAgIERBUktfQ09MT1JTX0ZJWEVELmZvckVhY2goY29sb3IgPT4gY3JlYXRlU3R5bGUodGhlbWVOYW1lLCBtb2RlLCBjb2xvci5uYW1lLCBjb2xvci5maWxsLCBmaXhlZEZyYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEucm9vdC5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChtb2RlRnJhbWUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlU3R5bGUodGhlbWVOYW1lLCBtb2RlLCBjb2xvck5hbWUsIGZpbGwsIGV4YW1wbGVUYXJnZXQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgbmV3U3R5bGUgPSBmaWdtYS5jcmVhdGVQYWludFN0eWxlKCk7XG4gICAgICAgIG5ld1N0eWxlLm5hbWUgPSB0aGVtZU5hbWUgKyBcIihcIiArIG1vZGUgKyBcIikvXCIgKyBjb2xvck5hbWU7XG4gICAgICAgIG5ld1N0eWxlLnNldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIiwgY29sb3JOYW1lKTtcbiAgICAgICAgbmV3U3R5bGUuc2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiLCBtb2RlKTtcbiAgICAgICAgbmV3U3R5bGUucGFpbnRzID0gW2ZpbGxdO1xuICAgICAgICBsZXQgZXhhbXBsZUZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZXhhbXBsZUZyYW1lLm5hbWUgPSBjb2xvck5hbWUgKyBcIiBleGFtcGxlXCI7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5maWxscyA9IFtdO1xuICAgICAgICBleGFtcGxlRnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgZXhhbXBsZUZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgZXhhbXBsZUZyYW1lLmNvdW50ZXJBeGlzQWxpZ25JdGVtcyA9IFwiQ0VOVEVSXCI7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5wYWRkaW5nTGVmdCA9IFBBRERJTkdfSDtcbiAgICAgICAgZXhhbXBsZUZyYW1lLml0ZW1TcGFjaW5nID0gU1BBQ0lORztcbiAgICAgICAgbGV0IHN3YXRjaEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgc3dhdGNoRnJhbWUuZmlsbHMgPSBbXTtcbiAgICAgICAgbGV0IGV4YW1wbGVDb2xvciA9IGZpZ21hLmNyZWF0ZUVsbGlwc2UoKTtcbiAgICAgICAgZXhhbXBsZUNvbG9yLnNldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIiwgY29sb3JOYW1lKTtcbiAgICAgICAgZXhhbXBsZUNvbG9yLmZpbGxTdHlsZUlkID0gbmV3U3R5bGUuaWQ7XG4gICAgICAgIHN3YXRjaEZyYW1lLmFwcGVuZENoaWxkKGV4YW1wbGVDb2xvcik7XG4gICAgICAgIC8vVE9ETyBtYXkgbmVlZCB0byBpbXBsZW1lbnQgYSByZWdleCB0byBleGx1ZGUgY29sb3JzIHRoYXQgY29pbmNpZGVudGFsbHkgc3RhcnQgd2l0aCB0aGVzZSBsZXR0ZXJzXG4gICAgICAgIGlmIChjb2xvck5hbWUuc3RhcnRzV2l0aChcIm9uXCIpKSB7XG4gICAgICAgICAgICBsZXQgZXhhbXBsZVRleHRDb2xvciA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIGV4YW1wbGVUZXh0Q29sb3IuZm9udE5hbWUgPSBGT05UX1RJVExFUztcbiAgICAgICAgICAgIGV4YW1wbGVUZXh0Q29sb3IuY2hhcmFjdGVycyA9IFwiVFwiO1xuICAgICAgICAgICAgZXhhbXBsZVRleHRDb2xvci5mb250U2l6ZSA9IDY0O1xuICAgICAgICAgICAgZXhhbXBsZVRleHRDb2xvci5maWxsU3R5bGVJZCA9IG5ld1N0eWxlLmlkO1xuICAgICAgICAgICAgbGV0IGV4YW1wbGVUZXh0Q29sb3JCYWNrZ3JvdW5kTmFtZSA9IGNvbG9yTmFtZS5jaGFyQXQoMikudG9Mb3dlckNhc2UoKSArIGNvbG9yTmFtZS5zbGljZSgzKTtcbiAgICAgICAgICAgIC8vVE9ETyBOdWxsIGNoZWNrIG5lZWRlZD9cbiAgICAgICAgICAgIGxldCBleGFtcGxlU3R5bGUgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIpID09IG1vZGUgJiYgc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiKSA9PSBleGFtcGxlVGV4dENvbG9yQmFja2dyb3VuZE5hbWUpO1xuICAgICAgICAgICAgZXhhbXBsZUNvbG9yLmZpbGxTdHlsZUlkID0gZXhhbXBsZVN0eWxlLmlkO1xuICAgICAgICAgICAgc3dhdGNoRnJhbWUuYXBwZW5kQ2hpbGQoZXhhbXBsZVRleHRDb2xvcik7XG4gICAgICAgICAgICBleGFtcGxlVGV4dENvbG9yLnggPSAzMC41O1xuICAgICAgICAgICAgZXhhbXBsZVRleHRDb2xvci55ID0gMTQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbG9yTmFtZS5zdGFydHNXaXRoKFwiYm9yZGVyXCIpKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlcjtcbiAgICAgICAgICAgIGxldCBleGFtcGxlQm9yZGVyQ29sb3JCYWNrZ3JvdW5kTmFtZSA9IGNvbG9yTmFtZS5jaGFyQXQoNikudG9Mb3dlckNhc2UoKSArIGNvbG9yTmFtZS5zbGljZSg3KTtcbiAgICAgICAgICAgIC8vVE9ETyBOdWxsIGNoZWNrIG5lZWRlZD9cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IGV4YW1wbGVCYWNrZ3JvdW5kU3R5bGUgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIpID09IG1vZGUgJiYgc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiKSA9PSBleGFtcGxlQm9yZGVyQ29sb3JCYWNrZ3JvdW5kTmFtZSk7XG4gICAgICAgICAgICAgICAgZXhhbXBsZUNvbG9yLnN0cm9rZVN0eWxlSWQgPSBuZXdTdHlsZS5pZDtcbiAgICAgICAgICAgICAgICBleGFtcGxlQ29sb3IuZmlsbFN0eWxlSWQgPSBleGFtcGxlQmFja2dyb3VuZFN0eWxlLmlkO1xuICAgICAgICAgICAgICAgIGV4YW1wbGVDb2xvci5zdHJva2VXZWlnaHQgPSA0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGV4YW1wbGVUZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBleGFtcGxlVGV4dC5mb250TmFtZSA9IEZPTlRfVElUTEVTO1xuICAgICAgICBleGFtcGxlVGV4dC5mb250U2l6ZSA9IDQ4O1xuICAgICAgICBleGFtcGxlVGV4dC5jaGFyYWN0ZXJzID0gY29sb3JOYW1lO1xuICAgICAgICBleGFtcGxlVGV4dC5maWxsU3R5bGVJZCA9IChtb2RlID09IFwibGlnaHRcIiA/IExJR0hUX1RFWFRfQ09MT1JfU1RZTEUuaWQgOiBEQVJLX1RFWFRfQ09MT1JfU1RZTEUuaWQpO1xuICAgICAgICBleGFtcGxlRnJhbWUuYXBwZW5kQ2hpbGQoc3dhdGNoRnJhbWUpO1xuICAgICAgICBleGFtcGxlRnJhbWUuYXBwZW5kQ2hpbGQoZXhhbXBsZVRleHQpO1xuICAgICAgICBleGFtcGxlVGFyZ2V0LmFwcGVuZENoaWxkKGV4YW1wbGVGcmFtZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiB1cGRhdGVHZW5lcmF0ZWRDb2xvcnMobW9kZSkge1xuICAgIGxldCBjdXJyZW50UHJpbWFyeUNvbG9yID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLmZpbmQoc3R5bGUgPT4gc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiKSA9PSBtb2RlICYmIHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIikgPT0gXCJwcmltYXJ5XCIpLnBhaW50c1swXS5jb2xvcjtcbiAgICBsZXQgY3VycmVudE1lc3NhZ2VDb2xvciA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwibWVzc2FnZVwiKS5wYWludHNbMF0uY29sb3I7XG4gICAgbGV0IGN1cnJlbnRBY3Rpb25Db2xvciA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwiYWN0aW9uXCIpLnBhaW50c1swXS5jb2xvcjtcbiAgICBsZXQgb25QcmltYXJ5U3R5bGUgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIpID09IG1vZGUgJiYgc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiKSA9PSBcIm9uUHJpbWFyeVwiKTtcbiAgICBvblByaW1hcnlTdHlsZS5wYWludHMgPSBbbWl4UGFpbnQoZ2V0QWNjZXNzaWJsZVRleHRDb2xvcihjdXJyZW50UHJpbWFyeUNvbG9yKSldO1xuICAgIGxldCBvbk1lc3NhZ2VTdHlsZSA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwib25NZXNzYWdlXCIpO1xuICAgIG9uTWVzc2FnZVN0eWxlLnBhaW50cyA9IFttaXhQYWludChnZXRBY2Nlc3NpYmxlVGV4dENvbG9yKGN1cnJlbnRNZXNzYWdlQ29sb3IpKV07XG4gICAgbGV0IG9uQWN0aW9uU3R5bGUgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIpID09IG1vZGUgJiYgc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiKSA9PSBcIm9uQWN0aW9uXCIpO1xuICAgIG9uQWN0aW9uU3R5bGUucGFpbnRzID0gW21peFBhaW50KGdldEFjY2Vzc2libGVUZXh0Q29sb3IoY3VycmVudEFjdGlvbkNvbG9yKSldO1xuICAgIGxldCBbYWN0aW9uRm9yZWdyb3VuZENvbG9yLCBhY3Rpb25CYWNrZ3JvdW5kQ29sb3JdID0gZ2V0QWNjZXNzaWJsZUZvcmVncm91bmRBbmRCYWNrZ3JvdW5kQ29sb3JzKGN1cnJlbnRBY3Rpb25Db2xvciwgbW9kZSk7XG4gICAgbGV0IGFjdGlvbkZvcmVncm91bmRTdHlsZSA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwib25BY3Rpb25CYWNrZ3JvdW5kXCIpO1xuICAgIGFjdGlvbkZvcmVncm91bmRTdHlsZS5wYWludHMgPSBbbWl4UGFpbnQoYWN0aW9uRm9yZWdyb3VuZENvbG9yKV07XG4gICAgbGV0IGFjdGlvbkJhY2tncm91bmRTdHlsZSA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwiYWN0aW9uQmFja2dyb3VuZFwiKTtcbiAgICBhY3Rpb25CYWNrZ3JvdW5kU3R5bGUucGFpbnRzID0gW21peFBhaW50KGFjdGlvbkJhY2tncm91bmRDb2xvcildO1xufVxuZnVuY3Rpb24gbG9hZFJlc291cmNlcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBOZWVkIHRvIGxvYWQgYSBmb250IGhlcmUgdG8gZ2VuZXJhdGUgdGhlIG90aGVyIHBhZ2UgZXhhbXBsZXMuXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoRk9OVF9USVRMRVMpO1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKEZPTlRfQk9ESUVTKTtcbiAgICAgICAgTElHSFRfVEVYVF9DT0xPUl9TVFlMRSA9IHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcImYyMDcyMzM4MzNhZWE2MmUyZjAxNjNiYjRiNmM2ZWQ2MDI0NTliYTFcIik7XG4gICAgICAgIERBUktfVEVYVF9DT0xPUl9TVFlMRSA9IHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcIjU2MzhlNDNjODI2MTNjN2YxNWM2MGUzZThlOTQ5NmMxNzc2M2FlNDlcIik7XG4gICAgfSk7XG59XG4vLyB+fn5+fn5IZWxwZXIgRnVuY3Rpb25zfn5+fn5+fn5+fn4gLy9cbmZ1bmN0aW9uIFJHQlRvSFNMKHJnYikge1xuICAgIGxldCByID0gcmdiLnI7XG4gICAgbGV0IGcgPSByZ2IuZztcbiAgICBsZXQgYiA9IHJnYi5iO1xuICAgIC8vIEZpbmQgZ3JlYXRlc3QgYW5kIHNtYWxsZXN0IGNoYW5uZWwgdmFsdWVzXG4gICAgbGV0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSwgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpLCBkZWx0YSA9IGNtYXggLSBjbWluLCBoID0gMCwgcyA9IDAsIGwgPSAwO1xuICAgIC8vIENhbGN1bGF0ZSBodWVcbiAgICAvLyBObyBkaWZmZXJlbmNlXG4gICAgaWYgKGRlbHRhID09IDApXG4gICAgICAgIGggPSAwO1xuICAgIC8vIFJlZCBpcyBtYXhcbiAgICBlbHNlIGlmIChjbWF4ID09IHIpXG4gICAgICAgIGggPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgLy8gR3JlZW4gaXMgbWF4XG4gICAgZWxzZSBpZiAoY21heCA9PSBnKVxuICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAvLyBCbHVlIGlzIG1heFxuICAgIGVsc2VcbiAgICAgICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcbiAgICAvLyBNYWtlIG5lZ2F0aXZlIGh1ZXMgcG9zaXRpdmUgYmVoaW5kIDM2MMKwXG4gICAgaWYgKGggPCAwKVxuICAgICAgICBoICs9IDM2MDtcbiAgICAvLyBDYWxjdWxhdGUgbGlnaHRuZXNzXG4gICAgbCA9IChjbWF4ICsgY21pbikgLyAyO1xuICAgIC8vIENhbGN1bGF0ZSBzYXR1cmF0aW9uXG4gICAgcyA9IGRlbHRhID09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xuICAgIC8vIE11bHRpcGx5IGwgYW5kIHMgYnkgMTAwXG4gICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICBsID0gKyhsICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiB7IGh1ZTogaCwgc2F0dXJhdGlvbjogcywgbGlnaHRuZXNzOiBsIH07XG59XG5mdW5jdGlvbiBIU0xUb1JHQihoc2wpIHtcbiAgICBsZXQgaCA9IGhzbC5odWU7XG4gICAgbGV0IHMgPSBoc2wuc2F0dXJhdGlvbjtcbiAgICBsZXQgbCA9IGhzbC5saWdodG5lc3M7XG4gICAgLy8gTXVzdCBiZSBmcmFjdGlvbnMgb2YgMVxuICAgIHMgLz0gMTAwO1xuICAgIGwgLz0gMTAwO1xuICAgIGxldCBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHMsIHggPSBjICogKDEgLSBNYXRoLmFicygoaCAvIDYwKSAlIDIgLSAxKSksIG0gPSBsIC0gYyAvIDIsIHIgPSAwLCBnID0gMCwgYiA9IDA7XG4gICAgaWYgKDAgPD0gaCAmJiBoIDwgNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGcgPSB4O1xuICAgICAgICBiID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoNjAgPD0gaCAmJiBoIDwgMTIwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBnID0gYztcbiAgICAgICAgYiA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKDEyMCA8PSBoICYmIGggPCAxODApIHtcbiAgICAgICAgciA9IDA7XG4gICAgICAgIGcgPSBjO1xuICAgICAgICBiID0geDtcbiAgICB9XG4gICAgZWxzZSBpZiAoMTgwIDw9IGggJiYgaCA8IDI0MCkge1xuICAgICAgICByID0gMDtcbiAgICAgICAgZyA9IHg7XG4gICAgICAgIGIgPSBjO1xuICAgIH1cbiAgICBlbHNlIGlmICgyNDAgPD0gaCAmJiBoIDwgMzAwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBnID0gMDtcbiAgICAgICAgYiA9IGM7XG4gICAgfVxuICAgIGVsc2UgaWYgKDMwMCA8PSBoICYmIGggPCAzNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGcgPSAwO1xuICAgICAgICBiID0geDtcbiAgICB9XG4gICAgciA9IE1hdGgubWF4KHIgKyBtLCAwKTtcbiAgICBnID0gTWF0aC5tYXgoZyArIG0sIDApO1xuICAgIGIgPSBNYXRoLm1heChiICsgbSwgMCk7XG4gICAgcmV0dXJuIHsgcjogciwgZzogZywgYjogYiB9O1xufVxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4KSB7XG4gICAgaGV4ID0gaGV4LnJlcGxhY2UoL14jLywgJycpO1xuICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGhleCA9IGhleFswXSArIGhleFswXSArIGhleFsxXSArIGhleFsxXSArIGhleFsyXSArIGhleFsyXTtcbiAgICB9XG4gICAgY29uc3QgbnVtYmVyID0gTnVtYmVyLnBhcnNlSW50KGhleCwgMTYpO1xuICAgIGNvbnN0IHJlZCA9IG51bWJlciA+PiAxNjtcbiAgICBjb25zdCBncmVlbiA9IChudW1iZXIgPj4gOCkgJiAyNTU7XG4gICAgY29uc3QgYmx1ZSA9IG51bWJlciAmIDI1NTtcbiAgICByZXR1cm4geyByOiByZWQgLyAyNTYsIGc6IGdyZWVuIC8gMjU2LCBiOiBibHVlIC8gMjU2IH07XG59XG5mdW5jdGlvbiBnZXRBY2Nlc3NpYmxlVGV4dENvbG9yKGJhY2tncm91bmRDb2xvcikge1xuICAgIGxldCB0ZXN0SFNMID0gaHNsKDM2MCwgMSwgMSk7XG4gICAgbGV0IGJhY2tncm91bmRIZXggPSByZ2IoTWF0aC5yb3VuZChiYWNrZ3JvdW5kQ29sb3IuciAqIDI1NSksIE1hdGgucm91bmQoYmFja2dyb3VuZENvbG9yLmcgKiAyNTUpLCBNYXRoLnJvdW5kKGJhY2tncm91bmRDb2xvci5iICogMjU1KSk7XG4gICAgbGV0IGJhY2tncm91bmRIU0wgPSBSR0JUb0hTTChiYWNrZ3JvdW5kQ29sb3IpO1xuICAgIGxldCBzdWdnZXN0ZWREYXJrQ29sb3IgPSBoc2woeyBodWU6IGJhY2tncm91bmRIU0wuaHVlLCBzYXR1cmF0aW9uOiBNYXRoLm1pbihiYWNrZ3JvdW5kSFNMLnNhdHVyYXRpb24sIDMwKSAvIDEwMCwgbGlnaHRuZXNzOiBNYXRoLm1pbihiYWNrZ3JvdW5kSFNMLmxpZ2h0bmVzcywgMjApIC8gMTAwIH0pO1xuICAgIGxldCBmb3JlZ3JvdW5kSGV4ID0gcmVhZGFibGVDb2xvcihiYWNrZ3JvdW5kSGV4LCBzdWdnZXN0ZWREYXJrQ29sb3IsIFwiI2ZmZlwiLCB0cnVlKTtcbiAgICBsZXQgZm9yZWdyb3VuZENvbG9yID0gaGV4VG9SR0IoZm9yZWdyb3VuZEhleCk7XG4gICAgcmV0dXJuIGZvcmVncm91bmRDb2xvcjtcbn1cbmZ1bmN0aW9uIGdldEFjY2Vzc2libGVGb3JlZ3JvdW5kQW5kQmFja2dyb3VuZENvbG9ycyhzb3VyY2VDb2xvciwgbW9kZSkge1xuICAgIGxldCBzb3VyY0NvbG9ySFNMID0gUkdCVG9IU0woc291cmNlQ29sb3IpO1xuICAgIGxldCBmb3JlZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRDb2xvcjtcbiAgICBpZiAobW9kZSA9PSAnbGlnaHQnKSB7IC8vQ2FsY3VsYXRlIGxpZ2h0IG1vZGUgdmFsdWVzLlxuICAgICAgICBmb3JlZ3JvdW5kQ29sb3IgPSBIU0xUb1JHQih7XG4gICAgICAgICAgICBodWU6IHNvdXJjQ29sb3JIU0wuaHVlLFxuICAgICAgICAgICAgc2F0dXJhdGlvbjogc291cmNDb2xvckhTTC5zYXR1cmF0aW9uLFxuICAgICAgICAgICAgbGlnaHRuZXNzOiBNYXRoLm1pbihzb3VyY0NvbG9ySFNMLmxpZ2h0bmVzcywgMjUpXG4gICAgICAgIH0pO1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBIU0xUb1JHQih7XG4gICAgICAgICAgICBodWU6IHNvdXJjQ29sb3JIU0wuaHVlLFxuICAgICAgICAgICAgc2F0dXJhdGlvbjogc291cmNDb2xvckhTTC5zYXR1cmF0aW9uLFxuICAgICAgICAgICAgbGlnaHRuZXNzOiBNYXRoLm1heChzb3VyY0NvbG9ySFNMLmxpZ2h0bmVzcywgOTUpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy9DYWxjdWxhdGUgZGFyayBtb2RlIHZhbHVlcy5cbiAgICAgICAgZm9yZWdyb3VuZENvbG9yID0gSFNMVG9SR0Ioe1xuICAgICAgICAgICAgaHVlOiBzb3VyY0NvbG9ySFNMLmh1ZSxcbiAgICAgICAgICAgIHNhdHVyYXRpb246IHNvdXJjQ29sb3JIU0wuc2F0dXJhdGlvbixcbiAgICAgICAgICAgIGxpZ2h0bmVzczogTWF0aC5tYXgoc291cmNDb2xvckhTTC5saWdodG5lc3MsIDg1KVxuICAgICAgICB9KTtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yID0gSFNMVG9SR0Ioe1xuICAgICAgICAgICAgaHVlOiBzb3VyY0NvbG9ySFNMLmh1ZSxcbiAgICAgICAgICAgIHNhdHVyYXRpb246IE1hdGgubWluKHNvdXJjQ29sb3JIU0wuc2F0dXJhdGlvbiwgMzApLFxuICAgICAgICAgICAgbGlnaHRuZXNzOiBNYXRoLm1pbihzb3VyY0NvbG9ySFNMLmxpZ2h0bmVzcywgMjApXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gW2ZvcmVncm91bmRDb2xvciwgYmFja2dyb3VuZENvbG9yXTtcbn1cbmZ1bmN0aW9uIG1peFBhaW50KGNvbG9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgXCJjb2xvclwiOiBjb2xvclxuICAgIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9