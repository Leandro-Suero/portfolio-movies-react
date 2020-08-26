import React from "react";
import { render } from "@testing-library/react";
import Logo from ".";

describe("Testing Logo Component", () => {
  test("Render img with MOV", () => {
    const { getByAltText } = render(<Logo />);
    const imgElement = getByAltText(/mov/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Render img with SER", () => {
    const { getByAltText } = render(<Logo />);
    const imgElement = getByAltText(/ser/i);
    expect(imgElement).toBeInTheDocument();
  });
  test("Render img with IES", () => {
    const { getByAltText } = render(<Logo />);
    const imgElement = getByAltText(/ies/i);
    expect(imgElement).toBeInTheDocument();
  });
});
