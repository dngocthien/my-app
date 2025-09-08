"use strict";

var _react = require("@testing-library/react");
var _Button = _interopRequireDefault(require("./Button"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
test('renders with text', () => {
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    children: "Click"
  }));
  expect(_react.screen.getByText('Click')).toBeInTheDocument();
});
test('handles click', () => {
  const onClick = jest.fn();
  (0, _react.render)(/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    onClick: onClick,
    children: "Submit"
  }));
  _react.fireEvent.click(_react.screen.getByText('Submit'));
  expect(onClick).toHaveBeenCalledTimes(1);
});