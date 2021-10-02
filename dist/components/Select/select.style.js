"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectStyle = void 0;

var _react = require("@emotion/react");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var selectStyle = (0, _react.css)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  font-size: 0.875rem;\n  color: var(--text-color-grey-primary);\n  padding: 0.75em;\n  border: 1px solid var(--bg-color-grey);\n  border-radius: 0.5em;\n  background-color: var(--bg-color-white);\n\n  &:focus-visible {\n    outline: unset;\n  }\n\n  @media (min-width: 50em) {\n    & {\n      height: 3.57em;\n    }\n  }\n"])));
exports.selectStyle = selectStyle;