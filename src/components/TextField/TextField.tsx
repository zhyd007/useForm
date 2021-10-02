/** @jsx jsx */
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { jsx } from "@emotion/react";
import { textFieldStyle } from "./textField.style";

export type TextFieldProps = {
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

export const TextField: FC<TextFieldProps> = ({
  label,
  error,
  helperText = "",
  ...rest
}) => {
  const { value } = rest;
  const [showTrailing, setShowTrailing] = useState<boolean>(false);

  useEffect(() => {
    if (value && !showTrailing) {
      setShowTrailing(true);
    }
  }, [value, showTrailing]);

  return (
    <label css={textFieldStyle}>
      <input
        className={`form-input-ele text-field_input${
          error && " form-input_invalid"
        }`}
        aria-labelledby="text-field_label"
        {...rest}
      />
      {/* this className is hard to handle by react state. */}
      <span
        className={`text-field_floating-label${
          (value || error) && " text-field_floating-label-outlined"
        }${error && " text-field_floating-label-invalid"}`}
        id="text-field_label"
      >
        {label}
      </span>
      <div className="text-field_msg">
        {error && (
          <span className="text-field_error-msg" aria-live="polite">
            {error}
          </span>
        )}
        {helperText && (
          <small className="text-field_helper-msg">{helperText}</small>
        )}
      </div>
    </label>
  );
};
