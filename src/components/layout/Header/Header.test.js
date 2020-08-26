import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from ".";

describe("Testing Header Component", () => {
  test("Render nav", () => {
    const { getByRole } = render(
      <Router>
        <Header />
      </Router>
    );
    const navElement = getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  test("Link to homepage", () => {
    const { getByRole } = render(
      <Router>
        <Header />
      </Router>
    );
    const linkElement = getByRole("link");
    expect(linkElement.getAttribute("href")).toEqual("/");
  });
  test("Render website logo", () => {
    const { getByAltText } = render(
      <Router>
        <Header />
      </Router>
    );
    const imgElement = getByAltText(/ies/i);
    expect(imgElement).toBeInTheDocument();
  });
});
