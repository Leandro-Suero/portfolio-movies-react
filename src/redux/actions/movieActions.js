import {
  GET_MOVIES_CONFIG,
  GET_RECOMMENDED_MOVIES,
  GET_RECOMMENDED_SERIES,
  GET_SEARCH_RESULTS,
  GET_MOVIE_DETAILS,
} from "../actionTypes";
import { apiCall } from "../api";

//apiCall = (url, data, headers, method, extraParams)

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
  dispatch({
    type: GET_RECOMMENDED_SERIES,
    payload: res.data.results,
  });
};
export const searchShows = (queryString, showType) => async (dispatch) => {
  const res = await apiCall(`/search/${showType}`, null, null, "GET", {
    query: queryString,
  });
  dispatch({
    type: GET_SEARCH_RESULTS,
    payload: res.data.results,
  });
};
