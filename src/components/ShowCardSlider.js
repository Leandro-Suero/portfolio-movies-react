import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const ShowCardSlider = ({ show, configImg }) => {
  const [picture, setPicture] = useState(
    "https://via.placeholder.com/185?text=loading"
  );

  //poster URL
  useEffect(() => {
    let base_url =
      configImg.images?.base_url === undefined
        ? "https://via.placeholder.com/185?text=loading"
        : `${configImg.images.base_url}${configImg.images.poster_sizes[2]}`;

    setPicture(base_url + show.poster_path);
  }, [configImg, show]);

  return (
    <div key={show.id} className="">
      <img src={picture} alt={show.title} className="object-cover max-w-md" />
      <p>{show.title}</p>
    </div>
  );
};

ShowCardSlider.propTypes = {
  configImg: PropTypes.object.isRequired,
  show: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  configImg: state.shows.config,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCardSlider);
