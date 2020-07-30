import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ShowCardGrid({ show, configImg }) {
  const [picture, setPicture] = useState(
    "https://via.placeholder.com/500?text=loading"
  );

  //poster URL
  useEffect(() => {
    let poster_url =
      configImg.images?.base_url === undefined || show?.poster_path === null
        ? "https://via.placeholder.com/500?text=error"
        : `${configImg.images.base_url}${configImg.images.poster_sizes[4]}${show.poster_path}`;

    setPicture(poster_url);
  }, [configImg, show]);

  return (
    <div>
      <Link to={`/${show.media_type}/${show.id}`} className="hover:opacity-75">
        <img
          className="w-full h-full object-cover"
          src={picture}
          alt={"img error: " + show.title}
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
