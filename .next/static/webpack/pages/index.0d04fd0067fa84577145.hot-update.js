webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ServiceSection/ServiceSection.styles.ts":
/*!****************************************************************!*\
  !*** ./src/components/ServiceSection/ServiceSection.styles.ts ***!
  \****************************************************************/
/*! exports provided: ServiceSectionContainer, AnimatedDiv, ServiceTitle, ServiceContainerCard, ServiceCardTitle, ServiceDescrption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceSectionContainer\", function() { return ServiceSectionContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimatedDiv\", function() { return AnimatedDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceTitle\", function() { return ServiceTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceContainerCard\", function() { return ServiceContainerCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceCardTitle\", function() { return ServiceCardTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceDescrption\", function() { return ServiceDescrption; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/tools/breakpoints.styles */ \"./src/styles/tools/breakpoints.styles.ts\");\n\n\nvar ServiceSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceSectionContainer\",\n  componentId: \"sc-1fkn6nf-0\"\n})([\"padding:\", \"px \", \"px;\", \"{padding:\", \"px \", \"px;}\", \"{padding:\", \"px \", \"px;}\"], function (props) {\n  return props.theme.global.gutterSpace * 4;\n}, function (props) {\n  return props.theme.global.gutterSpace * 8;\n}, _styles_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__[\"device\"].tablet, function (props) {\n  return props.theme.global.gutterSpace * 2;\n}, function (props) {\n  return props.theme.global.gutterSpace * 4;\n}, _styles_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__[\"device\"].mobile, function (props) {\n  return props.theme.global.gutterSpace;\n}, function (props) {\n  return props.theme.global.gutterSpace * 2;\n});\nvar AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"ServiceSectionstyles__AnimatedDiv\",\n  componentId: \"sc-1fkn6nf-1\"\n})([\"width:100%;height:100%;background-color:\", \";border-top-left-radius:150px;border-bottom-right-radius:150px;opacity:0;transition:opacity 500ms ease-in;\", \"\"], function (props) {\n  return props.theme.colors.black0;\n}, function (props) {\n  return props.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"opacity:1;\"]);\n});\nvar ServiceTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceTitle\",\n  componentId: \"sc-1fkn6nf-2\"\n})([\"display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:\", \"px;font-size:3rem;color:\", \";text-decoration:underline;\"], function (props) {\n  return props.theme.global.gutterSpace * 2;\n}, function (props) {\n  return props.theme.colors.black8;\n});\nvar ServiceContainerCard = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceContainerCard\",\n  componentId: \"sc-1fkn6nf-3\"\n})([\"display:flex;flex-direction:column;align-items:center;margin-bottom:\", \"px;\", \"{margin:\", \"px 0;padding:0 \", \"px;}\"], function (props) {\n  return props.theme.global.gutterSpace * 2;\n}, _styles_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__[\"device\"].desktop, function (props) {\n  return props.theme.global.gutterSpace;\n}, function (props) {\n  return props.theme.global.gutterSpace;\n});\nvar ServiceCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceCardTitle\",\n  componentId: \"sc-1fkn6nf-4\"\n})([\"font-size:2rem;color:\", \";margin:\", \"px 0;text-align:center;\"], function (props) {\n  return props.theme.colors.black8;\n}, function (props) {\n  return props.theme.global.gutterSpace;\n});\nvar ServiceDescrption = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceDescrption\",\n  componentId: \"sc-1fkn6nf-5\"\n})([\"font-size:1.6rem;color:\", \";\"], function (props) {\n  return props.theme.colors.black6;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VydmljZVNlY3Rpb24vU2VydmljZVNlY3Rpb24uc3R5bGVzLnRzPzkxYzciXSwibmFtZXMiOlsiU2VydmljZVNlY3Rpb25Db250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImdsb2JhbCIsImd1dHRlclNwYWNlIiwiZGV2aWNlIiwidGFibGV0IiwibW9iaWxlIiwiQW5pbWF0ZWREaXYiLCJkaXYiLCJjb2xvcnMiLCJibGFjazAiLCJzaG93IiwiY3NzIiwiU2VydmljZVRpdGxlIiwiaDEiLCJibGFjazgiLCJTZXJ2aWNlQ29udGFpbmVyQ2FyZCIsImRlc2t0b3AiLCJTZXJ2aWNlQ2FyZFRpdGxlIiwiaDIiLCJTZXJ2aWNlRGVzY3JwdGlvbiIsInAiLCJibGFjazYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSx1QkFBdUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSx1RkFDdkIsVUFBQ0MsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxXQUFuQixHQUFpQyxDQUE1QztBQUFBLENBRHVCLEVBQzRCLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsV0FBbkIsR0FBaUMsQ0FBNUM7QUFBQSxDQUQ1QixFQUdoQ0MsdUVBQU0sQ0FBQ0MsTUFIeUIsRUFJckIsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxXQUFuQixHQUFpQyxDQUE1QztBQUFBLENBSnFCLEVBSThCLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsV0FBbkIsR0FBaUMsQ0FBNUM7QUFBQSxDQUo5QixFQU9oQ0MsdUVBQU0sQ0FBQ0UsTUFQeUIsRUFRckIsVUFBQ04sS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxXQUE5QjtBQUFBLENBUnFCLEVBUTBCLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsV0FBbkIsR0FBaUMsQ0FBNUM7QUFBQSxDQVIxQixDQUE3QjtBQVlBLElBQU1JLFdBQVcsR0FBR1QseURBQU0sQ0FBQ1UsR0FBVjtBQUFBO0FBQUE7QUFBQSxtS0FHRixVQUFDUixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlRLE1BQVosQ0FBbUJDLE1BQTlCO0FBQUEsQ0FIRSxFQVNwQixVQUFDVixLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDVyxJQUFOLElBQ0FDLDZEQURBLGdCQURBO0FBQUEsQ0FUb0IsQ0FBakI7QUFnQkEsSUFBTUMsWUFBWSxHQUFHZix5REFBTSxDQUFDZ0IsRUFBVjtBQUFBO0FBQUE7QUFBQSxvSkFLTixVQUFDZCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLFdBQW5CLEdBQWlDLENBQTVDO0FBQUEsQ0FMTSxFQU9kLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWVEsTUFBWixDQUFtQk0sTUFBOUI7QUFBQSxDQVBjLENBQWxCO0FBV0EsSUFBTUMsb0JBQW9CLEdBQUdsQix5REFBTSxDQUFDVSxHQUFWO0FBQUE7QUFBQTtBQUFBLDJIQUlkLFVBQUNSLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsV0FBbkIsR0FBaUMsQ0FBNUM7QUFBQSxDQUpjLEVBTTdCQyx1RUFBTSxDQUFDYSxPQU5zQixFQU9uQixVQUFDakIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxXQUE5QjtBQUFBLENBUG1CLEVBUWhCLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsV0FBOUI7QUFBQSxDQVJnQixDQUExQjtBQVlBLElBQU1lLGdCQUFnQixHQUFHcEIseURBQU0sQ0FBQ3FCLEVBQVY7QUFBQTtBQUFBO0FBQUEscUVBRWxCLFVBQUNuQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlRLE1BQVosQ0FBbUJNLE1BQTlCO0FBQUEsQ0FGa0IsRUFHakIsVUFBQ2YsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CQyxXQUE5QjtBQUFBLENBSGlCLENBQXRCO0FBT0EsSUFBTWlCLGlCQUFpQixHQUFHdEIseURBQU0sQ0FBQ3VCLENBQVY7QUFBQTtBQUFBO0FBQUEscUNBRW5CLFVBQUNyQixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlRLE1BQVosQ0FBbUJhLE1BQTlCO0FBQUEsQ0FGbUIsQ0FBdkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlU2VjdGlvbi9TZXJ2aWNlU2VjdGlvbi5zdHlsZXMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGRldmljZSB9IGZyb20gJ0BzdHlsZXMvdG9vbHMvYnJlYWtwb2ludHMuc3R5bGVzJztcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5nbG9iYWwuZ3V0dGVyU3BhY2UgKiA0fXB4ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5nbG9iYWwuZ3V0dGVyU3BhY2UgKiA4fXB4O1xuXG4gICR7ZGV2aWNlLnRhYmxldH0ge1xuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5nbG9iYWwuZ3V0dGVyU3BhY2UgKiAyfXB4ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5nbG9iYWwuZ3V0dGVyU3BhY2UgKiA0fXB4O1xuICB9XG5cbiAgJHtkZXZpY2UubW9iaWxlfSB7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZX1weCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlICogMn1weDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEFuaW1hdGVkRGl2ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFjazB9O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1MHB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGVhc2UtaW47XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuc2hvdyAmJlxuICAgIGNzc2BcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZSAqIDJ9cHg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2s4fTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VydmljZUNvbnRhaW5lckNhcmQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlICogMn1weDtcblxuICAke2RldmljZS5kZXNrdG9wfSB7XG4gICAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlfXB4IDA7XG4gICAgcGFkZGluZzogMCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlfXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgU2VydmljZUNhcmRUaXRsZSA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFjazh9O1xuICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5nbG9iYWwuZ3V0dGVyU3BhY2V9cHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuYDtcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VEZXNjcnB0aW9uID0gc3R5bGVkLnBgXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFjazZ9O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ServiceSection/ServiceSection.styles.ts\n");

/***/ })

})