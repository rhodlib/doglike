import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("Matches snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
