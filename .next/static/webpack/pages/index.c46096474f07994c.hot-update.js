"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_common_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common/Button */ \"./components/common/Button.tsx\");\n/* harmony import */ var _components_common_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/Header */ \"./components/common/Header.tsx\");\n/* harmony import */ var _hooks_usePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/usePopUp */ \"./hooks/usePopUp.tsx\");\n/* harmony import */ var _hooks_useToast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useToast */ \"./hooks/useToast.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/bong/Desktop/project/react-ios/pages/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var PopUp = (0,_hooks_usePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  var Toast = (0,_hooks_useToast__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_common_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(PopUp.Render, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Toast.Render, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Text, {\n      children: \"\\uD31D\\uC5C5\\uCC3D\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      onClick: function onClick() {\n        return PopUp.open({\n          title: '팝업',\n          bodyNode: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            children: \"\\uD31D\\uC5C5 \\uD658\\uC601\\uD569\\uB2C8\\uB2E4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 47\n          }, _this)\n        });\n      },\n      children: \"\\uD31D\\uC5C5\\uCC3D\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      onClick: function onClick() {\n        return Toast.open({\n          title: '알림',\n          content: '알림창입니다'\n        });\n      },\n      children: \"info - \\uC54C\\uB9BC\\uCC3D\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      onClick: function onClick() {\n        return Toast.open({\n          title: '알림',\n          content: '알림창입니다',\n          type: 'error'\n        });\n      },\n      children: \"error - \\uC54C\\uB9BC\\uCC3D\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      onClick: function onClick() {\n        return Toast.open({\n          title: '알림',\n          content: '알림창입니다',\n          type: 'success'\n        });\n      },\n      children: \"success - \\uC54C\\uB9BC\\uCC3D\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_common_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n      onClick: function onClick() {\n        return Toast.open({\n          title: '알림',\n          content: '알림창입니다',\n          type: 'warning'\n        });\n      },\n      children: \"warning - \\uC54C\\uB9BC\\uCC3D\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Home, \"AHwIkAPY3tlFZP6LQ3Mx2xVpelY=\", false, function () {\n  return [_hooks_usePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _hooks_useToast__WEBPACK_IMPORTED_MODULE_3__[\"default\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTUksSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0VBQUE7O0VBQzNCLElBQU1DLEtBQUssR0FBR0gsMkRBQVEsRUFBdEI7RUFDQSxJQUFNSSxLQUFLLEdBQUdILDJEQUFRLEVBQXRCO0VBQ0Esb0JBQ0U7SUFBQSx3QkFDRSw4REFBQyxpRUFBRDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBREYsZUFFRSw4REFBQyxLQUFELENBQU8sTUFBUDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBRkYsZUFHRSw4REFBQyxLQUFELENBQU8sTUFBUDtNQUFBO01BQUE7TUFBQTtJQUFBLFNBSEYsZUFLRSw4REFBQyxJQUFEO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBTEYsZUFPRSw4REFBQyxpRUFBRDtNQUNFLE9BQU8sRUFBRTtRQUFBLE9BQ1BFLEtBQUssQ0FBQ0UsSUFBTixDQUFXO1VBQUVDLEtBQUssRUFBRSxJQUFUO1VBQWVDLFFBQVEsZUFBRTtZQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUE7VUFBQTtRQUF6QixDQUFYLENBRE87TUFBQSxDQURYO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBUEYsZUFlRSw4REFBQyxpRUFBRDtNQUNFLE9BQU8sRUFBRTtRQUFBLE9BQU1ILEtBQUssQ0FBQ0MsSUFBTixDQUFXO1VBQUVDLEtBQUssRUFBRSxJQUFUO1VBQWVFLE9BQU8sRUFBRTtRQUF4QixDQUFYLENBQU47TUFBQSxDQURYO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBZkYsZUFvQkUsOERBQUMsaUVBQUQ7TUFDRSxPQUFPLEVBQUU7UUFBQSxPQUNQSixLQUFLLENBQUNDLElBQU4sQ0FBVztVQUFFQyxLQUFLLEVBQUUsSUFBVDtVQUFlRSxPQUFPLEVBQUUsUUFBeEI7VUFBa0NDLElBQUksRUFBRTtRQUF4QyxDQUFYLENBRE87TUFBQSxDQURYO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLFNBcEJGLGVBNEJFLDhEQUFDLGlFQUFEO01BQ0UsT0FBTyxFQUFFO1FBQUEsT0FDUEwsS0FBSyxDQUFDQyxJQUFOLENBQVc7VUFDVEMsS0FBSyxFQUFFLElBREU7VUFFVEUsT0FBTyxFQUFFLFFBRkE7VUFHVEMsSUFBSSxFQUFFO1FBSEcsQ0FBWCxDQURPO01BQUEsQ0FEWDtNQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxTQTVCRixlQXdDRSw4REFBQyxpRUFBRDtNQUNFLE9BQU8sRUFBRTtRQUFBLE9BQ1BMLEtBQUssQ0FBQ0MsSUFBTixDQUFXO1VBQ1RDLEtBQUssRUFBRSxJQURFO1VBRVRFLE9BQU8sRUFBRSxRQUZBO1VBR1RDLElBQUksRUFBRTtRQUhHLENBQVgsQ0FETztNQUFBLENBRFg7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUEsU0F4Q0Y7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBLFNBREY7QUFzREQsQ0F6REQ7O0dBQU1QO1VBQ1VGLHlEQUNBQzs7O0tBRlZDO0FBMEROLCtEQUFlQSxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vQnV0dG9uJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vSGVhZGVyJztcbmltcG9ydCB1c2VQb3BVcCBmcm9tICcuLi9ob29rcy91c2VQb3BVcCc7XG5pbXBvcnQgdXNlVG9hc3QgZnJvbSAnLi4vaG9va3MvdXNlVG9hc3QnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgUG9wVXAgPSB1c2VQb3BVcCgpO1xuICBjb25zdCBUb2FzdCA9IHVzZVRvYXN0KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxQb3BVcC5SZW5kZXIgLz5cbiAgICAgIDxUb2FzdC5SZW5kZXIgLz5cblxuICAgICAgPFRleHQ+7Yyd7JeF7LC9PC9UZXh0PlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgUG9wVXAub3Blbih7IHRpdGxlOiAn7Yyd7JeFJywgYm9keU5vZGU6IDxkaXY+7Yyd7JeFIO2ZmOyYge2VqeuLiOuLpDwvZGl2PiB9KVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIO2MneyXheywvVxuICAgICAgPC9CdXR0b24+XG5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgb25DbGljaz17KCkgPT4gVG9hc3Qub3Blbih7IHRpdGxlOiAn7JWM66a8JywgY29udGVudDogJ+yVjOumvOywveyeheuLiOuLpCcgfSl9XG4gICAgICA+XG4gICAgICAgIGluZm8gLSDslYzrprzssL1cbiAgICAgIDwvQnV0dG9uPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgIFRvYXN0Lm9wZW4oeyB0aXRsZTogJ+yVjOumvCcsIGNvbnRlbnQ6ICfslYzrprzssL3snoXri4jri6QnLCB0eXBlOiAnZXJyb3InIH0pXG4gICAgICAgIH1cbiAgICAgID5cbiAgICAgICAgZXJyb3IgLSDslYzrprzssL1cbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgVG9hc3Qub3Blbih7XG4gICAgICAgICAgICB0aXRsZTogJ+yVjOumvCcsXG4gICAgICAgICAgICBjb250ZW50OiAn7JWM66a87LC97J6F64uI64ukJyxcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHN1Y2Nlc3MgLSDslYzrprzssL1cbiAgICAgIDwvQnV0dG9uPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgVG9hc3Qub3Blbih7XG4gICAgICAgICAgICB0aXRsZTogJ+yVjOumvCcsXG4gICAgICAgICAgICBjb250ZW50OiAn7JWM66a87LC97J6F64uI64ukJyxcbiAgICAgICAgICAgIHR5cGU6ICd3YXJuaW5nJyxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA+XG4gICAgICAgIHdhcm5pbmcgLSDslYzrprzssL1cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiSGVhZGVyIiwidXNlUG9wVXAiLCJ1c2VUb2FzdCIsIkhvbWUiLCJQb3BVcCIsIlRvYXN0Iiwib3BlbiIsInRpdGxlIiwiYm9keU5vZGUiLCJjb250ZW50IiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});