[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
![NPM](https://img.shields.io/npm/l/@zhyd1997/use-form-hooks)
![npm (scoped)](https://img.shields.io/npm/v/@zhyd1997/use-form-hooks)
[![codecov](https://codecov.io/gh/zhyd1997/useForm/branch/main/graph/badge.svg?token=8VLNN86IK0)](https://codecov.io/gh/zhyd1997/useForm)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

![npm](https://img.shields.io/npm/dw/@zhyd1997/use-form-hooks?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/@zhyd1997/use-form-hooks?style=for-the-badge)
![npm](https://img.shields.io/npm/dt/@zhyd1997/use-form-hooks?style=for-the-badge)

> Design useForm hooks and related components.

Demo: [CodeSandbox](https://codesandbox.io/s/blissful-browser-fop66?file=/src/components/BusinessForm.tsx)

# Features

- Support 4 types of input elements: `text`, `email`, `password` and `select`;
- Controlled Components;
- Validate form using [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation).

# Install

```bash
  # using npm
  npm install @zhyd1997/use-form
  # or using yarn
  yarn add @zhyd1997/use-form
```

# Usage

```jsx
import React from "react";
import { useForm, Form, Select, TextField } from "@zhyd1997/use-form-hooks";
import type { SelectProps, TextFieldProps } from "@zhyd1997/use-form-hooks";

function MyForm() {
  const { values, errors, onChange, handleSubmit } = useForm<InitialFormState>({
    username: "",
    email: "",
    role: "",
    password: ""
  });

  const onSubmit = () => {
    alert(JSON.stringify(values));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...formState.username} onChange={onChange} />
        <TextField {...formState.email} onChange={onChange} />
        <Select {...formState.select} onChange={onChange} />
        <TextField {...formState.password} onChange={onChange} />
        <button type="submit" className="cta-button">
          Submit
        </button>
      </Form>
    </div>
  );
}
```
