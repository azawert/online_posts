import { all } from "redux-saga/effects";
import postsSaga from "./postSaga";
import userSaga from "./userSaga";

import selectedUserSaga from "./selectedUserSaga";

export default function* rootSaga() {
  yield all([postsSaga(), userSaga(), selectedUserSaga()]);
}
