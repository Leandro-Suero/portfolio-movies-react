import {
  GET_MOVIES_CONFIG,
  GET_RECOMMENDED_MOVIES,
  GET_RECOMMENDED_SERIES,
  GET_MOVIE_RESULTS,
  GET_MOVIE_DETAILS,
} from "../actionTypes";
import { apiCall } from "../api";

//apiCall = (url, data, headers, method, extraParam)

export const getApiConfig = () => async (dispatch) => {
  const res = await apiCall("/configuration", null, null, "GET", {});
  dispatch({
    type: GET_MOVIES_CONFIG,
    payload: res.data,
  });
};
export const getRecommendedMovies = () => async (dispatch) => {
  const res = await apiCall("/movie/popular", null, null, "GET", {});
  dispatch({
    type: GET_RECOMMENDED_MOVIES,
    payload: res.data.results,
  });
};
export const getRecommendedSeries = () => async (dispatch) => {
  const res = await apiCall("/tv/popular", null, null, "GET", {});
  console.log("series");
  console.log(res.data.results);
  dispatch({
    type: GET_RECOMMENDED_SERIES,
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
