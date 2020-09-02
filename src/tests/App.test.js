import React from "react";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import store from "../redux/store";
import App from "../App";
import Home from "../components/pages/Home";
import SpaceNotFound from "../components/pages/SpaceNotFound";

describe("Integration test: search serie flow", () => {
  test("Search for Supernatural serie", async () => {
    const { getByRole, findByText, findAllByAltText, getByAltText } = render(
      <App store={store} />
    );

    /* Home page */
    const searchElement = getByRole("searchbox");
    expect(searchElement).toBeInTheDocument();
    expect(searchElement).toHaveFocus();

    fireEvent.change(searchElement, { target: { value: "asdasdasd" } });
    const searchButton = getByRole("button");
    expect(searchButton).toBeInTheDocument();

    fireEvent.click(searchButton);

    /* Search results page */
    const noResultsText = await findByText(
      /There are no results for your query/
    );
    expect(noResultsText).toBeInTheDocument();

    const searchElement2 = getByRole("searchbox");
    expect(searchElement2).toBeInTheDocument();
    expect(searchElement2).toHaveFocus();

    fireEvent.change(searchElement2, { target: { value: "supernatural" } });
    fireEvent.keyPress(searchElement2, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
    });

    const resultsText = await findByText(/Search results:/);
    expect(resultsText).toBeInTheDocument();
    expect(noResultsText).not.toBeInTheDocument();

    const posterElement = await findAllByAltText(/Supernatural/i);
    expect(posterElement[0]).toBeInTheDocument();
    fireEvent.click(posterElement[0]);

    /* Serie detail page */
    expect(resultsText).not.toBeInTheDocument();

    const overviewText = await findByText(/Sam and Dean Winchester/i);
    expect(overviewText).toBeInTheDocument();

    const backArrow = getByAltText("Back arrow");
    expect(backArrow).toBeInTheDocument();
    fireEvent.click(backArrow);

    /* Search results page */
    const resultsText2 = await findByText(/Search results:/);
    expect(resultsText2).toBeInTheDocument();
    expect(overviewText).not.toBeInTheDocument();

    const logoHeader = getByAltText("ies");
    expect(logoHeader).toBeInTheDocument();
    fireEvent.click(logoHeader);

    /* Home page */
    expect(resultsText2).not.toBeInTheDocument();
    const homeText = await findByText(/Recommended Movies/i);
    expect(homeText).toBeInTheDocument();
  });

  test("Go to invalid page and return to Homepage", async () => {
    const history = createMemoryHistory();
    history.push("/");
    history.push("/some/bad/route");

    const { findByText, getByAltText } = render(
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={SpaceNotFound} />
          </Switch>
        </Router>
      </Provider>
    );

    /* 404 page, bad url */
    const homepageLink = await findByText(/back to home page/i);
    expect(homepageLink).toBeInTheDocument();

    const backArrow = getByAltText("Back arrow");
    expect(backArrow).toBeInTheDocument();
    fireEvent.click(backArrow);

    /* homepage */
    const homeText = await findByText(/Recommended Movies/i);
    expect(homeText).toBeInTheDocument();
    expect(homepageLink).not.toBeInTheDocument();
  });
});
