import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRecommendedMovies } from "../../../redux/actions/movieActions";
import ShowsSlider from "../../ShowsSlider";

const RecommendedMovies = () => {
  const dispatch = useDispatch();
  const recommendedMovies = useSelector(
    (state) => state.shows.recommendedMovies
  );
  //initial load for popular movies
  useEffect(() => {
    if (recommendedMovies.length === 0) {
      dispatch(getRecommendedMovies());
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

export default RecommendedMovies;
