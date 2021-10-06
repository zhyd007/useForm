import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form, TextField } from "../../components";
import type { TextFieldProps } from "../../components";
import { useForm } from "./useForm";

const TestingComponent = () => {
  const { values, errors, onChange, handleSubmit } = useForm<
    Record<"username", string>
  >({
    username: "",
  });

  const formState: Record<"username", Omit<TextFieldProps, "onChange">> = {
    username: {
      required: true,
      label: "Your name",
      minLength: 8,
      // pattern: "/[0-9]/",
      type: "text",
      name: "username",
      value: values.username,
      error: errors.username,
    },
  };

  const onSubmit = () => {
    alert(JSON.stringify(values));
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField {...formState.username} onChange={onChange} />
        {/* <TextField {...formState.email} onChange={onChange} />
        <Select {...formState.select} onChange={onChange} />
        <TextField {...formState.password} onChange={onChange} /> */}
        <button type="submit" className="cta-button">
          next
        </button>
      </Form>
    </>
  );
};

describe("useForm", () => {
  it("renders inital form", () => {
    render(<TestingComponent />);

    expect(screen.getByTestId("simple-form")).toBeInTheDocument();
  });

  describe("values", () => {
    describe("TextField", () => {
      it("displays values when typing", () => {
        render(<TestingComponent />);

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
      it("displays valueMissing error when input is required but no values", () => {
        render(<TestingComponent />);

        // userEvent.type(screen.getByTestId("text-field"), "a");

        // expect(screen.getByTestId("text-field")).toHaveValue("a");

        // expect(screen.getByTestId("text-field-error")).toBeInTheDocument();

        screen.debug();
      });
      it("displays patternMismatch error when input values against its pattern", () => {
        render(<TestingComponent />);

        // userEvent.type(screen.getByTestId("text-field"), "a");

        // expect(screen.getByTestId("text-field")).toHaveValue("a");

        // expect(screen.getByTestId("text-field-error")).toBeInTheDocument();

        screen.debug();
      });
      it("displays tooShort error when the length of input values is less than minLength", () => {
        render(<TestingComponent />);

        // userEvent.type(screen.getByTestId("text-field"), "a");

        // expect(screen.getByTestId("text-field")).toHaveValue("a");

        // expect(screen.getByTestId("text-field-error")).toBeInTheDocument();

        screen.debug();
      });
    });

    describe("Select", () => {
      it.todo("");
    });
  });

  it.todo("submits the data successfully");
});
