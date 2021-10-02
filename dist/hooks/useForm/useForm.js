"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useForm = useForm;

var _react = require("react");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * useForm hooks for controlled components.
 * @param initialValues initial form data values.
 * @returns an object contains `values`, `errors`, `onChange` and `handleSubmit` event handler.
 */
function useForm(initialValues) {
  var _useState = (0, _react.useState)(initialValues),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    var initialErrors = Object.assign(initialValues);
    Object.keys(initialErrors).forEach(function (key) {
      return initialErrors[key] = "";
    });
    return initialErrors;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _showError = function _showError(target) {
    var _target$validity = target.validity,
        valueMissing = _target$validity.valueMissing,
        patternMismatch = _target$validity.patternMismatch,
        tooShort = _target$validity.tooShort;

    if (valueMissing) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, target.name, "empty value")));
    } else if (patternMismatch) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, target.name, "Please enter a valid email address")));
    } else if (tooShort) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, target.name, "too short")));
    }
  };

  var onChange = function onChange(evt) {
    setValues(_objectSpread(_objectSpread({}, values), {}, _defineProperty({}, evt.target.name, evt.target.value)));

    if (evt.target.validity.valid) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, evt.target.name, "")));
    } else {
      _showError(evt.target);
    }
  };

  var handleSubmit = function handleSubmit(fn) {
    return function (evt) {
      evt.preventDefault();
      var invalidElements = evt.currentTarget.querySelectorAll(":invalid:not(form):not(fieldset)");

      if (invalidElements.length !== 0) {
        for (var i = 0; i < invalidElements.length; i++) {
          var ele = invalidElements[i];
          ele.addEventListener("invalid", function (evt) {
            evt.preventDefault(); // disable default validation messages and styles of input/select elements here.
          });
        }

        invalidElements[0].focus();

        _showError(invalidElements[0]);
      }

      var isInvalid = evt.currentTarget.reportValidity() === false;

      if (isInvalid) {
        return;
      } // trigger custom callback fn.


      fn(evt);
    };
  };

  return {
    values: values,
    errors: errors,
    onChange: onChange,
    handleSubmit: handleSubmit
  };
}