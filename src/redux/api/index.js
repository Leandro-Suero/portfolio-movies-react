import axios from "axios";

const baseURL = "https://api.domain.com/";

export const apiCall = (url, data, headers, method) => {
  return axios({ method, url: baseURL + url, data, headers });
};
