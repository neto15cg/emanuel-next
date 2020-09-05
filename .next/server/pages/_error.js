module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("D4/9");


/***/ }),

/***/ "8hY/":
/***/ (function(module, exports) {

module.exports = require("next/amp");

/***/ }),

/***/ "8kUl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ theme; });

// CONCATENATED MODULE: ./src/styles/theme/colors.ts
let Colors;

(function (Colors) {
  Colors["black"] = "#000000";
  Colors["black8"] = "#5B514E";
  Colors["black7"] = "#706764";
  Colors["black6"] = "#847D7A";
  Colors["black5"] = "#989290";
  Colors["black4"] = "#ADA8A7";
  Colors["black3"] = "#C1BEBD";
  Colors["black2"] = "##D6D4D3";
  Colors["black1"] = "#EAE9E9";
  Colors["black0"] = "#F7F7F7";
  Colors["white"] = "#ffffff";
})(Colors || (Colors = {}));
// CONCATENATED MODULE: ./src/styles/theme/fonts.theme.ts
const fontRoboto = 'Noto, Roboto';
// CONCATENATED MODULE: ./src/styles/theme/theme.ts


const theme = {
  colors: Colors,
  space: [0, 10, 20, 40, 60, 80, 100],
  fontSizes: ['1rem', '1.2rem', '1.4rem', '1.6rem', '2rem', '2.4rem', '3rem'],
  breakpoints: ['768px', '1024px', '1200px'],
  global: {
    defaultFont: fontRoboto,
    secondaryFont: fontRoboto,
    gutterSpace: 20
  }
};

/***/ }),

/***/ "D4/9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_AmpContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("V00Y");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8hY/");
/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lkFK");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Error({
  statusCode
}) {
  const isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_3__["useAmp"])();
  return __jsx(_utils_AmpContext__WEBPACK_IMPORTED_MODULE_2__[/* AmpProvider */ "a"], {
    isAmp: isAmp
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Erro ", statusCode), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "Description",
    content: ""
  })), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null, __jsx("main", null, "Erro ", statusCode)));
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "V00Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmpProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const AmpContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(false);
/* unused harmony default export */ var _unused_webpack_default_export = (AmpContext);
const AmpProvider = ({
  children,
  isAmp
}) => __jsx(AmpContext.Provider, {
  value: isAmp
}, children);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "hKtz":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "lkFK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// CONCATENATED MODULE: ./src/styles/generic/boxSizing.styles.ts
const genericBoxSizing = () => `
  html {
    box-sizing: border-box;
  }

  * {
    &,
    &:before,
    &:after {
      box-sizing: inherit;
    }
  }
`;
// CONCATENATED MODULE: ./src/styles/generic/typography.syles.ts

const genericTyphography = () => Object(external_styled_components_["css"])(["@font-face{font-family:'Noto';font-style:normal;font-weight:400;font-display:swap;src:url(/static/assets/fonts/Noto/Noto-Regular.woff2) format('woff2'),url(/static/assets/fonts/Noto/Noto-Regular.woff);}@font-face{font-family:'Noto';font-style:semi-bold;font-weight:600;font-display:swap;src:url(/static/assets/fonts/Noto/Noto-ExtraBold.woff2) format('woff2'),url(/static/assets/fonts/Noto/Noto-ExtraBold.woff);}@font-face{font-family:'Noto';font-style:extra-bold;font-weight:800;font-display:swap;src:url(/static/assets/fonts/Noto/Noto-ExtraBold.woff2) format('woff2'),url(/static/assets/fonts/Noto/Noto-ExtraBold.woff);}"]);
// CONCATENATED MODULE: ./src/styles/generic/reset.styles.ts
const genericReset = () => `
  body,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, dd, ol, ul,
  figure,
  hr,
  fieldset, legend {
    margin: 0;
    padding: 0;
  }

  li > {
    ol,
    ul {
      margin-bottom: 0;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  fieldset {
    min-width: 0;
    border: 0;
  }

  button {
    cursor: pointer;
  }
`;
// EXTERNAL MODULE: ./src/styles/theme/theme.ts + 2 modules
var theme = __webpack_require__("8kUl");

// EXTERNAL MODULE: ./src/styles/tools/breakpoints.styles.ts
var breakpoints_styles = __webpack_require__("wyXW");

// CONCATENATED MODULE: ./src/styles/generic/shared.styles.ts


const genericShared = () => `
  address,
  h1, h2, h3, h4, h5, h6,
  blockquote, p, pre,
  dl, ol, ul,
  figure,
  hr,
  table,
  fieldset {
    margin-bottom: 0;
  }

  dd, ol, ul {
    margin-left: 1rem;
  }

  html { font-size: 62.5%; }

  body {
    font-family: ${theme["a" /* theme */].global.defaultFont};
    font-size: 1.6rem;
    font-weight: normal;
    background-color: ${theme["a" /* theme */].colors.white};
  }

  amp-img {
    display: inline-block;
    align-self: flex-start;

    img {
        object-fit: contain;
    }
  }

  .container {
    margin: 0 auto;
    width: 100%;
    max-width: ${theme["a" /* theme */].breakpoints[2]};

    ${breakpoints_styles["a" /* device */].mobile} {
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;
// CONCATENATED MODULE: ./src/styles/trumps/utilities.styles.ts

const trumpsUtilities = () => `
  .centered-content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    &__full {
      flex: 1;
    }
  }

  .default-font {
    font-family: ${theme["a" /* theme */].global.defaultFont};
  }

  .secondary-font {
    font-family: ${theme["a" /* theme */].global.secondaryFont};
  }
`;
// CONCATENATED MODULE: ./src/styles/global.styles.ts






const GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(genericReset, genericBoxSizing, genericTyphography, genericShared, trumpsUtilities);
/* harmony default export */ var global_styles = (GlobalStyle);
// CONCATENATED MODULE: ./src/components/layout/Layout.tsx
var __jsx = external_react_default.a.createElement;



const Layout = props => {
  const {
    children
  } = props;
  return __jsx(external_react_default.a.Fragment, null, children, __jsx(global_styles, null));
};

/* harmony default export */ var layout_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "wyXW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return device; });
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hKtz");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("8kUl");


const {
  breakpoints
} = _styles_theme_theme__WEBPACK_IMPORTED_MODULE_1__[/* theme */ "a"];
const device = {
  mobile: `@media screen and (max-width: ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["math"])(`${breakpoints[0]} - 1px`)})`,
  tablet: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
  desktop: `@media screen and (min-width: ${Object(polished__WEBPACK_IMPORTED_MODULE_0__["math"])(`${breakpoints[1]} + 1px`)})`
};

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });