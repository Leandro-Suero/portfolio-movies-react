import axios from "axios";

const baseURL = "https://api.themoviedb.org/3";
const apiKey = `?api_key=${process.env.REACT_APP_TMDB_API_KEY_V3}`;

export const apiCall = (url, data, headers, method, extraParams) => {
  let URL = baseURL + url + apiKey;
  if (extraParams !== null) {
    Object.entries(extraParams).forEach(([key, value]) => {
      URL += `&${key}=${value}`;
    });
  }

  return axios({ method, url: URL, data: data, headers: headers });
};
