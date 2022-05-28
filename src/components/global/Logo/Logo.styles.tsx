import styled from "styled-components";

import { LogoProps as Props } from "./Logo.types";
import CONSTANTS from "config/constants";

const { BREAKPOINTS } = CONSTANTS;
const { mobile } = BREAKPOINTS;

const LogoStyled = styled.div<Props>`
  .Logo {
    &__svg {
      height: 25vmin;
      pointer-events: none;
      padding-bottom: 3rem;

      @media (max-width: ${mobile}px) {
        min-height: 30vmin;
      }

      fill: var(--palette-primary);
    }
  }
`;

export default LogoStyled;
