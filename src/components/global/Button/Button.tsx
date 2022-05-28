import React from "react";

import Styles from "./Button.styles";
import { ButtonProps as Props, ButtonModes } from "./Button.types";

const Button: React.FC<Props> = props => {
  const { onClick, mode = ButtonModes.PRIMARY, className } = props;
  return (
    <Styles
      className={`Button ${className}`}
      onClick={onClick}
      buttonMode={mode}
    >
      {props.children}
    </Styles>
  );
};

Button.defaultProps = {
  className: ""
};

export default Button;
