import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import { userReducer } from "./userReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,
});
