import React from "react";
import PropTypes from "prop-types";

function ShowsGrid({ shows }) {
  console.log("movie grid");
  console.log(shows);
  return <div>MOVIE GRID</div>;
}

ShowsGrid.propTypes = {
  shows: PropTypes.array.isRequired,
};

export default ShowsGrid;
