"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _useForm = require("./useForm");

Object.keys(_useForm).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useForm[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useForm[key];
    }
  });
});