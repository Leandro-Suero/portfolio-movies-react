import React from "react";
import { useSelector } from "react-redux";

import ShowsGrid from "../../ShowsGrid";

export const SearchResults = () => {
  const searchResults = useSelector((state) => state.shows.searchResults);
  return (
    <section>
      <h1 className="text-2xl my-3 text-white">Search results: </h1>
      <ShowsGrid shows={searchResults} />
    </section>
  );
};

export default SearchResults;
