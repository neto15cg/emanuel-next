webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/ButtonContact/ButtonContact.styles.ts":
/*!**************************************************************!*\
  !*** ./src/components/ButtonContact/ButtonContact.styles.ts ***!
  \**************************************************************/
/*! exports provided: ButtonContactWebStyled, ButtonClose, LinkContactWebStyled, CustomIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonContactWebStyled\", function() { return ButtonContactWebStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonClose\", function() { return ButtonClose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LinkContactWebStyled\", function() { return LinkContactWebStyled; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomIcon\", function() { return CustomIcon; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_svgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components/svgIcon/SvgIcon */ \"./src/components/svgIcon/SvgIcon.tsx\");\n\n\nvar ButtonContactWebStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"ButtonContactstyles__ButtonContactWebStyled\",\n  componentId: \"djo4vf-0\"\n})([\"display:flex;background:none;align-items:center;justify-content:center;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;background-color:\", \";border-radius:2px;padding:0 \", \"px;color:\", \";font-size:1.4rem;font-weight:500;display:block;\", \"\"], function (props) {\n  return props.theme.colors.black8;\n}, function (props) {\n  return props.theme.global.gutterSpace * 1.5;\n}, function (props) {\n  return props.theme.colors.black0;\n}, function (props) {\n  return props.onlyIcon && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"background-color:transparent;padding:\", \"px;\"], props.theme.global.gutterSpace / 2);\n});\nvar ButtonClose = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"ButtonContactstyles__ButtonClose\",\n  componentId: \"djo4vf-1\"\n})([\"display:flex;background:none;align-items:center;justify-content:center;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;background-color:transparent;border-radius:2px;padding:10px;color:\", \";font-size:1.4rem;font-weight:500;\"], function (props) {\n  return props.theme.colors.black0;\n});\nvar LinkContactWebStyled = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].a.withConfig({\n  displayName: \"ButtonContactstyles__LinkContactWebStyled\",\n  componentId: \"djo4vf-2\"\n})([\"display:flex;position:relative;background:none;align-items:center;justify-content:center;color:inherit;border:none;padding:0;font:inherit;cursor:pointer;outline:inherit;background-color:transparent;border-radius:2px;padding:0;color:\", \";font-size:1.6rem;font-weight:600;padding:\", \"px;margin-bottom:\", \"px;&:after{content:'';position:absolute;bottom:0;left:0;border-bottom:2px solid \", \";width:0%;transition:width 150ms linear;}&:hover{&:after{content:'';width:100%;}}\"], function (props) {\n  return props.theme.colors.black0;\n}, function (props) {\n  return props.theme.global.gutterSpace / 4;\n}, function (props) {\n  return props.theme.global.gutterSpace / 2;\n}, function (props) {\n  return props.theme.colors.black5;\n});\nvar CustomIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_components_svgIcon_SvgIcon__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n  displayName: \"ButtonContactstyles__CustomIcon\",\n  componentId: \"djo4vf-3\"\n})([\"@keyframes shake{0%{transform:translate(1px,1px) rotate(0deg);}10%{transform:translate(-1px,-2px) rotate(-1deg);}20%{transform:translate(-3px,0px) rotate(1deg);}30%{transform:translate(3px,2px) rotate(0deg);}40%{transform:translate(1px,-1px) rotate(1deg);}50%{transform:translate(-1px,2px) rotate(-1deg);}60%{transform:translate(-3px,1px) rotate(0deg);}70%{transform:translate(3px,1px) rotate(-1deg);}80%{transform:translate(-1px,-1px) rotate(1deg);}90%{transform:translate(1px,2px) rotate(0deg);}100%{transform:translate(1px,-2px) rotate(-1deg);}}&:hover{animation:shake 1s;}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uQ29udGFjdC9CdXR0b25Db250YWN0LnN0eWxlcy50cz8yNDc1Il0sIm5hbWVzIjpbIkJ1dHRvbkNvbnRhY3RXZWJTdHlsZWQiLCJzdHlsZWQiLCJidXR0b24iLCJwcm9wcyIsInRoZW1lIiwiY29sb3JzIiwiYmxhY2s4IiwiZ2xvYmFsIiwiZ3V0dGVyU3BhY2UiLCJibGFjazAiLCJvbmx5SWNvbiIsImNzcyIsIkJ1dHRvbkNsb3NlIiwiTGlua0NvbnRhY3RXZWJTdHlsZWQiLCJhIiwiYmxhY2s1IiwiQ3VzdG9tSWNvbiIsIlN2Z0ljb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVPLElBQU1BLHNCQUFzQixHQUFHQyx5REFBTSxDQUFDQyxNQUFWO0FBQUE7QUFBQTtBQUFBLHVSQVdiLFVBQUNDLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixDQUFtQkMsTUFBOUI7QUFBQSxDQVhhLEVBYXBCLFVBQUNILEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsV0FBbkIsR0FBaUMsR0FBNUM7QUFBQSxDQWJvQixFQWN4QixVQUFDTCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJJLE1BQTlCO0FBQUEsQ0Fkd0IsRUFtQi9CLFVBQUNOLEtBQUQ7QUFBQSxTQUNBQSxLQUFLLENBQUNPLFFBQU4sSUFDQUMsNkRBREEsbURBR2FSLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CQyxXQUFuQixHQUFpQyxDQUg5QyxDQURBO0FBQUEsQ0FuQitCLENBQTVCO0FBMkJBLElBQU1JLFdBQVcsR0FBR1gseURBQU0sQ0FBQ0MsTUFBVjtBQUFBO0FBQUE7QUFBQSx3UUFjYixVQUFDQyxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJJLE1BQTlCO0FBQUEsQ0FkYSxDQUFqQjtBQW1CQSxJQUFNSSxvQkFBb0IsR0FBR1oseURBQU0sQ0FBQ2EsQ0FBVjtBQUFBO0FBQUE7QUFBQSw2ZEFldEIsVUFBQ1gsS0FBRDtBQUFBLFNBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CSSxNQUE5QjtBQUFBLENBZnNCLEVBa0JwQixVQUFDTixLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJDLFdBQW5CLEdBQWlDLENBQTVDO0FBQUEsQ0FsQm9CLEVBb0JkLFVBQUNMLEtBQUQ7QUFBQSxTQUFXQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUcsTUFBWixDQUFtQkMsV0FBbkIsR0FBaUMsQ0FBNUM7QUFBQSxDQXBCYyxFQTJCRixVQUFDTCxLQUFEO0FBQUEsU0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJVLE1BQTlCO0FBQUEsQ0EzQkUsQ0FBMUI7QUF3Q0EsSUFBTUMsVUFBVSxHQUFHZixpRUFBTSxDQUFDZ0IsbUVBQUQsQ0FBVDtBQUFBO0FBQUE7QUFBQSx3a0JBQWhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQnV0dG9uQ29udGFjdC9CdXR0b25Db250YWN0LnN0eWxlcy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFN2Z0ljb24gZnJvbSAnQGNvbXBvbmVudHMvc3ZnSWNvbi9TdmdJY29uJztcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNvbnRhY3RXZWJTdHlsZWQgPSBzdHlsZWQuYnV0dG9uYFxuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrOH07XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlICogMS41fXB4O1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFjazB9O1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgJHsocHJvcHMpID0+XG4gICAgcHJvcHMub25seUljb24gJiZcbiAgICBjc3NgXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIHBhZGRpbmc6ICR7cHJvcHMudGhlbWUuZ2xvYmFsLmd1dHRlclNwYWNlIC8gMn1weDtcbiAgICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbkNsb3NlID0gc3R5bGVkLmJ1dHRvbmBcbiAgZGlzcGxheTogZmxleDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgY29sb3I6ICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5jb2xvcnMuYmxhY2swfTtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5gO1xuXG5leHBvcnQgY29uc3QgTGlua0NvbnRhY3RXZWJTdHlsZWQgPSBzdHlsZWQuYWBcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgZm9udDogaW5oZXJpdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmNvbG9ycy5ibGFjazB9O1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZSAvIDR9cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmdsb2JhbC5ndXR0ZXJTcGFjZSAvIDJ9cHg7XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuY29sb3JzLmJsYWNrNX07XG4gICAgd2lkdGg6IDAlO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDE1MG1zIGxpbmVhcjtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBDdXN0b21JY29uID0gc3R5bGVkKFN2Z0ljb24pYFxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxcHgsIDFweCkgcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgLTJweCkgcm90YXRlKC0xZGVnKTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zcHgsIDBweCkgcm90YXRlKDFkZWcpO1xuICAgIH1cbiAgICAzMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCAycHgpIHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgLTFweCkgcm90YXRlKDFkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFweCwgMnB4KSByb3RhdGUoLTFkZWcpO1xuICAgIH1cbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTNweCwgMXB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDFweCkgcm90YXRlKC0xZGVnKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcHgsIC0xcHgpIHJvdGF0ZSgxZGVnKTtcbiAgICB9XG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDFweCwgMnB4KSByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMXB4LCAtMnB4KSByb3RhdGUoLTFkZWcpO1xuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGFuaW1hdGlvbjogc2hha2UgMXM7XG4gIH1cbmA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ButtonContact/ButtonContact.styles.ts\n");

/***/ })

})