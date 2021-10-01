"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const react_1 = __importDefault(require("react"));
const Select = (_a) => {
    var { label, options, error } = _a, rest = __rest(_a, ["label", "options", "error"]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("select", Object.assign({ className: `form-input-ele${error && " form-input_invalid"}`, "aria-label": label }, rest), options.map((opt) => (react_1.default.createElement("option", { value: opt.value, key: opt.option }, opt.option)))),
        react_1.default.createElement("div", { className: "text-field_msg" }, error && (react_1.default.createElement("span", { className: "text-field_error-msg", "aria-live": "polite" }, error)))));
};
exports.Select = Select;
