import React from "react";
import { render } from "@testing-library/react";
import Title from "./index";

it("Matches snapshot", () => {
  const { asFragment } = render(<Title name="test" />);
  expect(asFragment()).toMatchSnapshot();
});
