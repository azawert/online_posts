import { takeLatest, call, put } from "redux-saga/effects";
import { IPost } from "../../types/post.interface";
import { fetchUsers } from "../../api/services/user.service";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "../actions/userActions";

function* fetchUsersSaga(): Generator<unknown, void, IPost[]> {
  try {
    const users = yield call(fetchUsers);
    yield put({ type: FETCH_USERS_SUCCESS, payload: users });
  } catch (error) {
    yield put({ type: FETCH_USERS_FAILURE, error: "something bad happened" });
  }
}

function* userSaga() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsersSaga);
}

export default userSaga;
