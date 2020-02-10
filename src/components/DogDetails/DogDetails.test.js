import React from "react";
import { render } from "@testing-library/react";
import DogDetails from "./index";
import { BrowserRouter as Router } from "react-router-dom";

it("Matches snapshot", () => {
  const { asFragment } = render(
    <Router>
      <DogDetails dogImg="test" dogName="test" />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("Without dogImage", () => {
  const { asFragment } = render(
    <Router>
      <DogDetails dogName="test" />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
