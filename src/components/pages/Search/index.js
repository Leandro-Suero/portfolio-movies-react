import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import MultiSearch from "../../MultiSearch";
import SearchResults from "../../layout/SearchResults";
import { getApiConfig } from "../../../redux/actions/movieActions";
import { useConfig } from "../../../hooks/useConfig";

export const Search = ({ config, getApiConfig, searchResults }) => {
  useConfig(config, getApiConfig);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div
        className="w-11/12 sm:w-9/12 md:w-11/12 lg:w-4/5 mx-auto"
        style={{ flex: "1 0 auto" }}
      >
        <MultiSearch />
        {searchResults.length === 0 ? (
          <h2 className="text-white text-base my-8 text-center">
            There are no results for your query, sorry.
          </h2>
        ) : (
          <SearchResults />
        )}
      </div>
      <Footer className="flex-shrink-0" />
    </main>
  );
};

Search.propTypes = {
  config: PropTypes.object.isRequired,
  searchResults: PropTypes.array.isRequired,
  getApiConfig: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.shows.config,
  searchResults: state.shows.searchResults,
});

const mapDispatchToProps = {
  getApiConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
