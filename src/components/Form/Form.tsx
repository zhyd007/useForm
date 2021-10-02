import React, { FC, FormEvent, ReactNode } from "react";

type FormProps = {
  children: ReactNode;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
};

/**
 * Form component that uses [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
 */
export const Form: FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form noValidate onSubmit={onSubmit}>
      {children}
    </form>
  );
};
