import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Home from "./components/pages/Home";
import GenericNotFound from "./components/pages/GenericNotFound";
import MovieDetail from "./components/pages/MovieDetail";
import SerieDetail from "./components/pages/SerieDetail";
import "./assets/tailwind.output.css";

function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tv/:id" component={SerieDetail} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route component={GenericNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
