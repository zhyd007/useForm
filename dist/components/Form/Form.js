"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const react_1 = __importDefault(require("react"));
/**
 * Form component that uses [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
 */
const Form = ({ onSubmit, children }) => {
    return (react_1.default.createElement("form", { noValidate: true, onSubmit: onSubmit }, children));
};
exports.Form = Form;
