import { Action } from "redux";

import { IUser } from "../../types/user.interface";
export const FETCH_USERS_REQUEST = "FETCH__REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH__SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH__FAILURE";

export interface IFetchUsersSuccessAction
  extends Action<typeof FETCH_USERS_SUCCESS> {
  payload: IUser[];
}

export interface IFetchUsersFailureAction
  extends Action<typeof FETCH_USERS_FAILURE> {
  payload: Error;
}
export interface IFetchUsersRequestAction
  extends Action<typeof FETCH_USERS_REQUEST> {
  payload?: undefined;
}

export const fetchUsersRequest = (): IFetchUsersRequestAction => ({
  type: FETCH_USERS_REQUEST,
});

export const fetchUsersSuccess = (
  payload: IUser[]
): IFetchUsersSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  payload,
});

export const fetchUsersFailure = (
  payload: Error
): IFetchUsersFailureAction => ({
  type: FETCH_USERS_FAILURE,
  payload,
});
