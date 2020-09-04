import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getRecommendedSeries } from "../../../redux/actions/movieActions";
import ShowsSlider from "../../ShowsSlider";

const RecommendedSeries = () => {
  const dispatch = useDispatch();
  const recommendedSeries = useSelector(
    (state) => state.shows.recommendedSeries
  );
  //initial load for popular movies
  useEffect(() => {
    if (recommendedSeries.length === 0) {
      dispatch(getRecommendedSeries());
    }
  });

  return (
    <section>
      <ShowsSlider
        shows={recommendedSeries}
        title={"Recommended Series"}
        showType="tv"
      />
    </section>
  );
};

export default RecommendedSeries;
