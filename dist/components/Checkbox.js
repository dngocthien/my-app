"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Checkbox(_ref) {
  let {
    label,
    id,
    checked,
    onChange
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("label", {
    htmlFor: id,
    className: "flex items-center space-x-2",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
      id: id,
      type: "checkbox",
      checked: checked,
      onChange: onChange,
      className: "h-4 w-4"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      children: label
    })]
  });
}