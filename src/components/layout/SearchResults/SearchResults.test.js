import React from "react";
import { renderWithRedux } from "../../../tests/test-utils/reduxStore";
import SearchResults from ".";

describe("Testing SearchResults Component", () => {
  test("Renders with redux", () => {
    const { getByRole } = renderWithRedux(<SearchResults />);
    const headingElement = getByRole("heading");
    expect(headingElement).toBeInTheDocument();
  });
  test("Renders ShowsGrid component", () => {
    const { getByTestId } = renderWithRedux(<SearchResults />);
    const listElement = getByTestId("shows-grid");
    expect(listElement).toBeInTheDocument();
  });
  test("Render title of slider", () => {
    const { getByText } = renderWithRedux(<SearchResults />);
    const textElement = getByText(/Search results:/i);
    expect(textElement).toBeInTheDocument();
  });
});
