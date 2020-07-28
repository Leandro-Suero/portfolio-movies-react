import {
  GET_RECOMMENDED_MOVIES,
  GET_MOVIE_RESULTS,
  GET_MOVIE_DETAILS,
} from "../actionTypes";
import { apiCall } from "../api";

//apiCall = (url, data, headers, method, extraParam)

export const getRecommendedMovies = () => async (dispatch) => {
  const res = await apiCall("/movie/popular", null, null, "GET", {});
  dispatch({
    type: GET_RECOMMENDED_MOVIES,
    payload: res.data.results,
  });
};
export const searchMovies = (queryString) => async (dispatch) => {
  const res = await apiCall("/search/movie", null, null, "GET", {
    query: queryString,
  });
  console.log("searchMovies");
  console.log(res);
  dispatch({
    type: GET_MOVIE_RESULTS,
    payload: res.data,
  });
};
