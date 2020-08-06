import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import ReactStarReview from "react-star-review";
import backArrow from "../assets/left-arrow.svg";

export const SerieDetailDesktop = ({ show, config }) => {
  let history = useHistory();
  const [picture, setPicture] = useState(
    "https://via.placeholder.com/1000?text=loading"
  );
  const [poster, setPoster] = useState(
    "https://via.placeholder.com/1000?text=" + show.name
  );

  /* picture & poster URL */
  useEffect(() => {
    let picture_url =
      config.images?.base_url === undefined || show?.backdrop_path === null
        ? "https://via.placeholder.com/1000?text=error"
        : `${config.images.base_url}${config.images.backdrop_sizes[3]}${show.backdrop_path}`;
    let poster_url =
      config.images?.base_url === undefined || show?.poster_path === null
        ? "https://via.placeholder.com/1000?text=" + show.name
        : `${config.images.base_url}${config.images.poster_sizes[4]}${show.poster_path}`;

    setPicture(picture_url);
    setPoster(poster_url);
  }, [config, show]);

  return (
    <section className="min-vw-100 min-h-screen">
      {/* NAVIGATION */}
      <nav
        className="bg-transparent fixed z-50"
        style={{ top: "1rem", marginLeft: "1rem" }}
      >
        <img
          src={backArrow}
          alt="Back arrow"
          className="h-8 cursor-pointer rounded-full"
          onClick={() => history.goBack()}
          style={{ animation: "pulse-light 2s infinite" }}
        />
      </nav>
      {/* BACKGROUND */}
      <div className="fixed">
        <img
          src={picture}
          alt="Backdrop image"
          className="w-screen min-h-screen object-cover z-0"
        />
      </div>
      <div className="flex w-screen min-h-screen items-center content-center justify-evenly">
        {/* POSTER */}
        <img
          src={poster}
          alt={`${show.name} poster`}
          className="relative w-1/4 h-auto rounded-lg border-white z-50"
          style={{ borderWidth: "1rem" }}
        />
        <div className="w-4/6 z-10 flex flex-col items-center content-center justify-evenly">
          <div className="bg-white bg-opacity-75 flex flex-col rounded">
            <h1 className="text-center text-5xl font-serif font-bold px-4">
              {show.name}
            </h1>
          </div>
          {/* GENRE TAGS */}
          <div className="flex items-center justify-center my-4 text-center">
            {show.genres.map((genre) => (
              <span
                key={genre.id}
                className="badge-teal inline-block bg-teal-200 text-teal-600 text-xs rounded-full mx-1 px-2 uppercase font-semibold tracking-wide text-base"
              >
                {genre.name}
              </span>
            ))}
          </div>
          {/* STARS REVIEW */}
          <div className="flex justify-center my-2">
            <ReactStarReview
              rating={show.vote_average / 2}
              style={{
                backgroundColor: "#B2F5EA",
                padding: "0.25rem 0.5rem",
                borderRadius: "0.5rem",
              }}
            />
          </div>

          <div className="bg-white bg-opacity-75 flex flex-col my-4 rounded">
            {/* RELEASE AND RUNTINE BADGES */}
            <div className="flex justify-between bg-transparent px-4 w-full text-center mt-4">
              <div className="">
                <span className="badge-teal inline-block bg-gray-200 text-gray-800 text-xs rounded-full m-1 px-2 uppercase font-semibold tracking-wide">
                  {new Date(show.first_air_date).toLocaleDateString()}
                </span>
                -
                <span className="badge-teal inline-block bg-gray-200 text-gray-800 text-xs rounded-full mx-1 px-2 uppercase font-semibold tracking-wide">
                  {new Date(show.last_air_date).toLocaleDateString()}
                </span>
              </div>
              <div>
                <h2 className="text-3xl">Overview</h2>
              </div>
              <div className="">
                <span className="badge-gray inline-block bg-gray-200 text-gray-800 text-xs rounded-full m-1 px-2 font-semibold tracking-wide">
                  {show.number_of_episodes} episodes
                </span>
                -
                <span className="badge-gray inline-block bg-gray-200 text-gray-800 text-xs rounded-full mx-1 px-2 font-semibold tracking-wide">
                  {show.episode_run_time}mins
                </span>
              </div>
            </div>
            {/* OVERVIEW */}
            <div
              className="text-center my-2 p-2 text-base"
              style={{ textShadow: "-1px -1px 4px white" }}
            >
              {show.overview}
            </div>
          </div>
          {/* LINK */}
          {show.homepage !== "" ? (
            <div className="text-center mt-2 mb-4">
              <a
                href={show.homepage}
                target="_blank"
                className="inline-block text-center bg-teal-500 text-white text-md rounded-full py-2 px-4 uppercase font-semibold "
                style={{ animation: "pulse-light 2s infinite" }}
              >
                VISIT HOMEPAGE
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

SerieDetailDesktop.propTypes = {
  show: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetailDesktop);
