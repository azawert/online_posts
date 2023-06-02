import { Action } from "redux";

export const CHANGE_SEARCH_VALUE = "CHANGE_SEARCH_VALUE";

export interface IChangeSearchValue extends Action<typeof CHANGE_SEARCH_VALUE> {
  payload: string;
}

export const changeSearchValue = (payload: string): IChangeSearchValue => ({
  payload,
  type: CHANGE_SEARCH_VALUE,
});
