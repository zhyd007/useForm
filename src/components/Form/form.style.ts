import { css } from "@emotion/react";

export const formStyle = css`
  display: flex;
  flex-direction: column;

  .form-input_invalid {
    border-color: var(--main-color-red);
  }

  .text-field_msg {
    margin-top: 0.125em;
    display: flex;
    flex-direction: column;
  }

  .text-field_error-msg {
    color: var(--main-color-red);
  }

  @media (min-width: 50em) {
    & {
      width: 30em;
    }
  }
`;
