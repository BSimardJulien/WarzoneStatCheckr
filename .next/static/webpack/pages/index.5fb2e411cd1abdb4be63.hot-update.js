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
    router.push("/".concat(username, "/").concat(battleTag));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        "for": "userNameInput",
        children: "UserName"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "text",
        className: "form-control",
        id: "userNameInput",
        placeholder: "UserName",
        value: username,
        onChange: handleChangeUsername
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        "for": "battleTagInput",
        children: "BattleTag"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
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
        lineNumber: 31,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        type: "submit",
        className: "btn btn-primary",
        value: "Submit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXR0bGVOZXRVc2VybmFtZS5qcyJdLCJuYW1lcyI6WyJCYXR0bGVOZXRVc2VybmFtZSIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsImJhdHRsZVRhZyIsInNldEJhdHRsZVRhZyIsImhhbmRsZUNoYW5nZVVzZXJuYW1lIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VCYXR0bGVUYWciLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLGlCQUFULEdBQTZCO0FBQUE7O0FBRXhDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRndDLGtCQUlUQyxzREFBUSxDQUFDLEVBQUQsQ0FKQztBQUFBLE1BSWpDQyxRQUppQztBQUFBLE1BSXZCQyxXQUp1Qjs7QUFBQSxtQkFLUEYsc0RBQVEsQ0FBQyxFQUFELENBTEQ7QUFBQSxNQUtqQ0csU0FMaUM7QUFBQSxNQUt0QkMsWUFMc0I7O0FBT3hDLE1BQU1DLG9CQUFvQixHQUFFLFNBQXRCQSxvQkFBc0IsQ0FBQ0MsS0FBRCxFQUFTO0FBQ2pDSixlQUFXLENBQUNJLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsS0FBckIsQ0FBWDtBQUNILEdBRkQ7O0FBSUEsTUFBTUMscUJBQXFCLEdBQUUsU0FBdkJBLHFCQUF1QixDQUFDSCxLQUFELEVBQVM7QUFDbENGLGdCQUFZLENBQUNFLEtBQUssQ0FBQ0MsYUFBTixDQUFvQkMsS0FBckIsQ0FBWjtBQUNILEdBRkQ7O0FBSUEsTUFBTUUsWUFBWSxHQUFFLFNBQWRBLFlBQWMsQ0FBQ0osS0FBRCxFQUFVO0FBQzFCQSxTQUFLLENBQUNLLGNBQU47QUFDQWIsVUFBTSxDQUFDYyxJQUFQLFlBQWdCWCxRQUFoQixjQUE0QkUsU0FBNUI7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUEsMkJBRUE7QUFBTSxjQUFRLEVBQUVPLFlBQWhCO0FBQUEsOEJBQ0k7QUFBTyxlQUFJLGVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsaUJBQVMsRUFBQyxjQUE3QjtBQUE0QyxVQUFFLEVBQUMsZUFBL0M7QUFBK0QsbUJBQVcsRUFBQyxVQUEzRTtBQUFzRixhQUFLLEVBQUVULFFBQTdGO0FBQXVHLGdCQUFRLEVBQUVJO0FBQWpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQU8sZUFBSSxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLGVBSUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixpQkFBUyxFQUFDLGNBQTdCO0FBQTRDLFVBQUUsRUFBQyxnQkFBL0M7QUFBZ0UsbUJBQVcsRUFBQyxXQUE1RTtBQUF3RixhQUFLLEVBQUVGLFNBQS9GO0FBQTBHLGdCQUFRLEVBQUVNO0FBQXBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixlQUtJO0FBQU8sWUFBSSxFQUFDLFFBQVo7QUFBcUIsaUJBQVMsRUFBQyxpQkFBL0I7QUFBaUQsYUFBSyxFQUFDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7R0FoQ3VCWixpQjtVQUVMRSxxRDs7O0tBRktGLGlCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVmYjJlNDExY2QxYWJkYjRiZTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhdHRsZU5ldFVzZXJuYW1lKCkge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdPSB1c2VTdGF0ZSgnJykgXG4gICAgY29uc3QgW2JhdHRsZVRhZywgc2V0QmF0dGxlVGFnXT0gdXNlU3RhdGUoJycpIFxuXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlVXNlcm5hbWUgPShldmVudCk9PntcbiAgICAgICAgc2V0VXNlcm5hbWUoZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VCYXR0bGVUYWcgPShldmVudCk9PntcbiAgICAgICAgc2V0QmF0dGxlVGFnKGV2ZW50LmN1cnJlbnRUYXJnZXQudmFsdWUpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0PSAoZXZlbnQpPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIHJvdXRlci5wdXNoKGAvJHt1c2VybmFtZX0vJHtiYXR0bGVUYWd9YCk7XG4gICAgfVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgIFxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlck5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJ1c2VyTmFtZUlucHV0XCIgcGxhY2Vob2xkZXI9XCJVc2VyTmFtZVwiIHZhbHVlPXt1c2VybmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZVVzZXJuYW1lfSAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImJhdHRsZVRhZ0lucHV0XCI+QmF0dGxlVGFnPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiYmF0dGxlVGFnSW5wdXRcIiBwbGFjZWhvbGRlcj1cImJhdHRsZVRhZ1wiIHZhbHVlPXtiYXR0bGVUYWd9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2VCYXR0bGVUYWd9IC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIHZhbHVlPVwiU3VibWl0XCIgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=