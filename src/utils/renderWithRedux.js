import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "../core/reducers";
import { initialState as defaultInitialState } from "../core";
import { render } from "@testing-library/react";
import reduxThunk from "redux-thunk";

/**
 * This is a Util to render test with redux.
 */
export const renderWithRedux = (
  ui,
  {
    initialState = defaultInitialState,
    store = createStore(reducers, initialState, applyMiddleware(reduxThunk))
  } = {}
) => ({ ...render(<Provider store={store}>{ui}</Provider>), store });

export default renderWithRedux;
