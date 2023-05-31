import { all } from "redux-saga/effects";
import postsSaga from "./postSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
  yield all([postsSaga(), userSaga()]);
}
