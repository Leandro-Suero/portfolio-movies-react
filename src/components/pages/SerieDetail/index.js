import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getCurrentShow,
  getApiConfig,
} from "../../../redux/actions/movieActions";
import { SerieDetailMobile } from "../../SerieDetailMobile";
import { SerieDetailDesktop } from "../../SerieDetailDesktop";

export const SerieDetail = ({
  currentShow,
  getCurrentShow,
  config,
  getApiConfig,
}) => {
  let { id } = useParams();
  const mobile_breakpoint = parseInt(process.env.REACT_APP_MOBILE_BREAKPOINT);
  let isCurrent = useRef(true);
  const fixedShow = useRef();
  const fixedConfig = useRef();
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  /* TO FLAG IF THE COMPONENT WAS UNMOUNTED AND AVOID SETTING STATE WITH CALLBACKS AFTER THIS */
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  /* DEVICE TYPE HOOK */
  useEffect(() => {
    const updateDeviceType = () => {
      if (isCurrent.current) {
        setIsMobile(window.innerWidth < mobile_breakpoint ? true : false);
      }
    };
    //update device width
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => {
      //undo event listener
      window.removeEventListener("resize", updateDeviceType);
    };
  }, [isMobile, mobile_breakpoint]);

  /* FETCH SERIE DATA HOOK */
  useEffect(() => {
    fixedShow.current = currentShow;
  });
  useEffect(() => {
    const fetchData = async () => {
      if (
        (Object.keys(fixedShow.current).length === 0 &&
          fixedShow.current.constructor === Object) ||
        fixedShow.current.id !== id
      ) {
        await getCurrentShow(id, "tv");
        if (isCurrent.current) {
          setLoading(false);
        }
      }
    };
    //ask for serie details
    fetchData();
  }, [loading, id, getCurrentShow]);

  /* FETCH CONFIG HOOK */
  useEffect(() => {
    fixedConfig.current = config;
  });
  useEffect(() => {
    //if no config already
    if (
      Object.keys(fixedConfig.current).length === 0 &&
      fixedConfig.current.constructor === Object
    ) {
      getApiConfig();
    }
  }, [getApiConfig]);

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
