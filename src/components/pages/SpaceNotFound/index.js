import React from "react";

import "./style.css";

export default function index() {
  return (
    <div>
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

      <main>
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
            <button>Back to Home Page</button>
          </div>
        </section>
      </main>
    </div>
  );
}
