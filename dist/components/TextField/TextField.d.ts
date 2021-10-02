import { ChangeEvent, FC } from "react";
export declare type TextFieldProps = {
    /** if the field is required */
    required?: boolean;
    /** label name */
    label: string;
    /** input type attribute */
    type: "text" | "email" | "password";
    /** target name */
    name: string;
    /** min length */
    minLength?: number;
    /** validation pattern */
    pattern?: string;
    /** helper massage */
    helperText?: string;
    /** hold the input value */
    value: string;
    /** hold the input error */
    error: string;
    /** handle input change callback */
    onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
};
export declare const TextField: FC<TextFieldProps>;
