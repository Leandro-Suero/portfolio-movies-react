import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useImages } from "../hooks/useImages";
import ReactStarReview from "react-star-review";
import BackNav from "../components/BackNav";

export const MovieDetailMobile = ({ show, config }) => {
  const moneyFormater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
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
      <div className="fixed">
        <img src={picture} alt="Backdrop" className="z-0" />
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
            alt={`${show.title} poster`}
            className="w-1/2 mx-auto h-auto rounded-t-lg border-white"
            style={{ borderWidth: "1rem" }}
          />
        </div>
        {/* RELEASE AND RUNTINE BADGES */}
        <div
          className="flex justify-between bg-transparent absolute px-4 w-full"
          style={{
            bottom: "2rem",
          }}
        >
          <span className="badge-teal inline-block bg-gray-200 text-gray-800 text-xs rounded-full mx-1 px-2 uppercase font-semibold tracking-wide">
            {new Date(show.release_date).toLocaleDateString()}
          </span>
          <span className="badge-gray inline-block bg-gray-200 text-gray-800 text-xs rounded-full mx-1 px-2 font-semibold tracking-wide">
            {Math.floor(show.runtime / 60) +
              "hr " +
              (show.runtime % 60) +
              "min"}
          </span>
        </div>
      </div>
      <article className="mx-4 z-20 bg-white rounded-t-lg">
        {/* TITLE */}
        <h1 className="text-center text-3xl font-serif font-bold">
          {show.title}
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
        <div className="my-2">
          {/* LANGUAGES */}
          <p className="text-center">
            <span className="font-semibold">Language(s):</span>{" "}
            {show.spoken_languages.map((lang) => lang.name).toString()}{" "}
          </p>
          {/* BUDGET */}
          {show.budget > 0 ? (
            <div className="flex justify-center my-2">
              <span className="mx-2">
                Budget: {moneyFormater.format(show.budget)}
              </span>
              <span className="mx-2">
                Revenue: {moneyFormater.format(show.revenue)}
              </span>
            </div>
          ) : null}
        </div>
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
              VISIT HOMEPAGE
            </a>
          </div>
        ) : null}
      </article>
    </section>
  );
};

MovieDetailMobile.propTypes = {
  show: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

export default MovieDetailMobile;
