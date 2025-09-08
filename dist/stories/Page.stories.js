"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoggedOut = exports.LoggedIn = void 0;
var _test = require("storybook/test");
var _Page = require("./Page");
var _default = exports.default = {
  title: 'Example/Page',
  component: _Page.Page,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  }
};
const LoggedOut = exports.LoggedOut = {};

// More on component testing: https://storybook.js.org/docs/writing-tests/interaction-testing
const LoggedIn = exports.LoggedIn = {
  play: async _ref => {
    let {
      canvasElement
    } = _ref;
    const canvas = (0, _test.within)(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await (0, _test.expect)(loginButton).toBeInTheDocument();
    await _test.userEvent.click(loginButton);
    await (0, _test.expect)(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await (0, _test.expect)(logoutButton).toBeInTheDocument();
  }
};