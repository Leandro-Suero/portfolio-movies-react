import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const MovieDetailDesktop = ({ show }) => {
  return (
    <section>
      <h1>{show.title}</h1>
      <div>MovieDetailDesktop</div>
    </section>
  );
};

MovieDetailDesktop.propTypes = {
  show: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailDesktop);
