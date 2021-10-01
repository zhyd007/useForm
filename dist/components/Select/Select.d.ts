import { ChangeEvent, FC } from "react";
import type { Options } from "./types";
export declare type SelectProps = {
    /** if the field is required */
    required?: boolean;
    /** aria-label name */
    label: string;
    /** target name */
    name: string;
    /** option element values */
    options: Options;
    /** hold the input value */
    value: string;
    /** hold the input error */
    error: string;
    /** handle input change callback */
    onChange: (evt: ChangeEvent<HTMLSelectElement>) => void;
};
export declare const Select: FC<SelectProps>;
