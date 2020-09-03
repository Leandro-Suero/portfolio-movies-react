import {
  GET_MOVIES_CONFIG,
  GET_RECOMMENDED_MOVIES,
  GET_RECOMMENDED_SERIES,
  GET_SEARCH_RESULTS,
  GET_SHOW_DETAILS,
} from "../actionTypes";
import { apiCall } from "../api";

//apiCall = (url, data, headers, method, extraParams)

export const getApiConfig = () => async (dispatch) => {
  try {
    const res = await apiCall("/configuration", null, null, "GET", {});
    dispatch({
      type: GET_MOVIES_CONFIG,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getRecommendedMovies = () => async (dispatch) => {
  try {
    const res = await apiCall("/movie/popular", null, null, "GET", {});
    dispatch({
      type: GET_RECOMMENDED_MOVIES,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getRecommendedSeries = () => async (dispatch) => {
  try {
    const res = await apiCall("/tv/popular", null, null, "GET", {});
    dispatch({
      type: GET_RECOMMENDED_SERIES,
      payload: res.data.results,
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchShows = (queryString, showType) => async (dispatch) => {
  try {
    const res = await apiCall(`/search/${showType}`, null, null, "GET", {
      query: queryString,
    });
    //save only results with a poster (movie/tv) or profile (person) image
    dispatch({
      type: GET_SEARCH_RESULTS,
      payload: res.data.results.filter(
        (result) => result.profile_path !== null && result.poster_path !== null
      ),
    });
  } catch (error) {
    console.log(error);
  }
};
export const getCurrentShow = (id, showType) => async (dispatch) => {
  try {
    const res = await apiCall(`/${showType}/${id}`, null, null, "GET", {});
    dispatch({
      type: GET_SHOW_DETAILS,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
