"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Card(_ref) {
  let {
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "bg-light_bg dark:bg-dark_bg shadow rounded-xl p-6 transition-colors",
    children: children
  });
}