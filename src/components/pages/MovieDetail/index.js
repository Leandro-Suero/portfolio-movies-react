import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getCurrentShow,
  getApiConfig,
} from "../../../redux/actions/movieActions";
import { useConfig } from "../../../hooks/useConfig";
import { MovieDetailMobile } from "../../MovieDetailMobile";
import { MovieDetailDesktop } from "../../MovieDetailDesktop";

export const MovieDetail = ({
  currentShow,
  getCurrentShow,
  config,
  getApiConfig,
}) => {
  let { id } = useParams();
  const mobile_breakpoint = parseInt(process.env.REACT_APP_MOBILE_BREAKPOINT);
  let isCurrent = useRef(true);
  const fixedShow = useRef();
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

  /* FETCH MOVIE DATA HOOK */
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
        await getCurrentShow(id, "movie");
        if (isCurrent.current) {
          setLoading(false);
        }
      }
    };
    //ask for movie details
    fetchData();
  }, [loading, id, getCurrentShow]);

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
