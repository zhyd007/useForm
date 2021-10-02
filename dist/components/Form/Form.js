"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Form component that uses [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
 */
var Form = function Form(_ref) {
  var onSubmit = _ref.onSubmit,
      children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("form", {
    noValidate: true,
    onSubmit: onSubmit
  }, children);
};

exports.Form = Form;