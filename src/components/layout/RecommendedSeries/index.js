import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getRecommendedSeries } from "../../../redux/actions/movieActions";
import ShowsSlider from "../../ShowsSlider";

const RecommendedSeries = ({ recommendedSeries, getRecommendedSeries }) => {
  // const dispatch = useDispatch();
  //initial load for popular movies
  useEffect(() => {
    if (recommendedSeries.length === 0) {
      getRecommendedSeries();
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

RecommendedSeries.propTypes = {
  recommendedSeries: PropTypes.array,
  getRecommendedSeries: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recommendedSeries: state.shows.recommendedSeries,
});

const mapDispatchToProps = { getRecommendedSeries };

export default connect(mapStateToProps, mapDispatchToProps)(RecommendedSeries);
