import React, { FormEvent, forwardRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
};

type Ref = HTMLFormElement;

/**
 * Form component that uses [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).
 */
export const Form = forwardRef<Ref, Props>((props, ref) => {
  return (
    <form noValidate ref={ref} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
});
