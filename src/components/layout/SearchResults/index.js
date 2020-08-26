import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ShowsGrid from "../../ShowsGrid";

export const SearchResults = ({ searchResults }) => {
  return (
    <section>
      <h1 className="text-2xl my-3 text-white">Search results: </h1>
      <ShowsGrid shows={searchResults} />
    </section>
  );
};

SearchResults.propTypes = {
  searchResults: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  searchResults: state.shows.searchResults,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
