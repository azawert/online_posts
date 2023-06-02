import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,
  search: searchReducer,
});
