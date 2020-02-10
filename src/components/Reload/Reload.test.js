import React from "react";
import { render } from "@testing-library/react";
import Reload from "./index";
import { BrowserRouter as Router } from "react-router-dom";

it("Matches snapshot", () => {
  const { asFragment } = render(
    <Router>
      <Reload/>
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});