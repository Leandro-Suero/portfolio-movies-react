import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import Logo from "../components/layout/Logo";
import { useImages } from "../hooks/useImages";
import ReactStarReview from "react-star-review";
import backArrow from "../assets/left-arrow.svg";

export const SerieDetailDesktop = ({ show, config }) => {
  let history = useHistory();
  let isCurrent = useRef(true);

  /* TO FLAG IF THE COMPONENT WAS UNMOUNTED AND AVOID SETTING STATE WITH CALLBACKS AFTER THIS */
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  let { poster, picture } = useImages(show, config, isCurrent, "1000");

  return (
    <section className="min-vw-100 min-h-screen">
      {/* NAVIGATION */}
      <nav
        className="bg-transparent fixed z-50 flex"
        style={{ top: "1rem", marginLeft: "1rem" }}
      >
        <img
          src={backArrow}
          alt="Back arrow"
          className="h-8 cursor-pointer rounded-full mr-4"
          onClick={() => history.goBack()}
          style={{ animation: "pulse-light 2s infinite" }}
        />
        <Link to="/">
          <Logo className="" />
        </Link>
      </nav>
      {/* BACKGROUND */}
      <div className="fixed">
        <img
          src={picture}
          alt="Backdrop"
          className="w-screen min-h-screen object-cover z-0"
        />
      </div>
      <div className="flex w-screen min-h-screen items-center content-center justify-evenly">
        {/* POSTER */}
        <img
          src={poster}
          alt={`${show.name} poster`}
          className="relative w-1/4 h-auto rounded-lg border-white z-40"
          style={{ borderWidth: "1rem" }}
        />
        <div className="w-4/6 z-10 flex flex-col items-center content-center justify-evenly">
          <div className="bg-white bg-opacity-75 flex flex-col rounded">
            <h1 className="text-center text-2xl font-serif font-bold px-4">
              {show.name}
            </h1>
          </div>
          {/* GENRE TAGS */}
          <div className="flex items-center justify-center my-4 text-center">
            {show.genres.map((genre) => (
              <span
                key={genre.id}
                className="badge-teal inline-block bg-teal-200 text-teal-600 rounded-full mx-1 px-2 uppercase font-semibold tracking-wide text-xs"
              >
                {genre.name}
              </span>
            ))}
          </div>
          {/* STARS REVIEW */}
          <div className="flex justify-center my-2" data-testid="stars-review">
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
                <h2 className="text-xl">Overview</h2>
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
              className="text-center my-2 p-2 text-sm"
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
                rel="noopener noreferrer"
                className="inline-block text-center bg-teal-500 text-white text-md rounded-full py-2 px-6 uppercase font-semibold text-base"
                style={{ animation: "pulse-light 2s infinite" }}
              >
                VISIT WEBSITE
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

export default SerieDetailDesktop;
