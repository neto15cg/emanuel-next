webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ServiceSection/ServiceSection.styles.ts":
/*!****************************************************************!*\
  !*** ./src/components/ServiceSection/ServiceSection.styles.ts ***!
  \****************************************************************/
/*! exports provided: ServiceSectionContainer, AnimatedDiv, ServiceTitle, ServiceContainerCard, ServiceCardTitle, ServiceDescrption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceSectionContainer\", function() { return ServiceSectionContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AnimatedDiv\", function() { return AnimatedDiv; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceTitle\", function() { return ServiceTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceContainerCard\", function() { return ServiceContainerCard; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceCardTitle\", function() { return ServiceCardTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceDescrption\", function() { return ServiceDescrption; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/tools/breakpoints.styles */ \"./src/styles/tools/breakpoints.styles.ts\");\n\n\nvar ServiceSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceSectionContainer\",\n  componentId: \"sc-1fkn6nf-0\"\n})([\"background-color:\", \";border-top-left-radius:150px;padding:\", \"px \", \"px;\", \"{padding:\", \"px \", \"px;}\", \"{padding:\", \"px \", \"px;}\"], function (props) {\n  return props.theme.colors.black0;\n}, function (props) {\n  return props.theme.global.gutterSpace * 4;\n}, function (props) {\n  return props.theme.global.gutterSpace * 8;\n}, _styles_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__[\"device\"].tablet, function (props) {\n  return props.theme.global.gutterSpace * 2;\n}, function (props) {\n  return props.theme.global.gutterSpace * 4;\n}, _styles_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__[\"device\"].mobile, function (props) {\n  return props.theme.global.gutterSpace;\n}, function (props) {\n  return props.theme.global.gutterSpace * 2;\n});\nvar AnimatedDiv = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"ServiceSectionstyles__AnimatedDiv\",\n  componentId: \"sc-1fkn6nf-1\"\n})([\"width:100%;height:100%;opacity:0;transition:opacity 300ms ease-in;\", \"\"], function (props) {\n  return props.show && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"opacity:1;\"]);\n});\nvar ServiceTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceTitle\",\n  componentId: \"sc-1fkn6nf-2\"\n})([\"display:flex;align-items:center;justify-content:center;width:100%;margin-bottom:\", \"px;font-size:3rem;color:\", \";text-decoration:underline;\"], function (props) {\n  return props.theme.global.gutterSpace * 2;\n}, function (props) {\n  return props.theme.colors.black8;\n});\nvar ServiceContainerCard = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceContainerCard\",\n  componentId: \"sc-1fkn6nf-3\"\n})([\"display:flex;flex-direction:column;align-items:center;padding:\", \"px;margin-bottom:\", \"px;\", \"{margin:\", \"px 0;}\"], function (props) {\n  return props.theme.global.gutterSpace;\n}, function (props) {\n  return props.theme.global.gutterSpace * 2;\n}, _styles_tools_breakpoints_styles__WEBPACK_IMPORTED_MODULE_1__[\"device\"].desktop, function (props) {\n  return props.theme.global.gutterSpace;\n});\nvar ServiceCardTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h2.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceCardTitle\",\n  componentId: \"sc-1fkn6nf-4\"\n})([\"font-size:2rem;color:\", \";margin:\", \"px 0;text-align:center;\"], function (props) {\n  return props.theme.colors.black8;\n}, function (props) {\n  return props.theme.global.gutterSpace;\n});\nvar ServiceDescrption = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p.withConfig({\n  displayName: \"ServiceSectionstyles__ServiceDescrption\",\n  componentId: \"sc-1fkn6nf-5\"\n})([\"font-size:1.6rem;color:\", \";text-align:justify;\"], function (props) {\n  return props.theme.colors.black6;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2VydmljZVNlY3Rpb24vU2VydmljZVNlY3Rpb24uc3R5bGVzLnRzPzkxYzciXSwibmFtZXMiOlsiU2VydmljZVNlY3Rpb25Db250YWluZXIiLCJzdHlsZWQiLCJzZWN0aW9uIiwicHJvcHMiLCJ0aGVtZSIsImNvbG9ycyIsImJsYWNrMCIsImdsb2JhbCIsImd1dHRlclNwYWNlIiwiZGV2aWNlIiwidGFibGV0IiwibW9iaWxlIiwiQW5pbWF0ZWREaXYiLCJkaXYiLCJzaG93IiwiY3NzIiwiU2VydmljZVRpdGxlIiwiaDEiLCJibGFjazgiLCJTZXJ2aWNlQ29udGFpbmVyQ2FyZCIsImRlc2t0b3AiLCJTZXJ2aWNlQ2FyZFRpdGxlIiwiaDIiLCJTZXJ2aWNlRGVzY3JwdGlvbiIsInAiLCJibGFjazYiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFTyxJQUFNQSx1QkFBdUIsR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSwwSUFDZCxVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJDLE1BQTlCO0FBQUEsQ0FEYyxFQUd2QixVQUFDSCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLFdBQW5CLEdBQWlDLENBQTVDO0FBQUEsQ0FIdUIsRUFHNEIsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxXQUFuQixHQUFpQyxDQUE1QztBQUFBLENBSDVCLEVBS2hDQyx1RUFBTSxDQUFDQyxNQUx5QixFQU1yQixVQUFDUCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLFdBQW5CLEdBQWlDLENBQTVDO0FBQUEsQ0FOcUIsRUFNOEIsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxXQUFuQixHQUFpQyxDQUE1QztBQUFBLENBTjlCLEVBU2hDQyx1RUFBTSxDQUFDRSxNQVR5QixFQVVyQixVQUFDUixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLFdBQTlCO0FBQUEsQ0FWcUIsRUFVMEIsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxXQUFuQixHQUFpQyxDQUE1QztBQUFBLENBVjFCLENBQTdCO0FBY0EsSUFBTUksV0FBVyxHQUFHWCx5REFBTSxDQUFDWSxHQUFWO0FBQUE7QUFBQTtBQUFBLCtFQU1wQixVQUFDVixLQUFEO0FBQUEsU0FDQUEsS0FBSyxDQUFDVyxJQUFOLElBQ0FDLDZEQURBLGdCQURBO0FBQUEsQ0FOb0IsQ0FBakI7QUFhQSxJQUFNQyxZQUFZLEdBQUdmLHlEQUFNLENBQUNnQixFQUFWO0FBQUE7QUFBQTtBQUFBLG9KQUtOLFVBQUNkLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsV0FBbkIsR0FBaUMsQ0FBNUM7QUFBQSxDQUxNLEVBT2QsVUFBQ0wsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CYSxNQUE5QjtBQUFBLENBUGMsQ0FBbEI7QUFXQSxJQUFNQyxvQkFBb0IsR0FBR2xCLHlEQUFNLENBQUNZLEdBQVY7QUFBQTtBQUFBO0FBQUEseUhBSXBCLFVBQUNWLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsV0FBOUI7QUFBQSxDQUpvQixFQU1kLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsV0FBbkIsR0FBaUMsQ0FBNUM7QUFBQSxDQU5jLEVBUTdCQyx1RUFBTSxDQUFDVyxPQVJzQixFQVNuQixVQUFDakIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxXQUE5QjtBQUFBLENBVG1CLENBQTFCO0FBYUEsSUFBTWEsZ0JBQWdCLEdBQUdwQix5REFBTSxDQUFDcUIsRUFBVjtBQUFBO0FBQUE7QUFBQSxxRUFFbEIsVUFBQ25CLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQmEsTUFBOUI7QUFBQSxDQUZrQixFQUdqQixVQUFDZixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLFdBQTlCO0FBQUEsQ0FIaUIsQ0FBdEI7QUFPQSxJQUFNZSxpQkFBaUIsR0FBR3RCLHlEQUFNLENBQUN1QixDQUFWO0FBQUE7QUFBQTtBQUFBLHdEQUVuQixVQUFDckIsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1Cb0IsTUFBOUI7QUFBQSxDQUZtQixDQUF2QiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlcnZpY2VTZWN0aW9uL1NlcnZpY2VTZWN0aW9uLnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgZGV2aWNlIH0gZnJvbSAnQHN0eWxlcy90b29scy9icmVha3BvaW50cy5zdHlsZXMnO1xuXG5leHBvcnQgY29uc3QgU2VydmljZVNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuc2VjdGlvbmBcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFjazB9O1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNTBweDtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZSAqIDR9cHggJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZSAqIDh9cHg7XG5cbiAgJHtkZXZpY2UudGFibGV0fSB7XG4gICAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZSAqIDJ9cHggJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZSAqIDR9cHg7XG4gIH1cblxuICAke2RldmljZS5tb2JpbGV9IHtcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlfXB4ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5nbG9iYWwuZ3V0dGVyU3BhY2UgKiAyfXB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgQW5pbWF0ZWREaXYgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW47XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMuc2hvdyAmJlxuICAgIGNzc2BcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgYH1cbmA7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlVGl0bGUgPSBzdHlsZWQuaDFgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZSAqIDJ9cHg7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2s4fTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5gO1xuXG5leHBvcnQgY29uc3QgU2VydmljZUNvbnRhaW5lckNhcmQgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlfXB4O1xuXG4gIG1hcmdpbi1ib3R0b206ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5nbG9iYWwuZ3V0dGVyU3BhY2UgKiAyfXB4O1xuXG4gICR7ZGV2aWNlLmRlc2t0b3B9IHtcbiAgICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5nbG9iYWwuZ3V0dGVyU3BhY2V9cHggMDtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFNlcnZpY2VDYXJkVGl0bGUgPSBzdHlsZWQuaDJgXG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2s4fTtcbiAgbWFyZ2luOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlfXB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBTZXJ2aWNlRGVzY3JwdGlvbiA9IHN0eWxlZC5wYFxuICBmb250LXNpemU6IDEuNnJlbTtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2s2fTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ServiceSection/ServiceSection.styles.ts\n");

/***/ })

})