import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import SpaceNotFound from "./components/pages/SpaceNotFound";
import MovieDetail from "./components/pages/MovieDetail";
import SerieDetail from "./components/pages/SerieDetail";
import PersonDetail from "./components/pages/PersonDetail";
import "./assets/tailwind.output.css";

function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/tv/:id" component={SerieDetail} />
          <Route exact path="/movie/:id" component={MovieDetail} />
          <Route exact path="/person/:id" component={PersonDetail} />
          <Route component={SpaceNotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}
App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
