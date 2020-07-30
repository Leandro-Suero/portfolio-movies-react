import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { searchShows } from "../redux/actions/movieActions";

function MultiSearch({ searchShows }) {
  const [showType, setShowType] = useState("multi"); // [multi,movie,tv]
  const [query, setQuery] = useState("");

  const getShows = () => {
    searchShows(query, showType);
  };

  /* search submit on enter */
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      getShows();
    }
  };

  return (
    <div>
      <div className="box pt-6">
        <div className="box-wrapper">
          <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
            <button
              onClick={() => getShows()}
              className="outline-none focus:outline-none"
            >
              <svg
                className=" w-5 text-gray-600 h-5 cursor-pointer"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <input
              type="search"
              name=""
              id=""
              onKeyPress={(e) => handleKeyPress(e)}
              placeholder="search for movies and series..."
              className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="select">
              <select
                name=""
                id=""
                className="text-sm outline-none focus:outline-none bg-transparent ml-4"
                value={showType}
                onChange={(e) => setShowType(e.target.value)}
              >
                <option value="multi">All</option>
                <option value="movie">Movies</option>
                <option value="tv">Series</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MultiSearch.propTypes = {
  searchShows: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { searchShows };

export default connect(mapStateToProps, mapDispatchToProps)(MultiSearch);
