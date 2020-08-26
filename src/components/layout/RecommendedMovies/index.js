import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getRecommendedMovies } from "../../../redux/actions/movieActions";
import ShowsSlider from "../../ShowsSlider";

const RecommendedMovies = ({ recommendedMovies, getRecommendedMovies }) => {
  // const dispatch = useDispatch();
  //initial load for popular movies
  useEffect(() => {
    if (recommendedMovies.length === 0) {
      getRecommendedMovies();
    }
  });

  return (
    <section>
      <ShowsSlider
        shows={recommendedMovies}
        title={"Recommended Movies"}
        showType="movie"
      />
    </section>
  );
};

RecommendedMovies.propTypes = {
  recommendedMovies: PropTypes.array,
  getRecommendedMovies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recommendedMovies: state.shows.recommendedMovies,
});

const mapDispatchToProps = { getRecommendedMovies };

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedMovies);
