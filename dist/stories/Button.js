"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./button.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/** Primary UI component for user interaction */
const Button = _ref => {
  let {
    primary = false,
    backgroundColor = null,
    size = 'medium',
    label,
    ...props
  } = _ref;
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: ['storybook-button', `storybook-button--${size}`, mode].join(' '),
    style: backgroundColor && {
      backgroundColor
    },
    ...props,
    children: label
  });
};
exports.Button = Button;
Button.propTypes = {
  /** Is this the principal call to action on the page? */
  primary: _propTypes.default.bool,
  /** What background color to use */
  backgroundColor: _propTypes.default.string,
  /** How large should the button be? */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  /** Button contents */
  label: _propTypes.default.string.isRequired,
  /** Optional click handler */
  onClick: _propTypes.default.func
};