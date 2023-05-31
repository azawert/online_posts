import { all } from "redux-saga/effects";
import postsSaga from "./postSaga";

export default function* rootSaga() {
  yield all([postsSaga()]);
}
