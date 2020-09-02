import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderWithRedux } from "../../../tests/test-utils/reduxStore";
import Search from ".";

describe("Testing Search Component", () => {
  test("Renders with redux", () => {
    const { getByRole } = renderWithRedux(
      <Router>
        <Search />
      </Router>
    );
    const headingElement = getByRole("main");
    expect(headingElement).toBeInTheDocument();
  });
  test("Renders Header component", () => {
    const { getByRole } = renderWithRedux(
      <Router>
        <Search />
      </Router>
    );
    const navElement = getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  test("Renders Footer component", () => {
    const { getByAltText } = renderWithRedux(
      <Router>
        <Search />
      </Router>
    );
    const imgElement = getByAltText(/The Movie DB/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Renders MultiSearch component", () => {
    const { getByRole } = renderWithRedux(
      <Router>
        <Search />
      </Router>
    );
    const searchElement = getByRole("searchbox");
    expect(searchElement).toBeInTheDocument();
    const searchButton = getByRole("button");
    expect(searchButton).toBeInTheDocument();
    const searchSelect = getByRole("combobox");
    expect(searchSelect).toBeInTheDocument();
  });
  test("Renders results not found", () => {
    const { getByText } = renderWithRedux(
      <Router>
        <Search />
      </Router>
    );
    const textElement = getByText(/There are no results/i);
    expect(textElement).toBeInTheDocument();
  });
});
