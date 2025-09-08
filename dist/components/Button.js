"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Button(_ref) {
  let {
    children,
    variant = "primary",
    disabled = false,
    onClick,
    ...props
  } = _ref;
  const base = "px-4 py-2 font-semibold rounded";
  const variants = {
    primary: "bg-blue-600 text-white",
    secondary: "bg-gray-300 text-black",
    danger: "bg-red-500 text-white"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    className: `${base} ${variants[variant]} ${disabled && "opacity-50"}`,
    onClick: onClick,
    disabled: disabled,
    ...props,
    children: children
  });
}