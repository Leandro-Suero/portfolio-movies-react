import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export const SerieDetailDesktop = ({ show }) => {
  return (
    <section>
      <h1>{show.name}</h1>
      <div>SerieDetailDesktop</div>
    </section>
  );
};

SerieDetailDesktop.propTypes = {
  show: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SerieDetailDesktop);
