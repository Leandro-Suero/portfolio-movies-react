import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { useImages } from "../hooks/useImages";
import ReactStarReview from "react-star-review";
import BackNav from "../components/BackNav";
import Tags from "./Tags";

export const MovieDetailDesktop = ({ show, config }) => {
  const moneyFormater = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  let isCurrent = useRef(true);

  /* TO FLAG IF THE COMPONENT WAS UNMOUNTED AND AVOID SETTING STATE WITH CALLBACKS AFTER THIS */
  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  }, []);

  let { poster, picture } = useImages(show, config, isCurrent, "667x1000");

  return (
    <section className="min-vw-100 min-h-screen">
      {/* NAVIGATION */}
      <BackNav homeLink={true} />
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
              {show.title}
            </h1>
          </div>
          {/* GENRE TAGS */}
          <Tags tags={show.genres} color="teal" />
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
                  {new Date(show.release_date).toLocaleDateString()}
                </span>
              </div>
              <div>
                <h2 className="text-xl">Overview</h2>
              </div>
              <div className="">
                <span className="badge-gray inline-block bg-gray-200 text-gray-800 text-xs rounded-full mx-1 px-2 font-semibold tracking-wide">
                  {Math.floor(show.runtime / 60) +
                    "hr " +
                    (show.runtime % 60) +
                    "min"}
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
          <div className="bg-white bg-opacity-75 flex flex-col my-4 rounded">
            {/* LANGUAGES */}
            <p className="text-center mx-2">
              <span className="font-semibold">Language(s):</span>{" "}
              {show.spoken_languages.map((lang) => lang.name).toString()}{" "}
            </p>
            {/* BUDGET */}
            {show.budget > 0 ? (
              <div className="flex justify-center my-2">
                <span className="mx-2">
                  <span className="font-semibold">Budget: </span>
                  {moneyFormater.format(show.budget)}
                </span>
                <span className="mx-2">
                  <span className="font-semibold">Revenue: </span>
                  {moneyFormater.format(show.revenue)}
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
                className="inline-block text-center bg-teal-500 text-white text-md rounded-full py-2 px-6 uppercase font-semibold text-base"
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

MovieDetailDesktop.propTypes = {
  show: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};

export default MovieDetailDesktop;
