import { createGlobalStyle } from "styled-components";

import cssVariables from "../util/cssVariables";
import animations from "./animations";
import base from "./base";
import typography from "./typography";
import themes from "styles/theme";

const getCSSVariables = (theme: any) => {
  const { functions, mixins, ...rest } = theme;
  return cssVariables(rest);
};

const GlobalStyle = createGlobalStyle`
    ${props => getCSSVariables(props.theme || themes.light)}
    ${base}
    ${typography}
    ${animations}
`;

export default GlobalStyle;
