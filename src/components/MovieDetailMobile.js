import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const MovieDetailMobile = ({ show }) => {
  return (
    <section>
      <h1>{show.title}</h1>
      <div>MovieDetailMobile</div>
    </section>
  );
};

MovieDetailMobile.propTypes = {
  show: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetailMobile);
