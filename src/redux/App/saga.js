import { all, put, takeEvery } from "redux-saga/effects";
import types from "./types";
import Api from "../../api";
import endpoints from "./endpoints";

function* getVideosList() {
  try {
    let videos = yield Api.Get(endpoints.getVideos);

    yield put({
      type: types.GET_VIDEOS_LIST_SUCCESS,
      data: videos,
    });
  } catch (error) {
    yield put({
      type: types.GET_VIDEOS_LIST_FAILED,
      data: error,
    });
  }
}

export default function* appSaga() {
  yield all([takeEvery(types.GET_VIDEOS_LIST, getVideosList)]);
}
