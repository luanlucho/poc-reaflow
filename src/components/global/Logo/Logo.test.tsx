import React from "react";

import Logo from "./Logo";
import { render } from "setupTests";

describe("Logo", () => {
  it("renders without crashing", () => {
    render(<Logo className="Logo" />);
  });
});
