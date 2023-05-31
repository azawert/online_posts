import { IPost } from "../../types/post.interface";
import {
  FETCH_POSTS_FAILURE,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  IFetchPostsFailureAction,
  IFetchPostsRequestAction,
  IFetchPostsSuccessAction,
} from "../actions/postActions";

interface IInitialPostState {
  posts: IPost[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IInitialPostState = {
  posts: [],
  isLoading: false,
  error: null,
};

type PostAction =
  | IFetchPostsSuccessAction
  | IFetchPostsFailureAction
  | IFetchPostsRequestAction;

export const postsReducer = (state = initialState, action: PostAction) => {
  switch (action.type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        error: null,
        isLoading: false,
      };
    case FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
