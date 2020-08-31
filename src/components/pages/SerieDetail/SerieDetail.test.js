import React from "react";
import { renderWithRedux } from "../../../tests/test-utils/reduxStore";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import SerieDetail from ".";

// jest.mock("./router");
const history = createMemoryHistory();
history.push("/tv/1622"); //serie: Supernatural

describe("Testing SerieDetail Component", () => {
  test("Renders with redux", async () => {
    const { findByTestId } = renderWithRedux(
      <Router history={history}>
        <Route path="/tv/:id">
          <SerieDetail />
        </Route>
      </Router>
    );
    const sectionElement = await findByTestId("serie-detail");
    expect(sectionElement).toBeInTheDocument();
  });
  test("Renders Back button", async () => {
    const { findByRole } = renderWithRedux(
      <Router history={history}>
        <Route path="/tv/:id">
          <SerieDetail />
        </Route>
      </Router>
    );
    const navElement = await findByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  test("Renders poster image", async () => {
    const { findByAltText } = renderWithRedux(
      <Router history={history}>
        <Route path="/tv/:id">
          <SerieDetail />
        </Route>
      </Router>
    );
    const imgElement = await findByAltText(/poster/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Renders title", async () => {
    const { findAllByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/tv/:id">
          <SerieDetail />
        </Route>
      </Router>
    );
    const textElement = await findAllByText(/Supernatural/i);
    expect(textElement[0]).toBeInTheDocument();
  });
  test("Renders stars review", async () => {
    const { findByTestId } = renderWithRedux(
      <Router history={history}>
        <Route path="/tv/:id">
          <SerieDetail />
        </Route>
      </Router>
    );
    const sectionElement = await findByTestId("stars-review");
    expect(sectionElement).toBeInTheDocument();
  });
  test("Renders episodes details", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/tv/:id">
          <SerieDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/45mins/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders info details", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/tv/:id">
          <SerieDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/Sam and Dean Winchester/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders website link", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/tv/:id">
          <SerieDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/Visit website/i);
    expect(textElement).toBeInTheDocument();
  });
});
