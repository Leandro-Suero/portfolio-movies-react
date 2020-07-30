import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { getCurrentShow } from "../../redux/actions/movieActions";
import { SerieDetailMobile } from "../SerieDetailMobile";
import { SerieDetailDesktop } from "../SerieDetailDesktop";

export const SerieDetail = ({ currentShow, getCurrentShow }) => {
  let { id } = useParams();
  const mobile_breakpoint = parseInt(process.env.REACT_APP_MOBILE_BREAKPOINT);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  /* DEVICE TYPE HOOK */
  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth < mobile_breakpoint ? true : false);
    };
    //update device width
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => {
      //undo event listener
      window.removeEventListener("resize", updateDeviceType);
    };
  }, [isMobile]);

  /* FETCH SERIE DATA HOOK */
  useEffect(() => {
    const fetchData = async () => {
      if (
        (Object.keys(currentShow).length === 0 &&
          currentShow.constructor === Object) ||
        currentShow.id !== id
      ) {
        const res = await getCurrentShow(id, "tv");
        setLoading(false);
      }
    };
    //ask for serie details
    fetchData();
  }, [loading]);

  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : isMobile ? (
        <SerieDetailMobile show={currentShow} />
      ) : (
        <SerieDetailDesktop show={currentShow} />
      )}
    </div>
  );
};

SerieDetail.propTypes = {
  currentShow: PropTypes.object.isRequired,
  getCurrentShow: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentShow: state.shows.currentShow,
});

const mapDispatchToProps = { getCurrentShow };

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetail);
