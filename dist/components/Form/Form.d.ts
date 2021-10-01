import React, { FormEvent, ReactNode } from "react";
declare type Props = {
    children: ReactNode;
    onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
};
/**
 * Form component that uses [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
 */
export declare const Form: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLFormElement>>;
export {};
