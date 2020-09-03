import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
import MultiSearch from "../../MultiSearch";
import RecommendedMovies from "../../layout/RecommendedMovies";
import RecommendedSeries from "../../layout/RecommendedSeries";
import { getApiConfig } from "../../../redux/actions/movieActions";
import { useConfig } from "../../../hooks/useConfig";

export const Home = ({ config, getApiConfig }) => {
  useConfig(config, getApiConfig);

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div
        className="w-11/12 sm:w-9/12 md:w-11/12 lg:w-4/5 mx-auto"
        style={{ flex: "1 0 auto" }}
      >
        <MultiSearch />
        <React.Fragment>
          <br />
          <RecommendedMovies />
          <br />
          <RecommendedSeries />
        </React.Fragment>
      </div>
      <Footer className="flex-shrink-0" />
    </main>
  );
};

Home.propTypes = {
  config: PropTypes.object.isRequired,
  getApiConfig: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  config: state.shows.config,
});

const mapDispatchToProps = {
  getApiConfig,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
