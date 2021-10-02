import { css } from "@emotion/react";

export const textFieldStyle = css`
  position: relative;

  .text-field_input {
    font-size: 0.875rem;
    padding: 0.75em;
    border: 1px solid var(--bg-color-grey);
    border-radius: 0.5em;
    width: 100%;
    background-color: var(--bg-color-white);
  }
  .text-field_input:focus-visible {
    outline: unset;
  }

  @media (min-width: 50em) {
    .text-field_input {
      height: 3.57em;
      padding: 0.75em 1.07em;
    }
  }

  .text-field_floating-label {
    color: var(--text-color-grey-primary);
    position: absolute;
    margin-top: 0;
    font-size: 1rem;
    top: 0.65em;
    right: 0;
    bottom: 0;
    left: 0.65em;
    transition-property: all;
    transition-duration: 100ms;
    background-color: transparent;
  }

  @media (min-width: 50em) {
    .text-field_floating-label {
      top: 1em;
      left: 1.07em;
    }
  }

  .text-field_input:focus + .text-field_floating-label {
    font-size: 0.75rem;
    top: -0.5em;
    width: max-content;
    height: max-content;
    padding: 0 0.25em;
    background-color: var(--bg-color-white);
  }

  .text-field_floating-label-outlined {
    font-size: 0.75rem;
    top: -0.5em;
    background-color: var(--text-color-white);
    width: max-content;
    height: max-content;
    padding: 0 0.25em;
  }

  .text-field_floating-label-invalid {
    color: var(--main-color-red);
    background-color: var(--bg-color-white);
  }

  .text-field_helper-msg {
    margin-top: 0;
    font-size: 0.75rem;
    color: var(--text-color-grey-primary);
  }
`;
