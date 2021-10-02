"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _css = require("@emotion/css");

var _form = require("./form.style");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(0, _css.injectGlobal)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  :root {\n    box-sizing: border-box;\n    /* base font-size */\n    font-size: 1em;\n    /* ------- custom properites, aka css variables. ------- */\n    --main-font: Arial, Helvetica, sans-serif;\n    /* both text and background color */\n    --main-color-blue: #286efa;\n    --main-color-red: #f53c3c;\n    /* only for text */\n    --text-color-black: #333333;\n    --text-color-white: #ffffff;\n    --text-color-grey-primary: #777777;\n    --text-color-grey-secondary: #aaaaaa;\n    /* only for background */\n    --bg-color-white: #f9f9f9;\n    --bg-color-grey: #ededed;\n    /* ------- ending ------- */\n  }\n\n  *,\n  ::before,\n  ::after {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: var(--main-font);\n    margin: 0;\n  }\n\n  body * + * {\n    margin-top: 1.5em;\n  }\n"])));

/**
 * Form component that uses [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
 */
var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      children = _ref.children;
  return (0, _react2.jsx)("form", {
    noValidate: true,
    css: _form.formStyle,
    onSubmit: onSubmit
  }, children);
};

exports.Form = Form;