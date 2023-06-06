import { combineReducers } from "redux";
import { postsReducer } from "./postReducer";
import { userReducer } from "./userReducer";

import { selectedUserReducer } from "./selectedUser";

export const rootReducer = combineReducers({
  posts: postsReducer,
  users: userReducer,

  selectedUser: selectedUserReducer,
});
