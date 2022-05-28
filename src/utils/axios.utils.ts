import Bugsnag from "@bugsnag/js";
import axios from "axios";

import CONSTANTS from "../config/constants";

const { API, GENERAL } = CONSTANTS;
const { DEFAULT_REQUEST_TIMEOUT } = API;
const { PLATFORM } = GENERAL;

const axiosDefault = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: DEFAULT_REQUEST_TIMEOUT,
  headers: {
    Platform: PLATFORM
  }
});

axiosDefault.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    Bugsnag.notify(error);
    return error;
  }
);

export default axiosDefault;
