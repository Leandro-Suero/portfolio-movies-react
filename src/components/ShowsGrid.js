import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ShowCardGrid from "./ShowCardGrid";

function ShowsGrid({ shows, configImg }) {
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
  configImg: PropTypes.object.isRequired,
  shows: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  configImg: state.shows.config,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShowsGrid);
