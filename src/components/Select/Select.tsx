import React, { ChangeEvent, FC } from "react";
import type { Options } from "./types";

export type SelectProps = {
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

export const Select: FC<SelectProps> = ({ label, options, error, ...rest }) => {
  return (
    <>
      <select
        className={`form-input-ele${error && " form-input_invalid"}`}
        aria-label={label}
        {...rest}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.option}>
            {opt.option}
          </option>
        ))}
      </select>
      <div className="text-field_msg">
        {error && (
          <span className="text-field_error-msg" aria-live="polite">
            {error}
          </span>
        )}
      </div>
    </>
  );
};
