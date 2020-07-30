import {
  GET_MOVIES_CONFIG,
  GET_RECOMMENDED_MOVIES,
  GET_RECOMMENDED_SERIES,
  GET_SEARCH_RESULTS,
  GET_MOVIE_DETAILS,
} from "../actionTypes";

const initialState = {
  recommendedMovies: [],
  recommendedSeries: [],
  searchResults: [],
  currentMovie: {},
  config: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_CONFIG:
      return { ...state, config: payload };
    case GET_RECOMMENDED_MOVIES:
      return { ...state, recommendedMovies: payload };
    case GET_RECOMMENDED_SERIES:
      return { ...state, recommendedSeries: payload };
    case GET_SEARCH_RESULTS:
      return { ...state, searchResults: payload };
    case GET_MOVIE_DETAILS:
      return { ...state, currentMovie: payload };

    default:
      return state;
  }
};
