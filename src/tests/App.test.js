import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "../App";
import store from "../redux/store";

describe("Integration test: search serie flow", () => {
  test("Search for Supernatural serie", async () => {
    const { getByRole, findByText, findAllByAltText } = render(
      <App store={store} />
    );
    const searchElement = getByRole("searchbox");
    expect(searchElement).toBeInTheDocument();
    expect(searchElement).toHaveFocus();

    fireEvent.change(searchElement, { target: { value: "asdasdasd" } });
    const searchButton = getByRole("button");
    expect(searchButton).toBeInTheDocument();

    fireEvent.click(searchButton);

    const noResultsText = await findByText(
      /There are no results for your query/
    );
    expect(noResultsText).toBeInTheDocument();

    const searchElement2 = getByRole("searchbox");
    expect(searchElement2).toBeInTheDocument();
    expect(searchElement2).toHaveFocus();

    fireEvent.change(searchElement2, { target: { value: "supernatural" } });
    const searchButton2 = getByRole("button");
    fireEvent.click(searchButton2);

    const resultsText = await findByText(/Search results:/);
    expect(resultsText).toBeInTheDocument();

    const posterElement = await findAllByAltText(/Supernatural/i);
    expect(posterElement[0]).toBeInTheDocument();
    fireEvent.click(posterElement[0]);

    const overviewText = await findByText(/Sam and Dean Winchester/i);
    expect(overviewText).toBeInTheDocument();
  });
});
