import React from "react";
import { render } from "@testing-library/react";
import CardList from "./index";
import { BrowserRouter as Router } from "react-router-dom";

it("Matches snapshot", () => {
  const { asFragment } = render(
    <Router>
      <CardList dogList={["test"]} />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});

it("Without doglist", () => {
  const { asFragment } = render(
    <Router>
      <CardList />
    </Router>
  );
  expect(asFragment()).toMatchSnapshot();
});
