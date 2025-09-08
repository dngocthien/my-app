"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SignupForm;
var _components = require("../../../components");
var _jsxRuntime = require("react/jsx-runtime");
function SignupForm() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Input, {
      label: "Email",
      id: "email",
      type: "email",
      placeholder: "you@example.com"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_components.Input, {
      label: "Password",
      id: "password",
      type: "password"
    })]
  });
}