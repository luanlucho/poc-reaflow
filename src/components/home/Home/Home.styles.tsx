import styled from "styled-components";

import { HomeStyledProps as Props } from "./Home.types";

const HomeStyled = styled.div<Props>`
  .Home {
    &__header {
    }

    &__main {
      display: flex;
    }

    &__footer {
    }
  }
`;

export default HomeStyled;
