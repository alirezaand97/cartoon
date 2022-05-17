import { all, put, takeEvery } from "redux-saga/effects";
import types from "./types";
import Api from "../../api";
import endpoints from "./endpoints";

function* getVideosList({ data }) {
  try {
    let videos = yield Api.Get(endpoints.getVideos);
    console.log('here')

    console.log(videos);
    yield put({
      type: types.GET_VIDEOS_LIST,
      data,
    });
  } catch (error) {
    console.log(error)

  }
}

export default function* appSaga() {
  yield all([takeEvery(types.GET_VIDEOS_LIST, getVideosList)]);
}

