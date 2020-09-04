import React from "react";
import PropTypes from "prop-types";
import { useHistory, Link } from "react-router-dom";

import Logo from "../components/layout/Logo";
import backArrow from "../assets/left-arrow.svg";

function BackNav({ animation = true, homeLink = false }) {
  let history = useHistory();

  return (
    <nav
      className="bg-transparent fixed z-50 flex"
      style={{ top: "1rem", marginLeft: "1rem" }}
    >
      <img
        src={backArrow}
        alt="Back arrow"
        className="h-8 cursor-pointer rounded-full mr-4"
        onClick={() => history.goBack()}
        style={animation ? { animation: "pulse-light 2s infinite" } : {}}
      />
      {homeLink && (
        <Link to="/">
          <Logo />
        </Link>
      )}
    </nav>
  );
}

BackNav.propTypes = {
  homeLink: PropTypes.bool,
  animation: PropTypes.bool,
};

export default BackNav;
