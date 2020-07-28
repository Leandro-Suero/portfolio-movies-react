import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";

import Header from "../layout/Header";
import RecommendedMovies from "../RecommendedMovies";

export const Home = () => {
  return (
    <React.Fragment>
      {/* <Header branding="MOVIES" /> */}
      <RecommendedMovies />
    </React.Fragment>
  );
};

Home.propTypes = {
  recommendedMovies: PropTypes.array,
};

const mapStateToProps = (state) => ({
  // recommendedMovies: state.recommendedMovies,
  // queryString: state.queryString,
  // movieResults: state.movieResults,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
