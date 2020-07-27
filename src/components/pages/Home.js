import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Header from "../layout/Header";

export const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container mx-auto mt-24">
        <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
          <div className="ml-6 pt-1">
            <h1 className="text-2xl text-blue-700 leading-tight">
              Tailwind and Create React App
            </h1>
            <p className="text-base text-gray-700 leading-normal">
              Building apps together
            </p>
            <button className="hover:bg-blue-400 bg-blue-500 text-white font-bold py-2 px-4 rounded">
              Example
            </button>
            <button className="btn btn-blue">Custom</button>
          </div>
        </div>
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-5"
          role="alert"
        >
          <strong className="font-bold">Alert!</strong>
          <span className="block sm:inline">This is an alert</span>
        </div>

        {/* CARD COMPONENT TAILWIND */}
        <div className="container mt-5 mx-auto px-2">
          {/* Flex on med screens and up */}
          <div className="md:flex">
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded">
              <div className="lg:flex lg:items-center">
                <div className="lg:flex-shrink-0">
                  <img
                    className="rounded-lg lg:w-64"
                    src="https://i.ibb.co/mJJNkTJ/img2.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                    Networking
                  </div>
                  <a
                    href="/"
                    className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                  >
                    Finding connections to help your business grow
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 text-gray-700 text-center bg-gray-400 px-5 py-5 m-2 rounded">
              <div className="lg:flex lg:items-center">
                <div className="lg:flex-shrink-0">
                  <img
                    className="rounded-lg lg:w-64"
                    src="https://i.ibb.co/w4wGYvQ/img1.jpg
"
                    alt=""
                  />
                </div>
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="uppercase tracking-wide text-sm text-indigo-600 font-bold">
                    Marketing
                  </div>
                  <a
                    href="/"
                    className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
                  >
                    Finding customers for your new business
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

Home.propTypes = {
  prop: PropTypes,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
