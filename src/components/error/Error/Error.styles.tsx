import styled from "styled-components";

import { ErrorStyledProps as Props } from "./Error.types";

const ErrorStyled = styled.div<Props>`
  min-width: var(--sizes-page-minWidth);
  max-width: var(--sizes-page-maxWidth);
  min-height: var(--sizes-page-minHeight);
  display: flex;
  flex-direction: column;

  .Error {
    &__header {
    }

    &__main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__icon {
      stroke: var(--palette-primary);
      fill: var(--palette-primary);
    }

    &__cta {
      margin-top: 2.4rem;
    }

    &__footer {
    }
  }
`;

export default ErrorStyled;
