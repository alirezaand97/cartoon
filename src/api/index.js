import { axiosInstance } from "./axiosInstance";
import { config } from "../config";

class Api {
  Get = async (url, requestConfig) => {
    return await axiosInstance({
      method: "get",
      url: `${config.url}${url}`,
      ...requestConfig,
    });
  };
  Post = async (url, data, requestConfig) => {
    return await axiosInstance({
      method: "post",
      url: `${config.url}${url}`,
      data,
      ...requestConfig,
    });
  };
}

export default new Api();
