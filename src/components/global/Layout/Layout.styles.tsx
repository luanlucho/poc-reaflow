import styled from "styled-components";

import { LayoutStyledProps as Props } from "./Layout.types";

const LayoutStyled = styled.div<Props>`
  min-width: var(--sizes-page-minWidth);
  max-width: var(--sizes-page-maxWidth);

  .Layout {
  }
`;

export default LayoutStyled;
