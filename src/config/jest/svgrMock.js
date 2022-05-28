import React from "react";

const SvgrMock = React.forwardRef((props, ref) => (
  <span ref={ref} {...props} />
));
SvgrMock.displayName = "SVGRMock";

export const ReactComponent = SvgrMock;
export default SvgrMock;
