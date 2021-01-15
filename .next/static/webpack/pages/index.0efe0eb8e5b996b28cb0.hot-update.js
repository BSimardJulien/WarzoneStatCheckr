webpackHotUpdate_N_E("pages/index",{

/***/ "./components/BattleNetUsername.js":
/*!*****************************************!*\
  !*** ./components/BattleNetUsername.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BattleNetUsername; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "E:\\WarzoneStateChecker\\components\\BattleNetUsername.js",
    _s = $RefreshSig$();



function BattleNetUsername() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      battleTag = _useState2[0],
      setBattleTag = _useState2[1];

  var handleChangeUsername = function handleChangeUsername(event) {
    setUsername(event.currentTarget.value);
  };

  var handleChangeBattleTag = function handleChangeBattleTag(event) {
    setBattleTag(event.currentTarget.value);
  };

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    router.push("/".concat(username));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      "for": "userNameInput",
      children: "UserName"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "form-control",
        id: "userNameInput",
        placeholder: "UserName",
        value: username,
        onChange: handleChangeUsername
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "form-control",
        id: "battleTagInput",
        placeholder: "battleTag",
        value: battleTag,
        onChange: handleChangeBattleTag
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "btn btn-primary",
        value: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_s(BattleNetUsername, "TeXtsqRTdF4/Li/AnYVBndv5nog=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = BattleNetUsername;

var _c;

$RefreshReg$(_c, "BattleNetUsername");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXR0bGVOZXRVc2VybmFtZS5qcyJdLCJuYW1lcyI6WyJCYXR0bGVOZXRVc2VybmFtZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImJhdHRsZVRhZyIsInNldEJhdHRsZVRhZyIsImhhbmRsZUNoYW5nZVVzZXJuYW1lIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VCYXR0bGVUYWciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGlCQUFULEdBQTZCO0FBQUE7O0FBRXhDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRndDLGtCQUlUQyxzREFBUSxDQUFDLEVBQUQsQ0FKQztBQUFBLE1BSWpDQyxRQUppQztBQUFBLE1BSXZCQyxXQUp1Qjs7QUFBQSxtQkFLUEYsc0RBQVEsQ0FBQyxFQUFELENBTEQ7QUFBQSxNQUtqQ0csU0FMaUM7QUFBQSxNQUt0QkMsWUFMc0I7O0FBT3hDLE1BQU1DLG9CQUFvQixHQUFFLFNBQXRCQSxvQkFBc0IsQ0FBQ0MsS0FBRCxFQUFTO0FBQ2pDSixlQUFXLENBQUNJLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsS0FBckIsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMscUJBQXFCLEdBQUUsU0FBdkJBLHFCQUF1QixDQUFDSCxLQUFELEVBQVM7QUFDbENGLGdCQUFZLENBQUNFLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsS0FBckIsQ0FBWjtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsWUFBWSxHQUFFLFNBQWRBLFlBQWMsQ0FBQ0osS0FBRCxFQUFVO0FBQzFCQSxTQUFLLENBQUNLLGNBQU47QUFDQWIsVUFBTSxDQUFDYyxJQUFQLFlBQWdCWCxRQUFoQjtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBQSw0QkFDQTtBQUFPLGFBQUksZUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURBLGVBRUE7QUFBTSxjQUFRLEVBQUVTLFlBQWhCO0FBQUEsOEJBQ0k7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGNBQTdCO0FBQTRDLFVBQUUsRUFBQyxlQUEvQztBQUErRCxtQkFBVyxFQUFDLFVBQTNFO0FBQXNGLGFBQUssRUFBRVQsUUFBN0Y7QUFBdUcsZ0JBQVEsRUFBRUk7QUFBakg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGNBQTdCO0FBQTRDLFVBQUUsRUFBQyxnQkFBL0M7QUFBZ0UsbUJBQVcsRUFBQyxXQUE1RTtBQUF3RixhQUFLLEVBQUVGLFNBQS9GO0FBQTBHLGdCQUFRLEVBQUVNO0FBQXBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBQyxpQkFBL0I7QUFBaUQsYUFBSyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztHQTlCdUJaLGlCO1VBRUxFLHFEOzs7S0FGS0YsaUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGVmZTBlYjhlNWI5OTZiMjhjYjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmF0dGxlTmV0VXNlcm5hbWUoKSB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV09IHVzZVN0YXRlKCcnKSBcbiAgICBjb25zdCBbYmF0dGxlVGFnLCBzZXRCYXR0bGVUYWddPSB1c2VTdGF0ZSgnJykgXG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VVc2VybmFtZSA9KGV2ZW50KT0+e1xuICAgICAgICBzZXRVc2VybmFtZShldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUJhdHRsZVRhZyA9KGV2ZW50KT0+e1xuICAgICAgICBzZXRCYXR0bGVUYWcoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQ9IChldmVudCk9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgcm91dGVyLnB1c2goYC8ke3VzZXJuYW1lfWApO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXJOYW1lPC9sYWJlbD5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cInVzZXJOYW1lSW5wdXRcIiBwbGFjZWhvbGRlcj1cIlVzZXJOYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlVXNlcm5hbWV9IC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImJhdHRsZVRhZ0lucHV0XCIgcGxhY2Vob2xkZXI9XCJiYXR0bGVUYWdcIiB2YWx1ZT17YmF0dGxlVGFnfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlQmF0dGxlVGFnfSAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiB2YWx1ZT1cIlN1Ym1pdFwiIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9