import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useShowType } from "../hooks/useShowType";
import { useImages } from "../hooks/useImages";

function ShowCardGrid({ show, configImg }) {
  let isCurrent = useRef(true);
  let { showType, showName } = useShowType(show);
  let { poster, personPic } = useImages(show, configImg, isCurrent, "334x500");
  let picture = showType === "person" ? personPic : poster;

  return (
    <div data-testid="show-card-grid">
      <Link to={`/${showType}/${show.id}`}>
        <img
          className="w-full h-full object-cover"
          src={picture}
          alt={"error: " + showName}
        />
      </Link>
    </div>
  );
}

ShowCardGrid.propTypes = {
  configImg: PropTypes.object.isRequired,
  show: PropTypes.object.isRequired,
};

export default ShowCardGrid;
