import React from "react";
import DetailsPage from "./index";
import renderWithRedux from "../../utils/renderWithRedux";
import { BrowserRouter as Router } from "react-router-dom";

it("Matches snapshot", () => {
  const { asFragment } = renderWithRedux(
    <Router>
      <DetailsPage />
    </Router>,
    { initialState: { raceReducer: { img: "test" } } }
  );
  expect(asFragment()).toMatchSnapshot();
});
