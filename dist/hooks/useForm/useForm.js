"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useForm = void 0;
const react_1 = require("react");
/**
 * useForm hooks for controlled components.
 * @param initialValues initial form data values.
 * @returns an object contains `values`, `errors`, `onChange` and `handleSubmit` event handler.
 */
function useForm(initialValues) {
    const [values, setValues] = (0, react_1.useState)(initialValues);
    const [errors, setErrors] = (0, react_1.useState)(() => {
        const initialErrors = Object.assign(initialValues);
        Object.keys(initialErrors).forEach((key) => (initialErrors[key] = ""));
        return initialErrors;
    });
    const _showError = (target) => {
        const { valueMissing, patternMismatch, tooShort } = target.validity;
        if (valueMissing) {
            setErrors(Object.assign(Object.assign({}, errors), { [target.name]: "empty value" }));
        }
        else if (patternMismatch) {
            setErrors(Object.assign(Object.assign({}, errors), { [target.name]: "Please enter a valid email address" }));
        }
        else if (tooShort) {
            setErrors(Object.assign(Object.assign({}, errors), { [target.name]: "too short" }));
        }
    };
    const onChange = (evt) => {
        setValues(Object.assign(Object.assign({}, values), { [evt.target.name]: evt.target.value }));
        if (evt.target.validity.valid) {
            setErrors(Object.assign(Object.assign({}, errors), { [evt.target.name]: "" }));
        }
        else {
            _showError(evt.target);
        }
    };
    const handleSubmit = (fn) => (evt) => {
        evt.preventDefault();
        const invalidElements = evt.currentTarget.querySelectorAll(".form-input-ele:invalid");
        if (invalidElements.length !== 0) {
            for (let i = 0; i < invalidElements.length; i++) {
                const ele = invalidElements[i];
                ele.addEventListener("invalid", (evt) => {
                    evt.preventDefault(); // disable default validation messages and styles of input/select elements here.
                });
            }
            invalidElements[0].focus();
            _showError(invalidElements[0]);
        }
        // trigger custom callback fn.
        fn(evt);
    };
    return { values, errors, onChange, handleSubmit };
}
exports.useForm = useForm;
