import {
  GET_MOVIES_CONFIG,
  GET_RECOMMENDED_MOVIES,
  GET_RECOMMENDED_SERIES,
  GET_SEARCH_RESULTS,
  GET_SHOW_DETAILS,
} from "../actionTypes";
import { apiCall } from "../api";

//apiCall = (method, url, data, headers, extraParams)

export const getApiConfig = () => async (dispatch) => {
  try {
    const res = await apiCall("GET", "/configuration", null, null, {});
    dispatch({
      type: GET_MOVIES_CONFIG,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getRecommendedMovies = () => async (dispatch) => {
  try {
    const res = await apiCall("GET", "/movie/popular", null, null, {});
    dispatch({
      type: GET_RECOMMENDED_MOVIES,
      payload: res.data.results,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getRecommendedSeries = () => async (dispatch) => {
  try {
    const res = await apiCall("GET", "/tv/popular", null, null, {});
    dispatch({
      type: GET_RECOMMENDED_SERIES,
      payload: res.data.results,
    });
  } catch (error) {
    console.error(error);
  }
};
export const searchShows = (queryString, showType) => async (dispatch) => {
  try {
    const res = await apiCall("GET", `/search/${showType}`, null, null, {
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
    console.error(error);
  }
};
export const getCurrentShow = (id, showType) => async (dispatch) => {
  try {
    const res = await apiCall("GET", `/${showType}/${id}`, null, null, {});
    dispatch({
      type: GET_SHOW_DETAILS,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
