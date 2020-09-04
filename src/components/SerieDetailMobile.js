import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useImages } from "../hooks/useImages";
import ReactStarReview from "react-star-review";
import BackNav from "../components/BackNav";

export const SerieDetailMobile = ({ show, config }) => {
  const viewport_width = window.innerWidth;
  let isCurrent = useRef(true);

  /* TO FLAG IF THE COMPONENT WAS UNMOUNTED AND AVOID SETTING STATE WITH CALLBACKS AFTER THIS */
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  let { poster, picture } = useImages(show, config, isCurrent, "500");

  return (
    <section className="bg-white min-h-screen relative flex flex-col content-center">
      {/* NAVIGATION */}
      <BackNav animation={false} />
      {/* BACKGROUND */}
      <div className="fixed w-full">
        <img src={picture} alt="Backdrop" className="z-0 w-full" />
        <div
          id="white-gradient"
          className="absolute h-10 w-full"
          style={{
            backgroundImage: "linear-gradient(transparent,white)",
            bottom: "-1px",
          }}
        ></div>
      </div>
      <div className="relative">
        {/* POSTER */}
        <div
          id="overlay-poster"
          className="bg-transparent z-40 "
          style={{ paddingTop: `${viewport_width / 4}px` }}
        >
          <img
            src={poster}
            alt={`${show.name} poster`}
            className="w-1/2 mx-auto h-auto rounded-t-lg border-white"
            style={{ borderWidth: "1rem" }}
          />
        </div>
        {/* RELEASE AND RUNTINE BADGES */}
        <div
          className="flex justify-between bg-transparent absolute px-4 w-full text-center"
          style={{
            bottom: "2rem",
          }}
        >
          <div className="flex flex-col">
            <span className="badge-teal inline-block bg-gray-200 text-gray-800 text-xs rounded-full m-1 px-2 uppercase font-semibold tracking-wide">
              {new Date(show.first_air_date).toLocaleDateString()}
            </span>
            <span className="badge-teal inline-block bg-gray-200 text-gray-800 text-xs rounded-full mx-1 px-2 uppercase font-semibold tracking-wide">
              {new Date(show.last_air_date).toLocaleDateString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="badge-gray inline-block bg-gray-200 text-gray-800 text-xs rounded-full m-1 px-2 font-semibold tracking-wide">
              {show.number_of_episodes} eps.
            </span>
            <span className="badge-gray inline-block bg-gray-200 text-gray-800 text-xs rounded-full mx-1 px-2 font-semibold tracking-wide">
              {show.episode_run_time}mins
            </span>
          </div>
        </div>
      </div>
      <article className="mx-4 z-20 bg-white rounded-t-lg">
        {/* TITLE */}
        <h1 className="text-center text-3xl font-serif font-bold">
          {show.name}
        </h1>
        <div className="flex justify-center my-2" data-testid="stars-review">
          <ReactStarReview rating={show.vote_average / 2} />
        </div>
        {/* GENRE TAGS */}
        <div className="flex items-center justify-center my-4 text-center">
          {show.genres.map((genre) => (
            <span
              key={genre.id}
              className="badge-teal inline-block bg-teal-200 text-teal-600 text-xs rounded-full mx-1 px-2 uppercase font-semibold tracking-wide"
            >
              {genre.name}
            </span>
          ))}
        </div>
        {/* OVERVIEW */}
        <div className="text-center my-2">{show.overview}</div>

        {/* LINK */}
        {show.homepage !== "" ? (
          <div className="text-center mt-2 mb-4">
            <a
              href={show.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center bg-teal-500 text-white text-md rounded-full py-2 px-4 uppercase font-semibold"
              style={{ animation: "pulse 2s infinite" }}
            >
              VISIT WEBSITE
            </a>
          </div>
        ) : null}
      </article>
    </section>
  );
};

SerieDetailMobile.propTypes = {
  show: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

export default SerieDetailMobile;
