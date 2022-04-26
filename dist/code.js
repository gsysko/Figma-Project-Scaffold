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
//Font styles
const WEB_XXXLARGE = "95e94ac41a8cc79d097111a8785d3b5976c70f99";
const PADDING_H = 40;
const PADDING_V = 40;
const SPACING = 24;
const FONT_TITLES = { family: "Menlo", style: "Regular" };
const FONT_BODIES = { family: "SF Pro Text", style: "Regular" };
const COMPONENT_TITLE = "dcc85144737cc8736a780b6e428a146ae4560606";
const COMPONENT_BLOCK = "59a17c300d40d952e4025d551ef25f906d92f437";
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
        name: "actionForeground",
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
        name: "actionForeground",
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
figma.showUI(__html__);
figma.ui.resize(400, 330);
if (figma.root.getPluginData("status") == "run") {
    //TODO evaluate if there is some way to reconfigure the pages after initial setup.
    figma.ui.resize(400, 136);
    figma.ui.postMessage("about");
}
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    yield loadResources();
    switch (msg.type) {
        case "resize":
            figma.ui.resize(400, msg.height);
            break;
        case "create-project":
            figma.ui.hide();
            yield createProject(msg.projectTitle, msg.projectType, msg.projectDescription);
            figma.root.setRelaunchData({ about: "This document was formated with Ztart" });
            figma.root.setPluginData("status", "run");
            break;
        case "create-theme":
            figma.ui.hide();
            yield createTheme(msg.themeName, msg.primaryColor, msg.messageColor, msg.actionColor);
            figma.root.setRelaunchData({ update: "Update theme colors" });
            figma.root.setPluginData("status", "run");
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
            building_block_area.verticalPadding = 40;
            building_block_area.horizontalPadding = 40;
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
        modeFrame.primaryAxisSizingMode = "AUTO";
        modeFrame.counterAxisSizingMode = "AUTO";
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
        colorsFrame.primaryAxisSizingMode = "AUTO";
        colorsFrame.counterAxisSizingMode = "AUTO";
        colorsFrame.layoutMode = "HORIZONTAL";
        colorsFrame.verticalPadding = 120;
        colorsFrame.horizontalPadding = 120;
        colorsFrame.itemSpacing = 120;
        modeFrame.appendChild(colorsFrame);
        let customizableFrame = figma.createFrame();
        customizableFrame.name = "Fixed";
        customizableFrame.fills = [];
        customizableFrame.primaryAxisSizingMode = "AUTO";
        customizableFrame.counterAxisSizingMode = "AUTO";
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
        fixedFrame.primaryAxisSizingMode = "AUTO";
        fixedFrame.counterAxisSizingMode = "AUTO";
        fixedFrame.layoutMode = "VERTICAL";
        fixedFrame.itemSpacing = 80;
        yield setText(fixedFrame.findOne(node => node.type == "TEXT" && node.name == "Section name"), "Fixed");
        colorsFrame.appendChild(fixedFrame);
        if (mode == "light") {
            LIGHT_COLORS_CUSTOM.forEach(color => createStyle(themeName, "light", color.name, color.fill, customizableFrame));
            LIGHT_COLORS_GENERATED.forEach(color => createStyle(themeName, "light", color.name, color.fill, fixedFrame));
            updateGeneratedColors("light");
            LIGHT_COLORS_FIXED.forEach(color => createStyle(themeName, "light", color.name, color.fill, fixedFrame));
        }
        else {
            DARK_COLORS_CUSTOM.forEach(color => createStyle(themeName, "dark", color.name, color.fill, customizableFrame));
            DARK_COLORS_GENERATED.forEach(color => createStyle(themeName, "dark", color.name, color.fill, fixedFrame));
            updateGeneratedColors("dark");
            DARK_COLORS_FIXED.forEach(color => createStyle(themeName, "dark", color.name, color.fill, fixedFrame));
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
        exampleFrame.paddingLeft = 40;
        exampleFrame.itemSpacing = 32;
        let exampleSwatch = figma.createEllipse();
        exampleSwatch.setPluginData("colorName", colorName);
        exampleSwatch.fillStyleId = newStyle.id;
        let exampleText = figma.createText();
        exampleText.fontName = FONT_TITLES;
        exampleText.fontSize = 48;
        exampleText.characters = colorName;
        exampleText.fillStyleId = (mode == "light" ? LIGHT_TEXT_COLOR_STYLE.id : DARK_TEXT_COLOR_STYLE.id);
        exampleFrame.appendChild(exampleSwatch);
        exampleFrame.appendChild(exampleText);
        exampleTarget.appendChild(exampleFrame);
    });
}
function updateGeneratedColors(mode) {
    let currentPrimaryColor = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "primary").paints[0].color;
    let currentMessageColor = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "message").paints[0].color;
    let currentActionColor = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "action").paints[0].color;
    let onPrimaryStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onPrimary");
    let onPrimaryPaint = {
        "type": SOLID,
        "visible": true,
        "opacity": 1,
        "blendMode": NORMAL,
        "color": getReadableColor(currentPrimaryColor)
    };
    onPrimaryStyle.paints = [onPrimaryPaint];
    let onMessageStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onMessage");
    let onMessagePaint = {
        "type": SOLID,
        "visible": true,
        "opacity": 1,
        "blendMode": NORMAL,
        "color": getReadableColor(currentMessageColor)
    };
    onMessageStyle.paints = [onMessagePaint];
    let onActionStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "onAction");
    let onActionPaint = {
        "type": SOLID,
        "visible": true,
        "opacity": 1,
        "blendMode": NORMAL,
        "color": getReadableColor(currentActionColor)
    };
    onActionStyle.paints = [onMessagePaint];
    let currentActionForegroundStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "actionForeground");
    let currentActionBackgroundStyle = figma.getLocalPaintStyles().find(style => style.getPluginData("colorMode") == mode && style.getPluginData("colorName") == "actionBackground");
    console.log(currentPrimaryColor);
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
    r = r + m;
    g = g + m;
    b = b + m;
    return { r: r, g: g, b: b };
}
function hexToRGB(hex) {
    let r, g, b;
    hex = hex.replace(/^#/, '');
    const number = Number.parseInt(hex, 16);
    const red = number >> 16;
    const green = (number >> 8) & 255;
    const blue = number & 255;
    return { r: red / 256, g: green / 256, b: blue / 256 };
}
function getReadableColor(backgroundColor) {
    debugger;
    let backgroundHex = Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(Math.round(backgroundColor.r * 255), Math.round(backgroundColor.g * 255), Math.round(backgroundColor.b * 255));
    let foregroundHex = Object(polished__WEBPACK_IMPORTED_MODULE_0__["readableColor"])(backgroundHex);
    let foregroundColor = hexToRGB(foregroundHex);
    return foregroundColor;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvZGlzdC9wb2xpc2hlZC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltd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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUM0QjtBQUNoQjtBQUNJO0FBQ3NCOztBQUVoRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFdBQVc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpR0FBaUcsYUFBYTtBQUM5RztBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YscUdBQTJCO0FBQ2pIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRkFBa0YscUdBQTJCO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGtCQUFrQixrRkFBUTtBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUcsS0FBSztBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0ZBQXNGO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFVBQVUsc0ZBQXNGO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGtGQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLEVBQUU7QUFDaEMsa0NBQWtDLEVBQUU7QUFDcEMscUNBQXFDLEVBQUU7QUFDdkMseUNBQXlDLEVBQUU7QUFDM0MsNkJBQTZCLElBQUksaUJBQWlCLElBQUksaUJBQWlCLElBQUk7QUFDM0Usb0NBQW9DLElBQUksaUJBQWlCLElBQUksaUJBQWlCLElBQUk7QUFDbEYsNkJBQTZCLElBQUksbUNBQW1DLElBQUksNEJBQTRCLElBQUk7QUFDeEcsb0NBQW9DLElBQUksbUNBQW1DLElBQUksNEJBQTRCLElBQUk7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBLGdCQUFnQiw4Q0FBOEM7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3Q0FBd0M7QUFDeEQ7QUFDQSxnQkFBZ0IsdURBQXVEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBNkM7QUFDbkU7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsaURBQWlEO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0NBQWdDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLDhFQUE4RSx5QkFBeUIsRUFBRTtBQUMxSTtBQUNBO0FBQ0E7QUFDQSxtRkFBbUYsNENBQTRDLEVBQUU7QUFDakk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsa0JBQWtCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxvQkFBb0I7QUFDckY7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFHO0FBQzNCLHdCQUF3Qiw4REFBYTtBQUNyQztBQUNBO0FBQ0EiLCJmaWxlIjoiY29kZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2NvZGUudHNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCBmcm9tIFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbihmbikge1xuICByZXR1cm4gRnVuY3Rpb24udG9TdHJpbmcuY2FsbChmbikuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIikgIT09IC0xO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShzdHJpbmdzLCByYXcpIHtcbiAgaWYgKCFyYXcpIHtcbiAgICByYXcgPSBzdHJpbmdzLnNsaWNlKDApO1xuICB9XG5cbiAgc3RyaW5ncy5yYXcgPSByYXc7XG4gIHJldHVybiBzdHJpbmdzO1xufSIsImltcG9ydCBnZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9nZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5pbXBvcnQgaXNOYXRpdmVGdW5jdGlvbiBmcm9tIFwiLi9pc05hdGl2ZUZ1bmN0aW9uLmpzXCI7XG5pbXBvcnQgY29uc3RydWN0IGZyb20gXCIuL2NvbnN0cnVjdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFpc05hdGl2ZUZ1bmN0aW9uKENsYXNzKSkgcmV0dXJuIENsYXNzO1xuXG4gICAgaWYgKHR5cGVvZiBDbGFzcyAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBfY2FjaGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGlmIChfY2FjaGUuaGFzKENsYXNzKSkgcmV0dXJuIF9jYWNoZS5nZXQoQ2xhc3MpO1xuXG4gICAgICBfY2FjaGUuc2V0KENsYXNzLCBXcmFwcGVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBXcmFwcGVyKCkge1xuICAgICAgcmV0dXJuIGNvbnN0cnVjdChDbGFzcywgYXJndW1lbnRzLCBnZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNldFByb3RvdHlwZU9mKFdyYXBwZXIsIENsYXNzKTtcbiAgfTtcblxuICByZXR1cm4gX3dyYXBOYXRpdmVTdXBlcihDbGFzcyk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBfd3JhcE5hdGl2ZVN1cGVyIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlcic7XG5pbXBvcnQgX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlJztcblxuZnVuY3Rpb24gbGFzdCgpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoIC0gMSwgX3JlZiA8IDAgfHwgYXJndW1lbnRzLmxlbmd0aCA8PSBfcmVmID8gdW5kZWZpbmVkIDogYXJndW1lbnRzW19yZWZdO1xufVxuXG5mdW5jdGlvbiBuZWdhdGlvbihhKSB7XG4gIHJldHVybiAtYTtcbn1cblxuZnVuY3Rpb24gYWRkaXRpb24oYSwgYikge1xuICByZXR1cm4gYSArIGI7XG59XG5cbmZ1bmN0aW9uIHN1YnRyYWN0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgLSBiO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBsaWNhdGlvbihhLCBiKSB7XG4gIHJldHVybiBhICogYjtcbn1cblxuZnVuY3Rpb24gZGl2aXNpb24oYSwgYikge1xuICByZXR1cm4gYSAvIGI7XG59XG5cbmZ1bmN0aW9uIG1heCgpIHtcbiAgcmV0dXJuIE1hdGgubWF4LmFwcGx5KE1hdGgsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG1pbigpIHtcbiAgcmV0dXJuIE1hdGgubWluLmFwcGx5KE1hdGgsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNvbW1hKCkge1xuICByZXR1cm4gQXJyYXkub2YuYXBwbHkoQXJyYXksIGFyZ3VtZW50cyk7XG59XG5cbnZhciBkZWZhdWx0U3ltYm9scyA9IHtcbiAgc3ltYm9sczoge1xuICAgICcqJzoge1xuICAgICAgaW5maXg6IHtcbiAgICAgICAgc3ltYm9sOiAnKicsXG4gICAgICAgIGY6IG11bHRpcGxpY2F0aW9uLFxuICAgICAgICBub3RhdGlvbjogJ2luZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogNCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAyXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnKicsXG4gICAgICByZWdTeW1ib2w6ICdcXFxcKidcbiAgICB9LFxuICAgICcvJzoge1xuICAgICAgaW5maXg6IHtcbiAgICAgICAgc3ltYm9sOiAnLycsXG4gICAgICAgIGY6IGRpdmlzaW9uLFxuICAgICAgICBub3RhdGlvbjogJ2luZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogNCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAyXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnLycsXG4gICAgICByZWdTeW1ib2w6ICcvJ1xuICAgIH0sXG4gICAgJysnOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICcrJyxcbiAgICAgICAgZjogYWRkaXRpb24sXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAyLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBwcmVmaXg6IHtcbiAgICAgICAgc3ltYm9sOiAnKycsXG4gICAgICAgIGY6IGxhc3QsXG4gICAgICAgIG5vdGF0aW9uOiAncHJlZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMyxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnKycsXG4gICAgICByZWdTeW1ib2w6ICdcXFxcKydcbiAgICB9LFxuICAgICctJzoge1xuICAgICAgaW5maXg6IHtcbiAgICAgICAgc3ltYm9sOiAnLScsXG4gICAgICAgIGY6IHN1YnRyYWN0aW9uLFxuICAgICAgICBub3RhdGlvbjogJ2luZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMixcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAyXG4gICAgICB9LFxuICAgICAgcHJlZml4OiB7XG4gICAgICAgIHN5bWJvbDogJy0nLFxuICAgICAgICBmOiBuZWdhdGlvbixcbiAgICAgICAgbm90YXRpb246ICdwcmVmaXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAzLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICctJyxcbiAgICAgIHJlZ1N5bWJvbDogJy0nXG4gICAgfSxcbiAgICAnLCc6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJywnLFxuICAgICAgICBmOiBjb21tYSxcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDEsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJywnLFxuICAgICAgcmVnU3ltYm9sOiAnLCdcbiAgICB9LFxuICAgICcoJzoge1xuICAgICAgcHJlZml4OiB7XG4gICAgICAgIHN5bWJvbDogJygnLFxuICAgICAgICBmOiBsYXN0LFxuICAgICAgICBub3RhdGlvbjogJ3ByZWZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDAsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJygnLFxuICAgICAgcmVnU3ltYm9sOiAnXFxcXCgnXG4gICAgfSxcbiAgICAnKSc6IHtcbiAgICAgIHBvc3RmaXg6IHtcbiAgICAgICAgc3ltYm9sOiAnKScsXG4gICAgICAgIGY6IHVuZGVmaW5lZCxcbiAgICAgICAgbm90YXRpb246ICdwb3N0Zml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMCxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnKScsXG4gICAgICByZWdTeW1ib2w6ICdcXFxcKSdcbiAgICB9LFxuICAgIG1pbjoge1xuICAgICAgZnVuYzoge1xuICAgICAgICBzeW1ib2w6ICdtaW4nLFxuICAgICAgICBmOiBtaW4sXG4gICAgICAgIG5vdGF0aW9uOiAnZnVuYycsXG4gICAgICAgIHByZWNlZGVuY2U6IDAsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJ21pbicsXG4gICAgICByZWdTeW1ib2w6ICdtaW5cXFxcYidcbiAgICB9LFxuICAgIG1heDoge1xuICAgICAgZnVuYzoge1xuICAgICAgICBzeW1ib2w6ICdtYXgnLFxuICAgICAgICBmOiBtYXgsXG4gICAgICAgIG5vdGF0aW9uOiAnZnVuYycsXG4gICAgICAgIHByZWNlZGVuY2U6IDAsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJ21heCcsXG4gICAgICByZWdTeW1ib2w6ICdtYXhcXFxcYidcbiAgICB9XG4gIH1cbn07XG52YXIgZGVmYXVsdFN5bWJvbE1hcCA9IGRlZmF1bHRTeW1ib2xzO1xuXG4vLyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vc3R5bGVkLWNvbXBvbmVudHMvc3R5bGVkLWNvbXBvbmVudHMvYmxvYi9mY2Y2ZjM4MDRjNTdhMTRkZDc5ODRkZmFiN2JjMDZlZTJlZGNhMDQ0L3NyYy91dGlscy9lcnJvci5qc1xuXG4vKipcbiAqIFBhcnNlIGVycm9ycy5tZCBhbmQgdHVybiBpdCBpbnRvIGEgc2ltcGxlIGhhc2ggb2YgY29kZTogbWVzc2FnZVxuICogQHByaXZhdGVcbiAqL1xudmFyIEVSUk9SUyA9IHtcbiAgXCIxXCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIGhzbCwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIGhzbCgzNjAsIDAuNzUsIDAuNCkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgaHVlOiAyNTUsIHNhdHVyYXRpb246IDAuNCwgbGlnaHRuZXNzOiAwLjc1IH0pLlxcblxcblwiLFxuICBcIjJcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gaHNsYSwgcGxlYXNlIHBhc3MgbXVsdGlwbGUgbnVtYmVycyBlLmcuIGhzbGEoMzYwLCAwLjc1LCAwLjQsIDAuNykgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgaHVlOiAyNTUsIHNhdHVyYXRpb246IDAuNCwgbGlnaHRuZXNzOiAwLjc1LCBhbHBoYTogMC43IH0pLlxcblxcblwiLFxuICBcIjNcIjogXCJQYXNzZWQgYW4gaW5jb3JyZWN0IGFyZ3VtZW50IHRvIGEgY29sb3IgZnVuY3Rpb24sIHBsZWFzZSBwYXNzIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgY29sb3IuXFxuXFxuXCIsXG4gIFwiNFwiOiBcIkNvdWxkbid0IGdlbmVyYXRlIHZhbGlkIHJnYiBzdHJpbmcgZnJvbSAlcywgaXQgcmV0dXJuZWQgJXMuXFxuXFxuXCIsXG4gIFwiNVwiOiBcIkNvdWxkbid0IHBhcnNlIHRoZSBjb2xvciBzdHJpbmcuIFBsZWFzZSBwcm92aWRlIHRoZSBjb2xvciBhcyBhIHN0cmluZyBpbiBoZXgsIHJnYiwgcmdiYSwgaHNsIG9yIGhzbGEgbm90YXRpb24uXFxuXFxuXCIsXG4gIFwiNlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byByZ2IsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiByZ2IoMjU1LCAyMDUsIDEwMCkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KS5cXG5cXG5cIixcbiAgXCI3XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIHJnYmEsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiByZ2IoMjU1LCAyMDUsIDEwMCwgMC43NSkgb3IgYW4gb2JqZWN0IGUuZy4gcmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzUgfSkuXFxuXFxuXCIsXG4gIFwiOFwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgUmdiQ29sb3IsIFJnYmFDb2xvciwgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI5XCI6IFwiUGxlYXNlIHByb3ZpZGUgYSBudW1iZXIgb2Ygc3RlcHMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIuXFxuXFxuXCIsXG4gIFwiMTBcIjogXCJQbGVhc2UgcGFzcyBhIG51bWJlciBvciBvbmUgb2YgdGhlIHByZWRlZmluZWQgc2NhbGVzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyIGFzIHRoZSByYXRpby5cXG5cXG5cIixcbiAgXCIxMVwiOiBcIkludmFsaWQgdmFsdWUgcGFzc2VkIGFzIGJhc2UgdG8gbW9kdWxhclNjYWxlLCBleHBlY3RlZCBudW1iZXIgb3IgZW0gc3RyaW5nIGJ1dCBnb3QgXFxcIiVzXFxcIlxcblxcblwiLFxuICBcIjEyXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAlcygpLCBnb3QgXFxcIiVzXFxcIiBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjEzXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJXMoKSwgZ290IFxcXCIlc1xcXCIgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCIxNFwiOiBcIlBhc3NlZCBpbnZhbGlkIHBpeGVsIHZhbHVlIChcXFwiJXNcXFwiKSB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjE1XCI6IFwiUGFzc2VkIGludmFsaWQgYmFzZSB2YWx1ZSAoXFxcIiVzXFxcIikgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCIxNlwiOiBcIllvdSBtdXN0IHByb3ZpZGUgYSB0ZW1wbGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCIxN1wiOiBcIllvdSBwYXNzZWQgYW4gdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3RhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiMThcIjogXCJtaW5TY3JlZW4gYW5kIG1heFNjcmVlbiBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCIxOVwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiMjBcIjogXCJleHBlY3RzIGVpdGhlciBhbiBhcnJheSBvZiBvYmplY3RzIG9yIGEgc2luZ2xlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjIxXCI6IFwiZXhwZWN0cyB0aGUgb2JqZWN0cyBpbiB0aGUgZmlyc3QgYXJndW1lbnQgYXJyYXkgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBgcHJvcGAsIGBmcm9tU2l6ZWAsIGFuZCBgdG9TaXplYC5cXG5cXG5cIixcbiAgXCIyMlwiOiBcImV4cGVjdHMgdGhlIGZpcnN0IGFyZ3VtZW50IG9iamVjdCB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIGBwcm9wYCwgYGZyb21TaXplYCwgYW5kIGB0b1NpemVgLlxcblxcblwiLFxuICBcIjIzXCI6IFwiZm9udEZhY2UgZXhwZWN0cyBhIG5hbWUgb2YgYSBmb250LWZhbWlseS5cXG5cXG5cIixcbiAgXCIyNFwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZWl0aGVyIHRoZSBwYXRoIHRvIHRoZSBmb250IGZpbGUocykgb3IgYSBuYW1lIG9mIGEgbG9jYWwgY29weS5cXG5cXG5cIixcbiAgXCIyNVwiOiBcImZvbnRGYWNlIGV4cGVjdHMgbG9jYWxGb250cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCIyNlwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZmlsZUZvcm1hdHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiMjdcIjogXCJyYWRpYWxHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCIyOFwiOiBcIlBsZWFzZSBzdXBwbHkgYSBmaWxlbmFtZSB0byByZXRpbmFJbWFnZSgpIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIyOVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRyaWFuZ2xlLCBwbGVhc2UgcGFzcyBjb3JyZWN0IHBvaW50aW5nRGlyZWN0aW9uIGUuZy4gJ3JpZ2h0Jy5cXG5cXG5cIixcbiAgXCIzMFwiOiBcIlBhc3NlZCBhbiBpbnZhbGlkIHZhbHVlIHRvIGBoZWlnaHRgIG9yIGB3aWR0aGAuIFBsZWFzZSBwcm92aWRlIGEgcGl4ZWwgYmFzZWQgdW5pdC5cXG5cXG5cIixcbiAgXCIzMVwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIG9ubHkgdGFrZXMgOCBhcmd1bWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb25cXG5cXG5cIixcbiAgXCIzMlwiOiBcIlRvIHBhc3MgbXVsdGlwbGUgYW5pbWF0aW9ucyBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gYXJyYXlzLCBlLmcuIGFuaW1hdGlvbihbJ3JvdGF0ZScsICcycyddLCBbJ21vdmUnLCAnMXMnXSlcXG5UbyBwYXNzIGEgc2luZ2xlIGFuaW1hdGlvbiBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gc2ltcGxlIHZhbHVlcywgZS5nLiBhbmltYXRpb24oJ3JvdGF0ZScsICcycycpXFxuXFxuXCIsXG4gIFwiMzNcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBhcnJheXMgY2FuIG9ubHkgaGF2ZSA4IGVsZW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uXFxuXFxuXCIsXG4gIFwiMzRcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBhIHJhZGl1cyB2YWx1ZSBhcyBhIHN0cmluZyBvciBudW1iZXIgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIzNVwiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIG9uZSBvZiBcXFwidG9wXFxcIiwgXFxcImJvdHRvbVxcXCIsIFxcXCJsZWZ0XFxcIiBvciBcXFwicmlnaHRcXFwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCIzNlwiOiBcIlByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgdmFsdWUuXFxuXFxuXCIsXG4gIFwiMzdcIjogXCJTeW50YXggRXJyb3IgYXQgJXMuXFxuXFxuXCIsXG4gIFwiMzhcIjogXCJGb3JtdWxhIGNvbnRhaW5zIGEgZnVuY3Rpb24gdGhhdCBuZWVkcyBwYXJlbnRoZXNlcyBhdCAlcy5cXG5cXG5cIixcbiAgXCIzOVwiOiBcIkZvcm11bGEgaXMgbWlzc2luZyBjbG9zaW5nIHBhcmVudGhlc2lzIGF0ICVzLlxcblxcblwiLFxuICBcIjQwXCI6IFwiRm9ybXVsYSBoYXMgdG9vIG1hbnkgY2xvc2luZyBwYXJlbnRoZXNlcyBhdCAlcy5cXG5cXG5cIixcbiAgXCI0MVwiOiBcIkFsbCB2YWx1ZXMgaW4gYSBmb3JtdWxhIG11c3QgaGF2ZSB0aGUgc2FtZSB1bml0IG9yIGJlIHVuaXRsZXNzLlxcblxcblwiLFxuICBcIjQyXCI6IFwiUGxlYXNlIHByb3ZpZGUgYSBudW1iZXIgb2Ygc3RlcHMgdG8gdGhlIG1vZHVsYXJTY2FsZSBoZWxwZXIuXFxuXFxuXCIsXG4gIFwiNDNcIjogXCJQbGVhc2UgcGFzcyBhIG51bWJlciBvciBvbmUgb2YgdGhlIHByZWRlZmluZWQgc2NhbGVzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyIGFzIHRoZSByYXRpby5cXG5cXG5cIixcbiAgXCI0NFwiOiBcIkludmFsaWQgdmFsdWUgcGFzc2VkIGFzIGJhc2UgdG8gbW9kdWxhclNjYWxlLCBleHBlY3RlZCBudW1iZXIgb3IgZW0vcmVtIHN0cmluZyBidXQgZ290ICVzLlxcblxcblwiLFxuICBcIjQ1XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gaHNsVG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjQ2XCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnQgdG8gcmdiVG9Db2xvclN0cmluZywgcGxlYXNlIHBhc3MgYSBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0LlxcblxcblwiLFxuICBcIjQ3XCI6IFwibWluU2NyZWVuIGFuZCBtYXhTY3JlZW4gbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiNDhcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjQ5XCI6IFwiRXhwZWN0cyBlaXRoZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvciBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MFwiOiBcIkV4cGVjdHMgdGhlIG9iamVjdHMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFycmF5IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTFcIjogXCJFeHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCBvYmplY3QgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCI1MlwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZWl0aGVyIHRoZSBwYXRoIHRvIHRoZSBmb250IGZpbGUocykgb3IgYSBuYW1lIG9mIGEgbG9jYWwgY29weS5cXG5cXG5cIixcbiAgXCI1M1wiOiBcImZvbnRGYWNlIGV4cGVjdHMgbG9jYWxGb250cyB0byBiZSBhbiBhcnJheS5cXG5cXG5cIixcbiAgXCI1NFwiOiBcImZvbnRGYWNlIGV4cGVjdHMgZmlsZUZvcm1hdHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiNTVcIjogXCJmb250RmFjZSBleHBlY3RzIGEgbmFtZSBvZiBhIGZvbnQtZmFtaWx5LlxcblxcblwiLFxuICBcIjU2XCI6IFwibGluZWFyR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiNTdcIjogXCJyYWRpYWxHcmFkaWVudCByZXF1cmllcyBhdCBsZWFzdCAyIGNvbG9yLXN0b3BzIHRvIHByb3Blcmx5IHJlbmRlci5cXG5cXG5cIixcbiAgXCI1OFwiOiBcIlBsZWFzZSBzdXBwbHkgYSBmaWxlbmFtZSB0byByZXRpbmFJbWFnZSgpIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI1OVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHRyaWFuZ2xlLCBwbGVhc2UgcGFzcyBjb3JyZWN0IHBvaW50aW5nRGlyZWN0aW9uIGUuZy4gJ3JpZ2h0Jy5cXG5cXG5cIixcbiAgXCI2MFwiOiBcIlBhc3NlZCBhbiBpbnZhbGlkIHZhbHVlIHRvIGBoZWlnaHRgIG9yIGB3aWR0aGAuIFBsZWFzZSBwcm92aWRlIGEgcGl4ZWwgYmFzZWQgdW5pdC5cXG5cXG5cIixcbiAgXCI2MVwiOiBcIlByb3BlcnR5IG11c3QgYmUgYSBzdHJpbmcgdmFsdWUuXFxuXFxuXCIsXG4gIFwiNjJcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBhIHJhZGl1cyB2YWx1ZSBhcyBhIHN0cmluZyBvciBudW1iZXIgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI2M1wiOiBcImJvcmRlclJhZGl1cyBleHBlY3RzIG9uZSBvZiBcXFwidG9wXFxcIiwgXFxcImJvdHRvbVxcXCIsIFxcXCJsZWZ0XFxcIiBvciBcXFwicmlnaHRcXFwiIGFzIHRoZSBmaXJzdCBhcmd1bWVudC5cXG5cXG5cIixcbiAgXCI2NFwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIG9ubHkgdGFrZXMgOCBhcmd1bWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb24uXFxuXFxuXCIsXG4gIFwiNjVcIjogXCJUbyBwYXNzIG11bHRpcGxlIGFuaW1hdGlvbnMgcGxlYXNlIHN1cHBseSB0aGVtIGluIGFycmF5cywgZS5nLiBhbmltYXRpb24oWydyb3RhdGUnLCAnMnMnXSwgWydtb3ZlJywgJzFzJ10pXFxcXG5UbyBwYXNzIGEgc2luZ2xlIGFuaW1hdGlvbiBwbGVhc2Ugc3VwcGx5IHRoZW0gaW4gc2ltcGxlIHZhbHVlcywgZS5nLiBhbmltYXRpb24oJ3JvdGF0ZScsICcycycpLlxcblxcblwiLFxuICBcIjY2XCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgYXJyYXlzIGNhbiBvbmx5IGhhdmUgOCBlbGVtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvbi5cXG5cXG5cIixcbiAgXCI2N1wiOiBcIllvdSBtdXN0IHByb3ZpZGUgYSB0ZW1wbGF0ZSB0byB0aGlzIG1ldGhvZC5cXG5cXG5cIixcbiAgXCI2OFwiOiBcIllvdSBwYXNzZWQgYW4gdW5zdXBwb3J0ZWQgc2VsZWN0b3Igc3RhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiNjlcIjogXCJFeHBlY3RlZCBhIHN0cmluZyBlbmRpbmcgaW4gXFxcInB4XFxcIiBvciBhIG51bWJlciBwYXNzZWQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvICVzKCksIGdvdCAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjcwXCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQgdG8gJXMoKSwgZ290ICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzFcIjogXCJQYXNzZWQgaW52YWxpZCBwaXhlbCB2YWx1ZSAlcyB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjcyXCI6IFwiUGFzc2VkIGludmFsaWQgYmFzZSB2YWx1ZSAlcyB0byAlcygpLCBwbGVhc2UgcGFzcyBhIHZhbHVlIGxpa2UgXFxcIjEycHhcXFwiIG9yIDEyLlxcblxcblwiLFxuICBcIjczXCI6IFwiUGxlYXNlIHByb3ZpZGUgYSB2YWxpZCBDU1MgdmFyaWFibGUuXFxuXFxuXCIsXG4gIFwiNzRcIjogXCJDU1MgdmFyaWFibGUgbm90IGZvdW5kIGFuZCBubyBkZWZhdWx0IHdhcyBwcm92aWRlZC5cXG5cXG5cIixcbiAgXCI3NVwiOiBcImltcG9ydGFudCByZXF1aXJlcyBhIHZhbGlkIHN0eWxlIG9iamVjdCwgZ290IGEgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3NlwiOiBcImZyb21TaXplIGFuZCB0b1NpemUgbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMgYXMgbWluU2NyZWVuIGFuZCBtYXhTY3JlZW4uXFxuXFxuXCIsXG4gIFwiNzdcIjogXCJyZW1Ub1B4IGV4cGVjdHMgYSB2YWx1ZSBpbiBcXFwicmVtXFxcIiBidXQgeW91IHByb3ZpZGVkIGl0IGluIFxcXCIlc1xcXCIuXFxuXFxuXCIsXG4gIFwiNzhcIjogXCJiYXNlIG11c3QgYmUgc2V0IGluIFxcXCJweFxcXCIgb3IgXFxcIiVcXFwiIGJ1dCB5b3Ugc2V0IGl0IGluIFxcXCIlc1xcXCIuXFxuXCJcbn07XG4vKipcbiAqIHN1cGVyIGJhc2ljIHZlcnNpb24gb2Ygc3ByaW50ZlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgYSA9IGFyZ3NbMF07XG4gIHZhciBiID0gW107XG4gIHZhciBjO1xuXG4gIGZvciAoYyA9IDE7IGMgPCBhcmdzLmxlbmd0aDsgYyArPSAxKSB7XG4gICAgYi5wdXNoKGFyZ3NbY10pO1xuICB9XG5cbiAgYi5mb3JFYWNoKGZ1bmN0aW9uIChkKSB7XG4gICAgYSA9IGEucmVwbGFjZSgvJVthLXpdLywgZCk7XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cbi8qKlxuICogQ3JlYXRlIGFuIGVycm9yIGZpbGUgb3V0IG9mIGVycm9ycy5tZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGEgc2ltcGxlIHdlYiBsaW5rIHRvIHRoZSBmdWxsIGVycm9yc1xuICogaW4gcHJvZHVjdGlvbiBtb2RlLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbnZhciBQb2xpc2hlZEVycm9yID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfRXJyb3IpIHtcbiAgX2luaGVyaXRzTG9vc2UoUG9saXNoZWRFcnJvciwgX0Vycm9yKTtcblxuICBmdW5jdGlvbiBQb2xpc2hlZEVycm9yKGNvZGUpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBcIkFuIGVycm9yIG9jY3VycmVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3BvbGlzaGVkL2Jsb2IvbWFpbi9zcmMvaW50ZXJuYWxIZWxwZXJzL2Vycm9ycy5tZCNcIiArIGNvZGUgKyBcIiBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIikgfHwgdGhpcztcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMgPSBfRXJyb3IuY2FsbCh0aGlzLCBmb3JtYXQuYXBwbHkodm9pZCAwLCBbRVJST1JTW2NvZGVdXS5jb25jYXQoYXJncykpKSB8fCB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgfVxuXG4gIHJldHVybiBQb2xpc2hlZEVycm9yO1xufSggLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoRXJyb3IpKTtcblxudmFyIHVuaXRSZWdFeHAgPSAvKCg/IVxcdylhfG5hfGhjfG1jfGRnfG1lW3JdP3x4ZXxuaSg/IVthLXpBLVpdKXxtbXxjcHx0cHx4cHxxKD8hcyl8aHZ8eGFtdnxuaW12fHd2fHNtfHMoPyFcXER8JCl8Z2VkfGRhcmc/fG5ydXQpL2c7IC8vIE1lcmdlcyBhZGRpdGlvbmFsIG1hdGggZnVuY3Rpb25hbGl0eSBpbnRvIHRoZSBkZWZhdWx0cy5cblxuZnVuY3Rpb24gbWVyZ2VTeW1ib2xNYXBzKGFkZGl0aW9uYWxTeW1ib2xzKSB7XG4gIHZhciBzeW1ib2xNYXAgPSB7fTtcbiAgc3ltYm9sTWFwLnN5bWJvbHMgPSBhZGRpdGlvbmFsU3ltYm9scyA/IF9leHRlbmRzKHt9LCBkZWZhdWx0U3ltYm9sTWFwLnN5bWJvbHMsIGFkZGl0aW9uYWxTeW1ib2xzLnN5bWJvbHMpIDogX2V4dGVuZHMoe30sIGRlZmF1bHRTeW1ib2xNYXAuc3ltYm9scyk7XG4gIHJldHVybiBzeW1ib2xNYXA7XG59XG5cbmZ1bmN0aW9uIGV4ZWMob3BlcmF0b3JzLCB2YWx1ZXMpIHtcbiAgdmFyIF9yZWY7XG5cbiAgdmFyIG9wID0gb3BlcmF0b3JzLnBvcCgpO1xuICB2YWx1ZXMucHVzaChvcC5mLmFwcGx5KG9wLCAoX3JlZiA9IFtdKS5jb25jYXQuYXBwbHkoX3JlZiwgdmFsdWVzLnNwbGljZSgtb3AuYXJnQ291bnQpKSkpO1xuICByZXR1cm4gb3AucHJlY2VkZW5jZTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlKGV4cHJlc3Npb24sIGFkZGl0aW9uYWxTeW1ib2xzKSB7XG4gIHZhciBzeW1ib2xNYXAgPSBtZXJnZVN5bWJvbE1hcHMoYWRkaXRpb25hbFN5bWJvbHMpO1xuICB2YXIgbWF0Y2g7XG4gIHZhciBvcGVyYXRvcnMgPSBbc3ltYm9sTWFwLnN5bWJvbHNbJygnXS5wcmVmaXhdO1xuICB2YXIgdmFsdWVzID0gW107XG4gIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cCggLy8gUGF0dGVybiBmb3IgbnVtYmVyc1xuICBcIlxcXFxkKyg/OlxcXFwuXFxcXGQrKT98XCIgKyAvLyAuLi5hbmQgcGF0dGVybnMgZm9yIGluZGl2aWR1YWwgb3BlcmF0b3JzL2Z1bmN0aW9uIG5hbWVzXG4gIE9iamVjdC5rZXlzKHN5bWJvbE1hcC5zeW1ib2xzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBzeW1ib2xNYXAuc3ltYm9sc1trZXldO1xuICB9KSAvLyBsb25nZXIgc3ltYm9scyBzaG91bGQgYmUgbGlzdGVkIGZpcnN0XG4gIC8vICRGbG93Rml4TWVcbiAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYi5zeW1ib2wubGVuZ3RoIC0gYS5zeW1ib2wubGVuZ3RoO1xuICB9KSAvLyAkRmxvd0ZpeE1lXG4gIC5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgIHJldHVybiB2YWwucmVnU3ltYm9sO1xuICB9KS5qb2luKCd8JykgKyBcInwoXFxcXFMpXCIsICdnJyk7XG4gIHBhdHRlcm4ubGFzdEluZGV4ID0gMDsgLy8gUmVzZXQgcmVndWxhciBleHByZXNzaW9uIG9iamVjdFxuXG4gIHZhciBhZnRlclZhbHVlID0gZmFsc2U7XG5cbiAgZG8ge1xuICAgIG1hdGNoID0gcGF0dGVybi5leGVjKGV4cHJlc3Npb24pO1xuXG4gICAgdmFyIF9yZWYyID0gbWF0Y2ggfHwgWycpJywgdW5kZWZpbmVkXSxcbiAgICAgICAgdG9rZW4gPSBfcmVmMlswXSxcbiAgICAgICAgYmFkID0gX3JlZjJbMV07XG5cbiAgICB2YXIgbm90TnVtYmVyID0gc3ltYm9sTWFwLnN5bWJvbHNbdG9rZW5dO1xuICAgIHZhciBub3ROZXdWYWx1ZSA9IG5vdE51bWJlciAmJiAhbm90TnVtYmVyLnByZWZpeCAmJiAhbm90TnVtYmVyLmZ1bmM7XG4gICAgdmFyIG5vdEFmdGVyVmFsdWUgPSAhbm90TnVtYmVyIHx8ICFub3ROdW1iZXIucG9zdGZpeCAmJiAhbm90TnVtYmVyLmluZml4OyAvLyBDaGVjayBmb3Igc3ludGF4IGVycm9yczpcblxuICAgIGlmIChiYWQgfHwgKGFmdGVyVmFsdWUgPyBub3RBZnRlclZhbHVlIDogbm90TmV3VmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigzNywgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IGV4cHJlc3Npb24ubGVuZ3RoLCBleHByZXNzaW9uKTtcbiAgICB9XG5cbiAgICBpZiAoYWZ0ZXJWYWx1ZSkge1xuICAgICAgLy8gV2UgZWl0aGVyIGhhdmUgYW4gaW5maXggb3IgcG9zdGZpeCBvcGVyYXRvciAodGhleSBzaG91bGQgYmUgbXV0dWFsbHkgZXhjbHVzaXZlKVxuICAgICAgdmFyIGN1cnIgPSBub3ROdW1iZXIucG9zdGZpeCB8fCBub3ROdW1iZXIuaW5maXg7XG5cbiAgICAgIGRvIHtcbiAgICAgICAgdmFyIHByZXYgPSBvcGVyYXRvcnNbb3BlcmF0b3JzLmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoKGN1cnIucHJlY2VkZW5jZSAtIHByZXYucHJlY2VkZW5jZSB8fCBwcmV2LnJpZ2h0VG9MZWZ0KSA+IDApIGJyZWFrOyAvLyBBcHBseSBwcmV2aW91cyBvcGVyYXRvciwgc2luY2UgaXQgaGFzIHByZWNlZGVuY2Ugb3ZlciBjdXJyZW50IG9uZVxuICAgICAgfSB3aGlsZSAoZXhlYyhvcGVyYXRvcnMsIHZhbHVlcykpOyAvLyBFeGl0IGxvb3AgYWZ0ZXIgZXhlY3V0aW5nIGFuIG9wZW5pbmcgcGFyZW50aGVzaXMgb3IgZnVuY3Rpb25cblxuXG4gICAgICBhZnRlclZhbHVlID0gY3Vyci5ub3RhdGlvbiA9PT0gJ3Bvc3RmaXgnO1xuXG4gICAgICBpZiAoY3Vyci5zeW1ib2wgIT09ICcpJykge1xuICAgICAgICBvcGVyYXRvcnMucHVzaChjdXJyKTsgLy8gUG9zdGZpeCBhbHdheXMgaGFzIHByZWNlZGVuY2Ugb3ZlciBhbnkgb3BlcmF0b3IgdGhhdCBmb2xsb3dzIGFmdGVyIGl0XG5cbiAgICAgICAgaWYgKGFmdGVyVmFsdWUpIGV4ZWMob3BlcmF0b3JzLCB2YWx1ZXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm90TnVtYmVyKSB7XG4gICAgICAvLyBwcmVmaXggb3BlcmF0b3Igb3IgZnVuY3Rpb25cbiAgICAgIG9wZXJhdG9ycy5wdXNoKG5vdE51bWJlci5wcmVmaXggfHwgbm90TnVtYmVyLmZ1bmMpO1xuXG4gICAgICBpZiAobm90TnVtYmVyLmZ1bmMpIHtcbiAgICAgICAgLy8gUmVxdWlyZSBhbiBvcGVuaW5nIHBhcmVudGhlc2lzXG4gICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKGV4cHJlc3Npb24pO1xuXG4gICAgICAgIGlmICghbWF0Y2ggfHwgbWF0Y2hbMF0gIT09ICcoJykge1xuICAgICAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDM4LCBtYXRjaCA/IG1hdGNoLmluZGV4IDogZXhwcmVzc2lvbi5sZW5ndGgsIGV4cHJlc3Npb24pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIG51bWJlclxuICAgICAgdmFsdWVzLnB1c2goK3Rva2VuKTtcbiAgICAgIGFmdGVyVmFsdWUgPSB0cnVlO1xuICAgIH1cbiAgfSB3aGlsZSAobWF0Y2ggJiYgb3BlcmF0b3JzLmxlbmd0aCk7XG5cbiAgaWYgKG9wZXJhdG9ycy5sZW5ndGgpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigzOSwgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IGV4cHJlc3Npb24ubGVuZ3RoLCBleHByZXNzaW9uKTtcbiAgfSBlbHNlIGlmIChtYXRjaCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQwLCBtYXRjaCA/IG1hdGNoLmluZGV4IDogZXhwcmVzc2lvbi5sZW5ndGgsIGV4cHJlc3Npb24pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWx1ZXMucG9wKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmV2ZXJzZVN0cmluZyhzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xufVxuLyoqXG4gKiBIZWxwZXIgZm9yIGRvaW5nIG1hdGggd2l0aCBDU1MgVW5pdHMuIEFjY2VwdHMgYSBmb3JtdWxhIGFzIGEgc3RyaW5nLiBBbGwgdmFsdWVzIGluIHRoZSBmb3JtdWxhIG11c3QgaGF2ZSB0aGUgc2FtZSB1bml0IChvciBiZSB1bml0bGVzcykuIFN1cHBvcnRzIGNvbXBsZXggZm9ybXVsYXMgdXRsaXppaW5nIGFkZGl0aW9uLCBzdWJ0cmFjdGlvbiwgbXVsdGlwbGljYXRpb24sIGRpdmlzaW9uLCBzcXVhcmUgcm9vdCwgcG93ZXJzLCBmYWN0b3JpYWwsIG1pbiwgbWF4LCBhcyB3ZWxsIGFzIHBhcmVudGhlc2VzIGZvciBvcmRlciBvZiBvcGVyYXRpb24uXG4gKlxuICpJbiBjYXNlcyB3aGVyZSB5b3UgbmVlZCB0byBkbyBjYWxjdWxhdGlvbnMgd2l0aCBtaXhlZCB1bml0cyB3aGVyZSBvbmUgdW5pdCBpcyBhIFtyZWxhdGl2ZSBsZW5ndGggdW5pdF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQ1NTL2xlbmd0aCNSZWxhdGl2ZV9sZW5ndGhfdW5pdHMpLCB5b3Ugd2lsbCB3YW50IHRvIHVzZSBbQ1NTIENhbGNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9jYWxjKS5cbiAqXG4gKiAqd2FybmluZyogV2hpbGUgd2UndmUgZG9uZSBldmVyeXRoaW5nIHBvc3NpYmxlIHRvIGVuc3VyZSBtYXRoIHNhZmVseSBldmFsdXRlcyBmb3JtdWxhcyBleHByZXNzZWQgYXMgc3RyaW5ncywgeW91IHNob3VsZCBhbHdheXMgdXNlIGV4dHJlbWUgY2F1dGlvbiB3aGVuIHBhc3NpbmcgYG1hdGhgIHVzZXIgcHJvdmlkZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgZm9udFNpemU6IG1hdGgoJzEycmVtICsgOHJlbScpLFxuICogICBmb250U2l6ZTogbWF0aCgnKDEycHggKyAycHgpICogMycpLFxuICogICBmb250U2l6ZTogbWF0aCgnM3B4XjIgKyBzcXJ0KDQpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGZvbnRTaXplOiAke21hdGgoJzEycmVtICsgOHJlbScpfTtcbiAqICAgZm9udFNpemU6ICR7bWF0aCgnKDEycHggKyAycHgpICogMycpfTtcbiAqICAgZm9udFNpemU6ICR7bWF0aCgnM3B4XjIgKyBzcXJ0KDQpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgZm9udFNpemU6ICcyMHJlbScsXG4gKiAgIGZvbnRTaXplOiAnNDJweCcsXG4gKiAgIGZvbnRTaXplOiAnMTFweCcsXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiBtYXRoKGZvcm11bGEsIGFkZGl0aW9uYWxTeW1ib2xzKSB7XG4gIHZhciByZXZlcnNlZEZvcm11bGEgPSByZXZlcnNlU3RyaW5nKGZvcm11bGEpO1xuICB2YXIgZm9ybXVsYU1hdGNoID0gcmV2ZXJzZWRGb3JtdWxhLm1hdGNoKHVuaXRSZWdFeHApOyAvLyBDaGVjayB0aGF0IGFsbCB1bml0cyBhcmUgdGhlIHNhbWVcblxuICBpZiAoZm9ybXVsYU1hdGNoICYmICFmb3JtdWxhTWF0Y2guZXZlcnkoZnVuY3Rpb24gKHVuaXQpIHtcbiAgICByZXR1cm4gdW5pdCA9PT0gZm9ybXVsYU1hdGNoWzBdO1xuICB9KSkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQxKTtcbiAgfVxuXG4gIHZhciBjbGVhbkZvcm11bGEgPSByZXZlcnNlU3RyaW5nKHJldmVyc2VkRm9ybXVsYS5yZXBsYWNlKHVuaXRSZWdFeHAsICcnKSk7XG4gIHJldHVybiBcIlwiICsgY2FsY3VsYXRlKGNsZWFuRm9ybXVsYSwgYWRkaXRpb25hbFN5bWJvbHMpICsgKGZvcm11bGFNYXRjaCA/IHJldmVyc2VTdHJpbmcoZm9ybXVsYU1hdGNoWzBdKSA6ICcnKTtcbn1cblxudmFyIGNzc1ZhcmlhYmxlUmVnZXggPSAvLS1bXFxTXSovZztcbi8qKlxuICogRmV0Y2hlcyB0aGUgdmFsdWUgb2YgYSBwYXNzZWQgQ1NTIFZhcmlhYmxlIGluIHRoZSA6cm9vdCBzY29wZSwgb3Igb3RoZXJ3aXNlIHJldHVybnMgYSBkZWZhdWx0VmFsdWUgaWYgcHJvdmlkZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ2JhY2tncm91bmQnOiBjc3NWYXIoJy0tYmFja2dyb3VuZC1jb2xvcicpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2Nzc1ZhcignLS1iYWNrZ3JvdW5kLWNvbG9yJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2JhY2tncm91bmQnOiAncmVkJ1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGNzc1Zhcihjc3NWYXJpYWJsZSwgZGVmYXVsdFZhbHVlKSB7XG4gIGlmICghY3NzVmFyaWFibGUgfHwgIWNzc1ZhcmlhYmxlLm1hdGNoKGNzc1ZhcmlhYmxlUmVnZXgpKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzMpO1xuICB9XG5cbiAgdmFyIHZhcmlhYmxlVmFsdWU7XG4gIC8qIGVzbGludC1kaXNhYmxlICovXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZVZhbHVlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoY3NzVmFyaWFibGUpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuXG4gIGlmICh2YXJpYWJsZVZhbHVlKSB7XG4gICAgcmV0dXJuIHZhcmlhYmxlVmFsdWUudHJpbSgpO1xuICB9IGVsc2UgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3NCk7XG59XG5cbi8vIEBwcml2YXRlXG5mdW5jdGlvbiBjYXBpdGFsaXplU3RyaW5nKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxuXG52YXIgcG9zaXRpb25NYXAkMSA9IFsnVG9wJywgJ1JpZ2h0JywgJ0JvdHRvbScsICdMZWZ0J107XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvcGVydHkocHJvcGVydHksIHBvc2l0aW9uKSB7XG4gIGlmICghcHJvcGVydHkpIHJldHVybiBwb3NpdGlvbi50b0xvd2VyQ2FzZSgpO1xuICB2YXIgc3BsaXRQcm9wZXJ0eSA9IHByb3BlcnR5LnNwbGl0KCctJyk7XG5cbiAgaWYgKHNwbGl0UHJvcGVydHkubGVuZ3RoID4gMSkge1xuICAgIHNwbGl0UHJvcGVydHkuc3BsaWNlKDEsIDAsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gc3BsaXRQcm9wZXJ0eS5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgdmFsKSB7XG4gICAgICByZXR1cm4gXCJcIiArIGFjYyArIGNhcGl0YWxpemVTdHJpbmcodmFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBqb2luZWRQcm9wZXJ0eSA9IHByb3BlcnR5LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDFcIiArIHBvc2l0aW9uICsgXCIkMlwiKTtcbiAgcmV0dXJuIHByb3BlcnR5ID09PSBqb2luZWRQcm9wZXJ0eSA/IFwiXCIgKyBwcm9wZXJ0eSArIHBvc2l0aW9uIDogam9pbmVkUHJvcGVydHk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU3R5bGVzKHByb3BlcnR5LCB2YWx1ZXNXaXRoRGVmYXVsdHMpIHtcbiAgdmFyIHN0eWxlcyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzV2l0aERlZmF1bHRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHZhbHVlc1dpdGhEZWZhdWx0c1tpXSB8fCB2YWx1ZXNXaXRoRGVmYXVsdHNbaV0gPT09IDApIHtcbiAgICAgIHN0eWxlc1tnZW5lcmF0ZVByb3BlcnR5KHByb3BlcnR5LCBwb3NpdGlvbk1hcCQxW2ldKV0gPSB2YWx1ZXNXaXRoRGVmYXVsdHNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0eWxlcztcbn1cbi8qKlxuICogRW5hYmxlcyBzaG9ydGhhbmQgZm9yIGRpcmVjdGlvbi1iYXNlZCBwcm9wZXJ0aWVzLiBJdCBhY2NlcHRzIGEgcHJvcGVydHkgKGh5cGhlbmF0ZWQgb3IgY2FtZWxDYXNlZCkgYW5kIHVwIHRvIGZvdXIgdmFsdWVzIHRoYXQgbWFwIHRvIHRvcCwgcmlnaHQsIGJvdHRvbSwgYW5kIGxlZnQsIHJlc3BlY3RpdmVseS4gWW91IGNhbiBvcHRpb25hbGx5IHBhc3MgYW4gZW1wdHkgc3RyaW5nIHRvIGdldCBvbmx5IHRoZSBkaXJlY3Rpb25hbCB2YWx1ZXMgYXMgcHJvcGVydGllcy4gWW91IGNhbiBhbHNvIG9wdGlvbmFsbHkgcGFzcyBhIG51bGwgYXJndW1lbnQgZm9yIGEgZGlyZWN0aW9uYWwgdmFsdWUgdG8gaWdub3JlIGl0LlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uZGlyZWN0aW9uYWxQcm9wZXJ0eSgncGFkZGluZycsICcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtkaXJlY3Rpb25hbFByb3BlcnR5KCdwYWRkaW5nJywgJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3BhZGRpbmdUb3AnOiAnMTJweCcsXG4gKiAgICdwYWRkaW5nUmlnaHQnOiAnMjRweCcsXG4gKiAgICdwYWRkaW5nQm90dG9tJzogJzM2cHgnLFxuICogICAncGFkZGluZ0xlZnQnOiAnNDhweCdcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIGRpcmVjdGlvbmFsUHJvcGVydHkocHJvcGVydHkpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIC8vICBwcmV0dGllci1pZ25vcmVcbiAgdmFyIGZpcnN0VmFsdWUgPSB2YWx1ZXNbMF0sXG4gICAgICBfdmFsdWVzJCA9IHZhbHVlc1sxXSxcbiAgICAgIHNlY29uZFZhbHVlID0gX3ZhbHVlcyQgPT09IHZvaWQgMCA/IGZpcnN0VmFsdWUgOiBfdmFsdWVzJCxcbiAgICAgIF92YWx1ZXMkMiA9IHZhbHVlc1syXSxcbiAgICAgIHRoaXJkVmFsdWUgPSBfdmFsdWVzJDIgPT09IHZvaWQgMCA/IGZpcnN0VmFsdWUgOiBfdmFsdWVzJDIsXG4gICAgICBfdmFsdWVzJDMgPSB2YWx1ZXNbM10sXG4gICAgICBmb3VydGhWYWx1ZSA9IF92YWx1ZXMkMyA9PT0gdm9pZCAwID8gc2Vjb25kVmFsdWUgOiBfdmFsdWVzJDM7XG4gIHZhciB2YWx1ZXNXaXRoRGVmYXVsdHMgPSBbZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUsIGZvdXJ0aFZhbHVlXTtcbiAgcmV0dXJuIGdlbmVyYXRlU3R5bGVzKHByb3BlcnR5LCB2YWx1ZXNXaXRoRGVmYXVsdHMpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIGEgc3RyaW5nIGVuZHMgd2l0aCBzb21ldGhpbmdcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVuZHNXaXRoKHN0cmluZywgc3VmZml4KSB7XG4gIHJldHVybiBzdHJpbmcuc3Vic3RyKC1zdWZmaXgubGVuZ3RoKSA9PT0gc3VmZml4O1xufVxuXG52YXIgY3NzUmVnZXgkMSA9IC9eKFsrLV0/KD86XFxkK3xcXGQqXFwuXFxkKykpKFthLXpdKnwlKSQvO1xuLyoqXG4gKiBSZXR1cm5zIGEgZ2l2ZW4gQ1NTIHZhbHVlIG1pbnVzIGl0cyB1bml0IG9mIG1lYXN1cmUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJy0tZGltZW5zaW9uJzogc3RyaXBVbml0KCcxMDBweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIC0tZGltZW5zaW9uOiAke3N0cmlwVW5pdCgnMTAwcHgnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnLS1kaW1lbnNpb24nOiAxMDBcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzdHJpcFVuaXQodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiB2YWx1ZTtcbiAgdmFyIG1hdGNoZWRWYWx1ZSA9IHZhbHVlLm1hdGNoKGNzc1JlZ2V4JDEpO1xuICByZXR1cm4gbWF0Y2hlZFZhbHVlID8gcGFyc2VGbG9hdCh2YWx1ZSkgOiB2YWx1ZTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgY3JlYXRlcyBwaXhlbC10by14IGNvbnZlcnRlcnNcbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIHB4dG9GYWN0b3J5ID0gZnVuY3Rpb24gcHh0b0ZhY3RvcnkodG8pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChweHZhbCwgYmFzZSkge1xuICAgIGlmIChiYXNlID09PSB2b2lkIDApIHtcbiAgICAgIGJhc2UgPSAnMTZweCc7XG4gICAgfVxuXG4gICAgdmFyIG5ld1B4dmFsID0gcHh2YWw7XG4gICAgdmFyIG5ld0Jhc2UgPSBiYXNlO1xuXG4gICAgaWYgKHR5cGVvZiBweHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghZW5kc1dpdGgocHh2YWwsICdweCcpKSB7XG4gICAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY5LCB0bywgcHh2YWwpO1xuICAgICAgfVxuXG4gICAgICBuZXdQeHZhbCA9IHN0cmlwVW5pdChweHZhbCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBiYXNlID09PSAnc3RyaW5nJykge1xuICAgICAgaWYgKCFlbmRzV2l0aChiYXNlLCAncHgnKSkge1xuICAgICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3MCwgdG8sIGJhc2UpO1xuICAgICAgfVxuXG4gICAgICBuZXdCYXNlID0gc3RyaXBVbml0KGJhc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbmV3UHh2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3MSwgcHh2YWwsIHRvKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5ld0Jhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3MiwgYmFzZSwgdG8pO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiICsgbmV3UHh2YWwgLyBuZXdCYXNlICsgdG87XG4gIH07XG59O1xuXG52YXIgcGl4ZWxzdG8gPSBweHRvRmFjdG9yeTtcblxuLyoqXG4gKiBDb252ZXJ0IHBpeGVsIHZhbHVlIHRvIGVtcy4gVGhlIGRlZmF1bHQgYmFzZSB2YWx1ZSBpcyAxNnB4LCBidXQgY2FuIGJlIGNoYW5nZWQgYnkgcGFzc2luZyBhXG4gKiBzZWNvbmQgYXJndW1lbnQgdG8gdGhlIGZ1bmN0aW9uLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHB4dmFsXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtiYXNlPScxNnB4J11cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdoZWlnaHQnOiBlbSgnMTZweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGhlaWdodDogJHtlbSgnMTZweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2hlaWdodCc6ICcxZW0nXG4gKiB9XG4gKi9cblxudmFyIGVtID0gLyojX19QVVJFX18qL3BpeGVsc3RvKCdlbScpO1xudmFyIGVtJDEgPSBlbTtcblxudmFyIGNzc1JlZ2V4ID0gL14oWystXT8oPzpcXGQrfFxcZCpcXC5cXGQrKSkoW2Etel0qfCUpJC87XG4vKipcbiAqIFJldHVybnMgYSBnaXZlbiBDU1MgdmFsdWUgYW5kIGl0cyB1bml0IGFzIGVsZW1lbnRzIG9mIGFuIGFycmF5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICctLWRpbWVuc2lvbic6IGdldFZhbHVlQW5kVW5pdCgnMTAwcHgnKVswXSxcbiAqICAgJy0tdW5pdCc6IGdldFZhbHVlQW5kVW5pdCgnMTAwcHgnKVsxXSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgLS1kaW1lbnNpb246ICR7Z2V0VmFsdWVBbmRVbml0KCcxMDBweCcpWzBdfTtcbiAqICAgLS11bml0OiAke2dldFZhbHVlQW5kVW5pdCgnMTAwcHgnKVsxXX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnLS1kaW1lbnNpb24nOiAxMDAsXG4gKiAgICctLXVuaXQnOiAncHgnLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIGdldFZhbHVlQW5kVW5pdCh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgcmV0dXJuIFt2YWx1ZSwgJyddO1xuICB2YXIgbWF0Y2hlZFZhbHVlID0gdmFsdWUubWF0Y2goY3NzUmVnZXgpO1xuICBpZiAobWF0Y2hlZFZhbHVlKSByZXR1cm4gW3BhcnNlRmxvYXQodmFsdWUpLCBtYXRjaGVkVmFsdWVbMl1dO1xuICByZXR1cm4gW3ZhbHVlLCB1bmRlZmluZWRdO1xufVxuXG4vKipcbiAqIEhlbHBlciBmb3IgdGFyZ2V0aW5nIHJ1bGVzIGluIGEgc3R5bGUgYmxvY2sgZ2VuZXJhdGVkIGJ5IHBvbGlzaGVkIG1vZHVsZXMgdGhhdCBuZWVkICFpbXBvcnRhbnQtbGV2ZWwgc3BlY2lmaWNpdHkuIENhbiBvcHRpb25hbGx5IHNwZWNpZnkgYSBydWxlIChvciBydWxlcykgdG8gdGFyZ2V0IHNwZWNpZmljIHJ1bGVzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmltcG9ydGFudChjb3ZlcigpKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2ltcG9ydGFudChjb3ZlcigpKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcbiAqICAgJ3RvcCc6ICcwICFpbXBvcnRhbnQnLFxuICogICAncmlnaHQ6ICcwICFpbXBvcnRhbnQnLFxuICogICAnYm90dG9tJzogJzAgIWltcG9ydGFudCcsXG4gKiAgICdsZWZ0OiAnMCAhaW1wb3J0YW50J1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGltcG9ydGFudChzdHlsZUJsb2NrLCBydWxlcykge1xuICBpZiAodHlwZW9mIHN0eWxlQmxvY2sgIT09ICdvYmplY3QnIHx8IHN0eWxlQmxvY2sgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3NSwgdHlwZW9mIHN0eWxlQmxvY2spO1xuICB9XG5cbiAgdmFyIG5ld1N0eWxlQmxvY2sgPSB7fTtcbiAgT2JqZWN0LmtleXMoc3R5bGVCbG9jaykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKHR5cGVvZiBzdHlsZUJsb2NrW2tleV0gPT09ICdvYmplY3QnICYmIHN0eWxlQmxvY2tba2V5XSAhPT0gbnVsbCkge1xuICAgICAgbmV3U3R5bGVCbG9ja1trZXldID0gaW1wb3J0YW50KHN0eWxlQmxvY2tba2V5XSwgcnVsZXMpO1xuICAgIH0gZWxzZSBpZiAoIXJ1bGVzIHx8IHJ1bGVzICYmIChydWxlcyA9PT0ga2V5IHx8IHJ1bGVzLmluZGV4T2Yoa2V5KSA+PSAwKSkge1xuICAgICAgbmV3U3R5bGVCbG9ja1trZXldID0gc3R5bGVCbG9ja1trZXldICsgXCIgIWltcG9ydGFudFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZUJsb2NrW2tleV0gPSBzdHlsZUJsb2NrW2tleV07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG5ld1N0eWxlQmxvY2s7XG59XG5cbnZhciByYXRpb05hbWVzID0ge1xuICBtaW5vclNlY29uZDogMS4wNjcsXG4gIG1ham9yU2Vjb25kOiAxLjEyNSxcbiAgbWlub3JUaGlyZDogMS4yLFxuICBtYWpvclRoaXJkOiAxLjI1LFxuICBwZXJmZWN0Rm91cnRoOiAxLjMzMyxcbiAgYXVnRm91cnRoOiAxLjQxNCxcbiAgcGVyZmVjdEZpZnRoOiAxLjUsXG4gIG1pbm9yU2l4dGg6IDEuNixcbiAgZ29sZGVuU2VjdGlvbjogMS42MTgsXG4gIG1ham9yU2l4dGg6IDEuNjY3LFxuICBtaW5vclNldmVudGg6IDEuNzc4LFxuICBtYWpvclNldmVudGg6IDEuODc1LFxuICBvY3RhdmU6IDIsXG4gIG1ham9yVGVudGg6IDIuNSxcbiAgbWFqb3JFbGV2ZW50aDogMi42NjcsXG4gIG1ham9yVHdlbGZ0aDogMyxcbiAgZG91YmxlT2N0YXZlOiA0XG59O1xuXG5mdW5jdGlvbiBnZXRSYXRpbyhyYXRpb05hbWUpIHtcbiAgcmV0dXJuIHJhdGlvTmFtZXNbcmF0aW9OYW1lXTtcbn1cbi8qKlxuICogRXN0YWJsaXNoIGNvbnNpc3RlbnQgbWVhc3VyZW1lbnRzIGFuZCBzcGFjaWFsIHJlbGF0aW9uc2hpcHMgdGhyb3VnaG91dCB5b3VyIHByb2plY3RzIGJ5IGluY3JlbWVudGluZyBhbiBlbSBvciByZW0gdmFsdWUgdXAgb3IgZG93biBhIGRlZmluZWQgc2NhbGUuIFdlIHByb3ZpZGUgYSBsaXN0IG9mIGNvbW1vbmx5IHVzZWQgc2NhbGVzIGFzIHByZS1kZWZpbmVkIHZhcmlhYmxlcy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICAvLyBJbmNyZW1lbnQgdHdvIHN0ZXBzIHVwIHRoZSBkZWZhdWx0IHNjYWxlXG4gKiAgICdmb250U2l6ZSc6IG1vZHVsYXJTY2FsZSgyKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAgLy8gSW5jcmVtZW50IHR3byBzdGVwcyB1cCB0aGUgZGVmYXVsdCBzY2FsZVxuICogICBmb250U2l6ZTogJHttb2R1bGFyU2NhbGUoMil9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnZm9udFNpemUnOiAnMS43NzY4OWVtJ1xuICogfVxuICovXG5cblxuZnVuY3Rpb24gbW9kdWxhclNjYWxlKHN0ZXBzLCBiYXNlLCByYXRpbykge1xuICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgYmFzZSA9ICcxZW0nO1xuICB9XG5cbiAgaWYgKHJhdGlvID09PSB2b2lkIDApIHtcbiAgICByYXRpbyA9IDEuMzMzO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBzdGVwcyAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0Mik7XG4gIH1cblxuICBpZiAodHlwZW9mIHJhdGlvID09PSAnc3RyaW5nJyAmJiAhcmF0aW9OYW1lc1tyYXRpb10pIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0Myk7XG4gIH1cblxuICB2YXIgX3JlZiA9IHR5cGVvZiBiYXNlID09PSAnc3RyaW5nJyA/IGdldFZhbHVlQW5kVW5pdChiYXNlKSA6IFtiYXNlLCAnJ10sXG4gICAgICByZWFsQmFzZSA9IF9yZWZbMF0sXG4gICAgICB1bml0ID0gX3JlZlsxXTtcblxuICB2YXIgcmVhbFJhdGlvID0gdHlwZW9mIHJhdGlvID09PSAnc3RyaW5nJyA/IGdldFJhdGlvKHJhdGlvKSA6IHJhdGlvO1xuXG4gIGlmICh0eXBlb2YgcmVhbEJhc2UgPT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDQsIGJhc2UpO1xuICB9XG5cbiAgcmV0dXJuIFwiXCIgKyByZWFsQmFzZSAqIE1hdGgucG93KHJlYWxSYXRpbywgc3RlcHMpICsgKHVuaXQgfHwgJycpO1xufVxuXG4vKipcbiAqIENvbnZlcnQgcGl4ZWwgdmFsdWUgdG8gcmVtcy4gVGhlIGRlZmF1bHQgYmFzZSB2YWx1ZSBpcyAxNnB4LCBidXQgY2FuIGJlIGNoYW5nZWQgYnkgcGFzc2luZyBhXG4gKiBzZWNvbmQgYXJndW1lbnQgdG8gdGhlIGZ1bmN0aW9uLlxuICogQGZ1bmN0aW9uXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IHB4dmFsXG4gKiBAcGFyYW0ge3N0cmluZ3xudW1iZXJ9IFtiYXNlPScxNnB4J11cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdoZWlnaHQnOiByZW0oJzE2cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBoZWlnaHQ6ICR7cmVtKCcxNnB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnaGVpZ2h0JzogJzFyZW0nXG4gKiB9XG4gKi9cblxudmFyIHJlbSA9IC8qI19fUFVSRV9fKi9waXhlbHN0bygncmVtJyk7XG52YXIgcmVtJDEgPSByZW07XG5cbnZhciBkZWZhdWx0Rm9udFNpemUgPSAxNjtcblxuZnVuY3Rpb24gY29udmVydEJhc2UoYmFzZSkge1xuICB2YXIgZGVjb25zdHJ1Y3RlZFZhbHVlID0gZ2V0VmFsdWVBbmRVbml0KGJhc2UpO1xuXG4gIGlmIChkZWNvbnN0cnVjdGVkVmFsdWVbMV0gPT09ICdweCcpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChiYXNlKTtcbiAgfVxuXG4gIGlmIChkZWNvbnN0cnVjdGVkVmFsdWVbMV0gPT09ICclJykge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KGJhc2UpIC8gMTAwICogZGVmYXVsdEZvbnRTaXplO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzgsIGRlY29uc3RydWN0ZWRWYWx1ZVsxXSk7XG59XG5cbmZ1bmN0aW9uIGdldEJhc2VGcm9tRG9jKCkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgIHZhciByb290Rm9udFNpemUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemU7XG4gICAgcmV0dXJuIHJvb3RGb250U2l6ZSA/IGNvbnZlcnRCYXNlKHJvb3RGb250U2l6ZSkgOiBkZWZhdWx0Rm9udFNpemU7XG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICByZXR1cm4gZGVmYXVsdEZvbnRTaXplO1xufVxuLyoqXG4gKiBDb252ZXJ0IHJlbSB2YWx1ZXMgdG8gcHguIEJ5IGRlZmF1bHQsIHRoZSBiYXNlIHZhbHVlIGlzIHB1bGxlZCBmcm9tIHRoZSBmb250LXNpemUgcHJvcGVydHkgb24gdGhlIHJvb3QgZWxlbWVudCAoaWYgaXQgaXMgc2V0IGluICUgb3IgcHgpLiBJdCBkZWZhdWx0cyB0byAxNnB4IGlmIG5vdCBmb3VuZCBvbiB0aGUgcm9vdC4gWW91IGNhbiBhbHNvIG92ZXJyaWRlIHRoZSBiYXNlIHZhbHVlIGJ5IHByb3ZpZGluZyB5b3VyIG93biBiYXNlIGluICUgb3IgcHguXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnaGVpZ2h0JzogcmVtVG9QeCgnMS42cmVtJylcbiAqICAgJ2hlaWdodCc6IHJlbVRvUHgoJzEuNnJlbScsICcxMHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgaGVpZ2h0OiAke3JlbVRvUHgoJzEuNnJlbScpfVxuICogICBoZWlnaHQ6ICR7cmVtVG9QeCgnMS42cmVtJywgJzEwcHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgICdoZWlnaHQnOiAnMjUuNnB4JyxcbiAqICAgJ2hlaWdodCc6ICcxNnB4JyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHJlbVRvUHgodmFsdWUsIGJhc2UpIHtcbiAgdmFyIGRlY29uc3RydWN0ZWRWYWx1ZSA9IGdldFZhbHVlQW5kVW5pdCh2YWx1ZSk7XG5cbiAgaWYgKGRlY29uc3RydWN0ZWRWYWx1ZVsxXSAhPT0gJ3JlbScgJiYgZGVjb25zdHJ1Y3RlZFZhbHVlWzFdICE9PSAnJykge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDc3LCBkZWNvbnN0cnVjdGVkVmFsdWVbMV0pO1xuICB9XG5cbiAgdmFyIG5ld0Jhc2UgPSBiYXNlID8gY29udmVydEJhc2UoYmFzZSkgOiBnZXRCYXNlRnJvbURvYygpO1xuICByZXR1cm4gZGVjb25zdHJ1Y3RlZFZhbHVlWzBdICogbmV3QmFzZSArIFwicHhcIjtcbn1cblxudmFyIGZ1bmN0aW9uc01hcCQzID0ge1xuICBiYWNrOiAnY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSknLFxuICBjaXJjOiAnY3ViaWMtYmV6aWVyKDAuNjAwLCAgMC4wNDAsIDAuOTgwLCAwLjMzNSknLFxuICBjdWJpYzogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDU1LCAwLjY3NSwgMC4xOTApJyxcbiAgZXhwbzogJ2N1YmljLWJlemllcigwLjk1MCwgIDAuMDUwLCAwLjc5NSwgMC4wMzUpJyxcbiAgcXVhZDogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDg1LCAwLjY4MCwgMC41MzApJyxcbiAgcXVhcnQ6ICdjdWJpYy1iZXppZXIoMC44OTUsICAwLjAzMCwgMC42ODUsIDAuMjIwKScsXG4gIHF1aW50OiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAgMC4wNTAsIDAuODU1LCAwLjA2MCknLFxuICBzaW5lOiAnY3ViaWMtYmV6aWVyKDAuNDcwLCAgMC4wMDAsIDAuNzQ1LCAwLjcxNSknXG59O1xuLyoqXG4gKiBTdHJpbmcgdG8gcmVwcmVzZW50IGNvbW1vbiBlYXNpbmcgZnVuY3Rpb25zIGFzIGRlbW9uc3RyYXRlZCBoZXJlOiAoZ2l0aHViLmNvbS9qYXVraWEvZWFzaWUpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiBlYXNlSW4oJ3F1YWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiAgY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAke2Vhc2VJbigncXVhZCcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA4NSwgMC42ODAsIDAuNTMwKScsXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZWFzZUluKGZ1bmN0aW9uTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb25zTWFwJDNbZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXTtcbn1cblxudmFyIGZ1bmN0aW9uc01hcCQyID0ge1xuICBiYWNrOiAnY3ViaWMtYmV6aWVyKDAuNjgwLCAtMC41NTAsIDAuMjY1LCAxLjU1MCknLFxuICBjaXJjOiAnY3ViaWMtYmV6aWVyKDAuNzg1LCAgMC4xMzUsIDAuMTUwLCAwLjg2MCknLFxuICBjdWJpYzogJ2N1YmljLWJlemllcigwLjY0NSwgIDAuMDQ1LCAwLjM1NSwgMS4wMDApJyxcbiAgZXhwbzogJ2N1YmljLWJlemllcigxLjAwMCwgIDAuMDAwLCAwLjAwMCwgMS4wMDApJyxcbiAgcXVhZDogJ2N1YmljLWJlemllcigwLjQ1NSwgIDAuMDMwLCAwLjUxNSwgMC45NTUpJyxcbiAgcXVhcnQ6ICdjdWJpYy1iZXppZXIoMC43NzAsICAwLjAwMCwgMC4xNzUsIDEuMDAwKScsXG4gIHF1aW50OiAnY3ViaWMtYmV6aWVyKDAuODYwLCAgMC4wMDAsIDAuMDcwLCAxLjAwMCknLFxuICBzaW5lOiAnY3ViaWMtYmV6aWVyKDAuNDQ1LCAgMC4wNTAsIDAuNTUwLCAwLjk1MCknXG59O1xuLyoqXG4gKiBTdHJpbmcgdG8gcmVwcmVzZW50IGNvbW1vbiBlYXNpbmcgZnVuY3Rpb25zIGFzIGRlbW9uc3RyYXRlZCBoZXJlOiAoZ2l0aHViLmNvbS9qYXVraWEvZWFzaWUpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiBlYXNlSW5PdXQoJ3F1YWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiAgY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAke2Vhc2VJbk91dCgncXVhZCcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC40NTUsICAwLjAzMCwgMC41MTUsIDAuOTU1KScsXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZWFzZUluT3V0KGZ1bmN0aW9uTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb25zTWFwJDJbZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXTtcbn1cblxudmFyIGZ1bmN0aW9uc01hcCQxID0ge1xuICBiYWNrOiAnY3ViaWMtYmV6aWVyKDAuMTc1LCAgMC44ODUsIDAuMzIwLCAxLjI3NSknLFxuICBjdWJpYzogJ2N1YmljLWJlemllcigwLjIxNSwgIDAuNjEwLCAwLjM1NSwgMS4wMDApJyxcbiAgY2lyYzogJ2N1YmljLWJlemllcigwLjA3NSwgIDAuODIwLCAwLjE2NSwgMS4wMDApJyxcbiAgZXhwbzogJ2N1YmljLWJlemllcigwLjE5MCwgIDEuMDAwLCAwLjIyMCwgMS4wMDApJyxcbiAgcXVhZDogJ2N1YmljLWJlemllcigwLjI1MCwgIDAuNDYwLCAwLjQ1MCwgMC45NDApJyxcbiAgcXVhcnQ6ICdjdWJpYy1iZXppZXIoMC4xNjUsICAwLjg0MCwgMC40NDAsIDEuMDAwKScsXG4gIHF1aW50OiAnY3ViaWMtYmV6aWVyKDAuMjMwLCAgMS4wMDAsIDAuMzIwLCAxLjAwMCknLFxuICBzaW5lOiAnY3ViaWMtYmV6aWVyKDAuMzkwLCAgMC41NzUsIDAuNTY1LCAxLjAwMCknXG59O1xuLyoqXG4gKiBTdHJpbmcgdG8gcmVwcmVzZW50IGNvbW1vbiBlYXNpbmcgZnVuY3Rpb25zIGFzIGRlbW9uc3RyYXRlZCBoZXJlOiAoZ2l0aHViLmNvbS9qYXVraWEvZWFzaWUpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiBlYXNlT3V0KCdxdWFkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJHtlYXNlT3V0KCdxdWFkJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnZGl2Jzoge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogJ2N1YmljLWJlemllcigwLjI1MCwgIDAuNDYwLCAwLjQ1MCwgMC45NDApJyxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBlYXNlT3V0KGZ1bmN0aW9uTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb25zTWFwJDFbZnVuY3Rpb25OYW1lLnRvTG93ZXJDYXNlKCkudHJpbSgpXTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgQ1NTIGNhbGMgZm9ybXVsYSBmb3IgbGluZWFyIGludGVycG9sYXRpb24gb2YgYSBwcm9wZXJ0eSBiZXR3ZWVuIHR3byB2YWx1ZXMuIEFjY2VwdHMgb3B0aW9uYWwgbWluU2NyZWVuIChkZWZhdWx0cyB0byAnMzIwcHgnKSBhbmQgbWF4U2NyZWVuIChkZWZhdWx0cyB0byAnMTIwMHB4JykuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgZm9udFNpemU6IGJldHdlZW4oJzIwcHgnLCAnMTAwcHgnLCAnNDAwcHgnLCAnMTAwMHB4JyksXG4gKiAgIGZvbnRTaXplOiBiZXR3ZWVuKCcyMHB4JywgJzEwMHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgZm9udFNpemU6ICR7YmV0d2VlbignMjBweCcsICcxMDBweCcsICc0MDBweCcsICcxMDAwcHgnKX07XG4gKiAgIGZvbnRTaXplOiAke2JldHdlZW4oJzIwcHgnLCAnMTAwcHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogaDE6IHtcbiAqICAgJ2ZvbnRTaXplJzogJ2NhbGMoLTMzLjMzMzMzMzMzMzMzMzM0cHggKyAxMy4zMzMzMzMzMzMzMzMzMzR2dyknLFxuICogICAnZm9udFNpemUnOiAnY2FsYygtOS4wOTA5MDkwOTA5MDkwOTNweCArIDkuMDkwOTA5MDkwOTA5MDkydncpJ1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGJldHdlZW4oZnJvbVNpemUsIHRvU2l6ZSwgbWluU2NyZWVuLCBtYXhTY3JlZW4pIHtcbiAgaWYgKG1pblNjcmVlbiA9PT0gdm9pZCAwKSB7XG4gICAgbWluU2NyZWVuID0gJzMyMHB4JztcbiAgfVxuXG4gIGlmIChtYXhTY3JlZW4gPT09IHZvaWQgMCkge1xuICAgIG1heFNjcmVlbiA9ICcxMjAwcHgnO1xuICB9XG5cbiAgdmFyIF9nZXRWYWx1ZUFuZFVuaXQgPSBnZXRWYWx1ZUFuZFVuaXQoZnJvbVNpemUpLFxuICAgICAgdW5pdGxlc3NGcm9tU2l6ZSA9IF9nZXRWYWx1ZUFuZFVuaXRbMF0sXG4gICAgICBmcm9tU2l6ZVVuaXQgPSBfZ2V0VmFsdWVBbmRVbml0WzFdO1xuXG4gIHZhciBfZ2V0VmFsdWVBbmRVbml0MiA9IGdldFZhbHVlQW5kVW5pdCh0b1NpemUpLFxuICAgICAgdW5pdGxlc3NUb1NpemUgPSBfZ2V0VmFsdWVBbmRVbml0MlswXSxcbiAgICAgIHRvU2l6ZVVuaXQgPSBfZ2V0VmFsdWVBbmRVbml0MlsxXTtcblxuICB2YXIgX2dldFZhbHVlQW5kVW5pdDMgPSBnZXRWYWx1ZUFuZFVuaXQobWluU2NyZWVuKSxcbiAgICAgIHVuaXRsZXNzTWluU2NyZWVuID0gX2dldFZhbHVlQW5kVW5pdDNbMF0sXG4gICAgICBtaW5TY3JlZW5Vbml0ID0gX2dldFZhbHVlQW5kVW5pdDNbMV07XG5cbiAgdmFyIF9nZXRWYWx1ZUFuZFVuaXQ0ID0gZ2V0VmFsdWVBbmRVbml0KG1heFNjcmVlbiksXG4gICAgICB1bml0bGVzc01heFNjcmVlbiA9IF9nZXRWYWx1ZUFuZFVuaXQ0WzBdLFxuICAgICAgbWF4U2NyZWVuVW5pdCA9IF9nZXRWYWx1ZUFuZFVuaXQ0WzFdO1xuXG4gIGlmICh0eXBlb2YgdW5pdGxlc3NNaW5TY3JlZW4gIT09ICdudW1iZXInIHx8IHR5cGVvZiB1bml0bGVzc01heFNjcmVlbiAhPT0gJ251bWJlcicgfHwgIW1pblNjcmVlblVuaXQgfHwgIW1heFNjcmVlblVuaXQgfHwgbWluU2NyZWVuVW5pdCAhPT0gbWF4U2NyZWVuVW5pdCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ3KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdW5pdGxlc3NGcm9tU2l6ZSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHVuaXRsZXNzVG9TaXplICE9PSAnbnVtYmVyJyB8fCBmcm9tU2l6ZVVuaXQgIT09IHRvU2l6ZVVuaXQpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0OCk7XG4gIH1cblxuICBpZiAoZnJvbVNpemVVbml0ICE9PSBtaW5TY3JlZW5Vbml0IHx8IHRvU2l6ZVVuaXQgIT09IG1heFNjcmVlblVuaXQpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3Nik7XG4gIH1cblxuICB2YXIgc2xvcGUgPSAodW5pdGxlc3NGcm9tU2l6ZSAtIHVuaXRsZXNzVG9TaXplKSAvICh1bml0bGVzc01pblNjcmVlbiAtIHVuaXRsZXNzTWF4U2NyZWVuKTtcbiAgdmFyIGJhc2UgPSB1bml0bGVzc1RvU2l6ZSAtIHNsb3BlICogdW5pdGxlc3NNYXhTY3JlZW47XG4gIHJldHVybiBcImNhbGMoXCIgKyBiYXNlLnRvRml4ZWQoMikgKyAoZnJvbVNpemVVbml0IHx8ICcnKSArIFwiICsgXCIgKyAoMTAwICogc2xvcGUpLnRvRml4ZWQoMikgKyBcInZ3KVwiO1xufVxuXG4vKipcbiAqIENTUyB0byBjb250YWluIGEgZmxvYXQgKGNyZWRpdCB0byBDU1NNb2pvKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAgLi4uY2xlYXJGaXgoKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtjbGVhckZpeCgpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnJjo6YWZ0ZXInOiB7XG4gKiAgICdjbGVhcic6ICdib3RoJyxcbiAqICAgJ2NvbnRlbnQnOiAnXCJcIicsXG4gKiAgICdkaXNwbGF5JzogJ3RhYmxlJ1xuICogfVxuICovXG5mdW5jdGlvbiBjbGVhckZpeChwYXJlbnQpIHtcbiAgdmFyIF9yZWY7XG5cbiAgaWYgKHBhcmVudCA9PT0gdm9pZCAwKSB7XG4gICAgcGFyZW50ID0gJyYnO1xuICB9XG5cbiAgdmFyIHBzZXVkb1NlbGVjdG9yID0gcGFyZW50ICsgXCI6OmFmdGVyXCI7XG4gIHJldHVybiBfcmVmID0ge30sIF9yZWZbcHNldWRvU2VsZWN0b3JdID0ge1xuICAgIGNsZWFyOiAnYm90aCcsXG4gICAgY29udGVudDogJ1wiXCInLFxuICAgIGRpc3BsYXk6ICd0YWJsZSdcbiAgfSwgX3JlZjtcbn1cblxuLyoqXG4gKiBDU1MgdG8gZnVsbHkgY292ZXIgYW4gYXJlYS4gQ2FuIG9wdGlvbmFsbHkgYmUgcGFzc2VkIGFuIG9mZnNldCB0byBhY3QgYXMgYSBcInBhZGRpbmdcIi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5jb3ZlcigpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Y292ZXIoKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gKiAgICd0b3AnOiAnMCcsXG4gKiAgICdyaWdodDogJzAnLFxuICogICAnYm90dG9tJzogJzAnLFxuICogICAnbGVmdDogJzAnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGNvdmVyKG9mZnNldCkge1xuICBpZiAob2Zmc2V0ID09PSB2b2lkIDApIHtcbiAgICBvZmZzZXQgPSAwO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IG9mZnNldCxcbiAgICByaWdodDogb2Zmc2V0LFxuICAgIGJvdHRvbTogb2Zmc2V0LFxuICAgIGxlZnQ6IG9mZnNldFxuICB9O1xufVxuXG4vKipcbiAqIENTUyB0byByZXByZXNlbnQgdHJ1bmNhdGVkIHRleHQgd2l0aCBhbiBlbGxpcHNpcy4gWW91IGNhbiBvcHRpb25hbGx5IHBhc3MgYSBtYXgtd2lkdGggYW5kIG51bWJlciBvZiBsaW5lcyBiZWZvcmUgdHJ1bmNhdGluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5lbGxpcHNpcygnMjUwcHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2VsbGlwc2lzKCcyNTBweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJyxcbiAqICAgJ21heFdpZHRoJzogJzI1MHB4JyxcbiAqICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gKiAgICd0ZXh0T3ZlcmZsb3cnOiAnZWxsaXBzaXMnLFxuICogICAnd2hpdGVTcGFjZSc6ICdub3dyYXAnLFxuICogICAnd29yZFdyYXAnOiAnbm9ybWFsJ1xuICogfVxuICovXG5mdW5jdGlvbiBlbGxpcHNpcyh3aWR0aCwgbGluZXMpIHtcbiAgaWYgKGxpbmVzID09PSB2b2lkIDApIHtcbiAgICBsaW5lcyA9IDE7XG4gIH1cblxuICB2YXIgc3R5bGVzID0ge1xuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgIG1heFdpZHRoOiB3aWR0aCB8fCAnMTAwJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcbiAgICB3b3JkV3JhcDogJ25vcm1hbCdcbiAgfTtcbiAgcmV0dXJuIGxpbmVzID4gMSA/IF9leHRlbmRzKHt9LCBzdHlsZXMsIHtcbiAgICBXZWJraXRCb3hPcmllbnQ6ICd2ZXJ0aWNhbCcsXG4gICAgV2Via2l0TGluZUNsYW1wOiBsaW5lcyxcbiAgICBkaXNwbGF5OiAnLXdlYmtpdC1ib3gnLFxuICAgIHdoaXRlU3BhY2U6ICdub3JtYWwnXG4gIH0pIDogc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG8sIGFsbG93QXJyYXlMaWtlKSB7IHZhciBpdCA9IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdIHx8IG9bXCJAQGl0ZXJhdG9yXCJdOyBpZiAoaXQpIHJldHVybiAoaXQgPSBpdC5jYWxsKG8pKS5uZXh0LmJpbmQoaXQpOyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAoaXQgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpIHx8IGFsbG93QXJyYXlMaWtlICYmIG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7IGlmIChpdCkgbyA9IGl0OyB2YXIgaSA9IDA7IHJldHVybiBmdW5jdGlvbiAoKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2V0IG9mIG1lZGlhIHF1ZXJpZXMgdGhhdCByZXNpemVzIGEgcHJvcGVydHkgKG9yIHNldCBvZiBwcm9wZXJ0aWVzKSBiZXR3ZWVuIGEgcHJvdmlkZWQgZnJvbVNpemUgYW5kIHRvU2l6ZS4gQWNjZXB0cyBvcHRpb25hbCBtaW5TY3JlZW4gKGRlZmF1bHRzIHRvICczMjBweCcpIGFuZCBtYXhTY3JlZW4gKGRlZmF1bHRzIHRvICcxMjAwcHgnKSB0byBjb25zdHJhaW4gdGhlIGludGVycG9sYXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uZmx1aWRSYW5nZShcbiAqICAgIHtcbiAqICAgICAgICBwcm9wOiAncGFkZGluZycsXG4gKiAgICAgICAgZnJvbVNpemU6ICcyMHB4JyxcbiAqICAgICAgICB0b1NpemU6ICcxMDBweCcsXG4gKiAgICAgIH0sXG4gKiAgICAgICc0MDBweCcsXG4gKiAgICAgICcxMDAwcHgnLFxuICogICAgKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2ZsdWlkUmFuZ2UoXG4gKiAgICAgIHtcbiAqICAgICAgICBwcm9wOiAncGFkZGluZycsXG4gKiAgICAgICAgZnJvbVNpemU6ICcyMHB4JyxcbiAqICAgICAgICB0b1NpemU6ICcxMDBweCcsXG4gKiAgICAgIH0sXG4gKiAgICAgICc0MDBweCcsXG4gKiAgICAgICcxMDAwcHgnLFxuICogICAgKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgIFwiQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweClcIjogT2JqZWN0IHtcbiAqICAgICBcInBhZGRpbmdcIjogXCIxMDBweFwiLFxuICogICB9LFxuICogICBcIkBtZWRpYSAobWluLXdpZHRoOiA0MDBweClcIjogT2JqZWN0IHtcbiAqICAgICBcInBhZGRpbmdcIjogXCJjYWxjKC0zMy4zMzMzMzMzMzMzMzMzNHB4ICsgMTMuMzMzMzMzMzMzMzMzMzM0dncpXCIsXG4gKiAgIH0sXG4gKiAgIFwicGFkZGluZ1wiOiBcIjIwcHhcIixcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZmx1aWRSYW5nZShjc3NQcm9wLCBtaW5TY3JlZW4sIG1heFNjcmVlbikge1xuICBpZiAobWluU2NyZWVuID09PSB2b2lkIDApIHtcbiAgICBtaW5TY3JlZW4gPSAnMzIwcHgnO1xuICB9XG5cbiAgaWYgKG1heFNjcmVlbiA9PT0gdm9pZCAwKSB7XG4gICAgbWF4U2NyZWVuID0gJzEyMDBweCc7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoY3NzUHJvcCkgJiYgdHlwZW9mIGNzc1Byb3AgIT09ICdvYmplY3QnIHx8IGNzc1Byb3AgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0OSk7XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShjc3NQcm9wKSkge1xuICAgIHZhciBtZWRpYVF1ZXJpZXMgPSB7fTtcbiAgICB2YXIgZmFsbGJhY2tzID0ge307XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGNzc1Byb3ApLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgdmFyIF9leHRlbmRzMiwgX2V4dGVuZHMzO1xuXG4gICAgICB2YXIgb2JqID0gX3N0ZXAudmFsdWU7XG5cbiAgICAgIGlmICghb2JqLnByb3AgfHwgIW9iai5mcm9tU2l6ZSB8fCAhb2JqLnRvU2l6ZSkge1xuICAgICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1MCk7XG4gICAgICB9XG5cbiAgICAgIGZhbGxiYWNrc1tvYmoucHJvcF0gPSBvYmouZnJvbVNpemU7XG4gICAgICBtZWRpYVF1ZXJpZXNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtaW5TY3JlZW4gKyBcIilcIl0gPSBfZXh0ZW5kcyh7fSwgbWVkaWFRdWVyaWVzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWluU2NyZWVuICsgXCIpXCJdLCAoX2V4dGVuZHMyID0ge30sIF9leHRlbmRzMltvYmoucHJvcF0gPSBiZXR3ZWVuKG9iai5mcm9tU2l6ZSwgb2JqLnRvU2l6ZSwgbWluU2NyZWVuLCBtYXhTY3JlZW4pLCBfZXh0ZW5kczIpKTtcbiAgICAgIG1lZGlhUXVlcmllc1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1heFNjcmVlbiArIFwiKVwiXSA9IF9leHRlbmRzKHt9LCBtZWRpYVF1ZXJpZXNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtYXhTY3JlZW4gKyBcIilcIl0sIChfZXh0ZW5kczMgPSB7fSwgX2V4dGVuZHMzW29iai5wcm9wXSA9IG9iai50b1NpemUsIF9leHRlbmRzMykpO1xuICAgIH1cblxuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZmFsbGJhY2tzLCBtZWRpYVF1ZXJpZXMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBfcmVmLCBfcmVmMiwgX3JlZjM7XG5cbiAgICBpZiAoIWNzc1Byb3AucHJvcCB8fCAhY3NzUHJvcC5mcm9tU2l6ZSB8fCAhY3NzUHJvcC50b1NpemUpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDUxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlZjMgPSB7fSwgX3JlZjNbY3NzUHJvcC5wcm9wXSA9IGNzc1Byb3AuZnJvbVNpemUsIF9yZWYzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWluU2NyZWVuICsgXCIpXCJdID0gKF9yZWYgPSB7fSwgX3JlZltjc3NQcm9wLnByb3BdID0gYmV0d2Vlbihjc3NQcm9wLmZyb21TaXplLCBjc3NQcm9wLnRvU2l6ZSwgbWluU2NyZWVuLCBtYXhTY3JlZW4pLCBfcmVmKSwgX3JlZjNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtYXhTY3JlZW4gKyBcIilcIl0gPSAoX3JlZjIgPSB7fSwgX3JlZjJbY3NzUHJvcC5wcm9wXSA9IGNzc1Byb3AudG9TaXplLCBfcmVmMiksIF9yZWYzO1xuICB9XG59XG5cbnZhciBkYXRhVVJJUmVnZXggPSAvXlxccypkYXRhOihbYS16XStcXC9bYS16LV0rKDtbYS16LV0rPVthLXotXSspPyk/KDtjaGFyc2V0PVthLXowLTktXSspPyg7YmFzZTY0KT8sW2EtejAtOSEkJicsKCkqKyw7PVxcLS5ffjpALz8lXFxzXSpcXHMqJC9pO1xudmFyIGZvcm1hdEhpbnRNYXAgPSB7XG4gIHdvZmY6ICd3b2ZmJyxcbiAgd29mZjI6ICd3b2ZmMicsXG4gIHR0ZjogJ3RydWV0eXBlJyxcbiAgb3RmOiAnb3BlbnR5cGUnLFxuICBlb3Q6ICdlbWJlZGRlZC1vcGVudHlwZScsXG4gIHN2ZzogJ3N2ZycsXG4gIHN2Z3o6ICdzdmcnXG59O1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUZvcm1hdEhpbnQoZm9ybWF0LCBmb3JtYXRIaW50KSB7XG4gIGlmICghZm9ybWF0SGludCkgcmV0dXJuICcnO1xuICByZXR1cm4gXCIgZm9ybWF0KFxcXCJcIiArIGZvcm1hdEhpbnRNYXBbZm9ybWF0XSArIFwiXFxcIilcIjtcbn1cblxuZnVuY3Rpb24gaXNEYXRhVVJJKGZvbnRGaWxlUGF0aCkge1xuICByZXR1cm4gISFmb250RmlsZVBhdGgucmVwbGFjZSgvXFxzKy9nLCAnICcpLm1hdGNoKGRhdGFVUklSZWdleCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRmlsZVJlZmVyZW5jZXMoZm9udEZpbGVQYXRoLCBmaWxlRm9ybWF0cywgZm9ybWF0SGludCkge1xuICBpZiAoaXNEYXRhVVJJKGZvbnRGaWxlUGF0aCkpIHtcbiAgICByZXR1cm4gXCJ1cmwoXFxcIlwiICsgZm9udEZpbGVQYXRoICsgXCJcXFwiKVwiICsgZ2VuZXJhdGVGb3JtYXRIaW50KGZpbGVGb3JtYXRzWzBdLCBmb3JtYXRIaW50KTtcbiAgfVxuXG4gIHZhciBmaWxlRm9udFJlZmVyZW5jZXMgPSBmaWxlRm9ybWF0cy5tYXAoZnVuY3Rpb24gKGZvcm1hdCkge1xuICAgIHJldHVybiBcInVybChcXFwiXCIgKyBmb250RmlsZVBhdGggKyBcIi5cIiArIGZvcm1hdCArIFwiXFxcIilcIiArIGdlbmVyYXRlRm9ybWF0SGludChmb3JtYXQsIGZvcm1hdEhpbnQpO1xuICB9KTtcbiAgcmV0dXJuIGZpbGVGb250UmVmZXJlbmNlcy5qb2luKCcsICcpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUxvY2FsUmVmZXJlbmNlcyhsb2NhbEZvbnRzKSB7XG4gIHZhciBsb2NhbEZvbnRSZWZlcmVuY2VzID0gbG9jYWxGb250cy5tYXAoZnVuY3Rpb24gKGZvbnQpIHtcbiAgICByZXR1cm4gXCJsb2NhbChcXFwiXCIgKyBmb250ICsgXCJcXFwiKVwiO1xuICB9KTtcbiAgcmV0dXJuIGxvY2FsRm9udFJlZmVyZW5jZXMuam9pbignLCAnKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTb3VyY2VzKGZvbnRGaWxlUGF0aCwgbG9jYWxGb250cywgZmlsZUZvcm1hdHMsIGZvcm1hdEhpbnQpIHtcbiAgdmFyIGZvbnRSZWZlcmVuY2VzID0gW107XG4gIGlmIChsb2NhbEZvbnRzKSBmb250UmVmZXJlbmNlcy5wdXNoKGdlbmVyYXRlTG9jYWxSZWZlcmVuY2VzKGxvY2FsRm9udHMpKTtcblxuICBpZiAoZm9udEZpbGVQYXRoKSB7XG4gICAgZm9udFJlZmVyZW5jZXMucHVzaChnZW5lcmF0ZUZpbGVSZWZlcmVuY2VzKGZvbnRGaWxlUGF0aCwgZmlsZUZvcm1hdHMsIGZvcm1hdEhpbnQpKTtcbiAgfVxuXG4gIHJldHVybiBmb250UmVmZXJlbmNlcy5qb2luKCcsICcpO1xufVxuLyoqXG4gKiBDU1MgZm9yIGEgQGZvbnQtZmFjZSBkZWNsYXJhdGlvbi4gRGVmYXVsdHMgdG8gY2hlY2sgZm9yIGxvY2FsIGNvcGllcyBvZiB0aGUgZm9udCBvbiB0aGUgdXNlcidzIG1hY2hpbmUuIFlvdSBjYW4gZGlzYWJsZSB0aGlzIGJ5IHBhc3NpbmcgYG51bGxgIHRvIGxvY2FsRm9udHMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgYmFzaWMgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgIC4uLmZvbnRGYWNlKHtcbiAqICAgICAgJ2ZvbnRGYW1pbHknOiAnU2Fucy1Qcm8nLFxuICogICAgICAnZm9udEZpbGVQYXRoJzogJ3BhdGgvdG8vZmlsZSdcbiAqICAgIH0pXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgYmFzaWMgdXNhZ2VcbiAqIGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgJHtcbiAqICAgZm9udEZhY2Uoe1xuICogICAgICdmb250RmFtaWx5JzogJ1NhbnMtUHJvJyxcbiAqICAgICAnZm9udEZpbGVQYXRoJzogJ3BhdGgvdG8vZmlsZSdcbiAqICAgfVxuICogKX1gXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdAZm9udC1mYWNlJzoge1xuICogICAnZm9udEZhbWlseSc6ICdTYW5zLVBybycsXG4gKiAgICdzcmMnOiAndXJsKFwicGF0aC90by9maWxlLmVvdFwiKSwgdXJsKFwicGF0aC90by9maWxlLndvZmYyXCIpLCB1cmwoXCJwYXRoL3RvL2ZpbGUud29mZlwiKSwgdXJsKFwicGF0aC90by9maWxlLnR0ZlwiKSwgdXJsKFwicGF0aC90by9maWxlLnN2Z1wiKScsXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiBmb250RmFjZShfcmVmKSB7XG4gIHZhciBmb250RmFtaWx5ID0gX3JlZi5mb250RmFtaWx5LFxuICAgICAgZm9udEZpbGVQYXRoID0gX3JlZi5mb250RmlsZVBhdGgsXG4gICAgICBmb250U3RyZXRjaCA9IF9yZWYuZm9udFN0cmV0Y2gsXG4gICAgICBmb250U3R5bGUgPSBfcmVmLmZvbnRTdHlsZSxcbiAgICAgIGZvbnRWYXJpYW50ID0gX3JlZi5mb250VmFyaWFudCxcbiAgICAgIGZvbnRXZWlnaHQgPSBfcmVmLmZvbnRXZWlnaHQsXG4gICAgICBfcmVmJGZpbGVGb3JtYXRzID0gX3JlZi5maWxlRm9ybWF0cyxcbiAgICAgIGZpbGVGb3JtYXRzID0gX3JlZiRmaWxlRm9ybWF0cyA9PT0gdm9pZCAwID8gWydlb3QnLCAnd29mZjInLCAnd29mZicsICd0dGYnLCAnc3ZnJ10gOiBfcmVmJGZpbGVGb3JtYXRzLFxuICAgICAgX3JlZiRmb3JtYXRIaW50ID0gX3JlZi5mb3JtYXRIaW50LFxuICAgICAgZm9ybWF0SGludCA9IF9yZWYkZm9ybWF0SGludCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGZvcm1hdEhpbnQsXG4gICAgICBfcmVmJGxvY2FsRm9udHMgPSBfcmVmLmxvY2FsRm9udHMsXG4gICAgICBsb2NhbEZvbnRzID0gX3JlZiRsb2NhbEZvbnRzID09PSB2b2lkIDAgPyBbZm9udEZhbWlseV0gOiBfcmVmJGxvY2FsRm9udHMsXG4gICAgICB1bmljb2RlUmFuZ2UgPSBfcmVmLnVuaWNvZGVSYW5nZSxcbiAgICAgIGZvbnREaXNwbGF5ID0gX3JlZi5mb250RGlzcGxheSxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5ncyA9IF9yZWYuZm9udFZhcmlhdGlvblNldHRpbmdzLFxuICAgICAgZm9udEZlYXR1cmVTZXR0aW5ncyA9IF9yZWYuZm9udEZlYXR1cmVTZXR0aW5ncztcbiAgLy8gRXJyb3IgSGFuZGxpbmdcbiAgaWYgKCFmb250RmFtaWx5KSB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1NSk7XG5cbiAgaWYgKCFmb250RmlsZVBhdGggJiYgIWxvY2FsRm9udHMpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1Mik7XG4gIH1cblxuICBpZiAobG9jYWxGb250cyAmJiAhQXJyYXkuaXNBcnJheShsb2NhbEZvbnRzKSkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDUzKTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheShmaWxlRm9ybWF0cykpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1NCk7XG4gIH1cblxuICB2YXIgZm9udEZhY2VEZWNsYXJhdGlvbiA9IHtcbiAgICAnQGZvbnQtZmFjZSc6IHtcbiAgICAgIGZvbnRGYW1pbHk6IGZvbnRGYW1pbHksXG4gICAgICBzcmM6IGdlbmVyYXRlU291cmNlcyhmb250RmlsZVBhdGgsIGxvY2FsRm9udHMsIGZpbGVGb3JtYXRzLCBmb3JtYXRIaW50KSxcbiAgICAgIHVuaWNvZGVSYW5nZTogdW5pY29kZVJhbmdlLFxuICAgICAgZm9udFN0cmV0Y2g6IGZvbnRTdHJldGNoLFxuICAgICAgZm9udFN0eWxlOiBmb250U3R5bGUsXG4gICAgICBmb250VmFyaWFudDogZm9udFZhcmlhbnQsXG4gICAgICBmb250V2VpZ2h0OiBmb250V2VpZ2h0LFxuICAgICAgZm9udERpc3BsYXk6IGZvbnREaXNwbGF5LFxuICAgICAgZm9udFZhcmlhdGlvblNldHRpbmdzOiBmb250VmFyaWF0aW9uU2V0dGluZ3MsXG4gICAgICBmb250RmVhdHVyZVNldHRpbmdzOiBmb250RmVhdHVyZVNldHRpbmdzXG4gICAgfVxuICB9OyAvLyBSZW1vdmVzIHVuZGVmaW5lZCBmaWVsZHMgZm9yIGNsZWFuZXIgY3NzIG9iamVjdC5cblxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShmb250RmFjZURlY2xhcmF0aW9uKSk7XG59XG5cbi8qKlxuICogQ1NTIHRvIGhpZGUgdGV4dCB0byBzaG93IGEgYmFja2dyb3VuZCBpbWFnZSBpbiBhIFNFTy1mcmllbmRseSB3YXkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICd1cmwobG9nby5wbmcpJyxcbiAqICAgLi4uaGlkZVRleHQoKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZEltYWdlOiB1cmwobG9nby5wbmcpO1xuICogICAke2hpZGVUZXh0KCl9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnZGl2Jzoge1xuICogICAnYmFja2dyb3VuZEltYWdlJzogJ3VybChsb2dvLnBuZyknLFxuICogICAndGV4dEluZGVudCc6ICcxMDElJyxcbiAqICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gKiAgICd3aGl0ZVNwYWNlJzogJ25vd3JhcCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhpZGVUZXh0KCkge1xuICByZXR1cm4ge1xuICAgIHRleHRJbmRlbnQ6ICcxMDElJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgfTtcbn1cblxuLyoqXG4gKiBDU1MgdG8gaGlkZSBjb250ZW50IHZpc3VhbGx5IGJ1dCByZW1haW4gYWNjZXNzaWJsZSB0byBzY3JlZW4gcmVhZGVycy5cbiAqIGZyb20gW0hUTUw1IEJvaWxlcnBsYXRlXShodHRwczovL2dpdGh1Yi5jb20vaDVicC9odG1sNS1ib2lsZXJwbGF0ZS9ibG9iLzlhMTc2ZjU3YWYxY2ZlOGVjNzAzMDBkYTQ2MjFmYjliMDdlNWZhMzEvc3JjL2Nzcy9tYWluLmNzcyNMMTIxKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmhpZGVWaXN1YWxseSgpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2hpZGVWaXN1YWxseSgpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ2JvcmRlcic6ICcwJyxcbiAqICAgJ2NsaXAnOiAncmVjdCgwIDAgMCAwKScsXG4gKiAgICdoZWlnaHQnOiAnMXB4JyxcbiAqICAgJ21hcmdpbic6ICctMXB4JyxcbiAqICAgJ292ZXJmbG93JzogJ2hpZGRlbicsXG4gKiAgICdwYWRkaW5nJzogJzAnLFxuICogICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICogICAnd2hpdGVTcGFjZSc6ICdub3dyYXAnLFxuICogICAnd2lkdGgnOiAnMXB4JyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaGlkZVZpc3VhbGx5KCkge1xuICByZXR1cm4ge1xuICAgIGJvcmRlcjogJzAnLFxuICAgIGNsaXA6ICdyZWN0KDAgMCAwIDApJyxcbiAgICBoZWlnaHQ6ICcxcHgnLFxuICAgIG1hcmdpbjogJy0xcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICBwYWRkaW5nOiAnMCcsXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgd2lkdGg6ICcxcHgnXG4gIH07XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgbWVkaWEgcXVlcnkgdG8gdGFyZ2V0IEhpRFBJIGRldmljZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICBbaGlEUEkoMS41KV06IHtcbiAqICAgIHdpZHRoOiAyMDBweDtcbiAqICB9XG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7aGlEUEkoMS41KX0ge1xuICogICAgIHdpZHRoOiAyMDBweDtcbiAqICAgfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLFxuICogIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjUpLFxuICogIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41LzEpLFxuICogIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDE0NGRwaSksXG4gKiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMS41ZHBweCknOiB7XG4gKiAgICd3aWR0aCc6ICcyMDBweCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhpRFBJKHJhdGlvKSB7XG4gIGlmIChyYXRpbyA9PT0gdm9pZCAwKSB7XG4gICAgcmF0aW8gPSAxLjM7XG4gIH1cblxuICByZXR1cm4gXCJcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiBcIiArIHJhdGlvICsgXCIpLFxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogXCIgKyByYXRpbyArIFwiKSxcXG4gICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiBcIiArIHJhdGlvICsgXCIvMSksXFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IFwiICsgTWF0aC5yb3VuZChyYXRpbyAqIDk2KSArIFwiZHBpKSxcXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogXCIgKyByYXRpbyArIFwiZHBweClcXG4gIFwiO1xufVxuXG5mdW5jdGlvbiBjb25zdHJ1Y3RHcmFkaWVudFZhbHVlKGxpdGVyYWxzKSB7XG4gIHZhciB0ZW1wbGF0ZSA9ICcnO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdWJzdGl0dXRpb25zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBzdWJzdGl0dXRpb25zW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGl0ZXJhbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB0ZW1wbGF0ZSArPSBsaXRlcmFsc1tpXTtcblxuICAgIGlmIChpID09PSBzdWJzdGl0dXRpb25zLmxlbmd0aCAtIDEgJiYgc3Vic3RpdHV0aW9uc1tpXSkge1xuICAgICAgdmFyIGRlZmluZWRWYWx1ZXMgPSBzdWJzdGl0dXRpb25zLmZpbHRlcihmdW5jdGlvbiAoc3Vic3RpdHV0ZSkge1xuICAgICAgICByZXR1cm4gISFzdWJzdGl0dXRlO1xuICAgICAgfSk7IC8vIEFkZHMgbGVhZGluZyBjb21hIGlmIHByb3BlcnRpZXMgcHJlY2VlZCBjb2xvci1zdG9wc1xuXG4gICAgICBpZiAoZGVmaW5lZFZhbHVlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUuc2xpY2UoMCwgLTEpO1xuICAgICAgICB0ZW1wbGF0ZSArPSBcIiwgXCIgKyBzdWJzdGl0dXRpb25zW2ldOyAvLyBObyB0cmFpbGluZyBzcGFjZSBpZiBjb2xvci1zdG9wcyBpcyB0aGUgb25seSBwYXJhbSBwcm92aWRlZFxuICAgICAgfSBlbHNlIGlmIChkZWZpbmVkVmFsdWVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICB0ZW1wbGF0ZSArPSBcIlwiICsgc3Vic3RpdHV0aW9uc1tpXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN1YnN0aXR1dGlvbnNbaV0pIHtcbiAgICAgIHRlbXBsYXRlICs9IHN1YnN0aXR1dGlvbnNbaV0gKyBcIiBcIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGVtcGxhdGUudHJpbSgpO1xufVxuXG52YXIgX3RlbXBsYXRlT2JqZWN0JDE7XG5cbi8qKlxuICogQ1NTIGZvciBkZWNsYXJpbmcgYSBsaW5lYXIgZ3JhZGllbnQsIGluY2x1ZGluZyBhIGZhbGxiYWNrIGJhY2tncm91bmQtY29sb3IuIFRoZSBmYWxsYmFjayBpcyBlaXRoZXIgdGhlIGZpcnN0IGNvbG9yLXN0b3Agb3IgYW4gZXhwbGljaXRseSBwYXNzZWQgZmFsbGJhY2sgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ubGluZWFyR3JhZGllbnQoe1xuICAgICAgICBjb2xvclN0b3BzOiBbJyMwMEZGRkYgMCUnLCAncmdiYSgwLCAwLCAyNTUsIDApIDUwJScsICcjMDAwMEZGIDk1JSddLFxuICAgICAgICB0b0RpcmVjdGlvbjogJ3RvIHRvcCByaWdodCcsXG4gICAgICAgIGZhbGxiYWNrOiAnI0ZGRicsXG4gICAgICB9KVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2xpbmVhckdyYWRpZW50KHtcbiAgICAgICAgY29sb3JTdG9wczogWycjMDBGRkZGIDAlJywgJ3JnYmEoMCwgMCwgMjU1LCAwKSA1MCUnLCAnIzAwMDBGRiA5NSUnXSxcbiAgICAgICAgdG9EaXJlY3Rpb246ICd0byB0b3AgcmlnaHQnLFxuICAgICAgICBmYWxsYmFjazogJyNGRkYnLFxuICAgICAgfSl9XG4gKmBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgICdiYWNrZ3JvdW5kQ29sb3InOiAnI0ZGRicsXG4gKiAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAnbGluZWFyLWdyYWRpZW50KHRvIHRvcCByaWdodCwgIzAwRkZGRiAwJSwgcmdiYSgwLCAwLCAyNTUsIDApIDUwJSwgIzAwMDBGRiA5NSUpJyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gbGluZWFyR3JhZGllbnQoX3JlZikge1xuICB2YXIgY29sb3JTdG9wcyA9IF9yZWYuY29sb3JTdG9wcyxcbiAgICAgIGZhbGxiYWNrID0gX3JlZi5mYWxsYmFjayxcbiAgICAgIF9yZWYkdG9EaXJlY3Rpb24gPSBfcmVmLnRvRGlyZWN0aW9uLFxuICAgICAgdG9EaXJlY3Rpb24gPSBfcmVmJHRvRGlyZWN0aW9uID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdG9EaXJlY3Rpb247XG5cbiAgaWYgKCFjb2xvclN0b3BzIHx8IGNvbG9yU3RvcHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDU2KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWxsYmFjayB8fCBjb2xvclN0b3BzWzBdLnJlcGxhY2UoLyxcXHMrL2csICcsJykuc3BsaXQoJyAnKVswXS5yZXBsYWNlKC8sKD89XFxTKS9nLCAnLCAnKSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNvbnN0cnVjdEdyYWRpZW50VmFsdWUoX3RlbXBsYXRlT2JqZWN0JDEgfHwgKF90ZW1wbGF0ZU9iamVjdCQxID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcImxpbmVhci1ncmFkaWVudChcIiwgXCJcIiwgXCIpXCJdKSksIHRvRGlyZWN0aW9uLCBjb2xvclN0b3BzLmpvaW4oJywgJykucmVwbGFjZSgvLCg/PVxcUykvZywgJywgJykpXG4gIH07XG59XG5cbi8qKlxuICogQ1NTIHRvIG5vcm1hbGl6ZSBhYm5vcm1hbGl0aWVzIGFjcm9zcyBicm93c2VycyAobm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzKVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICAuLi5ub3JtYWxpemUoKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWAke25vcm1hbGl6ZSgpfWBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogaHRtbCB7XG4gKiAgIGxpbmVIZWlnaHQ6IDEuMTUsXG4gKiAgIHRleHRTaXplQWRqdXN0OiAxMDAlLFxuICogfSAuLi5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKCkge1xuICB2YXIgX3JlZjtcblxuICByZXR1cm4gWyhfcmVmID0ge1xuICAgIGh0bWw6IHtcbiAgICAgIGxpbmVIZWlnaHQ6ICcxLjE1JyxcbiAgICAgIHRleHRTaXplQWRqdXN0OiAnMTAwJSdcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIG1hcmdpbjogJzAnXG4gICAgfSxcbiAgICBtYWluOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snXG4gICAgfSxcbiAgICBoMToge1xuICAgICAgZm9udFNpemU6ICcyZW0nLFxuICAgICAgbWFyZ2luOiAnMC42N2VtIDAnXG4gICAgfSxcbiAgICBocjoge1xuICAgICAgYm94U2l6aW5nOiAnY29udGVudC1ib3gnLFxuICAgICAgaGVpZ2h0OiAnMCcsXG4gICAgICBvdmVyZmxvdzogJ3Zpc2libGUnXG4gICAgfSxcbiAgICBwcmU6IHtcbiAgICAgIGZvbnRGYW1pbHk6ICdtb25vc3BhY2UsIG1vbm9zcGFjZScsXG4gICAgICBmb250U2l6ZTogJzFlbSdcbiAgICB9LFxuICAgIGE6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50J1xuICAgIH0sXG4gICAgJ2FiYnJbdGl0bGVdJzoge1xuICAgICAgYm9yZGVyQm90dG9tOiAnbm9uZScsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcbiAgICB9XG4gIH0sIF9yZWZbXCJiLFxcbiAgICBzdHJvbmdcIl0gPSB7XG4gICAgZm9udFdlaWdodDogJ2JvbGRlcidcbiAgfSwgX3JlZltcImNvZGUsXFxuICAgIGtiZCxcXG4gICAgc2FtcFwiXSA9IHtcbiAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlLCBtb25vc3BhY2UnLFxuICAgIGZvbnRTaXplOiAnMWVtJ1xuICB9LCBfcmVmLnNtYWxsID0ge1xuICAgIGZvbnRTaXplOiAnODAlJ1xuICB9LCBfcmVmW1wic3ViLFxcbiAgICBzdXBcIl0gPSB7XG4gICAgZm9udFNpemU6ICc3NSUnLFxuICAgIGxpbmVIZWlnaHQ6ICcwJyxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnYmFzZWxpbmUnXG4gIH0sIF9yZWYuc3ViID0ge1xuICAgIGJvdHRvbTogJy0wLjI1ZW0nXG4gIH0sIF9yZWYuc3VwID0ge1xuICAgIHRvcDogJy0wLjVlbSdcbiAgfSwgX3JlZi5pbWcgPSB7XG4gICAgYm9yZGVyU3R5bGU6ICdub25lJ1xuICB9LCBfcmVmW1wiYnV0dG9uLFxcbiAgICBpbnB1dCxcXG4gICAgb3B0Z3JvdXAsXFxuICAgIHNlbGVjdCxcXG4gICAgdGV4dGFyZWFcIl0gPSB7XG4gICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxuICAgIGZvbnRTaXplOiAnMTAwJScsXG4gICAgbGluZUhlaWdodDogJzEuMTUnLFxuICAgIG1hcmdpbjogJzAnXG4gIH0sIF9yZWZbXCJidXR0b24sXFxuICAgIGlucHV0XCJdID0ge1xuICAgIG92ZXJmbG93OiAndmlzaWJsZSdcbiAgfSwgX3JlZltcImJ1dHRvbixcXG4gICAgc2VsZWN0XCJdID0ge1xuICAgIHRleHRUcmFuc2Zvcm06ICdub25lJ1xuICB9LCBfcmVmW1wiYnV0dG9uLFxcbiAgICBodG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG4gICAgW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuICAgIFt0eXBlPVxcXCJzdWJtaXRcXFwiXVwiXSA9IHtcbiAgICBXZWJraXRBcHBlYXJhbmNlOiAnYnV0dG9uJ1xuICB9LCBfcmVmW1wiYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcbiAgICBbdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuICAgIFt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgICBbdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXJcIl0gPSB7XG4gICAgYm9yZGVyU3R5bGU6ICdub25lJyxcbiAgICBwYWRkaW5nOiAnMCdcbiAgfSwgX3JlZltcImJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG4gICAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcbiAgICBbdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG4gICAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nXCJdID0ge1xuICAgIG91dGxpbmU6ICcxcHggZG90dGVkIEJ1dHRvblRleHQnXG4gIH0sIF9yZWYuZmllbGRzZXQgPSB7XG4gICAgcGFkZGluZzogJzAuMzVlbSAwLjYyNWVtIDAuNzVlbSdcbiAgfSwgX3JlZi5sZWdlbmQgPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgY29sb3I6ICdpbmhlcml0JyxcbiAgICBkaXNwbGF5OiAndGFibGUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIHdoaXRlU3BhY2U6ICdub3JtYWwnXG4gIH0sIF9yZWYucHJvZ3Jlc3MgPSB7XG4gICAgdmVydGljYWxBbGlnbjogJ2Jhc2VsaW5lJ1xuICB9LCBfcmVmLnRleHRhcmVhID0ge1xuICAgIG92ZXJmbG93OiAnYXV0bydcbiAgfSwgX3JlZltcIlt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcbiAgICBbdHlwZT1cXFwicmFkaW9cXFwiXVwiXSA9IHtcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAnMCdcbiAgfSwgX3JlZltcIlt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG4gICAgW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uXCJdID0ge1xuICAgIGhlaWdodDogJ2F1dG8nXG4gIH0sIF9yZWZbJ1t0eXBlPVwic2VhcmNoXCJdJ10gPSB7XG4gICAgV2Via2l0QXBwZWFyYW5jZTogJ3RleHRmaWVsZCcsXG4gICAgb3V0bGluZU9mZnNldDogJy0ycHgnXG4gIH0sIF9yZWZbJ1t0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uJ10gPSB7XG4gICAgV2Via2l0QXBwZWFyYW5jZTogJ25vbmUnXG4gIH0sIF9yZWZbJzo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24nXSA9IHtcbiAgICBXZWJraXRBcHBlYXJhbmNlOiAnYnV0dG9uJyxcbiAgICBmb250OiAnaW5oZXJpdCdcbiAgfSwgX3JlZi5kZXRhaWxzID0ge1xuICAgIGRpc3BsYXk6ICdibG9jaydcbiAgfSwgX3JlZi5zdW1tYXJ5ID0ge1xuICAgIGRpc3BsYXk6ICdsaXN0LWl0ZW0nXG4gIH0sIF9yZWYudGVtcGxhdGUgPSB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH0sIF9yZWZbJ1toaWRkZW5dJ10gPSB7XG4gICAgZGlzcGxheTogJ25vbmUnXG4gIH0sIF9yZWYpLCB7XG4gICAgJ2FiYnJbdGl0bGVdJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUgZG90dGVkJ1xuICAgIH1cbiAgfV07XG59XG5cbnZhciBfdGVtcGxhdGVPYmplY3Q7XG5cbi8qKlxuICogQ1NTIGZvciBkZWNsYXJpbmcgYSByYWRpYWwgZ3JhZGllbnQsIGluY2x1ZGluZyBhIGZhbGxiYWNrIGJhY2tncm91bmQtY29sb3IuIFRoZSBmYWxsYmFjayBpcyBlaXRoZXIgdGhlIGZpcnN0IGNvbG9yLXN0b3Agb3IgYW4gZXhwbGljaXRseSBwYXNzZWQgZmFsbGJhY2sgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ucmFkaWFsR3JhZGllbnQoe1xuICogICAgIGNvbG9yU3RvcHM6IFsnIzAwRkZGRiAwJScsICdyZ2JhKDAsIDAsIDI1NSwgMCkgNTAlJywgJyMwMDAwRkYgOTUlJ10sXG4gKiAgICAgZXh0ZW50OiAnZmFydGhlc3QtY29ybmVyIGF0IDQ1cHggNDVweCcsXG4gKiAgICAgcG9zaXRpb246ICdjZW50ZXInLFxuICogICAgIHNoYXBlOiAnZWxsaXBzZScsXG4gKiAgIH0pXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7cmFkaWFsR3JhZGllbnQoe1xuICogICAgIGNvbG9yU3RvcHM6IFsnIzAwRkZGRiAwJScsICdyZ2JhKDAsIDAsIDI1NSwgMCkgNTAlJywgJyMwMDAwRkYgOTUlJ10sXG4gKiAgICAgZXh0ZW50OiAnZmFydGhlc3QtY29ybmVyIGF0IDQ1cHggNDVweCcsXG4gKiAgICAgcG9zaXRpb246ICdjZW50ZXInLFxuICogICAgIHNoYXBlOiAnZWxsaXBzZScsXG4gKiAgIH0pfVxuICpgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICAnYmFja2dyb3VuZENvbG9yJzogJyMwMEZGRkYnLFxuICogICAnYmFja2dyb3VuZEltYWdlJzogJ3JhZGlhbC1ncmFkaWVudChjZW50ZXIgZWxsaXBzZSBmYXJ0aGVzdC1jb3JuZXIgYXQgNDVweCA0NXB4LCAjMDBGRkZGIDAlLCByZ2JhKDAsIDAsIDI1NSwgMCkgNTAlLCAjMDAwMEZGIDk1JSknLFxuICogfVxuICovXG5mdW5jdGlvbiByYWRpYWxHcmFkaWVudChfcmVmKSB7XG4gIHZhciBjb2xvclN0b3BzID0gX3JlZi5jb2xvclN0b3BzLFxuICAgICAgX3JlZiRleHRlbnQgPSBfcmVmLmV4dGVudCxcbiAgICAgIGV4dGVudCA9IF9yZWYkZXh0ZW50ID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkZXh0ZW50LFxuICAgICAgZmFsbGJhY2sgPSBfcmVmLmZhbGxiYWNrLFxuICAgICAgX3JlZiRwb3NpdGlvbiA9IF9yZWYucG9zaXRpb24sXG4gICAgICBwb3NpdGlvbiA9IF9yZWYkcG9zaXRpb24gPT09IHZvaWQgMCA/ICcnIDogX3JlZiRwb3NpdGlvbixcbiAgICAgIF9yZWYkc2hhcGUgPSBfcmVmLnNoYXBlLFxuICAgICAgc2hhcGUgPSBfcmVmJHNoYXBlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkc2hhcGU7XG5cbiAgaWYgKCFjb2xvclN0b3BzIHx8IGNvbG9yU3RvcHMubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDU3KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBmYWxsYmFjayB8fCBjb2xvclN0b3BzWzBdLnNwbGl0KCcgJylbMF0sXG4gICAgYmFja2dyb3VuZEltYWdlOiBjb25zdHJ1Y3RHcmFkaWVudFZhbHVlKF90ZW1wbGF0ZU9iamVjdCB8fCAoX3RlbXBsYXRlT2JqZWN0ID0gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbExvb3NlKFtcInJhZGlhbC1ncmFkaWVudChcIiwgXCJcIiwgXCJcIiwgXCJcIiwgXCIpXCJdKSksIHBvc2l0aW9uLCBzaGFwZSwgZXh0ZW50LCBjb2xvclN0b3BzLmpvaW4oJywgJykpXG4gIH07XG59XG5cbi8qKlxuICogQSBoZWxwZXIgdG8gZ2VuZXJhdGUgYSByZXRpbmEgYmFja2dyb3VuZCBpbWFnZSBhbmQgbm9uLXJldGluYVxuICogYmFja2dyb3VuZCBpbWFnZS4gVGhlIHJldGluYSBiYWNrZ3JvdW5kIGltYWdlIHdpbGwgb3V0cHV0IHRvIGEgSGlEUEkgbWVkaWEgcXVlcnkuIFRoZSBtaXhpbiB1c2VzXG4gKiBhIF8yeC5wbmcgZmlsZW5hbWUgc3VmZml4IGJ5IGRlZmF1bHQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAuLi5yZXRpbmFJbWFnZSgnbXktaW1nJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtyZXRpbmFJbWFnZSgnbXktaW1nJyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICogZGl2IHtcbiAqICAgYmFja2dyb3VuZEltYWdlOiAndXJsKG15LWltZy5wbmcpJyxcbiAqICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zKSxcbiAqICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLS1tb3otZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjMpLFxuICogICAgb25seSBzY3JlZW4gYW5kICgtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjMvMSksXG4gKiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxNDRkcGkpLFxuICogICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMS41ZHBweCknOiB7XG4gKiAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKG15LWltZ18yeC5wbmcpJyxcbiAqICAgfVxuICogfVxuICovXG5mdW5jdGlvbiByZXRpbmFJbWFnZShmaWxlbmFtZSwgYmFja2dyb3VuZFNpemUsIGV4dGVuc2lvbiwgcmV0aW5hRmlsZW5hbWUsIHJldGluYVN1ZmZpeCkge1xuICB2YXIgX3JlZjtcblxuICBpZiAoZXh0ZW5zaW9uID09PSB2b2lkIDApIHtcbiAgICBleHRlbnNpb24gPSAncG5nJztcbiAgfVxuXG4gIGlmIChyZXRpbmFTdWZmaXggPT09IHZvaWQgMCkge1xuICAgIHJldGluYVN1ZmZpeCA9ICdfMngnO1xuICB9XG5cbiAgaWYgKCFmaWxlbmFtZSkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDU4KTtcbiAgfSAvLyBSZXBsYWNlIHRoZSBkb3QgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgcGFzc2VkIGV4dGVuc2lvbiBpZiBvbmUgZXhpc3RzXG5cblxuICB2YXIgZXh0ID0gZXh0ZW5zaW9uLnJlcGxhY2UoL15cXC4vLCAnJyk7XG4gIHZhciByRmlsZW5hbWUgPSByZXRpbmFGaWxlbmFtZSA/IHJldGluYUZpbGVuYW1lICsgXCIuXCIgKyBleHQgOiBcIlwiICsgZmlsZW5hbWUgKyByZXRpbmFTdWZmaXggKyBcIi5cIiArIGV4dDtcbiAgcmV0dXJuIF9yZWYgPSB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBcInVybChcIiArIGZpbGVuYW1lICsgXCIuXCIgKyBleHQgKyBcIilcIlxuICB9LCBfcmVmW2hpRFBJKCldID0gX2V4dGVuZHMoe1xuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyByRmlsZW5hbWUgKyBcIilcIlxuICB9LCBiYWNrZ3JvdW5kU2l6ZSA/IHtcbiAgICBiYWNrZ3JvdW5kU2l6ZTogYmFja2dyb3VuZFNpemVcbiAgfSA6IHt9KSwgX3JlZjtcbn1cblxuLyogZXNsaW50LWRpc2FibGUga2V5LXNwYWNpbmcgKi9cbnZhciBmdW5jdGlvbnNNYXAgPSB7XG4gIGVhc2VJbkJhY2s6ICdjdWJpYy1iZXppZXIoMC42MDAsIC0wLjI4MCwgMC43MzUsIDAuMDQ1KScsXG4gIGVhc2VJbkNpcmM6ICdjdWJpYy1iZXppZXIoMC42MDAsICAwLjA0MCwgMC45ODAsIDAuMzM1KScsXG4gIGVhc2VJbkN1YmljOiAnY3ViaWMtYmV6aWVyKDAuNTUwLCAgMC4wNTUsIDAuNjc1LCAwLjE5MCknLFxuICBlYXNlSW5FeHBvOiAnY3ViaWMtYmV6aWVyKDAuOTUwLCAgMC4wNTAsIDAuNzk1LCAwLjAzNSknLFxuICBlYXNlSW5RdWFkOiAnY3ViaWMtYmV6aWVyKDAuNTUwLCAgMC4wODUsIDAuNjgwLCAwLjUzMCknLFxuICBlYXNlSW5RdWFydDogJ2N1YmljLWJlemllcigwLjg5NSwgIDAuMDMwLCAwLjY4NSwgMC4yMjApJyxcbiAgZWFzZUluUXVpbnQ6ICdjdWJpYy1iZXppZXIoMC43NTUsICAwLjA1MCwgMC44NTUsIDAuMDYwKScsXG4gIGVhc2VJblNpbmU6ICdjdWJpYy1iZXppZXIoMC40NzAsICAwLjAwMCwgMC43NDUsIDAuNzE1KScsXG4gIGVhc2VPdXRCYWNrOiAnY3ViaWMtYmV6aWVyKDAuMTc1LCAgMC44ODUsIDAuMzIwLCAxLjI3NSknLFxuICBlYXNlT3V0Q3ViaWM6ICdjdWJpYy1iZXppZXIoMC4yMTUsICAwLjYxMCwgMC4zNTUsIDEuMDAwKScsXG4gIGVhc2VPdXRDaXJjOiAnY3ViaWMtYmV6aWVyKDAuMDc1LCAgMC44MjAsIDAuMTY1LCAxLjAwMCknLFxuICBlYXNlT3V0RXhwbzogJ2N1YmljLWJlemllcigwLjE5MCwgIDEuMDAwLCAwLjIyMCwgMS4wMDApJyxcbiAgZWFzZU91dFF1YWQ6ICdjdWJpYy1iZXppZXIoMC4yNTAsICAwLjQ2MCwgMC40NTAsIDAuOTQwKScsXG4gIGVhc2VPdXRRdWFydDogJ2N1YmljLWJlemllcigwLjE2NSwgIDAuODQwLCAwLjQ0MCwgMS4wMDApJyxcbiAgZWFzZU91dFF1aW50OiAnY3ViaWMtYmV6aWVyKDAuMjMwLCAgMS4wMDAsIDAuMzIwLCAxLjAwMCknLFxuICBlYXNlT3V0U2luZTogJ2N1YmljLWJlemllcigwLjM5MCwgIDAuNTc1LCAwLjU2NSwgMS4wMDApJyxcbiAgZWFzZUluT3V0QmFjazogJ2N1YmljLWJlemllcigwLjY4MCwgLTAuNTUwLCAwLjI2NSwgMS41NTApJyxcbiAgZWFzZUluT3V0Q2lyYzogJ2N1YmljLWJlemllcigwLjc4NSwgIDAuMTM1LCAwLjE1MCwgMC44NjApJyxcbiAgZWFzZUluT3V0Q3ViaWM6ICdjdWJpYy1iZXppZXIoMC42NDUsICAwLjA0NSwgMC4zNTUsIDEuMDAwKScsXG4gIGVhc2VJbk91dEV4cG86ICdjdWJpYy1iZXppZXIoMS4wMDAsICAwLjAwMCwgMC4wMDAsIDEuMDAwKScsXG4gIGVhc2VJbk91dFF1YWQ6ICdjdWJpYy1iZXppZXIoMC40NTUsICAwLjAzMCwgMC41MTUsIDAuOTU1KScsXG4gIGVhc2VJbk91dFF1YXJ0OiAnY3ViaWMtYmV6aWVyKDAuNzcwLCAgMC4wMDAsIDAuMTc1LCAxLjAwMCknLFxuICBlYXNlSW5PdXRRdWludDogJ2N1YmljLWJlemllcigwLjg2MCwgIDAuMDAwLCAwLjA3MCwgMS4wMDApJyxcbiAgZWFzZUluT3V0U2luZTogJ2N1YmljLWJlemllcigwLjQ0NSwgIDAuMDUwLCAwLjU1MCwgMC45NTApJ1xufTtcbi8qIGVzbGludC1lbmFibGUga2V5LXNwYWNpbmcgKi9cblxuZnVuY3Rpb24gZ2V0VGltaW5nRnVuY3Rpb24oZnVuY3Rpb25OYW1lKSB7XG4gIHJldHVybiBmdW5jdGlvbnNNYXBbZnVuY3Rpb25OYW1lXTtcbn1cbi8qKlxuICogU3RyaW5nIHRvIHJlcHJlc2VudCBjb21tb24gZWFzaW5nIGZ1bmN0aW9ucyBhcyBkZW1vbnN0cmF0ZWQgaGVyZTogKGdpdGh1Yi5jb20vamF1a2lhL2Vhc2llKS5cbiAqXG4gKiBAZGVwcmVjYXRlZCAtIFRoaXMgd2lsbCBiZSBkZXByZWNhdGVkIGluIHY1IGluIGZhdm9yIG9mIGBlYXNlSW5gLCBgZWFzZU91dGAsIGBlYXNlSW5PdXRgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiB0aW1pbmdGdW5jdGlvbnMoJ2Vhc2VJblF1YWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiAgY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiAke3RpbWluZ0Z1bmN0aW9ucygnZWFzZUluUXVhZCcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA4NSwgMC42ODAsIDAuNTMwKScsXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0aW1pbmdGdW5jdGlvbnModGltaW5nRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGdldFRpbWluZ0Z1bmN0aW9uKHRpbWluZ0Z1bmN0aW9uKTtcbn1cblxudmFyIGdldEJvcmRlcldpZHRoID0gZnVuY3Rpb24gZ2V0Qm9yZGVyV2lkdGgocG9pbnRpbmdEaXJlY3Rpb24sIGhlaWdodCwgd2lkdGgpIHtcbiAgdmFyIGZ1bGxXaWR0aCA9IFwiXCIgKyB3aWR0aFswXSArICh3aWR0aFsxXSB8fCAnJyk7XG4gIHZhciBoYWxmV2lkdGggPSBcIlwiICsgd2lkdGhbMF0gLyAyICsgKHdpZHRoWzFdIHx8ICcnKTtcbiAgdmFyIGZ1bGxIZWlnaHQgPSBcIlwiICsgaGVpZ2h0WzBdICsgKGhlaWdodFsxXSB8fCAnJyk7XG4gIHZhciBoYWxmSGVpZ2h0ID0gXCJcIiArIGhlaWdodFswXSAvIDIgKyAoaGVpZ2h0WzFdIHx8ICcnKTtcblxuICBzd2l0Y2ggKHBvaW50aW5nRGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICAgIHJldHVybiBcIjAgXCIgKyBoYWxmV2lkdGggKyBcIiBcIiArIGZ1bGxIZWlnaHQgKyBcIiBcIiArIGhhbGZXaWR0aDtcblxuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgcmV0dXJuIGZ1bGxXaWR0aCArIFwiIFwiICsgZnVsbEhlaWdodCArIFwiIDAgMFwiO1xuXG4gICAgY2FzZSAnbGVmdCc6XG4gICAgICByZXR1cm4gaGFsZkhlaWdodCArIFwiIFwiICsgZnVsbFdpZHRoICsgXCIgXCIgKyBoYWxmSGVpZ2h0ICsgXCIgMFwiO1xuXG4gICAgY2FzZSAnYm90dG9tTGVmdCc6XG4gICAgICByZXR1cm4gZnVsbFdpZHRoICsgXCIgMCAwIFwiICsgZnVsbEhlaWdodDtcblxuICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICByZXR1cm4gZnVsbEhlaWdodCArIFwiIFwiICsgaGFsZldpZHRoICsgXCIgMCBcIiArIGhhbGZXaWR0aDtcblxuICAgIGNhc2UgJ2JvdHRvbVJpZ2h0JzpcbiAgICAgIHJldHVybiBcIjAgMCBcIiArIGZ1bGxXaWR0aCArIFwiIFwiICsgZnVsbEhlaWdodDtcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgIHJldHVybiBoYWxmSGVpZ2h0ICsgXCIgMCBcIiArIGhhbGZIZWlnaHQgKyBcIiBcIiArIGZ1bGxXaWR0aDtcblxuICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwiMCBcIiArIGZ1bGxXaWR0aCArIFwiIFwiICsgZnVsbEhlaWdodCArIFwiIDBcIjtcbiAgfVxufTtcblxudmFyIGdldEJvcmRlckNvbG9yID0gZnVuY3Rpb24gZ2V0Qm9yZGVyQ29sb3IocG9pbnRpbmdEaXJlY3Rpb24sIGZvcmVncm91bmRDb2xvcikge1xuICBzd2l0Y2ggKHBvaW50aW5nRGlyZWN0aW9uKSB7XG4gICAgY2FzZSAndG9wJzpcbiAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBib3JkZXJCb3R0b21Db2xvcjogZm9yZWdyb3VuZENvbG9yXG4gICAgICB9O1xuXG4gICAgY2FzZSAncmlnaHQnOlxuICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9yZGVyTGVmdENvbG9yOiBmb3JlZ3JvdW5kQ29sb3JcbiAgICAgIH07XG5cbiAgICBjYXNlICdib3R0b20nOlxuICAgIGNhc2UgJ3RvcExlZnQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9yZGVyVG9wQ29sb3I6IGZvcmVncm91bmRDb2xvclxuICAgICAgfTtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgIGNhc2UgJ3RvcFJpZ2h0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvcmRlclJpZ2h0Q29sb3I6IGZvcmVncm91bmRDb2xvclxuICAgICAgfTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1OSk7XG4gIH1cbn07XG4vKipcbiAqIENTUyB0byByZXByZXNlbnQgdHJpYW5nbGUgd2l0aCBhbnkgcG9pbnRpbmcgZGlyZWN0aW9uIHdpdGggYW4gb3B0aW9uYWwgYmFja2dyb3VuZCBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICpcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4udHJpYW5nbGUoeyBwb2ludGluZ0RpcmVjdGlvbjogJ3JpZ2h0Jywgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgZm9yZWdyb3VuZENvbG9yOiAncmVkJyB9KVxuICogfVxuICpcbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHt0cmlhbmdsZSh7IHBvaW50aW5nRGlyZWN0aW9uOiAncmlnaHQnLCB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBmb3JlZ3JvdW5kQ29sb3I6ICdyZWQnIH0pfVxuICpcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgJ2JvcmRlckNvbG9yJzogJ3RyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJlZCcsXG4gKiAgJ2JvcmRlclN0eWxlJzogJ3NvbGlkJyxcbiAqICAnYm9yZGVyV2lkdGgnOiAnNTBweCAwIDUwcHggMTAwcHgnLFxuICogICdoZWlnaHQnOiAnMCcsXG4gKiAgJ3dpZHRoJzogJzAnLFxuICogfVxuICovXG5cblxuZnVuY3Rpb24gdHJpYW5nbGUoX3JlZikge1xuICB2YXIgcG9pbnRpbmdEaXJlY3Rpb24gPSBfcmVmLnBvaW50aW5nRGlyZWN0aW9uLFxuICAgICAgaGVpZ2h0ID0gX3JlZi5oZWlnaHQsXG4gICAgICB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBmb3JlZ3JvdW5kQ29sb3IgPSBfcmVmLmZvcmVncm91bmRDb2xvcixcbiAgICAgIF9yZWYkYmFja2dyb3VuZENvbG9yID0gX3JlZi5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3IgPSBfcmVmJGJhY2tncm91bmRDb2xvciA9PT0gdm9pZCAwID8gJ3RyYW5zcGFyZW50JyA6IF9yZWYkYmFja2dyb3VuZENvbG9yO1xuICB2YXIgd2lkdGhBbmRVbml0ID0gZ2V0VmFsdWVBbmRVbml0KHdpZHRoKTtcbiAgdmFyIGhlaWdodEFuZFVuaXQgPSBnZXRWYWx1ZUFuZFVuaXQoaGVpZ2h0KTtcblxuICBpZiAoaXNOYU4oaGVpZ2h0QW5kVW5pdFswXSkgfHwgaXNOYU4od2lkdGhBbmRVbml0WzBdKSkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDYwKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgd2lkdGg6ICcwJyxcbiAgICBoZWlnaHQ6ICcwJyxcbiAgICBib3JkZXJDb2xvcjogYmFja2dyb3VuZENvbG9yXG4gIH0sIGdldEJvcmRlckNvbG9yKHBvaW50aW5nRGlyZWN0aW9uLCBmb3JlZ3JvdW5kQ29sb3IpLCB7XG4gICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgYm9yZGVyV2lkdGg6IGdldEJvcmRlcldpZHRoKHBvaW50aW5nRGlyZWN0aW9uLCBoZWlnaHRBbmRVbml0LCB3aWR0aEFuZFVuaXQpXG4gIH0pO1xufVxuXG4vKipcbiAqIFByb3ZpZGVzIGFuIGVhc3kgd2F5IHRvIGNoYW5nZSB0aGUgYHdvcmRXcmFwYCBwcm9wZXJ0eS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi53b3JkV3JhcCgnYnJlYWstd29yZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7d29yZFdyYXAoJ2JyZWFrLXdvcmQnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBvdmVyZmxvd1dyYXA6ICdicmVhay13b3JkJyxcbiAqICAgd29yZFdyYXA6ICdicmVhay13b3JkJyxcbiAqICAgd29yZEJyZWFrOiAnYnJlYWstYWxsJyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gd29yZFdyYXAod3JhcCkge1xuICBpZiAod3JhcCA9PT0gdm9pZCAwKSB7XG4gICAgd3JhcCA9ICdicmVhay13b3JkJztcbiAgfVxuXG4gIHZhciB3b3JkQnJlYWsgPSB3cmFwID09PSAnYnJlYWstd29yZCcgPyAnYnJlYWstYWxsJyA6IHdyYXA7XG4gIHJldHVybiB7XG4gICAgb3ZlcmZsb3dXcmFwOiB3cmFwLFxuICAgIHdvcmRXcmFwOiB3cmFwLFxuICAgIHdvcmRCcmVhazogd29yZEJyZWFrXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9JbnQoY29sb3IpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQoY29sb3IgKiAyNTUpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9JbnQocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gY29sb3JUb0ludChyZWQpICsgXCIsXCIgKyBjb2xvclRvSW50KGdyZWVuKSArIFwiLFwiICsgY29sb3JUb0ludChibHVlKTtcbn1cblxuZnVuY3Rpb24gaHNsVG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnQpIHtcbiAgaWYgKGNvbnZlcnQgPT09IHZvaWQgMCkge1xuICAgIGNvbnZlcnQgPSBjb252ZXJ0VG9JbnQ7XG4gIH1cblxuICBpZiAoc2F0dXJhdGlvbiA9PT0gMCkge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICByZXR1cm4gY29udmVydChsaWdodG5lc3MsIGxpZ2h0bmVzcywgbGlnaHRuZXNzKTtcbiAgfSAvLyBmb3JtdWxhZSBmcm9tIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0hTTF9hbmRfSFNWXG5cblxuICB2YXIgaHVlUHJpbWUgPSAoaHVlICUgMzYwICsgMzYwKSAlIDM2MCAvIDYwO1xuICB2YXIgY2hyb21hID0gKDEgLSBNYXRoLmFicygyICogbGlnaHRuZXNzIC0gMSkpICogc2F0dXJhdGlvbjtcbiAgdmFyIHNlY29uZENvbXBvbmVudCA9IGNocm9tYSAqICgxIC0gTWF0aC5hYnMoaHVlUHJpbWUgJSAyIC0gMSkpO1xuICB2YXIgcmVkID0gMDtcbiAgdmFyIGdyZWVuID0gMDtcbiAgdmFyIGJsdWUgPSAwO1xuXG4gIGlmIChodWVQcmltZSA+PSAwICYmIGh1ZVByaW1lIDwgMSkge1xuICAgIHJlZCA9IGNocm9tYTtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAxICYmIGh1ZVByaW1lIDwgMikge1xuICAgIHJlZCA9IHNlY29uZENvbXBvbmVudDtcbiAgICBncmVlbiA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSAyICYmIGh1ZVByaW1lIDwgMykge1xuICAgIGdyZWVuID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMyAmJiBodWVQcmltZSA8IDQpIHtcbiAgICBncmVlbiA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDQgJiYgaHVlUHJpbWUgPCA1KSB7XG4gICAgcmVkID0gc2Vjb25kQ29tcG9uZW50O1xuICAgIGJsdWUgPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gNSAmJiBodWVQcmltZSA8IDYpIHtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgYmx1ZSA9IHNlY29uZENvbXBvbmVudDtcbiAgfVxuXG4gIHZhciBsaWdodG5lc3NNb2RpZmljYXRpb24gPSBsaWdodG5lc3MgLSBjaHJvbWEgLyAyO1xuICB2YXIgZmluYWxSZWQgPSByZWQgKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHZhciBmaW5hbEdyZWVuID0gZ3JlZW4gKyBsaWdodG5lc3NNb2RpZmljYXRpb247XG4gIHZhciBmaW5hbEJsdWUgPSBibHVlICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICByZXR1cm4gY29udmVydChmaW5hbFJlZCwgZmluYWxHcmVlbiwgZmluYWxCbHVlKTtcbn1cblxudmFyIG5hbWVkQ29sb3JNYXAgPSB7XG4gIGFsaWNlYmx1ZTogJ2YwZjhmZicsXG4gIGFudGlxdWV3aGl0ZTogJ2ZhZWJkNycsXG4gIGFxdWE6ICcwMGZmZmYnLFxuICBhcXVhbWFyaW5lOiAnN2ZmZmQ0JyxcbiAgYXp1cmU6ICdmMGZmZmYnLFxuICBiZWlnZTogJ2Y1ZjVkYycsXG4gIGJpc3F1ZTogJ2ZmZTRjNCcsXG4gIGJsYWNrOiAnMDAwJyxcbiAgYmxhbmNoZWRhbG1vbmQ6ICdmZmViY2QnLFxuICBibHVlOiAnMDAwMGZmJyxcbiAgYmx1ZXZpb2xldDogJzhhMmJlMicsXG4gIGJyb3duOiAnYTUyYTJhJyxcbiAgYnVybHl3b29kOiAnZGViODg3JyxcbiAgY2FkZXRibHVlOiAnNWY5ZWEwJyxcbiAgY2hhcnRyZXVzZTogJzdmZmYwMCcsXG4gIGNob2NvbGF0ZTogJ2QyNjkxZScsXG4gIGNvcmFsOiAnZmY3ZjUwJyxcbiAgY29ybmZsb3dlcmJsdWU6ICc2NDk1ZWQnLFxuICBjb3Juc2lsazogJ2ZmZjhkYycsXG4gIGNyaW1zb246ICdkYzE0M2MnLFxuICBjeWFuOiAnMDBmZmZmJyxcbiAgZGFya2JsdWU6ICcwMDAwOGInLFxuICBkYXJrY3lhbjogJzAwOGI4YicsXG4gIGRhcmtnb2xkZW5yb2Q6ICdiODg2MGInLFxuICBkYXJrZ3JheTogJ2E5YTlhOScsXG4gIGRhcmtncmVlbjogJzAwNjQwMCcsXG4gIGRhcmtncmV5OiAnYTlhOWE5JyxcbiAgZGFya2toYWtpOiAnYmRiNzZiJyxcbiAgZGFya21hZ2VudGE6ICc4YjAwOGInLFxuICBkYXJrb2xpdmVncmVlbjogJzU1NmIyZicsXG4gIGRhcmtvcmFuZ2U6ICdmZjhjMDAnLFxuICBkYXJrb3JjaGlkOiAnOTkzMmNjJyxcbiAgZGFya3JlZDogJzhiMDAwMCcsXG4gIGRhcmtzYWxtb246ICdlOTk2N2EnLFxuICBkYXJrc2VhZ3JlZW46ICc4ZmJjOGYnLFxuICBkYXJrc2xhdGVibHVlOiAnNDgzZDhiJyxcbiAgZGFya3NsYXRlZ3JheTogJzJmNGY0ZicsXG4gIGRhcmtzbGF0ZWdyZXk6ICcyZjRmNGYnLFxuICBkYXJrdHVycXVvaXNlOiAnMDBjZWQxJyxcbiAgZGFya3Zpb2xldDogJzk0MDBkMycsXG4gIGRlZXBwaW5rOiAnZmYxNDkzJyxcbiAgZGVlcHNreWJsdWU6ICcwMGJmZmYnLFxuICBkaW1ncmF5OiAnNjk2OTY5JyxcbiAgZGltZ3JleTogJzY5Njk2OScsXG4gIGRvZGdlcmJsdWU6ICcxZTkwZmYnLFxuICBmaXJlYnJpY2s6ICdiMjIyMjInLFxuICBmbG9yYWx3aGl0ZTogJ2ZmZmFmMCcsXG4gIGZvcmVzdGdyZWVuOiAnMjI4YjIyJyxcbiAgZnVjaHNpYTogJ2ZmMDBmZicsXG4gIGdhaW5zYm9ybzogJ2RjZGNkYycsXG4gIGdob3N0d2hpdGU6ICdmOGY4ZmYnLFxuICBnb2xkOiAnZmZkNzAwJyxcbiAgZ29sZGVucm9kOiAnZGFhNTIwJyxcbiAgZ3JheTogJzgwODA4MCcsXG4gIGdyZWVuOiAnMDA4MDAwJyxcbiAgZ3JlZW55ZWxsb3c6ICdhZGZmMmYnLFxuICBncmV5OiAnODA4MDgwJyxcbiAgaG9uZXlkZXc6ICdmMGZmZjAnLFxuICBob3RwaW5rOiAnZmY2OWI0JyxcbiAgaW5kaWFucmVkOiAnY2Q1YzVjJyxcbiAgaW5kaWdvOiAnNGIwMDgyJyxcbiAgaXZvcnk6ICdmZmZmZjAnLFxuICBraGFraTogJ2YwZTY4YycsXG4gIGxhdmVuZGVyOiAnZTZlNmZhJyxcbiAgbGF2ZW5kZXJibHVzaDogJ2ZmZjBmNScsXG4gIGxhd25ncmVlbjogJzdjZmMwMCcsXG4gIGxlbW9uY2hpZmZvbjogJ2ZmZmFjZCcsXG4gIGxpZ2h0Ymx1ZTogJ2FkZDhlNicsXG4gIGxpZ2h0Y29yYWw6ICdmMDgwODAnLFxuICBsaWdodGN5YW46ICdlMGZmZmYnLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogJ2ZhZmFkMicsXG4gIGxpZ2h0Z3JheTogJ2QzZDNkMycsXG4gIGxpZ2h0Z3JlZW46ICc5MGVlOTAnLFxuICBsaWdodGdyZXk6ICdkM2QzZDMnLFxuICBsaWdodHBpbms6ICdmZmI2YzEnLFxuICBsaWdodHNhbG1vbjogJ2ZmYTA3YScsXG4gIGxpZ2h0c2VhZ3JlZW46ICcyMGIyYWEnLFxuICBsaWdodHNreWJsdWU6ICc4N2NlZmEnLFxuICBsaWdodHNsYXRlZ3JheTogJzc4OScsXG4gIGxpZ2h0c2xhdGVncmV5OiAnNzg5JyxcbiAgbGlnaHRzdGVlbGJsdWU6ICdiMGM0ZGUnLFxuICBsaWdodHllbGxvdzogJ2ZmZmZlMCcsXG4gIGxpbWU6ICcwZjAnLFxuICBsaW1lZ3JlZW46ICczMmNkMzInLFxuICBsaW5lbjogJ2ZhZjBlNicsXG4gIG1hZ2VudGE6ICdmMGYnLFxuICBtYXJvb246ICc4MDAwMDAnLFxuICBtZWRpdW1hcXVhbWFyaW5lOiAnNjZjZGFhJyxcbiAgbWVkaXVtYmx1ZTogJzAwMDBjZCcsXG4gIG1lZGl1bW9yY2hpZDogJ2JhNTVkMycsXG4gIG1lZGl1bXB1cnBsZTogJzkzNzBkYicsXG4gIG1lZGl1bXNlYWdyZWVuOiAnM2NiMzcxJyxcbiAgbWVkaXVtc2xhdGVibHVlOiAnN2I2OGVlJyxcbiAgbWVkaXVtc3ByaW5nZ3JlZW46ICcwMGZhOWEnLFxuICBtZWRpdW10dXJxdW9pc2U6ICc0OGQxY2MnLFxuICBtZWRpdW12aW9sZXRyZWQ6ICdjNzE1ODUnLFxuICBtaWRuaWdodGJsdWU6ICcxOTE5NzAnLFxuICBtaW50Y3JlYW06ICdmNWZmZmEnLFxuICBtaXN0eXJvc2U6ICdmZmU0ZTEnLFxuICBtb2NjYXNpbjogJ2ZmZTRiNScsXG4gIG5hdmFqb3doaXRlOiAnZmZkZWFkJyxcbiAgbmF2eTogJzAwMDA4MCcsXG4gIG9sZGxhY2U6ICdmZGY1ZTYnLFxuICBvbGl2ZTogJzgwODAwMCcsXG4gIG9saXZlZHJhYjogJzZiOGUyMycsXG4gIG9yYW5nZTogJ2ZmYTUwMCcsXG4gIG9yYW5nZXJlZDogJ2ZmNDUwMCcsXG4gIG9yY2hpZDogJ2RhNzBkNicsXG4gIHBhbGVnb2xkZW5yb2Q6ICdlZWU4YWEnLFxuICBwYWxlZ3JlZW46ICc5OGZiOTgnLFxuICBwYWxldHVycXVvaXNlOiAnYWZlZWVlJyxcbiAgcGFsZXZpb2xldHJlZDogJ2RiNzA5MycsXG4gIHBhcGF5YXdoaXA6ICdmZmVmZDUnLFxuICBwZWFjaHB1ZmY6ICdmZmRhYjknLFxuICBwZXJ1OiAnY2Q4NTNmJyxcbiAgcGluazogJ2ZmYzBjYicsXG4gIHBsdW06ICdkZGEwZGQnLFxuICBwb3dkZXJibHVlOiAnYjBlMGU2JyxcbiAgcHVycGxlOiAnODAwMDgwJyxcbiAgcmViZWNjYXB1cnBsZTogJzYzOScsXG4gIHJlZDogJ2YwMCcsXG4gIHJvc3licm93bjogJ2JjOGY4ZicsXG4gIHJveWFsYmx1ZTogJzQxNjllMScsXG4gIHNhZGRsZWJyb3duOiAnOGI0NTEzJyxcbiAgc2FsbW9uOiAnZmE4MDcyJyxcbiAgc2FuZHlicm93bjogJ2Y0YTQ2MCcsXG4gIHNlYWdyZWVuOiAnMmU4YjU3JyxcbiAgc2Vhc2hlbGw6ICdmZmY1ZWUnLFxuICBzaWVubmE6ICdhMDUyMmQnLFxuICBzaWx2ZXI6ICdjMGMwYzAnLFxuICBza3libHVlOiAnODdjZWViJyxcbiAgc2xhdGVibHVlOiAnNmE1YWNkJyxcbiAgc2xhdGVncmF5OiAnNzA4MDkwJyxcbiAgc2xhdGVncmV5OiAnNzA4MDkwJyxcbiAgc25vdzogJ2ZmZmFmYScsXG4gIHNwcmluZ2dyZWVuOiAnMDBmZjdmJyxcbiAgc3RlZWxibHVlOiAnNDY4MmI0JyxcbiAgdGFuOiAnZDJiNDhjJyxcbiAgdGVhbDogJzAwODA4MCcsXG4gIHRoaXN0bGU6ICdkOGJmZDgnLFxuICB0b21hdG86ICdmZjYzNDcnLFxuICB0dXJxdW9pc2U6ICc0MGUwZDAnLFxuICB2aW9sZXQ6ICdlZTgyZWUnLFxuICB3aGVhdDogJ2Y1ZGViMycsXG4gIHdoaXRlOiAnZmZmJyxcbiAgd2hpdGVzbW9rZTogJ2Y1ZjVmNScsXG4gIHllbGxvdzogJ2ZmMCcsXG4gIHllbGxvd2dyZWVuOiAnOWFjZDMyJ1xufTtcbi8qKlxuICogQ2hlY2tzIGlmIGEgc3RyaW5nIGlzIGEgQ1NTIG5hbWVkIGNvbG9yIGFuZCByZXR1cm5zIGl0cyBlcXVpdmFsZW50IGhleCB2YWx1ZSwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG9yaWdpbmFsIGNvbG9yLlxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBuYW1lVG9IZXgoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHJldHVybiBjb2xvcjtcbiAgdmFyIG5vcm1hbGl6ZWRDb2xvck5hbWUgPSBjb2xvci50b0xvd2VyQ2FzZSgpO1xuICByZXR1cm4gbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA/IFwiI1wiICsgbmFtZWRDb2xvck1hcFtub3JtYWxpemVkQ29sb3JOYW1lXSA6IGNvbG9yO1xufVxuXG52YXIgaGV4UmVnZXggPSAvXiNbYS1mQS1GMC05XXs2fSQvO1xudmFyIGhleFJnYmFSZWdleCA9IC9eI1thLWZBLUYwLTldezh9JC87XG52YXIgcmVkdWNlZEhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17M30kLztcbnZhciByZWR1Y2VkUmdiYUhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17NH0kLztcbnZhciByZ2JSZWdleCA9IC9ecmdiXFwoXFxzKihcXGR7MSwzfSlcXHMqKD86LCk/XFxzKihcXGR7MSwzfSlcXHMqKD86LCk/XFxzKihcXGR7MSwzfSlcXHMqXFwpJC9pO1xudmFyIHJnYmFSZWdleCA9IC9ecmdiKD86YSk/XFwoXFxzKihcXGR7MSwzfSlcXHMqKD86LCk/XFxzKihcXGR7MSwzfSlcXHMqKD86LCk/XFxzKihcXGR7MSwzfSlcXHMqKD86LHxcXC8pXFxzKihbLStdP1xcZCpbLl0/XFxkK1slXT8pXFxzKlxcKSQvaTtcbnZhciBoc2xSZWdleCA9IC9eaHNsXFwoXFxzKihcXGR7MCwzfVsuXT9bMC05XSsoPzpkZWcpPylcXHMqKD86LCk/XFxzKihcXGR7MSwzfVsuXT9bMC05XT8pJVxccyooPzosKT9cXHMqKFxcZHsxLDN9Wy5dP1swLTldPyklXFxzKlxcKSQvaTtcbnZhciBoc2xhUmVnZXggPSAvXmhzbCg/OmEpP1xcKFxccyooXFxkezAsM31bLl0/WzAtOV0rKD86ZGVnKT8pXFxzKig/OiwpP1xccyooXFxkezEsM31bLl0/WzAtOV0/KSVcXHMqKD86LCk/XFxzKihcXGR7MSwzfVsuXT9bMC05XT8pJVxccyooPzosfFxcLylcXHMqKFstK10/XFxkKlsuXT9cXGQrWyVdPylcXHMqXFwpJC9pO1xuLyoqXG4gKiBSZXR1cm5zIGFuIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QuIFRoaXMgdXRpbGl0eSBmdW5jdGlvbiBpcyBvbmx5IHVzZWZ1bFxuICogaWYgd2FudCB0byBleHRyYWN0IGEgY29sb3IgY29tcG9uZW50LiBXaXRoIHRoZSBjb2xvciB1dGlsIGB0b0NvbG9yU3RyaW5nYCB5b3VcbiAqIGNhbiBjb252ZXJ0IGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdCBiYWNrIHRvIGEgc3RyaW5nLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBc3NpZ25zIGB7IHJlZDogMjU1LCBncmVlbjogMCwgYmx1ZTogMCB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9SZ2IoJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IHJlZDogOTIsIGdyZWVuOiAxMDIsIGJsdWU6IDExMiwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvUmdiKCdoc2xhKDIxMCwgMTAlLCA0MCUsIDAuNzUpJyk7XG4gKi9cblxuZnVuY3Rpb24gcGFyc2VUb1JnYihjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDMpO1xuICB9XG5cbiAgdmFyIG5vcm1hbGl6ZWRDb2xvciA9IG5hbWVUb0hleChjb2xvcik7XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChoZXhSZWdleCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls1XSArIG5vcm1hbGl6ZWRDb2xvcls2XSwgMTYpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmdiYVJlZ2V4KSkge1xuICAgIHZhciBhbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbN10gKyBub3JtYWxpemVkQ29sb3JbOF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KSxcbiAgICAgIGFscGhhOiBhbHBoYVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRIZXhSZWdleCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpXG4gICAgfTtcbiAgfVxuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2gocmVkdWNlZFJnYmFIZXhSZWdleCkpIHtcbiAgICB2YXIgX2FscGhhID0gcGFyc2VGbG9hdCgocGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvcls0XSArIG5vcm1hbGl6ZWRDb2xvcls0XSwgMTYpIC8gMjU1KS50b0ZpeGVkKDIpKTtcblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMV0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzJdICsgbm9ybWFsaXplZENvbG9yWzJdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzNdLCAxNiksXG4gICAgICBhbHBoYTogX2FscGhhXG4gICAgfTtcbiAgfVxuXG4gIHZhciByZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChyZ2JNYXRjaGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgcmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbM10sIDEwKVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiYU1hdGNoZWQgPSByZ2JhUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3Iuc3Vic3RyaW5nKDAsIDUwKSk7XG5cbiAgaWYgKHJnYmFNYXRjaGVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzJdLCAxMCksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgcmdiYU1hdGNoZWRbM10sIDEwKSxcbiAgICAgIGFscGhhOiBwYXJzZUZsb2F0KFwiXCIgKyByZ2JhTWF0Y2hlZFs0XSkgPiAxID8gcGFyc2VGbG9hdChcIlwiICsgcmdiYU1hdGNoZWRbNF0pIC8gMTAwIDogcGFyc2VGbG9hdChcIlwiICsgcmdiYU1hdGNoZWRbNF0pXG4gICAgfTtcbiAgfVxuXG4gIHZhciBoc2xNYXRjaGVkID0gaHNsUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3IpO1xuXG4gIGlmIChoc2xNYXRjaGVkKSB7XG4gICAgdmFyIGh1ZSA9IHBhcnNlSW50KFwiXCIgKyBoc2xNYXRjaGVkWzFdLCAxMCk7XG4gICAgdmFyIHNhdHVyYXRpb24gPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuICAgIHZhciBsaWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFszXSwgMTApIC8gMTAwO1xuICAgIHZhciByZ2JDb2xvclN0cmluZyA9IFwicmdiKFwiICsgaHNsVG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpICsgXCIpXCI7XG4gICAgdmFyIGhzbFJnYk1hdGNoZWQgPSByZ2JSZWdleC5leGVjKHJnYkNvbG9yU3RyaW5nKTtcblxuICAgIGlmICghaHNsUmdiTWF0Y2hlZCkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNCwgbm9ybWFsaXplZENvbG9yLCByZ2JDb2xvclN0cmluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgaHNsUmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbM10sIDEwKVxuICAgIH07XG4gIH1cblxuICB2YXIgaHNsYU1hdGNoZWQgPSBoc2xhUmVnZXguZXhlYyhub3JtYWxpemVkQ29sb3Iuc3Vic3RyaW5nKDAsIDUwKSk7XG5cbiAgaWYgKGhzbGFNYXRjaGVkKSB7XG4gICAgdmFyIF9odWUgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbMV0sIDEwKTtcblxuICAgIHZhciBfc2F0dXJhdGlvbiA9IHBhcnNlSW50KFwiXCIgKyBoc2xhTWF0Y2hlZFsyXSwgMTApIC8gMTAwO1xuXG4gICAgdmFyIF9saWdodG5lc3MgPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbM10sIDEwKSAvIDEwMDtcblxuICAgIHZhciBfcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArIGhzbFRvUmdiKF9odWUsIF9zYXR1cmF0aW9uLCBfbGlnaHRuZXNzKSArIFwiKVwiO1xuXG4gICAgdmFyIF9oc2xSZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhfcmdiQ29sb3JTdHJpbmcpO1xuXG4gICAgaWYgKCFfaHNsUmdiTWF0Y2hlZCkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNCwgbm9ybWFsaXplZENvbG9yLCBfcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIF9oc2xSZ2JNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgaHNsYU1hdGNoZWRbNF0pID4gMSA/IHBhcnNlRmxvYXQoXCJcIiArIGhzbGFNYXRjaGVkWzRdKSAvIDEwMCA6IHBhcnNlRmxvYXQoXCJcIiArIGhzbGFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1KTtcbn1cblxuZnVuY3Rpb24gcmdiVG9Ic2woY29sb3IpIHtcbiAgLy8gbWFrZSBzdXJlIHJnYiBhcmUgY29udGFpbmVkIGluIGEgc2V0IG9mIFswLCAyNTVdXG4gIHZhciByZWQgPSBjb2xvci5yZWQgLyAyNTU7XG4gIHZhciBncmVlbiA9IGNvbG9yLmdyZWVuIC8gMjU1O1xuICB2YXIgYmx1ZSA9IGNvbG9yLmJsdWUgLyAyNTU7XG4gIHZhciBtYXggPSBNYXRoLm1heChyZWQsIGdyZWVuLCBibHVlKTtcbiAgdmFyIG1pbiA9IE1hdGgubWluKHJlZCwgZ3JlZW4sIGJsdWUpO1xuICB2YXIgbGlnaHRuZXNzID0gKG1heCArIG1pbikgLyAyO1xuXG4gIGlmIChtYXggPT09IG1pbikge1xuICAgIC8vIGFjaHJvbWF0aWNcbiAgICBpZiAoY29sb3IuYWxwaGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVlOiAwLFxuICAgICAgICBzYXR1cmF0aW9uOiAwLFxuICAgICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzcyxcbiAgICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBodWU6IDAsXG4gICAgICAgIHNhdHVyYXRpb246IDAsXG4gICAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBodWU7XG4gIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgdmFyIHNhdHVyYXRpb24gPSBsaWdodG5lc3MgPiAwLjUgPyBkZWx0YSAvICgyIC0gbWF4IC0gbWluKSA6IGRlbHRhIC8gKG1heCArIG1pbik7XG5cbiAgc3dpdGNoIChtYXgpIHtcbiAgICBjYXNlIHJlZDpcbiAgICAgIGh1ZSA9IChncmVlbiAtIGJsdWUpIC8gZGVsdGEgKyAoZ3JlZW4gPCBibHVlID8gNiA6IDApO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIGdyZWVuOlxuICAgICAgaHVlID0gKGJsdWUgLSByZWQpIC8gZGVsdGEgKyAyO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gYmx1ZSBjYXNlXG4gICAgICBodWUgPSAocmVkIC0gZ3JlZW4pIC8gZGVsdGEgKyA0O1xuICAgICAgYnJlYWs7XG4gIH1cblxuICBodWUgKj0gNjA7XG5cbiAgaWYgKGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaHVlOiBodWUsXG4gICAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3MsXG4gICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBodWU6IGh1ZSxcbiAgICBzYXR1cmF0aW9uOiBzYXR1cmF0aW9uLFxuICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzXG4gIH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0LiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB1c2VmdWxcbiAqIGlmIHdhbnQgdG8gZXh0cmFjdCBhIGNvbG9yIGNvbXBvbmVudC4gV2l0aCB0aGUgY29sb3IgdXRpbCBgdG9Db2xvclN0cmluZ2AgeW91XG4gKiBjYW4gY29udmVydCBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgYmFjayB0byBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXNzaWducyBgeyBodWU6IDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH1gIHRvIGNvbG9yMVxuICogY29uc3QgY29sb3IxID0gcGFyc2VUb0hzbCgncmdiKDI1NSwgMCwgMCknKTtcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAxMjgsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41LCBhbHBoYTogMC43NSB9YCB0byBjb2xvcjJcbiAqIGNvbnN0IGNvbG9yMiA9IHBhcnNlVG9Ic2woJ2hzbGEoMTI4LCAxMDAlLCA1MCUsIDAuNzUpJyk7XG4gKi9cbmZ1bmN0aW9uIHBhcnNlVG9Ic2woY29sb3IpIHtcbiAgLy8gTm90ZTogQXQgYSBsYXRlciBzdGFnZSB3ZSBjYW4gb3B0aW1pemUgdGhpcyBmdW5jdGlvbiBhcyByaWdodCBub3cgYSBoc2xcbiAgLy8gY29sb3Igd291bGQgYmUgcGFyc2VkIGNvbnZlcnRlZCB0byByZ2IgdmFsdWVzIGFuZCBjb252ZXJ0ZWQgYmFjayB0byBoc2wuXG4gIHJldHVybiByZ2JUb0hzbChwYXJzZVRvUmdiKGNvbG9yKSk7XG59XG5cbi8qKlxuICogUmVkdWNlcyBoZXggdmFsdWVzIGlmIHBvc3NpYmxlIGUuZy4gI2ZmODg2NiB0byAjZjg2XG4gKiBAcHJpdmF0ZVxuICovXG52YXIgcmVkdWNlSGV4VmFsdWUgPSBmdW5jdGlvbiByZWR1Y2VIZXhWYWx1ZSh2YWx1ZSkge1xuICBpZiAodmFsdWUubGVuZ3RoID09PSA3ICYmIHZhbHVlWzFdID09PSB2YWx1ZVsyXSAmJiB2YWx1ZVszXSA9PT0gdmFsdWVbNF0gJiYgdmFsdWVbNV0gPT09IHZhbHVlWzZdKSB7XG4gICAgcmV0dXJuIFwiI1wiICsgdmFsdWVbMV0gKyB2YWx1ZVszXSArIHZhbHVlWzVdO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufTtcblxudmFyIHJlZHVjZUhleFZhbHVlJDEgPSByZWR1Y2VIZXhWYWx1ZTtcblxuZnVuY3Rpb24gbnVtYmVyVG9IZXgodmFsdWUpIHtcbiAgdmFyIGhleCA9IHZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuZnVuY3Rpb24gY29sb3JUb0hleChjb2xvcikge1xuICByZXR1cm4gbnVtYmVyVG9IZXgoTWF0aC5yb3VuZChjb2xvciAqIDI1NSkpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9IZXgocmVkLCBncmVlbiwgYmx1ZSkge1xuICByZXR1cm4gcmVkdWNlSGV4VmFsdWUkMShcIiNcIiArIGNvbG9yVG9IZXgocmVkKSArIGNvbG9yVG9IZXgoZ3JlZW4pICsgY29sb3JUb0hleChibHVlKSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvSGV4KGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIHJldHVybiBoc2xUb1JnYihodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgY29udmVydFRvSGV4KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2woMzU5LCAwLjc1LCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiBoc2woeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKDM1OSwgMC43NSwgMC40KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2IzMTkxY1wiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsKHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBsaWdodG5lc3MgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGhzbFRvSGV4KHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgc2F0dXJhdGlvbiA9PT0gdW5kZWZpbmVkICYmIGxpZ2h0bmVzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGhzbFRvSGV4KHZhbHVlLmh1ZSwgdmFsdWUuc2F0dXJhdGlvbiwgdmFsdWUubGlnaHRuZXNzKTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDEpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBjb2xvci4gVGhlIHJldHVybmVkIHJlc3VsdCBpcyB0aGUgc21hbGxlc3QgcG9zc2libGUgcmdiYSBvciBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KSxcbiAqICAgYmFja2dyb3VuZDogaHNsYSgzNTksIDAuNzUsIDAuNCwgMSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMC43KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAsNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsYSgzNTksIDAuNzUsIDAuNCwgMSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyOCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjgsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gaHNsYSh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBhbHBoYSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2F0dXJhdGlvbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGxpZ2h0bmVzcyA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGFscGhhID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBhbHBoYSA+PSAxID8gaHNsVG9IZXgodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyBoc2xUb1JnYih2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiLFwiICsgYWxwaGEgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHNhdHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJiBsaWdodG5lc3MgPT09IHVuZGVmaW5lZCAmJiBhbHBoYSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHZhbHVlLmFscGhhID49IDEgPyBoc2xUb0hleCh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgOiBcInJnYmEoXCIgKyBoc2xUb1JnYih2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcykgKyBcIixcIiArIHZhbHVlLmFscGhhICsgXCIpXCI7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigyKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIGhleCBub3RhdGlvbi5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMDUsIDEwMCksXG4gKiAgIGJhY2tncm91bmQ6IHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKDI1NSwgMjA1LCAxMDApfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiKHZhbHVlLCBncmVlbiwgYmx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBibHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiByZWR1Y2VIZXhWYWx1ZSQxKFwiI1wiICsgbnVtYmVyVG9IZXgodmFsdWUpICsgbnVtYmVyVG9IZXgoZ3JlZW4pICsgbnVtYmVyVG9IZXgoYmx1ZSkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgZ3JlZW4gPT09IHVuZGVmaW5lZCAmJiBibHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVkdWNlSGV4VmFsdWUkMShcIiNcIiArIG51bWJlclRvSGV4KHZhbHVlLnJlZCkgKyBudW1iZXJUb0hleCh2YWx1ZS5ncmVlbikgKyBudW1iZXJUb0hleCh2YWx1ZS5ibHVlKSk7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2KTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIHJnYmEgb3IgaGV4IG5vdGF0aW9uLlxuICpcbiAqIENhbiBhbHNvIGJlIHVzZWQgdG8gZmFkZSBhIGNvbG9yIGJ5IHBhc3NpbmcgYSBoZXggdmFsdWUgb3IgbmFtZWQgQ1NTIGNvbG9yIGFsb25nIHdpdGggYW4gYWxwaGEgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIwNSwgMTAwLCAwLjcpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNyB9KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDIwNSwgMTAwLCAxKSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSgnI2ZmZmZmZicsIDAuNCksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoJ2JsYWNrJywgMC43KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKDI1NSwgMjA1LCAxMDAsIDAuNyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKDI1NSwgMjA1LCAxMDAsIDEpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKCcjZmZmZmZmJywgMC40KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgnYmxhY2snLCAwLjcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjA1LDEwMCwwLjcpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC40KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwwLDAsMC43KVwiO1xuICogfVxuICovXG5mdW5jdGlvbiByZ2JhKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlLCB0aGlyZFZhbHVlLCBmb3VydGhWYWx1ZSkge1xuICBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBzZWNvbmRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YXIgcmdiVmFsdWUgPSBwYXJzZVRvUmdiKGZpcnN0VmFsdWUpO1xuICAgIHJldHVybiBcInJnYmEoXCIgKyByZ2JWYWx1ZS5yZWQgKyBcIixcIiArIHJnYlZhbHVlLmdyZWVuICsgXCIsXCIgKyByZ2JWYWx1ZS5ibHVlICsgXCIsXCIgKyBzZWNvbmRWYWx1ZSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlyZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgZm91cnRoVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZvdXJ0aFZhbHVlID49IDEgPyByZ2IoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUsIHRoaXJkVmFsdWUpIDogXCJyZ2JhKFwiICsgZmlyc3RWYWx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIixcIiArIHRoaXJkVmFsdWUgKyBcIixcIiArIGZvdXJ0aFZhbHVlICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGZpcnN0VmFsdWUgPT09ICdvYmplY3QnICYmIHNlY29uZFZhbHVlID09PSB1bmRlZmluZWQgJiYgdGhpcmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIGZvdXJ0aFZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmlyc3RWYWx1ZS5hbHBoYSA+PSAxID8gcmdiKGZpcnN0VmFsdWUucmVkLCBmaXJzdFZhbHVlLmdyZWVuLCBmaXJzdFZhbHVlLmJsdWUpIDogXCJyZ2JhKFwiICsgZmlyc3RWYWx1ZS5yZWQgKyBcIixcIiArIGZpcnN0VmFsdWUuZ3JlZW4gKyBcIixcIiArIGZpcnN0VmFsdWUuYmx1ZSArIFwiLFwiICsgZmlyc3RWYWx1ZS5hbHBoYSArIFwiKVwiO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNyk7XG59XG5cbnZhciBpc1JnYiA9IGZ1bmN0aW9uIGlzUmdiKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJyAmJiAodHlwZW9mIGNvbG9yLmFscGhhICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbnZhciBpc1JnYmEgPSBmdW5jdGlvbiBpc1JnYmEoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5yZWQgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ncmVlbiA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmJsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcic7XG59O1xuXG52YXIgaXNIc2wgPSBmdW5jdGlvbiBpc0hzbChjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLmh1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLnNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5saWdodG5lc3MgPT09ICdudW1iZXInICYmICh0eXBlb2YgY29sb3IuYWxwaGEgIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ3VuZGVmaW5lZCcpO1xufTtcblxudmFyIGlzSHNsYSA9IGZ1bmN0aW9uIGlzSHNsYShjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLmh1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLnNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5saWdodG5lc3MgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcic7XG59O1xuLyoqXG4gKiBDb252ZXJ0cyBhIFJnYkNvbG9yLCBSZ2JhQ29sb3IsIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgdG8gYSBjb2xvciBzdHJpbmcuXG4gKiBUaGlzIHV0aWwgaXMgdXNlZnVsIGluIGNhc2UgeW91IG9ubHkga25vdyBvbiBydW50aW1lIHdoaWNoIGNvbG9yIG9iamVjdCBpc1xuICogdXNlZC4gT3RoZXJ3aXNlIHdlIHJlY29tbWVuZCB0byByZWx5IG9uIGByZ2JgLCBgcmdiYWAsIGBoc2xgIG9yIGBoc2xhYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pLFxuICogICBiYWNrZ3JvdW5kOiB0b0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHt0b0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43MilcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjMDBmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjUsMC43MilcIjtcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQ29sb3JTdHJpbmcoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ29iamVjdCcpIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDgpO1xuICBpZiAoaXNSZ2JhKGNvbG9yKSkgcmV0dXJuIHJnYmEoY29sb3IpO1xuICBpZiAoaXNSZ2IoY29sb3IpKSByZXR1cm4gcmdiKGNvbG9yKTtcbiAgaWYgKGlzSHNsYShjb2xvcikpIHJldHVybiBoc2xhKGNvbG9yKTtcbiAgaWYgKGlzSHNsKGNvbG9yKSkgcmV0dXJuIGhzbChjb2xvcik7XG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDgpO1xufVxuXG4vLyBUeXBlIGRlZmluaXRpb25zIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2djYW50aS9mbG93LXN0YXRpYy1sYW5kL2Jsb2IvbWFzdGVyL3NyYy9GdW4uanNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5mdW5jdGlvbiBjdXJyaWVkKGYsIGxlbmd0aCwgYWNjKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmbigpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgdmFyIGNvbWJpbmVkID0gYWNjLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICByZXR1cm4gY29tYmluZWQubGVuZ3RoID49IGxlbmd0aCA/IGYuYXBwbHkodGhpcywgY29tYmluZWQpIDogY3VycmllZChmLCBsZW5ndGgsIGNvbWJpbmVkKTtcbiAgfTtcbn0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5cbmZ1bmN0aW9uIGN1cnJ5KGYpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZWRlY2xhcmVcbiAgcmV0dXJuIGN1cnJpZWQoZiwgZi5sZW5ndGgsIFtdKTtcbn1cblxuLyoqXG4gKiBDaGFuZ2VzIHRoZSBodWUgb2YgdGhlIGNvbG9yLiBIdWUgaXMgYSBudW1iZXIgYmV0d2VlbiAwIHRvIDM2MC4gVGhlIGZpcnN0XG4gKiBhcmd1bWVudCBmb3IgYWRqdXN0SHVlIGlzIHRoZSBhbW91bnQgb2YgZGVncmVlcyB0aGUgY29sb3IgaXMgcm90YXRlZCBhcm91bmRcbiAqIHRoZSBjb2xvciB3aGVlbCwgYWx3YXlzIHByb2R1Y2luZyBhIHBvc2l0aXZlIGh1ZSB2YWx1ZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBhZGp1c3RIdWUoMTgwLCAnIzQ0OCcpLFxuICogICBiYWNrZ3JvdW5kOiBhZGp1c3RIdWUoJzE4MCcsICdyZ2JhKDEwMSwxMDAsMjA1LDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHthZGp1c3RIdWUoMTgwLCAnIzQ0OCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHthZGp1c3RIdWUoJzE4MCcsICdyZ2JhKDEwMSwxMDAsMjA1LDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzg4ODg0NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTM2LDEzNiw2OCwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gYWRqdXN0SHVlKGRlZ3JlZSwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBodWU6IGhzbENvbG9yLmh1ZSArIHBhcnNlRmxvYXQoZGVncmVlKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkQWRqdXN0SHVlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKGFkanVzdEh1ZSk7XG52YXIgY3VycmllZEFkanVzdEh1ZSQxID0gY3VycmllZEFkanVzdEh1ZTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb21wbGVtZW50IG9mIHRoZSBwcm92aWRlZCBjb2xvci4gVGhpcyBpcyBpZGVudGljYWwgdG8gYWRqdXN0SHVlKDE4MCwgPGNvbG9yPikuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogY29tcGxlbWVudCgnIzQ0OCcpLFxuICogICBiYWNrZ3JvdW5kOiBjb21wbGVtZW50KCdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtjb21wbGVtZW50KCcjNDQ4Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2NvbXBsZW1lbnQoJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjODg0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNTMsMTUzLDE1MywwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gY29tcGxlbWVudChjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGh1ZTogKGhzbENvbG9yLmh1ZSArIDE4MCkgJSAzNjBcbiAgfSkpO1xufVxuXG5mdW5jdGlvbiBndWFyZChsb3dlckJvdW5kYXJ5LCB1cHBlckJvdW5kYXJ5LCB2YWx1ZSkge1xuICByZXR1cm4gTWF0aC5tYXgobG93ZXJCb3VuZGFyeSwgTWF0aC5taW4odXBwZXJCb3VuZGFyeSwgdmFsdWUpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgZGFya2VuZWQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKDAuMiwgJyNGRkNENjQnKSxcbiAqICAgYmFja2dyb3VuZDogZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7ZGFya2VuKCcwLjInLCAncmdiYSgyNTUsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZiZDMxXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMTg5LDQ5LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBkYXJrZW4oYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIGxpZ2h0bmVzczogZ3VhcmQoMCwgMSwgaHNsQ29sb3IubGlnaHRuZXNzIC0gcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkRGFya2VuID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKGRhcmtlbik7XG52YXIgY3VycmllZERhcmtlbiQxID0gY3VycmllZERhcmtlbjtcblxuLyoqXG4gKiBEZWNyZWFzZXMgdGhlIGludGVuc2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgaXMgYmV0d2VlbiAwIHRvIDEuIFRoZSBmaXJzdFxuICogYXJndW1lbnQgb2YgdGhlIGRlc2F0dXJhdGUgZnVuY3Rpb24gaXMgdGhlIGFtb3VudCBieSBob3cgbXVjaCB0aGUgY29sb3JcbiAqIGludGVuc2l0eSBzaG91bGQgYmUgZGVjcmVhc2VkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGRlc2F0dXJhdGUoMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBkZXNhdHVyYXRlKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7ZGVzYXR1cmF0ZSgwLjIsICcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2Rlc2F0dXJhdGUoJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2I4Yjk3OVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTg0LDE4NSwxMjEsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGRlc2F0dXJhdGUoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIHNhdHVyYXRpb246IGd1YXJkKDAsIDEsIGhzbENvbG9yLnNhdHVyYXRpb24gLSBwYXJzZUZsb2F0KGFtb3VudCkpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWREZXNhdHVyYXRlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKGRlc2F0dXJhdGUpO1xudmFyIGN1cnJpZWREZXNhdHVyYXRlJDEgPSBjdXJyaWVkRGVzYXR1cmF0ZTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgbnVtYmVyIChmbG9hdCkgcmVwcmVzZW50aW5nIHRoZSBsdW1pbmFuY2Ugb2YgYSBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBnZXRMdW1pbmFuY2UoJyNDQ0NENjQnKSA+PSBnZXRMdW1pbmFuY2UoJyMwMDAwZmYnKSA/ICcjQ0NDRDY0JyA6ICcjMDAwMGZmJyxcbiAqICAgYmFja2dyb3VuZDogZ2V0THVtaW5hbmNlKCdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknKSA+PSBnZXRMdW1pbmFuY2UoJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScpID9cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSg1OCwgMTMzLCAyNTUsIDEpJyA6XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA1NywgMTQ5LCAxKScsXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Z2V0THVtaW5hbmNlKCcjQ0NDRDY0JykgPj0gZ2V0THVtaW5hbmNlKCcjMDAwMGZmJykgPyAnI0NDQ0Q2NCcgOiAnIzAwMDBmZid9O1xuICogICBiYWNrZ3JvdW5kOiAke2dldEx1bWluYW5jZSgncmdiYSg1OCwgMTMzLCAyNTUsIDEpJykgPj0gZ2V0THVtaW5hbmNlKCdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknKSA/XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScgOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknfTtcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgYmFja2dyb3VuZDogXCIjQ0NDRDY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSg1OCwgMTMzLCAyNTUsIDEpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZ2V0THVtaW5hbmNlKGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIDA7XG4gIHZhciByZ2JDb2xvciA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuXG4gIHZhciBfT2JqZWN0JGtleXMkbWFwID0gT2JqZWN0LmtleXMocmdiQ29sb3IpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGNoYW5uZWwgPSByZ2JDb2xvcltrZXldIC8gMjU1O1xuICAgIHJldHVybiBjaGFubmVsIDw9IDAuMDM5MjggPyBjaGFubmVsIC8gMTIuOTIgOiBNYXRoLnBvdygoY2hhbm5lbCArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICB9KSxcbiAgICAgIHIgPSBfT2JqZWN0JGtleXMkbWFwWzBdLFxuICAgICAgZyA9IF9PYmplY3Qka2V5cyRtYXBbMV0sXG4gICAgICBiID0gX09iamVjdCRrZXlzJG1hcFsyXTtcblxuICByZXR1cm4gcGFyc2VGbG9hdCgoMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiKS50b0ZpeGVkKDMpKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250cmFzdCByYXRpbyBiZXR3ZWVuIHR3byBjb2xvcnMgYmFzZWQgb25cbiAqIFtXMydzIHJlY29tbWVuZGVkIGVxdWF0aW9uIGZvciBjYWxjdWxhdGluZyBjb250cmFzdF0oaHR0cDovL3d3dy53My5vcmcvVFIvV0NBRzIwLyNjb250cmFzdC1yYXRpb2RlZikuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IGNvbnRyYXN0UmF0aW8gPSBnZXRDb250cmFzdCgnIzQ0NCcsICcjZmZmJyk7XG4gKi9cblxuZnVuY3Rpb24gZ2V0Q29udHJhc3QoY29sb3IxLCBjb2xvcjIpIHtcbiAgdmFyIGx1bWluYW5jZTEgPSBnZXRMdW1pbmFuY2UoY29sb3IxKTtcbiAgdmFyIGx1bWluYW5jZTIgPSBnZXRMdW1pbmFuY2UoY29sb3IyKTtcbiAgcmV0dXJuIHBhcnNlRmxvYXQoKGx1bWluYW5jZTEgPiBsdW1pbmFuY2UyID8gKGx1bWluYW5jZTEgKyAwLjA1KSAvIChsdW1pbmFuY2UyICsgMC4wNSkgOiAobHVtaW5hbmNlMiArIDAuMDUpIC8gKGx1bWluYW5jZTEgKyAwLjA1KSkudG9GaXhlZCgyKSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGNvbG9yIHRvIGEgZ3JheXNjYWxlLCBieSByZWR1Y2luZyBpdHMgc2F0dXJhdGlvbiB0byAwLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGdyYXlzY2FsZSgnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBncmF5c2NhbGUoJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2dyYXlzY2FsZSgnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtncmF5c2NhbGUoJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjOTk5XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNTMsMTUzLDE1MywwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZ3JheXNjYWxlKGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgcGFyc2VUb0hzbChjb2xvciksIHtcbiAgICBzYXR1cmF0aW9uOiAwXG4gIH0pKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QgdG8gYSBjb2xvciBzdHJpbmcuXG4gKiBUaGlzIHV0aWwgaXMgdXNlZnVsIGluIGNhc2UgeW91IG9ubHkga25vdyBvbiBydW50aW1lIHdoaWNoIGNvbG9yIG9iamVjdCBpc1xuICogdXNlZC4gT3RoZXJ3aXNlIHdlIHJlY29tbWVuZCB0byByZWx5IG9uIGBoc2xgIG9yIGBoc2xhYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBoc2xUb0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pLFxuICogICBiYWNrZ3JvdW5kOiBoc2xUb0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtoc2xUb0NvbG9yU3RyaW5nKHsgaHVlOiAyNDAsIHNhdHVyYXRpb246IDEsIGxpZ2h0bmVzczogMC41IH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtoc2xUb0NvbG9yU3RyaW5nKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40LCBhbHBoYTogMC43MiB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI1LDAuNzIpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbFRvQ29sb3JTdHJpbmcoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNvbG9yLmh1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLnNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5saWdodG5lc3MgPT09ICdudW1iZXInKSB7XG4gICAgaWYgKGNvbG9yLmFscGhhICYmIHR5cGVvZiBjb2xvci5hbHBoYSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiBoc2xhKHtcbiAgICAgICAgaHVlOiBjb2xvci5odWUsXG4gICAgICAgIHNhdHVyYXRpb246IGNvbG9yLnNhdHVyYXRpb24sXG4gICAgICAgIGxpZ2h0bmVzczogY29sb3IubGlnaHRuZXNzLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBoc2woe1xuICAgICAgaHVlOiBjb2xvci5odWUsXG4gICAgICBzYXR1cmF0aW9uOiBjb2xvci5zYXR1cmF0aW9uLFxuICAgICAgbGlnaHRuZXNzOiBjb2xvci5saWdodG5lc3NcbiAgICB9KTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ1KTtcbn1cblxuLyoqXG4gKiBJbnZlcnRzIHRoZSByZWQsIGdyZWVuIGFuZCBibHVlIHZhbHVlcyBvZiBhIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGludmVydCgnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBpbnZlcnQoJ3JnYmEoMTAxLDEwMCwyMDUsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2ludmVydCgnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtpbnZlcnQoJ3JnYmEoMTAxLDEwMCwyMDUsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzMzMzI5YlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTU0LDE1NSw1MCwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gaW52ZXJ0KGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yOyAvLyBwYXJzZSBjb2xvciBzdHJpbmcgdG8gcmdiXG5cbiAgdmFyIHZhbHVlID0gcGFyc2VUb1JnYihjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCB2YWx1ZSwge1xuICAgIHJlZDogMjU1IC0gdmFsdWUucmVkLFxuICAgIGdyZWVuOiAyNTUgLSB2YWx1ZS5ncmVlbixcbiAgICBibHVlOiAyNTUgLSB2YWx1ZS5ibHVlXG4gIH0pKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgbGlnaHRlbmVkIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBsaWdodGVuKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbigwLjIsICcjRkZDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNlNWU2YjFcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyOSwyMzAsMTc3LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBsaWdodGVuKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBsaWdodG5lc3M6IGd1YXJkKDAsIDEsIGhzbENvbG9yLmxpZ2h0bmVzcyArIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZExpZ2h0ZW4gPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4obGlnaHRlbik7XG52YXIgY3VycmllZExpZ2h0ZW4kMSA9IGN1cnJpZWRMaWdodGVuO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hpY2ggY29udHJhc3QgZ3VpZGVsaW5lcyBoYXZlIGJlZW4gbWV0IGZvciB0d28gY29sb3JzLlxuICogQmFzZWQgb24gdGhlIFtjb250cmFzdCBjYWxjdWxhdGlvbnMgcmVjb21tZW5kZWQgYnkgVzNdKGh0dHBzOi8vd3d3LnczLm9yZy9XQUkvV0NBRzIxL1VuZGVyc3RhbmRpbmcvY29udHJhc3QtZW5oYW5jZWQuaHRtbCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IHNjb3JlcyA9IG1lZXRzQ29udHJhc3RHdWlkZWxpbmVzKCcjNDQ0JywgJyNmZmYnKTtcbiAqL1xuZnVuY3Rpb24gbWVldHNDb250cmFzdEd1aWRlbGluZXMoY29sb3IxLCBjb2xvcjIpIHtcbiAgdmFyIGNvbnRyYXN0UmF0aW8gPSBnZXRDb250cmFzdChjb2xvcjEsIGNvbG9yMik7XG4gIHJldHVybiB7XG4gICAgQUE6IGNvbnRyYXN0UmF0aW8gPj0gNC41LFxuICAgIEFBTGFyZ2U6IGNvbnRyYXN0UmF0aW8gPj0gMyxcbiAgICBBQUE6IGNvbnRyYXN0UmF0aW8gPj0gNyxcbiAgICBBQUFMYXJnZTogY29udHJhc3RSYXRpbyA+PSA0LjVcbiAgfTtcbn1cblxuLyoqXG4gKiBNaXhlcyB0aGUgdHdvIHByb3ZpZGVkIGNvbG9ycyB0b2dldGhlciBieSBjYWxjdWxhdGluZyB0aGUgYXZlcmFnZSBvZiBlYWNoIG9mIHRoZSBSR0IgY29tcG9uZW50cyB3ZWlnaHRlZCB0byB0aGUgZmlyc3QgY29sb3IgYnkgdGhlIHByb3ZpZGVkIHdlaWdodC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBtaXgoMC41LCAnI2YwMCcsICcjMDBmJylcbiAqICAgYmFja2dyb3VuZDogbWl4KDAuMjUsICcjZjAwJywgJyMwMGYnKVxuICogICBiYWNrZ3JvdW5kOiBtaXgoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC41KScsICcjMDBmJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHttaXgoMC41LCAnI2YwMCcsICcjMDBmJyl9O1xuICogICBiYWNrZ3JvdW5kOiAke21peCgwLjI1LCAnI2YwMCcsICcjMDBmJyl9O1xuICogICBiYWNrZ3JvdW5kOiAke21peCgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjUpJywgJyMwMGYnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM3ZjAwN2ZcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjM2YwMGJmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSg2MywgMCwgMTkxLCAwLjc1KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIG1peCh3ZWlnaHQsIGNvbG9yLCBvdGhlckNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIG90aGVyQ29sb3I7XG4gIGlmIChvdGhlckNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIGlmICh3ZWlnaHQgPT09IDApIHJldHVybiBvdGhlckNvbG9yO1xuICB2YXIgcGFyc2VkQ29sb3IxID0gcGFyc2VUb1JnYihjb2xvcik7XG5cbiAgdmFyIGNvbG9yMSA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvcjEsIHtcbiAgICBhbHBoYTogdHlwZW9mIHBhcnNlZENvbG9yMS5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvcjEuYWxwaGEgOiAxXG4gIH0pO1xuXG4gIHZhciBwYXJzZWRDb2xvcjIgPSBwYXJzZVRvUmdiKG90aGVyQ29sb3IpO1xuXG4gIHZhciBjb2xvcjIgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IyLCB7XG4gICAgYWxwaGE6IHR5cGVvZiBwYXJzZWRDb2xvcjIuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IyLmFscGhhIDogMVxuICB9KTsgLy8gVGhlIGZvcm11bGEgaXMgY29waWVkIGZyb20gdGhlIG9yaWdpbmFsIFNhc3MgaW1wbGVtZW50YXRpb246XG4gIC8vIGh0dHA6Ly9zYXNzLWxhbmcuY29tL2RvY3VtZW50YXRpb24vU2Fzcy9TY3JpcHQvRnVuY3Rpb25zLmh0bWwjbWl4LWluc3RhbmNlX21ldGhvZFxuXG5cbiAgdmFyIGFscGhhRGVsdGEgPSBjb2xvcjEuYWxwaGEgLSBjb2xvcjIuYWxwaGE7XG4gIHZhciB4ID0gcGFyc2VGbG9hdCh3ZWlnaHQpICogMiAtIDE7XG4gIHZhciB5ID0geCAqIGFscGhhRGVsdGEgPT09IC0xID8geCA6IHggKyBhbHBoYURlbHRhO1xuICB2YXIgeiA9IDEgKyB4ICogYWxwaGFEZWx0YTtcbiAgdmFyIHdlaWdodDEgPSAoeSAvIHogKyAxKSAvIDIuMDtcbiAgdmFyIHdlaWdodDIgPSAxIC0gd2VpZ2h0MTtcbiAgdmFyIG1peGVkQ29sb3IgPSB7XG4gICAgcmVkOiBNYXRoLmZsb29yKGNvbG9yMS5yZWQgKiB3ZWlnaHQxICsgY29sb3IyLnJlZCAqIHdlaWdodDIpLFxuICAgIGdyZWVuOiBNYXRoLmZsb29yKGNvbG9yMS5ncmVlbiAqIHdlaWdodDEgKyBjb2xvcjIuZ3JlZW4gKiB3ZWlnaHQyKSxcbiAgICBibHVlOiBNYXRoLmZsb29yKGNvbG9yMS5ibHVlICogd2VpZ2h0MSArIGNvbG9yMi5ibHVlICogd2VpZ2h0MiksXG4gICAgYWxwaGE6IGNvbG9yMS5hbHBoYSAqIHBhcnNlRmxvYXQod2VpZ2h0KSArIGNvbG9yMi5hbHBoYSAqICgxIC0gcGFyc2VGbG9hdCh3ZWlnaHQpKVxuICB9O1xuICByZXR1cm4gcmdiYShtaXhlZENvbG9yKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRNaXggPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihtaXgpO1xudmFyIG1peCQxID0gY3VycmllZE1peDtcblxuLyoqXG4gKiBJbmNyZWFzZXMgdGhlIG9wYWNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGZvciB0aGUgYW1vdW50IGlzIGJldHdlZW4gMCB0byAxLlxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBvcGFjaWZ5KDAuMSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC45KScpO1xuICogICBiYWNrZ3JvdW5kOiBvcGFjaWZ5KDAuMiwgJ2hzbGEoMCwgMCUsIDEwMCUsIDAuNSknKSxcbiAqICAgYmFja2dyb3VuZDogb3BhY2lmeSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjIpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7b3BhY2lmeSgwLjEsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7b3BhY2lmeSgwLjIsICdoc2xhKDAsIDAlLCAxMDAlLCAwLjUpJyl9LFxuICogICBiYWNrZ3JvdW5kOiAke29wYWNpZnkoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC4yKScpfSxcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDI1NSwyNTUsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDAsMCwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gb3BhY2lmeShhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgcGFyc2VkQ29sb3IgPSBwYXJzZVRvUmdiKGNvbG9yKTtcbiAgdmFyIGFscGhhID0gdHlwZW9mIHBhcnNlZENvbG9yLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yLmFscGhhIDogMTtcblxuICB2YXIgY29sb3JXaXRoQWxwaGEgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IsIHtcbiAgICBhbHBoYTogZ3VhcmQoMCwgMSwgKGFscGhhICogMTAwICsgcGFyc2VGbG9hdChhbW91bnQpICogMTAwKSAvIDEwMClcbiAgfSk7XG5cbiAgcmV0dXJuIHJnYmEoY29sb3JXaXRoQWxwaGEpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZE9wYWNpZnkgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4ob3BhY2lmeSk7XG52YXIgY3VycmllZE9wYWNpZnkkMSA9IGN1cnJpZWRPcGFjaWZ5O1xuXG52YXIgZGVmYXVsdFJldHVybklmTGlnaHRDb2xvciA9ICcjMDAwJztcbnZhciBkZWZhdWx0UmV0dXJuSWZEYXJrQ29sb3IgPSAnI2ZmZic7XG4vKipcbiAqIFJldHVybnMgYmxhY2sgb3Igd2hpdGUgKG9yIG9wdGlvbmFsIHBhc3NlZCBjb2xvcnMpIGZvciBiZXN0XG4gKiBjb250cmFzdCBkZXBlbmRpbmcgb24gdGhlIGx1bWlub3NpdHkgb2YgdGhlIGdpdmVuIGNvbG9yLlxuICogV2hlbiBwYXNzaW5nIGN1c3RvbSByZXR1cm4gY29sb3JzLCBzdHJpY3QgbW9kZSBlbnN1cmVzIHRoYXQgdGhlXG4gKiByZXR1cm4gY29sb3IgYWx3YXlzIG1lZXRzIG9yIGV4Y2VlZHMgV0NBRyBsZXZlbCBBQSBvciBncmVhdGVyLiBJZiB0aGlzIHRlc3RcbiAqIGZhaWxzLCB0aGUgZGVmYXVsdCByZXR1cm4gY29sb3IgKGJsYWNrIG9yIHdoaXRlKSBpcyByZXR1cm5lZCBpbiBwbGFjZSBvZiB0aGVcbiAqIGN1c3RvbSByZXR1cm4gY29sb3IuIFlvdSBjYW4gb3B0aW9uYWxseSB0dXJuIG9mZiBzdHJpY3QgbW9kZS5cbiAqXG4gKiBGb2xsb3dzIFtXM0Mgc3BlY3MgZm9yIHJlYWRhYmlsaXR5XShodHRwczovL3d3dy53My5vcmcvVFIvV0NBRzIwLVRFQ0hTL0cxOC5odG1sKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBjb2xvcjogcmVhZGFibGVDb2xvcignIzAwMCcpLFxuICogICBjb2xvcjogcmVhZGFibGVDb2xvcignYmxhY2snLCAnIzAwMScsICcjZmY4JyksXG4gKiAgIGNvbG9yOiByZWFkYWJsZUNvbG9yKCd3aGl0ZScsICcjMDAxJywgJyNmZjgnKSxcbiAqICAgY29sb3I6IHJlYWRhYmxlQ29sb3IoJ3JlZCcsICcjMzMzJywgJyNkZGQnLCB0cnVlKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBjb2xvcjogJHtyZWFkYWJsZUNvbG9yKCcjMDAwJyl9O1xuICogICBjb2xvcjogJHtyZWFkYWJsZUNvbG9yKCdibGFjaycsICcjMDAxJywgJyNmZjgnKX07XG4gKiAgIGNvbG9yOiAke3JlYWRhYmxlQ29sb3IoJ3doaXRlJywgJyMwMDEnLCAnI2ZmOCcpfTtcbiAqICAgY29sb3I6ICR7cmVhZGFibGVDb2xvcigncmVkJywgJyMzMzMnLCAnI2RkZCcsIHRydWUpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgY29sb3I6IFwiI2ZmZlwiO1xuICogICBjb2xvcjogXCIjZmY4XCI7XG4gKiAgIGNvbG9yOiBcIiMwMDFcIjtcbiAqICAgY29sb3I6IFwiIzAwMFwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHJlYWRhYmxlQ29sb3IoY29sb3IsIHJldHVybklmTGlnaHRDb2xvciwgcmV0dXJuSWZEYXJrQ29sb3IsIHN0cmljdCkge1xuICBpZiAocmV0dXJuSWZMaWdodENvbG9yID09PSB2b2lkIDApIHtcbiAgICByZXR1cm5JZkxpZ2h0Q29sb3IgPSBkZWZhdWx0UmV0dXJuSWZMaWdodENvbG9yO1xuICB9XG5cbiAgaWYgKHJldHVybklmRGFya0NvbG9yID09PSB2b2lkIDApIHtcbiAgICByZXR1cm5JZkRhcmtDb2xvciA9IGRlZmF1bHRSZXR1cm5JZkRhcmtDb2xvcjtcbiAgfVxuXG4gIGlmIChzdHJpY3QgPT09IHZvaWQgMCkge1xuICAgIHN0cmljdCA9IHRydWU7XG4gIH1cblxuICB2YXIgaXNDb2xvckxpZ2h0ID0gZ2V0THVtaW5hbmNlKGNvbG9yKSA+IDAuMTc5O1xuICB2YXIgcHJlZmVycmVkUmV0dXJuQ29sb3IgPSBpc0NvbG9yTGlnaHQgPyByZXR1cm5JZkxpZ2h0Q29sb3IgOiByZXR1cm5JZkRhcmtDb2xvcjtcblxuICBpZiAoIXN0cmljdCB8fCBnZXRDb250cmFzdChjb2xvciwgcHJlZmVycmVkUmV0dXJuQ29sb3IpID49IDQuNSkge1xuICAgIHJldHVybiBwcmVmZXJyZWRSZXR1cm5Db2xvcjtcbiAgfVxuXG4gIHJldHVybiBpc0NvbG9yTGlnaHQgPyBkZWZhdWx0UmV0dXJuSWZMaWdodENvbG9yIDogZGVmYXVsdFJldHVybklmRGFya0NvbG9yO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdCB0byBhIGNvbG9yIHN0cmluZy5cbiAqIFRoaXMgdXRpbCBpcyB1c2VmdWwgaW4gY2FzZSB5b3Ugb25seSBrbm93IG9uIHJ1bnRpbWUgd2hpY2ggY29sb3Igb2JqZWN0IGlzXG4gKiB1c2VkLiBPdGhlcndpc2Ugd2UgcmVjb21tZW5kIHRvIHJlbHkgb24gYHJnYmAgb3IgYHJnYmFgLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYlRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogICBiYWNrZ3JvdW5kOiByZ2JUb0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiVG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYlRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmY2Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43MilcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiVG9Db2xvclN0cmluZyhjb2xvcikge1xuICBpZiAodHlwZW9mIGNvbG9yID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJykge1xuICAgIGlmICh0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gcmdiYSh7XG4gICAgICAgIHJlZDogY29sb3IucmVkLFxuICAgICAgICBncmVlbjogY29sb3IuZ3JlZW4sXG4gICAgICAgIGJsdWU6IGNvbG9yLmJsdWUsXG4gICAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJnYih7XG4gICAgICByZWQ6IGNvbG9yLnJlZCxcbiAgICAgIGdyZWVuOiBjb2xvci5ncmVlbixcbiAgICAgIGJsdWU6IGNvbG9yLmJsdWVcbiAgICB9KTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ2KTtcbn1cblxuLyoqXG4gKiBJbmNyZWFzZXMgdGhlIGludGVuc2l0eSBvZiBhIGNvbG9yLiBJdHMgcmFuZ2UgaXMgYmV0d2VlbiAwIHRvIDEuIFRoZSBmaXJzdFxuICogYXJndW1lbnQgb2YgdGhlIHNhdHVyYXRlIGZ1bmN0aW9uIGlzIHRoZSBhbW91bnQgYnkgaG93IG11Y2ggdGhlIGNvbG9yXG4gKiBpbnRlbnNpdHkgc2hvdWxkIGJlIGluY3JlYXNlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBzYXR1cmF0ZSgwLjIsICcjQ0NDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IHNhdHVyYXRlKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7c2F0dXJhdGUoMC4yLCAnI0ZGQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtzYXR1cmF0ZSgnMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2UwZTI1MFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjI0LDIyNiw4MCwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc2F0dXJhdGUoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIGhzbENvbG9yID0gcGFyc2VUb0hzbChjb2xvcik7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBoc2xDb2xvciwge1xuICAgIHNhdHVyYXRpb246IGd1YXJkKDAsIDEsIGhzbENvbG9yLnNhdHVyYXRpb24gKyBwYXJzZUZsb2F0KGFtb3VudCkpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRTYXR1cmF0ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihzYXR1cmF0ZSk7XG52YXIgY3VycmllZFNhdHVyYXRlJDEgPSBjdXJyaWVkU2F0dXJhdGU7XG5cbi8qKlxuICogU2V0cyB0aGUgaHVlIG9mIGEgY29sb3IgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGUgaHVlIHJhbmdlIGNhbiBiZVxuICogZnJvbSAwIGFuZCAzNTkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogc2V0SHVlKDQyLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBzZXRIdWUoJzI0NCcsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzZXRIdWUoNDIsICcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3NldEh1ZSgnMjQ0JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjY2RhZTY0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxMDcsMTAwLDIwNSwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc2V0SHVlKGh1ZSwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBwYXJzZVRvSHNsKGNvbG9yKSwge1xuICAgIGh1ZTogcGFyc2VGbG9hdChodWUpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRTZXRIdWUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oc2V0SHVlKTtcbnZhciBjdXJyaWVkU2V0SHVlJDEgPSBjdXJyaWVkU2V0SHVlO1xuXG4vKipcbiAqIFNldHMgdGhlIGxpZ2h0bmVzcyBvZiBhIGNvbG9yIHRvIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhlIGxpZ2h0bmVzcyByYW5nZSBjYW4gYmVcbiAqIGZyb20gMCBhbmQgMS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBzZXRMaWdodG5lc3MoMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBzZXRMaWdodG5lc3MoJzAuNzUnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0TGlnaHRuZXNzKDAuMiwgJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0TGlnaHRuZXNzKCcwLjc1JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjNGQ0ZDE5XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyMjMsMjI0LDE1OSwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc2V0TGlnaHRuZXNzKGxpZ2h0bmVzcywgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHJldHVybiB0b0NvbG9yU3RyaW5nKF9leHRlbmRzKHt9LCBwYXJzZVRvSHNsKGNvbG9yKSwge1xuICAgIGxpZ2h0bmVzczogcGFyc2VGbG9hdChsaWdodG5lc3MpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRTZXRMaWdodG5lc3MgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oc2V0TGlnaHRuZXNzKTtcbnZhciBjdXJyaWVkU2V0TGlnaHRuZXNzJDEgPSBjdXJyaWVkU2V0TGlnaHRuZXNzO1xuXG4vKipcbiAqIFNldHMgdGhlIHNhdHVyYXRpb24gb2YgYSBjb2xvciB0byB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoZSBzYXR1cmF0aW9uIHJhbmdlIGNhbiBiZVxuICogZnJvbSAwIGFuZCAxLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNldFNhdHVyYXRpb24oMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBzZXRTYXR1cmF0aW9uKCcwLjc1JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NldFNhdHVyYXRpb24oMC4yLCAnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtzZXRTYXR1cmF0aW9uKCcwLjc1JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYWRhZDg0XCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyMjgsMjI5LDc2LDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzZXRTYXR1cmF0aW9uKHNhdHVyYXRpb24sIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgcGFyc2VUb0hzbChjb2xvciksIHtcbiAgICBzYXR1cmF0aW9uOiBwYXJzZUZsb2F0KHNhdHVyYXRpb24pXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRTZXRTYXR1cmF0aW9uID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNldFNhdHVyYXRpb24pO1xudmFyIGN1cnJpZWRTZXRTYXR1cmF0aW9uJDEgPSBjdXJyaWVkU2V0U2F0dXJhdGlvbjtcblxuLyoqXG4gKiBTaGFkZXMgYSBjb2xvciBieSBtaXhpbmcgaXQgd2l0aCBibGFjay4gYHNoYWRlYCBjYW4gcHJvZHVjZVxuICogaHVlIHNoaWZ0cywgd2hlcmUgYXMgYGRhcmtlbmAgbWFuaXB1bGF0ZXMgdGhlIGx1bWluYW5jZSBjaGFubmVsIGFuZCB0aGVyZWZvcmVcbiAqIGRvZXNuJ3QgcHJvZHVjZSBodWUgc2hpZnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNoYWRlKDAuMjUsICcjMDBmJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzaGFkZSgwLjI1LCAnIzAwZicpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwMDAzZlwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHNoYWRlKHBlcmNlbnRhZ2UsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gbWl4JDEocGFyc2VGbG9hdChwZXJjZW50YWdlKSwgJ3JnYigwLCAwLCAwKScsIGNvbG9yKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRTaGFkZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihzaGFkZSk7XG52YXIgY3VycmllZFNoYWRlJDEgPSBjdXJyaWVkU2hhZGU7XG5cbi8qKlxuICogVGludHMgYSBjb2xvciBieSBtaXhpbmcgaXQgd2l0aCB3aGl0ZS4gYHRpbnRgIGNhbiBwcm9kdWNlXG4gKiBodWUgc2hpZnRzLCB3aGVyZSBhcyBgbGlnaHRlbmAgbWFuaXB1bGF0ZXMgdGhlIGx1bWluYW5jZSBjaGFubmVsIGFuZCB0aGVyZWZvcmVcbiAqIGRvZXNuJ3QgcHJvZHVjZSBodWUgc2hpZnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHRpbnQoMC4yNSwgJyMwMGYnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RpbnQoMC4yNSwgJyMwMGYnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNiZmJmZmZcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiB0aW50KHBlcmNlbnRhZ2UsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gbWl4JDEocGFyc2VGbG9hdChwZXJjZW50YWdlKSwgJ3JnYigyNTUsIDI1NSwgMjU1KScsIGNvbG9yKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRUaW50ID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHRpbnQpO1xudmFyIGN1cnJpZWRUaW50JDEgPSBjdXJyaWVkVGludDtcblxuLyoqXG4gKiBEZWNyZWFzZXMgdGhlIG9wYWNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGZvciB0aGUgYW1vdW50IGlzIGJldHdlZW4gMCB0byAxLlxuICpcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgwLjEsICcjZmZmJyksXG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKDAuMiwgJ2hzbCgwLCAwJSwgMTAwJSknKSxcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC44KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuMSwgJyNmZmYnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoMC4yLCAnaHNsKDAsIDAlLCAxMDAlKScpfTtcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgnMC41JywgJ3JnYmEoMjU1LCAwLCAwLCAwLjgpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOSlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuOClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwwLDAsMC4zKVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHRyYW5zcGFyZW50aXplKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBwYXJzZWRDb2xvciA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuICB2YXIgYWxwaGEgPSB0eXBlb2YgcGFyc2VkQ29sb3IuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IuYWxwaGEgOiAxO1xuXG4gIHZhciBjb2xvcldpdGhBbHBoYSA9IF9leHRlbmRzKHt9LCBwYXJzZWRDb2xvciwge1xuICAgIGFscGhhOiBndWFyZCgwLCAxLCArKGFscGhhICogMTAwIC0gcGFyc2VGbG9hdChhbW91bnQpICogMTAwKS50b0ZpeGVkKDIpIC8gMTAwKVxuICB9KTtcblxuICByZXR1cm4gcmdiYShjb2xvcldpdGhBbHBoYSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkVHJhbnNwYXJlbnRpemUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4odHJhbnNwYXJlbnRpemUpO1xudmFyIGN1cnJpZWRUcmFuc3BhcmVudGl6ZSQxID0gY3VycmllZFRyYW5zcGFyZW50aXplO1xuXG4vKipcbiAqIFNob3J0aGFuZCBmb3IgZWFzaWx5IHNldHRpbmcgdGhlIGFuaW1hdGlvbiBwcm9wZXJ0eS4gQWxsb3dzIGVpdGhlciBtdWx0aXBsZSBhcnJheXMgd2l0aCBhbmltYXRpb25zXG4gKiBvciBhIHNpbmdsZSBhbmltYXRpb24gc3ByZWFkIG92ZXIgdGhlIGFyZ3VtZW50cy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmFuaW1hdGlvbihbJ3JvdGF0ZScsICcxcycsICdlYXNlLWluLW91dCddLCBbJ2NvbG9yY2hhbmdlJywgJzJzJ10pXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7YW5pbWF0aW9uKFsncm90YXRlJywgJzFzJywgJ2Vhc2UtaW4tb3V0J10sIFsnY29sb3JjaGFuZ2UnLCAnMnMnXSl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdhbmltYXRpb24nOiAncm90YXRlIDFzIGVhc2UtaW4tb3V0LCBjb2xvcmNoYW5nZSAycydcbiAqIH1cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmFuaW1hdGlvbigncm90YXRlJywgJzFzJywgJ2Vhc2UtaW4tb3V0JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHthbmltYXRpb24oJ3JvdGF0ZScsICcxcycsICdlYXNlLWluLW91dCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYW5pbWF0aW9uJzogJ3JvdGF0ZSAxcyBlYXNlLWluLW91dCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYW5pbWF0aW9uKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgLy8gQWxsb3cgc2luZ2xlIG9yIG11bHRpcGxlIGFuaW1hdGlvbnMgcGFzc2VkXG4gIHZhciBtdWx0aU1vZGUgPSBBcnJheS5pc0FycmF5KGFyZ3NbMF0pO1xuXG4gIGlmICghbXVsdGlNb2RlICYmIGFyZ3MubGVuZ3RoID4gOCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY0KTtcbiAgfVxuXG4gIHZhciBjb2RlID0gYXJncy5tYXAoZnVuY3Rpb24gKGFyZykge1xuICAgIGlmIChtdWx0aU1vZGUgJiYgIUFycmF5LmlzQXJyYXkoYXJnKSB8fCAhbXVsdGlNb2RlICYmIEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjUpO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCA+IDgpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY2KTtcbiAgICB9XG5cbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShhcmcpID8gYXJnLmpvaW4oJyAnKSA6IGFyZztcbiAgfSkuam9pbignLCAnKTtcbiAgcmV0dXJuIHtcbiAgICBhbmltYXRpb246IGNvZGVcbiAgfTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIGFueSBudW1iZXIgb2YgYmFja2dyb3VuZEltYWdlIHZhbHVlcyBhcyBwYXJhbWV0ZXJzIGZvciBjcmVhdGluZyBhIHNpbmdsZSBiYWNrZ3JvdW5kIHN0YXRlbWVudC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJhY2tncm91bmRJbWFnZXMoJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKScsICdsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiknKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JhY2tncm91bmRJbWFnZXMoJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKScsICdsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiknKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiksIGxpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKSdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYmFja2dyb3VuZEltYWdlcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BlcnRpZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHJvcGVydGllc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZEltYWdlOiBwcm9wZXJ0aWVzLmpvaW4oJywgJylcbiAgfTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIGFueSBudW1iZXIgb2YgYmFja2dyb3VuZCB2YWx1ZXMgYXMgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgYSBzaW5nbGUgYmFja2dyb3VuZCBzdGF0ZW1lbnQuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5iYWNrZ3JvdW5kcygndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpJywgJ2xpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKScsICdjZW50ZXIgbm8tcmVwZWF0JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtiYWNrZ3JvdW5kcygndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpJywgJ2xpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKScsICdjZW50ZXIgbm8tcmVwZWF0Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdiYWNrZ3JvdW5kJzogJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKSwgbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pLCBjZW50ZXIgbm8tcmVwZWF0J1xuICogfVxuICovXG5mdW5jdGlvbiBiYWNrZ3JvdW5kcygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BlcnRpZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHJvcGVydGllc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmFja2dyb3VuZDogcHJvcGVydGllcy5qb2luKCcsICcpXG4gIH07XG59XG5cbnZhciBzaWRlTWFwID0gWyd0b3AnLCAncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnXTtcbi8qKlxuICogU2hvcnRoYW5kIGZvciB0aGUgYm9yZGVyIHByb3BlcnR5IHRoYXQgc3BsaXRzIG91dCBpbmRpdmlkdWFsIHByb3BlcnRpZXMgZm9yIHVzZSB3aXRoIHRvb2xzIGxpa2UgRmVsYSBhbmQgU3R5bGV0cm9uLiBBIHNpZGUga2V5d29yZCBjYW4gb3B0aW9uYWxseSBiZSBwYXNzZWQgdG8gdGFyZ2V0IG9ubHkgb25lIHNpZGUncyBib3JkZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXIoJzFweCcsICdzb2xpZCcsICdyZWQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlcignMXB4JywgJ3NvbGlkJywgJ3JlZCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyQ29sb3InOiAncmVkJyxcbiAqICAgJ2JvcmRlclN0eWxlJzogJ3NvbGlkJyxcbiAqICAgJ2JvcmRlcldpZHRoJzogYDFweGAsXG4gKiB9XG4gKlxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXIoJ3RvcCcsICcxcHgnLCAnc29saWQnLCAncmVkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXIoJ3RvcCcsICcxcHgnLCAnc29saWQnLCAncmVkJyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BDb2xvcic6ICdyZWQnLFxuICogICAnYm9yZGVyVG9wU3R5bGUnOiAnc29saWQnLFxuICogICAnYm9yZGVyVG9wV2lkdGgnOiBgMXB4YCxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBib3JkZXIoc2lkZUtleXdvcmQpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc2lkZUtleXdvcmQgPT09ICdzdHJpbmcnICYmIHNpZGVNYXAuaW5kZXhPZihzaWRlS2V5d29yZCkgPj0gMCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltcImJvcmRlclwiICsgY2FwaXRhbGl6ZVN0cmluZyhzaWRlS2V5d29yZCkgKyBcIldpZHRoXCJdID0gdmFsdWVzWzBdLCBfcmVmW1wiYm9yZGVyXCIgKyBjYXBpdGFsaXplU3RyaW5nKHNpZGVLZXl3b3JkKSArIFwiU3R5bGVcIl0gPSB2YWx1ZXNbMV0sIF9yZWZbXCJib3JkZXJcIiArIGNhcGl0YWxpemVTdHJpbmcoc2lkZUtleXdvcmQpICsgXCJDb2xvclwiXSA9IHZhbHVlc1syXSwgX3JlZjtcbiAgfSBlbHNlIHtcbiAgICB2YWx1ZXMudW5zaGlmdChzaWRlS2V5d29yZCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvcmRlcldpZHRoOiB2YWx1ZXNbMF0sXG4gICAgICBib3JkZXJTdHlsZTogdmFsdWVzWzFdLFxuICAgICAgYm9yZGVyQ29sb3I6IHZhbHVlc1syXVxuICAgIH07XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIHVwIHRvIGZvdXIgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyQ29sb3IoJ3JlZCcsICdncmVlbicsICdibHVlJywgJ3llbGxvdycpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyQ29sb3IoJ3JlZCcsICdncmVlbicsICdibHVlJywgJ3llbGxvdycpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wQ29sb3InOiAncmVkJyxcbiAqICAgJ2JvcmRlclJpZ2h0Q29sb3InOiAnZ3JlZW4nLFxuICogICAnYm9yZGVyQm90dG9tQ29sb3InOiAnYmx1ZScsXG4gKiAgICdib3JkZXJMZWZ0Q29sb3InOiAneWVsbG93J1xuICogfVxuICovXG5mdW5jdGlvbiBib3JkZXJDb2xvcigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnYm9yZGVyQ29sb3InXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyBhIHZhbHVlIGZvciBzaWRlIGFuZCBhIHZhbHVlIGZvciByYWRpdXMgYW5kIGFwcGxpZXMgdGhlIHJhZGl1cyB2YWx1ZSB0byBib3RoIGNvcm5lcnMgb2YgdGhlIHNpZGUuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXJSYWRpdXMoJ3RvcCcsICc1cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlclJhZGl1cygndG9wJywgJzVweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wUmlnaHRSYWRpdXMnOiAnNXB4JyxcbiAqICAgJ2JvcmRlclRvcExlZnRSYWRpdXMnOiAnNXB4JyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYm9yZGVyUmFkaXVzKHNpZGUsIHJhZGl1cykge1xuICB2YXIgdXBwZXJjYXNlU2lkZSA9IGNhcGl0YWxpemVTdHJpbmcoc2lkZSk7XG5cbiAgaWYgKCFyYWRpdXMgJiYgcmFkaXVzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjIpO1xuICB9XG5cbiAgaWYgKHVwcGVyY2FzZVNpZGUgPT09ICdUb3AnIHx8IHVwcGVyY2FzZVNpZGUgPT09ICdCb3R0b20nKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW1wiYm9yZGVyXCIgKyB1cHBlcmNhc2VTaWRlICsgXCJSaWdodFJhZGl1c1wiXSA9IHJhZGl1cywgX3JlZltcImJvcmRlclwiICsgdXBwZXJjYXNlU2lkZSArIFwiTGVmdFJhZGl1c1wiXSA9IHJhZGl1cywgX3JlZjtcbiAgfVxuXG4gIGlmICh1cHBlcmNhc2VTaWRlID09PSAnTGVmdCcgfHwgdXBwZXJjYXNlU2lkZSA9PT0gJ1JpZ2h0Jykge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHJldHVybiBfcmVmMiA9IHt9LCBfcmVmMltcImJvcmRlclRvcFwiICsgdXBwZXJjYXNlU2lkZSArIFwiUmFkaXVzXCJdID0gcmFkaXVzLCBfcmVmMltcImJvcmRlckJvdHRvbVwiICsgdXBwZXJjYXNlU2lkZSArIFwiUmFkaXVzXCJdID0gcmFkaXVzLCBfcmVmMjtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDYzKTtcbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdGhhdCBhY2NlcHRzIHVwIHRvIGZvdXIgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyU3R5bGUoJ3NvbGlkJywgJ2Rhc2hlZCcsICdkb3R0ZWQnLCAnZG91YmxlJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXJTdHlsZSgnc29saWQnLCAnZGFzaGVkJywgJ2RvdHRlZCcsICdkb3VibGUnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JvcmRlclRvcFN0eWxlJzogJ3NvbGlkJyxcbiAqICAgJ2JvcmRlclJpZ2h0U3R5bGUnOiAnZGFzaGVkJyxcbiAqICAgJ2JvcmRlckJvdHRvbVN0eWxlJzogJ2RvdHRlZCcsXG4gKiAgICdib3JkZXJMZWZ0U3R5bGUnOiAnZG91YmxlJ1xuICogfVxuICovXG5mdW5jdGlvbiBib3JkZXJTdHlsZSgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnYm9yZGVyU3R5bGUnXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyB1cCB0byBmb3VyIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlcldpZHRoKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXJXaWR0aCgnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wV2lkdGgnOiAnMTJweCcsXG4gKiAgICdib3JkZXJSaWdodFdpZHRoJzogJzI0cHgnLFxuICogICAnYm9yZGVyQm90dG9tV2lkdGgnOiAnMzZweCcsXG4gKiAgICdib3JkZXJMZWZ0V2lkdGgnOiAnNDhweCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYm9yZGVyV2lkdGgoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJ2JvcmRlcldpZHRoJ10uY29uY2F0KHZhbHVlcykpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVNlbGVjdG9ycyh0ZW1wbGF0ZSwgc3RhdGUpIHtcbiAgdmFyIHN0YXRlU3VmZml4ID0gc3RhdGUgPyBcIjpcIiArIHN0YXRlIDogJyc7XG4gIHJldHVybiB0ZW1wbGF0ZShzdGF0ZVN1ZmZpeCk7XG59XG4vKipcbiAqIEZ1bmN0aW9uIGhlbHBlciB0aGF0IGFkZHMgYW4gYXJyYXkgb2Ygc3RhdGVzIHRvIGEgdGVtcGxhdGUgb2Ygc2VsZWN0b3JzLiBVc2VkIGluIHRleHRJbnB1dHMgYW5kIGJ1dHRvbnMuXG4gKiBAcHJpdmF0ZVxuICovXG5cblxuZnVuY3Rpb24gc3RhdGVmdWxTZWxlY3RvcnMoc3RhdGVzLCB0ZW1wbGF0ZSwgc3RhdGVNYXApIHtcbiAgaWYgKCF0ZW1wbGF0ZSkgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjcpO1xuICBpZiAoc3RhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIGdlbmVyYXRlU2VsZWN0b3JzKHRlbXBsYXRlLCBudWxsKTtcbiAgdmFyIHNlbGVjdG9ycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHN0YXRlTWFwICYmIHN0YXRlTWFwLmluZGV4T2Yoc3RhdGVzW2ldKSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY4KTtcbiAgICB9XG5cbiAgICBzZWxlY3RvcnMucHVzaChnZW5lcmF0ZVNlbGVjdG9ycyh0ZW1wbGF0ZSwgc3RhdGVzW2ldKSk7XG4gIH1cblxuICBzZWxlY3RvcnMgPSBzZWxlY3RvcnMuam9pbignLCcpO1xuICByZXR1cm4gc2VsZWN0b3JzO1xufVxuXG52YXIgc3RhdGVNYXAkMSA9IFt1bmRlZmluZWQsIG51bGwsICdhY3RpdmUnLCAnZm9jdXMnLCAnaG92ZXInXTtcblxuZnVuY3Rpb24gdGVtcGxhdGUkMShzdGF0ZSkge1xuICByZXR1cm4gXCJidXR0b25cIiArIHN0YXRlICsgXCIsXFxuICBpbnB1dFt0eXBlPVxcXCJidXR0b25cXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gIGlucHV0W3R5cGU9XFxcInJlc2V0XFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICBpbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXVwiICsgc3RhdGU7XG59XG4vKipcbiAqIFBvcHVsYXRlcyBzZWxlY3RvcnMgdGhhdCB0YXJnZXQgYWxsIGJ1dHRvbnMuIFlvdSBjYW4gcGFzcyBvcHRpb25hbCBzdGF0ZXMgdG8gYXBwZW5kIHRvIHRoZSBzZWxlY3RvcnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBbYnV0dG9ucygnYWN0aXZlJyldOiB7XG4gKiAgICAgJ2JvcmRlcic6ICdub25lJ1xuICogICB9XG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgID4gJHtidXR0b25zKCdhY3RpdmUnKX0ge1xuICogICAgIGJvcmRlcjogbm9uZTtcbiAqICAgfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiAgJ2J1dHRvbjphY3RpdmUsXG4gKiAgJ2lucHV0W3R5cGU9XCJidXR0b25cIl06YWN0aXZlLFxuICogICdpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdOmFjdGl2ZSxcbiAqICAnaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06YWN0aXZlOiB7XG4gKiAgICdib3JkZXInOiAnbm9uZSdcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIGJ1dHRvbnMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdGF0ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc3RhdGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlZnVsU2VsZWN0b3JzKHN0YXRlcywgdGVtcGxhdGUkMSwgc3RhdGVNYXAkMSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyB1cCB0byBmb3VyIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLm1hcmdpbignMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7bWFyZ2luKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdtYXJnaW5Ub3AnOiAnMTJweCcsXG4gKiAgICdtYXJnaW5SaWdodCc6ICcyNHB4JyxcbiAqICAgJ21hcmdpbkJvdHRvbSc6ICczNnB4JyxcbiAqICAgJ21hcmdpbkxlZnQnOiAnNDhweCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gbWFyZ2luKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWydtYXJnaW4nXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyB1cCB0byBmb3VyIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnBhZGRpbmcoJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3BhZGRpbmcoJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3BhZGRpbmdUb3AnOiAnMTJweCcsXG4gKiAgICdwYWRkaW5nUmlnaHQnOiAnMjRweCcsXG4gKiAgICdwYWRkaW5nQm90dG9tJzogJzM2cHgnLFxuICogICAncGFkZGluZ0xlZnQnOiAnNDhweCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcGFkZGluZygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsncGFkZGluZyddLmNvbmNhdCh2YWx1ZXMpKTtcbn1cblxudmFyIHBvc2l0aW9uTWFwID0gWydhYnNvbHV0ZScsICdmaXhlZCcsICdyZWxhdGl2ZScsICdzdGF0aWMnLCAnc3RpY2t5J107XG4vKipcbiAqIFNob3J0aGFuZCBhY2NlcHRzIHVwIHRvIGZpdmUgdmFsdWVzLCBpbmNsdWRpbmcgbnVsbCB0byBza2lwIGEgdmFsdWUsIGFuZCBtYXBzIHRoZW0gdG8gdGhlaXIgcmVzcGVjdGl2ZSBkaXJlY3Rpb25zLiBUaGUgZmlyc3QgdmFsdWUgY2FuIG9wdGlvbmFsbHkgYmUgYSBwb3NpdGlvbiBrZXl3b3JkLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ucG9zaXRpb24oJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3Bvc2l0aW9uKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICd0b3AnOiAnMTJweCcsXG4gKiAgICdyaWdodCc6ICcyNHB4JyxcbiAqICAgJ2JvdHRvbSc6ICczNnB4JyxcbiAqICAgJ2xlZnQnOiAnNDhweCdcbiAqIH1cbiAqXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnBvc2l0aW9uKCdhYnNvbHV0ZScsICcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtwb3NpdGlvbignYWJzb2x1dGUnLCAnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICogICAndG9wJzogJzEycHgnLFxuICogICAncmlnaHQnOiAnMjRweCcsXG4gKiAgICdib3R0b20nOiAnMzZweCcsXG4gKiAgICdsZWZ0JzogJzQ4cHgnXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gcG9zaXRpb24oZmlyc3RWYWx1ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHBvc2l0aW9uTWFwLmluZGV4T2YoZmlyc3RWYWx1ZSkgPj0gMCAmJiBmaXJzdFZhbHVlKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWycnXS5jb25jYXQodmFsdWVzKSksIHtcbiAgICAgIHBvc2l0aW9uOiBmaXJzdFZhbHVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJycsIGZpcnN0VmFsdWVdLmNvbmNhdCh2YWx1ZXMpKTtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0byBzZXQgdGhlIGhlaWdodCBhbmQgd2lkdGggcHJvcGVydGllcyBpbiBhIHNpbmdsZSBzdGF0ZW1lbnQuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5zaXplKCczMDBweCcsICcyNTBweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7c2l6ZSgnMzAwcHgnLCAnMjUwcHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2hlaWdodCc6ICczMDBweCcsXG4gKiAgICd3aWR0aCc6ICcyNTBweCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHNpemUoaGVpZ2h0LCB3aWR0aCkge1xuICBpZiAod2lkdGggPT09IHZvaWQgMCkge1xuICAgIHdpZHRoID0gaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICB3aWR0aDogd2lkdGhcbiAgfTtcbn1cblxudmFyIHN0YXRlTWFwID0gW3VuZGVmaW5lZCwgbnVsbCwgJ2FjdGl2ZScsICdmb2N1cycsICdob3ZlciddO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShzdGF0ZSkge1xuICByZXR1cm4gXCJpbnB1dFt0eXBlPVxcXCJjb2xvclxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcImRhdGV0aW1lXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcIm1vbnRoXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcIm51bWJlclxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJwYXNzd29yZFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwidGVsXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInRleHRcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwidGltZVxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ1cmxcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwid2Vla1xcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dDpub3QoW3R5cGVdKVwiICsgc3RhdGUgKyBcIixcXG4gICAgdGV4dGFyZWFcIiArIHN0YXRlO1xufVxuLyoqXG4gKiBQb3B1bGF0ZXMgc2VsZWN0b3JzIHRoYXQgdGFyZ2V0IGFsbCB0ZXh0IGlucHV0cy4gWW91IGNhbiBwYXNzIG9wdGlvbmFsIHN0YXRlcyB0byBhcHBlbmQgdG8gdGhlIHNlbGVjdG9ycy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIFt0ZXh0SW5wdXRzKCdhY3RpdmUnKV06IHtcbiAqICAgICAnYm9yZGVyJzogJ25vbmUnXG4gKiAgIH1cbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgPiAke3RleHRJbnB1dHMoJ2FjdGl2ZScpfSB7XG4gKiAgICAgYm9yZGVyOiBub25lO1xuICogICB9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqICAnaW5wdXRbdHlwZT1cImNvbG9yXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwiZGF0ZVwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJlbWFpbFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cIm1vbnRoXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJ0ZWxcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJ0ZXh0XCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwidGltZVwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInVybFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cIndlZWtcIl06YWN0aXZlLFxuICogIGlucHV0Om5vdChbdHlwZV0pOmFjdGl2ZSxcbiAqICB0ZXh0YXJlYTphY3RpdmUnOiB7XG4gKiAgICdib3JkZXInOiAnbm9uZSdcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRleHRJbnB1dHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdGF0ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc3RhdGVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlZnVsU2VsZWN0b3JzKHN0YXRlcywgdGVtcGxhdGUsIHN0YXRlTWFwKTtcbn1cblxuLyoqXG4gKiBBY2NlcHRzIGFueSBudW1iZXIgb2YgdHJhbnNpdGlvbiB2YWx1ZXMgYXMgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgYSBzaW5nbGUgdHJhbnNpdGlvbiBzdGF0ZW1lbnQuIFlvdSBtYXkgYWxzbyBwYXNzIGFuIGFycmF5IG9mIHByb3BlcnRpZXMgYXMgdGhlIGZpcnN0IHBhcmFtZXRlciB0aGF0IHlvdSB3b3VsZCBsaWtlIHRvIGFwcGx5IHRoZSBzYW1lIHRyYW5zaXRpb24gdmFsdWVzIHRvIChzZWNvbmQgcGFyYW1ldGVyKS5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnRyYW5zaXRpb25zKCdvcGFjaXR5IDEuMHMgZWFzZS1pbiAwcycsICd3aWR0aCAyLjBzIGVhc2UtaW4gMnMnKSxcbiAqICAgLi4udHJhbnNpdGlvbnMoWydjb2xvcicsICdiYWNrZ3JvdW5kLWNvbG9yJ10sICcyLjBzIGVhc2UtaW4gMnMnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3RyYW5zaXRpb25zKCdvcGFjaXR5IDEuMHMgZWFzZS1pbiAwcycsICd3aWR0aCAyLjBzIGVhc2UtaW4gMnMnKX07XG4gKiAgICR7dHJhbnNpdGlvbnMoWydjb2xvcicsICdiYWNrZ3JvdW5kLWNvbG9yJ10sICcyLjBzIGVhc2UtaW4gMnMnKSx9O1xuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAndHJhbnNpdGlvbic6ICdvcGFjaXR5IDEuMHMgZWFzZS1pbiAwcywgd2lkdGggMi4wcyBlYXNlLWluIDJzJ1xuICogICAndHJhbnNpdGlvbic6ICdjb2xvciAyLjBzIGVhc2UtaW4gMnMsIGJhY2tncm91bmQtY29sb3IgMi4wcyBlYXNlLWluIDJzJyxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc2l0aW9ucygpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHByb3BlcnRpZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcHJvcGVydGllc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHByb3BlcnRpZXNbMF0pICYmIHByb3BlcnRpZXMubGVuZ3RoID09PSAyKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvcGVydGllc1sxXTtcblxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2MSk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zaXRpb25zU3RyaW5nID0gcHJvcGVydGllc1swXS5tYXAoZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICByZXR1cm4gcHJvcGVydHkgKyBcIiBcIiArIHZhbHVlO1xuICAgIH0pLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zaXRpb25zU3RyaW5nXG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogcHJvcGVydGllcy5qb2luKCcsICcpXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBjdXJyaWVkQWRqdXN0SHVlJDEgYXMgYWRqdXN0SHVlLCBhbmltYXRpb24sIGJhY2tncm91bmRJbWFnZXMsIGJhY2tncm91bmRzLCBiZXR3ZWVuLCBib3JkZXIsIGJvcmRlckNvbG9yLCBib3JkZXJSYWRpdXMsIGJvcmRlclN0eWxlLCBib3JkZXJXaWR0aCwgYnV0dG9ucywgY2xlYXJGaXgsIGNvbXBsZW1lbnQsIGNvdmVyLCBjc3NWYXIsIGN1cnJpZWREYXJrZW4kMSBhcyBkYXJrZW4sIGN1cnJpZWREZXNhdHVyYXRlJDEgYXMgZGVzYXR1cmF0ZSwgZGlyZWN0aW9uYWxQcm9wZXJ0eSwgZWFzZUluLCBlYXNlSW5PdXQsIGVhc2VPdXQsIGVsbGlwc2lzLCBlbSQxIGFzIGVtLCBmbHVpZFJhbmdlLCBmb250RmFjZSwgZ2V0Q29udHJhc3QsIGdldEx1bWluYW5jZSwgZ2V0VmFsdWVBbmRVbml0LCBncmF5c2NhbGUsIGhpRFBJLCBoaWRlVGV4dCwgaGlkZVZpc3VhbGx5LCBoc2wsIGhzbFRvQ29sb3JTdHJpbmcsIGhzbGEsIGltcG9ydGFudCwgaW52ZXJ0LCBjdXJyaWVkTGlnaHRlbiQxIGFzIGxpZ2h0ZW4sIGxpbmVhckdyYWRpZW50LCBtYXJnaW4sIG1hdGgsIG1lZXRzQ29udHJhc3RHdWlkZWxpbmVzLCBtaXgkMSBhcyBtaXgsIG1vZHVsYXJTY2FsZSwgbm9ybWFsaXplLCBjdXJyaWVkT3BhY2lmeSQxIGFzIG9wYWNpZnksIHBhZGRpbmcsIHBhcnNlVG9Ic2wsIHBhcnNlVG9SZ2IsIHBvc2l0aW9uLCByYWRpYWxHcmFkaWVudCwgcmVhZGFibGVDb2xvciwgcmVtJDEgYXMgcmVtLCByZW1Ub1B4LCByZXRpbmFJbWFnZSwgcmdiLCByZ2JUb0NvbG9yU3RyaW5nLCByZ2JhLCBjdXJyaWVkU2F0dXJhdGUkMSBhcyBzYXR1cmF0ZSwgY3VycmllZFNldEh1ZSQxIGFzIHNldEh1ZSwgY3VycmllZFNldExpZ2h0bmVzcyQxIGFzIHNldExpZ2h0bmVzcywgY3VycmllZFNldFNhdHVyYXRpb24kMSBhcyBzZXRTYXR1cmF0aW9uLCBjdXJyaWVkU2hhZGUkMSBhcyBzaGFkZSwgc2l6ZSwgc3RyaXBVbml0LCB0ZXh0SW5wdXRzLCB0aW1pbmdGdW5jdGlvbnMsIGN1cnJpZWRUaW50JDEgYXMgdGludCwgdG9Db2xvclN0cmluZywgdHJhbnNpdGlvbnMsIGN1cnJpZWRUcmFuc3BhcmVudGl6ZSQxIGFzIHRyYW5zcGFyZW50aXplLCB0cmlhbmdsZSwgd29yZFdyYXAgfTtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xuaW1wb3J0IHsgcmdiLCByZWFkYWJsZUNvbG9yIH0gZnJvbSAncG9saXNoZWQnO1xuLy8gVGhpcyBwbHVnaW4gd2lsbCBvcGVuIGEgd2luZG93IHRvIHByb21wdCB0aGUgdXNlciB0byBlbnRlciBwcm9qZWN0IGRldGFpbHMsIGFuZFxuLy8gaXQgd2lsbCB0aGVuIGNyZWF0ZSBhIGRvY3VtZW50IHN0cnVjdHVyZSBhbmQgdGh1bWJuYWlsLlxuLy8gVGhpcyBmaWxlIGhvbGRzIHRoZSBtYWluIGNvZGUgZm9yIHRoZSBwbHVnaW5zLiBJdCBoYXMgYWNjZXNzIHRvIHRoZSAqZG9jdW1lbnQqLlxuLy8gWW91IGNhbiBhY2Nlc3MgYnJvd3NlciBBUElzIGluIHRoZSA8c2NyaXB0PiB0YWcgaW5zaWRlIFwidWkuaHRtbFwiIHdoaWNoIGhhcyBhXG4vLyBmdWxsIGJyb3dzZXIgZW52aXJvbm1lbnQgKHNlZSBkb2N1bWVudGF0aW9uKS5cbmNvbnN0IFRFTVBMQVRFX0NPTlRFTlRTID0gXCJjNzY5YTYyNjU1NTZjMDkxY2MxZDhjMDU3NjJjNzFlY2JmOTczMTRiXCI7XG5jb25zdCBURU1QTEFURV9CTE9DS1MgPSBcIjUyMDU4ZTQ0NTRkODI5ODcyNDgyYjg1NTFmNDkxOGNiODI4ODgwZDZcIjtcbmNvbnN0IFRFTVBMQVRFX0lORk8gPSBcImQ0NWIzMDA1NTE2Zjg4NzcyNDk0MGE1YTEwNjYzYWRjZmY5ZGM0YjRcIjtcbi8vRm9udCBzdHlsZXNcbmNvbnN0IFdFQl9YWFhMQVJHRSA9IFwiOTVlOTRhYzQxYThjYzc5ZDA5NzExMWE4Nzg1ZDNiNTk3NmM3MGY5OVwiO1xuY29uc3QgUEFERElOR19IID0gNDA7XG5jb25zdCBQQURESU5HX1YgPSA0MDtcbmNvbnN0IFNQQUNJTkcgPSAyNDtcbmNvbnN0IEZPTlRfVElUTEVTID0geyBmYW1pbHk6IFwiTWVubG9cIiwgc3R5bGU6IFwiUmVndWxhclwiIH07XG5jb25zdCBGT05UX0JPRElFUyA9IHsgZmFtaWx5OiBcIlNGIFBybyBUZXh0XCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuY29uc3QgQ09NUE9ORU5UX1RJVExFID0gXCJkY2M4NTE0NDczN2NjODczNmE3ODBiNmU0MjhhMTQ2YWU0NTYwNjA2XCI7XG5jb25zdCBDT01QT05FTlRfQkxPQ0sgPSBcIjU5YTE3YzMwMGQ0MGQ5NTJlNDAyNWQ1NTFlZjI1ZjkwNmQ5MmY0MzdcIjtcbmNvbnN0IFNPTElEID0gJ1NPTElEJztcbmNvbnN0IE5PUk1BTCA9ICdOT1JNQUwnO1xuY29uc3QgQkxBQ0sgPSB7XG4gICAgXCJ0eXBlXCI6IFNPTElELFxuICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgIFwib3BhY2l0eVwiOiAxLFxuICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgXCJyXCI6IDAsXG4gICAgICAgIFwiZ1wiOiAwLFxuICAgICAgICBcImJcIjogMFxuICAgIH1cbn07XG5jb25zdCBXSElURSA9IHtcbiAgICBcInR5cGVcIjogU09MSUQsXG4gICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgIFwiY29sb3JcIjoge1xuICAgICAgICBcInJcIjogMSxcbiAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgIFwiYlwiOiAxXG4gICAgfVxufTtcbnZhciBMSUdIVF9URVhUX0NPTE9SX1NUWUxFO1xudmFyIERBUktfVEVYVF9DT0xPUl9TVFlMRTtcbmxldCBMSUdIVF9DT0xPUlNfQ1VTVE9NID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJwcmltYXJ5XCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImFjdGlvblwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbl07XG5sZXQgREFSS19DT0xPUlNfQ1VTVE9NID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJwcmltYXJ5XCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImFjdGlvblwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbl07XG5sZXQgTElHSFRfQ09MT1JTX0dFTkVSQVRFRCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25QcmltYXJ5XCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25NZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25BY3Rpb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJhY3Rpb25Gb3JlZ3JvdW5kXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYWN0aW9uQmFja2dyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5dO1xubGV0IERBUktfQ09MT1JTX0dFTkVSQVRFRCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25QcmltYXJ5XCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25NZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25BY3Rpb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJhY3Rpb25Gb3JlZ3JvdW5kXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYWN0aW9uQmFja2dyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5dO1xubGV0IExJR0hUX0NPTE9SU19GSVhFRCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibm90ZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuOTQxMTc2NDc0MDk0MzkwOSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC44NTg4MjM1Mzc4MjY1MzgxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJvbk5vdGVcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCB7XG4gICAgICAgIG5hbWU6IFwiaW5ib3VuZE1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjk1Njg2Mjc0NzY2OTIyLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjk2NDcwNTg4NDQ1NjYzNDUsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuOTcyNTQ5MDIxMjQ0MDQ5MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwic3lzdGVtTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImJvcmRlclN5c3RlbU1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMC4xMTk5OTk5OTczMTc3OTA5OSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJiYWNrZ3JvdW5kXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25CYWNrZ3JvdW5kXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMCxcbiAgICAgICAgICAgICAgICBcImdcIjogMCxcbiAgICAgICAgICAgICAgICBcImJcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZWxldmF0ZWRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJkYW5nZXJcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjk0MTE3NjQ3NDA5NDM5MDksXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuOTQ1MDk4MDQyNDg4MDk4MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25EYW5nZXJcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjU0OTAxOTYzNDcyMzY2MzMsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuMTM3MjU0OTA4NjgwOTE1ODMsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMTcyNTQ5MDI0MjI0MjgxM1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwic3VjY2Vzc1wiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuMDExNzY0NzA2MTEyNDQ0NCxcbiAgICAgICAgICAgICAgICBcImdcIjogMC41MDU4ODIzODIzOTI4ODMzLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjMyNTQ5MDIwNjQ4MDAyNjI1XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJub3RpZnlcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjgwMDAwMDAxMTkyMDkyOSxcbiAgICAgICAgICAgICAgICBcImdcIjogMC4yMDAwMDAwMDI5ODAyMzIyNCxcbiAgICAgICAgICAgICAgICBcImJcIjogMC4yNTA5ODA0MDY5OTk1ODhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImRpc2FibGVkXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC44MDAwMDAwMTE5MjA5MjksXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuODAwMDAwMDExOTIwOTI5LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjgwMDAwMDAxMTkyMDkyOVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiaWNvblwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuMTg0MzEzNzI5NDA1NDAzMTQsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuMjIzNTI5NDEzMzQyNDc1OSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC4yNTQ5MDE5NzUzOTMyOTUzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dO1xubGV0IERBUktfQ09MT1JTX0ZJWEVEID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJub3RlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC45OTYwNzg0MzE2MDYyOTI3LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjgzOTIxNTY5NTg1ODAwMTcsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuNjU4ODIzNTQ5NzQ3NDY3XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJvbk5vdGVcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJpbmJvdW5kTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuMTg0MzEzNzI5NDA1NDAzMTQsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuMjIzNTI5NDEzMzQyNDc1OSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC4yNTQ5MDE5NzUzOTMyOTUzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJzeXN0ZW1NZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMCxcbiAgICAgICAgICAgICAgICBcImdcIjogMCxcbiAgICAgICAgICAgICAgICBcImJcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYm9yZGVyU3lzdGVtTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAwLjM0OTk5OTk5NDAzOTUzNTUsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uQmFja2dyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImVsZXZhdGVkXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC4xMDAwMDAwMDE0OTAxMTYxMixcbiAgICAgICAgICAgICAgICBcImdcIjogMC4xMDAwMDAwMDE0OTAxMTYxMixcbiAgICAgICAgICAgICAgICBcImJcIjogMC4xMDAwMDAwMDE0OTAxMTYxMlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZGFuZ2VyXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC40MDc4NDMxNDI3NDc4NzkwMyxcbiAgICAgICAgICAgICAgICBcImdcIjogMC4wNzA1ODgyMzg1MzczMTE1NSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC4wOTgwMzkyMTcyOTMyNjI0OFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25EYW5nZXJcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjk2MDc4NDMxNjA2MjkyNzIsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuODM1Mjk0MTI3NDY0Mjk0NCxcbiAgICAgICAgICAgICAgICBcImJcIjogMC44NDcwNTg4MzI2NDU0MTYzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJzdWNjZXNzXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC4xNjA3ODQzMTkwNDMxNTk0OCxcbiAgICAgICAgICAgICAgICBcImdcIjogMC42MTE3NjQ3MjkwMjI5Nzk3LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjQwMDAwMDAwNTk2MDQ2NDVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm5vdGlmeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuMTg0MzEzNzI5NDA1NDAzMTQsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuMjIzNTI5NDEzMzQyNDc1OSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC4yNTQ5MDE5NzUzOTMyOTUzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJkaXNhYmxlZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuMTg0MzEzNzI5NDA1NDAzMTQsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuMjIzNTI5NDEzMzQyNDc1OSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC4yNTQ5MDE5NzUzOTMyOTUzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJpY29uXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC41Mjk0MTE3OTI3NTUxMjcsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuNTcyNTQ5MDQ1MDg1OTA3LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjYxNTY4NjI5NzQxNjY4N1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXTtcbi8vIFRoaXMgc2hvd3MgdGhlIEhUTUwgcGFnZSBpbiBcInVpLmh0bWxcIi5cbmZpZ21hLnNob3dVSShfX2h0bWxfXyk7XG5maWdtYS51aS5yZXNpemUoNDAwLCAzMzApO1xuaWYgKGZpZ21hLnJvb3QuZ2V0UGx1Z2luRGF0YShcInN0YXR1c1wiKSA9PSBcInJ1blwiKSB7XG4gICAgLy9UT0RPIGV2YWx1YXRlIGlmIHRoZXJlIGlzIHNvbWUgd2F5IHRvIHJlY29uZmlndXJlIHRoZSBwYWdlcyBhZnRlciBpbml0aWFsIHNldHVwLlxuICAgIGZpZ21hLnVpLnJlc2l6ZSg0MDAsIDEzNik7XG4gICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJhYm91dFwiKTtcbn1cbi8vIENhbGxzIHRvIFwicGFyZW50LnBvc3RNZXNzYWdlXCIgZnJvbSB3aXRoaW4gdGhlIEhUTUwgcGFnZSB3aWxsIHRyaWdnZXIgdGhpc1xuLy8gY2FsbGJhY2suIFRoZSBjYWxsYmFjayB3aWxsIGJlIHBhc3NlZCB0aGUgXCJwbHVnaW5NZXNzYWdlXCIgcHJvcGVydHkgb2YgdGhlXG4vLyBwb3N0ZWQgbWVzc2FnZS5cbmZpZ21hLnVpLm9ubWVzc2FnZSA9IChtc2cpID0+IF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgIHlpZWxkIGxvYWRSZXNvdXJjZXMoKTtcbiAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJyZXNpemVcIjpcbiAgICAgICAgICAgIGZpZ21hLnVpLnJlc2l6ZSg0MDAsIG1zZy5oZWlnaHQpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjcmVhdGUtcHJvamVjdFwiOlxuICAgICAgICAgICAgZmlnbWEudWkuaGlkZSgpO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlUHJvamVjdChtc2cucHJvamVjdFRpdGxlLCBtc2cucHJvamVjdFR5cGUsIG1zZy5wcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRSZWxhdW5jaERhdGEoeyBhYm91dDogXCJUaGlzIGRvY3VtZW50IHdhcyBmb3JtYXRlZCB3aXRoIFp0YXJ0XCIgfSk7XG4gICAgICAgICAgICBmaWdtYS5yb290LnNldFBsdWdpbkRhdGEoXCJzdGF0dXNcIiwgXCJydW5cIik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImNyZWF0ZS10aGVtZVwiOlxuICAgICAgICAgICAgZmlnbWEudWkuaGlkZSgpO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlVGhlbWUobXNnLnRoZW1lTmFtZSwgbXNnLnByaW1hcnlDb2xvciwgbXNnLm1lc3NhZ2VDb2xvciwgbXNnLmFjdGlvbkNvbG9yKTtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UmVsYXVuY2hEYXRhKHsgdXBkYXRlOiBcIlVwZGF0ZSB0aGVtZSBjb2xvcnNcIiB9KTtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcInN0YXR1c1wiLCBcInJ1blwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSwgdHlwZSwgZGVzY3JpcHRpb24pIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBTZXQgcGFnZSBuYW1lcyBhbmQgcmVuYW1lcyB0aGUgZGVmYXVsdCBcIlBhZ2UgMVwiXG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLm5hbWUgPSBcIvCfk5YgQWJvdXRcIjtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiRXhwbG9yYXRpb25cIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+klCBQcm9ibGVtIGRlZmluaXRpb25cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCflKwgUmVzZWFyY2hcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfj50gRXhwbG9yYXRpb25zXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogU29sdXRpb24gQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFNvbHV0aW9uIEJcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiUHJvZHVjdFwiOlxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfk5AgRGVzaWduIFNwZWNzXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogUmVhZHkgZm9yIGRldlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFNoaXBwZWRcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+VuSBQcm90b3R5cGVzXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogUHJvdG90eXBlIEFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+PnSBFeHBsb3JhdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBFeHBsb3JhdGlvbiBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfk6YgQXJjaGl2ZXNcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBBcmNoaXZlIEFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiTGlicmFyeVwiOlxuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLinZMgSG93IHRvLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogVXNlIHRoaXMgbGlicmFyeVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIENvbnRyaWJ1dGVcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiQ29tcG9uZW50IEFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIkNvbXBvbmVudCBCXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCJDb21wb25lbnQgQ1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5qnIENvbXBvbmVudCB0ZW1wbGF0ZVwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvL0FkZCBhIHRodW1uYWlsIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgICAgICB5aWVsZCBjcmVhdGVUaHVtYm5haWwodGl0bGUsIHR5cGUpLnRoZW4oKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdERldGFpbHMoZGVzY3JpcHRpb24sIHR5cGUpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmICh0eXBlID09IFwiTGlicmFyeVwiKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0cyA9IFt5aWVsZCBjcmVhdGVVc2UoKSwgeWllbGQgY3JlYXRlQ29udHJpYnV0ZSgpXTtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZUhvd1RvKHRhcmdldHMpO1xuICAgICAgICAgICAgLy9HbyB0byB0aGUgY29tcG9uZW50IHRlbXBsYXRlIHBhZ2VcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbltmaWdtYS5yb290LmNoaWxkcmVuLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgLy8gUHJlcGFyZSBhIGNvbXBvbmVudCB0ZW1wbGF0ZVxuICAgICAgICAgICAgLy9DcmVhdGUgdGl0bGVcbiAgICAgICAgICAgIGxldCB0aXRsZSA9ICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKENPTVBPTkVOVF9USVRMRSkpLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICB0aXRsZS5uYW1lID0gXCJDb21wb25lbnQgdGl0bGVcIjtcbiAgICAgICAgICAgIHNldFRleHQodGl0bGUuZmluZENoaWxkKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiKSwgXCJDb21wb25lbnQgbmFtZVwiKTtcbiAgICAgICAgICAgIHRpdGxlLnJlc2l6ZSgxMjgwLCB0aXRsZS5oZWlnaHQpO1xuICAgICAgICAgICAgdGl0bGUueCA9IDgwO1xuICAgICAgICAgICAgdGl0bGUueSA9IDgwO1xuICAgICAgICAgICAgLy9DcmVhdGUgYnVpbGRpbmcgYmxvY2tzIGFyZWFcbiAgICAgICAgICAgIGxldCBidWlsZGluZ19ibG9ja3MgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLm5hbWUgPSBcIkJ1aWxkaW5nIGJsb2Nrc1wiO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLnJlc2l6ZSgxNDQwLCBidWlsZGluZ19ibG9ja3MuaGVpZ2h0KTtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy54ID0gMDtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy55ID0gMTUyMDtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICAgICAgbGV0IGJsb2NrID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoQ09NUE9ORU5UX0JMT0NLKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIGxldCBibG9ja1RpdGxlVGV4dCA9IGJsb2NrLmZpbmRDaGlsZChub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIik7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGJsb2NrVGl0bGVUZXh0LmZvbnROYW1lKTtcbiAgICAgICAgICAgIGJsb2NrVGl0bGVUZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgIGJsb2NrVGl0bGVUZXh0LmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICBibG9ja1RpdGxlVGV4dC5jaGFyYWN0ZXJzID0gXCJCdWlsZGluZyBibG9ja3NcIjtcbiAgICAgICAgICAgIGJsb2NrLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MuYXBwZW5kQ2hpbGQoYmxvY2spO1xuICAgICAgICAgICAgbGV0IGJ1aWxkaW5nX2Jsb2NrX2FyZWEgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5uYW1lID0gXCJQbGFjZSBjb21wb25uZW50cyBoZXJlLi4uXCI7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy5hcHBlbmRDaGlsZChidWlsZGluZ19ibG9ja19hcmVhKTtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEucmVzaXplKDE0NDAsIDQ4MCk7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLmxheW91dEdyb3cgPSAwO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLnZlcnRpY2FsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5ob3Jpem9udGFsUGFkZGluZyA9IDQwO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5pdGVtU3BhY2luZyA9IDQwO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5maWxscyA9IFtdO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgLy9DcmVhdGUgYmFja2dyb3VuZFxuICAgICAgICAgICAgdmFyIGJhY2tncm91bmQgPSBmaWdtYS5jcmVhdGVSZWN0YW5nbGUoKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQucmVzaXplKDE0NDAsIDE0NDApO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5uYW1lID0gXCJCYWNrZ3JvdW5kXCI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLmZpbGxzID0gW3sgXCJ0eXBlXCI6IFNPTElELCBcInZpc2libGVcIjogdHJ1ZSwgXCJvcGFjaXR5XCI6IDEsIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCwgXCJjb2xvclwiOiB7IFwiclwiOiAxLCBcImdcIjogMSwgXCJiXCI6IDEgfSB9XTtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBkZXNjcmlwdGlvblxuICAgICAgICAgICAgdmFyIGRlc2NyaXB0aW9uVGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFdFQl9YWFhMQVJHRSkudGhlbihiYXNlU3R5bGUgPT4geyBkZXNjcmlwdGlvblRleHQudGV4dFN0eWxlSWQgPSBiYXNlU3R5bGUuaWQ7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiRm9udCBzdHlsZXMgYXJlIG1pc3NpbmchXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnJlc2l6ZSgxMjgwLCA4OCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQubmFtZSA9IFwiRGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC54ID0gODA7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQueSA9IDM1MjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5hdXRvUmVuYW1lID0gZmFsc2U7XG4gICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGRlc2NyaXB0aW9uVGV4dC5mb250TmFtZSk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQudGV4dEF1dG9SZXNpemUgPSBcIkhFSUdIVFwiO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LmNoYXJhY3RlcnMgPSBcIlR5cGUgYSBkZXNjcmlwdGlvbiBvZiB0aGUgY29tcG9uZW50IGhlcmUsIGFuZCBwbGFjZSBhbnkgY29tcG9uZW50cy92YXJpYW50cyBpbiB0aGUgc3BhY2UgYmVsb3cg4oaY77iPXCI7XG4gICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICAgICAgLy8gVGhlbiBhZGQgdGhlIHRlbXBsYXRlIHRvIGFueSBwYWdlcyB3aXRoICdDb21wb25lbnQnIGluIHRoZSB0aXRsZVxuICAgICAgICAgICAgZmlnbWEucm9vdC5maW5kQ2hpbGRyZW4ocGFnZU5vZGUgPT4gcGFnZU5vZGUubmFtZS5pbmNsdWRlcyhcIkNvbXBvbmVudFwiKSkuZm9yRWFjaChwYWdlTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgcGFnZU5vZGUuYXBwZW5kQ2hpbGQoYnVpbGRpbmdfYmxvY2tzLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIHBhZ2VOb2RlLmFwcGVuZENoaWxkKGJhY2tncm91bmQuY2xvbmUoKSk7XG4gICAgICAgICAgICAgICAgcGFnZU5vZGUuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25UZXh0LmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIHBhZ2VOb2RlLmFwcGVuZENoaWxkKHRpdGxlLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vQ2xlYXIgdXAgdGhlIFwiZXh0cmFcIiB0ZW1wbGF0ZVxuICAgICAgICAgICAgdGl0bGUucmVtb3ZlKCk7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MucmVtb3ZlKCk7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQucmVtb3ZlKCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlblswXTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3REZXRhaWxzKGRlc2NyaXB0aW9uLCB0eXBlKSB7XG4gICAgbGV0IGRldGFpbHNGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgZGV0YWlsc0ZyYW1lLm5hbWUgPSBcIlByb2plY3QgZGV0YWlsc1wiO1xuICAgIGRldGFpbHNGcmFtZS55ID0gMzQwO1xuICAgIGRldGFpbHNGcmFtZS5yZXNpemVXaXRob3V0Q29uc3RyYWludHMoNjQwLCAxKTtcbiAgICBkZXRhaWxzRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBkZXRhaWxzRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgIGRldGFpbHNGcmFtZS52ZXJ0aWNhbFBhZGRpbmcgPSBQQURESU5HX1Y7XG4gICAgZGV0YWlsc0ZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gUEFERElOR19IO1xuICAgIGRldGFpbHNGcmFtZS5pdGVtU3BhY2luZyA9IFNQQUNJTkc7XG4gICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQoZGV0YWlsc0ZyYW1lKTtcbiAgICBkZXRhaWxzRnJhbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlsKFwiRGVzY3JpcHRpb25cIiwgZGVzY3JpcHRpb24gIT09IFwiXCIgPyBkZXNjcmlwdGlvbiA6IFwiPEVudGVyIGEgZGVzY3JpcHRpb24gaGVyZT5cIikpO1xuICAgIGRldGFpbHNGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVEZXRhaWwoXCJFeHRlcm5hbCBMaW5rc1wiLCBcIjxBZGQgbGlua3MgaGVyZT4g4oaSXFxuPEUuZy4gQ29uZmx1ZW5jZT4g4oaSXFxuPEUuZy4gR29vZ2xlIERvYz4g4oaSXCIpKTtcbiAgICBkZXRhaWxzRnJhbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlsKFwiU2xhY2sgQ2hhbm5lbHNcIiwgXCIjPGNoYW5uZWwgbmFtZSBoZXJlPlxcbiM8Y2hhbm5lbCBuYW1lIGhlcmU+XCIpKTtcbiAgICBkZXRhaWxzRnJhbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlsKFwiUG9pbnRzIG9mIENvbnRhY3RcIiwgXCJEZXNpZ24gLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XFxuUHJvZHVjdCAtIDxsaW5rIFNsYWNrIHByb2ZpbGUgaGVyZT5cXG5FbmdpbmVlcmluZyAtIDxsaW5rIFNsYWNrIHByb2ZpbGUgaGVyZT5cIikpO1xuICAgIC8vIEZyYW1lIGZvciB3cmFwcGluZyB0aGUgbGlzdCBvZiBwYWdlIGV4YW1wbGVzLlxuICAgIGxldCBsaXN0RnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGxpc3RGcmFtZS5uYW1lID0gXCJBZGQgb3RoZXIgcGFnZXMsIGFzIG5lZWRlZC4uLlwiO1xuICAgIGxpc3RGcmFtZS55ID0gZGV0YWlsc0ZyYW1lLnkgKyBkZXRhaWxzRnJhbWUuaGVpZ2h0ICsgU1BBQ0lORztcbiAgICBsaXN0RnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMSk7XG4gICAgbGlzdEZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgbGlzdEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICBsaXN0RnJhbWUudmVydGljYWxQYWRkaW5nID0gUEFERElOR19WO1xuICAgIGxpc3RGcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IFBBRERJTkdfSDtcbiAgICBsaXN0RnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGxpc3RGcmFtZSk7XG4gICAgLy8gTm90IGFsbCBwcm9qZWN0cyBuZWVkIGEgcHJvdG90eXBlLCBzaGlwcGVkIGl0L3JlbGVhc2VkLCBvciByZXNlYXJjaCBwYWdlLlxuICAgIC8vIEhvd2V2ZXIgaW4gb3JkZXIgdG8gbWFrZSBhZGRpbmcgb25lIG9mIHRoZXNlIHBhZ2VzIGVhc2lseSwgd2UgYWRkIHNvbWVcbiAgICAvLyB0ZXh0IHRvIG91ciBzY3JhdGNoIHBhZ2Ugc28gd2UgY2FuIGNvcHkvcGFzdGUgdGhlbSB3aXRoIHRoZSBwcm9wZXIgZW1vamkuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJFeHBsb3JhdGlvblwiOlxuICAgICAgICAgICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VFeGFtcGxlKFwi4o+zIEhpc3RvcnlcIikpO1xuICAgICAgICAgICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VFeGFtcGxlKFwi4pyFIE5leHQgc3RlcHNcIikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJQcm9kdWN0XCI6XG4gICAgICAgICAgICBsaXN0RnJhbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFnZUV4YW1wbGUoXCLwn5KF8J+PvSBTdHlsZXNcIikpO1xuICAgICAgICAgICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VFeGFtcGxlKFwi4pqZ77iPIENvbXBvbmVudHNcIikpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJMaWJyYXJ5XCI6XG4gICAgICAgICAgICBsaXN0RnJhbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFnZUV4YW1wbGUoXCLwn5KF8J+PvSBTdHlsZXNcIikpO1xuICAgICAgICAgICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+agCBSb2FkbWFwXCIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xufVxuLy8gVGhpcyBmdW5jdGlvbiBhZGRzIGEgdGh1bWJuYWlsIHRvIHlvdXIgZmlyc3QgcGFnZS5cbmZ1bmN0aW9uIGNyZWF0ZVRodW1ibmFpbCh0aXRsZSwgdHlwZSkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoXCJhYzBiMTU4YzM3ZGUzZmE4YmE5NGQyYjM4MDE5MTNhZWEyNjJmZmNiXCIpLmNhdGNoKHJlYXNvbiA9PiB7XG4gICAgICAgICAgICBmaWdtYS5ub3RpZnkoXCJBbm5vdGF0aW9uIEtpdCBsaWJyYXJ5IGlzIHJlcXVpcmVkIGZvciB0aHVtYm5haWxzLlwiKTtcbiAgICAgICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgICAgIH0pLnRoZW4oKGNvbXBvbmVudCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbGV0IHRodW1ibmFpbEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLm5hbWUgPSBcIlRodW1ibmFpbFwiO1xuICAgICAgICAgICAgdGh1bWJuYWlsRnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMzIwKTtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGh1bWJuYWlsID0gY29tcG9uZW50LmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsLnNjYWxlRmFjdG9yID0gMSAvIDM7XG4gICAgICAgICAgICAgICAgdGh1bWJuYWlsRnJhbWUuYXBwZW5kQ2hpbGQodGh1bWJuYWlsKTtcbiAgICAgICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZCh0aHVtYm5haWxGcmFtZSk7XG4gICAgICAgICAgICAgICAgbGV0IGxhYmVsID0gdGh1bWJuYWlsLmZpbmRPbmUobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJGaWxlIE5hbWVcIik7XG4gICAgICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhsYWJlbC5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aXRsZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2hhcmFjdGVycyA9IHRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwuY2hhcmFjdGVycyA9IFwiRW50ZXIgdGl0bGUgaGVyZVwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbGV0IGJhZGdlID0gdGh1bWJuYWlsLmZpbmRPbmUobm9kZSA9PiBub2RlLm5hbWUgPT0gXCJCYWRnZVwiICYmIG5vZGUudHlwZSA9PSBcIklOU1RBTkNFXCIpO1xuICAgICAgICAgICAgICAgIGxldCBiYWRnZVRleHQgPSBiYWRnZS5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiQmFkZ2VcIiAmJiBub2RlLnR5cGUgPT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoYmFkZ2VUZXh0LmZvbnROYW1lKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VUZXh0LmNoYXJhY3RlcnMgPSB0eXBlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlID09IFwiRXhwbG9yYXRpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBiYWRnZS5maWxsU3R5bGVJZCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCIwZWUxYzQ3OWQzZjIxZDQ3NTIyN2E0NTIwY2I0ODFiZDk4YWY1YWY1XCIpKS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PSBcIkxpYnJhcnlcIikge1xuICAgICAgICAgICAgICAgICAgICBiYWRnZS5maWxsU3R5bGVJZCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCJhM2FhOGM2NGQxMGEwYjFlZTkyYjNkYzZlNWYyNzhhYzk3OGM1NmNmXCIpKS5pZDtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VUZXh0LmZpbGxTdHlsZUlkID0gKHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcIjQ5MmM5NjQ1ZDY3ZjAyNmRkMzdjMzAxYzYxNTc3NTA0YmQ3ZDhhZDdcIikpLmlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpZ21hLnNldEZpbGVUaHVtYm5haWxOb2RlQXN5bmModGh1bWJuYWlsRnJhbWUpO1xuICAgICAgICB9KSk7XG4gICAgfSk7XG59XG4vLyBBZGRzIGEgbmV3IHBhZ2UuXG5mdW5jdGlvbiBjcmVhdGVQYWdlKHRpdGxlKSB7XG4gICAgbGV0IHBhZ2UgPSBmaWdtYS5jcmVhdGVQYWdlKCk7XG4gICAgcGFnZS5uYW1lID0gdGl0bGU7XG59XG4vLyBBZGRzIGEgc2VjdGlvbiB0byB5b3VyIGRldGFpbHMgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVEZXRhaWwodGl0bGUsIGJvZHkpIHtcbiAgICBsZXQgZGV0YWlsRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbEZyYW1lLm5hbWUgPSB0aXRsZTtcbiAgICBkZXRhaWxGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGRldGFpbEZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgIGRldGFpbEZyYW1lLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuaXRlbVNwYWNpbmcgPSA4O1xuICAgIGxldCB0aXRsZVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgdGl0bGVUZXh0LmZvbnROYW1lID0gRk9OVF9USVRMRVM7XG4gICAgdGl0bGVUZXh0LmZvbnRTaXplID0gMTc7XG4gICAgdGl0bGVUZXh0LmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICB0aXRsZVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICAgIGxldCBib2R5VGV4dCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBib2R5VGV4dC5mb250TmFtZSA9IEZPTlRfQk9ESUVTO1xuICAgIGJvZHlUZXh0LmZvbnRTaXplID0gMTQ7XG4gICAgYm9keVRleHQuY2hhcmFjdGVycyA9IGJvZHk7XG4gICAgYm9keVRleHQubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICBkZXRhaWxGcmFtZS5hcHBlbmRDaGlsZChib2R5VGV4dCk7XG4gICAgcmV0dXJuIGRldGFpbEZyYW1lO1xufVxuLy8gQWRkcyBhbiBleGFtcGxlIHRvIHlvdXIgbGlzdCBmcmFtZS5cbmZ1bmN0aW9uIGNyZWF0ZVBhZ2VFeGFtcGxlKHRleHQpIHtcbiAgICBsZXQgbGlua0xhYmVsID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIGxpbmtMYWJlbC5mb250TmFtZSA9IEZPTlRfQk9ESUVTO1xuICAgIGxpbmtMYWJlbC5mb250U2l6ZSA9IDE0O1xuICAgIGxpbmtMYWJlbC5jaGFyYWN0ZXJzID0gdGV4dDtcbiAgICByZXR1cm4gbGlua0xhYmVsO1xufVxuZnVuY3Rpb24gY3JlYXRlSG93VG8odGFyZ2V0cykge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBob3dQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09IFwi4p2TIEhvdyB0by4uLlwiKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBob3dQYWdlO1xuICAgICAgICBsZXQgZnJhbWUxID0geWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9DT05URU5UUywgXCJIb3cgdG8uLi5cIiwgXCJcIik7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIlVzZSB0aGlzIGxpYnJhcnlcIiwgdGFyZ2V0c1swXSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIkNvbnRyaWJ1dGVcIiwgdGFyZ2V0c1sxXSk7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVVc2UoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHVzZVBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCIgICAgICAgICDihqogVXNlIHRoaXMgbGlicmFyeVwiKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSB1c2VQYWdlO1xuICAgICAgICBsZXQgZnJhbWUxID0geWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9DT05URU5UUywgXCJVc2luZyB0aGlzIGxpYnJhcnlcIiwgXCJcIiwgXCIxKSBBZGQgc2VjdGlvbnMgaGVyZVxcblxcbk9wdGlvbmFsbHksIGFkZCBtb3JlIHNlY3Rpb25zIHRvIGhlbHAgZGVzY3JpYmUgdGhlIHVzYWdlIG9mIHlvdXIgbGlicmFyeS5cIik7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIlB1cnBvc2VcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9JTkZPLCBcIlVzaW5nIHRoaXMgbGlicmFyeVwiLCBcIlB1cnBvc2VcIiwgXCIyKSBEZXNjcmliZSB0aGUgcHVycG9zZVxcblxcblRoaXMgbGlicmFyeSB3YXMgY3JlYXRlZCB0byBmaWxsIGEgbmVlZC4gRGVzY3JpYmUgdGhhdCBuZWVkIGFuZCBsZXQgZGVzaWduZXJzIHdoYXQgZG9lcyAoYW5kIGRvZXNu4oCZdCkgZml0IHdpdGhpbiB0aGlzIGxpYnJhcnkuXFxuXFxuWW91IGNhbiBhbHNvIGFkZCBhbiBpbWFnZSB0byB0aGUgcmlnaHQgdGhhdCByZXByZXNlbnRzIHlvdXIgbGlicmFyeS5cIiwgXCJFLmcuIFRoZSBDb252ZXJzYXRpb24gS2l0IGlzIGEgRmlnbWEgbGlicmFyeSAtIGFuZCBzZXQgb2YgYWNjb21wYW55aW5nIHRvb2xzIC0gdGhhdCBnaXZlIGRlc2lnbmVycyBldmVyeXRoaW5nIHRoZXkgbmVlZCB0byBkZXNpZ24gYSBjb25zaXN0ZW50IGNvbnZlcnNhdGlvbmFsIGV4cGVyaWVuY2UgYWNyb3NzIGFueSBudW1iZXIgb2YgcHJvZHVjdHMgYW5kIHBsYXRmb3Jtcy5cIikpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJQcmluY2lwbGVzXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQkxPQ0tTLCBcIlVzaW5nIHRoaXMgbGlicmFyeVwiLCBcIlByaW5jaXBsZXNcIiwgXCIzKSBBZGQgeW91ciBvd24gcHJpbmNpcGxlc1xcblxcblByaW5jaXBsZXMga2VlcCBmb3VuZGF0aW9uYWwgZGVjaXNpb25zIGNvbnNpc3RlbnQsIGFuZCBzZXQgcHJlY2VkZW50IGZvciBob3cgZWFjaCBjb21wb25lbnQgaXMgdXNlZCBhbmQgYnVpbHQuXCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiSW5zdHJ1Y3Rpb25zXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJVc2luZyB0aGlzIGxpYnJhcnlcIiwgXCJJbnN0cnVjdGlvbnNcIiwgXCI0KSBBZGQgc3RlcC1ieS1zdGVwIGluc3RydWN0aW9uc1xcblxcbkluY2x1ZGUgaW5zdHJ1Y3Rpb25zIG9mIHdoZXJlIHRoZSBhc3NldHMgY2FuIGJlIGZvdW5kLCBob3cgdGhleSBhcmUgb3JnYW5pemVkLCBob3cgdmFyaWFudHMgYW5kIG92ZXJyaWRlcyB3b3JrLCBhbmQgYW55IG90aGVyIGRldGFpbHMgbmVlZGVkIHRvIHVzZSB0aGUgbGlicmFyeS5cIiwgXCIxLiBEbyB0aGlzXFxuRG8gdGhhdFxcblByb2ZpdFwiKSk7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBmcmFtZTE7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVDb250cmlidXRlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBjb250cmlidXRlUGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW4uZmluZChub2RlID0+IG5vZGUubmFtZSA9PSBcIiAgICAgICAgIOKGqiBDb250cmlidXRlXCIpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGNvbnRyaWJ1dGVQYWdlO1xuICAgICAgICBsZXQgZnJhbWUxID0geWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9DT05URU5UUywgXCJDb250cmlidXRpbmdcIiwgXCJcIiwgXCIxKSBBZGQgc2VjdGlvbnMgaGVyZVxcblxcbk9wdGlvbmFsbHksIGFkZCBtb3JlIHNlY3Rpb25zIHRvIGhlbHAgZGVzY3JpYmUgaG93IG90aGVyIGRlc2lnbmVycyBjYW4gYWRkIHRvIHRoaXMgbGlicmFyeS5cIik7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIkNvbnZlbnRpb25zXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQkxPQ0tTLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIkNvbnZlbnRpb25zXCIsIFwiMikgQWRkIHlvdXIgb3duIGNvbnZlbnRpb25zXFxuXFxuV2hhdCBjb252ZW50aW9ucyBkb2VzIGEgZGVzaWduZXIgbmVlZCB0byBiZSBhd2FyZSBvZiB0byBtYWtlIGNvbXBvbmVudHMgdGhhdCB3b3JrIGluIGEgc2ltaWxhciB3YXkgdG8gYWxsIHRoZSByZXN0P1wiKSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIkluc3RydWN0aW9uc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiQ29udHJpYnV0aW5nXCIsIFwiSW5zdHJ1Y3Rpb25zXCIsIFwiMykgQWRkIHN0ZXAtYnktc3RlcCBpbnN0cnVjdGlvbnNcXG5cXG5JbmNsdWRlIGluc3RydWN0aW9ucyBvbiBob3cgdG8gc3RhcnQgYSBicmFuY2gsIG9yZ2FuaXplIHBhZ2VzLCBhbmQgcmVxdWVzdCByZXZpZXcuXCIsIFwiMS4gQ3JlYXRlIGEgQnJhbmNoOiBQcmVzcyB0aGUgY2hldnJvbiBuZXh0IHRvIHRoZSBmaWxlIG5hbWUgaW4gdGhlIHRvb2xiYXIsIGFuZCBzZWxlY3QgQ3JlYXRlIGJyYW5jaC4uLi4gR2l2ZSBpdCBhIG5hbWUgaW4gdGhlIGZvbGxvd2luZyBmb3JtYXQg4p6VPENvbXBvbmVudCBuYW1lPi5cXG5EdXBsaWNhdGUgdGhlIOKAmPCfmqcgQ29tcG9uZW50IHRlbXBsYXRl4oCZIHBhZ2UsIGFuZCByZW5hbWUgaXQgYWNjb3JkaW5nIHRvIHRoZSBwYWdlIG5hbWluZyBjb252ZXJudGlvbnMuXFxuUGVyZm9ybSB5b3VyIGV4cGxvcmF0aW9ucy93b3JrIG9uIHRoaXMgcGFnZS5cXG5Db21wbGV0ZSB0aGUgcHJlLXB1Ymxpc2ggY2hlY2tsaXN0LlxcblJlcXVlc3QgcmV2aWV3IGJ5IHNoYXJpbmcgdGhlIGJyYW5jaCB3aXRoIDx0ZWFtIHNsYWNrIGNoYW5uZWwgb3IgcG9pbnQtb2YtY29udGFjdD5cIikpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJDaGVja2xpc3RcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9JTkZPLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIkNoZWNrbGlzdFwiLCBcIjQpIEJ1aWxkIGEgY2hlY2tsaXN0XFxuXFxuV2hhdCBjb25zaWRlcmF0aW9ucyBkbyB5b3UgZ28gdGhyb3VnaCBiZWZvcmUgZGVjaWRpbmcgaWYgYSBjb21wb25lbnQgaXMgcmVhZHkgdG8g4oCcZ28gbGl2ZeKAnT8gVGhlc2UgbWF5IHJlZmVyIGJhY2sgdG8geW91ciBjb252ZW50aW9ucy5cIiwgXCLimJHvuI8gIERpZCB5b3UgZG8gdGhpcz9cXG7imJHvuI8gIERpZCB5b3UgZG8gdGhhdD9cXG7imJHvuI8gIFdoYXQgYWJvdXQgdGhlIG90aGVyIHRoaW5nP1wiKSk7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG4gICAgICAgIHJldHVybiBmcmFtZTE7XG4gICAgfSk7XG59XG4vL1RPRE8gSW1wbGVtZW50IGFuIGludGVyZmFjZSBzbyB0aXRsZSBjYW4gYmUgb21taXRlZC5cbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlRnJhbWUoaWQsIHN1cGVydGl0bGVUZXh0LCB0aXRsZVRleHQsIGluc3RydWN0aW9uVGV4dCwgY29udGVudFRleHQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgcGFnZUNvbnRlbnRzID0gZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW47XG4gICAgICAgIGxldCBsYXN0QWRkZWQgPSBwYWdlQ29udGVudHNbcGFnZUNvbnRlbnRzLmxlbmd0aCAtIDFdO1xuICAgICAgICBsZXQgZnJhbWUxID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgZnJhbWUxLm5hbWUgPSB0aXRsZVRleHQgPyBzdXBlcnRpdGxlVGV4dC5jb25jYXQoXCIvXCIsIHRpdGxlVGV4dCkgOiBzdXBlcnRpdGxlVGV4dDtcbiAgICAgICAgZnJhbWUxLnJlc2l6ZSgxOTIwLCAxMDgwKTtcbiAgICAgICAgZnJhbWUxLnkgPSBsYXN0QWRkZWQgPyBsYXN0QWRkZWQueSArIDExODAgOiAwO1xuICAgICAgICBsZXQgZm9ybWF0ID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoaWQpKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICBmcmFtZTEuaW5zZXJ0Q2hpbGQoMCwgZm9ybWF0KTtcbiAgICAgICAgbGV0IHN1cGVydGl0bGU7XG4gICAgICAgIGxldCB0aXRsZTtcbiAgICAgICAgbGV0IGNvbnRlbnQ7XG4gICAgICAgIHN3aXRjaCAoaWQpIHtcbiAgICAgICAgICAgIGNhc2UgVEVNUExBVEVfQ09OVEVOVFM6XG4gICAgICAgICAgICAgICAgc3VwZXJ0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUubmFtZSA9PSBcIlRhYmxlIG9mIGNvbnRlbnRzXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzdXBlcnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNldFRleHQoc3VwZXJ0aXRsZSwgc3VwZXJ0aXRsZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgc2VjdGlvbnMgPSBmb3JtYXQuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiU2VjdGlvbnNcIik7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnMuY2hpbGRyZW4uZm9yRWFjaChub2RlID0+IG5vZGUudmlzaWJsZSA9IGZhbHNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgVEVNUExBVEVfQkxPQ0tTOlxuICAgICAgICAgICAgICAgIHN1cGVydGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUgPT0gXCJTdXBlcnRpdGxlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzdXBlcnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNldFRleHQoc3VwZXJ0aXRsZSwgc3VwZXJ0aXRsZVRleHQudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5jaGFyYWN0ZXJzID09IFwiV2hhdCBlbHNlIGRvZXMgaXQgc29sdmU/XCIpO1xuICAgICAgICAgICAgICAgIGlmICh0aXRsZSAmJiB0aXRsZVRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgeWllbGQgc2V0VGV4dCh0aXRsZSwgdGl0bGVUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRFTVBMQVRFX0lORk86XG4gICAgICAgICAgICAgICAgc3VwZXJ0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUubmFtZSA9PSBcIkhlYWRpbmdcIiAmJiBub2RlLmNoYXJhY3RlcnMgPT0gXCJTVVBFUlRJVExFXCIpO1xuICAgICAgICAgICAgICAgIGlmIChzdXBlcnRpdGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNldFRleHQoc3VwZXJ0aXRsZSwgc3VwZXJ0aXRsZVRleHQudG9VcHBlckNhc2UoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5jaGFyYWN0ZXJzID09IFwiSGVhZGluZ1wiKTtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUgJiYgdGl0bGVUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNldFRleHQodGl0bGUsIHRpdGxlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUgPT0gXCJDb250ZW50XCIpO1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50ICYmIGNvbnRlbnRUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNldFRleHQoY29udGVudCwgY29udGVudFRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5pbnNlcnRDaGlsZChmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbi5sZW5ndGgsIGZyYW1lMSk7XG4gICAgICAgIGlmIChpbnN0cnVjdGlvblRleHQpIHtcbiAgICAgICAgICAgIGxldCBzdGlja2llID0geWllbGQgKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoXCJkNGRmOGI4ODRkYmU3YWMxODI2MTJiNjFjYjIwOTFiOTI0NGJkZjY3XCIpKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgc3RpY2tpZS55ID0gZnJhbWUxLnk7XG4gICAgICAgICAgICBzdGlja2llLnggPSBmcmFtZTEueCAtIDQwIC0gMjcyO1xuICAgICAgICAgICAgbGV0IG5vdGUgPSBzdGlja2llLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PT0gXCJOb3RlXCIpO1xuICAgICAgICAgICAgeWllbGQgc2V0VGV4dChub3RlLCBpbnN0cnVjdGlvblRleHQpO1xuICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuaW5zZXJ0Q2hpbGQoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4ubGVuZ3RoLCBzdGlja2llKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnJhbWUxO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gYWRkQ29udGVudCh0YWJsZUZyYW1lLCB0aXRsZSwgdGFyZ2V0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHRhYmxlID0gdGFibGVGcmFtZS5jaGlsZHJlblswXTtcbiAgICAgICAgbGV0IHNlY3Rpb25zID0gdGFibGUuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiU2VjdGlvbnNcIik7XG4gICAgICAgIGxldCBzZWN0aW9uID0gc2VjdGlvbnMuY2hpbGRyZW4uZmluZChub2RlID0+IG5vZGUudmlzaWJsZSA9PSBmYWxzZSk7XG4gICAgICAgIHlpZWxkIHNldFRleHQoc2VjdGlvbiwgdGl0bGUpO1xuICAgICAgICBzZWN0aW9uLmh5cGVybGluayA9IHsgdHlwZTogXCJOT0RFXCIsIHZhbHVlOiB0YXJnZXQuaWQgfTtcbiAgICAgICAgc2VjdGlvbi52aXNpYmxlID0gdHJ1ZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldFRleHQobm9kZSwgdGV4dCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMobm9kZS5mb250TmFtZSk7XG4gICAgICAgIG5vZGUuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgICAgIC8vIENoZWNrIGlmIGl0IHNob3VsZCBiZSBhbiBvcmRlcmVkIG9yIHVub3JkZXJlZCBsaXN0LlxuICAgICAgICBpZiAodGV4dC5zdGFydHNXaXRoKFwiMS4gXCIpKSB7XG4gICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSBub2RlLmNoYXJhY3RlcnMuc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgbm9kZS5zZXRSYW5nZUxpc3RPcHRpb25zKDAsIG5vZGUuY2hhcmFjdGVycy5sZW5ndGgsIHsgdHlwZTogXCJPUkRFUkVEXCIgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGV4dC5zdGFydHNXaXRoKFwiLSBcIikpIHtcbiAgICAgICAgICAgIG5vZGUuY2hhcmFjdGVycyA9IG5vZGUuY2hhcmFjdGVycy5zdWJzdHJpbmcoMyk7XG4gICAgICAgICAgICBub2RlLnNldFJhbmdlTGlzdE9wdGlvbnMoMCwgbm9kZS5jaGFyYWN0ZXJzLmxlbmd0aCwgeyB0eXBlOiBcIlVOT1JERVJFRFwiIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVUaGVtZSh0aGVtZU5hbWUsIHByaW1hcnlDb2xvciwgbWVzc2FnZUNvbG9yLCBhY3Rpb25Db2xvcikge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlblswXTtcbiAgICAgICAgLy8gU2V0IHBhZ2UgbmFtZXMgYW5kIHJlbmFtZXMgdGhlIGRlZmF1bHQgXCJQYWdlIDFcIlxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5uYW1lID0gXCIwMCBPdmVydmlld1wiO1xuICAgICAgICBjcmVhdGVQYWdlKFwiMDEgQ29sb3JzXCIpO1xuICAgICAgICBjcmVhdGVQYWdlKFwiMDIgSWNvbnNcIik7XG4gICAgICAgIGNyZWF0ZVBhZ2UoXCIwMyBJbWFnZXNcIik7XG4gICAgICAgIC8vQWRkIGEgdGh1bW5haWwgdG8gdGhlIGZpcnN0IHBhZ2UuXG4gICAgICAgIHlpZWxkIGNyZWF0ZVRodW1ibmFpbCh0aGVtZU5hbWUsIFwiVGhlbWVcIikudGhlbigoKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvL1RPRE8gc2V0IHRodW1ibmFpbCBCRyB0byBwcmltYXJ5IGNvbG9yXG4gICAgICAgIH0pKTtcbiAgICAgICAgTElHSFRfQ09MT1JTX0NVU1RPTVswXS5maWxsLmNvbG9yID0gaGV4VG9SR0IocHJpbWFyeUNvbG9yKTtcbiAgICAgICAgTElHSFRfQ09MT1JTX0NVU1RPTVsxXS5maWxsLmNvbG9yID0gaGV4VG9SR0IobWVzc2FnZUNvbG9yKTtcbiAgICAgICAgTElHSFRfQ09MT1JTX0NVU1RPTVsyXS5maWxsLmNvbG9yID0gaGV4VG9SR0IoYWN0aW9uQ29sb3IpO1xuICAgICAgICBEQVJLX0NPTE9SU19DVVNUT01bMF0uZmlsbC5jb2xvciA9IGhleFRvUkdCKHByaW1hcnlDb2xvcik7XG4gICAgICAgIERBUktfQ09MT1JTX0NVU1RPTVsxXS5maWxsLmNvbG9yID0gaGV4VG9SR0IobWVzc2FnZUNvbG9yKTtcbiAgICAgICAgREFSS19DT0xPUlNfQ1VTVE9NWzJdLmZpbGwuY29sb3IgPSBoZXhUb1JHQihhY3Rpb25Db2xvcik7XG4gICAgICAgIHlpZWxkIGNyZWF0ZU1vZGUoXCJsaWdodFwiLCB0aGVtZU5hbWUsIHByaW1hcnlDb2xvciwgbWVzc2FnZUNvbG9yLCBhY3Rpb25Db2xvcik7XG4gICAgICAgIHlpZWxkIGNyZWF0ZU1vZGUoXCJkYXJrXCIsIHRoZW1lTmFtZSwgcHJpbWFyeUNvbG9yLCBtZXNzYWdlQ29sb3IsIGFjdGlvbkNvbG9yKTtcbiAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgZmlnbWEuY2xvc2VQbHVnaW4oKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZU1vZGUobW9kZSwgdGhlbWVOYW1lLCBwcmltYXJ5Q29sb3IsIG1lc3NhZ2VDb2xvciwgYWN0aW9uQ29sb3IpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgbW9kZUZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgbW9kZUZyYW1lLm5hbWUgPSAobW9kZSA9PSBcImxpZ2h0XCIgPyBcIuKYgO+4j1wiIDogXCLimL1cIik7XG4gICAgICAgIG1vZGVGcmFtZS5maWxscyA9IFtdO1xuICAgICAgICBtb2RlRnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIG1vZGVGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgbW9kZUZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgICAgIG1vZGVGcmFtZS5pdGVtU3BhY2luZyA9IDY0O1xuICAgICAgICBpZiAobW9kZSA9PSBcImRhcmtcIilcbiAgICAgICAgICAgIG1vZGVGcmFtZS54ID0gMjA4MDtcbiAgICAgICAgbGV0IHRpdGxlSW5zdGFuY2UgPSAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhDT01QT05FTlRfVElUTEUpKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICB5aWVsZCBzZXRUZXh0KHRpdGxlSW5zdGFuY2UuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiU2VjdGlvbiBuYW1lXCIpLCBtb2RlID09IFwibGlnaHRcIiA/IFwiTGlnaHQgbW9kZVwiIDogXCJEYXJrIG1vZGVcIik7XG4gICAgICAgIHRpdGxlSW5zdGFuY2UubGF5b3V0QWxpZ24gPSBcIlNUUkVUQ0hcIjtcbiAgICAgICAgbW9kZUZyYW1lLmFwcGVuZENoaWxkKHRpdGxlSW5zdGFuY2UpO1xuICAgICAgICBsZXQgY29sb3JzRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBjb2xvcnNGcmFtZS5uYW1lID0gXCJDb2xvcnNcIjtcbiAgICAgICAgY29sb3JzRnJhbWUuZmlsbHMgPSAobW9kZSA9PSBcImxpZ2h0XCIgPyBbV0hJVEVdIDogW0JMQUNLXSk7XG4gICAgICAgIGNvbG9yc0ZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBjb2xvcnNGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgY29sb3JzRnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICBjb2xvcnNGcmFtZS52ZXJ0aWNhbFBhZGRpbmcgPSAxMjA7XG4gICAgICAgIGNvbG9yc0ZyYW1lLmhvcml6b250YWxQYWRkaW5nID0gMTIwO1xuICAgICAgICBjb2xvcnNGcmFtZS5pdGVtU3BhY2luZyA9IDEyMDtcbiAgICAgICAgbW9kZUZyYW1lLmFwcGVuZENoaWxkKGNvbG9yc0ZyYW1lKTtcbiAgICAgICAgbGV0IGN1c3RvbWl6YWJsZUZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgY3VzdG9taXphYmxlRnJhbWUubmFtZSA9IFwiRml4ZWRcIjtcbiAgICAgICAgY3VzdG9taXphYmxlRnJhbWUuZmlsbHMgPSBbXTtcbiAgICAgICAgY3VzdG9taXphYmxlRnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGN1c3RvbWl6YWJsZUZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5pdGVtU3BhY2luZyA9IDgwO1xuICAgICAgICBsZXQgYmxvY2tJbnN0YW5jZSA9IChtb2RlID09IFwibGlnaHRcIiA/ICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKENPTVBPTkVOVF9CTE9DSykpLmNyZWF0ZUluc3RhbmNlKCkgOiAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhcIjUyYjQ3OTZhNjc5Y2IwZTYwNmJhODc4Zjk0ZDZlZjViNzI2MDMwMjhcIikpLmNyZWF0ZUluc3RhbmNlKCkpO1xuICAgICAgICB5aWVsZCBzZXRUZXh0KGJsb2NrSW5zdGFuY2UuZmluZENoaWxkKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiU2VjdGlvbiBuYW1lXCIpLCBcIkN1c3RvbWl6YWJsZVwiKTtcbiAgICAgICAgYmxvY2tJbnN0YW5jZS5sYXlvdXRHcm93ID0gMDtcbiAgICAgICAgYmxvY2tJbnN0YW5jZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgICAgIGJsb2NrSW5zdGFuY2UucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDgwMCwgYmxvY2tJbnN0YW5jZS5oZWlnaHQpO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5hcHBlbmRDaGlsZChibG9ja0luc3RhbmNlKTtcbiAgICAgICAgbGV0IGZpeGVkRnJhbWUgPSBjdXN0b21pemFibGVGcmFtZS5jbG9uZSgpO1xuICAgICAgICBjb2xvcnNGcmFtZS5hcHBlbmRDaGlsZChjdXN0b21pemFibGVGcmFtZSk7XG4gICAgICAgIGZpeGVkRnJhbWUubmFtZSA9IFwiRml4ZWRcIjtcbiAgICAgICAgZml4ZWRGcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgZml4ZWRGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgZml4ZWRGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBmaXhlZEZyYW1lLml0ZW1TcGFjaW5nID0gODA7XG4gICAgICAgIHlpZWxkIHNldFRleHQoZml4ZWRGcmFtZS5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUubmFtZSA9PSBcIlNlY3Rpb24gbmFtZVwiKSwgXCJGaXhlZFwiKTtcbiAgICAgICAgY29sb3JzRnJhbWUuYXBwZW5kQ2hpbGQoZml4ZWRGcmFtZSk7XG4gICAgICAgIGlmIChtb2RlID09IFwibGlnaHRcIikge1xuICAgICAgICAgICAgTElHSFRfQ09MT1JTX0NVU1RPTS5mb3JFYWNoKGNvbG9yID0+IGNyZWF0ZVN0eWxlKHRoZW1lTmFtZSwgXCJsaWdodFwiLCBjb2xvci5uYW1lLCBjb2xvci5maWxsLCBjdXN0b21pemFibGVGcmFtZSkpO1xuICAgICAgICAgICAgTElHSFRfQ09MT1JTX0dFTkVSQVRFRC5mb3JFYWNoKGNvbG9yID0+IGNyZWF0ZVN0eWxlKHRoZW1lTmFtZSwgXCJsaWdodFwiLCBjb2xvci5uYW1lLCBjb2xvci5maWxsLCBmaXhlZEZyYW1lKSk7XG4gICAgICAgICAgICB1cGRhdGVHZW5lcmF0ZWRDb2xvcnMoXCJsaWdodFwiKTtcbiAgICAgICAgICAgIExJR0hUX0NPTE9SU19GSVhFRC5mb3JFYWNoKGNvbG9yID0+IGNyZWF0ZVN0eWxlKHRoZW1lTmFtZSwgXCJsaWdodFwiLCBjb2xvci5uYW1lLCBjb2xvci5maWxsLCBmaXhlZEZyYW1lKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBEQVJLX0NPTE9SU19DVVNUT00uZm9yRWFjaChjb2xvciA9PiBjcmVhdGVTdHlsZSh0aGVtZU5hbWUsIFwiZGFya1wiLCBjb2xvci5uYW1lLCBjb2xvci5maWxsLCBjdXN0b21pemFibGVGcmFtZSkpO1xuICAgICAgICAgICAgREFSS19DT0xPUlNfR0VORVJBVEVELmZvckVhY2goY29sb3IgPT4gY3JlYXRlU3R5bGUodGhlbWVOYW1lLCBcImRhcmtcIiwgY29sb3IubmFtZSwgY29sb3IuZmlsbCwgZml4ZWRGcmFtZSkpO1xuICAgICAgICAgICAgdXBkYXRlR2VuZXJhdGVkQ29sb3JzKFwiZGFya1wiKTtcbiAgICAgICAgICAgIERBUktfQ09MT1JTX0ZJWEVELmZvckVhY2goY29sb3IgPT4gY3JlYXRlU3R5bGUodGhlbWVOYW1lLCBcImRhcmtcIiwgY29sb3IubmFtZSwgY29sb3IuZmlsbCwgZml4ZWRGcmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGZpZ21hLnJvb3QuY2hpbGRyZW5bMV0uYXBwZW5kQ2hpbGQobW9kZUZyYW1lKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlKHRoZW1lTmFtZSwgbW9kZSwgY29sb3JOYW1lLCBmaWxsLCBleGFtcGxlVGFyZ2V0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IG5ld1N0eWxlID0gZmlnbWEuY3JlYXRlUGFpbnRTdHlsZSgpO1xuICAgICAgICBuZXdTdHlsZS5uYW1lID0gdGhlbWVOYW1lICsgXCIoXCIgKyBtb2RlICsgXCIpL1wiICsgY29sb3JOYW1lO1xuICAgICAgICBuZXdTdHlsZS5zZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIsIGNvbG9yTmFtZSk7XG4gICAgICAgIG5ld1N0eWxlLnNldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIiwgbW9kZSk7XG4gICAgICAgIG5ld1N0eWxlLnBhaW50cyA9IFtmaWxsXTtcbiAgICAgICAgbGV0IGV4YW1wbGVGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5uYW1lID0gY29sb3JOYW1lICsgXCIgZXhhbXBsZVwiO1xuICAgICAgICBleGFtcGxlRnJhbWUuZmlsbHMgPSBbXTtcbiAgICAgICAgZXhhbXBsZUZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBleGFtcGxlRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5jb3VudGVyQXhpc0FsaWduSXRlbXMgPSBcIkNFTlRFUlwiO1xuICAgICAgICBleGFtcGxlRnJhbWUucGFkZGluZ0xlZnQgPSA0MDtcbiAgICAgICAgZXhhbXBsZUZyYW1lLml0ZW1TcGFjaW5nID0gMzI7XG4gICAgICAgIGxldCBleGFtcGxlU3dhdGNoID0gZmlnbWEuY3JlYXRlRWxsaXBzZSgpO1xuICAgICAgICBleGFtcGxlU3dhdGNoLnNldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIiwgY29sb3JOYW1lKTtcbiAgICAgICAgZXhhbXBsZVN3YXRjaC5maWxsU3R5bGVJZCA9IG5ld1N0eWxlLmlkO1xuICAgICAgICBsZXQgZXhhbXBsZVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgIGV4YW1wbGVUZXh0LmZvbnROYW1lID0gRk9OVF9USVRMRVM7XG4gICAgICAgIGV4YW1wbGVUZXh0LmZvbnRTaXplID0gNDg7XG4gICAgICAgIGV4YW1wbGVUZXh0LmNoYXJhY3RlcnMgPSBjb2xvck5hbWU7XG4gICAgICAgIGV4YW1wbGVUZXh0LmZpbGxTdHlsZUlkID0gKG1vZGUgPT0gXCJsaWdodFwiID8gTElHSFRfVEVYVF9DT0xPUl9TVFlMRS5pZCA6IERBUktfVEVYVF9DT0xPUl9TVFlMRS5pZCk7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5hcHBlbmRDaGlsZChleGFtcGxlU3dhdGNoKTtcbiAgICAgICAgZXhhbXBsZUZyYW1lLmFwcGVuZENoaWxkKGV4YW1wbGVUZXh0KTtcbiAgICAgICAgZXhhbXBsZVRhcmdldC5hcHBlbmRDaGlsZChleGFtcGxlRnJhbWUpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gdXBkYXRlR2VuZXJhdGVkQ29sb3JzKG1vZGUpIHtcbiAgICBsZXQgY3VycmVudFByaW1hcnlDb2xvciA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwicHJpbWFyeVwiKS5wYWludHNbMF0uY29sb3I7XG4gICAgbGV0IGN1cnJlbnRNZXNzYWdlQ29sb3IgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIpID09IG1vZGUgJiYgc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiKSA9PSBcIm1lc3NhZ2VcIikucGFpbnRzWzBdLmNvbG9yO1xuICAgIGxldCBjdXJyZW50QWN0aW9uQ29sb3IgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIpID09IG1vZGUgJiYgc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiKSA9PSBcImFjdGlvblwiKS5wYWludHNbMF0uY29sb3I7XG4gICAgbGV0IG9uUHJpbWFyeVN0eWxlID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLmZpbmQoc3R5bGUgPT4gc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiKSA9PSBtb2RlICYmIHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIikgPT0gXCJvblByaW1hcnlcIik7XG4gICAgbGV0IG9uUHJpbWFyeVBhaW50ID0ge1xuICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICBcImNvbG9yXCI6IGdldFJlYWRhYmxlQ29sb3IoY3VycmVudFByaW1hcnlDb2xvcilcbiAgICB9O1xuICAgIG9uUHJpbWFyeVN0eWxlLnBhaW50cyA9IFtvblByaW1hcnlQYWludF07XG4gICAgbGV0IG9uTWVzc2FnZVN0eWxlID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLmZpbmQoc3R5bGUgPT4gc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiKSA9PSBtb2RlICYmIHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIikgPT0gXCJvbk1lc3NhZ2VcIik7XG4gICAgbGV0IG9uTWVzc2FnZVBhaW50ID0ge1xuICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICBcImNvbG9yXCI6IGdldFJlYWRhYmxlQ29sb3IoY3VycmVudE1lc3NhZ2VDb2xvcilcbiAgICB9O1xuICAgIG9uTWVzc2FnZVN0eWxlLnBhaW50cyA9IFtvbk1lc3NhZ2VQYWludF07XG4gICAgbGV0IG9uQWN0aW9uU3R5bGUgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIpID09IG1vZGUgJiYgc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiKSA9PSBcIm9uQWN0aW9uXCIpO1xuICAgIGxldCBvbkFjdGlvblBhaW50ID0ge1xuICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICBcImNvbG9yXCI6IGdldFJlYWRhYmxlQ29sb3IoY3VycmVudEFjdGlvbkNvbG9yKVxuICAgIH07XG4gICAgb25BY3Rpb25TdHlsZS5wYWludHMgPSBbb25NZXNzYWdlUGFpbnRdO1xuICAgIGxldCBjdXJyZW50QWN0aW9uRm9yZWdyb3VuZFN0eWxlID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLmZpbmQoc3R5bGUgPT4gc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiKSA9PSBtb2RlICYmIHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIikgPT0gXCJhY3Rpb25Gb3JlZ3JvdW5kXCIpO1xuICAgIGxldCBjdXJyZW50QWN0aW9uQmFja2dyb3VuZFN0eWxlID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLmZpbmQoc3R5bGUgPT4gc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiKSA9PSBtb2RlICYmIHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIikgPT0gXCJhY3Rpb25CYWNrZ3JvdW5kXCIpO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcmltYXJ5Q29sb3IpO1xufVxuZnVuY3Rpb24gbG9hZFJlc291cmNlcygpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAvLyBOZWVkIHRvIGxvYWQgYSBmb250IGhlcmUgdG8gZ2VuZXJhdGUgdGhlIG90aGVyIHBhZ2UgZXhhbXBsZXMuXG4gICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMoRk9OVF9USVRMRVMpO1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKEZPTlRfQk9ESUVTKTtcbiAgICAgICAgTElHSFRfVEVYVF9DT0xPUl9TVFlMRSA9IHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcImYyMDcyMzM4MzNhZWE2MmUyZjAxNjNiYjRiNmM2ZWQ2MDI0NTliYTFcIik7XG4gICAgICAgIERBUktfVEVYVF9DT0xPUl9TVFlMRSA9IHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhcIjU2MzhlNDNjODI2MTNjN2YxNWM2MGUzZThlOTQ5NmMxNzc2M2FlNDlcIik7XG4gICAgfSk7XG59XG4vLyB+fn5+fn5IZWxwZXIgRnVuY3Rpb25zfn5+fn5+fn5+fn4gLy9cbmZ1bmN0aW9uIFJHQlRvSFNMKHJnYikge1xuICAgIGxldCByID0gcmdiLnI7XG4gICAgbGV0IGcgPSByZ2IuZztcbiAgICBsZXQgYiA9IHJnYi5iO1xuICAgIC8vIEZpbmQgZ3JlYXRlc3QgYW5kIHNtYWxsZXN0IGNoYW5uZWwgdmFsdWVzXG4gICAgbGV0IGNtaW4gPSBNYXRoLm1pbihyLCBnLCBiKSwgY21heCA9IE1hdGgubWF4KHIsIGcsIGIpLCBkZWx0YSA9IGNtYXggLSBjbWluLCBoID0gMCwgcyA9IDAsIGwgPSAwO1xuICAgIC8vIENhbGN1bGF0ZSBodWVcbiAgICAvLyBObyBkaWZmZXJlbmNlXG4gICAgaWYgKGRlbHRhID09IDApXG4gICAgICAgIGggPSAwO1xuICAgIC8vIFJlZCBpcyBtYXhcbiAgICBlbHNlIGlmIChjbWF4ID09IHIpXG4gICAgICAgIGggPSAoKGcgLSBiKSAvIGRlbHRhKSAlIDY7XG4gICAgLy8gR3JlZW4gaXMgbWF4XG4gICAgZWxzZSBpZiAoY21heCA9PSBnKVxuICAgICAgICBoID0gKGIgLSByKSAvIGRlbHRhICsgMjtcbiAgICAvLyBCbHVlIGlzIG1heFxuICAgIGVsc2VcbiAgICAgICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcbiAgICAvLyBNYWtlIG5lZ2F0aXZlIGh1ZXMgcG9zaXRpdmUgYmVoaW5kIDM2MMKwXG4gICAgaWYgKGggPCAwKVxuICAgICAgICBoICs9IDM2MDtcbiAgICAvLyBDYWxjdWxhdGUgbGlnaHRuZXNzXG4gICAgbCA9IChjbWF4ICsgY21pbikgLyAyO1xuICAgIC8vIENhbGN1bGF0ZSBzYXR1cmF0aW9uXG4gICAgcyA9IGRlbHRhID09IDAgPyAwIDogZGVsdGEgLyAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpO1xuICAgIC8vIE11bHRpcGx5IGwgYW5kIHMgYnkgMTAwXG4gICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICBsID0gKyhsICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiB7IGh1ZTogaCwgc2F0dXJhdGlvbjogcywgbGlnaHRuZXNzOiBsIH07XG59XG5mdW5jdGlvbiBIU0xUb1JHQihoc2wpIHtcbiAgICBsZXQgaCA9IGhzbC5odWU7XG4gICAgbGV0IHMgPSBoc2wuc2F0dXJhdGlvbjtcbiAgICBsZXQgbCA9IGhzbC5saWdodG5lc3M7XG4gICAgLy8gTXVzdCBiZSBmcmFjdGlvbnMgb2YgMVxuICAgIHMgLz0gMTAwO1xuICAgIGwgLz0gMTAwO1xuICAgIGxldCBjID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHMsIHggPSBjICogKDEgLSBNYXRoLmFicygoaCAvIDYwKSAlIDIgLSAxKSksIG0gPSBsIC0gYyAvIDIsIHIgPSAwLCBnID0gMCwgYiA9IDA7XG4gICAgaWYgKDAgPD0gaCAmJiBoIDwgNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGcgPSB4O1xuICAgICAgICBiID0gMDtcbiAgICB9XG4gICAgZWxzZSBpZiAoNjAgPD0gaCAmJiBoIDwgMTIwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBnID0gYztcbiAgICAgICAgYiA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKDEyMCA8PSBoICYmIGggPCAxODApIHtcbiAgICAgICAgciA9IDA7XG4gICAgICAgIGcgPSBjO1xuICAgICAgICBiID0geDtcbiAgICB9XG4gICAgZWxzZSBpZiAoMTgwIDw9IGggJiYgaCA8IDI0MCkge1xuICAgICAgICByID0gMDtcbiAgICAgICAgZyA9IHg7XG4gICAgICAgIGIgPSBjO1xuICAgIH1cbiAgICBlbHNlIGlmICgyNDAgPD0gaCAmJiBoIDwgMzAwKSB7XG4gICAgICAgIHIgPSB4O1xuICAgICAgICBnID0gMDtcbiAgICAgICAgYiA9IGM7XG4gICAgfVxuICAgIGVsc2UgaWYgKDMwMCA8PSBoICYmIGggPCAzNjApIHtcbiAgICAgICAgciA9IGM7XG4gICAgICAgIGcgPSAwO1xuICAgICAgICBiID0geDtcbiAgICB9XG4gICAgciA9IHIgKyBtO1xuICAgIGcgPSBnICsgbTtcbiAgICBiID0gYiArIG07XG4gICAgcmV0dXJuIHsgcjogciwgZzogZywgYjogYiB9O1xufVxuZnVuY3Rpb24gaGV4VG9SR0IoaGV4KSB7XG4gICAgbGV0IHIsIGcsIGI7XG4gICAgaGV4ID0gaGV4LnJlcGxhY2UoL14jLywgJycpO1xuICAgIGNvbnN0IG51bWJlciA9IE51bWJlci5wYXJzZUludChoZXgsIDE2KTtcbiAgICBjb25zdCByZWQgPSBudW1iZXIgPj4gMTY7XG4gICAgY29uc3QgZ3JlZW4gPSAobnVtYmVyID4+IDgpICYgMjU1O1xuICAgIGNvbnN0IGJsdWUgPSBudW1iZXIgJiAyNTU7XG4gICAgcmV0dXJuIHsgcjogcmVkIC8gMjU2LCBnOiBncmVlbiAvIDI1NiwgYjogYmx1ZSAvIDI1NiB9O1xufVxuZnVuY3Rpb24gZ2V0UmVhZGFibGVDb2xvcihiYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBsZXQgYmFja2dyb3VuZEhleCA9IHJnYihNYXRoLnJvdW5kKGJhY2tncm91bmRDb2xvci5yICogMjU1KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kQ29sb3IuZyAqIDI1NSksIE1hdGgucm91bmQoYmFja2dyb3VuZENvbG9yLmIgKiAyNTUpKTtcbiAgICBsZXQgZm9yZWdyb3VuZEhleCA9IHJlYWRhYmxlQ29sb3IoYmFja2dyb3VuZEhleCk7XG4gICAgbGV0IGZvcmVncm91bmRDb2xvciA9IGhleFRvUkdCKGZvcmVncm91bmRIZXgpO1xuICAgIHJldHVybiBmb3JlZ3JvdW5kQ29sb3I7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9