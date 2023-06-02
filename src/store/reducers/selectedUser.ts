import {
  FETCH_SELECTED_USER_FAILURE,
  FETCH_SELECTED_USER_REQUEST,
  FETCH_SELECTED_USER_SUCCESS,
  FETCH_USER_POSTS_FAILURE,
  FETCH_USER_POSTS_REQUEST,
  FETCH_USER_POSTS_SUCCESS,
  IFetchSelectedUserFailure,
  IFetchSelectedUserRequest,
  IFetchSelectedUserSuccess,
  IFetchUserPostsFailure,
  IFetchUserPostsRequest,
  IFetchUserPostsSuccess,
} from "./../actions/selectedUserAction";
import { IPost } from "../../types/post.interface";
import { IUser } from "../../types/user.interface";

interface IInitialStateSelectedUser {
  user: IUser | null;
  userPosts: IPost[];
  isLoadingPosts: boolean;
  postsError: string | Error | null;
  userError: string | Error | null;
  isLoadingUser: boolean;
}

const initialState: IInitialStateSelectedUser = {
  isLoadingPosts: false,
  user: null,
  userPosts: [],
  postsError: null,
  userError: null,
  isLoadingUser: false,
};

type selectedUserAction =
  | IFetchSelectedUserFailure
  | IFetchSelectedUserRequest
  | IFetchSelectedUserSuccess
  | IFetchUserPostsFailure
  | IFetchUserPostsRequest
  | IFetchUserPostsSuccess;
export const selectedUserReducer = (
  state = initialState,
  action: selectedUserAction
): IInitialStateSelectedUser => {
  switch (action.type) {
    case FETCH_SELECTED_USER_REQUEST:
      return {
        ...state,
        isLoadingUser: true,
      };
    case FETCH_SELECTED_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoadingUser: false,
      };
    case FETCH_SELECTED_USER_FAILURE:
      return {
        ...state,
        user: null,
        userError: action.payload ?? "error while fetching user",
        isLoadingUser: false,
      };
    case FETCH_USER_POSTS_REQUEST:
      return {
        ...state,
        isLoadingPosts: true,
      };
    case FETCH_USER_POSTS_SUCCESS:
      return {
        ...state,
        userPosts: action.payload,
        isLoadingPosts: false,
      };
    case FETCH_USER_POSTS_FAILURE:
      return {
        ...state,
        userPosts: [],
        isLoadingPosts: false,
        postsError: action.payload ?? "Error while fetching posts",
      };
    default:
      return state;
  }
};
