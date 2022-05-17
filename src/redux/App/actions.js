import types from "./types";
export const getVideosList = (data) => {
  return {
    type: types.GET_VIDEOS_LIST,
    data,
  };
};
