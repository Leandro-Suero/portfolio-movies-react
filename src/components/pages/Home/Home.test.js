import React from "react";
import { renderWithRedux } from "../../../tests/test-utils/reduxStore";
import { BrowserRouter as Router } from "react-router-dom";
import Home from ".";

describe("Testing Home Component", () => {
  test("Renders with redux", () => {
    const { getByRole, debug } = renderWithRedux(
      <Router>
        <Home />
      </Router>
    );
    const headingElement = getByRole("main");
    expect(headingElement).toBeInTheDocument();
  });
  test("Renders Header component", () => {
    const { getByRole } = renderWithRedux(
      <Router>
        <Home />
      </Router>
    );
    const navElement = getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  test("Renders Footer component", () => {
    const { getByAltText } = renderWithRedux(
      <Router>
        <Home />
      </Router>
    );
    const imgElement = getByAltText(/The Movie DB/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Renders MultiSearch component", () => {
    const { getByRole } = renderWithRedux(
      <Router>
        <Home />
      </Router>
    );
    const searchElement = getByRole("searchbox");
    expect(searchElement).toBeInTheDocument();
  });
  test("Renders RecommendedMovies component", () => {
    const { getByText } = renderWithRedux(
      <Router>
        <Home />
      </Router>
    );
    const textElement = getByText(/Recommended Movies/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders RecommendedSeries component", () => {
    const { getByText } = renderWithRedux(
      <Router>
        <Home />
      </Router>
    );
    const textElement = getByText(/Recommended Series/i);
    expect(textElement).toBeInTheDocument();
  });
});
