import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_SELECTED_USER_FAILURE,
  FETCH_SELECTED_USER_REQUEST,
  FETCH_SELECTED_USER_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  IFetchSelectedUserRequest,
  IFetchUserPostsRequest,
} from "../actions/selectedUserAction";

import { fetchPostsByUserId } from "../../api/services/post.service";
import { fetchUserById } from "../../api/services/user.service";
import { IPost } from "../../types/post.interface";
import { IUser } from "../../types/user.interface";

function* fetchUserPostsSaga(
  action: IFetchUserPostsRequest
): Generator<unknown, void, IPost[]> {
  try {
    const posts = yield call(fetchPostsByUserId, action.payload);
    yield put({ type: FETCH_USER_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    yield put({
      type: FETCH_USER_POSTS_FAILURE,
      error: "something bad happened",
    });
  }
}
function* fetchUserSaga(
  action: IFetchSelectedUserRequest
): Generator<unknown, void, IUser> {
  try {
    const user = yield call(fetchUserById, action.payload);
    yield put({ type: FETCH_SELECTED_USER_SUCCESS, payload: user });
  } catch (error) {
    yield put({
      type: FETCH_SELECTED_USER_FAILURE,
      error: "something bad happened",
    });
  }
}

function* selectedUserSaga() {
  yield takeLatest(FETCH_USER_POSTS_REQUEST, fetchUserPostsSaga);
  yield takeLatest(FETCH_SELECTED_USER_REQUEST, fetchUserSaga);
}

export default selectedUserSaga;
