import React from "react";

import Error from "./Error";
import { render } from "setupTests";

describe("Error page", () => {
  it("renders without crashing", () => {
    render(<Error />);
  });
});
