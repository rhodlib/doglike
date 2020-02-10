import React from "react";
import { render } from "@testing-library/react";
import Back from "./index";
import { BrowserRouter as Router } from "react-router-dom";

it("Matches snapshot", () => {
  const { asFragment } = render(
    <Router>
      <Back />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
