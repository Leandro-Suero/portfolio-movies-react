import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MultiSearch from "../MultiSearch";
import RecommendedMovies from "../layout/RecommendedMovies";
import RecommendedSeries from "../layout/RecommendedSeries";
import SearchResults from "../layout/SearchResults";
import { getApiConfig } from "../../redux/actions/movieActions";

export const Home = ({ config, getApiConfig, searchResults }) => {
  useEffect(() => {
    //if no config already
    if (Object.keys(config).length === 0 && config.constructor === Object) {
      getApiConfig();
    }
  });

  return (
    <React.Fragment>
      <Header />
      <div className="w-11/12 sm:w-9/12 md:w-11/12 lg:w-4/5 mx-auto">
        <MultiSearch />
        {searchResults.length === 0 ? (
          <React.Fragment>
            <br />
            <RecommendedMovies />
            <br />
            <RecommendedSeries />
          </React.Fragment>
        ) : (
          <SearchResults />
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

Home.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
