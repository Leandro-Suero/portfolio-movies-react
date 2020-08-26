import React from "react";
import { render } from "@testing-library/react";
import Footer from ".";

describe("Testing Footer Component", () => {
  test("Render img with TMDB logo", () => {
    const { getByAltText } = render(<Footer />);
    const imgElement = getByAltText(/The Movie DB/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Render text of API usage", () => {
    const { getByText } = render(<Footer />);
    const textElement = getByText(/This product uses/i);
    expect(textElement).toBeInTheDocument();
  });
});
