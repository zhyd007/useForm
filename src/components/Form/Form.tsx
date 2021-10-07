/** @jsx jsx */
import React, { FC, FormEvent, ReactNode } from "react";
import { jsx } from "@emotion/react";
import { injectGlobal } from "@emotion/css";
import { formStyle } from "./form.style";

injectGlobal`
  :root {
    box-sizing: border-box;
    /* base font-size */
    font-size: 1em;
    /* ------- custom properites, aka css variables. ------- */
    --main-font: Arial, Helvetica, sans-serif;
    /* both text and background color */
    --main-color-blue: #286efa;
    --main-color-red: #f53c3c;
    /* only for text */
    --text-color-black: #333333;
    --text-color-white: #ffffff;
    --text-color-grey-primary: #777777;
    --text-color-grey-secondary: #aaaaaa;
    /* only for background */
    --bg-color-white: #f9f9f9;
    --bg-color-grey: #ededed;
    /* ------- ending ------- */
  }

  *,
  ::before,
  ::after {
    box-sizing: inherit;
  }

  body {
    font-family: var(--main-font);
    margin: 0;
  }

  body * + * {
    margin-top: 1.5em;
  }
`;

type FormProps = {
  children: ReactNode;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
};

/**
 * Form component that uses [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
 */
export const Form: FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form
      noValidate
      css={formStyle}
      onSubmit={onSubmit}
      data-testid="simple-form"
    >
      {children}
    </form>
  );
};
