import {
  CHANGE_SEARCH_VALUE,
  IChangeSearchValue,
} from "../actions/searchActions";

interface IInitialStateSearch {
  searchValue: string;
}

const initialState: IInitialStateSearch = {
  searchValue: "",
};
type SearchAction = IChangeSearchValue;

export const searchReducer = (state = initialState, action: SearchAction) => {
  switch (action.type) {
    case CHANGE_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};
