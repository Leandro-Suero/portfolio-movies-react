import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useImages } from "../hooks/useImages";

const ShowCardSlider = ({ showType, show, configImg }) => {
  let isCurrent = useRef(true);
  let { poster } = useImages(show, configImg, isCurrent, "185x278", 2);

  return (
    <div>
      <Link to={`${showType}/${show.id}`}>
        <img
          src={poster}
          alt={show.title}
          className="object-cover max-w-md h-full"
        />
      </Link>
    </div>
  );
};

ShowCardSlider.propTypes = {
  showType: PropTypes.string.isRequired,
  configImg: PropTypes.object.isRequired,
  show: PropTypes.object.isRequired,
};

export default ShowCardSlider;
