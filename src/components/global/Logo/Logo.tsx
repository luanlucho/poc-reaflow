import React from "react";

import Styles from "./Logo.styles";
import { LogoProps as Props } from "./Logo.types";

import LogoSVG from "../../../../public/assets/images/logo.svg";

const Logo: React.FC<Props> = props => {
  return (
    <Styles className="Logo">
      <LogoSVG className="Logo__svg" />
    </Styles>
  );
};

export default Logo;
