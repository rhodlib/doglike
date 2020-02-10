import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import DetailsPage from "./containers/DetailsPage";
import HomePage from "./containers/HomePage";
import { Provider } from "react-redux";
import store from "./core";

/**
 * App Component.
 */
export const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact strict path="/post/:dogname">
          <DetailsPage />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
