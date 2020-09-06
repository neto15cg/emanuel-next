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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/_error.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_AmpContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/AmpContext */ \"./src/utils/AmpContext.tsx\");\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/amp */ \"next/amp\");\n/* harmony import */ var next_amp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_amp__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @components/layout/Layout */ \"./src/components/layout/Layout.tsx\");\nvar _jsxFileName = \"/home/eliezer/Projects/nextjs/emanuel/pages/_error.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction Error({\n  statusCode\n}) {\n  const isAmp = Object(next_amp__WEBPACK_IMPORTED_MODULE_3__[\"useAmp\"])();\n  return __jsx(_utils_AmpContext__WEBPACK_IMPORTED_MODULE_2__[\"AmpProvider\"], {\n    isAmp: isAmp,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Erro \", statusCode), __jsx(\"meta\", {\n    charSet: \"utf-8\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(\"meta\", {\n    name: \"Description\",\n    content: \"\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })), __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }\n  }, \"Erro \", statusCode)));\n}\n\nError.getInitialProps = ({\n  res,\n  err\n}) => {\n  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n  return {\n    statusCode\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fZXJyb3IudHN4PzBmOGYiXSwibmFtZXMiOlsiRXJyb3IiLCJzdGF0dXNDb2RlIiwiaXNBbXAiLCJ1c2VBbXAiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJlcnIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxLQUFULENBQWU7QUFBRUM7QUFBRixDQUFmLEVBQW9DO0FBQ2xDLFFBQU1DLEtBQUssR0FBR0MsdURBQU0sRUFBcEI7QUFDQSxTQUNFLE1BQUMsNkRBQUQ7QUFBYSxTQUFLLEVBQUVELEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQWFELFVBQWIsQ0FERixFQUVFO0FBQU0sV0FBTyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLEVBQUMsRUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFNRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQVlBLFVBQVosQ0FERixDQU5GLENBREY7QUFZRDs7QUFFREQsS0FBSyxDQUFDSSxlQUFOLEdBQXdCLENBQUM7QUFBRUMsS0FBRjtBQUFPQztBQUFQLENBQUQsS0FBa0I7QUFDeEMsUUFBTUwsVUFBVSxHQUFHSSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0osVUFBUCxHQUFvQkssR0FBRyxHQUFHQSxHQUFHLENBQUNMLFVBQVAsR0FBb0IsR0FBakU7QUFDQSxTQUFPO0FBQUVBO0FBQUYsR0FBUDtBQUNELENBSEQ7O0FBS2VELG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2Vycm9yLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHsgQW1wUHJvdmlkZXIgfSBmcm9tICdAdXRpbHMvQW1wQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VBbXAgfSBmcm9tICduZXh0L2FtcCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL2xheW91dC9MYXlvdXQnO1xuXG5mdW5jdGlvbiBFcnJvcih7IHN0YXR1c0NvZGUgfTogYW55KSB7XG4gIGNvbnN0IGlzQW1wID0gdXNlQW1wKCk7XG4gIHJldHVybiAoXG4gICAgPEFtcFByb3ZpZGVyIGlzQW1wPXtpc0FtcH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVycm8ge3N0YXR1c0NvZGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cIkRlc2NyaXB0aW9uXCIgY29udGVudD1cIlwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8bWFpbj5FcnJvIHtzdGF0dXNDb2RlfTwvbWFpbj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvQW1wUHJvdmlkZXI+XG4gICk7XG59XG5cbkVycm9yLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcywgZXJyIH0pID0+IHtcbiAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlcyA/IHJlcy5zdGF0dXNDb2RlIDogZXJyID8gZXJyLnN0YXR1c0NvZGUgOiA0MDQ7XG4gIHJldHVybiB7IHN0YXR1c0NvZGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_error.tsx\n");

/***/ }),

/***/ "./src/components/layout/Layout.tsx":
/*!******************************************!*\
  !*** ./src/components/layout/Layout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/global.styles */ \"./src/styles/global.styles.ts\");\nvar _jsxFileName = \"/home/eliezer/Projects/nextjs/emanuel/src/components/layout/Layout.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Layout = props => {\n  const {\n    children\n  } = props;\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children, __jsx(_styles_global_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeD85NjQxIl0sIm5hbWVzIjpbIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBR0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQXdCO0FBQ3JDLFFBQU07QUFBRUM7QUFBRixNQUFlRCxLQUFyQjtBQUNBLFNBQ0UsbUVBQ0dDLFFBREgsRUFFRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGO0FBTUQsQ0FSRDs7QUFVZUYscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXRQcm9wcyB9IGZyb20gJy4vTGF5b3V0LnR5cGVzJztcblxuaW1wb3J0IEdsb2JhbFN0eWxlIGZyb20gJy4uLy4uL3N0eWxlcy9nbG9iYWwuc3R5bGVzJztcblxuY29uc3QgTGF5b3V0ID0gKHByb3BzOiBMYXlvdXRQcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NoaWxkcmVufVxuICAgICAgPEdsb2JhbFN0eWxlIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout/Layout.tsx\n");

/***/ }),

/***/ "./src/styles/generic/boxSizing.styles.ts":
/*!************************************************!*\
  !*** ./src/styles/generic/boxSizing.styles.ts ***!
  \************************************************/
/*! exports provided: genericBoxSizing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genericBoxSizing\", function() { return genericBoxSizing; });\nconst genericBoxSizing = () => `\n  html {\n    box-sizing: border-box;\n  }\n\n  * {\n    &,\n    &:before,\n    &:after {\n      box-sizing: inherit;\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyaWMvYm94U2l6aW5nLnN0eWxlcy50cz9iOWU5Il0sIm5hbWVzIjpbImdlbmVyaWNCb3hTaXppbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxnQkFBZ0IsR0FBRyxNQUFPOzs7Ozs7Ozs7Ozs7Q0FBaEMiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dlbmVyaWMvYm94U2l6aW5nLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZW5lcmljQm94U2l6aW5nID0gKCkgPT4gYFxuICBodG1sIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgKiB7XG4gICAgJixcbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/generic/boxSizing.styles.ts\n");

/***/ }),

/***/ "./src/styles/generic/reset.styles.ts":
/*!********************************************!*\
  !*** ./src/styles/generic/reset.styles.ts ***!
  \********************************************/
/*! exports provided: genericReset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genericReset\", function() { return genericReset; });\nconst genericReset = () => `\n  body,\n  h1, h2, h3, h4, h5, h6,\n  blockquote, p, pre,\n  dl, dd, ol, ul,\n  figure,\n  hr,\n  fieldset, legend {\n    margin: 0;\n    padding: 0;\n  }\n\n  li > {\n    ol,\n    ul {\n      margin-bottom: 0;\n    }\n  }\n\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  fieldset {\n    min-width: 0;\n    border: 0;\n  }\n\n  button {\n    cursor: pointer;\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyaWMvcmVzZXQuc3R5bGVzLnRzP2JkYWYiXSwibmFtZXMiOlsiZ2VuZXJpY1Jlc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsWUFBWSxHQUFHLE1BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQTVCIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy9nZW5lcmljL3Jlc2V0LnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZW5lcmljUmVzZXQgPSAoKSA9PiBgXG4gIGJvZHksXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXG4gIGJsb2NrcXVvdGUsIHAsIHByZSxcbiAgZGwsIGRkLCBvbCwgdWwsXG4gIGZpZ3VyZSxcbiAgaHIsXG4gIGZpZWxkc2V0LCBsZWdlbmQge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG5cbiAgbGkgPiB7XG4gICAgb2wsXG4gICAgdWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cblxuICB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbiAgfVxuXG4gIGZpZWxkc2V0IHtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgYm9yZGVyOiAwO1xuICB9XG5cbiAgYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/generic/reset.styles.ts\n");

/***/ }),

/***/ "./src/styles/generic/shared.styles.ts":
/*!*********************************************!*\
  !*** ./src/styles/generic/shared.styles.ts ***!
  \*********************************************/
/*! exports provided: genericShared */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genericShared\", function() { return genericShared; });\n/* harmony import */ var _styles_theme_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/theme/theme */ \"./src/styles/theme/theme.ts\");\n/* harmony import */ var _tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/breakpoints.styles */ \"./src/styles/tools/breakpoints.styles.ts\");\n\n\nconst genericShared = () => `\n  address,\n  h1, h2, h3, h4, h5, h6,\n  blockquote, p, pre,\n  dl, ol, ul,\n  figure,\n  hr,\n  table,\n  fieldset {\n    margin-bottom: 0;\n  }\n\n  dd, ol, ul {\n    margin-left: 1rem;\n  }\n\n  html { font-size: 62.5%; }\n\n  body {\n    font-family: ${_styles_theme_theme__WEBPACK_IMPORTED_MODULE_0__[\"theme\"].global.defaultFont};\n    font-size: 1.6rem;\n    font-weight: normal;\n    background-color: ${_styles_theme_theme__WEBPACK_IMPORTED_MODULE_0__[\"theme\"].colors.white};\n  }\n\n  amp-img {\n    display: inline-block;\n    align-self: flex-start;\n\n    img {\n        object-fit: contain;\n    }\n  }\n\n  .container {\n    margin: 0 auto;\n    width: 100%;\n    max-width: ${_styles_theme_theme__WEBPACK_IMPORTED_MODULE_0__[\"theme\"].breakpoints[2]};\n\n    ${_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__[\"device\"].mobile} {\n      padding-left: 1rem;\n      padding-right: 1rem;\n    }\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyaWMvc2hhcmVkLnN0eWxlcy50cz8wOWVmIl0sIm5hbWVzIjpbImdlbmVyaWNTaGFyZWQiLCJ0aGVtZSIsImdsb2JhbCIsImRlZmF1bHRGb250IiwiY29sb3JzIiwid2hpdGUiLCJicmVha3BvaW50cyIsImRldmljZSIsIm1vYmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sTUFBTUEsYUFBYSxHQUFHLE1BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBbUJqQkMseURBQUssQ0FBQ0MsTUFBTixDQUFhQyxXQUFZOzs7d0JBR3BCRix5REFBSyxDQUFDRyxNQUFOLENBQWFDLEtBQU07Ozs7Ozs7Ozs7Ozs7OztpQkFlMUJKLHlEQUFLLENBQUNLLFdBQU4sQ0FBa0IsQ0FBbEIsQ0FBcUI7O01BRWhDQyxnRUFBTSxDQUFDQyxNQUFPOzs7OztDQXZDYiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2VuZXJpYy9zaGFyZWQuc3R5bGVzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGhlbWUgfSBmcm9tICdAc3R5bGVzL3RoZW1lL3RoZW1lJztcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJy4uL3Rvb2xzL2JyZWFrcG9pbnRzLnN0eWxlcyc7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmljU2hhcmVkID0gKCkgPT4gYFxuICBhZGRyZXNzLFxuICBoMSwgaDIsIGgzLCBoNCwgaDUsIGg2LFxuICBibG9ja3F1b3RlLCBwLCBwcmUsXG4gIGRsLCBvbCwgdWwsXG4gIGZpZ3VyZSxcbiAgaHIsXG4gIHRhYmxlLFxuICBmaWVsZHNldCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxuXG4gIGRkLCBvbCwgdWwge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG5cbiAgaHRtbCB7IGZvbnQtc2l6ZTogNjIuNSU7IH1cblxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJHt0aGVtZS5nbG9iYWwuZGVmYXVsdEZvbnR9O1xuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZS5jb2xvcnMud2hpdGV9O1xuICB9XG5cbiAgYW1wLWltZyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG5cbiAgICBpbWcge1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIH1cbiAgfVxuXG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogJHt0aGVtZS5icmVha3BvaW50c1syXX07XG5cbiAgICAke2RldmljZS5tb2JpbGV9IHtcbiAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgfVxuICB9XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/generic/shared.styles.ts\n");

/***/ }),

/***/ "./src/styles/generic/typography.syles.ts":
/*!************************************************!*\
  !*** ./src/styles/generic/typography.syles.ts ***!
  \************************************************/
/*! exports provided: genericTyphography */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"genericTyphography\", function() { return genericTyphography; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst genericTyphography = () => Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"@font-face{font-family:'Noto';font-style:normal;font-weight:400;font-display:swap;src:url(/static/assets/fonts/Noto/Noto-Regular.woff2) format('woff2'),url(/static/assets/fonts/Noto/Noto-Regular.woff);}@font-face{font-family:'Noto';font-style:semi-bold;font-weight:600;font-display:swap;src:url(/static/assets/fonts/Noto/Noto-ExtraBold.woff2) format('woff2'),url(/static/assets/fonts/Noto/Noto-ExtraBold.woff);}@font-face{font-family:'Noto';font-style:extra-bold;font-weight:800;font-display:swap;src:url(/static/assets/fonts/Noto/Noto-ExtraBold.woff2) format('woff2'),url(/static/assets/fonts/Noto/Noto-ExtraBold.woff);}\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dlbmVyaWMvdHlwb2dyYXBoeS5zeWxlcy50cz9mMmM5Il0sIm5hbWVzIjpbImdlbmVyaWNUeXBob2dyYXBoeSIsImNzcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1BLGtCQUFrQixHQUFHLE1BQU1DLDZEQUFOLG1uQkFBM0IiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL2dlbmVyaWMvdHlwb2dyYXBoeS5zeWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IGdlbmVyaWNUeXBob2dyYXBoeSA9ICgpID0+IGNzc2BcbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdOb3RvJztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgc3JjOiB1cmwoL3N0YXRpYy9hc3NldHMvZm9udHMvTm90by9Ob3RvLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKC9zdGF0aWMvYXNzZXRzL2ZvbnRzL05vdG8vTm90by1SZWd1bGFyLndvZmYpO1xuICB9XG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTm90byc7XG4gICAgZm9udC1zdHlsZTogc2VtaS1ib2xkO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9zdGF0aWMvYXNzZXRzL2ZvbnRzL05vdG8vTm90by1FeHRyYUJvbGQud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKC9zdGF0aWMvYXNzZXRzL2ZvbnRzL05vdG8vTm90by1FeHRyYUJvbGQud29mZik7XG4gIH1cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdOb3RvJztcbiAgICBmb250LXN0eWxlOiBleHRyYS1ib2xkO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIHNyYzogdXJsKC9zdGF0aWMvYXNzZXRzL2ZvbnRzL05vdG8vTm90by1FeHRyYUJvbGQud29mZjIpIGZvcm1hdCgnd29mZjInKSwgdXJsKC9zdGF0aWMvYXNzZXRzL2ZvbnRzL05vdG8vTm90by1FeHRyYUJvbGQud29mZik7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/generic/typography.syles.ts\n");

/***/ }),

/***/ "./src/styles/global.styles.ts":
/*!*************************************!*\
  !*** ./src/styles/global.styles.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _generic_boxSizing_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generic/boxSizing.styles */ \"./src/styles/generic/boxSizing.styles.ts\");\n/* harmony import */ var _generic_typography_syles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic/typography.syles */ \"./src/styles/generic/typography.syles.ts\");\n/* harmony import */ var _generic_reset_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic/reset.styles */ \"./src/styles/generic/reset.styles.ts\");\n/* harmony import */ var _generic_shared_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic/shared.styles */ \"./src/styles/generic/shared.styles.ts\");\n/* harmony import */ var _trumps_utilities_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trumps/utilities.styles */ \"./src/styles/trumps/utilities.styles.ts\");\n\n\n\n\n\n\nconst GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"])(_generic_reset_styles__WEBPACK_IMPORTED_MODULE_3__[\"genericReset\"], _generic_boxSizing_styles__WEBPACK_IMPORTED_MODULE_1__[\"genericBoxSizing\"], _generic_typography_syles__WEBPACK_IMPORTED_MODULE_2__[\"genericTyphography\"], _generic_shared_styles__WEBPACK_IMPORTED_MODULE_4__[\"genericShared\"], _trumps_utilities_styles__WEBPACK_IMPORTED_MODULE_5__[\"trumpsUtilities\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2dsb2JhbC5zdHlsZXMudHM/N2EyNCJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiZ2VuZXJpY1Jlc2V0IiwiZ2VuZXJpY0JveFNpemluZyIsImdlbmVyaWNUeXBob2dyYXBoeSIsImdlbmVyaWNTaGFyZWQiLCJ0cnVtcHNVdGlsaXRpZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLDJFQUFpQixDQUFDQyxrRUFBRCxFQUFlQywwRUFBZixFQUFpQ0MsNEVBQWpDLEVBQXFEQyxvRUFBckQsRUFBb0VDLHdFQUFwRSxDQUFyQztBQUVlTiwwRUFBZiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQgeyBnZW5lcmljQm94U2l6aW5nIH0gZnJvbSAnLi9nZW5lcmljL2JveFNpemluZy5zdHlsZXMnO1xuaW1wb3J0IHsgZ2VuZXJpY1R5cGhvZ3JhcGh5IH0gZnJvbSAnLi9nZW5lcmljL3R5cG9ncmFwaHkuc3lsZXMnO1xuaW1wb3J0IHsgZ2VuZXJpY1Jlc2V0IH0gZnJvbSAnLi9nZW5lcmljL3Jlc2V0LnN0eWxlcyc7XG5pbXBvcnQgeyBnZW5lcmljU2hhcmVkIH0gZnJvbSAnLi9nZW5lcmljL3NoYXJlZC5zdHlsZXMnO1xuaW1wb3J0IHsgdHJ1bXBzVXRpbGl0aWVzIH0gZnJvbSAnLi90cnVtcHMvdXRpbGl0aWVzLnN0eWxlcyc7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGUoZ2VuZXJpY1Jlc2V0LCBnZW5lcmljQm94U2l6aW5nLCBnZW5lcmljVHlwaG9ncmFwaHksIGdlbmVyaWNTaGFyZWQsIHRydW1wc1V0aWxpdGllcyk7XG5cbmV4cG9ydCBkZWZhdWx0IEdsb2JhbFN0eWxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/global.styles.ts\n");

/***/ }),

/***/ "./src/styles/theme/colors.ts":
/*!************************************!*\
  !*** ./src/styles/theme/colors.ts ***!
  \************************************/
/*! exports provided: Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colors\", function() { return Colors; });\nlet Colors;\n\n(function (Colors) {\n  Colors[\"black\"] = \"#000000\";\n  Colors[\"black8\"] = \"#5B514E\";\n  Colors[\"black7\"] = \"#706764\";\n  Colors[\"black6\"] = \"#847D7A\";\n  Colors[\"black5\"] = \"#989290\";\n  Colors[\"black4\"] = \"#ADA8A7\";\n  Colors[\"black3\"] = \"#C1BEBD\";\n  Colors[\"black2\"] = \"##D6D4D3\";\n  Colors[\"black1\"] = \"#EAE9E9\";\n  Colors[\"black0\"] = \"#F7F7F7\";\n  Colors[\"white\"] = \"#ffffff\";\n  Colors[\"green\"] = \"#46b946\";\n})(Colors || (Colors = {}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lL2NvbG9ycy50cz9mMjdjIl0sIm5hbWVzIjpbIkNvbG9ycyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLElBQUtBLE1BQVo7O1dBQVlBLE07QUFBQUEsUTtBQUFBQSxRO0FBQUFBLFE7QUFBQUEsUTtBQUFBQSxRO0FBQUFBLFE7QUFBQUEsUTtBQUFBQSxRO0FBQUFBLFE7QUFBQUEsUTtBQUFBQSxRO0FBQUFBLFE7R0FBQUEsTSxLQUFBQSxNIiwiZmlsZSI6Ii4vc3JjL3N0eWxlcy90aGVtZS9jb2xvcnMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBDb2xvcnMge1xuICBibGFjayA9ICcjMDAwMDAwJyxcbiAgYmxhY2s4ID0gJyM1QjUxNEUnLFxuICBibGFjazcgPSAnIzcwNjc2NCcsXG4gIGJsYWNrNiA9ICcjODQ3RDdBJyxcbiAgYmxhY2s1ID0gJyM5ODkyOTAnLFxuICBibGFjazQgPSAnI0FEQThBNycsXG4gIGJsYWNrMyA9ICcjQzFCRUJEJyxcbiAgYmxhY2syID0gJyMjRDZENEQzJyxcbiAgYmxhY2sxID0gJyNFQUU5RTknLFxuICBibGFjazAgPSAnI0Y3RjdGNycsXG4gIHdoaXRlID0gJyNmZmZmZmYnLFxuICBncmVlbiA9ICcjNDZiOTQ2Jyxcbn1cblxuZXhwb3J0IHR5cGUgQ29sb3JzVGhlbWUgPSB0eXBlb2YgQ29sb3JzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme/colors.ts\n");

/***/ }),

/***/ "./src/styles/theme/fonts.theme.ts":
/*!*****************************************!*\
  !*** ./src/styles/theme/fonts.theme.ts ***!
  \*****************************************/
/*! exports provided: fontRoboto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fontRoboto\", function() { return fontRoboto; });\nconst fontRoboto = 'Noto, Roboto';//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lL2ZvbnRzLnRoZW1lLnRzPzM3ODEiXSwibmFtZXMiOlsiZm9udFJvYm90byJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLFVBQVUsR0FBRyxjQUFuQiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWUvZm9udHMudGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZm9udFJvYm90byA9ICdOb3RvLCBSb2JvdG8nO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme/fonts.theme.ts\n");

/***/ }),

/***/ "./src/styles/theme/theme.ts":
/*!***********************************!*\
  !*** ./src/styles/theme/theme.ts ***!
  \***********************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"theme\", function() { return theme; });\n/* harmony import */ var _styles_theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/theme/colors */ \"./src/styles/theme/colors.ts\");\n/* harmony import */ var _fonts_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fonts.theme */ \"./src/styles/theme/fonts.theme.ts\");\n\n\nconst theme = {\n  colors: _styles_theme_colors__WEBPACK_IMPORTED_MODULE_0__[\"Colors\"],\n  space: [0, 10, 20, 40, 60, 80, 100],\n  fontSizes: ['1rem', '1.2rem', '1.4rem', '1.6rem', '2rem', '2.4rem', '3rem'],\n  breakpoints: ['768px', '1024px', '1200px'],\n  global: {\n    defaultFont: _fonts_theme__WEBPACK_IMPORTED_MODULE_1__[\"fontRoboto\"],\n    secondaryFont: _fonts_theme__WEBPACK_IMPORTED_MODULE_1__[\"fontRoboto\"],\n    gutterSpace: 20\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RoZW1lL3RoZW1lLnRzP2YyNDUiXSwibmFtZXMiOlsidGhlbWUiLCJjb2xvcnMiLCJDb2xvcnMiLCJzcGFjZSIsImZvbnRTaXplcyIsImJyZWFrcG9pbnRzIiwiZ2xvYmFsIiwiZGVmYXVsdEZvbnQiLCJmb250Um9ib3RvIiwic2Vjb25kYXJ5Rm9udCIsImd1dHRlclNwYWNlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFTyxNQUFNQSxLQUFZLEdBQUc7QUFDMUJDLFFBQU0sRUFBRUMsMkRBRGtCO0FBRTFCQyxPQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWSxFQUFaLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEdBQXhCLENBRm1CO0FBRzFCQyxXQUFTLEVBQUUsQ0FBQyxNQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQixFQUE2QixRQUE3QixFQUF1QyxNQUF2QyxFQUErQyxRQUEvQyxFQUF5RCxNQUF6RCxDQUhlO0FBSTFCQyxhQUFXLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixRQUFwQixDQUphO0FBSzFCQyxRQUFNLEVBQUU7QUFDTkMsZUFBVyxFQUFFQyx1REFEUDtBQUVOQyxpQkFBYSxFQUFFRCx1REFGVDtBQUdORSxlQUFXLEVBQUU7QUFIUDtBQUxrQixDQUFyQiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdGhlbWUvdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvcnMgfSBmcm9tICdAc3R5bGVzL3RoZW1lL2NvbG9ycyc7XG5pbXBvcnQgeyBUaGVtZSB9IGZyb20gJy4vdGhlbWUudHlwZXMnO1xuXG5pbXBvcnQgeyBmb250Um9ib3RvIH0gZnJvbSAnLi9mb250cy50aGVtZSc7XG5cbmV4cG9ydCBjb25zdCB0aGVtZTogVGhlbWUgPSB7XG4gIGNvbG9yczogQ29sb3JzLFxuICBzcGFjZTogWzAsIDEwLCAyMCwgNDAsIDYwLCA4MCwgMTAwXSxcbiAgZm9udFNpemVzOiBbJzFyZW0nLCAnMS4ycmVtJywgJzEuNHJlbScsICcxLjZyZW0nLCAnMnJlbScsICcyLjRyZW0nLCAnM3JlbSddLFxuICBicmVha3BvaW50czogWyc3NjhweCcsICcxMDI0cHgnLCAnMTIwMHB4J10sXG4gIGdsb2JhbDoge1xuICAgIGRlZmF1bHRGb250OiBmb250Um9ib3RvLFxuICAgIHNlY29uZGFyeUZvbnQ6IGZvbnRSb2JvdG8sXG4gICAgZ3V0dGVyU3BhY2U6IDIwLFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/theme/theme.ts\n");

/***/ }),

/***/ "./src/styles/tools/breakpoints.styles.ts":
/*!************************************************!*\
  !*** ./src/styles/tools/breakpoints.styles.ts ***!
  \************************************************/
/*! exports provided: device */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"device\", function() { return device; });\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polished */ \"polished\");\n/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_theme_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/theme/theme */ \"./src/styles/theme/theme.ts\");\n\n\nconst {\n  breakpoints\n} = _styles_theme_theme__WEBPACK_IMPORTED_MODULE_1__[\"theme\"];\nconst device = {\n  mobile: `@media screen and (max-width: ${Object(polished__WEBPACK_IMPORTED_MODULE_0__[\"math\"])(`${breakpoints[0]} - 1px`)})`,\n  tablet: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,\n  desktop: `@media screen and (min-width: ${Object(polished__WEBPACK_IMPORTED_MODULE_0__[\"math\"])(`${breakpoints[1]} + 1px`)})`\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3Rvb2xzL2JyZWFrcG9pbnRzLnN0eWxlcy50cz9jMzI1Il0sIm5hbWVzIjpbImJyZWFrcG9pbnRzIiwidGhlbWUiLCJkZXZpY2UiLCJtb2JpbGUiLCJtYXRoIiwidGFibGV0IiwiZGVza3RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBO0FBQUYsSUFBa0JDLHlEQUF4QjtBQUVPLE1BQU1DLE1BQU0sR0FBRztBQUNwQkMsUUFBTSxFQUFHLGlDQUFnQ0MscURBQUksQ0FBRSxHQUFFSixXQUFXLENBQUMsQ0FBRCxDQUFJLFFBQW5CLENBQTRCLEdBRHJEO0FBRXBCSyxRQUFNLEVBQUcsaUNBQWdDTCxXQUFXLENBQUMsQ0FBRCxDQUFJLHFCQUFvQkEsV0FBVyxDQUFDLENBQUQsQ0FBSSxHQUZ2RTtBQUdwQk0sU0FBTyxFQUFHLGlDQUFnQ0YscURBQUksQ0FBRSxHQUFFSixXQUFXLENBQUMsQ0FBRCxDQUFJLFFBQW5CLENBQTRCO0FBSHRELENBQWYiLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3Rvb2xzL2JyZWFrcG9pbnRzLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1hdGggfSBmcm9tICdwb2xpc2hlZCc7XG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BzdHlsZXMvdGhlbWUvdGhlbWUnO1xuXG5jb25zdCB7IGJyZWFrcG9pbnRzIH0gPSB0aGVtZTtcblxuZXhwb3J0IGNvbnN0IGRldmljZSA9IHtcbiAgbW9iaWxlOiBgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHttYXRoKGAke2JyZWFrcG9pbnRzWzBdfSAtIDFweGApfSlgLFxuICB0YWJsZXQ6IGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke2JyZWFrcG9pbnRzWzBdfSkgYW5kIChtYXgtd2lkdGg6ICR7YnJlYWtwb2ludHNbMV19KWAsXG4gIGRlc2t0b3A6IGBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAke21hdGgoYCR7YnJlYWtwb2ludHNbMV19ICsgMXB4YCl9KWAsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/tools/breakpoints.styles.ts\n");

/***/ }),

/***/ "./src/styles/trumps/utilities.styles.ts":
/*!***********************************************!*\
  !*** ./src/styles/trumps/utilities.styles.ts ***!
  \***********************************************/
/*! exports provided: trumpsUtilities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"trumpsUtilities\", function() { return trumpsUtilities; });\n/* harmony import */ var _styles_theme_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/theme/theme */ \"./src/styles/theme/theme.ts\");\n\nconst trumpsUtilities = () => `\n  .centered-content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n\n    &__full {\n      flex: 1;\n    }\n  }\n\n  .default-font {\n    font-family: ${_styles_theme_theme__WEBPACK_IMPORTED_MODULE_0__[\"theme\"].global.defaultFont};\n  }\n\n  .secondary-font {\n    font-family: ${_styles_theme_theme__WEBPACK_IMPORTED_MODULE_0__[\"theme\"].global.secondaryFont};\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RydW1wcy91dGlsaXRpZXMuc3R5bGVzLnRzPzJmM2MiXSwibmFtZXMiOlsidHJ1bXBzVXRpbGl0aWVzIiwidGhlbWUiLCJnbG9iYWwiLCJkZWZhdWx0Rm9udCIsInNlY29uZGFyeUZvbnQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTUEsZUFBZSxHQUFHLE1BQU87Ozs7Ozs7Ozs7Ozs7bUJBYW5CQyx5REFBSyxDQUFDQyxNQUFOLENBQWFDLFdBQVk7Ozs7bUJBSXpCRix5REFBSyxDQUFDQyxNQUFOLENBQWFFLGFBQWM7O0NBakJ2QyIsImZpbGUiOiIuL3NyYy9zdHlsZXMvdHJ1bXBzL3V0aWxpdGllcy5zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aGVtZSB9IGZyb20gJ0BzdHlsZXMvdGhlbWUvdGhlbWUnO1xuXG5leHBvcnQgY29uc3QgdHJ1bXBzVXRpbGl0aWVzID0gKCkgPT4gYFxuICAuY2VudGVyZWQtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fZnVsbCB7XG4gICAgICBmbGV4OiAxO1xuICAgIH1cbiAgfVxuXG4gIC5kZWZhdWx0LWZvbnQge1xuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmdsb2JhbC5kZWZhdWx0Rm9udH07XG4gIH1cblxuICAuc2Vjb25kYXJ5LWZvbnQge1xuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lLmdsb2JhbC5zZWNvbmRhcnlGb250fTtcbiAgfVxuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/trumps/utilities.styles.ts\n");

/***/ }),

/***/ "./src/utils/AmpContext.tsx":
/*!**********************************!*\
  !*** ./src/utils/AmpContext.tsx ***!
  \**********************************/
/*! exports provided: default, AmpProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AmpProvider\", function() { return AmpProvider; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/eliezer/Projects/nextjs/emanuel/src/utils/AmpContext.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nconst AmpContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])(false);\n/* harmony default export */ __webpack_exports__[\"default\"] = (AmpContext);\nconst AmpProvider = ({\n  children,\n  isAmp\n}) => __jsx(AmpContext.Provider, {\n  value: isAmp,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 58\n  }\n}, children);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQW1wQ29udGV4dC50c3g/NTc0ZCJdLCJuYW1lcyI6WyJBbXBDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkFtcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJpc0FtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLDJEQUFhLENBQUMsS0FBRCxDQUFoQztBQUVlRCx5RUFBZjtBQUVPLE1BQU1FLFdBQVcsR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUM7QUFBWixDQUFELEtBQThCLE1BQUMsVUFBRCxDQUFZLFFBQVo7QUFBcUIsT0FBSyxFQUFFQSxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQW9DRCxRQUFwQyxDQUFsRCIsImZpbGUiOiIuL3NyYy91dGlscy9BbXBDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBBbXBDb250ZXh0ID0gY3JlYXRlQ29udGV4dChmYWxzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFtcENvbnRleHQ7XG5cbmV4cG9ydCBjb25zdCBBbXBQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBpc0FtcCB9OiBhbnkpID0+IDxBbXBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtpc0FtcH0+e2NoaWxkcmVufTwvQW1wQ29udGV4dC5Qcm92aWRlcj47XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/AmpContext.tsx\n");

/***/ }),

/***/ "next/amp":
/*!***************************!*\
  !*** external "next/amp" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/amp\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2FtcFwiPzMyYWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9hbXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2FtcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/amp\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"polished\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb2xpc2hlZFwiP2QyZWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicG9saXNoZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///polished\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });