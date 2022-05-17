import { all } from "redux-saga/effects";
import AppSaga from "./App/saga";

export default function* Sagas() {
  yield all([AppSaga()]);
}
