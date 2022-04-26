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
switch (figma.command) {
    case "update":
        updateGeneratedColors("light");
        updateGeneratedColors("dark");
        figma.closePlugin();
        break;
    default:
        figma.showUI(__html__);
        figma.ui.resize(400, 330);
        // if(figma.root.getPluginData("status") == "run") {
        //   //TODO evaluate if there is some way to reconfigure the pages after initial setup.
        //   // figma.ui.resize(400, 136)
        //   figma.ui.postMessage("about")
        // }
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
            figma.root.setPluginData("status", "run");
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
function getReadableColor(backgroundColor) {
    debugger;
    let backgroundHex = Object(polished__WEBPACK_IMPORTED_MODULE_0__["rgb"])(Math.round(backgroundColor.r * 255), Math.round(backgroundColor.g * 255), Math.round(backgroundColor.b * 255));
    let foregroundHex = Object(polished__WEBPACK_IMPORTED_MODULE_0__["readableColor"])(backgroundHex);
    let foregroundColor = hexToRGB(foregroundHex);
    return foregroundColor;
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVGdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3dyYXBOYXRpdmVTdXBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcG9saXNoZWQvZGlzdC9wb2xpc2hlZC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltd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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUM0QjtBQUNoQjtBQUNJO0FBQ3NCOztBQUVoRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFdBQVc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpR0FBaUcsYUFBYTtBQUM5RztBQUNBOztBQUVBLGlCQUFpQixxQkFBcUI7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxFQUFFOztBQUVUO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUMsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YscUdBQTJCO0FBQ2pIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsWUFBWTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRkFBa0YscUdBQTJCO0FBQzdHO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLGtCQUFrQixrRkFBUTtBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUcsS0FBSztBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isc0ZBQXNGO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFVBQVUsc0ZBQXNGO0FBQ3ZHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGtGQUFRO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLEVBQUU7QUFDaEMsa0NBQWtDLEVBQUU7QUFDcEMscUNBQXFDLEVBQUU7QUFDdkMseUNBQXlDLEVBQUU7QUFDM0MsNkJBQTZCLElBQUksaUJBQWlCLElBQUksaUJBQWlCLElBQUk7QUFDM0Usb0NBQW9DLElBQUksaUJBQWlCLElBQUksaUJBQWlCLElBQUk7QUFDbEYsNkJBQTZCLElBQUksbUNBQW1DLElBQUksNEJBQTRCLElBQUk7QUFDeEcsb0NBQW9DLElBQUksbUNBQW1DLElBQUksNEJBQTRCLElBQUk7QUFDL0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDhCQUE4QjtBQUM5QztBQUNBLGdCQUFnQiw4Q0FBOEM7QUFDOUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3Q0FBd0M7QUFDeEQ7QUFDQSxnQkFBZ0IsdURBQXVEO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw2Q0FBNkM7QUFDbkU7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFpRDtBQUN6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsK0NBQStDO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsOEVBQThFLHlCQUF5QixFQUFFO0FBQzFJO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRiw0Q0FBNEMsRUFBRTtBQUNqSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSxrQkFBa0I7QUFDbkY7QUFDQTtBQUNBO0FBQ0EsaUVBQWlFLG9CQUFvQjtBQUNyRjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBRztBQUMzQix3QkFBd0IsOERBQWE7QUFDckM7QUFDQTtBQUNBIiwiZmlsZSI6ImNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb2RlLnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn0iLCJpbXBvcnQgc2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vc2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgZnJvbSBcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufSIsImltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbiwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdGFnZ2VkVGVtcGxhdGVMaXRlcmFsTG9vc2Uoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHN0cmluZ3MucmF3ID0gcmF3O1xuICByZXR1cm4gc3RyaW5ncztcbn0iLCJpbXBvcnQgZ2V0UHJvdG90eXBlT2YgZnJvbSBcIi4vZ2V0UHJvdG90eXBlT2YuanNcIjtcbmltcG9ydCBzZXRQcm90b3R5cGVPZiBmcm9tIFwiLi9zZXRQcm90b3R5cGVPZi5qc1wiO1xuaW1wb3J0IGlzTmF0aXZlRnVuY3Rpb24gZnJvbSBcIi4vaXNOYXRpdmVGdW5jdGlvbi5qc1wiO1xuaW1wb3J0IGNvbnN0cnVjdCBmcm9tIFwiLi9jb25zdHJ1Y3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpIHtcbiAgdmFyIF9jYWNoZSA9IHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiA/IG5ldyBNYXAoKSA6IHVuZGVmaW5lZDtcblxuICBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICAgIGlmIChDbGFzcyA9PT0gbnVsbCB8fCAhaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBjb25zdHJ1Y3QoQ2xhc3MsIGFyZ3VtZW50cywgZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBXcmFwcGVyLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufSIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZCc7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHNMb29zZSc7XG5pbXBvcnQgX3dyYXBOYXRpdmVTdXBlciBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS93cmFwTmF0aXZlU3VwZXInO1xuaW1wb3J0IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZSc7XG5cbmZ1bmN0aW9uIGxhc3QoKSB7XG4gIHZhciBfcmVmO1xuXG4gIHJldHVybiBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCAtIDEsIF9yZWYgPCAwIHx8IGFyZ3VtZW50cy5sZW5ndGggPD0gX3JlZiA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1tfcmVmXTtcbn1cblxuZnVuY3Rpb24gbmVnYXRpb24oYSkge1xuICByZXR1cm4gLWE7XG59XG5cbmZ1bmN0aW9uIGFkZGl0aW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgKyBiO1xufVxuXG5mdW5jdGlvbiBzdWJ0cmFjdGlvbihhLCBiKSB7XG4gIHJldHVybiBhIC0gYjtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbGljYXRpb24oYSwgYikge1xuICByZXR1cm4gYSAqIGI7XG59XG5cbmZ1bmN0aW9uIGRpdmlzaW9uKGEsIGIpIHtcbiAgcmV0dXJuIGEgLyBiO1xufVxuXG5mdW5jdGlvbiBtYXgoKSB7XG4gIHJldHVybiBNYXRoLm1heC5hcHBseShNYXRoLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBtaW4oKSB7XG4gIHJldHVybiBNYXRoLm1pbi5hcHBseShNYXRoLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBjb21tYSgpIHtcbiAgcmV0dXJuIEFycmF5Lm9mLmFwcGx5KEFycmF5LCBhcmd1bWVudHMpO1xufVxuXG52YXIgZGVmYXVsdFN5bWJvbHMgPSB7XG4gIHN5bWJvbHM6IHtcbiAgICAnKic6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJyonLFxuICAgICAgICBmOiBtdWx0aXBsaWNhdGlvbixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDQsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJyonLFxuICAgICAgcmVnU3ltYm9sOiAnXFxcXConXG4gICAgfSxcbiAgICAnLyc6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJy8nLFxuICAgICAgICBmOiBkaXZpc2lvbixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDQsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJy8nLFxuICAgICAgcmVnU3ltYm9sOiAnLydcbiAgICB9LFxuICAgICcrJzoge1xuICAgICAgaW5maXg6IHtcbiAgICAgICAgc3ltYm9sOiAnKycsXG4gICAgICAgIGY6IGFkZGl0aW9uLFxuICAgICAgICBub3RhdGlvbjogJ2luZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMixcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAyXG4gICAgICB9LFxuICAgICAgcHJlZml4OiB7XG4gICAgICAgIHN5bWJvbDogJysnLFxuICAgICAgICBmOiBsYXN0LFxuICAgICAgICBub3RhdGlvbjogJ3ByZWZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDMsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJysnLFxuICAgICAgcmVnU3ltYm9sOiAnXFxcXCsnXG4gICAgfSxcbiAgICAnLSc6IHtcbiAgICAgIGluZml4OiB7XG4gICAgICAgIHN5bWJvbDogJy0nLFxuICAgICAgICBmOiBzdWJ0cmFjdGlvbixcbiAgICAgICAgbm90YXRpb246ICdpbmZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDIsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMlxuICAgICAgfSxcbiAgICAgIHByZWZpeDoge1xuICAgICAgICBzeW1ib2w6ICctJyxcbiAgICAgICAgZjogbmVnYXRpb24sXG4gICAgICAgIG5vdGF0aW9uOiAncHJlZml4JyxcbiAgICAgICAgcHJlY2VkZW5jZTogMyxcbiAgICAgICAgcmlnaHRUb0xlZnQ6IDAsXG4gICAgICAgIGFyZ0NvdW50OiAxXG4gICAgICB9LFxuICAgICAgc3ltYm9sOiAnLScsXG4gICAgICByZWdTeW1ib2w6ICctJ1xuICAgIH0sXG4gICAgJywnOiB7XG4gICAgICBpbmZpeDoge1xuICAgICAgICBzeW1ib2w6ICcsJyxcbiAgICAgICAgZjogY29tbWEsXG4gICAgICAgIG5vdGF0aW9uOiAnaW5maXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAxLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDJcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcsJyxcbiAgICAgIHJlZ1N5bWJvbDogJywnXG4gICAgfSxcbiAgICAnKCc6IHtcbiAgICAgIHByZWZpeDoge1xuICAgICAgICBzeW1ib2w6ICcoJyxcbiAgICAgICAgZjogbGFzdCxcbiAgICAgICAgbm90YXRpb246ICdwcmVmaXgnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICcoJyxcbiAgICAgIHJlZ1N5bWJvbDogJ1xcXFwoJ1xuICAgIH0sXG4gICAgJyknOiB7XG4gICAgICBwb3N0Zml4OiB7XG4gICAgICAgIHN5bWJvbDogJyknLFxuICAgICAgICBmOiB1bmRlZmluZWQsXG4gICAgICAgIG5vdGF0aW9uOiAncG9zdGZpeCcsXG4gICAgICAgIHByZWNlZGVuY2U6IDAsXG4gICAgICAgIHJpZ2h0VG9MZWZ0OiAwLFxuICAgICAgICBhcmdDb3VudDogMVxuICAgICAgfSxcbiAgICAgIHN5bWJvbDogJyknLFxuICAgICAgcmVnU3ltYm9sOiAnXFxcXCknXG4gICAgfSxcbiAgICBtaW46IHtcbiAgICAgIGZ1bmM6IHtcbiAgICAgICAgc3ltYm9sOiAnbWluJyxcbiAgICAgICAgZjogbWluLFxuICAgICAgICBub3RhdGlvbjogJ2Z1bmMnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICdtaW4nLFxuICAgICAgcmVnU3ltYm9sOiAnbWluXFxcXGInXG4gICAgfSxcbiAgICBtYXg6IHtcbiAgICAgIGZ1bmM6IHtcbiAgICAgICAgc3ltYm9sOiAnbWF4JyxcbiAgICAgICAgZjogbWF4LFxuICAgICAgICBub3RhdGlvbjogJ2Z1bmMnLFxuICAgICAgICBwcmVjZWRlbmNlOiAwLFxuICAgICAgICByaWdodFRvTGVmdDogMCxcbiAgICAgICAgYXJnQ291bnQ6IDFcbiAgICAgIH0sXG4gICAgICBzeW1ib2w6ICdtYXgnLFxuICAgICAgcmVnU3ltYm9sOiAnbWF4XFxcXGInXG4gICAgfVxuICB9XG59O1xudmFyIGRlZmF1bHRTeW1ib2xNYXAgPSBkZWZhdWx0U3ltYm9scztcblxuLy8gYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3N0eWxlZC1jb21wb25lbnRzL3N0eWxlZC1jb21wb25lbnRzL2Jsb2IvZmNmNmYzODA0YzU3YTE0ZGQ3OTg0ZGZhYjdiYzA2ZWUyZWRjYTA0NC9zcmMvdXRpbHMvZXJyb3IuanNcblxuLyoqXG4gKiBQYXJzZSBlcnJvcnMubWQgYW5kIHR1cm4gaXQgaW50byBhIHNpbXBsZSBoYXNoIG9mIGNvZGU6IG1lc3NhZ2VcbiAqIEBwcml2YXRlXG4gKi9cbnZhciBFUlJPUlMgPSB7XG4gIFwiMVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byBoc2wsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiBoc2woMzYwLCAwLjc1LCAwLjQpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IGh1ZTogMjU1LCBzYXR1cmF0aW9uOiAwLjQsIGxpZ2h0bmVzczogMC43NSB9KS5cXG5cXG5cIixcbiAgXCIyXCI6IFwiUGFzc2VkIGludmFsaWQgYXJndW1lbnRzIHRvIGhzbGEsIHBsZWFzZSBwYXNzIG11bHRpcGxlIG51bWJlcnMgZS5nLiBoc2xhKDM2MCwgMC43NSwgMC40LCAwLjcpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IGh1ZTogMjU1LCBzYXR1cmF0aW9uOiAwLjQsIGxpZ2h0bmVzczogMC43NSwgYWxwaGE6IDAuNyB9KS5cXG5cXG5cIixcbiAgXCIzXCI6IFwiUGFzc2VkIGFuIGluY29ycmVjdCBhcmd1bWVudCB0byBhIGNvbG9yIGZ1bmN0aW9uLCBwbGVhc2UgcGFzcyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIGNvbG9yLlxcblxcblwiLFxuICBcIjRcIjogXCJDb3VsZG4ndCBnZW5lcmF0ZSB2YWxpZCByZ2Igc3RyaW5nIGZyb20gJXMsIGl0IHJldHVybmVkICVzLlxcblxcblwiLFxuICBcIjVcIjogXCJDb3VsZG4ndCBwYXJzZSB0aGUgY29sb3Igc3RyaW5nLiBQbGVhc2UgcHJvdmlkZSB0aGUgY29sb3IgYXMgYSBzdHJpbmcgaW4gaGV4LCByZ2IsIHJnYmEsIGhzbCBvciBoc2xhIG5vdGF0aW9uLlxcblxcblwiLFxuICBcIjZcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudHMgdG8gcmdiLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gcmdiKDI1NSwgMjA1LCAxMDApIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSkuXFxuXFxuXCIsXG4gIFwiN1wiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50cyB0byByZ2JhLCBwbGVhc2UgcGFzcyBtdWx0aXBsZSBudW1iZXJzIGUuZy4gcmdiKDI1NSwgMjA1LCAxMDAsIDAuNzUpIG9yIGFuIG9iamVjdCBlLmcuIHJnYih7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjc1IH0pLlxcblxcblwiLFxuICBcIjhcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0b0NvbG9yU3RyaW5nLCBwbGVhc2UgcGFzcyBhIFJnYkNvbG9yLCBSZ2JhQ29sb3IsIEhzbENvbG9yIG9yIEhzbGFDb2xvciBvYmplY3QuXFxuXFxuXCIsXG4gIFwiOVwiOiBcIlBsZWFzZSBwcm92aWRlIGEgbnVtYmVyIG9mIHN0ZXBzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyLlxcblxcblwiLFxuICBcIjEwXCI6IFwiUGxlYXNlIHBhc3MgYSBudW1iZXIgb3Igb25lIG9mIHRoZSBwcmVkZWZpbmVkIHNjYWxlcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlciBhcyB0aGUgcmF0aW8uXFxuXFxuXCIsXG4gIFwiMTFcIjogXCJJbnZhbGlkIHZhbHVlIHBhc3NlZCBhcyBiYXNlIHRvIG1vZHVsYXJTY2FsZSwgZXhwZWN0ZWQgbnVtYmVyIG9yIGVtIHN0cmluZyBidXQgZ290IFxcXCIlc1xcXCJcXG5cXG5cIixcbiAgXCIxMlwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gJXMoKSwgZ290IFxcXCIlc1xcXCIgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCIxM1wiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICVzKCksIGdvdCBcXFwiJXNcXFwiIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiMTRcIjogXCJQYXNzZWQgaW52YWxpZCBwaXhlbCB2YWx1ZSAoXFxcIiVzXFxcIikgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCIxNVwiOiBcIlBhc3NlZCBpbnZhbGlkIGJhc2UgdmFsdWUgKFxcXCIlc1xcXCIpIHRvICVzKCksIHBsZWFzZSBwYXNzIGEgdmFsdWUgbGlrZSBcXFwiMTJweFxcXCIgb3IgMTIuXFxuXFxuXCIsXG4gIFwiMTZcIjogXCJZb3UgbXVzdCBwcm92aWRlIGEgdGVtcGxhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiMTdcIjogXCJZb3UgcGFzc2VkIGFuIHVuc3VwcG9ydGVkIHNlbGVjdG9yIHN0YXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjE4XCI6IFwibWluU2NyZWVuIGFuZCBtYXhTY3JlZW4gbXVzdCBiZSBwcm92aWRlZCBhcyBzdHJpbmdpZmllZCBudW1iZXJzIHdpdGggdGhlIHNhbWUgdW5pdHMuXFxuXFxuXCIsXG4gIFwiMTlcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjIwXCI6IFwiZXhwZWN0cyBlaXRoZXIgYW4gYXJyYXkgb2Ygb2JqZWN0cyBvciBhIHNpbmdsZSBvYmplY3Qgd2l0aCB0aGUgcHJvcGVydGllcyBwcm9wLCBmcm9tU2l6ZSwgYW5kIHRvU2l6ZS5cXG5cXG5cIixcbiAgXCIyMVwiOiBcImV4cGVjdHMgdGhlIG9iamVjdHMgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IGFycmF5IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgYHByb3BgLCBgZnJvbVNpemVgLCBhbmQgYHRvU2l6ZWAuXFxuXFxuXCIsXG4gIFwiMjJcIjogXCJleHBlY3RzIHRoZSBmaXJzdCBhcmd1bWVudCBvYmplY3QgdG8gaGF2ZSB0aGUgcHJvcGVydGllcyBgcHJvcGAsIGBmcm9tU2l6ZWAsIGFuZCBgdG9TaXplYC5cXG5cXG5cIixcbiAgXCIyM1wiOiBcImZvbnRGYWNlIGV4cGVjdHMgYSBuYW1lIG9mIGEgZm9udC1mYW1pbHkuXFxuXFxuXCIsXG4gIFwiMjRcIjogXCJmb250RmFjZSBleHBlY3RzIGVpdGhlciB0aGUgcGF0aCB0byB0aGUgZm9udCBmaWxlKHMpIG9yIGEgbmFtZSBvZiBhIGxvY2FsIGNvcHkuXFxuXFxuXCIsXG4gIFwiMjVcIjogXCJmb250RmFjZSBleHBlY3RzIGxvY2FsRm9udHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiMjZcIjogXCJmb250RmFjZSBleHBlY3RzIGZpbGVGb3JtYXRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjI3XCI6IFwicmFkaWFsR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiMjhcIjogXCJQbGVhc2Ugc3VwcGx5IGEgZmlsZW5hbWUgdG8gcmV0aW5hSW1hZ2UoKSBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMjlcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0cmlhbmdsZSwgcGxlYXNlIHBhc3MgY29ycmVjdCBwb2ludGluZ0RpcmVjdGlvbiBlLmcuICdyaWdodCcuXFxuXFxuXCIsXG4gIFwiMzBcIjogXCJQYXNzZWQgYW4gaW52YWxpZCB2YWx1ZSB0byBgaGVpZ2h0YCBvciBgd2lkdGhgLiBQbGVhc2UgcHJvdmlkZSBhIHBpeGVsIGJhc2VkIHVuaXQuXFxuXFxuXCIsXG4gIFwiMzFcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBvbmx5IHRha2VzIDggYXJndW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uXFxuXFxuXCIsXG4gIFwiMzJcIjogXCJUbyBwYXNzIG11bHRpcGxlIGFuaW1hdGlvbnMgcGxlYXNlIHN1cHBseSB0aGVtIGluIGFycmF5cywgZS5nLiBhbmltYXRpb24oWydyb3RhdGUnLCAnMnMnXSwgWydtb3ZlJywgJzFzJ10pXFxuVG8gcGFzcyBhIHNpbmdsZSBhbmltYXRpb24gcGxlYXNlIHN1cHBseSB0aGVtIGluIHNpbXBsZSB2YWx1ZXMsIGUuZy4gYW5pbWF0aW9uKCdyb3RhdGUnLCAnMnMnKVxcblxcblwiLFxuICBcIjMzXCI6IFwiVGhlIGFuaW1hdGlvbiBzaG9ydGhhbmQgYXJyYXlzIGNhbiBvbmx5IGhhdmUgOCBlbGVtZW50cy4gU2VlIHRoZSBzcGVjaWZpY2F0aW9uIGZvciBtb3JlIGluZm9ybWF0aW9uOiBodHRwOi8vbWRuLmlvL2FuaW1hdGlvblxcblxcblwiLFxuICBcIjM0XCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgYSByYWRpdXMgdmFsdWUgYXMgYSBzdHJpbmcgb3IgbnVtYmVyIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMzVcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBvbmUgb2YgXFxcInRvcFxcXCIsIFxcXCJib3R0b21cXFwiLCBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiMzZcIjogXCJQcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIHZhbHVlLlxcblxcblwiLFxuICBcIjM3XCI6IFwiU3ludGF4IEVycm9yIGF0ICVzLlxcblxcblwiLFxuICBcIjM4XCI6IFwiRm9ybXVsYSBjb250YWlucyBhIGZ1bmN0aW9uIHRoYXQgbmVlZHMgcGFyZW50aGVzZXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiMzlcIjogXCJGb3JtdWxhIGlzIG1pc3NpbmcgY2xvc2luZyBwYXJlbnRoZXNpcyBhdCAlcy5cXG5cXG5cIixcbiAgXCI0MFwiOiBcIkZvcm11bGEgaGFzIHRvbyBtYW55IGNsb3NpbmcgcGFyZW50aGVzZXMgYXQgJXMuXFxuXFxuXCIsXG4gIFwiNDFcIjogXCJBbGwgdmFsdWVzIGluIGEgZm9ybXVsYSBtdXN0IGhhdmUgdGhlIHNhbWUgdW5pdCBvciBiZSB1bml0bGVzcy5cXG5cXG5cIixcbiAgXCI0MlwiOiBcIlBsZWFzZSBwcm92aWRlIGEgbnVtYmVyIG9mIHN0ZXBzIHRvIHRoZSBtb2R1bGFyU2NhbGUgaGVscGVyLlxcblxcblwiLFxuICBcIjQzXCI6IFwiUGxlYXNlIHBhc3MgYSBudW1iZXIgb3Igb25lIG9mIHRoZSBwcmVkZWZpbmVkIHNjYWxlcyB0byB0aGUgbW9kdWxhclNjYWxlIGhlbHBlciBhcyB0aGUgcmF0aW8uXFxuXFxuXCIsXG4gIFwiNDRcIjogXCJJbnZhbGlkIHZhbHVlIHBhc3NlZCBhcyBiYXNlIHRvIG1vZHVsYXJTY2FsZSwgZXhwZWN0ZWQgbnVtYmVyIG9yIGVtL3JlbSBzdHJpbmcgYnV0IGdvdCAlcy5cXG5cXG5cIixcbiAgXCI0NVwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIGhzbFRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI0NlwiOiBcIlBhc3NlZCBpbnZhbGlkIGFyZ3VtZW50IHRvIHJnYlRvQ29sb3JTdHJpbmcsIHBsZWFzZSBwYXNzIGEgUmdiQ29sb3Igb3IgUmdiYUNvbG9yIG9iamVjdC5cXG5cXG5cIixcbiAgXCI0N1wiOiBcIm1pblNjcmVlbiBhbmQgbWF4U2NyZWVuIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzLlxcblxcblwiLFxuICBcIjQ4XCI6IFwiZnJvbVNpemUgYW5kIHRvU2l6ZSBtdXN0IGJlIHByb3ZpZGVkIGFzIHN0cmluZ2lmaWVkIG51bWJlcnMgd2l0aCB0aGUgc2FtZSB1bml0cy5cXG5cXG5cIixcbiAgXCI0OVwiOiBcIkV4cGVjdHMgZWl0aGVyIGFuIGFycmF5IG9mIG9iamVjdHMgb3IgYSBzaW5nbGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTBcIjogXCJFeHBlY3RzIHRoZSBvYmplY3RzIGluIHRoZSBmaXJzdCBhcmd1bWVudCBhcnJheSB0byBoYXZlIHRoZSBwcm9wZXJ0aWVzIHByb3AsIGZyb21TaXplLCBhbmQgdG9TaXplLlxcblxcblwiLFxuICBcIjUxXCI6IFwiRXhwZWN0cyB0aGUgZmlyc3QgYXJndW1lbnQgb2JqZWN0IHRvIGhhdmUgdGhlIHByb3BlcnRpZXMgcHJvcCwgZnJvbVNpemUsIGFuZCB0b1NpemUuXFxuXFxuXCIsXG4gIFwiNTJcIjogXCJmb250RmFjZSBleHBlY3RzIGVpdGhlciB0aGUgcGF0aCB0byB0aGUgZm9udCBmaWxlKHMpIG9yIGEgbmFtZSBvZiBhIGxvY2FsIGNvcHkuXFxuXFxuXCIsXG4gIFwiNTNcIjogXCJmb250RmFjZSBleHBlY3RzIGxvY2FsRm9udHMgdG8gYmUgYW4gYXJyYXkuXFxuXFxuXCIsXG4gIFwiNTRcIjogXCJmb250RmFjZSBleHBlY3RzIGZpbGVGb3JtYXRzIHRvIGJlIGFuIGFycmF5LlxcblxcblwiLFxuICBcIjU1XCI6IFwiZm9udEZhY2UgZXhwZWN0cyBhIG5hbWUgb2YgYSBmb250LWZhbWlseS5cXG5cXG5cIixcbiAgXCI1NlwiOiBcImxpbmVhckdyYWRpZW50IHJlcXVyaWVzIGF0IGxlYXN0IDIgY29sb3Itc3RvcHMgdG8gcHJvcGVybHkgcmVuZGVyLlxcblxcblwiLFxuICBcIjU3XCI6IFwicmFkaWFsR3JhZGllbnQgcmVxdXJpZXMgYXQgbGVhc3QgMiBjb2xvci1zdG9wcyB0byBwcm9wZXJseSByZW5kZXIuXFxuXFxuXCIsXG4gIFwiNThcIjogXCJQbGVhc2Ugc3VwcGx5IGEgZmlsZW5hbWUgdG8gcmV0aW5hSW1hZ2UoKSBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNTlcIjogXCJQYXNzZWQgaW52YWxpZCBhcmd1bWVudCB0byB0cmlhbmdsZSwgcGxlYXNlIHBhc3MgY29ycmVjdCBwb2ludGluZ0RpcmVjdGlvbiBlLmcuICdyaWdodCcuXFxuXFxuXCIsXG4gIFwiNjBcIjogXCJQYXNzZWQgYW4gaW52YWxpZCB2YWx1ZSB0byBgaGVpZ2h0YCBvciBgd2lkdGhgLiBQbGVhc2UgcHJvdmlkZSBhIHBpeGVsIGJhc2VkIHVuaXQuXFxuXFxuXCIsXG4gIFwiNjFcIjogXCJQcm9wZXJ0eSBtdXN0IGJlIGEgc3RyaW5nIHZhbHVlLlxcblxcblwiLFxuICBcIjYyXCI6IFwiYm9yZGVyUmFkaXVzIGV4cGVjdHMgYSByYWRpdXMgdmFsdWUgYXMgYSBzdHJpbmcgb3IgbnVtYmVyIGFzIHRoZSBzZWNvbmQgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNjNcIjogXCJib3JkZXJSYWRpdXMgZXhwZWN0cyBvbmUgb2YgXFxcInRvcFxcXCIsIFxcXCJib3R0b21cXFwiLCBcXFwibGVmdFxcXCIgb3IgXFxcInJpZ2h0XFxcIiBhcyB0aGUgZmlyc3QgYXJndW1lbnQuXFxuXFxuXCIsXG4gIFwiNjRcIjogXCJUaGUgYW5pbWF0aW9uIHNob3J0aGFuZCBvbmx5IHRha2VzIDggYXJndW1lbnRzLiBTZWUgdGhlIHNwZWNpZmljYXRpb24gZm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHA6Ly9tZG4uaW8vYW5pbWF0aW9uLlxcblxcblwiLFxuICBcIjY1XCI6IFwiVG8gcGFzcyBtdWx0aXBsZSBhbmltYXRpb25zIHBsZWFzZSBzdXBwbHkgdGhlbSBpbiBhcnJheXMsIGUuZy4gYW5pbWF0aW9uKFsncm90YXRlJywgJzJzJ10sIFsnbW92ZScsICcxcyddKVxcXFxuVG8gcGFzcyBhIHNpbmdsZSBhbmltYXRpb24gcGxlYXNlIHN1cHBseSB0aGVtIGluIHNpbXBsZSB2YWx1ZXMsIGUuZy4gYW5pbWF0aW9uKCdyb3RhdGUnLCAnMnMnKS5cXG5cXG5cIixcbiAgXCI2NlwiOiBcIlRoZSBhbmltYXRpb24gc2hvcnRoYW5kIGFycmF5cyBjYW4gb25seSBoYXZlIDggZWxlbWVudHMuIFNlZSB0aGUgc3BlY2lmaWNhdGlvbiBmb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cDovL21kbi5pby9hbmltYXRpb24uXFxuXFxuXCIsXG4gIFwiNjdcIjogXCJZb3UgbXVzdCBwcm92aWRlIGEgdGVtcGxhdGUgdG8gdGhpcyBtZXRob2QuXFxuXFxuXCIsXG4gIFwiNjhcIjogXCJZb3UgcGFzc2VkIGFuIHVuc3VwcG9ydGVkIHNlbGVjdG9yIHN0YXRlIHRvIHRoaXMgbWV0aG9kLlxcblxcblwiLFxuICBcIjY5XCI6IFwiRXhwZWN0ZWQgYSBzdHJpbmcgZW5kaW5nIGluIFxcXCJweFxcXCIgb3IgYSBudW1iZXIgcGFzc2VkIGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byAlcygpLCBnb3QgJXMgaW5zdGVhZC5cXG5cXG5cIixcbiAgXCI3MFwiOiBcIkV4cGVjdGVkIGEgc3RyaW5nIGVuZGluZyBpbiBcXFwicHhcXFwiIG9yIGEgbnVtYmVyIHBhc3NlZCBhcyB0aGUgc2Vjb25kIGFyZ3VtZW50IHRvICVzKCksIGdvdCAlcyBpbnN0ZWFkLlxcblxcblwiLFxuICBcIjcxXCI6IFwiUGFzc2VkIGludmFsaWQgcGl4ZWwgdmFsdWUgJXMgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCI3MlwiOiBcIlBhc3NlZCBpbnZhbGlkIGJhc2UgdmFsdWUgJXMgdG8gJXMoKSwgcGxlYXNlIHBhc3MgYSB2YWx1ZSBsaWtlIFxcXCIxMnB4XFxcIiBvciAxMi5cXG5cXG5cIixcbiAgXCI3M1wiOiBcIlBsZWFzZSBwcm92aWRlIGEgdmFsaWQgQ1NTIHZhcmlhYmxlLlxcblxcblwiLFxuICBcIjc0XCI6IFwiQ1NTIHZhcmlhYmxlIG5vdCBmb3VuZCBhbmQgbm8gZGVmYXVsdCB3YXMgcHJvdmlkZWQuXFxuXFxuXCIsXG4gIFwiNzVcIjogXCJpbXBvcnRhbnQgcmVxdWlyZXMgYSB2YWxpZCBzdHlsZSBvYmplY3QsIGdvdCBhICVzIGluc3RlYWQuXFxuXFxuXCIsXG4gIFwiNzZcIjogXCJmcm9tU2l6ZSBhbmQgdG9TaXplIG11c3QgYmUgcHJvdmlkZWQgYXMgc3RyaW5naWZpZWQgbnVtYmVycyB3aXRoIHRoZSBzYW1lIHVuaXRzIGFzIG1pblNjcmVlbiBhbmQgbWF4U2NyZWVuLlxcblxcblwiLFxuICBcIjc3XCI6IFwicmVtVG9QeCBleHBlY3RzIGEgdmFsdWUgaW4gXFxcInJlbVxcXCIgYnV0IHlvdSBwcm92aWRlZCBpdCBpbiBcXFwiJXNcXFwiLlxcblxcblwiLFxuICBcIjc4XCI6IFwiYmFzZSBtdXN0IGJlIHNldCBpbiBcXFwicHhcXFwiIG9yIFxcXCIlXFxcIiBidXQgeW91IHNldCBpdCBpbiBcXFwiJXNcXFwiLlxcblwiXG59O1xuLyoqXG4gKiBzdXBlciBiYXNpYyB2ZXJzaW9uIG9mIHNwcmludGZcbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgdmFyIGEgPSBhcmdzWzBdO1xuICB2YXIgYiA9IFtdO1xuICB2YXIgYztcblxuICBmb3IgKGMgPSAxOyBjIDwgYXJncy5sZW5ndGg7IGMgKz0gMSkge1xuICAgIGIucHVzaChhcmdzW2NdKTtcbiAgfVxuXG4gIGIuZm9yRWFjaChmdW5jdGlvbiAoZCkge1xuICAgIGEgPSBhLnJlcGxhY2UoLyVbYS16XS8sIGQpO1xuICB9KTtcbiAgcmV0dXJuIGE7XG59XG4vKipcbiAqIENyZWF0ZSBhbiBlcnJvciBmaWxlIG91dCBvZiBlcnJvcnMubWQgZm9yIGRldmVsb3BtZW50IGFuZCBhIHNpbXBsZSB3ZWIgbGluayB0byB0aGUgZnVsbCBlcnJvcnNcbiAqIGluIHByb2R1Y3Rpb24gbW9kZS5cbiAqIEBwcml2YXRlXG4gKi9cblxuXG52YXIgUG9saXNoZWRFcnJvciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0Vycm9yKSB7XG4gIF9pbmhlcml0c0xvb3NlKFBvbGlzaGVkRXJyb3IsIF9FcnJvcik7XG5cbiAgZnVuY3Rpb24gUG9saXNoZWRFcnJvcihjb2RlKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgXCJBbiBlcnJvciBvY2N1cnJlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9zdHlsZWQtY29tcG9uZW50cy9wb2xpc2hlZC9ibG9iL21haW4vc3JjL2ludGVybmFsSGVscGVycy9lcnJvcnMubWQjXCIgKyBjb2RlICsgXCIgZm9yIG1vcmUgaW5mb3JtYXRpb24uXCIpIHx8IHRoaXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX0Vycm9yLmNhbGwodGhpcywgZm9ybWF0LmFwcGx5KHZvaWQgMCwgW0VSUk9SU1tjb2RlXV0uY29uY2F0KGFyZ3MpKSkgfHwgdGhpcztcbiAgICB9XG5cbiAgICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcyk7XG4gIH1cblxuICByZXR1cm4gUG9saXNoZWRFcnJvcjtcbn0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEVycm9yKSk7XG5cbnZhciB1bml0UmVnRXhwID0gLygoPyFcXHcpYXxuYXxoY3xtY3xkZ3xtZVtyXT98eGV8bmkoPyFbYS16QS1aXSl8bW18Y3B8dHB8eHB8cSg/IXMpfGh2fHhhbXZ8bmltdnx3dnxzbXxzKD8hXFxEfCQpfGdlZHxkYXJnP3xucnV0KS9nOyAvLyBNZXJnZXMgYWRkaXRpb25hbCBtYXRoIGZ1bmN0aW9uYWxpdHkgaW50byB0aGUgZGVmYXVsdHMuXG5cbmZ1bmN0aW9uIG1lcmdlU3ltYm9sTWFwcyhhZGRpdGlvbmFsU3ltYm9scykge1xuICB2YXIgc3ltYm9sTWFwID0ge307XG4gIHN5bWJvbE1hcC5zeW1ib2xzID0gYWRkaXRpb25hbFN5bWJvbHMgPyBfZXh0ZW5kcyh7fSwgZGVmYXVsdFN5bWJvbE1hcC5zeW1ib2xzLCBhZGRpdGlvbmFsU3ltYm9scy5zeW1ib2xzKSA6IF9leHRlbmRzKHt9LCBkZWZhdWx0U3ltYm9sTWFwLnN5bWJvbHMpO1xuICByZXR1cm4gc3ltYm9sTWFwO1xufVxuXG5mdW5jdGlvbiBleGVjKG9wZXJhdG9ycywgdmFsdWVzKSB7XG4gIHZhciBfcmVmO1xuXG4gIHZhciBvcCA9IG9wZXJhdG9ycy5wb3AoKTtcbiAgdmFsdWVzLnB1c2gob3AuZi5hcHBseShvcCwgKF9yZWYgPSBbXSkuY29uY2F0LmFwcGx5KF9yZWYsIHZhbHVlcy5zcGxpY2UoLW9wLmFyZ0NvdW50KSkpKTtcbiAgcmV0dXJuIG9wLnByZWNlZGVuY2U7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZShleHByZXNzaW9uLCBhZGRpdGlvbmFsU3ltYm9scykge1xuICB2YXIgc3ltYm9sTWFwID0gbWVyZ2VTeW1ib2xNYXBzKGFkZGl0aW9uYWxTeW1ib2xzKTtcbiAgdmFyIG1hdGNoO1xuICB2YXIgb3BlcmF0b3JzID0gW3N5bWJvbE1hcC5zeW1ib2xzWycoJ10ucHJlZml4XTtcbiAgdmFyIHZhbHVlcyA9IFtdO1xuICB2YXIgcGF0dGVybiA9IG5ldyBSZWdFeHAoIC8vIFBhdHRlcm4gZm9yIG51bWJlcnNcbiAgXCJcXFxcZCsoPzpcXFxcLlxcXFxkKyk/fFwiICsgLy8gLi4uYW5kIHBhdHRlcm5zIGZvciBpbmRpdmlkdWFsIG9wZXJhdG9ycy9mdW5jdGlvbiBuYW1lc1xuICBPYmplY3Qua2V5cyhzeW1ib2xNYXAuc3ltYm9scykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gc3ltYm9sTWFwLnN5bWJvbHNba2V5XTtcbiAgfSkgLy8gbG9uZ2VyIHN5bWJvbHMgc2hvdWxkIGJlIGxpc3RlZCBmaXJzdFxuICAvLyAkRmxvd0ZpeE1lXG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuc3ltYm9sLmxlbmd0aCAtIGEuc3ltYm9sLmxlbmd0aDtcbiAgfSkgLy8gJEZsb3dGaXhNZVxuICAubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gdmFsLnJlZ1N5bWJvbDtcbiAgfSkuam9pbignfCcpICsgXCJ8KFxcXFxTKVwiLCAnZycpO1xuICBwYXR0ZXJuLmxhc3RJbmRleCA9IDA7IC8vIFJlc2V0IHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3RcblxuICB2YXIgYWZ0ZXJWYWx1ZSA9IGZhbHNlO1xuXG4gIGRvIHtcbiAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhleHByZXNzaW9uKTtcblxuICAgIHZhciBfcmVmMiA9IG1hdGNoIHx8IFsnKScsIHVuZGVmaW5lZF0sXG4gICAgICAgIHRva2VuID0gX3JlZjJbMF0sXG4gICAgICAgIGJhZCA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIG5vdE51bWJlciA9IHN5bWJvbE1hcC5zeW1ib2xzW3Rva2VuXTtcbiAgICB2YXIgbm90TmV3VmFsdWUgPSBub3ROdW1iZXIgJiYgIW5vdE51bWJlci5wcmVmaXggJiYgIW5vdE51bWJlci5mdW5jO1xuICAgIHZhciBub3RBZnRlclZhbHVlID0gIW5vdE51bWJlciB8fCAhbm90TnVtYmVyLnBvc3RmaXggJiYgIW5vdE51bWJlci5pbmZpeDsgLy8gQ2hlY2sgZm9yIHN5bnRheCBlcnJvcnM6XG5cbiAgICBpZiAoYmFkIHx8IChhZnRlclZhbHVlID8gbm90QWZ0ZXJWYWx1ZSA6IG5vdE5ld1ZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMzcsIG1hdGNoID8gbWF0Y2guaW5kZXggOiBleHByZXNzaW9uLmxlbmd0aCwgZXhwcmVzc2lvbik7XG4gICAgfVxuXG4gICAgaWYgKGFmdGVyVmFsdWUpIHtcbiAgICAgIC8vIFdlIGVpdGhlciBoYXZlIGFuIGluZml4IG9yIHBvc3RmaXggb3BlcmF0b3IgKHRoZXkgc2hvdWxkIGJlIG11dHVhbGx5IGV4Y2x1c2l2ZSlcbiAgICAgIHZhciBjdXJyID0gbm90TnVtYmVyLnBvc3RmaXggfHwgbm90TnVtYmVyLmluZml4O1xuXG4gICAgICBkbyB7XG4gICAgICAgIHZhciBwcmV2ID0gb3BlcmF0b3JzW29wZXJhdG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKChjdXJyLnByZWNlZGVuY2UgLSBwcmV2LnByZWNlZGVuY2UgfHwgcHJldi5yaWdodFRvTGVmdCkgPiAwKSBicmVhazsgLy8gQXBwbHkgcHJldmlvdXMgb3BlcmF0b3IsIHNpbmNlIGl0IGhhcyBwcmVjZWRlbmNlIG92ZXIgY3VycmVudCBvbmVcbiAgICAgIH0gd2hpbGUgKGV4ZWMob3BlcmF0b3JzLCB2YWx1ZXMpKTsgLy8gRXhpdCBsb29wIGFmdGVyIGV4ZWN1dGluZyBhbiBvcGVuaW5nIHBhcmVudGhlc2lzIG9yIGZ1bmN0aW9uXG5cblxuICAgICAgYWZ0ZXJWYWx1ZSA9IGN1cnIubm90YXRpb24gPT09ICdwb3N0Zml4JztcblxuICAgICAgaWYgKGN1cnIuc3ltYm9sICE9PSAnKScpIHtcbiAgICAgICAgb3BlcmF0b3JzLnB1c2goY3Vycik7IC8vIFBvc3RmaXggYWx3YXlzIGhhcyBwcmVjZWRlbmNlIG92ZXIgYW55IG9wZXJhdG9yIHRoYXQgZm9sbG93cyBhZnRlciBpdFxuXG4gICAgICAgIGlmIChhZnRlclZhbHVlKSBleGVjKG9wZXJhdG9ycywgdmFsdWVzKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vdE51bWJlcikge1xuICAgICAgLy8gcHJlZml4IG9wZXJhdG9yIG9yIGZ1bmN0aW9uXG4gICAgICBvcGVyYXRvcnMucHVzaChub3ROdW1iZXIucHJlZml4IHx8IG5vdE51bWJlci5mdW5jKTtcblxuICAgICAgaWYgKG5vdE51bWJlci5mdW5jKSB7XG4gICAgICAgIC8vIFJlcXVpcmUgYW4gb3BlbmluZyBwYXJlbnRoZXNpc1xuICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhleHByZXNzaW9uKTtcblxuICAgICAgICBpZiAoIW1hdGNoIHx8IG1hdGNoWzBdICE9PSAnKCcpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigzOCwgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IGV4cHJlc3Npb24ubGVuZ3RoLCBleHByZXNzaW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBudW1iZXJcbiAgICAgIHZhbHVlcy5wdXNoKCt0b2tlbik7XG4gICAgICBhZnRlclZhbHVlID0gdHJ1ZTtcbiAgICB9XG4gIH0gd2hpbGUgKG1hdGNoICYmIG9wZXJhdG9ycy5sZW5ndGgpO1xuXG4gIGlmIChvcGVyYXRvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMzksIG1hdGNoID8gbWF0Y2guaW5kZXggOiBleHByZXNzaW9uLmxlbmd0aCwgZXhwcmVzc2lvbik7XG4gIH0gZWxzZSBpZiAobWF0Y2gpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0MCwgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IGV4cHJlc3Npb24ubGVuZ3RoLCBleHByZXNzaW9uKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsdWVzLnBvcCgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VTdHJpbmcoc3RyKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcbn1cbi8qKlxuICogSGVscGVyIGZvciBkb2luZyBtYXRoIHdpdGggQ1NTIFVuaXRzLiBBY2NlcHRzIGEgZm9ybXVsYSBhcyBhIHN0cmluZy4gQWxsIHZhbHVlcyBpbiB0aGUgZm9ybXVsYSBtdXN0IGhhdmUgdGhlIHNhbWUgdW5pdCAob3IgYmUgdW5pdGxlc3MpLiBTdXBwb3J0cyBjb21wbGV4IGZvcm11bGFzIHV0bGl6aWluZyBhZGRpdGlvbiwgc3VidHJhY3Rpb24sIG11bHRpcGxpY2F0aW9uLCBkaXZpc2lvbiwgc3F1YXJlIHJvb3QsIHBvd2VycywgZmFjdG9yaWFsLCBtaW4sIG1heCwgYXMgd2VsbCBhcyBwYXJlbnRoZXNlcyBmb3Igb3JkZXIgb2Ygb3BlcmF0aW9uLlxuICpcbiAqSW4gY2FzZXMgd2hlcmUgeW91IG5lZWQgdG8gZG8gY2FsY3VsYXRpb25zIHdpdGggbWl4ZWQgdW5pdHMgd2hlcmUgb25lIHVuaXQgaXMgYSBbcmVsYXRpdmUgbGVuZ3RoIHVuaXRdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9sZW5ndGgjUmVsYXRpdmVfbGVuZ3RoX3VuaXRzKSwgeW91IHdpbGwgd2FudCB0byB1c2UgW0NTUyBDYWxjXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvY2FsYykuXG4gKlxuICogKndhcm5pbmcqIFdoaWxlIHdlJ3ZlIGRvbmUgZXZlcnl0aGluZyBwb3NzaWJsZSB0byBlbnN1cmUgbWF0aCBzYWZlbHkgZXZhbHV0ZXMgZm9ybXVsYXMgZXhwcmVzc2VkIGFzIHN0cmluZ3MsIHlvdSBzaG91bGQgYWx3YXlzIHVzZSBleHRyZW1lIGNhdXRpb24gd2hlbiBwYXNzaW5nIGBtYXRoYCB1c2VyIHByb3ZpZGVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGZvbnRTaXplOiBtYXRoKCcxMnJlbSArIDhyZW0nKSxcbiAqICAgZm9udFNpemU6IG1hdGgoJygxMnB4ICsgMnB4KSAqIDMnKSxcbiAqICAgZm9udFNpemU6IG1hdGgoJzNweF4yICsgc3FydCg0KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBmb250U2l6ZTogJHttYXRoKCcxMnJlbSArIDhyZW0nKX07XG4gKiAgIGZvbnRTaXplOiAke21hdGgoJygxMnB4ICsgMnB4KSAqIDMnKX07XG4gKiAgIGZvbnRTaXplOiAke21hdGgoJzNweF4yICsgc3FydCg0KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgIGZvbnRTaXplOiAnMjByZW0nLFxuICogICBmb250U2l6ZTogJzQycHgnLFxuICogICBmb250U2l6ZTogJzExcHgnLFxuICogfVxuICovXG5cblxuZnVuY3Rpb24gbWF0aChmb3JtdWxhLCBhZGRpdGlvbmFsU3ltYm9scykge1xuICB2YXIgcmV2ZXJzZWRGb3JtdWxhID0gcmV2ZXJzZVN0cmluZyhmb3JtdWxhKTtcbiAgdmFyIGZvcm11bGFNYXRjaCA9IHJldmVyc2VkRm9ybXVsYS5tYXRjaCh1bml0UmVnRXhwKTsgLy8gQ2hlY2sgdGhhdCBhbGwgdW5pdHMgYXJlIHRoZSBzYW1lXG5cbiAgaWYgKGZvcm11bGFNYXRjaCAmJiAhZm9ybXVsYU1hdGNoLmV2ZXJ5KGZ1bmN0aW9uICh1bml0KSB7XG4gICAgcmV0dXJuIHVuaXQgPT09IGZvcm11bGFNYXRjaFswXTtcbiAgfSkpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0MSk7XG4gIH1cblxuICB2YXIgY2xlYW5Gb3JtdWxhID0gcmV2ZXJzZVN0cmluZyhyZXZlcnNlZEZvcm11bGEucmVwbGFjZSh1bml0UmVnRXhwLCAnJykpO1xuICByZXR1cm4gXCJcIiArIGNhbGN1bGF0ZShjbGVhbkZvcm11bGEsIGFkZGl0aW9uYWxTeW1ib2xzKSArIChmb3JtdWxhTWF0Y2ggPyByZXZlcnNlU3RyaW5nKGZvcm11bGFNYXRjaFswXSkgOiAnJyk7XG59XG5cbnZhciBjc3NWYXJpYWJsZVJlZ2V4ID0gLy0tW1xcU10qL2c7XG4vKipcbiAqIEZldGNoZXMgdGhlIHZhbHVlIG9mIGEgcGFzc2VkIENTUyBWYXJpYWJsZSBpbiB0aGUgOnJvb3Qgc2NvcGUsIG9yIG90aGVyd2lzZSByZXR1cm5zIGEgZGVmYXVsdFZhbHVlIGlmIHByb3ZpZGVkLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdiYWNrZ3JvdW5kJzogY3NzVmFyKCctLWJhY2tncm91bmQtY29sb3InKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtjc3NWYXIoJy0tYmFja2dyb3VuZC1jb2xvcicpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgICdiYWNrZ3JvdW5kJzogJ3JlZCdcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBjc3NWYXIoY3NzVmFyaWFibGUsIGRlZmF1bHRWYWx1ZSkge1xuICBpZiAoIWNzc1ZhcmlhYmxlIHx8ICFjc3NWYXJpYWJsZS5tYXRjaChjc3NWYXJpYWJsZVJlZ2V4KSkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDczKTtcbiAgfVxuXG4gIHZhciB2YXJpYWJsZVZhbHVlO1xuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgdmFyaWFibGVWYWx1ZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKGNzc1ZhcmlhYmxlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlICovXG5cblxuICBpZiAodmFyaWFibGVWYWx1ZSkge1xuICAgIHJldHVybiB2YXJpYWJsZVZhbHVlLnRyaW0oKTtcbiAgfSBlbHNlIGlmIChkZWZhdWx0VmFsdWUpIHtcbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzQpO1xufVxuXG4vLyBAcHJpdmF0ZVxuZnVuY3Rpb24gY2FwaXRhbGl6ZVN0cmluZyhzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cblxudmFyIHBvc2l0aW9uTWFwJDEgPSBbJ1RvcCcsICdSaWdodCcsICdCb3R0b20nLCAnTGVmdCddO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZVByb3BlcnR5KHByb3BlcnR5LCBwb3NpdGlvbikge1xuICBpZiAoIXByb3BlcnR5KSByZXR1cm4gcG9zaXRpb24udG9Mb3dlckNhc2UoKTtcbiAgdmFyIHNwbGl0UHJvcGVydHkgPSBwcm9wZXJ0eS5zcGxpdCgnLScpO1xuXG4gIGlmIChzcGxpdFByb3BlcnR5Lmxlbmd0aCA+IDEpIHtcbiAgICBzcGxpdFByb3BlcnR5LnNwbGljZSgxLCAwLCBwb3NpdGlvbik7XG4gICAgcmV0dXJuIHNwbGl0UHJvcGVydHkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIHZhbCkge1xuICAgICAgcmV0dXJuIFwiXCIgKyBhY2MgKyBjYXBpdGFsaXplU3RyaW5nKHZhbCk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgam9pbmVkUHJvcGVydHkgPSBwcm9wZXJ0eS5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxXCIgKyBwb3NpdGlvbiArIFwiJDJcIik7XG4gIHJldHVybiBwcm9wZXJ0eSA9PT0gam9pbmVkUHJvcGVydHkgPyBcIlwiICsgcHJvcGVydHkgKyBwb3NpdGlvbiA6IGpvaW5lZFByb3BlcnR5O1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVN0eWxlcyhwcm9wZXJ0eSwgdmFsdWVzV2l0aERlZmF1bHRzKSB7XG4gIHZhciBzdHlsZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlc1dpdGhEZWZhdWx0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh2YWx1ZXNXaXRoRGVmYXVsdHNbaV0gfHwgdmFsdWVzV2l0aERlZmF1bHRzW2ldID09PSAwKSB7XG4gICAgICBzdHlsZXNbZ2VuZXJhdGVQcm9wZXJ0eShwcm9wZXJ0eSwgcG9zaXRpb25NYXAkMVtpXSldID0gdmFsdWVzV2l0aERlZmF1bHRzW2ldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG4vKipcbiAqIEVuYWJsZXMgc2hvcnRoYW5kIGZvciBkaXJlY3Rpb24tYmFzZWQgcHJvcGVydGllcy4gSXQgYWNjZXB0cyBhIHByb3BlcnR5IChoeXBoZW5hdGVkIG9yIGNhbWVsQ2FzZWQpIGFuZCB1cCB0byBmb3VyIHZhbHVlcyB0aGF0IG1hcCB0byB0b3AsIHJpZ2h0LCBib3R0b20sIGFuZCBsZWZ0LCByZXNwZWN0aXZlbHkuIFlvdSBjYW4gb3B0aW9uYWxseSBwYXNzIGFuIGVtcHR5IHN0cmluZyB0byBnZXQgb25seSB0aGUgZGlyZWN0aW9uYWwgdmFsdWVzIGFzIHByb3BlcnRpZXMuIFlvdSBjYW4gYWxzbyBvcHRpb25hbGx5IHBhc3MgYSBudWxsIGFyZ3VtZW50IGZvciBhIGRpcmVjdGlvbmFsIHZhbHVlIHRvIGlnbm9yZSBpdC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmRpcmVjdGlvbmFsUHJvcGVydHkoJ3BhZGRpbmcnLCAnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7ZGlyZWN0aW9uYWxQcm9wZXJ0eSgncGFkZGluZycsICcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdwYWRkaW5nVG9wJzogJzEycHgnLFxuICogICAncGFkZGluZ1JpZ2h0JzogJzI0cHgnLFxuICogICAncGFkZGluZ0JvdHRvbSc6ICczNnB4JyxcbiAqICAgJ3BhZGRpbmdMZWZ0JzogJzQ4cHgnXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiBkaXJlY3Rpb25hbFByb3BlcnR5KHByb3BlcnR5KSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICAvLyAgcHJldHRpZXItaWdub3JlXG4gIHZhciBmaXJzdFZhbHVlID0gdmFsdWVzWzBdLFxuICAgICAgX3ZhbHVlcyQgPSB2YWx1ZXNbMV0sXG4gICAgICBzZWNvbmRWYWx1ZSA9IF92YWx1ZXMkID09PSB2b2lkIDAgPyBmaXJzdFZhbHVlIDogX3ZhbHVlcyQsXG4gICAgICBfdmFsdWVzJDIgPSB2YWx1ZXNbMl0sXG4gICAgICB0aGlyZFZhbHVlID0gX3ZhbHVlcyQyID09PSB2b2lkIDAgPyBmaXJzdFZhbHVlIDogX3ZhbHVlcyQyLFxuICAgICAgX3ZhbHVlcyQzID0gdmFsdWVzWzNdLFxuICAgICAgZm91cnRoVmFsdWUgPSBfdmFsdWVzJDMgPT09IHZvaWQgMCA/IHNlY29uZFZhbHVlIDogX3ZhbHVlcyQzO1xuICB2YXIgdmFsdWVzV2l0aERlZmF1bHRzID0gW2ZpcnN0VmFsdWUsIHNlY29uZFZhbHVlLCB0aGlyZFZhbHVlLCBmb3VydGhWYWx1ZV07XG4gIHJldHVybiBnZW5lcmF0ZVN0eWxlcyhwcm9wZXJ0eSwgdmFsdWVzV2l0aERlZmF1bHRzKTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhIHN0cmluZyBlbmRzIHdpdGggc29tZXRoaW5nXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBlbmRzV2l0aChzdHJpbmcsIHN1ZmZpeCkge1xuICByZXR1cm4gc3RyaW5nLnN1YnN0cigtc3VmZml4Lmxlbmd0aCkgPT09IHN1ZmZpeDtcbn1cblxudmFyIGNzc1JlZ2V4JDEgPSAvXihbKy1dPyg/OlxcZCt8XFxkKlxcLlxcZCspKShbYS16XSp8JSkkLztcbi8qKlxuICogUmV0dXJucyBhIGdpdmVuIENTUyB2YWx1ZSBtaW51cyBpdHMgdW5pdCBvZiBtZWFzdXJlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICctLWRpbWVuc2lvbic6IHN0cmlwVW5pdCgnMTAwcHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAtLWRpbWVuc2lvbjogJHtzdHJpcFVuaXQoJzEwMHB4Jyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJy0tZGltZW5zaW9uJzogMTAwXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc3RyaXBVbml0KHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSByZXR1cm4gdmFsdWU7XG4gIHZhciBtYXRjaGVkVmFsdWUgPSB2YWx1ZS5tYXRjaChjc3NSZWdleCQxKTtcbiAgcmV0dXJuIG1hdGNoZWRWYWx1ZSA/IHBhcnNlRmxvYXQodmFsdWUpIDogdmFsdWU7XG59XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0aGF0IGNyZWF0ZXMgcGl4ZWwtdG8teCBjb252ZXJ0ZXJzXG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBweHRvRmFjdG9yeSA9IGZ1bmN0aW9uIHB4dG9GYWN0b3J5KHRvKSB7XG4gIHJldHVybiBmdW5jdGlvbiAocHh2YWwsIGJhc2UpIHtcbiAgICBpZiAoYmFzZSA9PT0gdm9pZCAwKSB7XG4gICAgICBiYXNlID0gJzE2cHgnO1xuICAgIH1cblxuICAgIHZhciBuZXdQeHZhbCA9IHB4dmFsO1xuICAgIHZhciBuZXdCYXNlID0gYmFzZTtcblxuICAgIGlmICh0eXBlb2YgcHh2YWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoIWVuZHNXaXRoKHB4dmFsLCAncHgnKSkge1xuICAgICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2OSwgdG8sIHB4dmFsKTtcbiAgICAgIH1cblxuICAgICAgbmV3UHh2YWwgPSBzdHJpcFVuaXQocHh2YWwpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgYmFzZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICghZW5kc1dpdGgoYmFzZSwgJ3B4JykpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzAsIHRvLCBiYXNlKTtcbiAgICAgIH1cblxuICAgICAgbmV3QmFzZSA9IHN0cmlwVW5pdChiYXNlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG5ld1B4dmFsID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzEsIHB4dmFsLCB0byk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBuZXdCYXNlID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzIsIGJhc2UsIHRvKTtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIiArIG5ld1B4dmFsIC8gbmV3QmFzZSArIHRvO1xuICB9O1xufTtcblxudmFyIHBpeGVsc3RvID0gcHh0b0ZhY3Rvcnk7XG5cbi8qKlxuICogQ29udmVydCBwaXhlbCB2YWx1ZSB0byBlbXMuIFRoZSBkZWZhdWx0IGJhc2UgdmFsdWUgaXMgMTZweCwgYnV0IGNhbiBiZSBjaGFuZ2VkIGJ5IHBhc3NpbmcgYVxuICogc2Vjb25kIGFyZ3VtZW50IHRvIHRoZSBmdW5jdGlvbi5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBweHZhbFxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbYmFzZT0nMTZweCddXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnaGVpZ2h0JzogZW0oJzE2cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBoZWlnaHQ6ICR7ZW0oJzE2cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgICdoZWlnaHQnOiAnMWVtJ1xuICogfVxuICovXG5cbnZhciBlbSA9IC8qI19fUFVSRV9fKi9waXhlbHN0bygnZW0nKTtcbnZhciBlbSQxID0gZW07XG5cbnZhciBjc3NSZWdleCA9IC9eKFsrLV0/KD86XFxkK3xcXGQqXFwuXFxkKykpKFthLXpdKnwlKSQvO1xuLyoqXG4gKiBSZXR1cm5zIGEgZ2l2ZW4gQ1NTIHZhbHVlIGFuZCBpdHMgdW5pdCBhcyBlbGVtZW50cyBvZiBhbiBhcnJheS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnLS1kaW1lbnNpb24nOiBnZXRWYWx1ZUFuZFVuaXQoJzEwMHB4JylbMF0sXG4gKiAgICctLXVuaXQnOiBnZXRWYWx1ZUFuZFVuaXQoJzEwMHB4JylbMV0sXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIC0tZGltZW5zaW9uOiAke2dldFZhbHVlQW5kVW5pdCgnMTAwcHgnKVswXX07XG4gKiAgIC0tdW5pdDogJHtnZXRWYWx1ZUFuZFVuaXQoJzEwMHB4JylbMV19O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJy0tZGltZW5zaW9uJzogMTAwLFxuICogICAnLS11bml0JzogJ3B4JyxcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBnZXRWYWx1ZUFuZFVuaXQodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHJldHVybiBbdmFsdWUsICcnXTtcbiAgdmFyIG1hdGNoZWRWYWx1ZSA9IHZhbHVlLm1hdGNoKGNzc1JlZ2V4KTtcbiAgaWYgKG1hdGNoZWRWYWx1ZSkgcmV0dXJuIFtwYXJzZUZsb2F0KHZhbHVlKSwgbWF0Y2hlZFZhbHVlWzJdXTtcbiAgcmV0dXJuIFt2YWx1ZSwgdW5kZWZpbmVkXTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZm9yIHRhcmdldGluZyBydWxlcyBpbiBhIHN0eWxlIGJsb2NrIGdlbmVyYXRlZCBieSBwb2xpc2hlZCBtb2R1bGVzIHRoYXQgbmVlZCAhaW1wb3J0YW50LWxldmVsIHNwZWNpZmljaXR5LiBDYW4gb3B0aW9uYWxseSBzcGVjaWZ5IGEgcnVsZSAob3IgcnVsZXMpIHRvIHRhcmdldCBzcGVjaWZpYyBydWxlcy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5pbXBvcnRhbnQoY292ZXIoKSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtpbXBvcnRhbnQoY292ZXIoKSl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICAncG9zaXRpb24nOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXG4gKiAgICd0b3AnOiAnMCAhaW1wb3J0YW50JyxcbiAqICAgJ3JpZ2h0OiAnMCAhaW1wb3J0YW50JyxcbiAqICAgJ2JvdHRvbSc6ICcwICFpbXBvcnRhbnQnLFxuICogICAnbGVmdDogJzAgIWltcG9ydGFudCdcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBpbXBvcnRhbnQoc3R5bGVCbG9jaywgcnVsZXMpIHtcbiAgaWYgKHR5cGVvZiBzdHlsZUJsb2NrICE9PSAnb2JqZWN0JyB8fCBzdHlsZUJsb2NrID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzUsIHR5cGVvZiBzdHlsZUJsb2NrKTtcbiAgfVxuXG4gIHZhciBuZXdTdHlsZUJsb2NrID0ge307XG4gIE9iamVjdC5rZXlzKHN0eWxlQmxvY2spLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICh0eXBlb2Ygc3R5bGVCbG9ja1trZXldID09PSAnb2JqZWN0JyAmJiBzdHlsZUJsb2NrW2tleV0gIT09IG51bGwpIHtcbiAgICAgIG5ld1N0eWxlQmxvY2tba2V5XSA9IGltcG9ydGFudChzdHlsZUJsb2NrW2tleV0sIHJ1bGVzKTtcbiAgICB9IGVsc2UgaWYgKCFydWxlcyB8fCBydWxlcyAmJiAocnVsZXMgPT09IGtleSB8fCBydWxlcy5pbmRleE9mKGtleSkgPj0gMCkpIHtcbiAgICAgIG5ld1N0eWxlQmxvY2tba2V5XSA9IHN0eWxlQmxvY2tba2V5XSArIFwiICFpbXBvcnRhbnRcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVCbG9ja1trZXldID0gc3R5bGVCbG9ja1trZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBuZXdTdHlsZUJsb2NrO1xufVxuXG52YXIgcmF0aW9OYW1lcyA9IHtcbiAgbWlub3JTZWNvbmQ6IDEuMDY3LFxuICBtYWpvclNlY29uZDogMS4xMjUsXG4gIG1pbm9yVGhpcmQ6IDEuMixcbiAgbWFqb3JUaGlyZDogMS4yNSxcbiAgcGVyZmVjdEZvdXJ0aDogMS4zMzMsXG4gIGF1Z0ZvdXJ0aDogMS40MTQsXG4gIHBlcmZlY3RGaWZ0aDogMS41LFxuICBtaW5vclNpeHRoOiAxLjYsXG4gIGdvbGRlblNlY3Rpb246IDEuNjE4LFxuICBtYWpvclNpeHRoOiAxLjY2NyxcbiAgbWlub3JTZXZlbnRoOiAxLjc3OCxcbiAgbWFqb3JTZXZlbnRoOiAxLjg3NSxcbiAgb2N0YXZlOiAyLFxuICBtYWpvclRlbnRoOiAyLjUsXG4gIG1ham9yRWxldmVudGg6IDIuNjY3LFxuICBtYWpvclR3ZWxmdGg6IDMsXG4gIGRvdWJsZU9jdGF2ZTogNFxufTtcblxuZnVuY3Rpb24gZ2V0UmF0aW8ocmF0aW9OYW1lKSB7XG4gIHJldHVybiByYXRpb05hbWVzW3JhdGlvTmFtZV07XG59XG4vKipcbiAqIEVzdGFibGlzaCBjb25zaXN0ZW50IG1lYXN1cmVtZW50cyBhbmQgc3BhY2lhbCByZWxhdGlvbnNoaXBzIHRocm91Z2hvdXQgeW91ciBwcm9qZWN0cyBieSBpbmNyZW1lbnRpbmcgYW4gZW0gb3IgcmVtIHZhbHVlIHVwIG9yIGRvd24gYSBkZWZpbmVkIHNjYWxlLiBXZSBwcm92aWRlIGEgbGlzdCBvZiBjb21tb25seSB1c2VkIHNjYWxlcyBhcyBwcmUtZGVmaW5lZCB2YXJpYWJsZXMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAgLy8gSW5jcmVtZW50IHR3byBzdGVwcyB1cCB0aGUgZGVmYXVsdCBzY2FsZVxuICogICAnZm9udFNpemUnOiBtb2R1bGFyU2NhbGUoMilcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgIC8vIEluY3JlbWVudCB0d28gc3RlcHMgdXAgdGhlIGRlZmF1bHQgc2NhbGVcbiAqICAgZm9udFNpemU6ICR7bW9kdWxhclNjYWxlKDIpfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2ZvbnRTaXplJzogJzEuNzc2ODllbSdcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIG1vZHVsYXJTY2FsZShzdGVwcywgYmFzZSwgcmF0aW8pIHtcbiAgaWYgKGJhc2UgPT09IHZvaWQgMCkge1xuICAgIGJhc2UgPSAnMWVtJztcbiAgfVxuXG4gIGlmIChyYXRpbyA9PT0gdm9pZCAwKSB7XG4gICAgcmF0aW8gPSAxLjMzMztcbiAgfVxuXG4gIGlmICh0eXBlb2Ygc3RlcHMgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDIpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiByYXRpbyA9PT0gJ3N0cmluZycgJiYgIXJhdGlvTmFtZXNbcmF0aW9dKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDMpO1xuICB9XG5cbiAgdmFyIF9yZWYgPSB0eXBlb2YgYmFzZSA9PT0gJ3N0cmluZycgPyBnZXRWYWx1ZUFuZFVuaXQoYmFzZSkgOiBbYmFzZSwgJyddLFxuICAgICAgcmVhbEJhc2UgPSBfcmVmWzBdLFxuICAgICAgdW5pdCA9IF9yZWZbMV07XG5cbiAgdmFyIHJlYWxSYXRpbyA9IHR5cGVvZiByYXRpbyA9PT0gJ3N0cmluZycgPyBnZXRSYXRpbyhyYXRpbykgOiByYXRpbztcblxuICBpZiAodHlwZW9mIHJlYWxCYXNlID09PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQ0LCBiYXNlKTtcbiAgfVxuXG4gIHJldHVybiBcIlwiICsgcmVhbEJhc2UgKiBNYXRoLnBvdyhyZWFsUmF0aW8sIHN0ZXBzKSArICh1bml0IHx8ICcnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IHBpeGVsIHZhbHVlIHRvIHJlbXMuIFRoZSBkZWZhdWx0IGJhc2UgdmFsdWUgaXMgMTZweCwgYnV0IGNhbiBiZSBjaGFuZ2VkIGJ5IHBhc3NpbmcgYVxuICogc2Vjb25kIGFyZ3VtZW50IHRvIHRoZSBmdW5jdGlvbi5cbiAqIEBmdW5jdGlvblxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBweHZhbFxuICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSBbYmFzZT0nMTZweCddXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAnaGVpZ2h0JzogcmVtKCcxNnB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgaGVpZ2h0OiAke3JlbSgnMTZweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgJ2hlaWdodCc6ICcxcmVtJ1xuICogfVxuICovXG5cbnZhciByZW0gPSAvKiNfX1BVUkVfXyovcGl4ZWxzdG8oJ3JlbScpO1xudmFyIHJlbSQxID0gcmVtO1xuXG52YXIgZGVmYXVsdEZvbnRTaXplID0gMTY7XG5cbmZ1bmN0aW9uIGNvbnZlcnRCYXNlKGJhc2UpIHtcbiAgdmFyIGRlY29uc3RydWN0ZWRWYWx1ZSA9IGdldFZhbHVlQW5kVW5pdChiYXNlKTtcblxuICBpZiAoZGVjb25zdHJ1Y3RlZFZhbHVlWzFdID09PSAncHgnKSB7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoYmFzZSk7XG4gIH1cblxuICBpZiAoZGVjb25zdHJ1Y3RlZFZhbHVlWzFdID09PSAnJScpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChiYXNlKSAvIDEwMCAqIGRlZmF1bHRGb250U2l6ZTtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDc4LCBkZWNvbnN0cnVjdGVkVmFsdWVbMV0pO1xufVxuXG5mdW5jdGlvbiBnZXRCYXNlRnJvbURvYygpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICB2YXIgcm9vdEZvbnRTaXplID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplO1xuICAgIHJldHVybiByb290Rm9udFNpemUgPyBjb252ZXJ0QmFzZShyb290Rm9udFNpemUpIDogZGVmYXVsdEZvbnRTaXplO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgKi9cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbiAgcmV0dXJuIGRlZmF1bHRGb250U2l6ZTtcbn1cbi8qKlxuICogQ29udmVydCByZW0gdmFsdWVzIHRvIHB4LiBCeSBkZWZhdWx0LCB0aGUgYmFzZSB2YWx1ZSBpcyBwdWxsZWQgZnJvbSB0aGUgZm9udC1zaXplIHByb3BlcnR5IG9uIHRoZSByb290IGVsZW1lbnQgKGlmIGl0IGlzIHNldCBpbiAlIG9yIHB4KS4gSXQgZGVmYXVsdHMgdG8gMTZweCBpZiBub3QgZm91bmQgb24gdGhlIHJvb3QuIFlvdSBjYW4gYWxzbyBvdmVycmlkZSB0aGUgYmFzZSB2YWx1ZSBieSBwcm92aWRpbmcgeW91ciBvd24gYmFzZSBpbiAlIG9yIHB4LlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgJ2hlaWdodCc6IHJlbVRvUHgoJzEuNnJlbScpXG4gKiAgICdoZWlnaHQnOiByZW1Ub1B4KCcxLjZyZW0nLCAnMTBweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGhlaWdodDogJHtyZW1Ub1B4KCcxLjZyZW0nKX1cbiAqICAgaGVpZ2h0OiAke3JlbVRvUHgoJzEuNnJlbScsICcxMHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICAnaGVpZ2h0JzogJzI1LjZweCcsXG4gKiAgICdoZWlnaHQnOiAnMTZweCcsXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiByZW1Ub1B4KHZhbHVlLCBiYXNlKSB7XG4gIHZhciBkZWNvbnN0cnVjdGVkVmFsdWUgPSBnZXRWYWx1ZUFuZFVuaXQodmFsdWUpO1xuXG4gIGlmIChkZWNvbnN0cnVjdGVkVmFsdWVbMV0gIT09ICdyZW0nICYmIGRlY29uc3RydWN0ZWRWYWx1ZVsxXSAhPT0gJycpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig3NywgZGVjb25zdHJ1Y3RlZFZhbHVlWzFdKTtcbiAgfVxuXG4gIHZhciBuZXdCYXNlID0gYmFzZSA/IGNvbnZlcnRCYXNlKGJhc2UpIDogZ2V0QmFzZUZyb21Eb2MoKTtcbiAgcmV0dXJuIGRlY29uc3RydWN0ZWRWYWx1ZVswXSAqIG5ld0Jhc2UgKyBcInB4XCI7XG59XG5cbnZhciBmdW5jdGlvbnNNYXAkMyA9IHtcbiAgYmFjazogJ2N1YmljLWJlemllcigwLjYwMCwgLTAuMjgwLCAwLjczNSwgMC4wNDUpJyxcbiAgY2lyYzogJ2N1YmljLWJlemllcigwLjYwMCwgIDAuMDQwLCAwLjk4MCwgMC4zMzUpJyxcbiAgY3ViaWM6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA1NSwgMC42NzUsIDAuMTkwKScsXG4gIGV4cG86ICdjdWJpYy1iZXppZXIoMC45NTAsICAwLjA1MCwgMC43OTUsIDAuMDM1KScsXG4gIHF1YWQ6ICdjdWJpYy1iZXppZXIoMC41NTAsICAwLjA4NSwgMC42ODAsIDAuNTMwKScsXG4gIHF1YXJ0OiAnY3ViaWMtYmV6aWVyKDAuODk1LCAgMC4wMzAsIDAuNjg1LCAwLjIyMCknLFxuICBxdWludDogJ2N1YmljLWJlemllcigwLjc1NSwgIDAuMDUwLCAwLjg1NSwgMC4wNjApJyxcbiAgc2luZTogJ2N1YmljLWJlemllcigwLjQ3MCwgIDAuMDAwLCAwLjc0NSwgMC43MTUpJ1xufTtcbi8qKlxuICogU3RyaW5nIHRvIHJlcHJlc2VudCBjb21tb24gZWFzaW5nIGZ1bmN0aW9ucyBhcyBkZW1vbnN0cmF0ZWQgaGVyZTogKGdpdGh1Yi5jb20vamF1a2lhL2Vhc2llKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogZWFzZUluKCdxdWFkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJHtlYXNlSW4oJ3F1YWQnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdkaXYnOiB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiAnY3ViaWMtYmV6aWVyKDAuNTUwLCAgMC4wODUsIDAuNjgwLCAwLjUzMCknLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIGVhc2VJbihmdW5jdGlvbk5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uc01hcCQzW2Z1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV07XG59XG5cbnZhciBmdW5jdGlvbnNNYXAkMiA9IHtcbiAgYmFjazogJ2N1YmljLWJlemllcigwLjY4MCwgLTAuNTUwLCAwLjI2NSwgMS41NTApJyxcbiAgY2lyYzogJ2N1YmljLWJlemllcigwLjc4NSwgIDAuMTM1LCAwLjE1MCwgMC44NjApJyxcbiAgY3ViaWM6ICdjdWJpYy1iZXppZXIoMC42NDUsICAwLjA0NSwgMC4zNTUsIDEuMDAwKScsXG4gIGV4cG86ICdjdWJpYy1iZXppZXIoMS4wMDAsICAwLjAwMCwgMC4wMDAsIDEuMDAwKScsXG4gIHF1YWQ6ICdjdWJpYy1iZXppZXIoMC40NTUsICAwLjAzMCwgMC41MTUsIDAuOTU1KScsXG4gIHF1YXJ0OiAnY3ViaWMtYmV6aWVyKDAuNzcwLCAgMC4wMDAsIDAuMTc1LCAxLjAwMCknLFxuICBxdWludDogJ2N1YmljLWJlemllcigwLjg2MCwgIDAuMDAwLCAwLjA3MCwgMS4wMDApJyxcbiAgc2luZTogJ2N1YmljLWJlemllcigwLjQ0NSwgIDAuMDUwLCAwLjU1MCwgMC45NTApJ1xufTtcbi8qKlxuICogU3RyaW5nIHRvIHJlcHJlc2VudCBjb21tb24gZWFzaW5nIGZ1bmN0aW9ucyBhcyBkZW1vbnN0cmF0ZWQgaGVyZTogKGdpdGh1Yi5jb20vamF1a2lhL2Vhc2llKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogZWFzZUluT3V0KCdxdWFkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJHtlYXNlSW5PdXQoJ3F1YWQnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdkaXYnOiB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiAnY3ViaWMtYmV6aWVyKDAuNDU1LCAgMC4wMzAsIDAuNTE1LCAwLjk1NSknLFxuICogfVxuICovXG5cbmZ1bmN0aW9uIGVhc2VJbk91dChmdW5jdGlvbk5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uc01hcCQyW2Z1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV07XG59XG5cbnZhciBmdW5jdGlvbnNNYXAkMSA9IHtcbiAgYmFjazogJ2N1YmljLWJlemllcigwLjE3NSwgIDAuODg1LCAwLjMyMCwgMS4yNzUpJyxcbiAgY3ViaWM6ICdjdWJpYy1iZXppZXIoMC4yMTUsICAwLjYxMCwgMC4zNTUsIDEuMDAwKScsXG4gIGNpcmM6ICdjdWJpYy1iZXppZXIoMC4wNzUsICAwLjgyMCwgMC4xNjUsIDEuMDAwKScsXG4gIGV4cG86ICdjdWJpYy1iZXppZXIoMC4xOTAsICAxLjAwMCwgMC4yMjAsIDEuMDAwKScsXG4gIHF1YWQ6ICdjdWJpYy1iZXppZXIoMC4yNTAsICAwLjQ2MCwgMC40NTAsIDAuOTQwKScsXG4gIHF1YXJ0OiAnY3ViaWMtYmV6aWVyKDAuMTY1LCAgMC44NDAsIDAuNDQwLCAxLjAwMCknLFxuICBxdWludDogJ2N1YmljLWJlemllcigwLjIzMCwgIDEuMDAwLCAwLjMyMCwgMS4wMDApJyxcbiAgc2luZTogJ2N1YmljLWJlemllcigwLjM5MCwgIDAuNTc1LCAwLjU2NSwgMS4wMDApJ1xufTtcbi8qKlxuICogU3RyaW5nIHRvIHJlcHJlc2VudCBjb21tb24gZWFzaW5nIGZ1bmN0aW9ucyBhcyBkZW1vbnN0cmF0ZWQgaGVyZTogKGdpdGh1Yi5jb20vamF1a2lhL2Vhc2llKS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogZWFzZU91dCgncXVhZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqICBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICB0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb246ICR7ZWFzZU91dCgncXVhZCcpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ3RyYW5zaXRpb25UaW1pbmdGdW5jdGlvbic6ICdjdWJpYy1iZXppZXIoMC4yNTAsICAwLjQ2MCwgMC40NTAsIDAuOTQwKScsXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZWFzZU91dChmdW5jdGlvbk5hbWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uc01hcCQxW2Z1bmN0aW9uTmFtZS50b0xvd2VyQ2FzZSgpLnRyaW0oKV07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIENTUyBjYWxjIGZvcm11bGEgZm9yIGxpbmVhciBpbnRlcnBvbGF0aW9uIG9mIGEgcHJvcGVydHkgYmV0d2VlbiB0d28gdmFsdWVzLiBBY2NlcHRzIG9wdGlvbmFsIG1pblNjcmVlbiAoZGVmYXVsdHMgdG8gJzMyMHB4JykgYW5kIG1heFNjcmVlbiAoZGVmYXVsdHMgdG8gJzEyMDBweCcpLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGZvbnRTaXplOiBiZXR3ZWVuKCcyMHB4JywgJzEwMHB4JywgJzQwMHB4JywgJzEwMDBweCcpLFxuICogICBmb250U2l6ZTogYmV0d2VlbignMjBweCcsICcxMDBweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGZvbnRTaXplOiAke2JldHdlZW4oJzIwcHgnLCAnMTAwcHgnLCAnNDAwcHgnLCAnMTAwMHB4Jyl9O1xuICogICBmb250U2l6ZTogJHtiZXR3ZWVuKCcyMHB4JywgJzEwMHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGgxOiB7XG4gKiAgICdmb250U2l6ZSc6ICdjYWxjKC0zMy4zMzMzMzMzMzMzMzMzNHB4ICsgMTMuMzMzMzMzMzMzMzMzMzM0dncpJyxcbiAqICAgJ2ZvbnRTaXplJzogJ2NhbGMoLTkuMDkwOTA5MDkwOTA5MDkzcHggKyA5LjA5MDkwOTA5MDkwOTA5MnZ3KSdcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBiZXR3ZWVuKGZyb21TaXplLCB0b1NpemUsIG1pblNjcmVlbiwgbWF4U2NyZWVuKSB7XG4gIGlmIChtaW5TY3JlZW4gPT09IHZvaWQgMCkge1xuICAgIG1pblNjcmVlbiA9ICczMjBweCc7XG4gIH1cblxuICBpZiAobWF4U2NyZWVuID09PSB2b2lkIDApIHtcbiAgICBtYXhTY3JlZW4gPSAnMTIwMHB4JztcbiAgfVxuXG4gIHZhciBfZ2V0VmFsdWVBbmRVbml0ID0gZ2V0VmFsdWVBbmRVbml0KGZyb21TaXplKSxcbiAgICAgIHVuaXRsZXNzRnJvbVNpemUgPSBfZ2V0VmFsdWVBbmRVbml0WzBdLFxuICAgICAgZnJvbVNpemVVbml0ID0gX2dldFZhbHVlQW5kVW5pdFsxXTtcblxuICB2YXIgX2dldFZhbHVlQW5kVW5pdDIgPSBnZXRWYWx1ZUFuZFVuaXQodG9TaXplKSxcbiAgICAgIHVuaXRsZXNzVG9TaXplID0gX2dldFZhbHVlQW5kVW5pdDJbMF0sXG4gICAgICB0b1NpemVVbml0ID0gX2dldFZhbHVlQW5kVW5pdDJbMV07XG5cbiAgdmFyIF9nZXRWYWx1ZUFuZFVuaXQzID0gZ2V0VmFsdWVBbmRVbml0KG1pblNjcmVlbiksXG4gICAgICB1bml0bGVzc01pblNjcmVlbiA9IF9nZXRWYWx1ZUFuZFVuaXQzWzBdLFxuICAgICAgbWluU2NyZWVuVW5pdCA9IF9nZXRWYWx1ZUFuZFVuaXQzWzFdO1xuXG4gIHZhciBfZ2V0VmFsdWVBbmRVbml0NCA9IGdldFZhbHVlQW5kVW5pdChtYXhTY3JlZW4pLFxuICAgICAgdW5pdGxlc3NNYXhTY3JlZW4gPSBfZ2V0VmFsdWVBbmRVbml0NFswXSxcbiAgICAgIG1heFNjcmVlblVuaXQgPSBfZ2V0VmFsdWVBbmRVbml0NFsxXTtcblxuICBpZiAodHlwZW9mIHVuaXRsZXNzTWluU2NyZWVuICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgdW5pdGxlc3NNYXhTY3JlZW4gIT09ICdudW1iZXInIHx8ICFtaW5TY3JlZW5Vbml0IHx8ICFtYXhTY3JlZW5Vbml0IHx8IG1pblNjcmVlblVuaXQgIT09IG1heFNjcmVlblVuaXQpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0Nyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHVuaXRsZXNzRnJvbVNpemUgIT09ICdudW1iZXInIHx8IHR5cGVvZiB1bml0bGVzc1RvU2l6ZSAhPT0gJ251bWJlcicgfHwgZnJvbVNpemVVbml0ICE9PSB0b1NpemVVbml0KSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDgpO1xuICB9XG5cbiAgaWYgKGZyb21TaXplVW5pdCAhPT0gbWluU2NyZWVuVW5pdCB8fCB0b1NpemVVbml0ICE9PSBtYXhTY3JlZW5Vbml0KSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNzYpO1xuICB9XG5cbiAgdmFyIHNsb3BlID0gKHVuaXRsZXNzRnJvbVNpemUgLSB1bml0bGVzc1RvU2l6ZSkgLyAodW5pdGxlc3NNaW5TY3JlZW4gLSB1bml0bGVzc01heFNjcmVlbik7XG4gIHZhciBiYXNlID0gdW5pdGxlc3NUb1NpemUgLSBzbG9wZSAqIHVuaXRsZXNzTWF4U2NyZWVuO1xuICByZXR1cm4gXCJjYWxjKFwiICsgYmFzZS50b0ZpeGVkKDIpICsgKGZyb21TaXplVW5pdCB8fCAnJykgKyBcIiArIFwiICsgKDEwMCAqIHNsb3BlKS50b0ZpeGVkKDIpICsgXCJ2dylcIjtcbn1cblxuLyoqXG4gKiBDU1MgdG8gY29udGFpbiBhIGZsb2F0IChjcmVkaXQgdG8gQ1NTTW9qbykuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgIC4uLmNsZWFyRml4KCksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Y2xlYXJGaXgoKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJyY6OmFmdGVyJzoge1xuICogICAnY2xlYXInOiAnYm90aCcsXG4gKiAgICdjb250ZW50JzogJ1wiXCInLFxuICogICAnZGlzcGxheSc6ICd0YWJsZSdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gY2xlYXJGaXgocGFyZW50KSB7XG4gIHZhciBfcmVmO1xuXG4gIGlmIChwYXJlbnQgPT09IHZvaWQgMCkge1xuICAgIHBhcmVudCA9ICcmJztcbiAgfVxuXG4gIHZhciBwc2V1ZG9TZWxlY3RvciA9IHBhcmVudCArIFwiOjphZnRlclwiO1xuICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW3BzZXVkb1NlbGVjdG9yXSA9IHtcbiAgICBjbGVhcjogJ2JvdGgnLFxuICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICBkaXNwbGF5OiAndGFibGUnXG4gIH0sIF9yZWY7XG59XG5cbi8qKlxuICogQ1NTIHRvIGZ1bGx5IGNvdmVyIGFuIGFyZWEuIENhbiBvcHRpb25hbGx5IGJlIHBhc3NlZCBhbiBvZmZzZXQgdG8gYWN0IGFzIGEgXCJwYWRkaW5nXCIuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uY292ZXIoKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2NvdmVyKCl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICAncG9zaXRpb24nOiAnYWJzb2x1dGUnLFxuICogICAndG9wJzogJzAnLFxuICogICAncmlnaHQ6ICcwJyxcbiAqICAgJ2JvdHRvbSc6ICcwJyxcbiAqICAgJ2xlZnQ6ICcwJ1xuICogfVxuICovXG5mdW5jdGlvbiBjb3ZlcihvZmZzZXQpIHtcbiAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7XG4gICAgb2Zmc2V0ID0gMDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiBvZmZzZXQsXG4gICAgcmlnaHQ6IG9mZnNldCxcbiAgICBib3R0b206IG9mZnNldCxcbiAgICBsZWZ0OiBvZmZzZXRcbiAgfTtcbn1cblxuLyoqXG4gKiBDU1MgdG8gcmVwcmVzZW50IHRydW5jYXRlZCB0ZXh0IHdpdGggYW4gZWxsaXBzaXMuIFlvdSBjYW4gb3B0aW9uYWxseSBwYXNzIGEgbWF4LXdpZHRoIGFuZCBudW1iZXIgb2YgbGluZXMgYmVmb3JlIHRydW5jYXRpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uZWxsaXBzaXMoJzI1MHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtlbGxpcHNpcygnMjUwcHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2OiB7XG4gKiAgICdkaXNwbGF5JzogJ2lubGluZS1ibG9jaycsXG4gKiAgICdtYXhXaWR0aCc6ICcyNTBweCcsXG4gKiAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICogICAndGV4dE92ZXJmbG93JzogJ2VsbGlwc2lzJyxcbiAqICAgJ3doaXRlU3BhY2UnOiAnbm93cmFwJyxcbiAqICAgJ3dvcmRXcmFwJzogJ25vcm1hbCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gZWxsaXBzaXMod2lkdGgsIGxpbmVzKSB7XG4gIGlmIChsaW5lcyA9PT0gdm9pZCAwKSB7XG4gICAgbGluZXMgPSAxO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICBtYXhXaWR0aDogd2lkdGggfHwgJzEwMCUnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgd29yZFdyYXA6ICdub3JtYWwnXG4gIH07XG4gIHJldHVybiBsaW5lcyA+IDEgPyBfZXh0ZW5kcyh7fSwgc3R5bGVzLCB7XG4gICAgV2Via2l0Qm94T3JpZW50OiAndmVydGljYWwnLFxuICAgIFdlYmtpdExpbmVDbGFtcDogbGluZXMsXG4gICAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcbiAgICB3aGl0ZVNwYWNlOiAnbm9ybWFsJ1xuICB9KSA6IHN0eWxlcztcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvLCBhbGxvd0FycmF5TGlrZSkgeyB2YXIgaXQgPSB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSB8fCBvW1wiQEBpdGVyYXRvclwiXTsgaWYgKGl0KSByZXR1cm4gKGl0ID0gaXQuY2FsbChvKSkubmV4dC5iaW5kKGl0KTsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKGl0ID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSB8fCBhbGxvd0FycmF5TGlrZSAmJiBvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgeyBpZiAoaXQpIG8gPSBpdDsgdmFyIGkgPSAwOyByZXR1cm4gZnVuY3Rpb24gKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qKlxuICogUmV0dXJucyBhIHNldCBvZiBtZWRpYSBxdWVyaWVzIHRoYXQgcmVzaXplcyBhIHByb3BlcnR5IChvciBzZXQgb2YgcHJvcGVydGllcykgYmV0d2VlbiBhIHByb3ZpZGVkIGZyb21TaXplIGFuZCB0b1NpemUuIEFjY2VwdHMgb3B0aW9uYWwgbWluU2NyZWVuIChkZWZhdWx0cyB0byAnMzIwcHgnKSBhbmQgbWF4U2NyZWVuIChkZWZhdWx0cyB0byAnMTIwMHB4JykgdG8gY29uc3RyYWluIHRoZSBpbnRlcnBvbGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmZsdWlkUmFuZ2UoXG4gKiAgICB7XG4gKiAgICAgICAgcHJvcDogJ3BhZGRpbmcnLFxuICogICAgICAgIGZyb21TaXplOiAnMjBweCcsXG4gKiAgICAgICAgdG9TaXplOiAnMTAwcHgnLFxuICogICAgICB9LFxuICogICAgICAnNDAwcHgnLFxuICogICAgICAnMTAwMHB4JyxcbiAqICAgIClcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtmbHVpZFJhbmdlKFxuICogICAgICB7XG4gKiAgICAgICAgcHJvcDogJ3BhZGRpbmcnLFxuICogICAgICAgIGZyb21TaXplOiAnMjBweCcsXG4gKiAgICAgICAgdG9TaXplOiAnMTAwcHgnLFxuICogICAgICB9LFxuICogICAgICAnNDAwcHgnLFxuICogICAgICAnMTAwMHB4JyxcbiAqICAgICl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICBcIkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpXCI6IE9iamVjdCB7XG4gKiAgICAgXCJwYWRkaW5nXCI6IFwiMTAwcHhcIixcbiAqICAgfSxcbiAqICAgXCJAbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpXCI6IE9iamVjdCB7XG4gKiAgICAgXCJwYWRkaW5nXCI6IFwiY2FsYygtMzMuMzMzMzMzMzMzMzMzMzRweCArIDEzLjMzMzMzMzMzMzMzMzMzNHZ3KVwiLFxuICogICB9LFxuICogICBcInBhZGRpbmdcIjogXCIyMHB4XCIsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGZsdWlkUmFuZ2UoY3NzUHJvcCwgbWluU2NyZWVuLCBtYXhTY3JlZW4pIHtcbiAgaWYgKG1pblNjcmVlbiA9PT0gdm9pZCAwKSB7XG4gICAgbWluU2NyZWVuID0gJzMyMHB4JztcbiAgfVxuXG4gIGlmIChtYXhTY3JlZW4gPT09IHZvaWQgMCkge1xuICAgIG1heFNjcmVlbiA9ICcxMjAwcHgnO1xuICB9XG5cbiAgaWYgKCFBcnJheS5pc0FycmF5KGNzc1Byb3ApICYmIHR5cGVvZiBjc3NQcm9wICE9PSAnb2JqZWN0JyB8fCBjc3NQcm9wID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNDkpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY3NzUHJvcCkpIHtcbiAgICB2YXIgbWVkaWFRdWVyaWVzID0ge307XG4gICAgdmFyIGZhbGxiYWNrcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShjc3NQcm9wKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBfZXh0ZW5kczIsIF9leHRlbmRzMztcblxuICAgICAgdmFyIG9iaiA9IF9zdGVwLnZhbHVlO1xuXG4gICAgICBpZiAoIW9iai5wcm9wIHx8ICFvYmouZnJvbVNpemUgfHwgIW9iai50b1NpemUpIHtcbiAgICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTApO1xuICAgICAgfVxuXG4gICAgICBmYWxsYmFja3Nbb2JqLnByb3BdID0gb2JqLmZyb21TaXplO1xuICAgICAgbWVkaWFRdWVyaWVzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWluU2NyZWVuICsgXCIpXCJdID0gX2V4dGVuZHMoe30sIG1lZGlhUXVlcmllc1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1pblNjcmVlbiArIFwiKVwiXSwgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbb2JqLnByb3BdID0gYmV0d2VlbihvYmouZnJvbVNpemUsIG9iai50b1NpemUsIG1pblNjcmVlbiwgbWF4U2NyZWVuKSwgX2V4dGVuZHMyKSk7XG4gICAgICBtZWRpYVF1ZXJpZXNbXCJAbWVkaWEgKG1pbi13aWR0aDogXCIgKyBtYXhTY3JlZW4gKyBcIilcIl0gPSBfZXh0ZW5kcyh7fSwgbWVkaWFRdWVyaWVzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWF4U2NyZWVuICsgXCIpXCJdLCAoX2V4dGVuZHMzID0ge30sIF9leHRlbmRzM1tvYmoucHJvcF0gPSBvYmoudG9TaXplLCBfZXh0ZW5kczMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGZhbGxiYWNrcywgbWVkaWFRdWVyaWVzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzO1xuXG4gICAgaWYgKCFjc3NQcm9wLnByb3AgfHwgIWNzc1Byb3AuZnJvbVNpemUgfHwgIWNzc1Byb3AudG9TaXplKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1MSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWYzID0ge30sIF9yZWYzW2Nzc1Byb3AucHJvcF0gPSBjc3NQcm9wLmZyb21TaXplLCBfcmVmM1tcIkBtZWRpYSAobWluLXdpZHRoOiBcIiArIG1pblNjcmVlbiArIFwiKVwiXSA9IChfcmVmID0ge30sIF9yZWZbY3NzUHJvcC5wcm9wXSA9IGJldHdlZW4oY3NzUHJvcC5mcm9tU2l6ZSwgY3NzUHJvcC50b1NpemUsIG1pblNjcmVlbiwgbWF4U2NyZWVuKSwgX3JlZiksIF9yZWYzW1wiQG1lZGlhIChtaW4td2lkdGg6IFwiICsgbWF4U2NyZWVuICsgXCIpXCJdID0gKF9yZWYyID0ge30sIF9yZWYyW2Nzc1Byb3AucHJvcF0gPSBjc3NQcm9wLnRvU2l6ZSwgX3JlZjIpLCBfcmVmMztcbiAgfVxufVxuXG52YXIgZGF0YVVSSVJlZ2V4ID0gL15cXHMqZGF0YTooW2Etel0rXFwvW2Etei1dKyg7W2Etei1dKz1bYS16LV0rKT8pPyg7Y2hhcnNldD1bYS16MC05LV0rKT8oO2Jhc2U2NCk/LFthLXowLTkhJCYnLCgpKissOz1cXC0uX346QC8/JVxcc10qXFxzKiQvaTtcbnZhciBmb3JtYXRIaW50TWFwID0ge1xuICB3b2ZmOiAnd29mZicsXG4gIHdvZmYyOiAnd29mZjInLFxuICB0dGY6ICd0cnVldHlwZScsXG4gIG90ZjogJ29wZW50eXBlJyxcbiAgZW90OiAnZW1iZWRkZWQtb3BlbnR5cGUnLFxuICBzdmc6ICdzdmcnLFxuICBzdmd6OiAnc3ZnJ1xufTtcblxuZnVuY3Rpb24gZ2VuZXJhdGVGb3JtYXRIaW50KGZvcm1hdCwgZm9ybWF0SGludCkge1xuICBpZiAoIWZvcm1hdEhpbnQpIHJldHVybiAnJztcbiAgcmV0dXJuIFwiIGZvcm1hdChcXFwiXCIgKyBmb3JtYXRIaW50TWFwW2Zvcm1hdF0gKyBcIlxcXCIpXCI7XG59XG5cbmZ1bmN0aW9uIGlzRGF0YVVSSShmb250RmlsZVBhdGgpIHtcbiAgcmV0dXJuICEhZm9udEZpbGVQYXRoLnJlcGxhY2UoL1xccysvZywgJyAnKS5tYXRjaChkYXRhVVJJUmVnZXgpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUZpbGVSZWZlcmVuY2VzKGZvbnRGaWxlUGF0aCwgZmlsZUZvcm1hdHMsIGZvcm1hdEhpbnQpIHtcbiAgaWYgKGlzRGF0YVVSSShmb250RmlsZVBhdGgpKSB7XG4gICAgcmV0dXJuIFwidXJsKFxcXCJcIiArIGZvbnRGaWxlUGF0aCArIFwiXFxcIilcIiArIGdlbmVyYXRlRm9ybWF0SGludChmaWxlRm9ybWF0c1swXSwgZm9ybWF0SGludCk7XG4gIH1cblxuICB2YXIgZmlsZUZvbnRSZWZlcmVuY2VzID0gZmlsZUZvcm1hdHMubWFwKGZ1bmN0aW9uIChmb3JtYXQpIHtcbiAgICByZXR1cm4gXCJ1cmwoXFxcIlwiICsgZm9udEZpbGVQYXRoICsgXCIuXCIgKyBmb3JtYXQgKyBcIlxcXCIpXCIgKyBnZW5lcmF0ZUZvcm1hdEhpbnQoZm9ybWF0LCBmb3JtYXRIaW50KTtcbiAgfSk7XG4gIHJldHVybiBmaWxlRm9udFJlZmVyZW5jZXMuam9pbignLCAnKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVMb2NhbFJlZmVyZW5jZXMobG9jYWxGb250cykge1xuICB2YXIgbG9jYWxGb250UmVmZXJlbmNlcyA9IGxvY2FsRm9udHMubWFwKGZ1bmN0aW9uIChmb250KSB7XG4gICAgcmV0dXJuIFwibG9jYWwoXFxcIlwiICsgZm9udCArIFwiXFxcIilcIjtcbiAgfSk7XG4gIHJldHVybiBsb2NhbEZvbnRSZWZlcmVuY2VzLmpvaW4oJywgJyk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlU291cmNlcyhmb250RmlsZVBhdGgsIGxvY2FsRm9udHMsIGZpbGVGb3JtYXRzLCBmb3JtYXRIaW50KSB7XG4gIHZhciBmb250UmVmZXJlbmNlcyA9IFtdO1xuICBpZiAobG9jYWxGb250cykgZm9udFJlZmVyZW5jZXMucHVzaChnZW5lcmF0ZUxvY2FsUmVmZXJlbmNlcyhsb2NhbEZvbnRzKSk7XG5cbiAgaWYgKGZvbnRGaWxlUGF0aCkge1xuICAgIGZvbnRSZWZlcmVuY2VzLnB1c2goZ2VuZXJhdGVGaWxlUmVmZXJlbmNlcyhmb250RmlsZVBhdGgsIGZpbGVGb3JtYXRzLCBmb3JtYXRIaW50KSk7XG4gIH1cblxuICByZXR1cm4gZm9udFJlZmVyZW5jZXMuam9pbignLCAnKTtcbn1cbi8qKlxuICogQ1NTIGZvciBhIEBmb250LWZhY2UgZGVjbGFyYXRpb24uIERlZmF1bHRzIHRvIGNoZWNrIGZvciBsb2NhbCBjb3BpZXMgb2YgdGhlIGZvbnQgb24gdGhlIHVzZXIncyBtYWNoaW5lLiBZb3UgY2FuIGRpc2FibGUgdGhpcyBieSBwYXNzaW5nIGBudWxsYCB0byBsb2NhbEZvbnRzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IGJhc2ljIHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICAuLi5mb250RmFjZSh7XG4gKiAgICAgICdmb250RmFtaWx5JzogJ1NhbnMtUHJvJyxcbiAqICAgICAgJ2ZvbnRGaWxlUGF0aCc6ICdwYXRoL3RvL2ZpbGUnXG4gKiAgICB9KVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIGJhc2ljIHVzYWdlXG4gKiBjb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYCR7XG4gKiAgIGZvbnRGYWNlKHtcbiAqICAgICAnZm9udEZhbWlseSc6ICdTYW5zLVBybycsXG4gKiAgICAgJ2ZvbnRGaWxlUGF0aCc6ICdwYXRoL3RvL2ZpbGUnXG4gKiAgIH1cbiAqICl9YFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiAnQGZvbnQtZmFjZSc6IHtcbiAqICAgJ2ZvbnRGYW1pbHknOiAnU2Fucy1Qcm8nLFxuICogICAnc3JjJzogJ3VybChcInBhdGgvdG8vZmlsZS5lb3RcIiksIHVybChcInBhdGgvdG8vZmlsZS53b2ZmMlwiKSwgdXJsKFwicGF0aC90by9maWxlLndvZmZcIiksIHVybChcInBhdGgvdG8vZmlsZS50dGZcIiksIHVybChcInBhdGgvdG8vZmlsZS5zdmdcIiknLFxuICogfVxuICovXG5cblxuZnVuY3Rpb24gZm9udEZhY2UoX3JlZikge1xuICB2YXIgZm9udEZhbWlseSA9IF9yZWYuZm9udEZhbWlseSxcbiAgICAgIGZvbnRGaWxlUGF0aCA9IF9yZWYuZm9udEZpbGVQYXRoLFxuICAgICAgZm9udFN0cmV0Y2ggPSBfcmVmLmZvbnRTdHJldGNoLFxuICAgICAgZm9udFN0eWxlID0gX3JlZi5mb250U3R5bGUsXG4gICAgICBmb250VmFyaWFudCA9IF9yZWYuZm9udFZhcmlhbnQsXG4gICAgICBmb250V2VpZ2h0ID0gX3JlZi5mb250V2VpZ2h0LFxuICAgICAgX3JlZiRmaWxlRm9ybWF0cyA9IF9yZWYuZmlsZUZvcm1hdHMsXG4gICAgICBmaWxlRm9ybWF0cyA9IF9yZWYkZmlsZUZvcm1hdHMgPT09IHZvaWQgMCA/IFsnZW90JywgJ3dvZmYyJywgJ3dvZmYnLCAndHRmJywgJ3N2ZyddIDogX3JlZiRmaWxlRm9ybWF0cyxcbiAgICAgIF9yZWYkZm9ybWF0SGludCA9IF9yZWYuZm9ybWF0SGludCxcbiAgICAgIGZvcm1hdEhpbnQgPSBfcmVmJGZvcm1hdEhpbnQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRmb3JtYXRIaW50LFxuICAgICAgX3JlZiRsb2NhbEZvbnRzID0gX3JlZi5sb2NhbEZvbnRzLFxuICAgICAgbG9jYWxGb250cyA9IF9yZWYkbG9jYWxGb250cyA9PT0gdm9pZCAwID8gW2ZvbnRGYW1pbHldIDogX3JlZiRsb2NhbEZvbnRzLFxuICAgICAgdW5pY29kZVJhbmdlID0gX3JlZi51bmljb2RlUmFuZ2UsXG4gICAgICBmb250RGlzcGxheSA9IF9yZWYuZm9udERpc3BsYXksXG4gICAgICBmb250VmFyaWF0aW9uU2V0dGluZ3MgPSBfcmVmLmZvbnRWYXJpYXRpb25TZXR0aW5ncyxcbiAgICAgIGZvbnRGZWF0dXJlU2V0dGluZ3MgPSBfcmVmLmZvbnRGZWF0dXJlU2V0dGluZ3M7XG4gIC8vIEVycm9yIEhhbmRsaW5nXG4gIGlmICghZm9udEZhbWlseSkgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTUpO1xuXG4gIGlmICghZm9udEZpbGVQYXRoICYmICFsb2NhbEZvbnRzKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTIpO1xuICB9XG5cbiAgaWYgKGxvY2FsRm9udHMgJiYgIUFycmF5LmlzQXJyYXkobG9jYWxGb250cykpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1Myk7XG4gIH1cblxuICBpZiAoIUFycmF5LmlzQXJyYXkoZmlsZUZvcm1hdHMpKSB7XG4gICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTQpO1xuICB9XG5cbiAgdmFyIGZvbnRGYWNlRGVjbGFyYXRpb24gPSB7XG4gICAgJ0Bmb250LWZhY2UnOiB7XG4gICAgICBmb250RmFtaWx5OiBmb250RmFtaWx5LFxuICAgICAgc3JjOiBnZW5lcmF0ZVNvdXJjZXMoZm9udEZpbGVQYXRoLCBsb2NhbEZvbnRzLCBmaWxlRm9ybWF0cywgZm9ybWF0SGludCksXG4gICAgICB1bmljb2RlUmFuZ2U6IHVuaWNvZGVSYW5nZSxcbiAgICAgIGZvbnRTdHJldGNoOiBmb250U3RyZXRjaCxcbiAgICAgIGZvbnRTdHlsZTogZm9udFN0eWxlLFxuICAgICAgZm9udFZhcmlhbnQ6IGZvbnRWYXJpYW50LFxuICAgICAgZm9udFdlaWdodDogZm9udFdlaWdodCxcbiAgICAgIGZvbnREaXNwbGF5OiBmb250RGlzcGxheSxcbiAgICAgIGZvbnRWYXJpYXRpb25TZXR0aW5nczogZm9udFZhcmlhdGlvblNldHRpbmdzLFxuICAgICAgZm9udEZlYXR1cmVTZXR0aW5nczogZm9udEZlYXR1cmVTZXR0aW5nc1xuICAgIH1cbiAgfTsgLy8gUmVtb3ZlcyB1bmRlZmluZWQgZmllbGRzIGZvciBjbGVhbmVyIGNzcyBvYmplY3QuXG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZm9udEZhY2VEZWNsYXJhdGlvbikpO1xufVxuXG4vKipcbiAqIENTUyB0byBoaWRlIHRleHQgdG8gc2hvdyBhIGJhY2tncm91bmQgaW1hZ2UgaW4gYSBTRU8tZnJpZW5kbHkgd2F5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAndXJsKGxvZ28ucG5nKScsXG4gKiAgIC4uLmhpZGVUZXh0KCksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmRJbWFnZTogdXJsKGxvZ28ucG5nKTtcbiAqICAgJHtoaWRlVGV4dCgpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ2Rpdic6IHtcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICd1cmwobG9nby5wbmcpJyxcbiAqICAgJ3RleHRJbmRlbnQnOiAnMTAxJScsXG4gKiAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICogICAnd2hpdGVTcGFjZSc6ICdub3dyYXAnLFxuICogfVxuICovXG5mdW5jdGlvbiBoaWRlVGV4dCgpIHtcbiAgcmV0dXJuIHtcbiAgICB0ZXh0SW5kZW50OiAnMTAxJScsXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnXG4gIH07XG59XG5cbi8qKlxuICogQ1NTIHRvIGhpZGUgY29udGVudCB2aXN1YWxseSBidXQgcmVtYWluIGFjY2Vzc2libGUgdG8gc2NyZWVuIHJlYWRlcnMuXG4gKiBmcm9tIFtIVE1MNSBCb2lsZXJwbGF0ZV0oaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvYmxvYi85YTE3NmY1N2FmMWNmZThlYzcwMzAwZGE0NjIxZmI5YjA3ZTVmYTMxL3NyYy9jc3MvbWFpbi5jc3MjTDEyMSlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5oaWRlVmlzdWFsbHkoKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtoaWRlVmlzdWFsbHkoKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdkaXYnOiB7XG4gKiAgICdib3JkZXInOiAnMCcsXG4gKiAgICdjbGlwJzogJ3JlY3QoMCAwIDAgMCknLFxuICogICAnaGVpZ2h0JzogJzFweCcsXG4gKiAgICdtYXJnaW4nOiAnLTFweCcsXG4gKiAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxuICogICAncGFkZGluZyc6ICcwJyxcbiAqICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAqICAgJ3doaXRlU3BhY2UnOiAnbm93cmFwJyxcbiAqICAgJ3dpZHRoJzogJzFweCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhpZGVWaXN1YWxseSgpIHtcbiAgcmV0dXJuIHtcbiAgICBib3JkZXI6ICcwJyxcbiAgICBjbGlwOiAncmVjdCgwIDAgMCAwKScsXG4gICAgaGVpZ2h0OiAnMXB4JyxcbiAgICBtYXJnaW46ICctMXB4JyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgcGFkZGluZzogJzAnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgIHdpZHRoOiAnMXB4J1xuICB9O1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIG1lZGlhIHF1ZXJ5IHRvIHRhcmdldCBIaURQSSBkZXZpY2VzLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgW2hpRFBJKDEuNSldOiB7XG4gKiAgICB3aWR0aDogMjAwcHg7XG4gKiAgfVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2hpRFBJKDEuNSl9IHtcbiAqICAgICB3aWR0aDogMjAwcHg7XG4gKiAgIH1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMS41KSxcbiAqICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMS41KSxcbiAqICBvbmx5IHNjcmVlbiBhbmQgKC1vLW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuNS8xKSxcbiAqICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxNDRkcGkpLFxuICogIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDEuNWRwcHgpJzoge1xuICogICAnd2lkdGgnOiAnMjAwcHgnLFxuICogfVxuICovXG5mdW5jdGlvbiBoaURQSShyYXRpbykge1xuICBpZiAocmF0aW8gPT09IHZvaWQgMCkge1xuICAgIHJhdGlvID0gMS4zO1xuICB9XG5cbiAgcmV0dXJuIFwiXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogXCIgKyByYXRpbyArIFwiKSxcXG4gICAgb25seSBzY3JlZW4gYW5kIChtaW4tLW1vei1kZXZpY2UtcGl4ZWwtcmF0aW86IFwiICsgcmF0aW8gKyBcIiksXFxuICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogXCIgKyByYXRpbyArIFwiLzEpLFxcbiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiBcIiArIE1hdGgucm91bmQocmF0aW8gKiA5NikgKyBcImRwaSksXFxuICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IFwiICsgcmF0aW8gKyBcImRwcHgpXFxuICBcIjtcbn1cblxuZnVuY3Rpb24gY29uc3RydWN0R3JhZGllbnRWYWx1ZShsaXRlcmFscykge1xuICB2YXIgdGVtcGxhdGUgPSAnJztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3Vic3RpdHV0aW9ucyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgc3Vic3RpdHV0aW9uc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpdGVyYWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGVtcGxhdGUgKz0gbGl0ZXJhbHNbaV07XG5cbiAgICBpZiAoaSA9PT0gc3Vic3RpdHV0aW9ucy5sZW5ndGggLSAxICYmIHN1YnN0aXR1dGlvbnNbaV0pIHtcbiAgICAgIHZhciBkZWZpbmVkVmFsdWVzID0gc3Vic3RpdHV0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKHN1YnN0aXR1dGUpIHtcbiAgICAgICAgcmV0dXJuICEhc3Vic3RpdHV0ZTtcbiAgICAgIH0pOyAvLyBBZGRzIGxlYWRpbmcgY29tYSBpZiBwcm9wZXJ0aWVzIHByZWNlZWQgY29sb3Itc3RvcHNcblxuICAgICAgaWYgKGRlZmluZWRWYWx1ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgdGVtcGxhdGUgKz0gXCIsIFwiICsgc3Vic3RpdHV0aW9uc1tpXTsgLy8gTm8gdHJhaWxpbmcgc3BhY2UgaWYgY29sb3Itc3RvcHMgaXMgdGhlIG9ubHkgcGFyYW0gcHJvdmlkZWRcbiAgICAgIH0gZWxzZSBpZiAoZGVmaW5lZFZhbHVlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgdGVtcGxhdGUgKz0gXCJcIiArIHN1YnN0aXR1dGlvbnNbaV07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChzdWJzdGl0dXRpb25zW2ldKSB7XG4gICAgICB0ZW1wbGF0ZSArPSBzdWJzdGl0dXRpb25zW2ldICsgXCIgXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRlbXBsYXRlLnRyaW0oKTtcbn1cblxudmFyIF90ZW1wbGF0ZU9iamVjdCQxO1xuXG4vKipcbiAqIENTUyBmb3IgZGVjbGFyaW5nIGEgbGluZWFyIGdyYWRpZW50LCBpbmNsdWRpbmcgYSBmYWxsYmFjayBiYWNrZ3JvdW5kLWNvbG9yLiBUaGUgZmFsbGJhY2sgaXMgZWl0aGVyIHRoZSBmaXJzdCBjb2xvci1zdG9wIG9yIGFuIGV4cGxpY2l0bHkgcGFzc2VkIGZhbGxiYWNrIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmxpbmVhckdyYWRpZW50KHtcbiAgICAgICAgY29sb3JTdG9wczogWycjMDBGRkZGIDAlJywgJ3JnYmEoMCwgMCwgMjU1LCAwKSA1MCUnLCAnIzAwMDBGRiA5NSUnXSxcbiAgICAgICAgdG9EaXJlY3Rpb246ICd0byB0b3AgcmlnaHQnLFxuICAgICAgICBmYWxsYmFjazogJyNGRkYnLFxuICAgICAgfSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtsaW5lYXJHcmFkaWVudCh7XG4gICAgICAgIGNvbG9yU3RvcHM6IFsnIzAwRkZGRiAwJScsICdyZ2JhKDAsIDAsIDI1NSwgMCkgNTAlJywgJyMwMDAwRkYgOTUlJ10sXG4gICAgICAgIHRvRGlyZWN0aW9uOiAndG8gdG9wIHJpZ2h0JyxcbiAgICAgICAgZmFsbGJhY2s6ICcjRkZGJyxcbiAgICAgIH0pfVxuICpgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICAnYmFja2dyb3VuZENvbG9yJzogJyNGRkYnLFxuICogICAnYmFja2dyb3VuZEltYWdlJzogJ2xpbmVhci1ncmFkaWVudCh0byB0b3AgcmlnaHQsICMwMEZGRkYgMCUsIHJnYmEoMCwgMCwgMjU1LCAwKSA1MCUsICMwMDAwRkYgOTUlKScsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGxpbmVhckdyYWRpZW50KF9yZWYpIHtcbiAgdmFyIGNvbG9yU3RvcHMgPSBfcmVmLmNvbG9yU3RvcHMsXG4gICAgICBmYWxsYmFjayA9IF9yZWYuZmFsbGJhY2ssXG4gICAgICBfcmVmJHRvRGlyZWN0aW9uID0gX3JlZi50b0RpcmVjdGlvbixcbiAgICAgIHRvRGlyZWN0aW9uID0gX3JlZiR0b0RpcmVjdGlvbiA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHRvRGlyZWN0aW9uO1xuXG4gIGlmICghY29sb3JTdG9wcyB8fCBjb2xvclN0b3BzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1Nik7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogZmFsbGJhY2sgfHwgY29sb3JTdG9wc1swXS5yZXBsYWNlKC8sXFxzKy9nLCAnLCcpLnNwbGl0KCcgJylbMF0ucmVwbGFjZSgvLCg/PVxcUykvZywgJywgJyksXG4gICAgYmFja2dyb3VuZEltYWdlOiBjb25zdHJ1Y3RHcmFkaWVudFZhbHVlKF90ZW1wbGF0ZU9iamVjdCQxIHx8IChfdGVtcGxhdGVPYmplY3QkMSA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJsaW5lYXItZ3JhZGllbnQoXCIsIFwiXCIsIFwiKVwiXSkpLCB0b0RpcmVjdGlvbiwgY29sb3JTdG9wcy5qb2luKCcsICcpLnJlcGxhY2UoLywoPz1cXFMpL2csICcsICcpKVxuICB9O1xufVxuXG4vKipcbiAqIENTUyB0byBub3JtYWxpemUgYWJub3JtYWxpdGllcyBhY3Jvc3MgYnJvd3NlcnMgKG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcylcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAgLi4ubm9ybWFsaXplKCksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgJHtub3JtYWxpemUoKX1gXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGh0bWwge1xuICogICBsaW5lSGVpZ2h0OiAxLjE1LFxuICogICB0ZXh0U2l6ZUFkanVzdDogMTAwJSxcbiAqIH0gLi4uXG4gKi9cbmZ1bmN0aW9uIG5vcm1hbGl6ZSgpIHtcbiAgdmFyIF9yZWY7XG5cbiAgcmV0dXJuIFsoX3JlZiA9IHtcbiAgICBodG1sOiB7XG4gICAgICBsaW5lSGVpZ2h0OiAnMS4xNScsXG4gICAgICB0ZXh0U2l6ZUFkanVzdDogJzEwMCUnXG4gICAgfSxcbiAgICBib2R5OiB7XG4gICAgICBtYXJnaW46ICcwJ1xuICAgIH0sXG4gICAgbWFpbjoge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJ1xuICAgIH0sXG4gICAgaDE6IHtcbiAgICAgIGZvbnRTaXplOiAnMmVtJyxcbiAgICAgIG1hcmdpbjogJzAuNjdlbSAwJ1xuICAgIH0sXG4gICAgaHI6IHtcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIGhlaWdodDogJzAnLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICAgIH0sXG4gICAgcHJlOiB7XG4gICAgICBmb250RmFtaWx5OiAnbW9ub3NwYWNlLCBtb25vc3BhY2UnLFxuICAgICAgZm9udFNpemU6ICcxZW0nXG4gICAgfSxcbiAgICBhOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICB9LFxuICAgICdhYmJyW3RpdGxlXSc6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogJ25vbmUnLFxuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfVxuICB9LCBfcmVmW1wiYixcXG4gICAgc3Ryb25nXCJdID0ge1xuICAgIGZvbnRXZWlnaHQ6ICdib2xkZXInXG4gIH0sIF9yZWZbXCJjb2RlLFxcbiAgICBrYmQsXFxuICAgIHNhbXBcIl0gPSB7XG4gICAgZm9udEZhbWlseTogJ21vbm9zcGFjZSwgbW9ub3NwYWNlJyxcbiAgICBmb250U2l6ZTogJzFlbSdcbiAgfSwgX3JlZi5zbWFsbCA9IHtcbiAgICBmb250U2l6ZTogJzgwJSdcbiAgfSwgX3JlZltcInN1YixcXG4gICAgc3VwXCJdID0ge1xuICAgIGZvbnRTaXplOiAnNzUlJyxcbiAgICBsaW5lSGVpZ2h0OiAnMCcsXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgdmVydGljYWxBbGlnbjogJ2Jhc2VsaW5lJ1xuICB9LCBfcmVmLnN1YiA9IHtcbiAgICBib3R0b206ICctMC4yNWVtJ1xuICB9LCBfcmVmLnN1cCA9IHtcbiAgICB0b3A6ICctMC41ZW0nXG4gIH0sIF9yZWYuaW1nID0ge1xuICAgIGJvcmRlclN0eWxlOiAnbm9uZSdcbiAgfSwgX3JlZltcImJ1dHRvbixcXG4gICAgaW5wdXQsXFxuICAgIG9wdGdyb3VwLFxcbiAgICBzZWxlY3QsXFxuICAgIHRleHRhcmVhXCJdID0ge1xuICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcbiAgICBmb250U2l6ZTogJzEwMCUnLFxuICAgIGxpbmVIZWlnaHQ6ICcxLjE1JyxcbiAgICBtYXJnaW46ICcwJ1xuICB9LCBfcmVmW1wiYnV0dG9uLFxcbiAgICBpbnB1dFwiXSA9IHtcbiAgICBvdmVyZmxvdzogJ3Zpc2libGUnXG4gIH0sIF9yZWZbXCJidXR0b24sXFxuICAgIHNlbGVjdFwiXSA9IHtcbiAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZSdcbiAgfSwgX3JlZltcImJ1dHRvbixcXG4gICAgaHRtbCBbdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuICAgIFt0eXBlPVxcXCJyZXNldFxcXCJdLFxcbiAgICBbdHlwZT1cXFwic3VibWl0XFxcIl1cIl0gPSB7XG4gICAgV2Via2l0QXBwZWFyYW5jZTogJ2J1dHRvbidcbiAgfSwgX3JlZltcImJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcbiAgICBbdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG4gICAgW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyXCJdID0ge1xuICAgIGJvcmRlclN0eWxlOiAnbm9uZScsXG4gICAgcGFkZGluZzogJzAnXG4gIH0sIF9yZWZbXCJidXR0b246LW1vei1mb2N1c3JpbmcsXFxuICAgIFt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG4gICAgW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuICAgIFt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZ1wiXSA9IHtcbiAgICBvdXRsaW5lOiAnMXB4IGRvdHRlZCBCdXR0b25UZXh0J1xuICB9LCBfcmVmLmZpZWxkc2V0ID0ge1xuICAgIHBhZGRpbmc6ICcwLjM1ZW0gMC42MjVlbSAwLjc1ZW0nXG4gIH0sIF9yZWYubGVnZW5kID0ge1xuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIHBhZGRpbmc6ICcwJyxcbiAgICB3aGl0ZVNwYWNlOiAnbm9ybWFsJ1xuICB9LCBfcmVmLnByb2dyZXNzID0ge1xuICAgIHZlcnRpY2FsQWxpZ246ICdiYXNlbGluZSdcbiAgfSwgX3JlZi50ZXh0YXJlYSA9IHtcbiAgICBvdmVyZmxvdzogJ2F1dG8nXG4gIH0sIF9yZWZbXCJbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG4gICAgW3R5cGU9XFxcInJhZGlvXFxcIl1cIl0gPSB7XG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogJzAnXG4gIH0sIF9yZWZbXCJbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuICAgIFt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvblwiXSA9IHtcbiAgICBoZWlnaHQ6ICdhdXRvJ1xuICB9LCBfcmVmWydbdHlwZT1cInNlYXJjaFwiXSddID0ge1xuICAgIFdlYmtpdEFwcGVhcmFuY2U6ICd0ZXh0ZmllbGQnLFxuICAgIG91dGxpbmVPZmZzZXQ6ICctMnB4J1xuICB9LCBfcmVmWydbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiddID0ge1xuICAgIFdlYmtpdEFwcGVhcmFuY2U6ICdub25lJ1xuICB9LCBfcmVmWyc6Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uJ10gPSB7XG4gICAgV2Via2l0QXBwZWFyYW5jZTogJ2J1dHRvbicsXG4gICAgZm9udDogJ2luaGVyaXQnXG4gIH0sIF9yZWYuZGV0YWlscyA9IHtcbiAgICBkaXNwbGF5OiAnYmxvY2snXG4gIH0sIF9yZWYuc3VtbWFyeSA9IHtcbiAgICBkaXNwbGF5OiAnbGlzdC1pdGVtJ1xuICB9LCBfcmVmLnRlbXBsYXRlID0ge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9LCBfcmVmWydbaGlkZGVuXSddID0ge1xuICAgIGRpc3BsYXk6ICdub25lJ1xuICB9LCBfcmVmKSwge1xuICAgICdhYmJyW3RpdGxlXSc6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lIGRvdHRlZCdcbiAgICB9XG4gIH1dO1xufVxuXG52YXIgX3RlbXBsYXRlT2JqZWN0O1xuXG4vKipcbiAqIENTUyBmb3IgZGVjbGFyaW5nIGEgcmFkaWFsIGdyYWRpZW50LCBpbmNsdWRpbmcgYSBmYWxsYmFjayBiYWNrZ3JvdW5kLWNvbG9yLiBUaGUgZmFsbGJhY2sgaXMgZWl0aGVyIHRoZSBmaXJzdCBjb2xvci1zdG9wIG9yIGFuIGV4cGxpY2l0bHkgcGFzc2VkIGZhbGxiYWNrIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnJhZGlhbEdyYWRpZW50KHtcbiAqICAgICBjb2xvclN0b3BzOiBbJyMwMEZGRkYgMCUnLCAncmdiYSgwLCAwLCAyNTUsIDApIDUwJScsICcjMDAwMEZGIDk1JSddLFxuICogICAgIGV4dGVudDogJ2ZhcnRoZXN0LWNvcm5lciBhdCA0NXB4IDQ1cHgnLFxuICogICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAqICAgICBzaGFwZTogJ2VsbGlwc2UnLFxuICogICB9KVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3JhZGlhbEdyYWRpZW50KHtcbiAqICAgICBjb2xvclN0b3BzOiBbJyMwMEZGRkYgMCUnLCAncmdiYSgwLCAwLCAyNTUsIDApIDUwJScsICcjMDAwMEZGIDk1JSddLFxuICogICAgIGV4dGVudDogJ2ZhcnRoZXN0LWNvcm5lciBhdCA0NXB4IDQ1cHgnLFxuICogICAgIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAqICAgICBzaGFwZTogJ2VsbGlwc2UnLFxuICogICB9KX1cbiAqYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXY6IHtcbiAqICAgJ2JhY2tncm91bmRDb2xvcic6ICcjMDBGRkZGJyxcbiAqICAgJ2JhY2tncm91bmRJbWFnZSc6ICdyYWRpYWwtZ3JhZGllbnQoY2VudGVyIGVsbGlwc2UgZmFydGhlc3QtY29ybmVyIGF0IDQ1cHggNDVweCwgIzAwRkZGRiAwJSwgcmdiYSgwLCAwLCAyNTUsIDApIDUwJSwgIzAwMDBGRiA5NSUpJyxcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmFkaWFsR3JhZGllbnQoX3JlZikge1xuICB2YXIgY29sb3JTdG9wcyA9IF9yZWYuY29sb3JTdG9wcyxcbiAgICAgIF9yZWYkZXh0ZW50ID0gX3JlZi5leHRlbnQsXG4gICAgICBleHRlbnQgPSBfcmVmJGV4dGVudCA9PT0gdm9pZCAwID8gJycgOiBfcmVmJGV4dGVudCxcbiAgICAgIGZhbGxiYWNrID0gX3JlZi5mYWxsYmFjayxcbiAgICAgIF9yZWYkcG9zaXRpb24gPSBfcmVmLnBvc2l0aW9uLFxuICAgICAgcG9zaXRpb24gPSBfcmVmJHBvc2l0aW9uID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkcG9zaXRpb24sXG4gICAgICBfcmVmJHNoYXBlID0gX3JlZi5zaGFwZSxcbiAgICAgIHNoYXBlID0gX3JlZiRzaGFwZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHNoYXBlO1xuXG4gIGlmICghY29sb3JTdG9wcyB8fCBjb2xvclN0b3BzLmxlbmd0aCA8IDIpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1Nyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRDb2xvcjogZmFsbGJhY2sgfHwgY29sb3JTdG9wc1swXS5zcGxpdCgnICcpWzBdLFxuICAgIGJhY2tncm91bmRJbWFnZTogY29uc3RydWN0R3JhZGllbnRWYWx1ZShfdGVtcGxhdGVPYmplY3QgfHwgKF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWxMb29zZShbXCJyYWRpYWwtZ3JhZGllbnQoXCIsIFwiXCIsIFwiXCIsIFwiXCIsIFwiKVwiXSkpLCBwb3NpdGlvbiwgc2hhcGUsIGV4dGVudCwgY29sb3JTdG9wcy5qb2luKCcsICcpKVxuICB9O1xufVxuXG4vKipcbiAqIEEgaGVscGVyIHRvIGdlbmVyYXRlIGEgcmV0aW5hIGJhY2tncm91bmQgaW1hZ2UgYW5kIG5vbi1yZXRpbmFcbiAqIGJhY2tncm91bmQgaW1hZ2UuIFRoZSByZXRpbmEgYmFja2dyb3VuZCBpbWFnZSB3aWxsIG91dHB1dCB0byBhIEhpRFBJIG1lZGlhIHF1ZXJ5LiBUaGUgbWl4aW4gdXNlc1xuICogYSBfMngucG5nIGZpbGVuYW1lIHN1ZmZpeCBieSBkZWZhdWx0LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgLi4ucmV0aW5hSW1hZ2UoJ215LWltZycpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7cmV0aW5hSW1hZ2UoJ215LWltZycpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqIGRpdiB7XG4gKiAgIGJhY2tncm91bmRJbWFnZTogJ3VybChteS1pbWcucG5nKScsXG4gKiAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDEuMyksXG4gKiAgICBvbmx5IHNjcmVlbiBhbmQgKG1pbi0tbW96LWRldmljZS1waXhlbC1yYXRpbzogMS4zKSxcbiAqICAgIG9ubHkgc2NyZWVuIGFuZCAoLW8tbWluLWRldmljZS1waXhlbC1yYXRpbzogMS4zLzEpLFxuICogICAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTQ0ZHBpKSxcbiAqICAgIG9ubHkgc2NyZWVuIGFuZCAobWluLXJlc29sdXRpb246IDEuNWRwcHgpJzoge1xuICogICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChteS1pbWdfMngucG5nKScsXG4gKiAgIH1cbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmV0aW5hSW1hZ2UoZmlsZW5hbWUsIGJhY2tncm91bmRTaXplLCBleHRlbnNpb24sIHJldGluYUZpbGVuYW1lLCByZXRpbmFTdWZmaXgpIHtcbiAgdmFyIF9yZWY7XG5cbiAgaWYgKGV4dGVuc2lvbiA9PT0gdm9pZCAwKSB7XG4gICAgZXh0ZW5zaW9uID0gJ3BuZyc7XG4gIH1cblxuICBpZiAocmV0aW5hU3VmZml4ID09PSB2b2lkIDApIHtcbiAgICByZXRpbmFTdWZmaXggPSAnXzJ4JztcbiAgfVxuXG4gIGlmICghZmlsZW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig1OCk7XG4gIH0gLy8gUmVwbGFjZSB0aGUgZG90IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHBhc3NlZCBleHRlbnNpb24gaWYgb25lIGV4aXN0c1xuXG5cbiAgdmFyIGV4dCA9IGV4dGVuc2lvbi5yZXBsYWNlKC9eXFwuLywgJycpO1xuICB2YXIgckZpbGVuYW1lID0gcmV0aW5hRmlsZW5hbWUgPyByZXRpbmFGaWxlbmFtZSArIFwiLlwiICsgZXh0IDogXCJcIiArIGZpbGVuYW1lICsgcmV0aW5hU3VmZml4ICsgXCIuXCIgKyBleHQ7XG4gIHJldHVybiBfcmVmID0ge1xuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoXCIgKyBmaWxlbmFtZSArIFwiLlwiICsgZXh0ICsgXCIpXCJcbiAgfSwgX3JlZltoaURQSSgpXSA9IF9leHRlbmRzKHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFwiICsgckZpbGVuYW1lICsgXCIpXCJcbiAgfSwgYmFja2dyb3VuZFNpemUgPyB7XG4gICAgYmFja2dyb3VuZFNpemU6IGJhY2tncm91bmRTaXplXG4gIH0gOiB7fSksIF9yZWY7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIGtleS1zcGFjaW5nICovXG52YXIgZnVuY3Rpb25zTWFwID0ge1xuICBlYXNlSW5CYWNrOiAnY3ViaWMtYmV6aWVyKDAuNjAwLCAtMC4yODAsIDAuNzM1LCAwLjA0NSknLFxuICBlYXNlSW5DaXJjOiAnY3ViaWMtYmV6aWVyKDAuNjAwLCAgMC4wNDAsIDAuOTgwLCAwLjMzNSknLFxuICBlYXNlSW5DdWJpYzogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDU1LCAwLjY3NSwgMC4xOTApJyxcbiAgZWFzZUluRXhwbzogJ2N1YmljLWJlemllcigwLjk1MCwgIDAuMDUwLCAwLjc5NSwgMC4wMzUpJyxcbiAgZWFzZUluUXVhZDogJ2N1YmljLWJlemllcigwLjU1MCwgIDAuMDg1LCAwLjY4MCwgMC41MzApJyxcbiAgZWFzZUluUXVhcnQ6ICdjdWJpYy1iZXppZXIoMC44OTUsICAwLjAzMCwgMC42ODUsIDAuMjIwKScsXG4gIGVhc2VJblF1aW50OiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAgMC4wNTAsIDAuODU1LCAwLjA2MCknLFxuICBlYXNlSW5TaW5lOiAnY3ViaWMtYmV6aWVyKDAuNDcwLCAgMC4wMDAsIDAuNzQ1LCAwLjcxNSknLFxuICBlYXNlT3V0QmFjazogJ2N1YmljLWJlemllcigwLjE3NSwgIDAuODg1LCAwLjMyMCwgMS4yNzUpJyxcbiAgZWFzZU91dEN1YmljOiAnY3ViaWMtYmV6aWVyKDAuMjE1LCAgMC42MTAsIDAuMzU1LCAxLjAwMCknLFxuICBlYXNlT3V0Q2lyYzogJ2N1YmljLWJlemllcigwLjA3NSwgIDAuODIwLCAwLjE2NSwgMS4wMDApJyxcbiAgZWFzZU91dEV4cG86ICdjdWJpYy1iZXppZXIoMC4xOTAsICAxLjAwMCwgMC4yMjAsIDEuMDAwKScsXG4gIGVhc2VPdXRRdWFkOiAnY3ViaWMtYmV6aWVyKDAuMjUwLCAgMC40NjAsIDAuNDUwLCAwLjk0MCknLFxuICBlYXNlT3V0UXVhcnQ6ICdjdWJpYy1iZXppZXIoMC4xNjUsICAwLjg0MCwgMC40NDAsIDEuMDAwKScsXG4gIGVhc2VPdXRRdWludDogJ2N1YmljLWJlemllcigwLjIzMCwgIDEuMDAwLCAwLjMyMCwgMS4wMDApJyxcbiAgZWFzZU91dFNpbmU6ICdjdWJpYy1iZXppZXIoMC4zOTAsICAwLjU3NSwgMC41NjUsIDEuMDAwKScsXG4gIGVhc2VJbk91dEJhY2s6ICdjdWJpYy1iZXppZXIoMC42ODAsIC0wLjU1MCwgMC4yNjUsIDEuNTUwKScsXG4gIGVhc2VJbk91dENpcmM6ICdjdWJpYy1iZXppZXIoMC43ODUsICAwLjEzNSwgMC4xNTAsIDAuODYwKScsXG4gIGVhc2VJbk91dEN1YmljOiAnY3ViaWMtYmV6aWVyKDAuNjQ1LCAgMC4wNDUsIDAuMzU1LCAxLjAwMCknLFxuICBlYXNlSW5PdXRFeHBvOiAnY3ViaWMtYmV6aWVyKDEuMDAwLCAgMC4wMDAsIDAuMDAwLCAxLjAwMCknLFxuICBlYXNlSW5PdXRRdWFkOiAnY3ViaWMtYmV6aWVyKDAuNDU1LCAgMC4wMzAsIDAuNTE1LCAwLjk1NSknLFxuICBlYXNlSW5PdXRRdWFydDogJ2N1YmljLWJlemllcigwLjc3MCwgIDAuMDAwLCAwLjE3NSwgMS4wMDApJyxcbiAgZWFzZUluT3V0UXVpbnQ6ICdjdWJpYy1iZXppZXIoMC44NjAsICAwLjAwMCwgMC4wNzAsIDEuMDAwKScsXG4gIGVhc2VJbk91dFNpbmU6ICdjdWJpYy1iZXppZXIoMC40NDUsICAwLjA1MCwgMC41NTAsIDAuOTUwKSdcbn07XG4vKiBlc2xpbnQtZW5hYmxlIGtleS1zcGFjaW5nICovXG5cbmZ1bmN0aW9uIGdldFRpbWluZ0Z1bmN0aW9uKGZ1bmN0aW9uTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb25zTWFwW2Z1bmN0aW9uTmFtZV07XG59XG4vKipcbiAqIFN0cmluZyB0byByZXByZXNlbnQgY29tbW9uIGVhc2luZyBmdW5jdGlvbnMgYXMgZGVtb25zdHJhdGVkIGhlcmU6IChnaXRodWIuY29tL2phdWtpYS9lYXNpZSkuXG4gKlxuICogQGRlcHJlY2F0ZWQgLSBUaGlzIHdpbGwgYmUgZGVwcmVjYXRlZCBpbiB2NSBpbiBmYXZvciBvZiBgZWFzZUluYCwgYGVhc2VPdXRgLCBgZWFzZUluT3V0YC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAndHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uJzogdGltaW5nRnVuY3Rpb25zKCdlYXNlSW5RdWFkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogJHt0aW1pbmdGdW5jdGlvbnMoJ2Vhc2VJblF1YWQnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqICdkaXYnOiB7XG4gKiAgICd0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24nOiAnY3ViaWMtYmV6aWVyKDAuNTUwLCAgMC4wODUsIDAuNjgwLCAwLjUzMCknLFxuICogfVxuICovXG5cblxuZnVuY3Rpb24gdGltaW5nRnVuY3Rpb25zKHRpbWluZ0Z1bmN0aW9uKSB7XG4gIHJldHVybiBnZXRUaW1pbmdGdW5jdGlvbih0aW1pbmdGdW5jdGlvbik7XG59XG5cbnZhciBnZXRCb3JkZXJXaWR0aCA9IGZ1bmN0aW9uIGdldEJvcmRlcldpZHRoKHBvaW50aW5nRGlyZWN0aW9uLCBoZWlnaHQsIHdpZHRoKSB7XG4gIHZhciBmdWxsV2lkdGggPSBcIlwiICsgd2lkdGhbMF0gKyAod2lkdGhbMV0gfHwgJycpO1xuICB2YXIgaGFsZldpZHRoID0gXCJcIiArIHdpZHRoWzBdIC8gMiArICh3aWR0aFsxXSB8fCAnJyk7XG4gIHZhciBmdWxsSGVpZ2h0ID0gXCJcIiArIGhlaWdodFswXSArIChoZWlnaHRbMV0gfHwgJycpO1xuICB2YXIgaGFsZkhlaWdodCA9IFwiXCIgKyBoZWlnaHRbMF0gLyAyICsgKGhlaWdodFsxXSB8fCAnJyk7XG5cbiAgc3dpdGNoIChwb2ludGluZ0RpcmVjdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgICByZXR1cm4gXCIwIFwiICsgaGFsZldpZHRoICsgXCIgXCIgKyBmdWxsSGVpZ2h0ICsgXCIgXCIgKyBoYWxmV2lkdGg7XG5cbiAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgIHJldHVybiBmdWxsV2lkdGggKyBcIiBcIiArIGZ1bGxIZWlnaHQgKyBcIiAwIDBcIjtcblxuICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgcmV0dXJuIGhhbGZIZWlnaHQgKyBcIiBcIiArIGZ1bGxXaWR0aCArIFwiIFwiICsgaGFsZkhlaWdodCArIFwiIDBcIjtcblxuICAgIGNhc2UgJ2JvdHRvbUxlZnQnOlxuICAgICAgcmV0dXJuIGZ1bGxXaWR0aCArIFwiIDAgMCBcIiArIGZ1bGxIZWlnaHQ7XG5cbiAgICBjYXNlICdib3R0b20nOlxuICAgICAgcmV0dXJuIGZ1bGxIZWlnaHQgKyBcIiBcIiArIGhhbGZXaWR0aCArIFwiIDAgXCIgKyBoYWxmV2lkdGg7XG5cbiAgICBjYXNlICdib3R0b21SaWdodCc6XG4gICAgICByZXR1cm4gXCIwIDAgXCIgKyBmdWxsV2lkdGggKyBcIiBcIiArIGZ1bGxIZWlnaHQ7XG5cbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gaGFsZkhlaWdodCArIFwiIDAgXCIgKyBoYWxmSGVpZ2h0ICsgXCIgXCIgKyBmdWxsV2lkdGg7XG5cbiAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcIjAgXCIgKyBmdWxsV2lkdGggKyBcIiBcIiArIGZ1bGxIZWlnaHQgKyBcIiAwXCI7XG4gIH1cbn07XG5cbnZhciBnZXRCb3JkZXJDb2xvciA9IGZ1bmN0aW9uIGdldEJvcmRlckNvbG9yKHBvaW50aW5nRGlyZWN0aW9uLCBmb3JlZ3JvdW5kQ29sb3IpIHtcbiAgc3dpdGNoIChwb2ludGluZ0RpcmVjdGlvbikge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tUmlnaHQnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IGZvcmVncm91bmRDb2xvclxuICAgICAgfTtcblxuICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICBjYXNlICdib3R0b21MZWZ0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvcmRlckxlZnRDb2xvcjogZm9yZWdyb3VuZENvbG9yXG4gICAgICB9O1xuXG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICBjYXNlICd0b3BMZWZ0JzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGJvcmRlclRvcENvbG9yOiBmb3JlZ3JvdW5kQ29sb3JcbiAgICAgIH07XG5cbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICd0b3BSaWdodCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBib3JkZXJSaWdodENvbG9yOiBmb3JlZ3JvdW5kQ29sb3JcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNTkpO1xuICB9XG59O1xuLyoqXG4gKiBDU1MgdG8gcmVwcmVzZW50IHRyaWFuZ2xlIHdpdGggYW55IHBvaW50aW5nIGRpcmVjdGlvbiB3aXRoIGFuIG9wdGlvbmFsIGJhY2tncm91bmQgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnRyaWFuZ2xlKHsgcG9pbnRpbmdEaXJlY3Rpb246ICdyaWdodCcsIHdpZHRoOiAnMTAwcHgnLCBoZWlnaHQ6ICcxMDBweCcsIGZvcmVncm91bmRDb2xvcjogJ3JlZCcgfSlcbiAqIH1cbiAqXG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7dHJpYW5nbGUoeyBwb2ludGluZ0RpcmVjdGlvbjogJ3JpZ2h0Jywgd2lkdGg6ICcxMDBweCcsIGhlaWdodDogJzEwMHB4JywgZm9yZWdyb3VuZENvbG9yOiAncmVkJyB9KX1cbiAqXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdjoge1xuICogICdib3JkZXJDb2xvcic6ICd0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZWQnLFxuICogICdib3JkZXJTdHlsZSc6ICdzb2xpZCcsXG4gKiAgJ2JvcmRlcldpZHRoJzogJzUwcHggMCA1MHB4IDEwMHB4JyxcbiAqICAnaGVpZ2h0JzogJzAnLFxuICogICd3aWR0aCc6ICcwJyxcbiAqIH1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRyaWFuZ2xlKF9yZWYpIHtcbiAgdmFyIHBvaW50aW5nRGlyZWN0aW9uID0gX3JlZi5wb2ludGluZ0RpcmVjdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWYuaGVpZ2h0LFxuICAgICAgd2lkdGggPSBfcmVmLndpZHRoLFxuICAgICAgZm9yZWdyb3VuZENvbG9yID0gX3JlZi5mb3JlZ3JvdW5kQ29sb3IsXG4gICAgICBfcmVmJGJhY2tncm91bmRDb2xvciA9IF9yZWYuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYmFja2dyb3VuZENvbG9yID0gX3JlZiRiYWNrZ3JvdW5kQ29sb3IgPT09IHZvaWQgMCA/ICd0cmFuc3BhcmVudCcgOiBfcmVmJGJhY2tncm91bmRDb2xvcjtcbiAgdmFyIHdpZHRoQW5kVW5pdCA9IGdldFZhbHVlQW5kVW5pdCh3aWR0aCk7XG4gIHZhciBoZWlnaHRBbmRVbml0ID0gZ2V0VmFsdWVBbmRVbml0KGhlaWdodCk7XG5cbiAgaWYgKGlzTmFOKGhlaWdodEFuZFVuaXRbMF0pIHx8IGlzTmFOKHdpZHRoQW5kVW5pdFswXSkpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2MCk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe1xuICAgIHdpZHRoOiAnMCcsXG4gICAgaGVpZ2h0OiAnMCcsXG4gICAgYm9yZGVyQ29sb3I6IGJhY2tncm91bmRDb2xvclxuICB9LCBnZXRCb3JkZXJDb2xvcihwb2ludGluZ0RpcmVjdGlvbiwgZm9yZWdyb3VuZENvbG9yKSwge1xuICAgIGJvcmRlclN0eWxlOiAnc29saWQnLFxuICAgIGJvcmRlcldpZHRoOiBnZXRCb3JkZXJXaWR0aChwb2ludGluZ0RpcmVjdGlvbiwgaGVpZ2h0QW5kVW5pdCwgd2lkdGhBbmRVbml0KVxuICB9KTtcbn1cblxuLyoqXG4gKiBQcm92aWRlcyBhbiBlYXN5IHdheSB0byBjaGFuZ2UgdGhlIGB3b3JkV3JhcGAgcHJvcGVydHkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4ud29yZFdyYXAoJ2JyZWFrLXdvcmQnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3dvcmRXcmFwKCdicmVhay13b3JkJyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgb3ZlcmZsb3dXcmFwOiAnYnJlYWstd29yZCcsXG4gKiAgIHdvcmRXcmFwOiAnYnJlYWstd29yZCcsXG4gKiAgIHdvcmRCcmVhazogJ2JyZWFrLWFsbCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHdvcmRXcmFwKHdyYXApIHtcbiAgaWYgKHdyYXAgPT09IHZvaWQgMCkge1xuICAgIHdyYXAgPSAnYnJlYWstd29yZCc7XG4gIH1cblxuICB2YXIgd29yZEJyZWFrID0gd3JhcCA9PT0gJ2JyZWFrLXdvcmQnID8gJ2JyZWFrLWFsbCcgOiB3cmFwO1xuICByZXR1cm4ge1xuICAgIG92ZXJmbG93V3JhcDogd3JhcCxcbiAgICB3b3JkV3JhcDogd3JhcCxcbiAgICB3b3JkQnJlYWs6IHdvcmRCcmVha1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb2xvclRvSW50KGNvbG9yKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKGNvbG9yICogMjU1KTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSW50KHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgcmV0dXJuIGNvbG9yVG9JbnQocmVkKSArIFwiLFwiICsgY29sb3JUb0ludChncmVlbikgKyBcIixcIiArIGNvbG9yVG9JbnQoYmx1ZSk7XG59XG5cbmZ1bmN0aW9uIGhzbFRvUmdiKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzLCBjb252ZXJ0KSB7XG4gIGlmIChjb252ZXJ0ID09PSB2b2lkIDApIHtcbiAgICBjb252ZXJ0ID0gY29udmVydFRvSW50O1xuICB9XG5cbiAgaWYgKHNhdHVyYXRpb24gPT09IDApIHtcbiAgICAvLyBhY2hyb21hdGljXG4gICAgcmV0dXJuIGNvbnZlcnQobGlnaHRuZXNzLCBsaWdodG5lc3MsIGxpZ2h0bmVzcyk7XG4gIH0gLy8gZm9ybXVsYWUgZnJvbSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9IU0xfYW5kX0hTVlxuXG5cbiAgdmFyIGh1ZVByaW1lID0gKGh1ZSAlIDM2MCArIDM2MCkgJSAzNjAgLyA2MDtcbiAgdmFyIGNocm9tYSA9ICgxIC0gTWF0aC5hYnMoMiAqIGxpZ2h0bmVzcyAtIDEpKSAqIHNhdHVyYXRpb247XG4gIHZhciBzZWNvbmRDb21wb25lbnQgPSBjaHJvbWEgKiAoMSAtIE1hdGguYWJzKGh1ZVByaW1lICUgMiAtIDEpKTtcbiAgdmFyIHJlZCA9IDA7XG4gIHZhciBncmVlbiA9IDA7XG4gIHZhciBibHVlID0gMDtcblxuICBpZiAoaHVlUHJpbWUgPj0gMCAmJiBodWVQcmltZSA8IDEpIHtcbiAgICByZWQgPSBjaHJvbWE7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMSAmJiBodWVQcmltZSA8IDIpIHtcbiAgICByZWQgPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgZ3JlZW4gPSBjaHJvbWE7XG4gIH0gZWxzZSBpZiAoaHVlUHJpbWUgPj0gMiAmJiBodWVQcmltZSA8IDMpIHtcbiAgICBncmVlbiA9IGNocm9tYTtcbiAgICBibHVlID0gc2Vjb25kQ29tcG9uZW50O1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDMgJiYgaHVlUHJpbWUgPCA0KSB7XG4gICAgZ3JlZW4gPSBzZWNvbmRDb21wb25lbnQ7XG4gICAgYmx1ZSA9IGNocm9tYTtcbiAgfSBlbHNlIGlmIChodWVQcmltZSA+PSA0ICYmIGh1ZVByaW1lIDwgNSkge1xuICAgIHJlZCA9IHNlY29uZENvbXBvbmVudDtcbiAgICBibHVlID0gY2hyb21hO1xuICB9IGVsc2UgaWYgKGh1ZVByaW1lID49IDUgJiYgaHVlUHJpbWUgPCA2KSB7XG4gICAgcmVkID0gY2hyb21hO1xuICAgIGJsdWUgPSBzZWNvbmRDb21wb25lbnQ7XG4gIH1cblxuICB2YXIgbGlnaHRuZXNzTW9kaWZpY2F0aW9uID0gbGlnaHRuZXNzIC0gY2hyb21hIC8gMjtcbiAgdmFyIGZpbmFsUmVkID0gcmVkICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICB2YXIgZmluYWxHcmVlbiA9IGdyZWVuICsgbGlnaHRuZXNzTW9kaWZpY2F0aW9uO1xuICB2YXIgZmluYWxCbHVlID0gYmx1ZSArIGxpZ2h0bmVzc01vZGlmaWNhdGlvbjtcbiAgcmV0dXJuIGNvbnZlcnQoZmluYWxSZWQsIGZpbmFsR3JlZW4sIGZpbmFsQmx1ZSk7XG59XG5cbnZhciBuYW1lZENvbG9yTWFwID0ge1xuICBhbGljZWJsdWU6ICdmMGY4ZmYnLFxuICBhbnRpcXVld2hpdGU6ICdmYWViZDcnLFxuICBhcXVhOiAnMDBmZmZmJyxcbiAgYXF1YW1hcmluZTogJzdmZmZkNCcsXG4gIGF6dXJlOiAnZjBmZmZmJyxcbiAgYmVpZ2U6ICdmNWY1ZGMnLFxuICBiaXNxdWU6ICdmZmU0YzQnLFxuICBibGFjazogJzAwMCcsXG4gIGJsYW5jaGVkYWxtb25kOiAnZmZlYmNkJyxcbiAgYmx1ZTogJzAwMDBmZicsXG4gIGJsdWV2aW9sZXQ6ICc4YTJiZTInLFxuICBicm93bjogJ2E1MmEyYScsXG4gIGJ1cmx5d29vZDogJ2RlYjg4NycsXG4gIGNhZGV0Ymx1ZTogJzVmOWVhMCcsXG4gIGNoYXJ0cmV1c2U6ICc3ZmZmMDAnLFxuICBjaG9jb2xhdGU6ICdkMjY5MWUnLFxuICBjb3JhbDogJ2ZmN2Y1MCcsXG4gIGNvcm5mbG93ZXJibHVlOiAnNjQ5NWVkJyxcbiAgY29ybnNpbGs6ICdmZmY4ZGMnLFxuICBjcmltc29uOiAnZGMxNDNjJyxcbiAgY3lhbjogJzAwZmZmZicsXG4gIGRhcmtibHVlOiAnMDAwMDhiJyxcbiAgZGFya2N5YW46ICcwMDhiOGInLFxuICBkYXJrZ29sZGVucm9kOiAnYjg4NjBiJyxcbiAgZGFya2dyYXk6ICdhOWE5YTknLFxuICBkYXJrZ3JlZW46ICcwMDY0MDAnLFxuICBkYXJrZ3JleTogJ2E5YTlhOScsXG4gIGRhcmtraGFraTogJ2JkYjc2YicsXG4gIGRhcmttYWdlbnRhOiAnOGIwMDhiJyxcbiAgZGFya29saXZlZ3JlZW46ICc1NTZiMmYnLFxuICBkYXJrb3JhbmdlOiAnZmY4YzAwJyxcbiAgZGFya29yY2hpZDogJzk5MzJjYycsXG4gIGRhcmtyZWQ6ICc4YjAwMDAnLFxuICBkYXJrc2FsbW9uOiAnZTk5NjdhJyxcbiAgZGFya3NlYWdyZWVuOiAnOGZiYzhmJyxcbiAgZGFya3NsYXRlYmx1ZTogJzQ4M2Q4YicsXG4gIGRhcmtzbGF0ZWdyYXk6ICcyZjRmNGYnLFxuICBkYXJrc2xhdGVncmV5OiAnMmY0ZjRmJyxcbiAgZGFya3R1cnF1b2lzZTogJzAwY2VkMScsXG4gIGRhcmt2aW9sZXQ6ICc5NDAwZDMnLFxuICBkZWVwcGluazogJ2ZmMTQ5MycsXG4gIGRlZXBza3libHVlOiAnMDBiZmZmJyxcbiAgZGltZ3JheTogJzY5Njk2OScsXG4gIGRpbWdyZXk6ICc2OTY5NjknLFxuICBkb2RnZXJibHVlOiAnMWU5MGZmJyxcbiAgZmlyZWJyaWNrOiAnYjIyMjIyJyxcbiAgZmxvcmFsd2hpdGU6ICdmZmZhZjAnLFxuICBmb3Jlc3RncmVlbjogJzIyOGIyMicsXG4gIGZ1Y2hzaWE6ICdmZjAwZmYnLFxuICBnYWluc2Jvcm86ICdkY2RjZGMnLFxuICBnaG9zdHdoaXRlOiAnZjhmOGZmJyxcbiAgZ29sZDogJ2ZmZDcwMCcsXG4gIGdvbGRlbnJvZDogJ2RhYTUyMCcsXG4gIGdyYXk6ICc4MDgwODAnLFxuICBncmVlbjogJzAwODAwMCcsXG4gIGdyZWVueWVsbG93OiAnYWRmZjJmJyxcbiAgZ3JleTogJzgwODA4MCcsXG4gIGhvbmV5ZGV3OiAnZjBmZmYwJyxcbiAgaG90cGluazogJ2ZmNjliNCcsXG4gIGluZGlhbnJlZDogJ2NkNWM1YycsXG4gIGluZGlnbzogJzRiMDA4MicsXG4gIGl2b3J5OiAnZmZmZmYwJyxcbiAga2hha2k6ICdmMGU2OGMnLFxuICBsYXZlbmRlcjogJ2U2ZTZmYScsXG4gIGxhdmVuZGVyYmx1c2g6ICdmZmYwZjUnLFxuICBsYXduZ3JlZW46ICc3Y2ZjMDAnLFxuICBsZW1vbmNoaWZmb246ICdmZmZhY2QnLFxuICBsaWdodGJsdWU6ICdhZGQ4ZTYnLFxuICBsaWdodGNvcmFsOiAnZjA4MDgwJyxcbiAgbGlnaHRjeWFuOiAnZTBmZmZmJyxcbiAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICdmYWZhZDInLFxuICBsaWdodGdyYXk6ICdkM2QzZDMnLFxuICBsaWdodGdyZWVuOiAnOTBlZTkwJyxcbiAgbGlnaHRncmV5OiAnZDNkM2QzJyxcbiAgbGlnaHRwaW5rOiAnZmZiNmMxJyxcbiAgbGlnaHRzYWxtb246ICdmZmEwN2EnLFxuICBsaWdodHNlYWdyZWVuOiAnMjBiMmFhJyxcbiAgbGlnaHRza3libHVlOiAnODdjZWZhJyxcbiAgbGlnaHRzbGF0ZWdyYXk6ICc3ODknLFxuICBsaWdodHNsYXRlZ3JleTogJzc4OScsXG4gIGxpZ2h0c3RlZWxibHVlOiAnYjBjNGRlJyxcbiAgbGlnaHR5ZWxsb3c6ICdmZmZmZTAnLFxuICBsaW1lOiAnMGYwJyxcbiAgbGltZWdyZWVuOiAnMzJjZDMyJyxcbiAgbGluZW46ICdmYWYwZTYnLFxuICBtYWdlbnRhOiAnZjBmJyxcbiAgbWFyb29uOiAnODAwMDAwJyxcbiAgbWVkaXVtYXF1YW1hcmluZTogJzY2Y2RhYScsXG4gIG1lZGl1bWJsdWU6ICcwMDAwY2QnLFxuICBtZWRpdW1vcmNoaWQ6ICdiYTU1ZDMnLFxuICBtZWRpdW1wdXJwbGU6ICc5MzcwZGInLFxuICBtZWRpdW1zZWFncmVlbjogJzNjYjM3MScsXG4gIG1lZGl1bXNsYXRlYmx1ZTogJzdiNjhlZScsXG4gIG1lZGl1bXNwcmluZ2dyZWVuOiAnMDBmYTlhJyxcbiAgbWVkaXVtdHVycXVvaXNlOiAnNDhkMWNjJyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAnYzcxNTg1JyxcbiAgbWlkbmlnaHRibHVlOiAnMTkxOTcwJyxcbiAgbWludGNyZWFtOiAnZjVmZmZhJyxcbiAgbWlzdHlyb3NlOiAnZmZlNGUxJyxcbiAgbW9jY2FzaW46ICdmZmU0YjUnLFxuICBuYXZham93aGl0ZTogJ2ZmZGVhZCcsXG4gIG5hdnk6ICcwMDAwODAnLFxuICBvbGRsYWNlOiAnZmRmNWU2JyxcbiAgb2xpdmU6ICc4MDgwMDAnLFxuICBvbGl2ZWRyYWI6ICc2YjhlMjMnLFxuICBvcmFuZ2U6ICdmZmE1MDAnLFxuICBvcmFuZ2VyZWQ6ICdmZjQ1MDAnLFxuICBvcmNoaWQ6ICdkYTcwZDYnLFxuICBwYWxlZ29sZGVucm9kOiAnZWVlOGFhJyxcbiAgcGFsZWdyZWVuOiAnOThmYjk4JyxcbiAgcGFsZXR1cnF1b2lzZTogJ2FmZWVlZScsXG4gIHBhbGV2aW9sZXRyZWQ6ICdkYjcwOTMnLFxuICBwYXBheWF3aGlwOiAnZmZlZmQ1JyxcbiAgcGVhY2hwdWZmOiAnZmZkYWI5JyxcbiAgcGVydTogJ2NkODUzZicsXG4gIHBpbms6ICdmZmMwY2InLFxuICBwbHVtOiAnZGRhMGRkJyxcbiAgcG93ZGVyYmx1ZTogJ2IwZTBlNicsXG4gIHB1cnBsZTogJzgwMDA4MCcsXG4gIHJlYmVjY2FwdXJwbGU6ICc2MzknLFxuICByZWQ6ICdmMDAnLFxuICByb3N5YnJvd246ICdiYzhmOGYnLFxuICByb3lhbGJsdWU6ICc0MTY5ZTEnLFxuICBzYWRkbGVicm93bjogJzhiNDUxMycsXG4gIHNhbG1vbjogJ2ZhODA3MicsXG4gIHNhbmR5YnJvd246ICdmNGE0NjAnLFxuICBzZWFncmVlbjogJzJlOGI1NycsXG4gIHNlYXNoZWxsOiAnZmZmNWVlJyxcbiAgc2llbm5hOiAnYTA1MjJkJyxcbiAgc2lsdmVyOiAnYzBjMGMwJyxcbiAgc2t5Ymx1ZTogJzg3Y2VlYicsXG4gIHNsYXRlYmx1ZTogJzZhNWFjZCcsXG4gIHNsYXRlZ3JheTogJzcwODA5MCcsXG4gIHNsYXRlZ3JleTogJzcwODA5MCcsXG4gIHNub3c6ICdmZmZhZmEnLFxuICBzcHJpbmdncmVlbjogJzAwZmY3ZicsXG4gIHN0ZWVsYmx1ZTogJzQ2ODJiNCcsXG4gIHRhbjogJ2QyYjQ4YycsXG4gIHRlYWw6ICcwMDgwODAnLFxuICB0aGlzdGxlOiAnZDhiZmQ4JyxcbiAgdG9tYXRvOiAnZmY2MzQ3JyxcbiAgdHVycXVvaXNlOiAnNDBlMGQwJyxcbiAgdmlvbGV0OiAnZWU4MmVlJyxcbiAgd2hlYXQ6ICdmNWRlYjMnLFxuICB3aGl0ZTogJ2ZmZicsXG4gIHdoaXRlc21va2U6ICdmNWY1ZjUnLFxuICB5ZWxsb3c6ICdmZjAnLFxuICB5ZWxsb3dncmVlbjogJzlhY2QzMidcbn07XG4vKipcbiAqIENoZWNrcyBpZiBhIHN0cmluZyBpcyBhIENTUyBuYW1lZCBjb2xvciBhbmQgcmV0dXJucyBpdHMgZXF1aXZhbGVudCBoZXggdmFsdWUsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBvcmlnaW5hbCBjb2xvci5cbiAqIEBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbmFtZVRvSGV4KGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSByZXR1cm4gY29sb3I7XG4gIHZhciBub3JtYWxpemVkQ29sb3JOYW1lID0gY29sb3IudG9Mb3dlckNhc2UoKTtcbiAgcmV0dXJuIG5hbWVkQ29sb3JNYXBbbm9ybWFsaXplZENvbG9yTmFtZV0gPyBcIiNcIiArIG5hbWVkQ29sb3JNYXBbbm9ybWFsaXplZENvbG9yTmFtZV0gOiBjb2xvcjtcbn1cblxudmFyIGhleFJlZ2V4ID0gL14jW2EtZkEtRjAtOV17Nn0kLztcbnZhciBoZXhSZ2JhUmVnZXggPSAvXiNbYS1mQS1GMC05XXs4fSQvO1xudmFyIHJlZHVjZWRIZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezN9JC87XG52YXIgcmVkdWNlZFJnYmFIZXhSZWdleCA9IC9eI1thLWZBLUYwLTldezR9JC87XG52YXIgcmdiUmVnZXggPSAvXnJnYlxcKFxccyooXFxkezEsM30pXFxzKig/OiwpP1xccyooXFxkezEsM30pXFxzKig/OiwpP1xccyooXFxkezEsM30pXFxzKlxcKSQvaTtcbnZhciByZ2JhUmVnZXggPSAvXnJnYig/OmEpP1xcKFxccyooXFxkezEsM30pXFxzKig/OiwpP1xccyooXFxkezEsM30pXFxzKig/OiwpP1xccyooXFxkezEsM30pXFxzKig/Oix8XFwvKVxccyooWy0rXT9cXGQqWy5dP1xcZCtbJV0/KVxccypcXCkkL2k7XG52YXIgaHNsUmVnZXggPSAvXmhzbFxcKFxccyooXFxkezAsM31bLl0/WzAtOV0rKD86ZGVnKT8pXFxzKig/OiwpP1xccyooXFxkezEsM31bLl0/WzAtOV0/KSVcXHMqKD86LCk/XFxzKihcXGR7MSwzfVsuXT9bMC05XT8pJVxccypcXCkkL2k7XG52YXIgaHNsYVJlZ2V4ID0gL15oc2woPzphKT9cXChcXHMqKFxcZHswLDN9Wy5dP1swLTldKyg/OmRlZyk/KVxccyooPzosKT9cXHMqKFxcZHsxLDN9Wy5dP1swLTldPyklXFxzKig/OiwpP1xccyooXFxkezEsM31bLl0/WzAtOV0/KSVcXHMqKD86LHxcXC8pXFxzKihbLStdP1xcZCpbLl0/XFxkK1slXT8pXFxzKlxcKSQvaTtcbi8qKlxuICogUmV0dXJucyBhbiBSZ2JDb2xvciBvciBSZ2JhQ29sb3Igb2JqZWN0LiBUaGlzIHV0aWxpdHkgZnVuY3Rpb24gaXMgb25seSB1c2VmdWxcbiAqIGlmIHdhbnQgdG8gZXh0cmFjdCBhIGNvbG9yIGNvbXBvbmVudC4gV2l0aCB0aGUgY29sb3IgdXRpbCBgdG9Db2xvclN0cmluZ2AgeW91XG4gKiBjYW4gY29udmVydCBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QgYmFjayB0byBhIHN0cmluZy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXNzaWducyBgeyByZWQ6IDI1NSwgZ3JlZW46IDAsIGJsdWU6IDAgfWAgdG8gY29sb3IxXG4gKiBjb25zdCBjb2xvcjEgPSBwYXJzZVRvUmdiKCdyZ2IoMjU1LCAwLCAwKScpO1xuICogLy8gQXNzaWducyBgeyByZWQ6IDkyLCBncmVlbjogMTAyLCBibHVlOiAxMTIsIGFscGhhOiAwLjc1IH1gIHRvIGNvbG9yMlxuICogY29uc3QgY29sb3IyID0gcGFyc2VUb1JnYignaHNsYSgyMTAsIDEwJSwgNDAlLCAwLjc1KScpO1xuICovXG5cbmZ1bmN0aW9uIHBhcnNlVG9SZ2IoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigzKTtcbiAgfVxuXG4gIHZhciBub3JtYWxpemVkQ29sb3IgPSBuYW1lVG9IZXgoY29sb3IpO1xuXG4gIGlmIChub3JtYWxpemVkQ29sb3IubWF0Y2goaGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNV0gKyBub3JtYWxpemVkQ29sb3JbNl0sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKGhleFJnYmFSZWdleCkpIHtcbiAgICB2YXIgYWxwaGEgPSBwYXJzZUZsb2F0KChwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzddICsgbm9ybWFsaXplZENvbG9yWzhdLCAxNikgLyAyNTUpLnRvRml4ZWQoMikpO1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMV0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzNdICsgbm9ybWFsaXplZENvbG9yWzRdLCAxNiksXG4gICAgICBibHVlOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzVdICsgbm9ybWFsaXplZENvbG9yWzZdLCAxNiksXG4gICAgICBhbHBoYTogYWxwaGFcbiAgICB9O1xuICB9XG5cbiAgaWYgKG5vcm1hbGl6ZWRDb2xvci5tYXRjaChyZWR1Y2VkSGV4UmVnZXgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlZDogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsxXSArIG5vcm1hbGl6ZWRDb2xvclsxXSwgMTYpLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbMl0gKyBub3JtYWxpemVkQ29sb3JbMl0sIDE2KSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbM10gKyBub3JtYWxpemVkQ29sb3JbM10sIDE2KVxuICAgIH07XG4gIH1cblxuICBpZiAobm9ybWFsaXplZENvbG9yLm1hdGNoKHJlZHVjZWRSZ2JhSGV4UmVnZXgpKSB7XG4gICAgdmFyIF9hbHBoYSA9IHBhcnNlRmxvYXQoKHBhcnNlSW50KFwiXCIgKyBub3JtYWxpemVkQ29sb3JbNF0gKyBub3JtYWxpemVkQ29sb3JbNF0sIDE2KSAvIDI1NSkudG9GaXhlZCgyKSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgbm9ybWFsaXplZENvbG9yWzFdICsgbm9ybWFsaXplZENvbG9yWzFdLCAxNiksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclsyXSArIG5vcm1hbGl6ZWRDb2xvclsyXSwgMTYpLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIG5vcm1hbGl6ZWRDb2xvclszXSArIG5vcm1hbGl6ZWRDb2xvclszXSwgMTYpLFxuICAgICAgYWxwaGE6IF9hbHBoYVxuICAgIH07XG4gIH1cblxuICB2YXIgcmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAocmdiTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIHJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyByZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIHJnYmFNYXRjaGVkID0gcmdiYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yLnN1YnN0cmluZygwLCA1MCkpO1xuXG4gIGlmIChyZ2JhTWF0Y2hlZCkge1xuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFsxXSwgMTApLFxuICAgICAgZ3JlZW46IHBhcnNlSW50KFwiXCIgKyByZ2JhTWF0Y2hlZFsyXSwgMTApLFxuICAgICAgYmx1ZTogcGFyc2VJbnQoXCJcIiArIHJnYmFNYXRjaGVkWzNdLCAxMCksXG4gICAgICBhbHBoYTogcGFyc2VGbG9hdChcIlwiICsgcmdiYU1hdGNoZWRbNF0pID4gMSA/IHBhcnNlRmxvYXQoXCJcIiArIHJnYmFNYXRjaGVkWzRdKSAvIDEwMCA6IHBhcnNlRmxvYXQoXCJcIiArIHJnYmFNYXRjaGVkWzRdKVxuICAgIH07XG4gIH1cblxuICB2YXIgaHNsTWF0Y2hlZCA9IGhzbFJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yKTtcblxuICBpZiAoaHNsTWF0Y2hlZCkge1xuICAgIHZhciBodWUgPSBwYXJzZUludChcIlwiICsgaHNsTWF0Y2hlZFsxXSwgMTApO1xuICAgIHZhciBzYXR1cmF0aW9uID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbMl0sIDEwKSAvIDEwMDtcbiAgICB2YXIgbGlnaHRuZXNzID0gcGFyc2VJbnQoXCJcIiArIGhzbE1hdGNoZWRbM10sIDEwKSAvIDEwMDtcbiAgICB2YXIgcmdiQ29sb3JTdHJpbmcgPSBcInJnYihcIiArIGhzbFRvUmdiKGh1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSArIFwiKVwiO1xuICAgIHZhciBoc2xSZ2JNYXRjaGVkID0gcmdiUmVnZXguZXhlYyhyZ2JDb2xvclN0cmluZyk7XG5cbiAgICBpZiAoIWhzbFJnYk1hdGNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQsIG5vcm1hbGl6ZWRDb2xvciwgcmdiQ29sb3JTdHJpbmcpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWQ6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzFdLCAxMCksXG4gICAgICBncmVlbjogcGFyc2VJbnQoXCJcIiArIGhzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBoc2xSZ2JNYXRjaGVkWzNdLCAxMClcbiAgICB9O1xuICB9XG5cbiAgdmFyIGhzbGFNYXRjaGVkID0gaHNsYVJlZ2V4LmV4ZWMobm9ybWFsaXplZENvbG9yLnN1YnN0cmluZygwLCA1MCkpO1xuXG4gIGlmIChoc2xhTWF0Y2hlZCkge1xuICAgIHZhciBfaHVlID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzFdLCAxMCk7XG5cbiAgICB2YXIgX3NhdHVyYXRpb24gPSBwYXJzZUludChcIlwiICsgaHNsYU1hdGNoZWRbMl0sIDEwKSAvIDEwMDtcblxuICAgIHZhciBfbGlnaHRuZXNzID0gcGFyc2VJbnQoXCJcIiArIGhzbGFNYXRjaGVkWzNdLCAxMCkgLyAxMDA7XG5cbiAgICB2YXIgX3JnYkNvbG9yU3RyaW5nID0gXCJyZ2IoXCIgKyBoc2xUb1JnYihfaHVlLCBfc2F0dXJhdGlvbiwgX2xpZ2h0bmVzcykgKyBcIilcIjtcblxuICAgIHZhciBfaHNsUmdiTWF0Y2hlZCA9IHJnYlJlZ2V4LmV4ZWMoX3JnYkNvbG9yU3RyaW5nKTtcblxuICAgIGlmICghX2hzbFJnYk1hdGNoZWQpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDQsIG5vcm1hbGl6ZWRDb2xvciwgX3JnYkNvbG9yU3RyaW5nKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVkOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbMV0sIDEwKSxcbiAgICAgIGdyZWVuOiBwYXJzZUludChcIlwiICsgX2hzbFJnYk1hdGNoZWRbMl0sIDEwKSxcbiAgICAgIGJsdWU6IHBhcnNlSW50KFwiXCIgKyBfaHNsUmdiTWF0Y2hlZFszXSwgMTApLFxuICAgICAgYWxwaGE6IHBhcnNlRmxvYXQoXCJcIiArIGhzbGFNYXRjaGVkWzRdKSA+IDEgPyBwYXJzZUZsb2F0KFwiXCIgKyBoc2xhTWF0Y2hlZFs0XSkgLyAxMDAgOiBwYXJzZUZsb2F0KFwiXCIgKyBoc2xhTWF0Y2hlZFs0XSlcbiAgICB9O1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNSk7XG59XG5cbmZ1bmN0aW9uIHJnYlRvSHNsKGNvbG9yKSB7XG4gIC8vIG1ha2Ugc3VyZSByZ2IgYXJlIGNvbnRhaW5lZCBpbiBhIHNldCBvZiBbMCwgMjU1XVxuICB2YXIgcmVkID0gY29sb3IucmVkIC8gMjU1O1xuICB2YXIgZ3JlZW4gPSBjb2xvci5ncmVlbiAvIDI1NTtcbiAgdmFyIGJsdWUgPSBjb2xvci5ibHVlIC8gMjU1O1xuICB2YXIgbWF4ID0gTWF0aC5tYXgocmVkLCBncmVlbiwgYmx1ZSk7XG4gIHZhciBtaW4gPSBNYXRoLm1pbihyZWQsIGdyZWVuLCBibHVlKTtcbiAgdmFyIGxpZ2h0bmVzcyA9IChtYXggKyBtaW4pIC8gMjtcblxuICBpZiAobWF4ID09PSBtaW4pIHtcbiAgICAvLyBhY2hyb21hdGljXG4gICAgaWYgKGNvbG9yLmFscGhhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGh1ZTogMCxcbiAgICAgICAgc2F0dXJhdGlvbjogMCxcbiAgICAgICAgbGlnaHRuZXNzOiBsaWdodG5lc3MsXG4gICAgICAgIGFscGhhOiBjb2xvci5hbHBoYVxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaHVlOiAwLFxuICAgICAgICBzYXR1cmF0aW9uOiAwLFxuICAgICAgICBsaWdodG5lc3M6IGxpZ2h0bmVzc1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgaHVlO1xuICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gIHZhciBzYXR1cmF0aW9uID0gbGlnaHRuZXNzID4gMC41ID8gZGVsdGEgLyAoMiAtIG1heCAtIG1pbikgOiBkZWx0YSAvIChtYXggKyBtaW4pO1xuXG4gIHN3aXRjaCAobWF4KSB7XG4gICAgY2FzZSByZWQ6XG4gICAgICBodWUgPSAoZ3JlZW4gLSBibHVlKSAvIGRlbHRhICsgKGdyZWVuIDwgYmx1ZSA/IDYgOiAwKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBncmVlbjpcbiAgICAgIGh1ZSA9IChibHVlIC0gcmVkKSAvIGRlbHRhICsgMjtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIGJsdWUgY2FzZVxuICAgICAgaHVlID0gKHJlZCAtIGdyZWVuKSAvIGRlbHRhICsgNDtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaHVlICo9IDYwO1xuXG4gIGlmIChjb2xvci5hbHBoYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGh1ZTogaHVlLFxuICAgICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbixcbiAgICAgIGxpZ2h0bmVzczogbGlnaHRuZXNzLFxuICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaHVlOiBodWUsXG4gICAgc2F0dXJhdGlvbjogc2F0dXJhdGlvbixcbiAgICBsaWdodG5lc3M6IGxpZ2h0bmVzc1xuICB9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gSHNsQ29sb3Igb3IgSHNsYUNvbG9yIG9iamVjdC4gVGhpcyB1dGlsaXR5IGZ1bmN0aW9uIGlzIG9ubHkgdXNlZnVsXG4gKiBpZiB3YW50IHRvIGV4dHJhY3QgYSBjb2xvciBjb21wb25lbnQuIFdpdGggdGhlIGNvbG9yIHV0aWwgYHRvQ29sb3JTdHJpbmdgIHlvdVxuICogY2FuIGNvbnZlcnQgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IGJhY2sgdG8gYSBzdHJpbmcuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFzc2lnbnMgYHsgaHVlOiAwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9YCB0byBjb2xvcjFcbiAqIGNvbnN0IGNvbG9yMSA9IHBhcnNlVG9Ic2woJ3JnYigyNTUsIDAsIDApJyk7XG4gKiAvLyBBc3NpZ25zIGB7IGh1ZTogMTI4LCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSwgYWxwaGE6IDAuNzUgfWAgdG8gY29sb3IyXG4gKiBjb25zdCBjb2xvcjIgPSBwYXJzZVRvSHNsKCdoc2xhKDEyOCwgMTAwJSwgNTAlLCAwLjc1KScpO1xuICovXG5mdW5jdGlvbiBwYXJzZVRvSHNsKGNvbG9yKSB7XG4gIC8vIE5vdGU6IEF0IGEgbGF0ZXIgc3RhZ2Ugd2UgY2FuIG9wdGltaXplIHRoaXMgZnVuY3Rpb24gYXMgcmlnaHQgbm93IGEgaHNsXG4gIC8vIGNvbG9yIHdvdWxkIGJlIHBhcnNlZCBjb252ZXJ0ZWQgdG8gcmdiIHZhbHVlcyBhbmQgY29udmVydGVkIGJhY2sgdG8gaHNsLlxuICByZXR1cm4gcmdiVG9Ic2wocGFyc2VUb1JnYihjb2xvcikpO1xufVxuXG4vKipcbiAqIFJlZHVjZXMgaGV4IHZhbHVlcyBpZiBwb3NzaWJsZSBlLmcuICNmZjg4NjYgdG8gI2Y4NlxuICogQHByaXZhdGVcbiAqL1xudmFyIHJlZHVjZUhleFZhbHVlID0gZnVuY3Rpb24gcmVkdWNlSGV4VmFsdWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gNyAmJiB2YWx1ZVsxXSA9PT0gdmFsdWVbMl0gJiYgdmFsdWVbM10gPT09IHZhbHVlWzRdICYmIHZhbHVlWzVdID09PSB2YWx1ZVs2XSkge1xuICAgIHJldHVybiBcIiNcIiArIHZhbHVlWzFdICsgdmFsdWVbM10gKyB2YWx1ZVs1XTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciByZWR1Y2VIZXhWYWx1ZSQxID0gcmVkdWNlSGV4VmFsdWU7XG5cbmZ1bmN0aW9uIG51bWJlclRvSGV4KHZhbHVlKSB7XG4gIHZhciBoZXggPSB2YWx1ZS50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9IZXgoY29sb3IpIHtcbiAgcmV0dXJuIG51bWJlclRvSGV4KE1hdGgucm91bmQoY29sb3IgKiAyNTUpKTtcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSGV4KHJlZCwgZ3JlZW4sIGJsdWUpIHtcbiAgcmV0dXJuIHJlZHVjZUhleFZhbHVlJDEoXCIjXCIgKyBjb2xvclRvSGV4KHJlZCkgKyBjb2xvclRvSGV4KGdyZWVuKSArIGNvbG9yVG9IZXgoYmx1ZSkpO1xufVxuXG5mdW5jdGlvbiBoc2xUb0hleChodWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykge1xuICByZXR1cm4gaHNsVG9SZ2IoaHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MsIGNvbnZlcnRUb0hleCk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsKDM1OSwgMC43NSwgMC40KSxcbiAqICAgYmFja2dyb3VuZDogaHNsKHsgaHVlOiAzNjAsIHNhdHVyYXRpb246IDAuNzUsIGxpZ2h0bmVzczogMC40IH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbCgzNTksIDAuNzUsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbCh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNiMzE5MWNcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbCh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBzYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgbGlnaHRuZXNzID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBoc2xUb0hleCh2YWx1ZSwgc2F0dXJhdGlvbiwgbGlnaHRuZXNzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHNhdHVyYXRpb24gPT09IHVuZGVmaW5lZCAmJiBsaWdodG5lc3MgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBoc2xUb0hleCh2YWx1ZS5odWUsIHZhbHVlLnNhdHVyYXRpb24sIHZhbHVlLmxpZ2h0bmVzcyk7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcigxKTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgc3RyaW5nIHZhbHVlIGZvciB0aGUgY29sb3IuIFRoZSByZXR1cm5lZCByZXN1bHQgaXMgdGhlIHNtYWxsZXN0IHBvc3NpYmxlIHJnYmEgb3IgaGV4IG5vdGF0aW9uLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoMzU5LCAwLjc1LCAwLjQsIDAuNyksXG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLDcgfSksXG4gKiAgIGJhY2tncm91bmQ6IGhzbGEoMzU5LCAwLjc1LCAwLjQsIDEpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoMzU5LCAwLjc1LCAwLjQsIDAuNyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoeyBodWU6IDM2MCwgc2F0dXJhdGlvbjogMC43NSwgbGlnaHRuZXNzOiAwLjQsIGFscGhhOiAwLDcgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke2hzbGEoMzU5LCAwLjc1LCAwLjQsIDEpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgxNzksMjUsMjgsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI4LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjYjMxOTFjXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGhzbGEodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcywgYWxwaGEpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNhdHVyYXRpb24gPT09ICdudW1iZXInICYmIHR5cGVvZiBsaWdodG5lc3MgPT09ICdudW1iZXInICYmIHR5cGVvZiBhbHBoYSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gYWxwaGEgPj0gMSA/IGhzbFRvSGV4KHZhbHVlLCBzYXR1cmF0aW9uLCBsaWdodG5lc3MpIDogXCJyZ2JhKFwiICsgaHNsVG9SZ2IodmFsdWUsIHNhdHVyYXRpb24sIGxpZ2h0bmVzcykgKyBcIixcIiArIGFscGhhICsgXCIpXCI7XG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBzYXR1cmF0aW9uID09PSB1bmRlZmluZWQgJiYgbGlnaHRuZXNzID09PSB1bmRlZmluZWQgJiYgYWxwaGEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2YWx1ZS5hbHBoYSA+PSAxID8gaHNsVG9IZXgodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpIDogXCJyZ2JhKFwiICsgaHNsVG9SZ2IodmFsdWUuaHVlLCB2YWx1ZS5zYXR1cmF0aW9uLCB2YWx1ZS5saWdodG5lc3MpICsgXCIsXCIgKyB2YWx1ZS5hbHBoYSArIFwiKVwiO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoMik7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSBoZXggbm90YXRpb24uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjA1LCAxMDApLFxuICogICBiYWNrZ3JvdW5kOiByZ2IoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYigyNTUsIDIwNSwgMTAwKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCIjZmZjZDY0XCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYih2YWx1ZSwgZ3JlZW4sIGJsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgYmx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gcmVkdWNlSGV4VmFsdWUkMShcIiNcIiArIG51bWJlclRvSGV4KHZhbHVlKSArIG51bWJlclRvSGV4KGdyZWVuKSArIG51bWJlclRvSGV4KGJsdWUpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIGdyZWVuID09PSB1bmRlZmluZWQgJiYgYmx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlZHVjZUhleFZhbHVlJDEoXCIjXCIgKyBudW1iZXJUb0hleCh2YWx1ZS5yZWQpICsgbnVtYmVyVG9IZXgodmFsdWUuZ3JlZW4pICsgbnVtYmVyVG9IZXgodmFsdWUuYmx1ZSkpO1xuICB9XG5cbiAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNik7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGNvbG9yLiBUaGUgcmV0dXJuZWQgcmVzdWx0IGlzIHRoZSBzbWFsbGVzdCBwb3NzaWJsZSByZ2JhIG9yIGhleCBub3RhdGlvbi5cbiAqXG4gKiBDYW4gYWxzbyBiZSB1c2VkIHRvIGZhZGUgYSBjb2xvciBieSBwYXNzaW5nIGEgaGV4IHZhbHVlIG9yIG5hbWVkIENTUyBjb2xvciBhbG9uZyB3aXRoIGFuIGFscGhhIHZhbHVlLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMC43KSxcbiAqICAgYmFja2dyb3VuZDogcmdiYSh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcgfSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyMDUsIDEwMCwgMSksXG4gKiAgIGJhY2tncm91bmQ6IHJnYmEoJyNmZmZmZmYnLCAwLjQpLFxuICogICBiYWNrZ3JvdW5kOiByZ2JhKCdibGFjaycsIDAuNyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAwLjcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JhKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNyB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgyNTUsIDIwNSwgMTAwLCAxKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7cmdiYSgnI2ZmZmZmZicsIDAuNCl9O1xuICogICBiYWNrZ3JvdW5kOiAke3JnYmEoJ2JsYWNrJywgMC43KX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDIwNSwxMDAsMC43KVwiO1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNClcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMCwwLDAuNylcIjtcbiAqIH1cbiAqL1xuZnVuY3Rpb24gcmdiYShmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSwgdGhpcmRWYWx1ZSwgZm91cnRoVmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2Vjb25kVmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgdmFyIHJnYlZhbHVlID0gcGFyc2VUb1JnYihmaXJzdFZhbHVlKTtcbiAgICByZXR1cm4gXCJyZ2JhKFwiICsgcmdiVmFsdWUucmVkICsgXCIsXCIgKyByZ2JWYWx1ZS5ncmVlbiArIFwiLFwiICsgcmdiVmFsdWUuYmx1ZSArIFwiLFwiICsgc2Vjb25kVmFsdWUgKyBcIilcIjtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZmlyc3RWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHNlY29uZFZhbHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgdGhpcmRWYWx1ZSA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGZvdXJ0aFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmb3VydGhWYWx1ZSA+PSAxID8gcmdiKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlLCB0aGlyZFZhbHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUgKyBcIixcIiArIHNlY29uZFZhbHVlICsgXCIsXCIgKyB0aGlyZFZhbHVlICsgXCIsXCIgKyBmb3VydGhWYWx1ZSArIFwiKVwiO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBmaXJzdFZhbHVlID09PSAnb2JqZWN0JyAmJiBzZWNvbmRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIHRoaXJkVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBmb3VydGhWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZpcnN0VmFsdWUuYWxwaGEgPj0gMSA/IHJnYihmaXJzdFZhbHVlLnJlZCwgZmlyc3RWYWx1ZS5ncmVlbiwgZmlyc3RWYWx1ZS5ibHVlKSA6IFwicmdiYShcIiArIGZpcnN0VmFsdWUucmVkICsgXCIsXCIgKyBmaXJzdFZhbHVlLmdyZWVuICsgXCIsXCIgKyBmaXJzdFZhbHVlLmJsdWUgKyBcIixcIiArIGZpcnN0VmFsdWUuYWxwaGEgKyBcIilcIjtcbiAgfVxuXG4gIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDcpO1xufVxuXG52YXIgaXNSZ2IgPSBmdW5jdGlvbiBpc1JnYihjb2xvcikge1xuICByZXR1cm4gdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicgJiYgKHR5cGVvZiBjb2xvci5hbHBoYSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvbG9yLmFscGhhID09PSAndW5kZWZpbmVkJyk7XG59O1xuXG52YXIgaXNSZ2JhID0gZnVuY3Rpb24gaXNSZ2JhKGNvbG9yKSB7XG4gIHJldHVybiB0eXBlb2YgY29sb3IucmVkID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuZ3JlZW4gPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5ibHVlID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcblxudmFyIGlzSHNsID0gZnVuY3Rpb24gaXNIc2woY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiAodHlwZW9mIGNvbG9yLmFscGhhICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICd1bmRlZmluZWQnKTtcbn07XG5cbnZhciBpc0hzbGEgPSBmdW5jdGlvbiBpc0hzbGEoY29sb3IpIHtcbiAgcmV0dXJuIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInO1xufTtcbi8qKlxuICogQ29udmVydHMgYSBSZ2JDb2xvciwgUmdiYUNvbG9yLCBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IHRvIGEgY29sb3Igc3RyaW5nLlxuICogVGhpcyB1dGlsIGlzIHVzZWZ1bCBpbiBjYXNlIHlvdSBvbmx5IGtub3cgb24gcnVudGltZSB3aGljaCBjb2xvciBvYmplY3QgaXNcbiAqIHVzZWQuIE90aGVyd2lzZSB3ZSByZWNvbW1lbmQgdG8gcmVseSBvbiBgcmdiYCwgYHJnYmFgLCBgaHNsYCBvciBgaHNsYWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSksXG4gKiAgIGJhY2tncm91bmQ6IHRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KSxcbiAqICAgYmFja2dyb3VuZDogdG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAgfSl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwLCBhbHBoYTogMC43MiB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNzIpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzAwZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTc5LDI1LDI1LDAuNzIpXCI7XG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0b0NvbG9yU3RyaW5nKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgIT09ICdvYmplY3QnKSB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig4KTtcbiAgaWYgKGlzUmdiYShjb2xvcikpIHJldHVybiByZ2JhKGNvbG9yKTtcbiAgaWYgKGlzUmdiKGNvbG9yKSkgcmV0dXJuIHJnYihjb2xvcik7XG4gIGlmIChpc0hzbGEoY29sb3IpKSByZXR1cm4gaHNsYShjb2xvcik7XG4gIGlmIChpc0hzbChjb2xvcikpIHJldHVybiBoc2woY29sb3IpO1xuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig4KTtcbn1cblxuLy8gVHlwZSBkZWZpbml0aW9ucyB0YWtlbiBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9nY2FudGkvZmxvdy1zdGF0aWMtbGFuZC9ibG9iL21hc3Rlci9zcmMvRnVuLmpzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuZnVuY3Rpb24gY3VycmllZChmLCBsZW5ndGgsIGFjYykge1xuICByZXR1cm4gZnVuY3Rpb24gZm4oKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1yZXN0LXBhcmFtc1xuICAgIHZhciBjb21iaW5lZCA9IGFjYy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgcmV0dXJuIGNvbWJpbmVkLmxlbmd0aCA+PSBsZW5ndGggPyBmLmFwcGx5KHRoaXMsIGNvbWJpbmVkKSA6IGN1cnJpZWQoZiwgbGVuZ3RoLCBjb21iaW5lZCk7XG4gIH07XG59IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZWRlY2xhcmVcblxuXG5mdW5jdGlvbiBjdXJyeShmKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcmVkZWNsYXJlXG4gIHJldHVybiBjdXJyaWVkKGYsIGYubGVuZ3RoLCBbXSk7XG59XG5cbi8qKlxuICogQ2hhbmdlcyB0aGUgaHVlIG9mIHRoZSBjb2xvci4gSHVlIGlzIGEgbnVtYmVyIGJldHdlZW4gMCB0byAzNjAuIFRoZSBmaXJzdFxuICogYXJndW1lbnQgZm9yIGFkanVzdEh1ZSBpcyB0aGUgYW1vdW50IG9mIGRlZ3JlZXMgdGhlIGNvbG9yIGlzIHJvdGF0ZWQgYXJvdW5kXG4gKiB0aGUgY29sb3Igd2hlZWwsIGFsd2F5cyBwcm9kdWNpbmcgYSBwb3NpdGl2ZSBodWUgdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogYWRqdXN0SHVlKDE4MCwgJyM0NDgnKSxcbiAqICAgYmFja2dyb3VuZDogYWRqdXN0SHVlKCcxODAnLCAncmdiYSgxMDEsMTAwLDIwNSwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7YWRqdXN0SHVlKDE4MCwgJyM0NDgnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7YWRqdXN0SHVlKCcxODAnLCAncmdiYSgxMDEsMTAwLDIwNSwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiM4ODg4NDRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDEzNiwxMzYsNjgsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGFkanVzdEh1ZShkZWdyZWUsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgaHVlOiBoc2xDb2xvci5odWUgKyBwYXJzZUZsb2F0KGRlZ3JlZSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZEFkanVzdEh1ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihhZGp1c3RIdWUpO1xudmFyIGN1cnJpZWRBZGp1c3RIdWUkMSA9IGN1cnJpZWRBZGp1c3RIdWU7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29tcGxlbWVudCBvZiB0aGUgcHJvdmlkZWQgY29sb3IuIFRoaXMgaXMgaWRlbnRpY2FsIHRvIGFkanVzdEh1ZSgxODAsIDxjb2xvcj4pLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGNvbXBsZW1lbnQoJyM0NDgnKSxcbiAqICAgYmFja2dyb3VuZDogY29tcGxlbWVudCgncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7Y29tcGxlbWVudCgnIzQ0OCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtjb21wbGVtZW50KCdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzg4NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTUzLDE1MywxNTMsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGNvbXBsZW1lbnQoY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBodWU6IChoc2xDb2xvci5odWUgKyAxODApICUgMzYwXG4gIH0pKTtcbn1cblxuZnVuY3Rpb24gZ3VhcmQobG93ZXJCb3VuZGFyeSwgdXBwZXJCb3VuZGFyeSwgdmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGxvd2VyQm91bmRhcnksIE1hdGgubWluKHVwcGVyQm91bmRhcnksIHZhbHVlKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGRhcmtlbmVkIGNvbG9yLlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IGRhcmtlbigwLjIsICcjRkZDRDY0JyksXG4gKiAgIGJhY2tncm91bmQ6IGRhcmtlbignMC4yJywgJ3JnYmEoMjU1LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2RhcmtlbigwLjIsICcjRkZDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke2RhcmtlbignMC4yJywgJ3JnYmEoMjU1LDIwNSwxMDAsMC43KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2ZmYmQzMVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LDE4OSw0OSwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gZGFya2VuKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBsaWdodG5lc3M6IGd1YXJkKDAsIDEsIGhzbENvbG9yLmxpZ2h0bmVzcyAtIHBhcnNlRmxvYXQoYW1vdW50KSlcbiAgfSkpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZERhcmtlbiA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihkYXJrZW4pO1xudmFyIGN1cnJpZWREYXJrZW4kMSA9IGN1cnJpZWREYXJrZW47XG5cbi8qKlxuICogRGVjcmVhc2VzIHRoZSBpbnRlbnNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGlzIGJldHdlZW4gMCB0byAxLiBUaGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIHRoZSBkZXNhdHVyYXRlIGZ1bmN0aW9uIGlzIHRoZSBhbW91bnQgYnkgaG93IG11Y2ggdGhlIGNvbG9yXG4gKiBpbnRlbnNpdHkgc2hvdWxkIGJlIGRlY3JlYXNlZC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBkZXNhdHVyYXRlKDAuMiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogZGVzYXR1cmF0ZSgnMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2Rlc2F0dXJhdGUoMC4yLCAnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtkZXNhdHVyYXRlKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNiOGI5NzlcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE4NCwxODUsMTIxLDAuNylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBkZXNhdHVyYXRlKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBzYXR1cmF0aW9uOiBndWFyZCgwLCAxLCBoc2xDb2xvci5zYXR1cmF0aW9uIC0gcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkRGVzYXR1cmF0ZSA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihkZXNhdHVyYXRlKTtcbnZhciBjdXJyaWVkRGVzYXR1cmF0ZSQxID0gY3VycmllZERlc2F0dXJhdGU7XG5cbi8qKlxuICogUmV0dXJucyBhIG51bWJlciAoZmxvYXQpIHJlcHJlc2VudGluZyB0aGUgbHVtaW5hbmNlIG9mIGEgY29sb3IuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogZ2V0THVtaW5hbmNlKCcjQ0NDRDY0JykgPj0gZ2V0THVtaW5hbmNlKCcjMDAwMGZmJykgPyAnI0NDQ0Q2NCcgOiAnIzAwMDBmZicsXG4gKiAgIGJhY2tncm91bmQ6IGdldEx1bWluYW5jZSgncmdiYSg1OCwgMTMzLCAyNTUsIDEpJykgPj0gZ2V0THVtaW5hbmNlKCdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknKSA/XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScgOlxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDI1NSwgNTcsIDE0OSwgMSknLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2dldEx1bWluYW5jZSgnI0NDQ0Q2NCcpID49IGdldEx1bWluYW5jZSgnIzAwMDBmZicpID8gJyNDQ0NENjQnIDogJyMwMDAwZmYnfTtcbiAqICAgYmFja2dyb3VuZDogJHtnZXRMdW1pbmFuY2UoJ3JnYmEoNTgsIDEzMywgMjU1LCAxKScpID49IGdldEx1bWluYW5jZSgncmdiYSgyNTUsIDU3LCAxNDksIDEpJykgP1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZ2JhKDU4LCAxMzMsIDI1NSwgMSknIDpcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmdiYSgyNTUsIDU3LCAxNDksIDEpJ307XG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI0NDQ0Q2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoNTgsIDEzMywgMjU1LCAxKVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGdldEx1bWluYW5jZShjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiAwO1xuICB2YXIgcmdiQ29sb3IgPSBwYXJzZVRvUmdiKGNvbG9yKTtcblxuICB2YXIgX09iamVjdCRrZXlzJG1hcCA9IE9iamVjdC5rZXlzKHJnYkNvbG9yKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBjaGFubmVsID0gcmdiQ29sb3Jba2V5XSAvIDI1NTtcbiAgICByZXR1cm4gY2hhbm5lbCA8PSAwLjAzOTI4ID8gY2hhbm5lbCAvIDEyLjkyIDogTWF0aC5wb3coKGNoYW5uZWwgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbiAgfSksXG4gICAgICByID0gX09iamVjdCRrZXlzJG1hcFswXSxcbiAgICAgIGcgPSBfT2JqZWN0JGtleXMkbWFwWzFdLFxuICAgICAgYiA9IF9PYmplY3Qka2V5cyRtYXBbMl07XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoKDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYikudG9GaXhlZCgzKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgY29udHJhc3QgcmF0aW8gYmV0d2VlbiB0d28gY29sb3JzIGJhc2VkIG9uXG4gKiBbVzMncyByZWNvbW1lbmRlZCBlcXVhdGlvbiBmb3IgY2FsY3VsYXRpbmcgY29udHJhc3RdKGh0dHA6Ly93d3cudzMub3JnL1RSL1dDQUcyMC8jY29udHJhc3QtcmF0aW9kZWYpLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBjb250cmFzdFJhdGlvID0gZ2V0Q29udHJhc3QoJyM0NDQnLCAnI2ZmZicpO1xuICovXG5cbmZ1bmN0aW9uIGdldENvbnRyYXN0KGNvbG9yMSwgY29sb3IyKSB7XG4gIHZhciBsdW1pbmFuY2UxID0gZ2V0THVtaW5hbmNlKGNvbG9yMSk7XG4gIHZhciBsdW1pbmFuY2UyID0gZ2V0THVtaW5hbmNlKGNvbG9yMik7XG4gIHJldHVybiBwYXJzZUZsb2F0KChsdW1pbmFuY2UxID4gbHVtaW5hbmNlMiA/IChsdW1pbmFuY2UxICsgMC4wNSkgLyAobHVtaW5hbmNlMiArIDAuMDUpIDogKGx1bWluYW5jZTIgKyAwLjA1KSAvIChsdW1pbmFuY2UxICsgMC4wNSkpLnRvRml4ZWQoMikpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBjb2xvciB0byBhIGdyYXlzY2FsZSwgYnkgcmVkdWNpbmcgaXRzIHNhdHVyYXRpb24gdG8gMC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBncmF5c2NhbGUoJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogZ3JheXNjYWxlKCdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtncmF5c2NhbGUoJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7Z3JheXNjYWxlKCdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzk5OVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTUzLDE1MywxNTMsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGdyYXlzY2FsZShjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHBhcnNlVG9Ic2woY29sb3IpLCB7XG4gICAgc2F0dXJhdGlvbjogMFxuICB9KSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBIc2xDb2xvciBvciBIc2xhQ29sb3Igb2JqZWN0IHRvIGEgY29sb3Igc3RyaW5nLlxuICogVGhpcyB1dGlsIGlzIHVzZWZ1bCBpbiBjYXNlIHlvdSBvbmx5IGtub3cgb24gcnVudGltZSB3aGljaCBjb2xvciBvYmplY3QgaXNcbiAqIHVzZWQuIE90aGVyd2lzZSB3ZSByZWNvbW1lbmQgdG8gcmVseSBvbiBgaHNsYCBvciBgaHNsYWAuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogaHNsVG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KSxcbiAqICAgYmFja2dyb3VuZDogaHNsVG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsVG9Db2xvclN0cmluZyh7IGh1ZTogMjQwLCBzYXR1cmF0aW9uOiAxLCBsaWdodG5lc3M6IDAuNSB9KX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aHNsVG9Db2xvclN0cmluZyh7IGh1ZTogMzYwLCBzYXR1cmF0aW9uOiAwLjc1LCBsaWdodG5lc3M6IDAuNCwgYWxwaGE6IDAuNzIgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiMwMGZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE3OSwyNSwyNSwwLjcyKVwiO1xuICogfVxuICovXG5mdW5jdGlvbiBoc2xUb0NvbG9yU3RyaW5nKGNvbG9yKSB7XG4gIGlmICh0eXBlb2YgY29sb3IgPT09ICdvYmplY3QnICYmIHR5cGVvZiBjb2xvci5odWUgPT09ICdudW1iZXInICYmIHR5cGVvZiBjb2xvci5zYXR1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IubGlnaHRuZXNzID09PSAnbnVtYmVyJykge1xuICAgIGlmIChjb2xvci5hbHBoYSAmJiB0eXBlb2YgY29sb3IuYWxwaGEgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gaHNsYSh7XG4gICAgICAgIGh1ZTogY29sb3IuaHVlLFxuICAgICAgICBzYXR1cmF0aW9uOiBjb2xvci5zYXR1cmF0aW9uLFxuICAgICAgICBsaWdodG5lc3M6IGNvbG9yLmxpZ2h0bmVzcyxcbiAgICAgICAgYWxwaGE6IGNvbG9yLmFscGhhXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaHNsKHtcbiAgICAgIGh1ZTogY29sb3IuaHVlLFxuICAgICAgc2F0dXJhdGlvbjogY29sb3Iuc2F0dXJhdGlvbixcbiAgICAgIGxpZ2h0bmVzczogY29sb3IubGlnaHRuZXNzXG4gICAgfSk7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0NSk7XG59XG5cbi8qKlxuICogSW52ZXJ0cyB0aGUgcmVkLCBncmVlbiBhbmQgYmx1ZSB2YWx1ZXMgb2YgYSBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBpbnZlcnQoJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogaW52ZXJ0KCdyZ2JhKDEwMSwxMDAsMjA1LDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtpbnZlcnQoJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7aW52ZXJ0KCdyZ2JhKDEwMSwxMDAsMjA1LDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiMzMzMyOWJcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDE1NCwxNTUsNTAsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIGludmVydChjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjsgLy8gcGFyc2UgY29sb3Igc3RyaW5nIHRvIHJnYlxuXG4gIHZhciB2YWx1ZSA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgdmFsdWUsIHtcbiAgICByZWQ6IDI1NSAtIHZhbHVlLnJlZCxcbiAgICBncmVlbjogMjU1IC0gdmFsdWUuZ3JlZW4sXG4gICAgYmx1ZTogMjU1IC0gdmFsdWUuYmx1ZVxuICB9KSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHN0cmluZyB2YWx1ZSBmb3IgdGhlIGxpZ2h0ZW5lZCBjb2xvci5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBsaWdodGVuKDAuMiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogbGlnaHRlbignMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW4oMC4yLCAnI0ZGQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtsaWdodGVuKCcwLjInLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjZTVlNmIxXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyMjksMjMwLDE3NywwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gbGlnaHRlbihhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgaHNsQ29sb3IgPSBwYXJzZVRvSHNsKGNvbG9yKTtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIGhzbENvbG9yLCB7XG4gICAgbGlnaHRuZXNzOiBndWFyZCgwLCAxLCBoc2xDb2xvci5saWdodG5lc3MgKyBwYXJzZUZsb2F0KGFtb3VudCkpXG4gIH0pKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRMaWdodGVuID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKGxpZ2h0ZW4pO1xudmFyIGN1cnJpZWRMaWdodGVuJDEgPSBjdXJyaWVkTGlnaHRlbjtcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoaWNoIGNvbnRyYXN0IGd1aWRlbGluZXMgaGF2ZSBiZWVuIG1ldCBmb3IgdHdvIGNvbG9ycy5cbiAqIEJhc2VkIG9uIHRoZSBbY29udHJhc3QgY2FsY3VsYXRpb25zIHJlY29tbWVuZGVkIGJ5IFczXShodHRwczovL3d3dy53My5vcmcvV0FJL1dDQUcyMS9VbmRlcnN0YW5kaW5nL2NvbnRyYXN0LWVuaGFuY2VkLmh0bWwpLlxuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBzY29yZXMgPSBtZWV0c0NvbnRyYXN0R3VpZGVsaW5lcygnIzQ0NCcsICcjZmZmJyk7XG4gKi9cbmZ1bmN0aW9uIG1lZXRzQ29udHJhc3RHdWlkZWxpbmVzKGNvbG9yMSwgY29sb3IyKSB7XG4gIHZhciBjb250cmFzdFJhdGlvID0gZ2V0Q29udHJhc3QoY29sb3IxLCBjb2xvcjIpO1xuICByZXR1cm4ge1xuICAgIEFBOiBjb250cmFzdFJhdGlvID49IDQuNSxcbiAgICBBQUxhcmdlOiBjb250cmFzdFJhdGlvID49IDMsXG4gICAgQUFBOiBjb250cmFzdFJhdGlvID49IDcsXG4gICAgQUFBTGFyZ2U6IGNvbnRyYXN0UmF0aW8gPj0gNC41XG4gIH07XG59XG5cbi8qKlxuICogTWl4ZXMgdGhlIHR3byBwcm92aWRlZCBjb2xvcnMgdG9nZXRoZXIgYnkgY2FsY3VsYXRpbmcgdGhlIGF2ZXJhZ2Ugb2YgZWFjaCBvZiB0aGUgUkdCIGNvbXBvbmVudHMgd2VpZ2h0ZWQgdG8gdGhlIGZpcnN0IGNvbG9yIGJ5IHRoZSBwcm92aWRlZCB3ZWlnaHQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogbWl4KDAuNSwgJyNmMDAnLCAnIzAwZicpXG4gKiAgIGJhY2tncm91bmQ6IG1peCgwLjI1LCAnI2YwMCcsICcjMDBmJylcbiAqICAgYmFja2dyb3VuZDogbWl4KCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuNSknLCAnIzAwZicpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7bWl4KDAuNSwgJyNmMDAnLCAnIzAwZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHttaXgoMC4yNSwgJyNmMDAnLCAnIzAwZicpfTtcbiAqICAgYmFja2dyb3VuZDogJHttaXgoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC41KScsICcjMDBmJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjN2YwMDdmXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzNmMDBiZlwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoNjMsIDAsIDE5MSwgMC43NSlcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBtaXgod2VpZ2h0LCBjb2xvciwgb3RoZXJDb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBvdGhlckNvbG9yO1xuICBpZiAob3RoZXJDb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICBpZiAod2VpZ2h0ID09PSAwKSByZXR1cm4gb3RoZXJDb2xvcjtcbiAgdmFyIHBhcnNlZENvbG9yMSA9IHBhcnNlVG9SZ2IoY29sb3IpO1xuXG4gIHZhciBjb2xvcjEgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IxLCB7XG4gICAgYWxwaGE6IHR5cGVvZiBwYXJzZWRDb2xvcjEuYWxwaGEgPT09ICdudW1iZXInID8gcGFyc2VkQ29sb3IxLmFscGhhIDogMVxuICB9KTtcblxuICB2YXIgcGFyc2VkQ29sb3IyID0gcGFyc2VUb1JnYihvdGhlckNvbG9yKTtcblxuICB2YXIgY29sb3IyID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yMiwge1xuICAgIGFscGhhOiB0eXBlb2YgcGFyc2VkQ29sb3IyLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yMi5hbHBoYSA6IDFcbiAgfSk7IC8vIFRoZSBmb3JtdWxhIGlzIGNvcGllZCBmcm9tIHRoZSBvcmlnaW5hbCBTYXNzIGltcGxlbWVudGF0aW9uOlxuICAvLyBodHRwOi8vc2Fzcy1sYW5nLmNvbS9kb2N1bWVudGF0aW9uL1Nhc3MvU2NyaXB0L0Z1bmN0aW9ucy5odG1sI21peC1pbnN0YW5jZV9tZXRob2RcblxuXG4gIHZhciBhbHBoYURlbHRhID0gY29sb3IxLmFscGhhIC0gY29sb3IyLmFscGhhO1xuICB2YXIgeCA9IHBhcnNlRmxvYXQod2VpZ2h0KSAqIDIgLSAxO1xuICB2YXIgeSA9IHggKiBhbHBoYURlbHRhID09PSAtMSA/IHggOiB4ICsgYWxwaGFEZWx0YTtcbiAgdmFyIHogPSAxICsgeCAqIGFscGhhRGVsdGE7XG4gIHZhciB3ZWlnaHQxID0gKHkgLyB6ICsgMSkgLyAyLjA7XG4gIHZhciB3ZWlnaHQyID0gMSAtIHdlaWdodDE7XG4gIHZhciBtaXhlZENvbG9yID0ge1xuICAgIHJlZDogTWF0aC5mbG9vcihjb2xvcjEucmVkICogd2VpZ2h0MSArIGNvbG9yMi5yZWQgKiB3ZWlnaHQyKSxcbiAgICBncmVlbjogTWF0aC5mbG9vcihjb2xvcjEuZ3JlZW4gKiB3ZWlnaHQxICsgY29sb3IyLmdyZWVuICogd2VpZ2h0MiksXG4gICAgYmx1ZTogTWF0aC5mbG9vcihjb2xvcjEuYmx1ZSAqIHdlaWdodDEgKyBjb2xvcjIuYmx1ZSAqIHdlaWdodDIpLFxuICAgIGFscGhhOiBjb2xvcjEuYWxwaGEgKiBwYXJzZUZsb2F0KHdlaWdodCkgKyBjb2xvcjIuYWxwaGEgKiAoMSAtIHBhcnNlRmxvYXQod2VpZ2h0KSlcbiAgfTtcbiAgcmV0dXJuIHJnYmEobWl4ZWRDb2xvcik7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkTWl4ID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4obWl4KTtcbnZhciBtaXgkMSA9IGN1cnJpZWRNaXg7XG5cbi8qKlxuICogSW5jcmVhc2VzIHRoZSBvcGFjaXR5IG9mIGEgY29sb3IuIEl0cyByYW5nZSBmb3IgdGhlIGFtb3VudCBpcyBiZXR3ZWVuIDAgdG8gMS5cbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogb3BhY2lmeSgwLjEsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknKTtcbiAqICAgYmFja2dyb3VuZDogb3BhY2lmeSgwLjIsICdoc2xhKDAsIDAlLCAxMDAlLCAwLjUpJyksXG4gKiAgIGJhY2tncm91bmQ6IG9wYWNpZnkoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC4yKScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke29wYWNpZnkoMC4xLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpJyl9O1xuICogICBiYWNrZ3JvdW5kOiAke29wYWNpZnkoMC4yLCAnaHNsYSgwLCAwJSwgMTAwJSwgMC41KScpfSxcbiAqICAgYmFja2dyb3VuZDogJHtvcGFjaWZ5KCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuMiknKX0sXG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmZcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyNTUsMjU1LDAuNylcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwwLDAsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIG9wYWNpZnkoYW1vdW50LCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgdmFyIHBhcnNlZENvbG9yID0gcGFyc2VUb1JnYihjb2xvcik7XG4gIHZhciBhbHBoYSA9IHR5cGVvZiBwYXJzZWRDb2xvci5hbHBoYSA9PT0gJ251bWJlcicgPyBwYXJzZWRDb2xvci5hbHBoYSA6IDE7XG5cbiAgdmFyIGNvbG9yV2l0aEFscGhhID0gX2V4dGVuZHMoe30sIHBhcnNlZENvbG9yLCB7XG4gICAgYWxwaGE6IGd1YXJkKDAsIDEsIChhbHBoYSAqIDEwMCArIHBhcnNlRmxvYXQoYW1vdW50KSAqIDEwMCkgLyAxMDApXG4gIH0pO1xuXG4gIHJldHVybiByZ2JhKGNvbG9yV2l0aEFscGhhKTtcbn0gLy8gcHJldHRpZXItaWdub3JlXG5cblxudmFyIGN1cnJpZWRPcGFjaWZ5ID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKG9wYWNpZnkpO1xudmFyIGN1cnJpZWRPcGFjaWZ5JDEgPSBjdXJyaWVkT3BhY2lmeTtcblxudmFyIGRlZmF1bHRSZXR1cm5JZkxpZ2h0Q29sb3IgPSAnIzAwMCc7XG52YXIgZGVmYXVsdFJldHVybklmRGFya0NvbG9yID0gJyNmZmYnO1xuLyoqXG4gKiBSZXR1cm5zIGJsYWNrIG9yIHdoaXRlIChvciBvcHRpb25hbCBwYXNzZWQgY29sb3JzKSBmb3IgYmVzdFxuICogY29udHJhc3QgZGVwZW5kaW5nIG9uIHRoZSBsdW1pbm9zaXR5IG9mIHRoZSBnaXZlbiBjb2xvci5cbiAqIFdoZW4gcGFzc2luZyBjdXN0b20gcmV0dXJuIGNvbG9ycywgc3RyaWN0IG1vZGUgZW5zdXJlcyB0aGF0IHRoZVxuICogcmV0dXJuIGNvbG9yIGFsd2F5cyBtZWV0cyBvciBleGNlZWRzIFdDQUcgbGV2ZWwgQUEgb3IgZ3JlYXRlci4gSWYgdGhpcyB0ZXN0XG4gKiBmYWlscywgdGhlIGRlZmF1bHQgcmV0dXJuIGNvbG9yIChibGFjayBvciB3aGl0ZSkgaXMgcmV0dXJuZWQgaW4gcGxhY2Ugb2YgdGhlXG4gKiBjdXN0b20gcmV0dXJuIGNvbG9yLiBZb3UgY2FuIG9wdGlvbmFsbHkgdHVybiBvZmYgc3RyaWN0IG1vZGUuXG4gKlxuICogRm9sbG93cyBbVzNDIHNwZWNzIGZvciByZWFkYWJpbGl0eV0oaHR0cHM6Ly93d3cudzMub3JnL1RSL1dDQUcyMC1URUNIUy9HMTguaHRtbCkuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgY29sb3I6IHJlYWRhYmxlQ29sb3IoJyMwMDAnKSxcbiAqICAgY29sb3I6IHJlYWRhYmxlQ29sb3IoJ2JsYWNrJywgJyMwMDEnLCAnI2ZmOCcpLFxuICogICBjb2xvcjogcmVhZGFibGVDb2xvcignd2hpdGUnLCAnIzAwMScsICcjZmY4JyksXG4gKiAgIGNvbG9yOiByZWFkYWJsZUNvbG9yKCdyZWQnLCAnIzMzMycsICcjZGRkJywgdHJ1ZSlcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgY29sb3I6ICR7cmVhZGFibGVDb2xvcignIzAwMCcpfTtcbiAqICAgY29sb3I6ICR7cmVhZGFibGVDb2xvcignYmxhY2snLCAnIzAwMScsICcjZmY4Jyl9O1xuICogICBjb2xvcjogJHtyZWFkYWJsZUNvbG9yKCd3aGl0ZScsICcjMDAxJywgJyNmZjgnKX07XG4gKiAgIGNvbG9yOiAke3JlYWRhYmxlQ29sb3IoJ3JlZCcsICcjMzMzJywgJyNkZGQnLCB0cnVlKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGNvbG9yOiBcIiNmZmZcIjtcbiAqICAgY29sb3I6IFwiI2ZmOFwiO1xuICogICBjb2xvcjogXCIjMDAxXCI7XG4gKiAgIGNvbG9yOiBcIiMwMDBcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiByZWFkYWJsZUNvbG9yKGNvbG9yLCByZXR1cm5JZkxpZ2h0Q29sb3IsIHJldHVybklmRGFya0NvbG9yLCBzdHJpY3QpIHtcbiAgaWYgKHJldHVybklmTGlnaHRDb2xvciA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuSWZMaWdodENvbG9yID0gZGVmYXVsdFJldHVybklmTGlnaHRDb2xvcjtcbiAgfVxuXG4gIGlmIChyZXR1cm5JZkRhcmtDb2xvciA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuSWZEYXJrQ29sb3IgPSBkZWZhdWx0UmV0dXJuSWZEYXJrQ29sb3I7XG4gIH1cblxuICBpZiAoc3RyaWN0ID09PSB2b2lkIDApIHtcbiAgICBzdHJpY3QgPSB0cnVlO1xuICB9XG5cbiAgdmFyIGlzQ29sb3JMaWdodCA9IGdldEx1bWluYW5jZShjb2xvcikgPiAwLjE3OTtcbiAgdmFyIHByZWZlcnJlZFJldHVybkNvbG9yID0gaXNDb2xvckxpZ2h0ID8gcmV0dXJuSWZMaWdodENvbG9yIDogcmV0dXJuSWZEYXJrQ29sb3I7XG5cbiAgaWYgKCFzdHJpY3QgfHwgZ2V0Q29udHJhc3QoY29sb3IsIHByZWZlcnJlZFJldHVybkNvbG9yKSA+PSA0LjUpIHtcbiAgICByZXR1cm4gcHJlZmVycmVkUmV0dXJuQ29sb3I7XG4gIH1cblxuICByZXR1cm4gaXNDb2xvckxpZ2h0ID8gZGVmYXVsdFJldHVybklmTGlnaHRDb2xvciA6IGRlZmF1bHRSZXR1cm5JZkRhcmtDb2xvcjtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIFJnYkNvbG9yIG9yIFJnYmFDb2xvciBvYmplY3QgdG8gYSBjb2xvciBzdHJpbmcuXG4gKiBUaGlzIHV0aWwgaXMgdXNlZnVsIGluIGNhc2UgeW91IG9ubHkga25vdyBvbiBydW50aW1lIHdoaWNoIGNvbG9yIG9iamVjdCBpc1xuICogdXNlZC4gT3RoZXJ3aXNlIHdlIHJlY29tbWVuZCB0byByZWx5IG9uIGByZ2JgIG9yIGByZ2JhYC5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiByZ2JUb0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCB9KSxcbiAqICAgYmFja2dyb3VuZDogcmdiVG9Db2xvclN0cmluZyh7IHJlZDogMjU1LCBncmVlbjogMjA1LCBibHVlOiAxMDAsIGFscGhhOiAwLjcyIH0pLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3JnYlRvQ29sb3JTdHJpbmcoeyByZWQ6IDI1NSwgZ3JlZW46IDIwNSwgYmx1ZTogMTAwIH0pfTtcbiAqICAgYmFja2dyb3VuZDogJHtyZ2JUb0NvbG9yU3RyaW5nKHsgcmVkOiAyNTUsIGdyZWVuOiAyMDUsIGJsdWU6IDEwMCwgYWxwaGE6IDAuNzIgfSl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNmZmNkNjRcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1NSwyMDUsMTAwLDAuNzIpXCI7XG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHJnYlRvQ29sb3JTdHJpbmcoY29sb3IpIHtcbiAgaWYgKHR5cGVvZiBjb2xvciA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIGNvbG9yLnJlZCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIGNvbG9yLmdyZWVuID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgY29sb3IuYmx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpZiAodHlwZW9mIGNvbG9yLmFscGhhID09PSAnbnVtYmVyJykge1xuICAgICAgcmV0dXJuIHJnYmEoe1xuICAgICAgICByZWQ6IGNvbG9yLnJlZCxcbiAgICAgICAgZ3JlZW46IGNvbG9yLmdyZWVuLFxuICAgICAgICBibHVlOiBjb2xvci5ibHVlLFxuICAgICAgICBhbHBoYTogY29sb3IuYWxwaGFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZ2Ioe1xuICAgICAgcmVkOiBjb2xvci5yZWQsXG4gICAgICBncmVlbjogY29sb3IuZ3JlZW4sXG4gICAgICBibHVlOiBjb2xvci5ibHVlXG4gICAgfSk7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig0Nik7XG59XG5cbi8qKlxuICogSW5jcmVhc2VzIHRoZSBpbnRlbnNpdHkgb2YgYSBjb2xvci4gSXRzIHJhbmdlIGlzIGJldHdlZW4gMCB0byAxLiBUaGUgZmlyc3RcbiAqIGFyZ3VtZW50IG9mIHRoZSBzYXR1cmF0ZSBmdW5jdGlvbiBpcyB0aGUgYW1vdW50IGJ5IGhvdyBtdWNoIHRoZSBjb2xvclxuICogaW50ZW5zaXR5IHNob3VsZCBiZSBpbmNyZWFzZWQuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogc2F0dXJhdGUoMC4yLCAnI0NDQ0Q2NCcpLFxuICogICBiYWNrZ3JvdW5kOiBzYXR1cmF0ZSgnMC4yJywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NhdHVyYXRlKDAuMiwgJyNGRkNENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7c2F0dXJhdGUoJzAuMicsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiNlMGUyNTBcIjtcbiAqICAgYmFja2dyb3VuZDogXCJyZ2JhKDIyNCwyMjYsODAsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHNhdHVyYXRlKGFtb3VudCwgY29sb3IpIHtcbiAgaWYgKGNvbG9yID09PSAndHJhbnNwYXJlbnQnKSByZXR1cm4gY29sb3I7XG4gIHZhciBoc2xDb2xvciA9IHBhcnNlVG9Ic2woY29sb3IpO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgaHNsQ29sb3IsIHtcbiAgICBzYXR1cmF0aW9uOiBndWFyZCgwLCAxLCBoc2xDb2xvci5zYXR1cmF0aW9uICsgcGFyc2VGbG9hdChhbW91bnQpKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2F0dXJhdGUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oc2F0dXJhdGUpO1xudmFyIGN1cnJpZWRTYXR1cmF0ZSQxID0gY3VycmllZFNhdHVyYXRlO1xuXG4vKipcbiAqIFNldHMgdGhlIGh1ZSBvZiBhIGNvbG9yIHRvIHRoZSBwcm92aWRlZCB2YWx1ZS4gVGhlIGh1ZSByYW5nZSBjYW4gYmVcbiAqIGZyb20gMCBhbmQgMzU5LlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIGJhY2tncm91bmQ6IHNldEh1ZSg0MiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogc2V0SHVlKCcyNDQnLCAncmdiYSgyMDQsMjA1LDEwMCwwLjcpJyksXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0SHVlKDQyLCAnI0NDQ0Q2NCcpfTtcbiAqICAgYmFja2dyb3VuZDogJHtzZXRIdWUoJzI0NCcsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2NkYWU2NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMTA3LDEwMCwyMDUsMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHNldEh1ZShodWUsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgcGFyc2VUb0hzbChjb2xvciksIHtcbiAgICBodWU6IHBhcnNlRmxvYXQoaHVlKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2V0SHVlID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNldEh1ZSk7XG52YXIgY3VycmllZFNldEh1ZSQxID0gY3VycmllZFNldEh1ZTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaWdodG5lc3Mgb2YgYSBjb2xvciB0byB0aGUgcHJvdmlkZWQgdmFsdWUuIFRoZSBsaWdodG5lc3MgcmFuZ2UgY2FuIGJlXG4gKiBmcm9tIDAgYW5kIDEuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogc2V0TGlnaHRuZXNzKDAuMiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogc2V0TGlnaHRuZXNzKCcwLjc1JywgJ3JnYmEoMjA0LDIwNSwxMDAsMC43KScpLFxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICBiYWNrZ3JvdW5kOiAke3NldExpZ2h0bmVzcygwLjIsICcjQ0NDRDY0Jyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3NldExpZ2h0bmVzcygnMC43NScsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiIzRkNGQxOVwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjIzLDIyNCwxNTksMC43KVwiO1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHNldExpZ2h0bmVzcyhsaWdodG5lc3MsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICByZXR1cm4gdG9Db2xvclN0cmluZyhfZXh0ZW5kcyh7fSwgcGFyc2VUb0hzbChjb2xvciksIHtcbiAgICBsaWdodG5lc3M6IHBhcnNlRmxvYXQobGlnaHRuZXNzKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2V0TGlnaHRuZXNzID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHNldExpZ2h0bmVzcyk7XG52YXIgY3VycmllZFNldExpZ2h0bmVzcyQxID0gY3VycmllZFNldExpZ2h0bmVzcztcblxuLyoqXG4gKiBTZXRzIHRoZSBzYXR1cmF0aW9uIG9mIGEgY29sb3IgdG8gdGhlIHByb3ZpZGVkIHZhbHVlLiBUaGUgc2F0dXJhdGlvbiByYW5nZSBjYW4gYmVcbiAqIGZyb20gMCBhbmQgMS5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBzZXRTYXR1cmF0aW9uKDAuMiwgJyNDQ0NENjQnKSxcbiAqICAgYmFja2dyb3VuZDogc2V0U2F0dXJhdGlvbignMC43NScsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHtzZXRTYXR1cmF0aW9uKDAuMiwgJyNDQ0NENjQnKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7c2V0U2F0dXJhdGlvbignMC43NScsICdyZ2JhKDIwNCwyMDUsMTAwLDAuNyknKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwiI2FkYWQ4NFwiO1xuICogICBiYWNrZ3JvdW5kOiBcInJnYmEoMjI4LDIyOSw3NiwwLjcpXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gc2V0U2F0dXJhdGlvbihzYXR1cmF0aW9uLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIHRvQ29sb3JTdHJpbmcoX2V4dGVuZHMoe30sIHBhcnNlVG9Ic2woY29sb3IpLCB7XG4gICAgc2F0dXJhdGlvbjogcGFyc2VGbG9hdChzYXR1cmF0aW9uKVxuICB9KSk7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2V0U2F0dXJhdGlvbiA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbihzZXRTYXR1cmF0aW9uKTtcbnZhciBjdXJyaWVkU2V0U2F0dXJhdGlvbiQxID0gY3VycmllZFNldFNhdHVyYXRpb247XG5cbi8qKlxuICogU2hhZGVzIGEgY29sb3IgYnkgbWl4aW5nIGl0IHdpdGggYmxhY2suIGBzaGFkZWAgY2FuIHByb2R1Y2VcbiAqIGh1ZSBzaGlmdHMsIHdoZXJlIGFzIGBkYXJrZW5gIG1hbmlwdWxhdGVzIHRoZSBsdW1pbmFuY2UgY2hhbm5lbCBhbmQgdGhlcmVmb3JlXG4gKiBkb2Vzbid0IHByb2R1Y2UgaHVlIHNoaWZ0cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiBzaGFkZSgwLjI1LCAnIzAwZicpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgIGJhY2tncm91bmQ6ICR7c2hhZGUoMC4yNSwgJyMwMGYnKX07XG4gKiBgXG4gKlxuICogLy8gQ1NTIGluIEpTIE91dHB1dFxuICpcbiAqIGVsZW1lbnQge1xuICogICBiYWNrZ3JvdW5kOiBcIiMwMDAwM2ZcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiBzaGFkZShwZXJjZW50YWdlLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIG1peCQxKHBhcnNlRmxvYXQocGVyY2VudGFnZSksICdyZ2IoMCwgMCwgMCknLCBjb2xvcik7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkU2hhZGUgPSAvKiNfX1BVUkVfXyovY3Vycnlcbi8qIDo6PG51bWJlciB8IHN0cmluZywgc3RyaW5nLCBzdHJpbmc+ICovXG4oc2hhZGUpO1xudmFyIGN1cnJpZWRTaGFkZSQxID0gY3VycmllZFNoYWRlO1xuXG4vKipcbiAqIFRpbnRzIGEgY29sb3IgYnkgbWl4aW5nIGl0IHdpdGggd2hpdGUuIGB0aW50YCBjYW4gcHJvZHVjZVxuICogaHVlIHNoaWZ0cywgd2hlcmUgYXMgYGxpZ2h0ZW5gIG1hbmlwdWxhdGVzIHRoZSBsdW1pbmFuY2UgY2hhbm5lbCBhbmQgdGhlcmVmb3JlXG4gKiBkb2Vzbid0IHByb2R1Y2UgaHVlIHNoaWZ0cy5cbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBiYWNrZ3JvdW5kOiB0aW50KDAuMjUsICcjMDBmJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0aW50KDAuMjUsICcjMDBmJyl9O1xuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiBlbGVtZW50IHtcbiAqICAgYmFja2dyb3VuZDogXCIjYmZiZmZmXCI7XG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gdGludChwZXJjZW50YWdlLCBjb2xvcikge1xuICBpZiAoY29sb3IgPT09ICd0cmFuc3BhcmVudCcpIHJldHVybiBjb2xvcjtcbiAgcmV0dXJuIG1peCQxKHBhcnNlRmxvYXQocGVyY2VudGFnZSksICdyZ2IoMjU1LCAyNTUsIDI1NSknLCBjb2xvcik7XG59IC8vIHByZXR0aWVyLWlnbm9yZVxuXG5cbnZhciBjdXJyaWVkVGludCA9IC8qI19fUFVSRV9fKi9jdXJyeVxuLyogOjo8bnVtYmVyIHwgc3RyaW5nLCBzdHJpbmcsIHN0cmluZz4gKi9cbih0aW50KTtcbnZhciBjdXJyaWVkVGludCQxID0gY3VycmllZFRpbnQ7XG5cbi8qKlxuICogRGVjcmVhc2VzIHRoZSBvcGFjaXR5IG9mIGEgY29sb3IuIEl0cyByYW5nZSBmb3IgdGhlIGFtb3VudCBpcyBiZXR3ZWVuIDAgdG8gMS5cbiAqXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRpemUoMC4xLCAnI2ZmZicpLFxuICogICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudGl6ZSgwLjIsICdoc2woMCwgMCUsIDEwMCUpJyksXG4gKiAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50aXplKCcwLjUnLCAncmdiYSgyNTUsIDAsIDAsIDAuOCknKSxcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgYmFja2dyb3VuZDogJHt0cmFuc3BhcmVudGl6ZSgwLjEsICcjZmZmJyl9O1xuICogICBiYWNrZ3JvdW5kOiAke3RyYW5zcGFyZW50aXplKDAuMiwgJ2hzbCgwLCAwJSwgMTAwJSknKX07XG4gKiAgIGJhY2tncm91bmQ6ICR7dHJhbnNwYXJlbnRpemUoJzAuNScsICdyZ2JhKDI1NSwgMCwgMCwgMC44KScpfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogZWxlbWVudCB7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjkpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjgpXCI7XG4gKiAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTUsMCwwLDAuMylcIjtcbiAqIH1cbiAqL1xuXG5mdW5jdGlvbiB0cmFuc3BhcmVudGl6ZShhbW91bnQsIGNvbG9yKSB7XG4gIGlmIChjb2xvciA9PT0gJ3RyYW5zcGFyZW50JykgcmV0dXJuIGNvbG9yO1xuICB2YXIgcGFyc2VkQ29sb3IgPSBwYXJzZVRvUmdiKGNvbG9yKTtcbiAgdmFyIGFscGhhID0gdHlwZW9mIHBhcnNlZENvbG9yLmFscGhhID09PSAnbnVtYmVyJyA/IHBhcnNlZENvbG9yLmFscGhhIDogMTtcblxuICB2YXIgY29sb3JXaXRoQWxwaGEgPSBfZXh0ZW5kcyh7fSwgcGFyc2VkQ29sb3IsIHtcbiAgICBhbHBoYTogZ3VhcmQoMCwgMSwgKyhhbHBoYSAqIDEwMCAtIHBhcnNlRmxvYXQoYW1vdW50KSAqIDEwMCkudG9GaXhlZCgyKSAvIDEwMClcbiAgfSk7XG5cbiAgcmV0dXJuIHJnYmEoY29sb3JXaXRoQWxwaGEpO1xufSAvLyBwcmV0dGllci1pZ25vcmVcblxuXG52YXIgY3VycmllZFRyYW5zcGFyZW50aXplID0gLyojX19QVVJFX18qL2N1cnJ5XG4vKiA6OjxudW1iZXIgfCBzdHJpbmcsIHN0cmluZywgc3RyaW5nPiAqL1xuKHRyYW5zcGFyZW50aXplKTtcbnZhciBjdXJyaWVkVHJhbnNwYXJlbnRpemUkMSA9IGN1cnJpZWRUcmFuc3BhcmVudGl6ZTtcblxuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGVhc2lseSBzZXR0aW5nIHRoZSBhbmltYXRpb24gcHJvcGVydHkuIEFsbG93cyBlaXRoZXIgbXVsdGlwbGUgYXJyYXlzIHdpdGggYW5pbWF0aW9uc1xuICogb3IgYSBzaW5nbGUgYW5pbWF0aW9uIHNwcmVhZCBvdmVyIHRoZSBhcmd1bWVudHMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5hbmltYXRpb24oWydyb3RhdGUnLCAnMXMnLCAnZWFzZS1pbi1vdXQnXSwgWydjb2xvcmNoYW5nZScsICcycyddKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2FuaW1hdGlvbihbJ3JvdGF0ZScsICcxcycsICdlYXNlLWluLW91dCddLCBbJ2NvbG9yY2hhbmdlJywgJzJzJ10pfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYW5pbWF0aW9uJzogJ3JvdGF0ZSAxcyBlYXNlLWluLW91dCwgY29sb3JjaGFuZ2UgMnMnXG4gKiB9XG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5hbmltYXRpb24oJ3JvdGF0ZScsICcxcycsICdlYXNlLWluLW91dCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7YW5pbWF0aW9uKCdyb3RhdGUnLCAnMXMnLCAnZWFzZS1pbi1vdXQnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2FuaW1hdGlvbic6ICdyb3RhdGUgMXMgZWFzZS1pbi1vdXQnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGFuaW1hdGlvbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIC8vIEFsbG93IHNpbmdsZSBvciBtdWx0aXBsZSBhbmltYXRpb25zIHBhc3NlZFxuICB2YXIgbXVsdGlNb2RlID0gQXJyYXkuaXNBcnJheShhcmdzWzBdKTtcblxuICBpZiAoIW11bHRpTW9kZSAmJiBhcmdzLmxlbmd0aCA+IDgpIHtcbiAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2NCk7XG4gIH1cblxuICB2YXIgY29kZSA9IGFyZ3MubWFwKGZ1bmN0aW9uIChhcmcpIHtcbiAgICBpZiAobXVsdGlNb2RlICYmICFBcnJheS5pc0FycmF5KGFyZykgfHwgIW11bHRpTW9kZSAmJiBBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY1KTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGggPiA4KSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2Nik7XG4gICAgfVxuXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoYXJnKSA/IGFyZy5qb2luKCcgJykgOiBhcmc7XG4gIH0pLmpvaW4oJywgJyk7XG4gIHJldHVybiB7XG4gICAgYW5pbWF0aW9uOiBjb2RlXG4gIH07XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyBhbnkgbnVtYmVyIG9mIGJhY2tncm91bmRJbWFnZSB2YWx1ZXMgYXMgcGFyYW1ldGVycyBmb3IgY3JlYXRpbmcgYSBzaW5nbGUgYmFja2dyb3VuZCBzdGF0ZW1lbnQuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5iYWNrZ3JvdW5kSW1hZ2VzKCd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiknLCAnbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtiYWNrZ3JvdW5kSW1hZ2VzKCd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiknLCAnbGluZWFyLWdyYWRpZW50KHJlZCwgZ3JlZW4pJyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdiYWNrZ3JvdW5kSW1hZ2UnOiAndXJsKFwiL2ltYWdlL2JhY2tncm91bmQuanBnXCIpLCBsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiknXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJhY2tncm91bmRJbWFnZXMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wZXJ0aWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHByb3BlcnRpZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmRJbWFnZTogcHJvcGVydGllcy5qb2luKCcsICcpXG4gIH07XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyBhbnkgbnVtYmVyIG9mIGJhY2tncm91bmQgdmFsdWVzIGFzIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgc2luZ2xlIGJhY2tncm91bmQgc3RhdGVtZW50LlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYmFja2dyb3VuZHMoJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKScsICdsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiknLCAnY2VudGVyIG5vLXJlcGVhdCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7YmFja2dyb3VuZHMoJ3VybChcIi9pbWFnZS9iYWNrZ3JvdW5kLmpwZ1wiKScsICdsaW5lYXItZ3JhZGllbnQocmVkLCBncmVlbiknLCAnY2VudGVyIG5vLXJlcGVhdCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYmFja2dyb3VuZCc6ICd1cmwoXCIvaW1hZ2UvYmFja2dyb3VuZC5qcGdcIiksIGxpbmVhci1ncmFkaWVudChyZWQsIGdyZWVuKSwgY2VudGVyIG5vLXJlcGVhdCdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYmFja2dyb3VuZHMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wZXJ0aWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHByb3BlcnRpZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmQ6IHByb3BlcnRpZXMuam9pbignLCAnKVxuICB9O1xufVxuXG52YXIgc2lkZU1hcCA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107XG4vKipcbiAqIFNob3J0aGFuZCBmb3IgdGhlIGJvcmRlciBwcm9wZXJ0eSB0aGF0IHNwbGl0cyBvdXQgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGZvciB1c2Ugd2l0aCB0b29scyBsaWtlIEZlbGEgYW5kIFN0eWxldHJvbi4gQSBzaWRlIGtleXdvcmQgY2FuIG9wdGlvbmFsbHkgYmUgcGFzc2VkIHRvIHRhcmdldCBvbmx5IG9uZSBzaWRlJ3MgYm9yZGVyIHByb3BlcnRpZXMuXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyKCcxcHgnLCAnc29saWQnLCAncmVkJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXIoJzFweCcsICdzb2xpZCcsICdyZWQnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JvcmRlckNvbG9yJzogJ3JlZCcsXG4gKiAgICdib3JkZXJTdHlsZSc6ICdzb2xpZCcsXG4gKiAgICdib3JkZXJXaWR0aCc6IGAxcHhgLFxuICogfVxuICpcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyKCd0b3AnLCAnMXB4JywgJ3NvbGlkJywgJ3JlZCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyKCd0b3AnLCAnMXB4JywgJ3NvbGlkJywgJ3JlZCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnYm9yZGVyVG9wQ29sb3InOiAncmVkJyxcbiAqICAgJ2JvcmRlclRvcFN0eWxlJzogJ3NvbGlkJyxcbiAqICAgJ2JvcmRlclRvcFdpZHRoJzogYDFweGAsXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gYm9yZGVyKHNpZGVLZXl3b3JkKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZW9mIHNpZGVLZXl3b3JkID09PSAnc3RyaW5nJyAmJiBzaWRlTWFwLmluZGV4T2Yoc2lkZUtleXdvcmQpID49IDApIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbXCJib3JkZXJcIiArIGNhcGl0YWxpemVTdHJpbmcoc2lkZUtleXdvcmQpICsgXCJXaWR0aFwiXSA9IHZhbHVlc1swXSwgX3JlZltcImJvcmRlclwiICsgY2FwaXRhbGl6ZVN0cmluZyhzaWRlS2V5d29yZCkgKyBcIlN0eWxlXCJdID0gdmFsdWVzWzFdLCBfcmVmW1wiYm9yZGVyXCIgKyBjYXBpdGFsaXplU3RyaW5nKHNpZGVLZXl3b3JkKSArIFwiQ29sb3JcIl0gPSB2YWx1ZXNbMl0sIF9yZWY7XG4gIH0gZWxzZSB7XG4gICAgdmFsdWVzLnVuc2hpZnQoc2lkZUtleXdvcmQpO1xuICAgIHJldHVybiB7XG4gICAgICBib3JkZXJXaWR0aDogdmFsdWVzWzBdLFxuICAgICAgYm9yZGVyU3R5bGU6IHZhbHVlc1sxXSxcbiAgICAgIGJvcmRlckNvbG9yOiB2YWx1ZXNbMl1cbiAgICB9O1xuICB9XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyB1cCB0byBmb3VyIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlckNvbG9yKCdyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICd5ZWxsb3cnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke2JvcmRlckNvbG9yKCdyZWQnLCAnZ3JlZW4nLCAnYmx1ZScsICd5ZWxsb3cnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JvcmRlclRvcENvbG9yJzogJ3JlZCcsXG4gKiAgICdib3JkZXJSaWdodENvbG9yJzogJ2dyZWVuJyxcbiAqICAgJ2JvcmRlckJvdHRvbUNvbG9yJzogJ2JsdWUnLFxuICogICAnYm9yZGVyTGVmdENvbG9yJzogJ3llbGxvdydcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYm9yZGVyQ29sb3IoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJ2JvcmRlckNvbG9yJ10uY29uY2F0KHZhbHVlcykpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgYSB2YWx1ZSBmb3Igc2lkZSBhbmQgYSB2YWx1ZSBmb3IgcmFkaXVzIGFuZCBhcHBsaWVzIHRoZSByYWRpdXMgdmFsdWUgdG8gYm90aCBjb3JuZXJzIG9mIHRoZSBzaWRlLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uYm9yZGVyUmFkaXVzKCd0b3AnLCAnNXB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtib3JkZXJSYWRpdXMoJ3RvcCcsICc1cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JvcmRlclRvcFJpZ2h0UmFkaXVzJzogJzVweCcsXG4gKiAgICdib3JkZXJUb3BMZWZ0UmFkaXVzJzogJzVweCcsXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJvcmRlclJhZGl1cyhzaWRlLCByYWRpdXMpIHtcbiAgdmFyIHVwcGVyY2FzZVNpZGUgPSBjYXBpdGFsaXplU3RyaW5nKHNpZGUpO1xuXG4gIGlmICghcmFkaXVzICYmIHJhZGl1cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDYyKTtcbiAgfVxuXG4gIGlmICh1cHBlcmNhc2VTaWRlID09PSAnVG9wJyB8fCB1cHBlcmNhc2VTaWRlID09PSAnQm90dG9tJykge1xuICAgIHZhciBfcmVmO1xuXG4gICAgcmV0dXJuIF9yZWYgPSB7fSwgX3JlZltcImJvcmRlclwiICsgdXBwZXJjYXNlU2lkZSArIFwiUmlnaHRSYWRpdXNcIl0gPSByYWRpdXMsIF9yZWZbXCJib3JkZXJcIiArIHVwcGVyY2FzZVNpZGUgKyBcIkxlZnRSYWRpdXNcIl0gPSByYWRpdXMsIF9yZWY7XG4gIH1cblxuICBpZiAodXBwZXJjYXNlU2lkZSA9PT0gJ0xlZnQnIHx8IHVwcGVyY2FzZVNpZGUgPT09ICdSaWdodCcpIHtcbiAgICB2YXIgX3JlZjI7XG5cbiAgICByZXR1cm4gX3JlZjIgPSB7fSwgX3JlZjJbXCJib3JkZXJUb3BcIiArIHVwcGVyY2FzZVNpZGUgKyBcIlJhZGl1c1wiXSA9IHJhZGl1cywgX3JlZjJbXCJib3JkZXJCb3R0b21cIiArIHVwcGVyY2FzZVNpZGUgKyBcIlJhZGl1c1wiXSA9IHJhZGl1cywgX3JlZjI7XG4gIH1cblxuICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2Myk7XG59XG5cbi8qKlxuICogU2hvcnRoYW5kIHRoYXQgYWNjZXB0cyB1cCB0byBmb3VyIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLmJvcmRlclN0eWxlKCdzb2xpZCcsICdkYXNoZWQnLCAnZG90dGVkJywgJ2RvdWJsZScpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyU3R5bGUoJ3NvbGlkJywgJ2Rhc2hlZCcsICdkb3R0ZWQnLCAnZG91YmxlJyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdib3JkZXJUb3BTdHlsZSc6ICdzb2xpZCcsXG4gKiAgICdib3JkZXJSaWdodFN0eWxlJzogJ2Rhc2hlZCcsXG4gKiAgICdib3JkZXJCb3R0b21TdHlsZSc6ICdkb3R0ZWQnLFxuICogICAnYm9yZGVyTGVmdFN0eWxlJzogJ2RvdWJsZSdcbiAqIH1cbiAqL1xuZnVuY3Rpb24gYm9yZGVyU3R5bGUoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJ2JvcmRlclN0eWxlJ10uY29uY2F0KHZhbHVlcykpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5ib3JkZXJXaWR0aCgnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7Ym9yZGVyV2lkdGgoJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ2JvcmRlclRvcFdpZHRoJzogJzEycHgnLFxuICogICAnYm9yZGVyUmlnaHRXaWR0aCc6ICcyNHB4JyxcbiAqICAgJ2JvcmRlckJvdHRvbVdpZHRoJzogJzM2cHgnLFxuICogICAnYm9yZGVyTGVmdFdpZHRoJzogJzQ4cHgnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIGJvcmRlcldpZHRoKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsdWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbHVlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWydib3JkZXJXaWR0aCddLmNvbmNhdCh2YWx1ZXMpKTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVTZWxlY3RvcnModGVtcGxhdGUsIHN0YXRlKSB7XG4gIHZhciBzdGF0ZVN1ZmZpeCA9IHN0YXRlID8gXCI6XCIgKyBzdGF0ZSA6ICcnO1xuICByZXR1cm4gdGVtcGxhdGUoc3RhdGVTdWZmaXgpO1xufVxuLyoqXG4gKiBGdW5jdGlvbiBoZWxwZXIgdGhhdCBhZGRzIGFuIGFycmF5IG9mIHN0YXRlcyB0byBhIHRlbXBsYXRlIG9mIHNlbGVjdG9ycy4gVXNlZCBpbiB0ZXh0SW5wdXRzIGFuZCBidXR0b25zLlxuICogQHByaXZhdGVcbiAqL1xuXG5cbmZ1bmN0aW9uIHN0YXRlZnVsU2VsZWN0b3JzKHN0YXRlcywgdGVtcGxhdGUsIHN0YXRlTWFwKSB7XG4gIGlmICghdGVtcGxhdGUpIHRocm93IG5ldyBQb2xpc2hlZEVycm9yKDY3KTtcbiAgaWYgKHN0YXRlcy5sZW5ndGggPT09IDApIHJldHVybiBnZW5lcmF0ZVNlbGVjdG9ycyh0ZW1wbGF0ZSwgbnVsbCk7XG4gIHZhciBzZWxlY3RvcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YXRlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChzdGF0ZU1hcCAmJiBzdGF0ZU1hcC5pbmRleE9mKHN0YXRlc1tpXSkgPCAwKSB7XG4gICAgICB0aHJvdyBuZXcgUG9saXNoZWRFcnJvcig2OCk7XG4gICAgfVxuXG4gICAgc2VsZWN0b3JzLnB1c2goZ2VuZXJhdGVTZWxlY3RvcnModGVtcGxhdGUsIHN0YXRlc1tpXSkpO1xuICB9XG5cbiAgc2VsZWN0b3JzID0gc2VsZWN0b3JzLmpvaW4oJywnKTtcbiAgcmV0dXJuIHNlbGVjdG9ycztcbn1cblxudmFyIHN0YXRlTWFwJDEgPSBbdW5kZWZpbmVkLCBudWxsLCAnYWN0aXZlJywgJ2ZvY3VzJywgJ2hvdmVyJ107XG5cbmZ1bmN0aW9uIHRlbXBsYXRlJDEoc3RhdGUpIHtcbiAgcmV0dXJuIFwiYnV0dG9uXCIgKyBzdGF0ZSArIFwiLFxcbiAgaW5wdXRbdHlwZT1cXFwiYnV0dG9uXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICBpbnB1dFt0eXBlPVxcXCJyZXNldFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl1cIiArIHN0YXRlO1xufVxuLyoqXG4gKiBQb3B1bGF0ZXMgc2VsZWN0b3JzIHRoYXQgdGFyZ2V0IGFsbCBidXR0b25zLiBZb3UgY2FuIHBhc3Mgb3B0aW9uYWwgc3RhdGVzIHRvIGFwcGVuZCB0byB0aGUgc2VsZWN0b3JzLlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgW2J1dHRvbnMoJ2FjdGl2ZScpXToge1xuICogICAgICdib3JkZXInOiAnbm9uZSdcbiAqICAgfVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICA+ICR7YnV0dG9ucygnYWN0aXZlJyl9IHtcbiAqICAgICBib3JkZXI6IG5vbmU7XG4gKiAgIH1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgaW4gSlMgT3V0cHV0XG4gKlxuICogICdidXR0b246YWN0aXZlLFxuICogICdpbnB1dFt0eXBlPVwiYnV0dG9uXCJdOmFjdGl2ZSxcbiAqICAnaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXTphY3RpdmUsXG4gKiAgJ2lucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdOmFjdGl2ZToge1xuICogICAnYm9yZGVyJzogJ25vbmUnXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiBidXR0b25zKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3RhdGVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN0YXRlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZWZ1bFNlbGVjdG9ycyhzdGF0ZXMsIHRlbXBsYXRlJDEsIHN0YXRlTWFwJDEpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5tYXJnaW4oJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke21hcmdpbignMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAnbWFyZ2luVG9wJzogJzEycHgnLFxuICogICAnbWFyZ2luUmlnaHQnOiAnMjRweCcsXG4gKiAgICdtYXJnaW5Cb3R0b20nOiAnMzZweCcsXG4gKiAgICdtYXJnaW5MZWZ0JzogJzQ4cHgnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIG1hcmdpbigpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICB2YWx1ZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnbWFyZ2luJ10uY29uY2F0KHZhbHVlcykpO1xufVxuXG4vKipcbiAqIFNob3J0aGFuZCB0aGF0IGFjY2VwdHMgdXAgdG8gZm91ciB2YWx1ZXMsIGluY2x1ZGluZyBudWxsIHRvIHNraXAgYSB2YWx1ZSwgYW5kIG1hcHMgdGhlbSB0byB0aGVpciByZXNwZWN0aXZlIGRpcmVjdGlvbnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5wYWRkaW5nKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtwYWRkaW5nKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdwYWRkaW5nVG9wJzogJzEycHgnLFxuICogICAncGFkZGluZ1JpZ2h0JzogJzI0cHgnLFxuICogICAncGFkZGluZ0JvdHRvbSc6ICczNnB4JyxcbiAqICAgJ3BhZGRpbmdMZWZ0JzogJzQ4cHgnXG4gKiB9XG4gKi9cbmZ1bmN0aW9uIHBhZGRpbmcoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCB2YWx1ZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGRpcmVjdGlvbmFsUHJvcGVydHkuYXBwbHkodm9pZCAwLCBbJ3BhZGRpbmcnXS5jb25jYXQodmFsdWVzKSk7XG59XG5cbnZhciBwb3NpdGlvbk1hcCA9IFsnYWJzb2x1dGUnLCAnZml4ZWQnLCAncmVsYXRpdmUnLCAnc3RhdGljJywgJ3N0aWNreSddO1xuLyoqXG4gKiBTaG9ydGhhbmQgYWNjZXB0cyB1cCB0byBmaXZlIHZhbHVlcywgaW5jbHVkaW5nIG51bGwgdG8gc2tpcCBhIHZhbHVlLCBhbmQgbWFwcyB0aGVtIHRvIHRoZWlyIHJlc3BlY3RpdmUgZGlyZWN0aW9ucy4gVGhlIGZpcnN0IHZhbHVlIGNhbiBvcHRpb25hbGx5IGJlIGEgcG9zaXRpb24ga2V5d29yZC5cbiAqIEBleGFtcGxlXG4gKiAvLyBTdHlsZXMgYXMgb2JqZWN0IHVzYWdlXG4gKiBjb25zdCBzdHlsZXMgPSB7XG4gKiAgIC4uLnBvc2l0aW9uKCcxMnB4JywgJzI0cHgnLCAnMzZweCcsICc0OHB4JylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHtwb3NpdGlvbignMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpfVxuICogYFxuICpcbiAqIC8vIENTUyBhcyBKUyBPdXRwdXRcbiAqXG4gKiBkaXYge1xuICogICAndG9wJzogJzEycHgnLFxuICogICAncmlnaHQnOiAnMjRweCcsXG4gKiAgICdib3R0b20nOiAnMzZweCcsXG4gKiAgICdsZWZ0JzogJzQ4cHgnXG4gKiB9XG4gKlxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi5wb3NpdGlvbignYWJzb2x1dGUnLCAnMTJweCcsICcyNHB4JywgJzM2cHgnLCAnNDhweCcpXG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgICR7cG9zaXRpb24oJ2Fic29sdXRlJywgJzEycHgnLCAnMjRweCcsICczNnB4JywgJzQ4cHgnKX1cbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJyxcbiAqICAgJ3RvcCc6ICcxMnB4JyxcbiAqICAgJ3JpZ2h0JzogJzI0cHgnLFxuICogICAnYm90dG9tJzogJzM2cHgnLFxuICogICAnbGVmdCc6ICc0OHB4J1xuICogfVxuICovXG5cbmZ1bmN0aW9uIHBvc2l0aW9uKGZpcnN0VmFsdWUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHZhbHVlcyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdmFsdWVzW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmIChwb3NpdGlvbk1hcC5pbmRleE9mKGZpcnN0VmFsdWUpID49IDAgJiYgZmlyc3RWYWx1ZSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZGlyZWN0aW9uYWxQcm9wZXJ0eS5hcHBseSh2b2lkIDAsIFsnJ10uY29uY2F0KHZhbHVlcykpLCB7XG4gICAgICBwb3NpdGlvbjogZmlyc3RWYWx1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaXJlY3Rpb25hbFByb3BlcnR5LmFwcGx5KHZvaWQgMCwgWycnLCBmaXJzdFZhbHVlXS5jb25jYXQodmFsdWVzKSk7XG4gIH1cbn1cblxuLyoqXG4gKiBTaG9ydGhhbmQgdG8gc2V0IHRoZSBoZWlnaHQgYW5kIHdpZHRoIHByb3BlcnRpZXMgaW4gYSBzaW5nbGUgc3RhdGVtZW50LlxuICogQGV4YW1wbGVcbiAqIC8vIFN0eWxlcyBhcyBvYmplY3QgdXNhZ2VcbiAqIGNvbnN0IHN0eWxlcyA9IHtcbiAqICAgLi4uc2l6ZSgnMzAwcHgnLCAnMjUwcHgnKVxuICogfVxuICpcbiAqIC8vIHN0eWxlZC1jb21wb25lbnRzIHVzYWdlXG4gKiBjb25zdCBkaXYgPSBzdHlsZWQuZGl2YFxuICogICAke3NpemUoJzMwMHB4JywgJzI1MHB4Jyl9XG4gKiBgXG4gKlxuICogLy8gQ1NTIGFzIEpTIE91dHB1dFxuICpcbiAqIGRpdiB7XG4gKiAgICdoZWlnaHQnOiAnMzAwcHgnLFxuICogICAnd2lkdGgnOiAnMjUwcHgnLFxuICogfVxuICovXG5mdW5jdGlvbiBzaXplKGhlaWdodCwgd2lkdGgpIHtcbiAgaWYgKHdpZHRoID09PSB2b2lkIDApIHtcbiAgICB3aWR0aCA9IGhlaWdodDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBoZWlnaHQsXG4gICAgd2lkdGg6IHdpZHRoXG4gIH07XG59XG5cbnZhciBzdGF0ZU1hcCA9IFt1bmRlZmluZWQsIG51bGwsICdhY3RpdmUnLCAnZm9jdXMnLCAnaG92ZXInXTtcblxuZnVuY3Rpb24gdGVtcGxhdGUoc3RhdGUpIHtcbiAgcmV0dXJuIFwiaW5wdXRbdHlwZT1cXFwiY29sb3JcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwiZGF0ZVxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJkYXRldGltZVxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJlbWFpbFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJtb250aFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwicGFzc3dvcmRcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInRlbFxcXCJdXCIgKyBzdGF0ZSArIFwiLFxcbiAgICBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcInRpbWVcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXRbdHlwZT1cXFwidXJsXFxcIl1cIiArIHN0YXRlICsgXCIsXFxuICAgIGlucHV0W3R5cGU9XFxcIndlZWtcXFwiXVwiICsgc3RhdGUgKyBcIixcXG4gICAgaW5wdXQ6bm90KFt0eXBlXSlcIiArIHN0YXRlICsgXCIsXFxuICAgIHRleHRhcmVhXCIgKyBzdGF0ZTtcbn1cbi8qKlxuICogUG9wdWxhdGVzIHNlbGVjdG9ycyB0aGF0IHRhcmdldCBhbGwgdGV4dCBpbnB1dHMuIFlvdSBjYW4gcGFzcyBvcHRpb25hbCBzdGF0ZXMgdG8gYXBwZW5kIHRvIHRoZSBzZWxlY3RvcnMuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICBbdGV4dElucHV0cygnYWN0aXZlJyldOiB7XG4gKiAgICAgJ2JvcmRlcic6ICdub25lJ1xuICogICB9XG4gKiB9XG4gKlxuICogLy8gc3R5bGVkLWNvbXBvbmVudHMgdXNhZ2VcbiAqIGNvbnN0IGRpdiA9IHN0eWxlZC5kaXZgXG4gKiAgID4gJHt0ZXh0SW5wdXRzKCdhY3RpdmUnKX0ge1xuICogICAgIGJvcmRlcjogbm9uZTtcbiAqICAgfVxuICogYFxuICpcbiAqIC8vIENTUyBpbiBKUyBPdXRwdXRcbiAqXG4gKiAgJ2lucHV0W3R5cGU9XCJjb2xvclwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cImRhdGVcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJkYXRldGltZVwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwiZW1haWxcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJtb250aFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwic2VhcmNoXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwidGVsXCJdOmFjdGl2ZSxcbiAqICBpbnB1dFt0eXBlPVwidGV4dFwiXTphY3RpdmUsXG4gKiAgaW5wdXRbdHlwZT1cInRpbWVcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJ1cmxcIl06YWN0aXZlLFxuICogIGlucHV0W3R5cGU9XCJ3ZWVrXCJdOmFjdGl2ZSxcbiAqICBpbnB1dDpub3QoW3R5cGVdKTphY3RpdmUsXG4gKiAgdGV4dGFyZWE6YWN0aXZlJzoge1xuICogICAnYm9yZGVyJzogJ25vbmUnXG4gKiB9XG4gKi9cblxuXG5mdW5jdGlvbiB0ZXh0SW5wdXRzKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3RhdGVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHN0YXRlc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZWZ1bFNlbGVjdG9ycyhzdGF0ZXMsIHRlbXBsYXRlLCBzdGF0ZU1hcCk7XG59XG5cbi8qKlxuICogQWNjZXB0cyBhbnkgbnVtYmVyIG9mIHRyYW5zaXRpb24gdmFsdWVzIGFzIHBhcmFtZXRlcnMgZm9yIGNyZWF0aW5nIGEgc2luZ2xlIHRyYW5zaXRpb24gc3RhdGVtZW50LiBZb3UgbWF5IGFsc28gcGFzcyBhbiBhcnJheSBvZiBwcm9wZXJ0aWVzIGFzIHRoZSBmaXJzdCBwYXJhbWV0ZXIgdGhhdCB5b3Ugd291bGQgbGlrZSB0byBhcHBseSB0aGUgc2FtZSB0cmFuc2l0aW9uIHZhbHVlcyB0byAoc2Vjb25kIHBhcmFtZXRlcikuXG4gKiBAZXhhbXBsZVxuICogLy8gU3R5bGVzIGFzIG9iamVjdCB1c2FnZVxuICogY29uc3Qgc3R5bGVzID0ge1xuICogICAuLi50cmFuc2l0aW9ucygnb3BhY2l0eSAxLjBzIGVhc2UtaW4gMHMnLCAnd2lkdGggMi4wcyBlYXNlLWluIDJzJyksXG4gKiAgIC4uLnRyYW5zaXRpb25zKFsnY29sb3InLCAnYmFja2dyb3VuZC1jb2xvciddLCAnMi4wcyBlYXNlLWluIDJzJylcbiAqIH1cbiAqXG4gKiAvLyBzdHlsZWQtY29tcG9uZW50cyB1c2FnZVxuICogY29uc3QgZGl2ID0gc3R5bGVkLmRpdmBcbiAqICAgJHt0cmFuc2l0aW9ucygnb3BhY2l0eSAxLjBzIGVhc2UtaW4gMHMnLCAnd2lkdGggMi4wcyBlYXNlLWluIDJzJyl9O1xuICogICAke3RyYW5zaXRpb25zKFsnY29sb3InLCAnYmFja2dyb3VuZC1jb2xvciddLCAnMi4wcyBlYXNlLWluIDJzJyksfTtcbiAqIGBcbiAqXG4gKiAvLyBDU1MgYXMgSlMgT3V0cHV0XG4gKlxuICogZGl2IHtcbiAqICAgJ3RyYW5zaXRpb24nOiAnb3BhY2l0eSAxLjBzIGVhc2UtaW4gMHMsIHdpZHRoIDIuMHMgZWFzZS1pbiAycydcbiAqICAgJ3RyYW5zaXRpb24nOiAnY29sb3IgMi4wcyBlYXNlLWluIDJzLCBiYWNrZ3JvdW5kLWNvbG9yIDIuMHMgZWFzZS1pbiAycycsXG4gKiB9XG4gKi9cblxuZnVuY3Rpb24gdHJhbnNpdGlvbnMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwcm9wZXJ0aWVzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHByb3BlcnRpZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoQXJyYXkuaXNBcnJheShwcm9wZXJ0aWVzWzBdKSAmJiBwcm9wZXJ0aWVzLmxlbmd0aCA9PT0gMikge1xuICAgIHZhciB2YWx1ZSA9IHByb3BlcnRpZXNbMV07XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IFBvbGlzaGVkRXJyb3IoNjEpO1xuICAgIH1cblxuICAgIHZhciB0cmFuc2l0aW9uc1N0cmluZyA9IHByb3BlcnRpZXNbMF0ubWFwKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgcmV0dXJuIHByb3BlcnR5ICsgXCIgXCIgKyB2YWx1ZTtcbiAgICB9KS5qb2luKCcsICcpO1xuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2l0aW9uc1N0cmluZ1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRyYW5zaXRpb246IHByb3BlcnRpZXMuam9pbignLCAnKVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgY3VycmllZEFkanVzdEh1ZSQxIGFzIGFkanVzdEh1ZSwgYW5pbWF0aW9uLCBiYWNrZ3JvdW5kSW1hZ2VzLCBiYWNrZ3JvdW5kcywgYmV0d2VlbiwgYm9yZGVyLCBib3JkZXJDb2xvciwgYm9yZGVyUmFkaXVzLCBib3JkZXJTdHlsZSwgYm9yZGVyV2lkdGgsIGJ1dHRvbnMsIGNsZWFyRml4LCBjb21wbGVtZW50LCBjb3ZlciwgY3NzVmFyLCBjdXJyaWVkRGFya2VuJDEgYXMgZGFya2VuLCBjdXJyaWVkRGVzYXR1cmF0ZSQxIGFzIGRlc2F0dXJhdGUsIGRpcmVjdGlvbmFsUHJvcGVydHksIGVhc2VJbiwgZWFzZUluT3V0LCBlYXNlT3V0LCBlbGxpcHNpcywgZW0kMSBhcyBlbSwgZmx1aWRSYW5nZSwgZm9udEZhY2UsIGdldENvbnRyYXN0LCBnZXRMdW1pbmFuY2UsIGdldFZhbHVlQW5kVW5pdCwgZ3JheXNjYWxlLCBoaURQSSwgaGlkZVRleHQsIGhpZGVWaXN1YWxseSwgaHNsLCBoc2xUb0NvbG9yU3RyaW5nLCBoc2xhLCBpbXBvcnRhbnQsIGludmVydCwgY3VycmllZExpZ2h0ZW4kMSBhcyBsaWdodGVuLCBsaW5lYXJHcmFkaWVudCwgbWFyZ2luLCBtYXRoLCBtZWV0c0NvbnRyYXN0R3VpZGVsaW5lcywgbWl4JDEgYXMgbWl4LCBtb2R1bGFyU2NhbGUsIG5vcm1hbGl6ZSwgY3VycmllZE9wYWNpZnkkMSBhcyBvcGFjaWZ5LCBwYWRkaW5nLCBwYXJzZVRvSHNsLCBwYXJzZVRvUmdiLCBwb3NpdGlvbiwgcmFkaWFsR3JhZGllbnQsIHJlYWRhYmxlQ29sb3IsIHJlbSQxIGFzIHJlbSwgcmVtVG9QeCwgcmV0aW5hSW1hZ2UsIHJnYiwgcmdiVG9Db2xvclN0cmluZywgcmdiYSwgY3VycmllZFNhdHVyYXRlJDEgYXMgc2F0dXJhdGUsIGN1cnJpZWRTZXRIdWUkMSBhcyBzZXRIdWUsIGN1cnJpZWRTZXRMaWdodG5lc3MkMSBhcyBzZXRMaWdodG5lc3MsIGN1cnJpZWRTZXRTYXR1cmF0aW9uJDEgYXMgc2V0U2F0dXJhdGlvbiwgY3VycmllZFNoYWRlJDEgYXMgc2hhZGUsIHNpemUsIHN0cmlwVW5pdCwgdGV4dElucHV0cywgdGltaW5nRnVuY3Rpb25zLCBjdXJyaWVkVGludCQxIGFzIHRpbnQsIHRvQ29sb3JTdHJpbmcsIHRyYW5zaXRpb25zLCBjdXJyaWVkVHJhbnNwYXJlbnRpemUkMSBhcyB0cmFuc3BhcmVudGl6ZSwgdHJpYW5nbGUsIHdvcmRXcmFwIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbmltcG9ydCB7IHJnYiwgcmVhZGFibGVDb2xvciB9IGZyb20gJ3BvbGlzaGVkJztcbi8vIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIHdpbmRvdyB0byBwcm9tcHQgdGhlIHVzZXIgdG8gZW50ZXIgcHJvamVjdCBkZXRhaWxzLCBhbmRcbi8vIGl0IHdpbGwgdGhlbiBjcmVhdGUgYSBkb2N1bWVudCBzdHJ1Y3R1cmUgYW5kIHRodW1ibmFpbC5cbi8vIFRoaXMgZmlsZSBob2xkcyB0aGUgbWFpbiBjb2RlIGZvciB0aGUgcGx1Z2lucy4gSXQgaGFzIGFjY2VzcyB0byB0aGUgKmRvY3VtZW50Ki5cbi8vIFlvdSBjYW4gYWNjZXNzIGJyb3dzZXIgQVBJcyBpbiB0aGUgPHNjcmlwdD4gdGFnIGluc2lkZSBcInVpLmh0bWxcIiB3aGljaCBoYXMgYVxuLy8gZnVsbCBicm93c2VyIGVudmlyb25tZW50IChzZWUgZG9jdW1lbnRhdGlvbikuXG5jb25zdCBURU1QTEFURV9DT05URU5UUyA9IFwiYzc2OWE2MjY1NTU2YzA5MWNjMWQ4YzA1NzYyYzcxZWNiZjk3MzE0YlwiO1xuY29uc3QgVEVNUExBVEVfQkxPQ0tTID0gXCI1MjA1OGU0NDU0ZDgyOTg3MjQ4MmI4NTUxZjQ5MThjYjgyODg4MGQ2XCI7XG5jb25zdCBURU1QTEFURV9JTkZPID0gXCJkNDViMzAwNTUxNmY4ODc3MjQ5NDBhNWExMDY2M2FkY2ZmOWRjNGI0XCI7XG4vL0ZvbnQgc3R5bGVzXG5jb25zdCBXRUJfWFhYTEFSR0UgPSBcIjk1ZTk0YWM0MWE4Y2M3OWQwOTcxMTFhODc4NWQzYjU5NzZjNzBmOTlcIjtcbmNvbnN0IFBBRERJTkdfSCA9IDQwO1xuY29uc3QgUEFERElOR19WID0gNDA7XG5jb25zdCBTUEFDSU5HID0gMjQ7XG5jb25zdCBGT05UX1RJVExFUyA9IHsgZmFtaWx5OiBcIk1lbmxvXCIsIHN0eWxlOiBcIlJlZ3VsYXJcIiB9O1xuY29uc3QgRk9OVF9CT0RJRVMgPSB7IGZhbWlseTogXCJTRiBQcm8gVGV4dFwiLCBzdHlsZTogXCJSZWd1bGFyXCIgfTtcbmNvbnN0IENPTVBPTkVOVF9USVRMRSA9IFwiZGNjODUxNDQ3MzdjYzg3MzZhNzgwYjZlNDI4YTE0NmFlNDU2MDYwNlwiO1xuY29uc3QgQ09NUE9ORU5UX0JMT0NLID0gXCI1OWExN2MzMDBkNDBkOTUyZTQwMjVkNTUxZWYyNWY5MDZkOTJmNDM3XCI7XG5jb25zdCBTT0xJRCA9ICdTT0xJRCc7XG5jb25zdCBOT1JNQUwgPSAnTk9STUFMJztcbmNvbnN0IEJMQUNLID0ge1xuICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICBcIm9wYWNpdHlcIjogMSxcbiAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgXCJjb2xvclwiOiB7XG4gICAgICAgIFwiclwiOiAwLFxuICAgICAgICBcImdcIjogMCxcbiAgICAgICAgXCJiXCI6IDBcbiAgICB9XG59O1xuY29uc3QgV0hJVEUgPSB7XG4gICAgXCJ0eXBlXCI6IFNPTElELFxuICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgIFwib3BhY2l0eVwiOiAxLFxuICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICBcImJcIjogMVxuICAgIH1cbn07XG52YXIgTElHSFRfVEVYVF9DT0xPUl9TVFlMRTtcbnZhciBEQVJLX1RFWFRfQ09MT1JfU1RZTEU7XG5sZXQgTElHSFRfQ09MT1JTX0NVU1RPTSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwicHJpbWFyeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJhY3Rpb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dO1xubGV0IERBUktfQ09MT1JTX0NVU1RPTSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwicHJpbWFyeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJhY3Rpb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5dO1xubGV0IExJR0hUX0NPTE9SU19HRU5FUkFURUQgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uUHJpbWFyeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uQWN0aW9uXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYWN0aW9uRm9yZWdyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImFjdGlvbkJhY2tncm91bmRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXTtcbmxldCBEQVJLX0NPTE9SU19HRU5FUkFURUQgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uUHJpbWFyeVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uQWN0aW9uXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYWN0aW9uRm9yZWdyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImFjdGlvbkJhY2tncm91bmRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXTtcbmxldCBMSUdIVF9DT0xPUlNfRklYRUQgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIm5vdGVcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjk0MTE3NjQ3NDA5NDM5MDksXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuODU4ODIzNTM3ODI2NTM4MVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25Ob3RlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMCxcbiAgICAgICAgICAgICAgICBcImdcIjogMCxcbiAgICAgICAgICAgICAgICBcImJcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcImluYm91bmRNZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC45NTY4NjI3NDc2NjkyMixcbiAgICAgICAgICAgICAgICBcImdcIjogMC45NjQ3MDU4ODQ0NTY2MzQ1LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjk3MjU0OTAyMTI0NDA0OTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInN5c3RlbU1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJib3JkZXJTeXN0ZW1NZXNzYWdlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDAuMTE5OTk5OTk3MzE3NzkwOTksXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMCxcbiAgICAgICAgICAgICAgICBcImdcIjogMCxcbiAgICAgICAgICAgICAgICBcImJcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiYmFja2dyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uQmFja2dyb3VuZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImVsZXZhdGVkXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMSxcbiAgICAgICAgICAgICAgICBcImJcIjogMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZGFuZ2VyXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMSxcbiAgICAgICAgICAgICAgICBcImdcIjogMC45NDExNzY0NzQwOTQzOTA5LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjk0NTA5ODA0MjQ4ODA5ODFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uRGFuZ2VyXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC41NDkwMTk2MzQ3MjM2NjMzLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjEzNzI1NDkwODY4MDkxNTgzLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjE3MjU0OTAyNDIyNDI4MTNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjAxMTc2NDcwNjExMjQ0NDQsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuNTA1ODgyMzgyMzkyODgzMyxcbiAgICAgICAgICAgICAgICBcImJcIjogMC4zMjU0OTAyMDY0ODAwMjYyNVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibm90aWZ5XCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC44MDAwMDAwMTE5MjA5MjksXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuMjAwMDAwMDAyOTgwMjMyMjQsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMjUwOTgwNDA2OTk5NTg4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJkaXNhYmxlZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuODAwMDAwMDExOTIwOTI5LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjgwMDAwMDAxMTkyMDkyOSxcbiAgICAgICAgICAgICAgICBcImJcIjogMC44MDAwMDAwMTE5MjA5MjlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImljb25cIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjE4NDMxMzcyOTQwNTQwMzE0LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjIyMzUyOTQxMzM0MjQ3NTksXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMjU0OTAxOTc1MzkzMjk1M1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXTtcbmxldCBEQVJLX0NPTE9SU19GSVhFRCA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibm90ZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuOTk2MDc4NDMxNjA2MjkyNyxcbiAgICAgICAgICAgICAgICBcImdcIjogMC44MzkyMTU2OTU4NTgwMDE3LFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwLjY1ODgyMzU0OTc0NzQ2N1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwib25Ob3RlXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMCxcbiAgICAgICAgICAgICAgICBcImdcIjogMCxcbiAgICAgICAgICAgICAgICBcImJcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiaW5ib3VuZE1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjE4NDMxMzcyOTQwNTQwMzE0LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjIyMzUyOTQxMzM0MjQ3NTksXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMjU0OTAxOTc1MzkzMjk1M1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwic3lzdGVtTWVzc2FnZVwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImJvcmRlclN5c3RlbU1lc3NhZ2VcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMC4zNDk5OTk5OTQwMzk1MzU1LFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImJhY2tncm91bmRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJvbkJhY2tncm91bmRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAxLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAxLFxuICAgICAgICAgICAgICAgIFwiYlwiOiAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJlbGV2YXRlZFwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuMTAwMDAwMDAxNDkwMTE2MTIsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuMTAwMDAwMDAxNDkwMTE2MTIsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMTAwMDAwMDAxNDkwMTE2MTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImRhbmdlclwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuNDA3ODQzMTQyNzQ3ODc5MDMsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuMDcwNTg4MjM4NTM3MzExNTUsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMDk4MDM5MjE3MjkzMjYyNDhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIm9uRGFuZ2VyXCIsXG4gICAgICAgIGZpbGw6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBTT0xJRCxcbiAgICAgICAgICAgIFwidmlzaWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgICAgICBcImJsZW5kTW9kZVwiOiBOT1JNQUwsXG4gICAgICAgICAgICBcImNvbG9yXCI6IHtcbiAgICAgICAgICAgICAgICBcInJcIjogMC45NjA3ODQzMTYwNjI5MjcyLFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjgzNTI5NDEyNzQ2NDI5NDQsXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuODQ3MDU4ODMyNjQ1NDE2M1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwic3VjY2Vzc1wiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuMTYwNzg0MzE5MDQzMTU5NDgsXG4gICAgICAgICAgICAgICAgXCJnXCI6IDAuNjExNzY0NzI5MDIyOTc5NyxcbiAgICAgICAgICAgICAgICBcImJcIjogMC40MDAwMDAwMDU5NjA0NjQ1XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJub3RpZnlcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjE4NDMxMzcyOTQwNTQwMzE0LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjIyMzUyOTQxMzM0MjQ3NTksXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMjU0OTAxOTc1MzkzMjk1M1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiZGlzYWJsZWRcIixcbiAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICAgICAgXCJ2aXNpYmxlXCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogMSxcbiAgICAgICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjE4NDMxMzcyOTQwNTQwMzE0LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjIyMzUyOTQxMzM0MjQ3NTksXG4gICAgICAgICAgICAgICAgXCJiXCI6IDAuMjU0OTAxOTc1MzkzMjk1M1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiaWNvblwiLFxuICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogU09MSUQsXG4gICAgICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3BhY2l0eVwiOiAxLFxuICAgICAgICAgICAgXCJibGVuZE1vZGVcIjogTk9STUFMLFxuICAgICAgICAgICAgXCJjb2xvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJyXCI6IDAuNTI5NDExNzkyNzU1MTI3LFxuICAgICAgICAgICAgICAgIFwiZ1wiOiAwLjU3MjU0OTA0NTA4NTkwNyxcbiAgICAgICAgICAgICAgICBcImJcIjogMC42MTU2ODYyOTc0MTY2ODdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbl07XG4vLyBUaGlzIHNob3dzIHRoZSBIVE1MIHBhZ2UgaW4gXCJ1aS5odG1sXCIuXG5zd2l0Y2ggKGZpZ21hLmNvbW1hbmQpIHtcbiAgICBjYXNlIFwidXBkYXRlXCI6XG4gICAgICAgIHVwZGF0ZUdlbmVyYXRlZENvbG9ycyhcImxpZ2h0XCIpO1xuICAgICAgICB1cGRhdGVHZW5lcmF0ZWRDb2xvcnMoXCJkYXJrXCIpO1xuICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgICBmaWdtYS5zaG93VUkoX19odG1sX18pO1xuICAgICAgICBmaWdtYS51aS5yZXNpemUoNDAwLCAzMzApO1xuICAgICAgICAvLyBpZihmaWdtYS5yb290LmdldFBsdWdpbkRhdGEoXCJzdGF0dXNcIikgPT0gXCJydW5cIikge1xuICAgICAgICAvLyAgIC8vVE9ETyBldmFsdWF0ZSBpZiB0aGVyZSBpcyBzb21lIHdheSB0byByZWNvbmZpZ3VyZSB0aGUgcGFnZXMgYWZ0ZXIgaW5pdGlhbCBzZXR1cC5cbiAgICAgICAgLy8gICAvLyBmaWdtYS51aS5yZXNpemUoNDAwLCAxMzYpXG4gICAgICAgIC8vICAgZmlnbWEudWkucG9zdE1lc3NhZ2UoXCJhYm91dFwiKVxuICAgICAgICAvLyB9XG4gICAgICAgIGJyZWFrO1xufVxuLy8gQ2FsbHMgdG8gXCJwYXJlbnQucG9zdE1lc3NhZ2VcIiBmcm9tIHdpdGhpbiB0aGUgSFRNTCBwYWdlIHdpbGwgdHJpZ2dlciB0aGlzXG4vLyBjYWxsYmFjay4gVGhlIGNhbGxiYWNrIHdpbGwgYmUgcGFzc2VkIHRoZSBcInBsdWdpbk1lc3NhZ2VcIiBwcm9wZXJ0eSBvZiB0aGVcbi8vIHBvc3RlZCBtZXNzYWdlLlxuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgICAgICBjYXNlIFwicmVzaXplXCI6XG4gICAgICAgICAgICBmaWdtYS51aS5yZXNpemUoNDAwLCBtc2cuaGVpZ2h0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiY3JlYXRlLXByb2plY3RcIjpcbiAgICAgICAgICAgIGZpZ21hLnVpLmhpZGUoKTtcbiAgICAgICAgICAgIHlpZWxkIGxvYWRSZXNvdXJjZXMoKTtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UmVsYXVuY2hEYXRhKHsgYWJvdXQ6IFwiVGhpcyBkb2N1bWVudCB3YXMgZm9ybWF0ZWQgd2l0aCBadGFydFwiIH0pO1xuICAgICAgICAgICAgZmlnbWEucm9vdC5zZXRQbHVnaW5EYXRhKFwic3RhdHVzXCIsIFwicnVuXCIpO1xuICAgICAgICAgICAgeWllbGQgY3JlYXRlUHJvamVjdChtc2cucHJvamVjdFRpdGxlLCBtc2cucHJvamVjdFR5cGUsIG1zZy5wcm9qZWN0RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJjcmVhdGUtdGhlbWVcIjpcbiAgICAgICAgICAgIGZpZ21hLnVpLmhpZGUoKTtcbiAgICAgICAgICAgIHlpZWxkIGxvYWRSZXNvdXJjZXMoKTtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UmVsYXVuY2hEYXRhKHsgdXBkYXRlOiBcIlJlZ2VuZXJhdGUgYWNjZXNzaWJsZSB0aGVtZSBjb2xvcnNcIiB9KTtcbiAgICAgICAgICAgIGZpZ21hLnJvb3Quc2V0UGx1Z2luRGF0YShcInN0YXR1c1wiLCBcInJ1blwiKTtcbiAgICAgICAgICAgIHlpZWxkIGNyZWF0ZVRoZW1lKG1zZy50aGVtZU5hbWUsIG1zZy5wcmltYXJ5Q29sb3IsIG1zZy5tZXNzYWdlQ29sb3IsIG1zZy5hY3Rpb25Db2xvcik7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUsIHR5cGUsIGRlc2NyaXB0aW9uKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gU2V0IHBhZ2UgbmFtZXMgYW5kIHJlbmFtZXMgdGhlIGRlZmF1bHQgXCJQYWdlIDFcIlxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5uYW1lID0gXCLwn5OWIEFib3V0XCI7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkV4cGxvcmF0aW9uXCI6XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfpJQgUHJvYmxlbSBkZWZpbml0aW9uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5SsIFJlc2VhcmNoXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn4+dIEV4cGxvcmF0aW9uc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFNvbHV0aW9uIEFcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTb2x1dGlvbiBCXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIlByb2R1Y3RcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OQIERlc2lnbiBTcGVjc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFJlYWR5IGZvciBkZXZcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBTaGlwcGVkXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCflbkgUHJvdG90eXBlc1wiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFByb3RvdHlwZSBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIvCfj50gRXhwbG9yYXRpb25zXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogRXhwbG9yYXRpb24gQVwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCLwn5OmIEFyY2hpdmVzXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIgICAgICAgICDihqogQXJjaGl2ZSBBXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIkxpYnJhcnlcIjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi4p2TIEhvdyB0by4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiICAgICAgICAg4oaqIFVzZSB0aGlzIGxpYnJhcnlcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIiAgICAgICAgIOKGqiBDb250cmlidXRlXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIkNvbXBvbmVudCBBXCIpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UoXCJDb21wb25lbnQgQlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwiQ29tcG9uZW50IENcIik7XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZShcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlKFwi8J+apyBDb21wb25lbnQgdGVtcGxhdGVcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy9BZGQgYSB0aHVtbmFpbCB0byB0aGUgZmlyc3QgcGFnZS5cbiAgICAgICAgeWllbGQgY3JlYXRlVGh1bWJuYWlsKHRpdGxlLCB0eXBlKS50aGVuKCgpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3REZXRhaWxzKGRlc2NyaXB0aW9uLCB0eXBlKTtcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAodHlwZSA9PSBcIkxpYnJhcnlcIikge1xuICAgICAgICAgICAgbGV0IHRhcmdldHMgPSBbeWllbGQgY3JlYXRlVXNlKCksIHlpZWxkIGNyZWF0ZUNvbnRyaWJ1dGUoKV07XG4gICAgICAgICAgICB5aWVsZCBjcmVhdGVIb3dUbyh0YXJnZXRzKTtcbiAgICAgICAgICAgIC8vR28gdG8gdGhlIGNvbXBvbmVudCB0ZW1wbGF0ZSBwYWdlXG4gICAgICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW5bZmlnbWEucm9vdC5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgIC8vIFByZXBhcmUgYSBjb21wb25lbnQgdGVtcGxhdGVcbiAgICAgICAgICAgIC8vQ3JlYXRlIHRpdGxlXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhDT01QT05FTlRfVElUTEUpKS5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgdGl0bGUubmFtZSA9IFwiQ29tcG9uZW50IHRpdGxlXCI7XG4gICAgICAgICAgICBzZXRUZXh0KHRpdGxlLmZpbmRDaGlsZChub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiksIFwiQ29tcG9uZW50IG5hbWVcIik7XG4gICAgICAgICAgICB0aXRsZS5yZXNpemUoMTI4MCwgdGl0bGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIHRpdGxlLnggPSA4MDtcbiAgICAgICAgICAgIHRpdGxlLnkgPSA4MDtcbiAgICAgICAgICAgIC8vQ3JlYXRlIGJ1aWxkaW5nIGJsb2NrcyBhcmVhXG4gICAgICAgICAgICBsZXQgYnVpbGRpbmdfYmxvY2tzID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy5uYW1lID0gXCJCdWlsZGluZyBibG9ja3NcIjtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy5yZXNpemUoMTQ0MCwgYnVpbGRpbmdfYmxvY2tzLmhlaWdodCk7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MueCA9IDA7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MueSA9IDE1MjA7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgICAgIGxldCBibG9jayA9ICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKENPTVBPTkVOVF9CTE9DSykpLmNyZWF0ZUluc3RhbmNlKCk7XG4gICAgICAgICAgICBsZXQgYmxvY2tUaXRsZVRleHQgPSBibG9jay5maW5kQ2hpbGQobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIpO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhibG9ja1RpdGxlVGV4dC5mb250TmFtZSk7XG4gICAgICAgICAgICBibG9ja1RpdGxlVGV4dC50ZXh0QXV0b1Jlc2l6ZSA9IFwiSEVJR0hUXCI7XG4gICAgICAgICAgICBibG9ja1RpdGxlVGV4dC5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgYmxvY2tUaXRsZVRleHQuY2hhcmFjdGVycyA9IFwiQnVpbGRpbmcgYmxvY2tzXCI7XG4gICAgICAgICAgICBibG9jay5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLmFwcGVuZENoaWxkKGJsb2NrKTtcbiAgICAgICAgICAgIGxldCBidWlsZGluZ19ibG9ja19hcmVhID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEubmFtZSA9IFwiUGxhY2UgY29tcG9ubmVudHMgaGVyZS4uLlwiO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5sYXlvdXRNb2RlID0gXCJIT1JJWk9OVEFMXCI7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja3MuYXBwZW5kQ2hpbGQoYnVpbGRpbmdfYmxvY2tfYXJlYSk7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLnJlc2l6ZSgxNDQwLCA0ODApO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS5sYXlvdXRHcm93ID0gMDtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgICAgICBidWlsZGluZ19ibG9ja19hcmVhLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tfYXJlYS52ZXJ0aWNhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEuaG9yaXpvbnRhbFBhZGRpbmcgPSA0MDtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEuaXRlbVNwYWNpbmcgPSA0MDtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2NrX2FyZWEuZmlsbHMgPSBbXTtcbiAgICAgICAgICAgIGJ1aWxkaW5nX2Jsb2Nrcy5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgICAgIC8vQ3JlYXRlIGJhY2tncm91bmRcbiAgICAgICAgICAgIHZhciBiYWNrZ3JvdW5kID0gZmlnbWEuY3JlYXRlUmVjdGFuZ2xlKCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLnJlc2l6ZSgxNDQwLCAxNDQwKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQubmFtZSA9IFwiQmFja2dyb3VuZFwiO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5maWxscyA9IFt7IFwidHlwZVwiOiBTT0xJRCwgXCJ2aXNpYmxlXCI6IHRydWUsIFwib3BhY2l0eVwiOiAxLCBcImJsZW5kTW9kZVwiOiBOT1JNQUwsIFwiY29sb3JcIjogeyBcInJcIjogMSwgXCJnXCI6IDEsIFwiYlwiOiAxIH0gfV07XG4gICAgICAgICAgICAvLyBDcmVhdGUgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHZhciBkZXNjcmlwdGlvblRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmltcG9ydFN0eWxlQnlLZXlBc3luYyhXRUJfWFhYTEFSR0UpLnRoZW4oYmFzZVN0eWxlID0+IHsgZGVzY3JpcHRpb25UZXh0LnRleHRTdHlsZUlkID0gYmFzZVN0eWxlLmlkOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGZpZ21hLm5vdGlmeShcIkZvbnQgc3R5bGVzIGFyZSBtaXNzaW5nIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5yZXNpemUoMTI4MCwgODgpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0Lm5hbWUgPSBcIkRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQueCA9IDgwO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnkgPSAzNTI7XG4gICAgICAgICAgICBkZXNjcmlwdGlvblRleHQuYXV0b1JlbmFtZSA9IGZhbHNlO1xuICAgICAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhkZXNjcmlwdGlvblRleHQuZm9udE5hbWUpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnRleHRBdXRvUmVzaXplID0gXCJIRUlHSFRcIjtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uVGV4dC5jaGFyYWN0ZXJzID0gXCJUeXBlIGEgZGVzY3JpcHRpb24gb2YgdGhlIGNvbXBvbmVudCBoZXJlLCBhbmQgcGxhY2UgYW55IGNvbXBvbmVudHMvdmFyaWFudHMgaW4gdGhlIHNwYWNlIGJlbG93IOKGmO+4j1wiO1xuICAgICAgICAgICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIC8vIFRoZW4gYWRkIHRoZSB0ZW1wbGF0ZSB0byBhbnkgcGFnZXMgd2l0aCAnQ29tcG9uZW50JyBpbiB0aGUgdGl0bGVcbiAgICAgICAgICAgIGZpZ21hLnJvb3QuZmluZENoaWxkcmVuKHBhZ2VOb2RlID0+IHBhZ2VOb2RlLm5hbWUuaW5jbHVkZXMoXCJDb21wb25lbnRcIikpLmZvckVhY2gocGFnZU5vZGUgPT4ge1xuICAgICAgICAgICAgICAgIHBhZ2VOb2RlLmFwcGVuZENoaWxkKGJ1aWxkaW5nX2Jsb2Nrcy5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBwYWdlTm9kZS5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kLmNsb25lKCkpO1xuICAgICAgICAgICAgICAgIHBhZ2VOb2RlLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uVGV4dC5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBwYWdlTm9kZS5hcHBlbmRDaGlsZCh0aXRsZS5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvL0NsZWFyIHVwIHRoZSBcImV4dHJhXCIgdGVtcGxhdGVcbiAgICAgICAgICAgIHRpdGxlLnJlbW92ZSgpO1xuICAgICAgICAgICAgYnVpbGRpbmdfYmxvY2tzLnJlbW92ZSgpO1xuICAgICAgICAgICAgZGVzY3JpcHRpb25UZXh0LnJlbW92ZSgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW5bMF07XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGV0YWlscyhkZXNjcmlwdGlvbiwgdHlwZSkge1xuICAgIGxldCBkZXRhaWxzRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgIGRldGFpbHNGcmFtZS5uYW1lID0gXCJQcm9qZWN0IGRldGFpbHNcIjtcbiAgICBkZXRhaWxzRnJhbWUueSA9IDM0MDtcbiAgICBkZXRhaWxzRnJhbWUucmVzaXplV2l0aG91dENvbnN0cmFpbnRzKDY0MCwgMSk7XG4gICAgZGV0YWlsc0ZyYW1lLmxheW91dE1vZGUgPSBcIlZFUlRJQ0FMXCI7XG4gICAgZGV0YWlsc0ZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiRklYRURcIjtcbiAgICBkZXRhaWxzRnJhbWUudmVydGljYWxQYWRkaW5nID0gUEFERElOR19WO1xuICAgIGRldGFpbHNGcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IFBBRERJTkdfSDtcbiAgICBkZXRhaWxzRnJhbWUuaXRlbVNwYWNpbmcgPSBTUEFDSU5HO1xuICAgIGZpZ21hLmN1cnJlbnRQYWdlLmFwcGVuZENoaWxkKGRldGFpbHNGcmFtZSk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbChcIkRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uICE9PSBcIlwiID8gZGVzY3JpcHRpb24gOiBcIjxFbnRlciBhIGRlc2NyaXB0aW9uIGhlcmU+XCIpKTtcbiAgICBkZXRhaWxzRnJhbWUuYXBwZW5kQ2hpbGQoY3JlYXRlRGV0YWlsKFwiRXh0ZXJuYWwgTGlua3NcIiwgXCI8QWRkIGxpbmtzIGhlcmU+IOKGklxcbjxFLmcuIENvbmZsdWVuY2U+IOKGklxcbjxFLmcuIEdvb2dsZSBEb2M+IOKGklwiKSk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbChcIlNsYWNrIENoYW5uZWxzXCIsIFwiIzxjaGFubmVsIG5hbWUgaGVyZT5cXG4jPGNoYW5uZWwgbmFtZSBoZXJlPlwiKSk7XG4gICAgZGV0YWlsc0ZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZURldGFpbChcIlBvaW50cyBvZiBDb250YWN0XCIsIFwiRGVzaWduIC0gPGxpbmsgU2xhY2sgcHJvZmlsZSBoZXJlPlxcblByb2R1Y3QgLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XFxuRW5naW5lZXJpbmcgLSA8bGluayBTbGFjayBwcm9maWxlIGhlcmU+XCIpKTtcbiAgICAvLyBGcmFtZSBmb3Igd3JhcHBpbmcgdGhlIGxpc3Qgb2YgcGFnZSBleGFtcGxlcy5cbiAgICBsZXQgbGlzdEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBsaXN0RnJhbWUubmFtZSA9IFwiQWRkIG90aGVyIHBhZ2VzLCBhcyBuZWVkZWQuLi5cIjtcbiAgICBsaXN0RnJhbWUueSA9IGRldGFpbHNGcmFtZS55ICsgZGV0YWlsc0ZyYW1lLmhlaWdodCArIFNQQUNJTkc7XG4gICAgbGlzdEZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDEpO1xuICAgIGxpc3RGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgIGxpc3RGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkZJWEVEXCI7XG4gICAgbGlzdEZyYW1lLnZlcnRpY2FsUGFkZGluZyA9IFBBRERJTkdfVjtcbiAgICBsaXN0RnJhbWUuaG9yaXpvbnRhbFBhZGRpbmcgPSBQQURESU5HX0g7XG4gICAgbGlzdEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICBmaWdtYS5jdXJyZW50UGFnZS5hcHBlbmRDaGlsZChsaXN0RnJhbWUpO1xuICAgIC8vIE5vdCBhbGwgcHJvamVjdHMgbmVlZCBhIHByb3RvdHlwZSwgc2hpcHBlZCBpdC9yZWxlYXNlZCwgb3IgcmVzZWFyY2ggcGFnZS5cbiAgICAvLyBIb3dldmVyIGluIG9yZGVyIHRvIG1ha2UgYWRkaW5nIG9uZSBvZiB0aGVzZSBwYWdlcyBlYXNpbHksIHdlIGFkZCBzb21lXG4gICAgLy8gdGV4dCB0byBvdXIgc2NyYXRjaCBwYWdlIHNvIHdlIGNhbiBjb3B5L3Bhc3RlIHRoZW0gd2l0aCB0aGUgcHJvcGVyIGVtb2ppLlxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlIFwiRXhwbG9yYXRpb25cIjpcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlRXhhbXBsZShcIuKPsyBIaXN0b3J5XCIpKTtcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlRXhhbXBsZShcIuKchSBOZXh0IHN0ZXBzXCIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiUHJvZHVjdFwiOlxuICAgICAgICAgICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+ShfCfj70gU3R5bGVzXCIpKTtcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlRXhhbXBsZShcIuKame+4jyBDb21wb25lbnRzXCIpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiTGlicmFyeVwiOlxuICAgICAgICAgICAgbGlzdEZyYW1lLmFwcGVuZENoaWxkKGNyZWF0ZVBhZ2VFeGFtcGxlKFwi8J+ShfCfj70gU3R5bGVzXCIpKTtcbiAgICAgICAgICAgIGxpc3RGcmFtZS5hcHBlbmRDaGlsZChjcmVhdGVQYWdlRXhhbXBsZShcIvCfmoAgUm9hZG1hcFwiKSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgZmlnbWEudmlld3BvcnQuc2Nyb2xsQW5kWm9vbUludG9WaWV3KGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuKTtcbn1cbi8vIFRoaXMgZnVuY3Rpb24gYWRkcyBhIHRodW1ibmFpbCB0byB5b3VyIGZpcnN0IHBhZ2UuXG5mdW5jdGlvbiBjcmVhdGVUaHVtYm5haWwodGl0bGUsIHR5cGUpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiYWMwYjE1OGMzN2RlM2ZhOGJhOTRkMmIzODAxOTEzYWVhMjYyZmZjYlwiKS5jYXRjaChyZWFzb24gPT4ge1xuICAgICAgICAgICAgZmlnbWEubm90aWZ5KFwiQW5ub3RhdGlvbiBLaXQgbGlicmFyeSBpcyByZXF1aXJlZCBmb3IgdGh1bWJuYWlscy5cIik7XG4gICAgICAgICAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xuICAgICAgICB9KS50aGVuKChjb21wb25lbnQpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGxldCB0aHVtYm5haWxGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgICAgICB0aHVtYm5haWxGcmFtZS5uYW1lID0gXCJUaHVtYm5haWxcIjtcbiAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg2NDAsIDMyMCk7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRodW1ibmFpbCA9IGNvbXBvbmVudC5jcmVhdGVJbnN0YW5jZSgpO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbC5zY2FsZUZhY3RvciA9IDEgLyAzO1xuICAgICAgICAgICAgICAgIHRodW1ibmFpbEZyYW1lLmFwcGVuZENoaWxkKHRodW1ibmFpbCk7XG4gICAgICAgICAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuYXBwZW5kQ2hpbGQodGh1bWJuYWlsRnJhbWUpO1xuICAgICAgICAgICAgICAgIGxldCBsYWJlbCA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiRmlsZSBOYW1lXCIpO1xuICAgICAgICAgICAgICAgIHlpZWxkIGZpZ21hLmxvYWRGb250QXN5bmMobGFiZWwuZm9udE5hbWUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGl0bGUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSB0aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsLmNoYXJhY3RlcnMgPSBcIkVudGVyIHRpdGxlIGhlcmVcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGxldCBiYWRnZSA9IHRodW1ibmFpbC5maW5kT25lKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiQmFkZ2VcIiAmJiBub2RlLnR5cGUgPT0gXCJJTlNUQU5DRVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYmFkZ2VUZXh0ID0gYmFkZ2UuZmluZE9uZShub2RlID0+IG5vZGUubmFtZSA9PSBcIkJhZGdlXCIgJiYgbm9kZS50eXBlID09IFwiVEVYVFwiKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKGJhZGdlVGV4dC5mb250TmFtZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlVGV4dC5jaGFyYWN0ZXJzID0gdHlwZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PSBcIkV4cGxvcmF0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2UuZmlsbFN0eWxlSWQgPSAoeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFwiMGVlMWM0NzlkM2YyMWQ0NzUyMjdhNDUyMGNiNDgxYmQ5OGFmNWFmNVwiKSkuaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gXCJMaWJyYXJ5XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2UuZmlsbFN0eWxlSWQgPSAoeWllbGQgZmlnbWEuaW1wb3J0U3R5bGVCeUtleUFzeW5jKFwiYTNhYThjNjRkMTBhMGIxZWU5MmIzZGM2ZTVmMjc4YWM5NzhjNTZjZlwiKSkuaWQ7XG4gICAgICAgICAgICAgICAgICAgIGJhZGdlVGV4dC5maWxsU3R5bGVJZCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCI0OTJjOTY0NWQ2N2YwMjZkZDM3YzMwMWM2MTU3NzUwNGJkN2Q4YWQ3XCIpKS5pZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaWdtYS5zZXRGaWxlVGh1bWJuYWlsTm9kZUFzeW5jKHRodW1ibmFpbEZyYW1lKTtcbiAgICAgICAgfSkpO1xuICAgIH0pO1xufVxuLy8gQWRkcyBhIG5ldyBwYWdlLlxuZnVuY3Rpb24gY3JlYXRlUGFnZSh0aXRsZSkge1xuICAgIGxldCBwYWdlID0gZmlnbWEuY3JlYXRlUGFnZSgpO1xuICAgIHBhZ2UubmFtZSA9IHRpdGxlO1xufVxuLy8gQWRkcyBhIHNlY3Rpb24gdG8geW91ciBkZXRhaWxzIGZyYW1lLlxuZnVuY3Rpb24gY3JlYXRlRGV0YWlsKHRpdGxlLCBib2R5KSB7XG4gICAgbGV0IGRldGFpbEZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICBkZXRhaWxGcmFtZS5uYW1lID0gdGl0bGU7XG4gICAgZGV0YWlsRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICBkZXRhaWxGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICBkZXRhaWxGcmFtZS5sYXlvdXRBbGlnbiA9IFwiU1RSRVRDSFwiO1xuICAgIGRldGFpbEZyYW1lLml0ZW1TcGFjaW5nID0gODtcbiAgICBsZXQgdGl0bGVUZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgIHRpdGxlVGV4dC5mb250TmFtZSA9IEZPTlRfVElUTEVTO1xuICAgIHRpdGxlVGV4dC5mb250U2l6ZSA9IDE3O1xuICAgIHRpdGxlVGV4dC5jaGFyYWN0ZXJzID0gdGl0bGU7XG4gICAgdGl0bGVUZXh0LmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuYXBwZW5kQ2hpbGQodGl0bGVUZXh0KTtcbiAgICBsZXQgYm9keVRleHQgPSBmaWdtYS5jcmVhdGVUZXh0KCk7XG4gICAgYm9keVRleHQuZm9udE5hbWUgPSBGT05UX0JPRElFUztcbiAgICBib2R5VGV4dC5mb250U2l6ZSA9IDE0O1xuICAgIGJvZHlUZXh0LmNoYXJhY3RlcnMgPSBib2R5O1xuICAgIGJvZHlUZXh0LmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgZGV0YWlsRnJhbWUuYXBwZW5kQ2hpbGQoYm9keVRleHQpO1xuICAgIHJldHVybiBkZXRhaWxGcmFtZTtcbn1cbi8vIEFkZHMgYW4gZXhhbXBsZSB0byB5b3VyIGxpc3QgZnJhbWUuXG5mdW5jdGlvbiBjcmVhdGVQYWdlRXhhbXBsZSh0ZXh0KSB7XG4gICAgbGV0IGxpbmtMYWJlbCA9IGZpZ21hLmNyZWF0ZVRleHQoKTtcbiAgICBsaW5rTGFiZWwuZm9udE5hbWUgPSBGT05UX0JPRElFUztcbiAgICBsaW5rTGFiZWwuZm9udFNpemUgPSAxNDtcbiAgICBsaW5rTGFiZWwuY2hhcmFjdGVycyA9IHRleHQ7XG4gICAgcmV0dXJuIGxpbmtMYWJlbDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUhvd1RvKHRhcmdldHMpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgaG93UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW4uZmluZChub2RlID0+IG5vZGUubmFtZSA9PSBcIuKdkyBIb3cgdG8uLi5cIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gaG93UGFnZTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQ09OVEVOVFMsIFwiSG93IHRvLi4uXCIsIFwiXCIpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJVc2UgdGhpcyBsaWJyYXJ5XCIsIHRhcmdldHNbMF0pO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJDb250cmlidXRlXCIsIHRhcmdldHNbMV0pO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlVXNlKCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB1c2VQYWdlID0gZmlnbWEucm9vdC5jaGlsZHJlbi5maW5kKG5vZGUgPT4gbm9kZS5uYW1lID09IFwiICAgICAgICAg4oaqIFVzZSB0aGlzIGxpYnJhcnlcIik7XG4gICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlID0gdXNlUGFnZTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQ09OVEVOVFMsIFwiVXNpbmcgdGhpcyBsaWJyYXJ5XCIsIFwiXCIsIFwiMSkgQWRkIHNlY3Rpb25zIGhlcmVcXG5cXG5PcHRpb25hbGx5LCBhZGQgbW9yZSBzZWN0aW9ucyB0byBoZWxwIGRlc2NyaWJlIHRoZSB1c2FnZSBvZiB5b3VyIGxpYnJhcnkuXCIpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJQdXJwb3NlXCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJVc2luZyB0aGlzIGxpYnJhcnlcIiwgXCJQdXJwb3NlXCIsIFwiMikgRGVzY3JpYmUgdGhlIHB1cnBvc2VcXG5cXG5UaGlzIGxpYnJhcnkgd2FzIGNyZWF0ZWQgdG8gZmlsbCBhIG5lZWQuIERlc2NyaWJlIHRoYXQgbmVlZCBhbmQgbGV0IGRlc2lnbmVycyB3aGF0IGRvZXMgKGFuZCBkb2VzbuKAmXQpIGZpdCB3aXRoaW4gdGhpcyBsaWJyYXJ5LlxcblxcbllvdSBjYW4gYWxzbyBhZGQgYW4gaW1hZ2UgdG8gdGhlIHJpZ2h0IHRoYXQgcmVwcmVzZW50cyB5b3VyIGxpYnJhcnkuXCIsIFwiRS5nLiBUaGUgQ29udmVyc2F0aW9uIEtpdCBpcyBhIEZpZ21hIGxpYnJhcnkgLSBhbmQgc2V0IG9mIGFjY29tcGFueWluZyB0b29scyAtIHRoYXQgZ2l2ZSBkZXNpZ25lcnMgZXZlcnl0aGluZyB0aGV5IG5lZWQgdG8gZGVzaWduIGEgY29uc2lzdGVudCBjb252ZXJzYXRpb25hbCBleHBlcmllbmNlIGFjcm9zcyBhbnkgbnVtYmVyIG9mIHByb2R1Y3RzIGFuZCBwbGF0Zm9ybXMuXCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiUHJpbmNpcGxlc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0JMT0NLUywgXCJVc2luZyB0aGlzIGxpYnJhcnlcIiwgXCJQcmluY2lwbGVzXCIsIFwiMykgQWRkIHlvdXIgb3duIHByaW5jaXBsZXNcXG5cXG5QcmluY2lwbGVzIGtlZXAgZm91bmRhdGlvbmFsIGRlY2lzaW9ucyBjb25zaXN0ZW50LCBhbmQgc2V0IHByZWNlZGVudCBmb3IgaG93IGVhY2ggY29tcG9uZW50IGlzIHVzZWQgYW5kIGJ1aWx0LlwiKSk7XG4gICAgICAgIHlpZWxkIGFkZENvbnRlbnQoZnJhbWUxLCBcIkluc3RydWN0aW9uc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0lORk8sIFwiVXNpbmcgdGhpcyBsaWJyYXJ5XCIsIFwiSW5zdHJ1Y3Rpb25zXCIsIFwiNCkgQWRkIHN0ZXAtYnktc3RlcCBpbnN0cnVjdGlvbnNcXG5cXG5JbmNsdWRlIGluc3RydWN0aW9ucyBvZiB3aGVyZSB0aGUgYXNzZXRzIGNhbiBiZSBmb3VuZCwgaG93IHRoZXkgYXJlIG9yZ2FuaXplZCwgaG93IHZhcmlhbnRzIGFuZCBvdmVycmlkZXMgd29yaywgYW5kIGFueSBvdGhlciBkZXRhaWxzIG5lZWRlZCB0byB1c2UgdGhlIGxpYnJhcnkuXCIsIFwiMS4gRG8gdGhpc1xcbkRvIHRoYXRcXG5Qcm9maXRcIikpO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gZnJhbWUxO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlQ29udHJpYnV0ZSgpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBsZXQgY29udHJpYnV0ZVBhZ2UgPSBmaWdtYS5yb290LmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLm5hbWUgPT0gXCIgICAgICAgICDihqogQ29udHJpYnV0ZVwiKTtcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UgPSBjb250cmlidXRlUGFnZTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfQ09OVEVOVFMsIFwiQ29udHJpYnV0aW5nXCIsIFwiXCIsIFwiMSkgQWRkIHNlY3Rpb25zIGhlcmVcXG5cXG5PcHRpb25hbGx5LCBhZGQgbW9yZSBzZWN0aW9ucyB0byBoZWxwIGRlc2NyaWJlIGhvdyBvdGhlciBkZXNpZ25lcnMgY2FuIGFkZCB0byB0aGlzIGxpYnJhcnkuXCIpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJDb252ZW50aW9uc1wiLCB5aWVsZCBjcmVhdGVTbGlkZUZyYW1lKFRFTVBMQVRFX0JMT0NLUywgXCJDb250cmlidXRpbmdcIiwgXCJDb252ZW50aW9uc1wiLCBcIjIpIEFkZCB5b3VyIG93biBjb252ZW50aW9uc1xcblxcbldoYXQgY29udmVudGlvbnMgZG9lcyBhIGRlc2lnbmVyIG5lZWQgdG8gYmUgYXdhcmUgb2YgdG8gbWFrZSBjb21wb25lbnRzIHRoYXQgd29yayBpbiBhIHNpbWlsYXIgd2F5IHRvIGFsbCB0aGUgcmVzdD9cIikpO1xuICAgICAgICB5aWVsZCBhZGRDb250ZW50KGZyYW1lMSwgXCJJbnN0cnVjdGlvbnNcIiwgeWllbGQgY3JlYXRlU2xpZGVGcmFtZShURU1QTEFURV9JTkZPLCBcIkNvbnRyaWJ1dGluZ1wiLCBcIkluc3RydWN0aW9uc1wiLCBcIjMpIEFkZCBzdGVwLWJ5LXN0ZXAgaW5zdHJ1Y3Rpb25zXFxuXFxuSW5jbHVkZSBpbnN0cnVjdGlvbnMgb24gaG93IHRvIHN0YXJ0IGEgYnJhbmNoLCBvcmdhbml6ZSBwYWdlcywgYW5kIHJlcXVlc3QgcmV2aWV3LlwiLCBcIjEuIENyZWF0ZSBhIEJyYW5jaDogUHJlc3MgdGhlIGNoZXZyb24gbmV4dCB0byB0aGUgZmlsZSBuYW1lIGluIHRoZSB0b29sYmFyLCBhbmQgc2VsZWN0IENyZWF0ZSBicmFuY2guLi4uIEdpdmUgaXQgYSBuYW1lIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0IOKelTxDb21wb25lbnQgbmFtZT4uXFxuRHVwbGljYXRlIHRoZSDigJjwn5qnIENvbXBvbmVudCB0ZW1wbGF0ZeKAmSBwYWdlLCBhbmQgcmVuYW1lIGl0IGFjY29yZGluZyB0byB0aGUgcGFnZSBuYW1pbmcgY29udmVybnRpb25zLlxcblBlcmZvcm0geW91ciBleHBsb3JhdGlvbnMvd29yayBvbiB0aGlzIHBhZ2UuXFxuQ29tcGxldGUgdGhlIHByZS1wdWJsaXNoIGNoZWNrbGlzdC5cXG5SZXF1ZXN0IHJldmlldyBieSBzaGFyaW5nIHRoZSBicmFuY2ggd2l0aCA8dGVhbSBzbGFjayBjaGFubmVsIG9yIHBvaW50LW9mLWNvbnRhY3Q+XCIpKTtcbiAgICAgICAgeWllbGQgYWRkQ29udGVudChmcmFtZTEsIFwiQ2hlY2tsaXN0XCIsIHlpZWxkIGNyZWF0ZVNsaWRlRnJhbWUoVEVNUExBVEVfSU5GTywgXCJDb250cmlidXRpbmdcIiwgXCJDaGVja2xpc3RcIiwgXCI0KSBCdWlsZCBhIGNoZWNrbGlzdFxcblxcbldoYXQgY29uc2lkZXJhdGlvbnMgZG8geW91IGdvIHRocm91Z2ggYmVmb3JlIGRlY2lkaW5nIGlmIGEgY29tcG9uZW50IGlzIHJlYWR5IHRvIOKAnGdvIGxpdmXigJ0/IFRoZXNlIG1heSByZWZlciBiYWNrIHRvIHlvdXIgY29udmVudGlvbnMuXCIsIFwi4piR77iPICBEaWQgeW91IGRvIHRoaXM/XFxu4piR77iPICBEaWQgeW91IGRvIHRoYXQ/XFxu4piR77iPICBXaGF0IGFib3V0IHRoZSBvdGhlciB0aGluZz9cIikpO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5zY3JvbGxBbmRab29tSW50b1ZpZXcoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4pO1xuICAgICAgICByZXR1cm4gZnJhbWUxO1xuICAgIH0pO1xufVxuLy9UT0RPIEltcGxlbWVudCBhbiBpbnRlcmZhY2Ugc28gdGl0bGUgY2FuIGJlIG9tbWl0ZWQuXG5mdW5jdGlvbiBjcmVhdGVTbGlkZUZyYW1lKGlkLCBzdXBlcnRpdGxlVGV4dCwgdGl0bGVUZXh0LCBpbnN0cnVjdGlvblRleHQsIGNvbnRlbnRUZXh0KSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IHBhZ2VDb250ZW50cyA9IGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuO1xuICAgICAgICBsZXQgbGFzdEFkZGVkID0gcGFnZUNvbnRlbnRzW3BhZ2VDb250ZW50cy5sZW5ndGggLSAxXTtcbiAgICAgICAgbGV0IGZyYW1lMSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGZyYW1lMS5uYW1lID0gdGl0bGVUZXh0ID8gc3VwZXJ0aXRsZVRleHQuY29uY2F0KFwiL1wiLCB0aXRsZVRleHQpIDogc3VwZXJ0aXRsZVRleHQ7XG4gICAgICAgIGZyYW1lMS5yZXNpemUoMTkyMCwgMTA4MCk7XG4gICAgICAgIGZyYW1lMS55ID0gbGFzdEFkZGVkID8gbGFzdEFkZGVkLnkgKyAxMTgwIDogMDtcbiAgICAgICAgbGV0IGZvcm1hdCA9ICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKGlkKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgZnJhbWUxLmluc2VydENoaWxkKDAsIGZvcm1hdCk7XG4gICAgICAgIGxldCBzdXBlcnRpdGxlO1xuICAgICAgICBsZXQgdGl0bGU7XG4gICAgICAgIGxldCBjb250ZW50O1xuICAgICAgICBzd2l0Y2ggKGlkKSB7XG4gICAgICAgICAgICBjYXNlIFRFTVBMQVRFX0NPTlRFTlRTOlxuICAgICAgICAgICAgICAgIHN1cGVydGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUgPT0gXCJUYWJsZSBvZiBjb250ZW50c1wiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHN1cGVydGl0bGUsIHN1cGVydGl0bGVUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IHNlY3Rpb25zID0gZm9ybWF0LmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb25zXCIpO1xuICAgICAgICAgICAgICAgIHNlY3Rpb25zLmNoaWxkcmVuLmZvckVhY2gobm9kZSA9PiBub2RlLnZpc2libGUgPSBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFRFTVBMQVRFX0JMT0NLUzpcbiAgICAgICAgICAgICAgICBzdXBlcnRpdGxlID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiU3VwZXJ0aXRsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHN1cGVydGl0bGUsIHN1cGVydGl0bGVUZXh0LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUuY2hhcmFjdGVycyA9PSBcIldoYXQgZWxzZSBkb2VzIGl0IHNvbHZlP1wiKTtcbiAgICAgICAgICAgICAgICBpZiAodGl0bGUgJiYgdGl0bGVUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHlpZWxkIHNldFRleHQodGl0bGUsIHRpdGxlVGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBURU1QTEFURV9JTkZPOlxuICAgICAgICAgICAgICAgIHN1cGVydGl0bGUgPSBmb3JtYXQuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUgPT0gXCJIZWFkaW5nXCIgJiYgbm9kZS5jaGFyYWN0ZXJzID09IFwiU1VQRVJUSVRMRVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoc3VwZXJ0aXRsZSkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHN1cGVydGl0bGUsIHN1cGVydGl0bGVUZXh0LnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aXRsZSA9IGZvcm1hdC5maW5kT25lKG5vZGUgPT4gbm9kZS50eXBlID09IFwiVEVYVFwiICYmIG5vZGUuY2hhcmFjdGVycyA9PSBcIkhlYWRpbmdcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlICYmIHRpdGxlVGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KHRpdGxlLCB0aXRsZVRleHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250ZW50ID0gZm9ybWF0LmZpbmRPbmUobm9kZSA9PiBub2RlLnR5cGUgPT0gXCJURVhUXCIgJiYgbm9kZS5uYW1lID09IFwiQ29udGVudFwiKTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudCAmJiBjb250ZW50VGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB5aWVsZCBzZXRUZXh0KGNvbnRlbnQsIGNvbnRlbnRUZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UuaW5zZXJ0Q2hpbGQoZmlnbWEuY3VycmVudFBhZ2UuY2hpbGRyZW4ubGVuZ3RoLCBmcmFtZTEpO1xuICAgICAgICBpZiAoaW5zdHJ1Y3Rpb25UZXh0KSB7XG4gICAgICAgICAgICBsZXQgc3RpY2tpZSA9IHlpZWxkICh5aWVsZCBmaWdtYS5pbXBvcnRDb21wb25lbnRCeUtleUFzeW5jKFwiZDRkZjhiODg0ZGJlN2FjMTgyNjEyYjYxY2IyMDkxYjkyNDRiZGY2N1wiKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgICAgIHN0aWNraWUueSA9IGZyYW1lMS55O1xuICAgICAgICAgICAgc3RpY2tpZS54ID0gZnJhbWUxLnggLSA0MCAtIDI3MjtcbiAgICAgICAgICAgIGxldCBub3RlID0gc3RpY2tpZS5maW5kQ2hpbGQobm9kZSA9PiBub2RlLm5hbWUgPT09IFwiTm90ZVwiKTtcbiAgICAgICAgICAgIHlpZWxkIHNldFRleHQobm90ZSwgaW5zdHJ1Y3Rpb25UZXh0KTtcbiAgICAgICAgICAgIGZpZ21hLmN1cnJlbnRQYWdlLmluc2VydENoaWxkKGZpZ21hLmN1cnJlbnRQYWdlLmNoaWxkcmVuLmxlbmd0aCwgc3RpY2tpZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZyYW1lMTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGFkZENvbnRlbnQodGFibGVGcmFtZSwgdGl0bGUsIHRhcmdldCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IHRhYmxlRnJhbWUuY2hpbGRyZW5bMF07XG4gICAgICAgIGxldCBzZWN0aW9ucyA9IHRhYmxlLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb25zXCIpO1xuICAgICAgICBsZXQgc2VjdGlvbiA9IHNlY3Rpb25zLmNoaWxkcmVuLmZpbmQobm9kZSA9PiBub2RlLnZpc2libGUgPT0gZmFsc2UpO1xuICAgICAgICB5aWVsZCBzZXRUZXh0KHNlY3Rpb24sIHRpdGxlKTtcbiAgICAgICAgc2VjdGlvbi5oeXBlcmxpbmsgPSB7IHR5cGU6IFwiTk9ERVwiLCB2YWx1ZTogdGFyZ2V0LmlkIH07XG4gICAgICAgIHNlY3Rpb24udmlzaWJsZSA9IHRydWU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBzZXRUZXh0KG5vZGUsIHRleHQpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKG5vZGUuZm9udE5hbWUpO1xuICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSB0ZXh0O1xuICAgICAgICAvLyBDaGVjayBpZiBpdCBzaG91bGQgYmUgYW4gb3JkZXJlZCBvciB1bm9yZGVyZWQgbGlzdC5cbiAgICAgICAgaWYgKHRleHQuc3RhcnRzV2l0aChcIjEuIFwiKSkge1xuICAgICAgICAgICAgbm9kZS5jaGFyYWN0ZXJzID0gbm9kZS5jaGFyYWN0ZXJzLnN1YnN0cmluZygzKTtcbiAgICAgICAgICAgIG5vZGUuc2V0UmFuZ2VMaXN0T3B0aW9ucygwLCBub2RlLmNoYXJhY3RlcnMubGVuZ3RoLCB7IHR5cGU6IFwiT1JERVJFRFwiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRleHQuc3RhcnRzV2l0aChcIi0gXCIpKSB7XG4gICAgICAgICAgICBub2RlLmNoYXJhY3RlcnMgPSBub2RlLmNoYXJhY3RlcnMuc3Vic3RyaW5nKDMpO1xuICAgICAgICAgICAgbm9kZS5zZXRSYW5nZUxpc3RPcHRpb25zKDAsIG5vZGUuY2hhcmFjdGVycy5sZW5ndGgsIHsgdHlwZTogXCJVTk9SREVSRURcIiB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlVGhlbWUodGhlbWVOYW1lLCBwcmltYXJ5Q29sb3IsIG1lc3NhZ2VDb2xvciwgYWN0aW9uQ29sb3IpIHtcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZSA9IGZpZ21hLnJvb3QuY2hpbGRyZW5bMF07XG4gICAgICAgIC8vIFNldCBwYWdlIG5hbWVzIGFuZCByZW5hbWVzIHRoZSBkZWZhdWx0IFwiUGFnZSAxXCJcbiAgICAgICAgZmlnbWEuY3VycmVudFBhZ2UubmFtZSA9IFwiMDAgT3ZlcnZpZXdcIjtcbiAgICAgICAgY3JlYXRlUGFnZShcIjAxIENvbG9yc1wiKTtcbiAgICAgICAgY3JlYXRlUGFnZShcIjAyIEljb25zXCIpO1xuICAgICAgICBjcmVhdGVQYWdlKFwiMDMgSW1hZ2VzXCIpO1xuICAgICAgICAvL0FkZCBhIHRodW1uYWlsIHRvIHRoZSBmaXJzdCBwYWdlLlxuICAgICAgICB5aWVsZCBjcmVhdGVUaHVtYm5haWwodGhlbWVOYW1lLCBcIlRoZW1lXCIpLnRoZW4oKCkgPT4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy9UT0RPIHNldCB0aHVtYm5haWwgQkcgdG8gcHJpbWFyeSBjb2xvclxuICAgICAgICB9KSk7XG4gICAgICAgIExJR0hUX0NPTE9SU19DVVNUT01bMF0uZmlsbC5jb2xvciA9IGhleFRvUkdCKHByaW1hcnlDb2xvcik7XG4gICAgICAgIExJR0hUX0NPTE9SU19DVVNUT01bMV0uZmlsbC5jb2xvciA9IGhleFRvUkdCKG1lc3NhZ2VDb2xvcik7XG4gICAgICAgIExJR0hUX0NPTE9SU19DVVNUT01bMl0uZmlsbC5jb2xvciA9IGhleFRvUkdCKGFjdGlvbkNvbG9yKTtcbiAgICAgICAgREFSS19DT0xPUlNfQ1VTVE9NWzBdLmZpbGwuY29sb3IgPSBoZXhUb1JHQihwcmltYXJ5Q29sb3IpO1xuICAgICAgICBEQVJLX0NPTE9SU19DVVNUT01bMV0uZmlsbC5jb2xvciA9IGhleFRvUkdCKG1lc3NhZ2VDb2xvcik7XG4gICAgICAgIERBUktfQ09MT1JTX0NVU1RPTVsyXS5maWxsLmNvbG9yID0gaGV4VG9SR0IoYWN0aW9uQ29sb3IpO1xuICAgICAgICB5aWVsZCBjcmVhdGVNb2RlKFwibGlnaHRcIiwgdGhlbWVOYW1lLCBwcmltYXJ5Q29sb3IsIG1lc3NhZ2VDb2xvciwgYWN0aW9uQ29sb3IpO1xuICAgICAgICB5aWVsZCBjcmVhdGVNb2RlKFwiZGFya1wiLCB0aGVtZU5hbWUsIHByaW1hcnlDb2xvciwgbWVzc2FnZUNvbG9yLCBhY3Rpb25Db2xvcik7XG4gICAgICAgIGZpZ21hLnZpZXdwb3J0LnNjcm9sbEFuZFpvb21JbnRvVmlldyhmaWdtYS5jdXJyZW50UGFnZS5jaGlsZHJlbik7XG4gICAgICAgIGZpZ21hLmNsb3NlUGx1Z2luKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVNb2RlKG1vZGUsIHRoZW1lTmFtZSwgcHJpbWFyeUNvbG9yLCBtZXNzYWdlQ29sb3IsIGFjdGlvbkNvbG9yKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgbGV0IG1vZGVGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIG1vZGVGcmFtZS5uYW1lID0gKG1vZGUgPT0gXCJsaWdodFwiID8gXCLimIDvuI9cIiA6IFwi4pi9XCIpO1xuICAgICAgICBtb2RlRnJhbWUuZmlsbHMgPSBbXTtcbiAgICAgICAgbW9kZUZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBtb2RlRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIG1vZGVGcmFtZS5sYXlvdXRNb2RlID0gXCJWRVJUSUNBTFwiO1xuICAgICAgICBtb2RlRnJhbWUuaXRlbVNwYWNpbmcgPSA2NDtcbiAgICAgICAgaWYgKG1vZGUgPT0gXCJkYXJrXCIpXG4gICAgICAgICAgICBtb2RlRnJhbWUueCA9IDIwODA7XG4gICAgICAgIGxldCB0aXRsZUluc3RhbmNlID0gKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoQ09NUE9ORU5UX1RJVExFKSkuY3JlYXRlSW5zdGFuY2UoKTtcbiAgICAgICAgeWllbGQgc2V0VGV4dCh0aXRsZUluc3RhbmNlLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb24gbmFtZVwiKSwgbW9kZSA9PSBcImxpZ2h0XCIgPyBcIkxpZ2h0IG1vZGVcIiA6IFwiRGFyayBtb2RlXCIpO1xuICAgICAgICB0aXRsZUluc3RhbmNlLmxheW91dEFsaWduID0gXCJTVFJFVENIXCI7XG4gICAgICAgIG1vZGVGcmFtZS5hcHBlbmRDaGlsZCh0aXRsZUluc3RhbmNlKTtcbiAgICAgICAgbGV0IGNvbG9yc0ZyYW1lID0gZmlnbWEuY3JlYXRlRnJhbWUoKTtcbiAgICAgICAgY29sb3JzRnJhbWUubmFtZSA9IFwiQ29sb3JzXCI7XG4gICAgICAgIGNvbG9yc0ZyYW1lLmZpbGxzID0gKG1vZGUgPT0gXCJsaWdodFwiID8gW1dISVRFXSA6IFtCTEFDS10pO1xuICAgICAgICBjb2xvcnNGcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgY29sb3JzRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGNvbG9yc0ZyYW1lLmxheW91dE1vZGUgPSBcIkhPUklaT05UQUxcIjtcbiAgICAgICAgY29sb3JzRnJhbWUudmVydGljYWxQYWRkaW5nID0gMTIwO1xuICAgICAgICBjb2xvcnNGcmFtZS5ob3Jpem9udGFsUGFkZGluZyA9IDEyMDtcbiAgICAgICAgY29sb3JzRnJhbWUuaXRlbVNwYWNpbmcgPSAxMjA7XG4gICAgICAgIG1vZGVGcmFtZS5hcHBlbmRDaGlsZChjb2xvcnNGcmFtZSk7XG4gICAgICAgIGxldCBjdXN0b21pemFibGVGcmFtZSA9IGZpZ21hLmNyZWF0ZUZyYW1lKCk7XG4gICAgICAgIGN1c3RvbWl6YWJsZUZyYW1lLm5hbWUgPSBcIkZpeGVkXCI7XG4gICAgICAgIGN1c3RvbWl6YWJsZUZyYW1lLmZpbGxzID0gW107XG4gICAgICAgIGN1c3RvbWl6YWJsZUZyYW1lLnByaW1hcnlBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBjdXN0b21pemFibGVGcmFtZS5jb3VudGVyQXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgY3VzdG9taXphYmxlRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgY3VzdG9taXphYmxlRnJhbWUuaXRlbVNwYWNpbmcgPSA4MDtcbiAgICAgICAgbGV0IGJsb2NrSW5zdGFuY2UgPSAobW9kZSA9PSBcImxpZ2h0XCIgPyAoeWllbGQgZmlnbWEuaW1wb3J0Q29tcG9uZW50QnlLZXlBc3luYyhDT01QT05FTlRfQkxPQ0spKS5jcmVhdGVJbnN0YW5jZSgpIDogKHlpZWxkIGZpZ21hLmltcG9ydENvbXBvbmVudEJ5S2V5QXN5bmMoXCI1MmI0Nzk2YTY3OWNiMGU2MDZiYTg3OGY5NGQ2ZWY1YjcyNjAzMDI4XCIpKS5jcmVhdGVJbnN0YW5jZSgpKTtcbiAgICAgICAgeWllbGQgc2V0VGV4dChibG9ja0luc3RhbmNlLmZpbmRDaGlsZChub2RlID0+IG5vZGUubmFtZSA9PSBcIlNlY3Rpb24gbmFtZVwiKSwgXCJDdXN0b21pemFibGVcIik7XG4gICAgICAgIGJsb2NrSW5zdGFuY2UubGF5b3V0R3JvdyA9IDA7XG4gICAgICAgIGJsb2NrSW5zdGFuY2UuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJGSVhFRFwiO1xuICAgICAgICBibG9ja0luc3RhbmNlLnJlc2l6ZVdpdGhvdXRDb25zdHJhaW50cyg4MDAsIGJsb2NrSW5zdGFuY2UuaGVpZ2h0KTtcbiAgICAgICAgY3VzdG9taXphYmxlRnJhbWUuYXBwZW5kQ2hpbGQoYmxvY2tJbnN0YW5jZSk7XG4gICAgICAgIGxldCBmaXhlZEZyYW1lID0gY3VzdG9taXphYmxlRnJhbWUuY2xvbmUoKTtcbiAgICAgICAgY29sb3JzRnJhbWUuYXBwZW5kQ2hpbGQoY3VzdG9taXphYmxlRnJhbWUpO1xuICAgICAgICBmaXhlZEZyYW1lLm5hbWUgPSBcIkZpeGVkXCI7XG4gICAgICAgIGZpeGVkRnJhbWUucHJpbWFyeUF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGZpeGVkRnJhbWUuY291bnRlckF4aXNTaXppbmdNb2RlID0gXCJBVVRPXCI7XG4gICAgICAgIGZpeGVkRnJhbWUubGF5b3V0TW9kZSA9IFwiVkVSVElDQUxcIjtcbiAgICAgICAgZml4ZWRGcmFtZS5pdGVtU3BhY2luZyA9IDgwO1xuICAgICAgICB5aWVsZCBzZXRUZXh0KGZpeGVkRnJhbWUuZmluZE9uZShub2RlID0+IG5vZGUudHlwZSA9PSBcIlRFWFRcIiAmJiBub2RlLm5hbWUgPT0gXCJTZWN0aW9uIG5hbWVcIiksIFwiRml4ZWRcIik7XG4gICAgICAgIGNvbG9yc0ZyYW1lLmFwcGVuZENoaWxkKGZpeGVkRnJhbWUpO1xuICAgICAgICBpZiAobW9kZSA9PSBcImxpZ2h0XCIpIHtcbiAgICAgICAgICAgIExJR0hUX0NPTE9SU19DVVNUT00uZm9yRWFjaChjb2xvciA9PiBjcmVhdGVTdHlsZSh0aGVtZU5hbWUsIFwibGlnaHRcIiwgY29sb3IubmFtZSwgY29sb3IuZmlsbCwgY3VzdG9taXphYmxlRnJhbWUpKTtcbiAgICAgICAgICAgIExJR0hUX0NPTE9SU19HRU5FUkFURUQuZm9yRWFjaChjb2xvciA9PiBjcmVhdGVTdHlsZSh0aGVtZU5hbWUsIFwibGlnaHRcIiwgY29sb3IubmFtZSwgY29sb3IuZmlsbCwgZml4ZWRGcmFtZSkpO1xuICAgICAgICAgICAgdXBkYXRlR2VuZXJhdGVkQ29sb3JzKFwibGlnaHRcIik7XG4gICAgICAgICAgICBMSUdIVF9DT0xPUlNfRklYRUQuZm9yRWFjaChjb2xvciA9PiBjcmVhdGVTdHlsZSh0aGVtZU5hbWUsIFwibGlnaHRcIiwgY29sb3IubmFtZSwgY29sb3IuZmlsbCwgZml4ZWRGcmFtZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgREFSS19DT0xPUlNfQ1VTVE9NLmZvckVhY2goY29sb3IgPT4gY3JlYXRlU3R5bGUodGhlbWVOYW1lLCBcImRhcmtcIiwgY29sb3IubmFtZSwgY29sb3IuZmlsbCwgY3VzdG9taXphYmxlRnJhbWUpKTtcbiAgICAgICAgICAgIERBUktfQ09MT1JTX0dFTkVSQVRFRC5mb3JFYWNoKGNvbG9yID0+IGNyZWF0ZVN0eWxlKHRoZW1lTmFtZSwgXCJkYXJrXCIsIGNvbG9yLm5hbWUsIGNvbG9yLmZpbGwsIGZpeGVkRnJhbWUpKTtcbiAgICAgICAgICAgIHVwZGF0ZUdlbmVyYXRlZENvbG9ycyhcImRhcmtcIik7XG4gICAgICAgICAgICBEQVJLX0NPTE9SU19GSVhFRC5mb3JFYWNoKGNvbG9yID0+IGNyZWF0ZVN0eWxlKHRoZW1lTmFtZSwgXCJkYXJrXCIsIGNvbG9yLm5hbWUsIGNvbG9yLmZpbGwsIGZpeGVkRnJhbWUpKTtcbiAgICAgICAgfVxuICAgICAgICBmaWdtYS5yb290LmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKG1vZGVGcmFtZSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBjcmVhdGVTdHlsZSh0aGVtZU5hbWUsIG1vZGUsIGNvbG9yTmFtZSwgZmlsbCwgZXhhbXBsZVRhcmdldCkge1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgIGxldCBuZXdTdHlsZSA9IGZpZ21hLmNyZWF0ZVBhaW50U3R5bGUoKTtcbiAgICAgICAgbmV3U3R5bGUubmFtZSA9IHRoZW1lTmFtZSArIFwiKFwiICsgbW9kZSArIFwiKS9cIiArIGNvbG9yTmFtZTtcbiAgICAgICAgbmV3U3R5bGUuc2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiLCBjb2xvck5hbWUpO1xuICAgICAgICBuZXdTdHlsZS5zZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIsIG1vZGUpO1xuICAgICAgICBuZXdTdHlsZS5wYWludHMgPSBbZmlsbF07XG4gICAgICAgIGxldCBleGFtcGxlRnJhbWUgPSBmaWdtYS5jcmVhdGVGcmFtZSgpO1xuICAgICAgICBleGFtcGxlRnJhbWUubmFtZSA9IGNvbG9yTmFtZSArIFwiIGV4YW1wbGVcIjtcbiAgICAgICAgZXhhbXBsZUZyYW1lLmZpbGxzID0gW107XG4gICAgICAgIGV4YW1wbGVGcmFtZS5wcmltYXJ5QXhpc1NpemluZ01vZGUgPSBcIkFVVE9cIjtcbiAgICAgICAgZXhhbXBsZUZyYW1lLmNvdW50ZXJBeGlzU2l6aW5nTW9kZSA9IFwiQVVUT1wiO1xuICAgICAgICBleGFtcGxlRnJhbWUubGF5b3V0TW9kZSA9IFwiSE9SSVpPTlRBTFwiO1xuICAgICAgICBleGFtcGxlRnJhbWUuY291bnRlckF4aXNBbGlnbkl0ZW1zID0gXCJDRU5URVJcIjtcbiAgICAgICAgZXhhbXBsZUZyYW1lLnBhZGRpbmdMZWZ0ID0gNDA7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5pdGVtU3BhY2luZyA9IDMyO1xuICAgICAgICBsZXQgZXhhbXBsZVN3YXRjaCA9IGZpZ21hLmNyZWF0ZUVsbGlwc2UoKTtcbiAgICAgICAgZXhhbXBsZVN3YXRjaC5zZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIsIGNvbG9yTmFtZSk7XG4gICAgICAgIGV4YW1wbGVTd2F0Y2guZmlsbFN0eWxlSWQgPSBuZXdTdHlsZS5pZDtcbiAgICAgICAgbGV0IGV4YW1wbGVUZXh0ID0gZmlnbWEuY3JlYXRlVGV4dCgpO1xuICAgICAgICBleGFtcGxlVGV4dC5mb250TmFtZSA9IEZPTlRfVElUTEVTO1xuICAgICAgICBleGFtcGxlVGV4dC5mb250U2l6ZSA9IDQ4O1xuICAgICAgICBleGFtcGxlVGV4dC5jaGFyYWN0ZXJzID0gY29sb3JOYW1lO1xuICAgICAgICBleGFtcGxlVGV4dC5maWxsU3R5bGVJZCA9IChtb2RlID09IFwibGlnaHRcIiA/IExJR0hUX1RFWFRfQ09MT1JfU1RZTEUuaWQgOiBEQVJLX1RFWFRfQ09MT1JfU1RZTEUuaWQpO1xuICAgICAgICBleGFtcGxlRnJhbWUuYXBwZW5kQ2hpbGQoZXhhbXBsZVN3YXRjaCk7XG4gICAgICAgIGV4YW1wbGVGcmFtZS5hcHBlbmRDaGlsZChleGFtcGxlVGV4dCk7XG4gICAgICAgIGV4YW1wbGVUYXJnZXQuYXBwZW5kQ2hpbGQoZXhhbXBsZUZyYW1lKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZUdlbmVyYXRlZENvbG9ycyhtb2RlKSB7XG4gICAgbGV0IGN1cnJlbnRQcmltYXJ5Q29sb3IgPSBmaWdtYS5nZXRMb2NhbFBhaW50U3R5bGVzKCkuZmluZChzdHlsZSA9PiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JNb2RlXCIpID09IG1vZGUgJiYgc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTmFtZVwiKSA9PSBcInByaW1hcnlcIikucGFpbnRzWzBdLmNvbG9yO1xuICAgIGxldCBjdXJyZW50TWVzc2FnZUNvbG9yID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLmZpbmQoc3R5bGUgPT4gc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiKSA9PSBtb2RlICYmIHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIikgPT0gXCJtZXNzYWdlXCIpLnBhaW50c1swXS5jb2xvcjtcbiAgICBsZXQgY3VycmVudEFjdGlvbkNvbG9yID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLmZpbmQoc3R5bGUgPT4gc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiKSA9PSBtb2RlICYmIHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIikgPT0gXCJhY3Rpb25cIikucGFpbnRzWzBdLmNvbG9yO1xuICAgIGxldCBvblByaW1hcnlTdHlsZSA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwib25QcmltYXJ5XCIpO1xuICAgIGxldCBvblByaW1hcnlQYWludCA9IHtcbiAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgXCJjb2xvclwiOiBnZXRSZWFkYWJsZUNvbG9yKGN1cnJlbnRQcmltYXJ5Q29sb3IpXG4gICAgfTtcbiAgICBvblByaW1hcnlTdHlsZS5wYWludHMgPSBbb25QcmltYXJ5UGFpbnRdO1xuICAgIGxldCBvbk1lc3NhZ2VTdHlsZSA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwib25NZXNzYWdlXCIpO1xuICAgIGxldCBvbk1lc3NhZ2VQYWludCA9IHtcbiAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgXCJjb2xvclwiOiBnZXRSZWFkYWJsZUNvbG9yKGN1cnJlbnRNZXNzYWdlQ29sb3IpXG4gICAgfTtcbiAgICBvbk1lc3NhZ2VTdHlsZS5wYWludHMgPSBbb25NZXNzYWdlUGFpbnRdO1xuICAgIGxldCBvbkFjdGlvblN0eWxlID0gZmlnbWEuZ2V0TG9jYWxQYWludFN0eWxlcygpLmZpbmQoc3R5bGUgPT4gc3R5bGUuZ2V0UGx1Z2luRGF0YShcImNvbG9yTW9kZVwiKSA9PSBtb2RlICYmIHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck5hbWVcIikgPT0gXCJvbkFjdGlvblwiKTtcbiAgICBsZXQgb25BY3Rpb25QYWludCA9IHtcbiAgICAgICAgXCJ0eXBlXCI6IFNPTElELFxuICAgICAgICBcInZpc2libGVcIjogdHJ1ZSxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDEsXG4gICAgICAgIFwiYmxlbmRNb2RlXCI6IE5PUk1BTCxcbiAgICAgICAgXCJjb2xvclwiOiBnZXRSZWFkYWJsZUNvbG9yKGN1cnJlbnRBY3Rpb25Db2xvcilcbiAgICB9O1xuICAgIG9uQWN0aW9uU3R5bGUucGFpbnRzID0gW29uTWVzc2FnZVBhaW50XTtcbiAgICBsZXQgY3VycmVudEFjdGlvbkZvcmVncm91bmRTdHlsZSA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwiYWN0aW9uRm9yZWdyb3VuZFwiKTtcbiAgICBsZXQgY3VycmVudEFjdGlvbkJhY2tncm91bmRTdHlsZSA9IGZpZ21hLmdldExvY2FsUGFpbnRTdHlsZXMoKS5maW5kKHN0eWxlID0+IHN0eWxlLmdldFBsdWdpbkRhdGEoXCJjb2xvck1vZGVcIikgPT0gbW9kZSAmJiBzdHlsZS5nZXRQbHVnaW5EYXRhKFwiY29sb3JOYW1lXCIpID09IFwiYWN0aW9uQmFja2dyb3VuZFwiKTtcbn1cbmZ1bmN0aW9uIGxvYWRSZXNvdXJjZXMoKSB7XG4gICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgLy8gTmVlZCB0byBsb2FkIGEgZm9udCBoZXJlIHRvIGdlbmVyYXRlIHRoZSBvdGhlciBwYWdlIGV4YW1wbGVzLlxuICAgICAgICB5aWVsZCBmaWdtYS5sb2FkRm9udEFzeW5jKEZPTlRfVElUTEVTKTtcbiAgICAgICAgeWllbGQgZmlnbWEubG9hZEZvbnRBc3luYyhGT05UX0JPRElFUyk7XG4gICAgICAgIExJR0hUX1RFWFRfQ09MT1JfU1RZTEUgPSB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCJmMjA3MjMzODMzYWVhNjJlMmYwMTYzYmI0YjZjNmVkNjAyNDU5YmExXCIpO1xuICAgICAgICBEQVJLX1RFWFRfQ09MT1JfU1RZTEUgPSB5aWVsZCBmaWdtYS5pbXBvcnRTdHlsZUJ5S2V5QXN5bmMoXCI1NjM4ZTQzYzgyNjEzYzdmMTVjNjBlM2U4ZTk0OTZjMTc3NjNhZTQ5XCIpO1xuICAgIH0pO1xufVxuLy8gfn5+fn5+SGVscGVyIEZ1bmN0aW9uc35+fn5+fn5+fn5+IC8vXG5mdW5jdGlvbiBSR0JUb0hTTChyZ2IpIHtcbiAgICBsZXQgciA9IHJnYi5yO1xuICAgIGxldCBnID0gcmdiLmc7XG4gICAgbGV0IGIgPSByZ2IuYjtcbiAgICAvLyBGaW5kIGdyZWF0ZXN0IGFuZCBzbWFsbGVzdCBjaGFubmVsIHZhbHVlc1xuICAgIGxldCBjbWluID0gTWF0aC5taW4ociwgZywgYiksIGNtYXggPSBNYXRoLm1heChyLCBnLCBiKSwgZGVsdGEgPSBjbWF4IC0gY21pbiwgaCA9IDAsIHMgPSAwLCBsID0gMDtcbiAgICAvLyBDYWxjdWxhdGUgaHVlXG4gICAgLy8gTm8gZGlmZmVyZW5jZVxuICAgIGlmIChkZWx0YSA9PSAwKVxuICAgICAgICBoID0gMDtcbiAgICAvLyBSZWQgaXMgbWF4XG4gICAgZWxzZSBpZiAoY21heCA9PSByKVxuICAgICAgICBoID0gKChnIC0gYikgLyBkZWx0YSkgJSA2O1xuICAgIC8vIEdyZWVuIGlzIG1heFxuICAgIGVsc2UgaWYgKGNtYXggPT0gZylcbiAgICAgICAgaCA9IChiIC0gcikgLyBkZWx0YSArIDI7XG4gICAgLy8gQmx1ZSBpcyBtYXhcbiAgICBlbHNlXG4gICAgICAgIGggPSAociAtIGcpIC8gZGVsdGEgKyA0O1xuICAgIGggPSBNYXRoLnJvdW5kKGggKiA2MCk7XG4gICAgLy8gTWFrZSBuZWdhdGl2ZSBodWVzIHBvc2l0aXZlIGJlaGluZCAzNjDCsFxuICAgIGlmIChoIDwgMClcbiAgICAgICAgaCArPSAzNjA7XG4gICAgLy8gQ2FsY3VsYXRlIGxpZ2h0bmVzc1xuICAgIGwgPSAoY21heCArIGNtaW4pIC8gMjtcbiAgICAvLyBDYWxjdWxhdGUgc2F0dXJhdGlvblxuICAgIHMgPSBkZWx0YSA9PSAwID8gMCA6IGRlbHRhIC8gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKTtcbiAgICAvLyBNdWx0aXBseSBsIGFuZCBzIGJ5IDEwMFxuICAgIHMgPSArKHMgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgbCA9ICsobCAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICByZXR1cm4geyBodWU6IGgsIHNhdHVyYXRpb246IHMsIGxpZ2h0bmVzczogbCB9O1xufVxuZnVuY3Rpb24gSFNMVG9SR0IoaHNsKSB7XG4gICAgbGV0IGggPSBoc2wuaHVlO1xuICAgIGxldCBzID0gaHNsLnNhdHVyYXRpb247XG4gICAgbGV0IGwgPSBoc2wubGlnaHRuZXNzO1xuICAgIC8vIE11c3QgYmUgZnJhY3Rpb25zIG9mIDFcbiAgICBzIC89IDEwMDtcbiAgICBsIC89IDEwMDtcbiAgICBsZXQgYyA9ICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSkgKiBzLCB4ID0gYyAqICgxIC0gTWF0aC5hYnMoKGggLyA2MCkgJSAyIC0gMSkpLCBtID0gbCAtIGMgLyAyLCByID0gMCwgZyA9IDAsIGIgPSAwO1xuICAgIGlmICgwIDw9IGggJiYgaCA8IDYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBnID0geDtcbiAgICAgICAgYiA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKDYwIDw9IGggJiYgaCA8IDEyMCkge1xuICAgICAgICByID0geDtcbiAgICAgICAgZyA9IGM7XG4gICAgICAgIGIgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmICgxMjAgPD0gaCAmJiBoIDwgMTgwKSB7XG4gICAgICAgIHIgPSAwO1xuICAgICAgICBnID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfVxuICAgIGVsc2UgaWYgKDE4MCA8PSBoICYmIGggPCAyNDApIHtcbiAgICAgICAgciA9IDA7XG4gICAgICAgIGcgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9XG4gICAgZWxzZSBpZiAoMjQwIDw9IGggJiYgaCA8IDMwMCkge1xuICAgICAgICByID0geDtcbiAgICAgICAgZyA9IDA7XG4gICAgICAgIGIgPSBjO1xuICAgIH1cbiAgICBlbHNlIGlmICgzMDAgPD0gaCAmJiBoIDwgMzYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBnID0gMDtcbiAgICAgICAgYiA9IHg7XG4gICAgfVxuICAgIHIgPSByICsgbTtcbiAgICBnID0gZyArIG07XG4gICAgYiA9IGIgKyBtO1xuICAgIHJldHVybiB7IHI6IHIsIGc6IGcsIGI6IGIgfTtcbn1cbmZ1bmN0aW9uIGhleFRvUkdCKGhleCkge1xuICAgIGhleCA9IGhleC5yZXBsYWNlKC9eIy8sICcnKTtcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICBoZXggPSBoZXhbMF0gKyBoZXhbMF0gKyBoZXhbMV0gKyBoZXhbMV0gKyBoZXhbMl0gKyBoZXhbMl07XG4gICAgfVxuICAgIGNvbnN0IG51bWJlciA9IE51bWJlci5wYXJzZUludChoZXgsIDE2KTtcbiAgICBjb25zdCByZWQgPSBudW1iZXIgPj4gMTY7XG4gICAgY29uc3QgZ3JlZW4gPSAobnVtYmVyID4+IDgpICYgMjU1O1xuICAgIGNvbnN0IGJsdWUgPSBudW1iZXIgJiAyNTU7XG4gICAgcmV0dXJuIHsgcjogcmVkIC8gMjU2LCBnOiBncmVlbiAvIDI1NiwgYjogYmx1ZSAvIDI1NiB9O1xufVxuZnVuY3Rpb24gZ2V0UmVhZGFibGVDb2xvcihiYWNrZ3JvdW5kQ29sb3IpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgICBsZXQgYmFja2dyb3VuZEhleCA9IHJnYihNYXRoLnJvdW5kKGJhY2tncm91bmRDb2xvci5yICogMjU1KSwgTWF0aC5yb3VuZChiYWNrZ3JvdW5kQ29sb3IuZyAqIDI1NSksIE1hdGgucm91bmQoYmFja2dyb3VuZENvbG9yLmIgKiAyNTUpKTtcbiAgICBsZXQgZm9yZWdyb3VuZEhleCA9IHJlYWRhYmxlQ29sb3IoYmFja2dyb3VuZEhleCk7XG4gICAgbGV0IGZvcmVncm91bmRDb2xvciA9IGhleFRvUkdCKGZvcmVncm91bmRIZXgpO1xuICAgIHJldHVybiBmb3JlZ3JvdW5kQ29sb3I7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9