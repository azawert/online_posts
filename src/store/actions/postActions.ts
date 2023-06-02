import { Action } from "redux";
import { IPost } from "../../types/post.interface";
export const FETCH_POSTS_REQUEST = "FETCH_POSTS_REQUEST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const POSTS_FILTER = "POSTS_FILTER";
export interface IFetchPostsSuccessAction
  extends Action<typeof FETCH_POSTS_SUCCESS> {
  payload: IPost[];
}

export interface IFetchPostsFailureAction
  extends Action<typeof FETCH_POSTS_FAILURE> {
  payload: Error;
}
export interface IFetchPostsRequestAction
  extends Action<typeof FETCH_POSTS_REQUEST> {
  payload?: undefined;
}
export interface IFilterPostsAction extends Action<typeof POSTS_FILTER> {
  payload: string;
}

export const fetchPostsRequest = (): IFetchPostsRequestAction => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (
  payload: IPost[]
): IFetchPostsSuccessAction => ({
  type: FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsFailure = (
  payload: Error
): IFetchPostsFailureAction => ({
  type: FETCH_POSTS_FAILURE,
  payload,
});

export const filterPosts = (payload: string): IFilterPostsAction => ({
  payload,
  type: POSTS_FILTER,
});
