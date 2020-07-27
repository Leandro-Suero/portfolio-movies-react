import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";

import Home from "./components/pages/Home";
import GenericNotFound from "./components/pages/GenericNotFound";
import "./assets/tailwind.output.css";

function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/item/:id" component={ItemDetail} /> */}
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
