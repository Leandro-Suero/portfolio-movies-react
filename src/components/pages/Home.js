import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import Header from "../layout/Header";
import RecommendedMovies from "../RecommendedMovies";
import { getMoviesConfig } from "../../redux/actions/movieActions";

export const Home = ({ config, getMoviesConfig }) => {
  useEffect(() => {
    if (Object.keys(config).length === 0 && config.constructor === Object) {
      getMoviesConfig();
    }
  });

  return (
    <React.Fragment>
      {/* <Header branding="MOVIES" /> */}
      <RecommendedMovies />
    </React.Fragment>
  );
};

Home.propTypes = {
  config: PropTypes.object.isRequired,
  getMoviesConfig: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.movies.config,
});

const mapDispatchToProps = {
  getMoviesConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
