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
import { SerieDetailMobile } from "../../SerieDetailMobile";
import { SerieDetailDesktop } from "../../SerieDetailDesktop";

export const SerieDetail = ({
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
  let loading = useShowData(currentShow, getCurrentShow, "tv", isCurrent);
  useConfig(config, getApiConfig);

  return (
    <div data-testid="serie-detail">
      {loading ? (
        <h2>Loading...</h2>
      ) : isMobile ? (
        <SerieDetailMobile show={currentShow} config={config} />
      ) : (
        <SerieDetailDesktop show={currentShow} config={config} />
      )}
    </div>
  );
};

SerieDetail.propTypes = {
  currentShow: PropTypes.object.isRequired,
  getCurrentShow: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentShow: state.shows.currentShow,
  config: state.shows.config,
});

const mapDispatchToProps = { getCurrentShow, getApiConfig };

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetail);
