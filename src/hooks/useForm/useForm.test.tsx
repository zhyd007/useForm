import React, { FC } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form, TextField, Select } from "../../components";
import type { TextFieldProps } from "../../components";
import { useForm } from "./useForm";

enum ChildrenType {
  TextField,
  Select,
}

type TestingComponentProps = {
  init: any;
  recordKey: "username" | "select";
  childrenType: ChildrenType;
  opts: {
    label: string;
    name: string;
    minLength?: number;
    pattern?: string;
    required?: boolean;
  };
  selectOpts?: any;
};

const TestingComponent: FC<TestingComponentProps> = ({
  init,
  recordKey,
  childrenType,
  opts,
  selectOpts = {},
}) => {
  const { values, errors, onChange, handleSubmit } = useForm<
    Record<typeof recordKey, string>
  >({ ...init });

  const onSubmit = () => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {childrenType === ChildrenType.TextField ? (
          <TextField
            type="text"
            value={values.username}
            error={errors.username}
            {...opts}
            onChange={onChange}
          />
        ) : childrenType === ChildrenType.Select ? (
          <Select
            value={values.select}
            error={errors.select}
            options={selectOpts}
            {...opts}
            onChange={onChange}
          />
        ) : null}
        {/* <TextField {...formState.email} onChange={onChange} />
        <Select {...formState.select} onChange={onChange} />
        <TextField {...formState.password} onChange={onChange} /> */}
        <button type="submit" className="cta-button">
          Submit
        </button>
      </Form>
    </>
  );
};

describe("useForm", () => {
  it("renders inital form", () => {
    const key = "username";

    const opts: Pick<TextFieldProps, "label" | "name"> = {
      // required: true,
      label: "Your name",
      // minLength: 8,
      // pattern: "/[0-9]/",
      name: key,
    };
    render(
      <TestingComponent
        recordKey="username"
        init={{ [key]: "" }}
        childrenType={ChildrenType.TextField}
        opts={opts}
      />
    );

    expect(screen.getByTestId("simple-form")).toBeInTheDocument();
  });

  describe("values", () => {
    describe("TextField", () => {
      it("displays values when typing", () => {
        const key = "username";

        const opts: Pick<TextFieldProps, "label" | "name"> = {
          // required: true,
          label: "Your name",
          // minLength: 8,
          // pattern: "/[0-9]/",
          name: key,
        };
        render(
          <TestingComponent
            recordKey="username"
            init={{ [key]: "" }}
            childrenType={ChildrenType.TextField}
            opts={opts}
          />
        );

        userEvent.type(
          screen.getByTestId(/text-field/i),
          "test input has values"
        );

        expect(screen.getByTestId(/text-field/i)).toHaveValue(
          "test input has values"
        );
      });
    });

    describe("Select", () => {
      it.todo("");
    });
  });

  describe("errors", () => {
    describe("TextField", () => {
      it.todo(
        "displays valueMissing error when input is required but no values"
      );
      it("displays patternMismatch error when input values against its pattern", () => {
        const key = "username";

        const opts: Pick<
          TextFieldProps,
          "label" | "name" | "required" | "pattern"
        > = {
          required: true,
          label: "Your name",
          // minLength: 8,
          pattern: "/[0-9]/",
          name: key,
        };
        render(
          <TestingComponent
            recordKey="username"
            init={{ [key]: "" }}
            childrenType={ChildrenType.TextField}
            opts={opts}
          />
        );

        userEvent.type(screen.getByTestId("text-field"), "a");

        expect(screen.getByTestId("text-field")).toHaveValue("a");

        expect(screen.getByTestId("text-field-error")).toBeInTheDocument();

        screen.debug();
      });
      it.todo(
        "displays tooShort error when the length of input values is less than minLength"
      );
    });

    describe("Select", () => {
      it.todo("");
    });
  });

  it.todo("submits the data successfully");
});
