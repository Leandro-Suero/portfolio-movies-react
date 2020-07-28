import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getRecommendedMovies } from "../redux/actions/movieActions";

const RecommendedMovies = ({ recommendedMovies, getRecommendedMovies }) => {
  // const dispatch = useDispatch();
  //initial load for popular movies
  useEffect(() => {
    if (recommendedMovies.length === 0) {
      getRecommendedMovies();
    }
  });

  return (
    <div>
      <h1>Recommended movies </h1>
      {recommendedMovies.length === 0 ? (
        <h2>Loading...</h2>
      ) : (
        recommendedMovies.map((movie) => <p>{movie.title}</p>)
      )}
    </div>
  );
};

RecommendedMovies.propTypes = {
  recommendedMovies: PropTypes.array,
  getRecommendedMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recommendedMovies: state.movies.recommendedMovies,
});

const mapDispatchToProps = { getRecommendedMovies };

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedMovies);
