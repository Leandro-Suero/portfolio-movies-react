import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShowCardSlider = ({ showType, show, configImg }) => {
  const [picture, setPicture] = useState(
    "https://via.placeholder.com/185?text=loading"
  );

  //poster URL
  useEffect(() => {
    let show_url =
      configImg.images?.base_url === undefined
        ? "https://via.placeholder.com/185?text=loading"
        : `${configImg.images.base_url}${configImg.images.poster_sizes[2]}${show.poster_path}`;

    setPicture(show_url);
  }, [configImg, show]);

  return (
    <div>
      <Link to={`${showType}/${show.id}`}>
        <img
          src={picture}
          alt={show.title}
          className="object-cover max-w-md h-full"
        />
      </Link>
      <p>{show.title}</p>
    </div>
  );
};

ShowCardSlider.propTypes = {
  showType: PropTypes.string.isRequired,
  configImg: PropTypes.object.isRequired,
  show: PropTypes.object.isRequired,
};

export default ShowCardSlider;
