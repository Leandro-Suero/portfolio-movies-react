import React from "react";
import { renderWithRedux } from "../../../tests/test-utils/reduxStore";
import RecommendedSeries from ".";

describe("Testing RecommendedSeries Component", () => {
  test("Renders with redux", () => {
    const { getByRole } = renderWithRedux(<RecommendedSeries />);
    const listElement = getByRole("list");
    expect(listElement).toBeInTheDocument();
  });
  test("Render title of slider", () => {
    const { getByText } = renderWithRedux(<RecommendedSeries />);
    const textElement = getByText(/Recommended Series/i);
    expect(textElement).toBeInTheDocument();
  });
});
