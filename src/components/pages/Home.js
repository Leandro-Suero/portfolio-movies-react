import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import MultiSearch from "../MultiSearch";
import RecommendedMovies from "../layout/RecommendedMovies";
import RecommendedSeries from "../layout/RecommendedSeries";
import { getApiConfig } from "../../redux/actions/movieActions";

export const Home = ({ config, getApiConfig }) => {
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
        <React.Fragment>
          <br />
          <RecommendedMovies />
          <br />
          <RecommendedSeries />
        </React.Fragment>
      </div>
      <Footer />
    </React.Fragment>
  );
};

Home.propTypes = {
  config: PropTypes.object.isRequired,
  getApiConfig: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.shows.config,
});

const mapDispatchToProps = {
  getApiConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
