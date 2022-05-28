import React from "react";

import Home from "./Home";
import { render } from "setupTests";

describe("Home page", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });
});
