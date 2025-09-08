"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;
require("../index.css");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Input(_ref) {
  let {
    label,
    id,
    ...props
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "mb-4",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
      htmlFor: id,
      className: "block text-lg font-medium mb-10",
      children: [label, " sss"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      id: id,
      ...props,
      className: "border p-2 w-full rounded"
    })]
  });
}