import React from "react";
import HomePage from "./index";
import renderWithRedux from "../../utils/renderWithRedux";

it("Matches snapshot", () => {
  const { asFragment } = renderWithRedux(<HomePage />);
  expect(asFragment()).toMatchSnapshot();
});
