import React from "react";
import { renderWithRedux } from "../../../tests/test-utils/reduxStore";
import RecommendedMovies from ".";

describe("Testing RecommendedMovies Component", () => {
  test("Renders with redux", () => {
    const { getByRole } = renderWithRedux(<RecommendedMovies />);
    const listElement = getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("Render title of slider", () => {
    const { getByText } = renderWithRedux(<RecommendedMovies />);
    const textElement = getByText(/Recommended Movies/i);
    expect(textElement).toBeInTheDocument();
  });
});
