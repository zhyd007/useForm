import React from "react";

import { useForm, Form, Select, TextField } from "@zhyd1997/use-form-hooks";
import type { SelectProps, TextFieldProps } from "@zhyd1997/use-form-hooks";

export type Options = {
  value: string;
  option: string;
}[];

const options: Options = [
  { value: "", option: "I would describe my user type as" },
  { value: "0", option: "Developer" },
  { value: "1", option: "Other" },
];

export type InitialFormState = {
  username: string;
  email: string;
  role: string;
  password: string;
};

type FormState = {
  [K in keyof Omit<InitialFormState, "role">]: Omit<TextFieldProps, "onChange">;
} & { select: Omit<SelectProps, "onChange"> };

export function App() {
  const { values, errors, onChange, handleSubmit } = useForm<InitialFormState>({
    username: "",
    email: "",
    role: "",
    password: "",
  });

  const onSubmit = () => {
    alert(JSON.stringify(values));
  };

  const formState: FormState = {
    username: {
      required: true,
      label: "Your name",
      type: "text",
      name: "username",
      value: values.username,
      error: errors.username,
    },
    email: {
      required: true,
      label: "Email address",
      type: "email",
      name: "email",
      // @see https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address
      pattern:
        "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$",
      value: values.email,
      error: errors.email,
    },
    select: {
      required: true,
      label: "role",
      name: "role",
      options,
      value: values.role,
      error: errors.role,
    },
    password: {
      required: true,
      label: "Password",
      type: "password",
      name: "password",
      value: values.password,
      error: errors.password,
      minLength: 8,
      helperText: "Minimum 8 characters",
    },
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...formState.username} onChange={onChange} />
        <TextField {...formState.email} onChange={onChange} />
        <Select {...formState.select} onChange={onChange} />
        <TextField {...formState.password} onChange={onChange} />
        <button type="submit" className="cta-button">
          Next
        </button>
      </Form>
    </div>
  );
}
