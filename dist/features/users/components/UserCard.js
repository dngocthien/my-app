"use strict";

var _jsxRuntime = require("react/jsx-runtime");
function UserCard(_ref) {
  let {
    user
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Card, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: ["Name: ", user?.name]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      children: ["Email: ", user?.email]
    })]
  });
}