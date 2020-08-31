import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import { renderWithRedux } from "../../../tests/test-utils/reduxStore";
import MovieDetail from ".";

// jest.mock("./router");
const history = createMemoryHistory();
history.push("/movie/5548"); //Movie: RoboCop

describe("Testing MovieDetail Component", () => {
  test("Renders with redux", async () => {
    const { findByTestId } = renderWithRedux(
      <Router history={history}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Router>
    );
    const sectionElement = await findByTestId("movie-detail");
    expect(sectionElement).toBeInTheDocument();
  });
  test("Renders Back button", async () => {
    const { findByRole } = renderWithRedux(
      <Router history={history}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Router>
    );
    const navElement = await findByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  test("Renders poster image", async () => {
    const { findByAltText } = renderWithRedux(
      <Router history={history}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Router>
    );
    const imgElement = await findByAltText(/poster/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Renders title", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/^RoboCop$/);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders Language details", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/Language/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders Budget details", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/Budget/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders stars review", async () => {
    const { findByTestId } = renderWithRedux(
      <Router history={history}>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
      </Router>
    );
    const sectionElement = await findByTestId("stars-review");
    expect(sectionElement).toBeInTheDocument();
  });
});
