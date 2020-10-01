import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const SpaceNotFound = () => {
  return (
    <div id="404">
      <div id="particles" className="particles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id="main">
        <section className="w-screen min-h-screen flex flex-col items-center content-center justify-evenly">
          <h1>Page Not Found!</h1>
          <div>
            <span>4</span>
            <span className="circle">0</span>
            <span>4</span>
          </div>
          <p>
            We are unable to find the page
            <br />
            you're looking for.
          </p>
          <div>
            <Link
              to="/"
              style={{ animation: "pulse 2s infinite" }}
              className="inline-block text-center bg-teal-500 text-white rounded-full py-2 px-6 uppercase font-semibold text-base"
            >
              Back to Home Page
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
export default SpaceNotFound;
