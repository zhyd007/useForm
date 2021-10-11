import { ChangeEvent, FormEvent, useState } from "react";

type Generic<T> = Record<keyof T, string>;

type ReturnType<T> = {
  values: Generic<T>;
  errors: Generic<T>;
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  /** used for form elements but not submit button. */
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleSubmit: (fn: Function) => (evt: FormEvent<HTMLFormElement>) => void;
};

/**
 * useForm hooks for controlled components.
 * @param initialValues initial form data values.
 * @returns an object contains `values`, `errors`, `onChange` and `handleSubmit` event handler.
 */
export function useForm<T>(initialValues: Generic<T>): ReturnType<T> {
  const [values, setValues] = useState<Generic<T>>(initialValues);
  const [errors, setErrors] = useState<Generic<T>>(() => {
    const initialErrors = Object.assign(initialValues);
    Object.keys(initialErrors).forEach((key) => (initialErrors[key] = ""));
    return initialErrors;
  });

  const _showError = (
    target: EventTarget & (HTMLInputElement | HTMLSelectElement)
  ) => {
    const { valueMissing, patternMismatch, tooShort } = target.validity;

    if (valueMissing) {
      setErrors({ ...errors, [target.name]: "empty value" });
    } else if (patternMismatch) {
      setErrors({
        ...errors,
        [target.name]: "pattern mismatch",
      });
    } else if (tooShort) {
      setErrors({ ...errors, [target.name]: "too short" });
    }
  };

  const onChange = (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({ ...values, [evt.target.name]: evt.target.value });

    if (evt.target.validity.valid) {
      setErrors({ ...errors, [evt.target.name]: "" });
    } else {
      _showError(evt.target);
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = (fn: Function) => (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const invalidElements: NodeListOf<HTMLInputElement | HTMLSelectElement> =
      evt.currentTarget.querySelectorAll(":invalid:not(form):not(fieldset)");

    if (invalidElements.length !== 0) {
      for (let i = 0; i < invalidElements.length; i++) {
        const ele = invalidElements[i];
        ele.addEventListener("invalid", ((evt: CustomEvent) => {
          evt.preventDefault(); // disable default validation messages and styles of input/select elements here.
        }) as EventListener);
      }

      invalidElements[0].focus();
      _showError(invalidElements[0]);
    }

    const isInvalid = evt.currentTarget.reportValidity() === false;

    if (isInvalid) {
      return;
    }

    // trigger custom callback fn.
    fn(evt);
  };

  return { values, errors, onChange, handleSubmit };
}
