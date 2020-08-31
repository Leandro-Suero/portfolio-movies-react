import React from "react";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import "@testing-library/jest-dom/extend-expect";

import { renderWithRedux } from "../../../tests/test-utils/reduxStore";
import PersonDetail from ".";

// jest.mock("./router");
const history = createMemoryHistory();
history.push("/person/488"); //Person: Steven Spielberg

describe("Testing PersonDetail Component", () => {
  test("Renders with redux", async () => {
    const { findByTestId } = renderWithRedux(
      <Router history={history}>
        <Route path="/person/:id">
          <PersonDetail />
        </Route>
      </Router>
    );
    const sectionElement = await findByTestId("person-detail");
    expect(sectionElement).toBeInTheDocument();
  });
  test("Renders Back button", async () => {
    const { findByRole } = renderWithRedux(
      <Router history={history}>
        <Route path="/person/:id">
          <PersonDetail />
        </Route>
      </Router>
    );
    const navElement = await findByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });
  test("Renders title", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/person/:id">
          <PersonDetail />
        </Route>
      </Router>
    );
    const headingElement = await findByText(/^Steven Spielberg$/);
    expect(headingElement).toBeInTheDocument();
  });
  test("Renders poster image", async () => {
    const { findByAltText } = renderWithRedux(
      <Router history={history}>
        <Route path="/person/:id">
          <PersonDetail />
        </Route>
      </Router>
    );
    const imgElement = await findByAltText(/poster/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Renders info details", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/person/:id">
          <PersonDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/Known for:/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders bio", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/person/:id">
          <PersonDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/Biography/i);
    expect(textElement).toBeInTheDocument();
  });
  test("Renders bio information", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/person/:id">
          <PersonDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(
      /He co-founded Amblin Entertainment and DreamWorks Pictures/i
    );
    expect(textElement).toBeInTheDocument();
  });
  test("Renders website link", async () => {
    const { findByText } = renderWithRedux(
      <Router history={history}>
        <Route path="/person/:id">
          <PersonDetail />
        </Route>
      </Router>
    );
    const textElement = await findByText(/check personal website/i);
    expect(textElement).toBeInTheDocument();
  });
});
