import styled from "styled-components";

import { ButtonStyledProps as Props, ButtonModes } from "./Button.types";

const ButtonStyled = styled.button<Props>`
  box-shadow: none;
  outline: none;
  background-color: none;
  border-radius: 0.4rem;
  cursor: pointer;
  color: ${(props: Props) =>
    props.buttonMode === ButtonModes.PRIMARY
      ? "var(--palette-h0s0l100)"
      : "var(--palette-primary)"};
  background-color: ${(props: Props) =>
    props.buttonMode === ButtonModes.PRIMARY
      ? "var(--palette-primary)"
      : "var(--palette-h0s0l100)"};
  border: ${(props: Props) =>
    props.buttonMode === ButtonModes.PRIMARY
      ? "none"
      : "1px solid var(--palette-primary)"};

  padding: 0.8rem 2.4rem;
  .Button {
  }
`;

export default ButtonStyled;
