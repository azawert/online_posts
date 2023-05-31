import { IUser } from "../../types/user.interface";
import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  IFetchUsersFailureAction,
  IFetchUsersRequestAction,
  IFetchUsersSuccessAction,
} from "../actions/userActions";

export interface IInitialUserState {
  users: IUser[] | null;
  error: string | null | Error;
}

const initialState: IInitialUserState = {
  users: null,
  error: null,
};

type UserAction =
  | IFetchUsersSuccessAction
  | IFetchUsersFailureAction
  | IFetchUsersRequestAction;

export const userReducer = (
  state = initialState,
  action: UserAction
): IInitialUserState => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
