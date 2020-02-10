import React from "react";
import { render } from "@testing-library/react";
import SearchBar from "./index";

it("Matches snapshot", () => {
  const { asFragment } = render(<SearchBar/>);
  expect(asFragment()).toMatchSnapshot();
});

it("Matches snapshot", () => {
    const { asFragment } = render(<SearchBar dogList={["test"]} />);
    expect(asFragment()).toMatchSnapshot();
  });