"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = void 0;
const react_1 = __importStar(require("react"));
const TextField = (_a) => {
    var { label, error, helperText = "" } = _a, rest = __rest(_a, ["label", "error", "helperText"]);
    const { value } = rest;
    const [showTrailing, setShowTrailing] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        if (value && !showTrailing) {
            setShowTrailing(true);
        }
    }, [value, showTrailing]);
    return (react_1.default.createElement("label", { className: "text-field-outlined" },
        react_1.default.createElement("input", Object.assign({ className: `form-input-ele text-field_input${error && " form-input_invalid"}`, "aria-labelledby": "text-field_label" }, rest)),
        react_1.default.createElement("span", { className: `text-field_floating-label${(value || error) && " text-field_floating-label-outlined"}${error && " text-field_floating-label-invalid"}`, id: "text-field_label" }, label),
        react_1.default.createElement("div", { className: "text-field_msg" },
            error && (react_1.default.createElement("span", { className: "text-field_error-msg", "aria-live": "polite" }, error)),
            helperText && (react_1.default.createElement("small", { className: "text-field_helper-msg" }, helperText)))));
};
exports.TextField = TextField;
