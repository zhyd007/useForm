import { css } from "@emotion/react";

export const selectStyle = css`
  width: 100%;
  font-size: 0.875rem;
  color: var(--text-color-grey-primary);
  padding: 0.75em;
  border: 1px solid var(--bg-color-grey);
  border-radius: 0.5em;
  background-color: var(--bg-color-white);

  &:focus-visible {
    outline: unset;
  }

  @media (min-width: 50em) {
    & {
      height: 3.57em;
    }
  }
`;
