"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _select = require("./select.style");

var _excluded = ["label", "options", "error"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Select = function Select(_ref) {
  var label = _ref.label,
      options = _ref.options,
      error = _ref.error,
      rest = _objectWithoutProperties(_ref, _excluded);

  return (0, _react2.jsx)("label", null, (0, _react2.jsx)("select", _extends({
    css: _select.selectStyle,
    className: "form-input-ele".concat(error && " form-input_invalid"),
    "aria-label": label
  }, rest), options.map(function (opt) {
    return (0, _react2.jsx)("option", {
      value: opt.value,
      key: opt.option
    }, opt.option);
  })), (0, _react2.jsx)("div", {
    className: "text-field_msg"
  }, error && (0, _react2.jsx)("span", {
    className: "text-field_error-msg",
    "aria-live": "polite"
  }, error)));
};

exports.Select = Select;