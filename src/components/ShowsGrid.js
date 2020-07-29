import React from "react";
import PropTypes from "prop-types";

function ShowsGrid({ showsList }) {
  console.log("movie grid");
  console.log(showsList);
  return <div>MOVIE GRID</div>;
}

ShowsGrid.propTypes = {
  showsList: PropTypes.array.isRequired,
};

export default ShowsGrid;
