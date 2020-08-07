import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function index() {
  return (
    <div id="404">
      <div id="particles" class="particles">
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
        <section>
          <h1>Page Not Found!</h1>
          <div>
            <span>4</span>
            <span class="circle">0</span>
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
              class="inline-block text-center bg-teal-500 text-white rounded-full py-2 px-6 uppercase font-semibold text-base"
            >
              Back to Home Page
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
