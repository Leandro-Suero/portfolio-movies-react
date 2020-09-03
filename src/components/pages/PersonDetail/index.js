import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  getCurrentShow,
  getApiConfig,
} from "../../../redux/actions/movieActions";
import { useConfig } from "../../../hooks/useConfig";
import { useShowData } from "../../../hooks/useShowData";
import { useImages } from "../../../hooks/useImages";
import backArrow from "../../../assets/left-arrow.svg";

export const PersonDetail = ({
  currentShow,
  getCurrentShow,
  config,
  getApiConfig,
}) => {
  let history = useHistory();
  let isCurrent = useRef(true);

  /* TO FLAG IF THE COMPONENT WAS UNMOUNTED AND AVOID SETTING STATE WITH CALLBACKS AFTER THIS */
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);
  let loading = useShowData(currentShow, getCurrentShow, "person", isCurrent);
  useConfig(config, getApiConfig);
  let { personPic } = useImages(currentShow, config, isCurrent, "500");

  return (
    <section className="text-center text-white" data-testid="person-detail">
      {/* NAVIGATION */}
      <nav
        className="bg-transparent fixed z-50"
        style={{ top: "1rem", marginLeft: "1rem" }}
      >
        <img
          src={backArrow}
          alt="Back arrow"
          className="h-8 cursor-pointer"
          onClick={() => history.goBack()}
        />
      </nav>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="flex flex-col md:flex-row w-screen min-h-screen items-center content-center justify-evenly">
          <div className="w-1/2 md:w-3/12 mt-8 md:mt-0 md:px-4">
            <img
              src={personPic}
              alt={`${currentShow.name} poster`}
              className="rounded-lg"
            />
          </div>

          <div className="md:w-7/12 flex flex-col md:flex-grow items-center content-center justify-evenly">
            <h1 className="text-3xl font-serif font-bold my-2">
              {currentShow.name}
            </h1>
            <div className="bg-white bg-opacity-75 text-black p-2 flex flex-col rounded">
              <p>
                <span className="font-semibold">Known for: </span>
                {currentShow.known_for_department}
              </p>
              <p>
                <span className="font-semibold">Birth: </span>
                {`${new Date(currentShow.birthday).toLocaleDateString()} in ${
                  currentShow.place_of_birth
                }`}
              </p>
              {currentShow.deathday !== null ? (
                <p>
                  <span className="font-semibold">Death: </span>
                  {new Date(currentShow.birthday).toLocaleDateString()}
                </p>
              ) : null}
            </div>

            <h2 className="font-bold text-xl my-2">Biography: </h2>
            <div className="bg-white bg-opacity-75 text-xs text-black p-4 flex flex-col rounded w-11/12 mx-auto mb-4">
              <p>{currentShow.biography}</p>
            </div>
            {currentShow?.homepage && currentShow.homepage !== "" ? (
              <div className="text-center my-8">
                <a
                  href={currentShow.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-teal-500 text-white text-md rounded-full py-2 px-4 uppercase font-semibold"
                  style={{ animation: "pulse 2s infinite" }}
                >
                  CHECK PERSONAL WEBSITE
                </a>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </section>
  );
};

PersonDetail.propTypes = {
  currentShow: PropTypes.object.isRequired,
  getCurrentShow: PropTypes.func.isRequired,
  config: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  currentShow: state.shows.currentShow,
  config: state.shows.config,
});

const mapDispatchToProps = { getCurrentShow, getApiConfig };

export default connect(mapStateToProps, mapDispatchToProps)(PersonDetail);
