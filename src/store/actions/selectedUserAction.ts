import { Action } from "redux";
import { IPost } from "../../types/post.interface";
import { IUser } from "../../types/user.interface";

export const FETCH_USER_POSTS_REQUEST = "FETCH_USER_POSTS_REQUEST";
export const FETCH_SELECTED_USER_REQUEST = "FETCH_SELECTED_USER_REQUEST";
export const FETCH_USER_POSTS_SUCCESS = "FETCH_USER_POSTS_SUCCESS";
export const FETCH_SELECTED_USER_SUCCESS = "FETCH_SELECTED_USER_SUCCESS";
export const FETCH_USER_POSTS_FAILURE = "FETCH_USER_POSTS_FAILURE";
export const FETCH_SELECTED_USER_FAILURE = "FETCH_SELECTED_USER_FAILURE";

export interface IFetchUserPostsRequest
  extends Action<typeof FETCH_USER_POSTS_REQUEST> {
  payload: number;
}

export interface IFetchSelectedUserRequest
  extends Action<typeof FETCH_SELECTED_USER_REQUEST> {
  payload: number;
}

export interface IFetchUserPostsSuccess
  extends Action<typeof FETCH_USER_POSTS_SUCCESS> {
  payload: IPost[];
}

export interface IFetchSelectedUserSuccess
  extends Action<typeof FETCH_SELECTED_USER_SUCCESS> {
  payload: IUser;
}

export interface IFetchUserPostsFailure
  extends Action<typeof FETCH_USER_POSTS_FAILURE> {
  payload: Error | string;
}

export interface IFetchSelectedUserFailure
  extends Action<typeof FETCH_SELECTED_USER_FAILURE> {
  payload: Error | string;
}

export const fetchSelectedUserRequest = (
  id: number
): IFetchSelectedUserRequest => ({
  type: FETCH_SELECTED_USER_REQUEST,
  payload: id,
});

export const fetchSelectedUserSuccess = (
  payload: IUser
): IFetchSelectedUserSuccess => ({
  type: FETCH_SELECTED_USER_SUCCESS,
  payload,
});

export const fetchSelectedUserFailure = (
  payload: Error
): IFetchSelectedUserFailure => ({
  type: FETCH_SELECTED_USER_FAILURE,
  payload,
});
export const fetchUserPostsRequest = (id: number): IFetchUserPostsRequest => ({
  type: FETCH_USER_POSTS_REQUEST,
  payload: id,
});

export const fetchUserPostsSuccess = (
  payload: IPost[]
): IFetchUserPostsSuccess => ({
  type: FETCH_USER_POSTS_SUCCESS,
  payload,
});

export const fetchUsersPostsFailure = (
  payload: Error
): IFetchUserPostsFailure => ({
  type: FETCH_USER_POSTS_FAILURE,
  payload,
});
