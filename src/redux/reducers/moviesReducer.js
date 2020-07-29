import {
  GET_MOVIES_CONFIG,
  GET_RECOMMENDED_MOVIES,
  GET_MOVIE_RESULTS,
  GET_MOVIE_DETAILS,
} from "../actionTypes";

const initialState = {
  recommendedMovies: [],
  queryString: "",
  movieResults: [],
  currentMovie: {},
  config: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES_CONFIG:
      return { ...state, config: payload };
    case GET_RECOMMENDED_MOVIES:
      return { ...state, recommendedMovies: payload };
    case GET_MOVIE_RESULTS:
      return { ...state, movieResults: payload };
    case GET_MOVIE_DETAILS:
      return { ...state, currentMovie: payload };

    default:
      return state;
  }
};
