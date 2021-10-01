import { ChangeEvent, FormEvent } from "react";
declare type Generic<T> = Record<keyof T, string>;
declare type ReturnType<T> = {
    values: Generic<T>;
    errors: Generic<T>;
    onChange: (evt: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    /** used for form elements but not submit button. */
    handleSubmit: (fn: Function) => (evt: FormEvent<HTMLFormElement>) => void;
};
/**
 * useForm hooks for controlled components.
 * @param initialValues initial form data values.
 * @returns an object contains `values`, `errors`, `onChange` and `handleSubmit` event handler.
 */
export declare function useForm<T>(initialValues: Generic<T>): ReturnType<T>;
export {};
