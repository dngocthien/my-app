"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = AuthPage;
var _react = _interopRequireDefault(require("react"));
var _components = require("./components");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function AuthPage() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      maxWidth: 400,
      margin: "40px auto",
      padding: 24,
      border: "1px solid #eee",
      borderRadius: 8
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h2", {
      children: "Sign Up"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.SignupForm, {})]
  });
}