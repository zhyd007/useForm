"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textFieldStyle = void 0;

var _react = require("@emotion/react");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var textFieldStyle = (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n  .text-field_input {\n    font-size: 0.875rem;\n    padding: 0.75em;\n    border: 1px solid var(--bg-color-grey);\n    border-radius: 0.5em;\n    width: 100%;\n    background-color: var(--bg-color-white);\n  }\n  .text-field_input:focus-visible {\n    outline: unset;\n  }\n\n  @media (min-width: 50em) {\n    .text-field_input {\n      height: 3.57em;\n      padding: 0.75em 1.07em;\n    }\n  }\n\n  .text-field_floating-label {\n    color: var(--text-color-grey-primary);\n    position: absolute;\n    margin-top: 0;\n    font-size: 1rem;\n    top: 0.65em;\n    right: 0;\n    bottom: 0;\n    left: 0.65em;\n    transition-property: all;\n    transition-duration: 100ms;\n    background-color: transparent;\n  }\n\n  @media (min-width: 50em) {\n    .text-field_floating-label {\n      top: 1em;\n      left: 1.07em;\n    }\n  }\n\n  .text-field_input:focus + .text-field_floating-label {\n    font-size: 0.75rem;\n    top: -0.5em;\n    width: max-content;\n    height: max-content;\n    padding: 0 0.25em;\n    background-color: var(--bg-color-white);\n  }\n\n  .text-field_floating-label-outlined {\n    font-size: 0.75rem;\n    top: -0.5em;\n    background-color: var(--text-color-white);\n    width: max-content;\n    height: max-content;\n    padding: 0 0.25em;\n  }\n\n  .text-field_floating-label-invalid {\n    color: var(--main-color-red);\n    background-color: var(--bg-color-white);\n  }\n\n  .text-field_helper-msg {\n    margin-top: 0;\n    font-size: 0.75rem;\n    color: var(--text-color-grey-primary);\n  }\n"])));
exports.textFieldStyle = textFieldStyle;