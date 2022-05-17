import axios from "axios";
import { config } from "../config";

let baseurl = config.url;

export const axiosInstance = axios.create({
  baseurl,
  headers: {
    Accept: 'application/json',
  },
  timeout: 15000,
});

axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
