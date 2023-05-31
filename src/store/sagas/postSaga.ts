import { takeLatest, call, put } from "redux-saga/effects";
import {
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from "../actions/postActions";

import { fetchPosts } from "../../api/services/post.service";
import { IPost } from "../../types/post.interface";

function* fetchPostsSaga(): Generator<unknown, void, IPost[]> {
  try {
    const posts = yield call(fetchPosts);
    yield put({ type: FETCH_POSTS_SUCCESS, payload: posts });
  } catch (error) {
    yield put({ type: FETCH_POSTS_FAILURE, error: "something bad happened" });
  }
}

function* postsSaga() {
  yield takeLatest(FETCH_POSTS_REQUEST, fetchPostsSaga);
}

export default postsSaga;
