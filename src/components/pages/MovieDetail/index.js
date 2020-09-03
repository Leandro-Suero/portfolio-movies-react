import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getCurrentShow,
  getApiConfig,
} from "../../../redux/actions/movieActions";
import { useConfig } from "../../../hooks/useConfig";
import { useDeviceType } from "../../../hooks/useDeviceType";
import { useShowData } from "../../../hooks/useShowData";
import { MovieDetailMobile } from "../../MovieDetailMobile";
import { MovieDetailDesktop } from "../../MovieDetailDesktop";

export const MovieDetail = ({
  currentShow,
  getCurrentShow,
  config,
  getApiConfig,
}) => {
  let isCurrent = useRef(true);

  /* TO FLAG IF THE COMPONENT WAS UNMOUNTED AND AVOID SETTING STATE WITH CALLBACKS AFTER THIS */
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  let isMobile = useDeviceType();
  let loading = useShowData(currentShow, getCurrentShow, "movie", isCurrent);
  useConfig(config, getApiConfig);

  return (
    <div data-testid="movie-detail">
      {loading ? (
        <h2>Loading...</h2>
      ) : isMobile ? (
        <MovieDetailMobile show={currentShow} config={config} />
      ) : (
        <MovieDetailDesktop show={currentShow} config={config} />
      )}
    </div>
  );
};

MovieDetail.propTypes = {
  currentShow: PropTypes.object.isRequired,
  getCurrentShow: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentShow: state.shows.currentShow,
  config: state.shows.config,
});

const mapDispatchToProps = { getCurrentShow, getApiConfig };

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
