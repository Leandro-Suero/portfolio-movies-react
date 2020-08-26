import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ShowCardGrid({ show, configImg }) {
  let showType, showName;
  if (show.hasOwnProperty("media_type")) {
    showType = show.media_type;
    if (showType === "movie") {
      showName = show.title;
    } else {
      showName = show.name;
    }
  } else if (show.hasOwnProperty("title")) {
    showType = "movie";
    showName = show.title;
  } else if (show.hasOwnProperty("known_for_department")) {
    showType = "person";
    showName = show.name;
  } else {
    showType = "tv";
    showName = show.name;
  }
  const [picture, setPicture] = useState(
    "https://via.placeholder.com/500?text=loading"
  );

  //poster URL
  useEffect(() => {
    let poster_url = "https://via.placeholder.com/500?text=error";
    if (showType === "person") {
      poster_url =
        configImg.images?.secure_base_url === undefined ||
        show?.profile_path === null
          ? `https://via.placeholder.com/500?text=${showName}`
          : `${configImg.images.secure_base_url}${configImg.images.poster_sizes[4]}${show.profile_path}`;
    } else {
      poster_url =
        configImg.images?.secure_base_url === undefined ||
        show?.poster_path === null
          ? `https://via.placeholder.com/500?text=${showName}`
          : `${configImg.images.secure_base_url}${configImg.images.poster_sizes[4]}${show.poster_path}`;
    }
    setPicture(poster_url);
  }, [configImg, show, showName, showType]);

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
