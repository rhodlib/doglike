import React from "react";
import { render } from "@testing-library/react";
import Card from "./index";
import { BrowserRouter as Router } from "react-router-dom";

it("Matches snapshot", () => {
  const { asFragment } = render(
    <Router>
      <Card dogName={"test"} />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
