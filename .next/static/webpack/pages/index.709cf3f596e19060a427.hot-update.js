webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ButtonContact/ButtonContact.tsx":
/*!********************************************************!*\
  !*** ./src/components/ButtonContact/ButtonContact.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ButtonContact_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ButtonContact.styles */ \"./src/components/ButtonContact/ButtonContact.styles.ts\");\nvar _this = undefined,\n    _jsxFileName = \"/home/eliezer/Projects/nextjs/emanuel/src/components/ButtonContact/ButtonContact.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar customStyles = {\n  content: {\n    top: '50%',\n    left: '50%',\n    right: 'auto',\n    bottom: 'auto',\n    marginRight: '-50%',\n    transform: 'translate(-50%, -50%)'\n  }\n};\n\nvar ButtonContact = function ButtonContact() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      modalIsOpen = _useState[0],\n      setModalIsOpen = _useState[1];\n\n  var handleModal = function handleModal() {\n    return setModalIsOpen(!modalIsOpen);\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_ButtonContact_styles__WEBPACK_IMPORTED_MODULE_2__[\"ButtonContactStyled\"], {\n    isWeb: true,\n    onClick: handleModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"Entre em contato\"), __jsx(_ButtonContact_styles__WEBPACK_IMPORTED_MODULE_2__[\"ButtonContactStyled\"], {\n    isMobile: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Entre em contato\"), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    isOpen: modalIsOpen,\n    onRequestClose: handleModal,\n    style: customStyles,\n    contentLabel: \"Example Modal\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, \"Entre em contato em\"), __jsx(\"h5\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Voc\\xEA ser\\xE1 respondido o mais breve poss\\xEDvel\"), __jsx(\"button\", {\n    type: \"button\",\n    onClick: handleModal,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, \"Fechar\")));\n};\n\n_s(ButtonContact, \"d4gKB9FOjUoqrytIak5jiPIqzB0=\");\n\n_c = ButtonContact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ButtonContact);\n\nvar _c;\n\n$RefreshReg$(_c, \"ButtonContact\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uQ29udGFjdC9CdXR0b25Db250YWN0LnRzeD81ZDgyIl0sIm5hbWVzIjpbImN1c3RvbVN0eWxlcyIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwicmlnaHQiLCJib3R0b20iLCJtYXJnaW5SaWdodCIsInRyYW5zZm9ybSIsIkJ1dHRvbkNvbnRhY3QiLCJ1c2VTdGF0ZSIsIm1vZGFsSXNPcGVuIiwic2V0TW9kYWxJc09wZW4iLCJoYW5kbGVNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRTtBQUNQQyxPQUFHLEVBQUUsS0FERTtBQUVQQyxRQUFJLEVBQUUsS0FGQztBQUdQQyxTQUFLLEVBQUUsTUFIQTtBQUlQQyxVQUFNLEVBQUUsTUFKRDtBQUtQQyxlQUFXLEVBQUUsTUFMTjtBQU1QQyxhQUFTLEVBQUU7QUFOSjtBQURVLENBQXJCOztBQVdBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNZQyxzREFBUSxDQUFDLEtBQUQsQ0FEcEI7QUFBQSxNQUNuQkMsV0FEbUI7QUFBQSxNQUNOQyxjQURNOztBQUcxQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFdBQU1ELGNBQWMsQ0FBQyxDQUFDRCxXQUFGLENBQXBCO0FBQUEsR0FBcEI7O0FBRUEsU0FDRSxtRUFDRSxNQUFDLHlFQUFEO0FBQXFCLFNBQUssTUFBMUI7QUFBMkIsV0FBTyxFQUFFRSxXQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLEVBSUUsTUFBQyx5RUFBRDtBQUFxQixZQUFRLE1BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkYsRUFNRSxNQUFDLGtEQUFEO0FBQU8sVUFBTSxFQUFFRixXQUFmO0FBQTRCLGtCQUFjLEVBQUVFLFdBQTVDO0FBQXlELFNBQUssRUFBRVosWUFBaEU7QUFBOEUsZ0JBQVksRUFBQyxlQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkRBRkYsRUFHRTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQXNCLFdBQU8sRUFBRVksV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGLENBTkYsQ0FERjtBQWdCRCxDQXJCRDs7R0FBTUosYTs7S0FBQUEsYTtBQXVCU0EsNEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b25Db250YWN0L0J1dHRvbkNvbnRhY3QudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LW1vZGFsJztcbmltcG9ydCB7IEJ1dHRvbkNvbnRhY3RTdHlsZWQgfSBmcm9tICcuL0J1dHRvbkNvbnRhY3Quc3R5bGVzJztcblxuY29uc3QgY3VzdG9tU3R5bGVzID0ge1xuICBjb250ZW50OiB7XG4gICAgdG9wOiAnNTAlJyxcbiAgICBsZWZ0OiAnNTAlJyxcbiAgICByaWdodDogJ2F1dG8nLFxuICAgIGJvdHRvbTogJ2F1dG8nLFxuICAgIG1hcmdpblJpZ2h0OiAnLTUwJScsXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgfSxcbn07XG5cbmNvbnN0IEJ1dHRvbkNvbnRhY3QgPSAoKSA9PiB7XG4gIGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGhhbmRsZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxJc09wZW4oIW1vZGFsSXNPcGVuKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uQ29udGFjdFN0eWxlZCBpc1dlYiBvbkNsaWNrPXtoYW5kbGVNb2RhbH0+XG4gICAgICAgIEVudHJlIGVtIGNvbnRhdG9cbiAgICAgIDwvQnV0dG9uQ29udGFjdFN0eWxlZD5cbiAgICAgIDxCdXR0b25Db250YWN0U3R5bGVkIGlzTW9iaWxlPkVudHJlIGVtIGNvbnRhdG88L0J1dHRvbkNvbnRhY3RTdHlsZWQ+XG5cbiAgICAgIDxNb2RhbCBpc09wZW49e21vZGFsSXNPcGVufSBvblJlcXVlc3RDbG9zZT17aGFuZGxlTW9kYWx9IHN0eWxlPXtjdXN0b21TdHlsZXN9IGNvbnRlbnRMYWJlbD1cIkV4YW1wbGUgTW9kYWxcIj5cbiAgICAgICAgPGgyPkVudHJlIGVtIGNvbnRhdG8gZW08L2gyPlxuICAgICAgICA8aDU+Vm9jw6ogc2Vyw6EgcmVzcG9uZGlkbyBvIG1haXMgYnJldmUgcG9zc8OtdmVsPC9oNT5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTW9kYWx9PlxuICAgICAgICAgIEZlY2hhclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvTW9kYWw+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25Db250YWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ButtonContact/ButtonContact.tsx\n");

/***/ })

})