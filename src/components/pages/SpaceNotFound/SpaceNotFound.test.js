import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import SpaceNotFound from ".";

describe("Testing SpaceNotFound Component", () => {
  test("Render nav", () => {
    const { getByRole } = render(
      <Router>
        <SpaceNotFound />
      </Router>
    );
    const navElement = getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  test("Render title Page Not Found!", () => {
    const { getByText } = render(
      <Router>
        <SpaceNotFound />
      </Router>
    );
    const textElement = getByText(/Page Not Found!/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Render text Unable to find", () => {
    const { getByText } = render(
      <Router>
        <SpaceNotFound />
      </Router>
    );
    const textElement = getByText(/We are unable to find the page/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Link to homepage", () => {
    const { getByRole } = render(
      <Router>
        <SpaceNotFound />
      </Router>
    );
    const linkElement = getByRole("link");
    expect(linkElement.getAttribute("href")).toEqual("/");
  });
});
