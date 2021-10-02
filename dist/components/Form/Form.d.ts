/** @jsx jsx */
import { FC, FormEvent, ReactNode } from "react";
declare type FormProps = {
    children: ReactNode;
    onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
};
/**
 * Form component that uses [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
 */
export declare const Form: FC<FormProps>;
export {};
