import React from "react";

import Styles from "./Layout.styles";
import { LayoutProps as Props } from "./Layout.types";

const Layout: React.FC<Props> = props => {
  const { children } = props;

  return <Styles className="Layout">{children}</Styles>;
};

Layout.defaultProps = {};

export default Layout;
