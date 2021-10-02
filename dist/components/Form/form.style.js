"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formStyle = void 0;

var _react = require("@emotion/react");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var formStyle = (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n\n  .form-input_invalid {\n    border-color: var(--main-color-red);\n  }\n\n  .text-field_msg {\n    margin-top: 0.125em;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .text-field_error-msg {\n    color: var(--main-color-red);\n  }\n\n  @media (min-width: 50em) {\n    & {\n      width: 30em;\n    }\n  }\n"])));
exports.formStyle = formStyle;