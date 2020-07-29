import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import Header from "../layout/Header";
import RecommendedMovies from "../layout/RecommendedMovies";
import RecommendedSeries from "../layout/RecommendedSeries";
import { getApiConfig } from "../../redux/actions/movieActions";

export const Home = ({ config, getApiConfig }) => {
  useEffect(() => {
    if (Object.keys(config).length === 0 && config.constructor === Object) {
      getApiConfig();
    }
  });

  return (
    <React.Fragment>
      {/* <Header branding="MOVIES" /> */}
      <RecommendedMovies />
      <RecommendedSeries />
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
