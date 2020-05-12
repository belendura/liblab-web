import axios from "axios";
import { getToken } from "./axiosTokens.helpers";

const axiosConfig = axios.create({
  baseURL: "http://localhost:5001/liblab-web/europe-west3/backendServer",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosConfig.interceptors.request.use(
  async (config) => {
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
