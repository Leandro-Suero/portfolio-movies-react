import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import ShowCardGrid from "./ShowCardGrid";

function ShowsGrid({ shows }) {
  const configImg = useSelector((state) => state.shows.config);

  return (
    <div
      id="shows-search-results"
      className="my-5 grid grid-cols-1 md:grid-cols-4 gap-4"
      data-testid="shows-grid"
    >
      {shows.map((show) => (
        <ShowCardGrid key={show.id} show={show} configImg={configImg} />
      ))}
    </div>
  );
}

ShowsGrid.propTypes = {
  shows: PropTypes.array.isRequired,
};

export default ShowsGrid;
