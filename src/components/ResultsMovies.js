import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const ResultsMovies = ({ movieResults }) => {
  console.log("results movies");
  console.log(movieResults);
  return (
    <div>
      <h1>Results movies</h1>
    </div>
  );
};

ResultsMovies.propTypes = {
  movieResults: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  movieResults: state.movieResults,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsMovies);
