import axios from "axios";

import { getToken } from "./axiosTokens.helpers";

const axiosConfig = axios.create({
  baseURL: process.env.REACT_APP_API_URL_LOCAL,
  headers: {
    "Content-Type": "application/json",
    // "Content-Type": "application/x-www-form-urlencoded",
  },
});

axiosConfig.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosConfig;
