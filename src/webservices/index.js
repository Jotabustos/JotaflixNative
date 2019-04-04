import axios from "axios";
import { BASE_URL, API_KEY } from "../config/api";

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL;
  //axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  axios.defaults.headers.post["Content-Type"] = "application/json";
}

export function fetchMoviesUpcoming(page = 1, language = "en-US") {
  const url = "/movie/upcoming";
  const queryString = `language=${language}page=${page}`;
  const url_full = `${url}?${API_KEY}&${queryString}`;
  return axios.get(url_full);
}
