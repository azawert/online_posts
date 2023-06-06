export const BASE_URL = "https://jsonplaceholder.typicode.com/";

export interface ISortOptions {
  label: string;
  value: string;
}

export const SORT_OPTIONS: ISortOptions[] = [
  {
    value: "normal",
    label: "Обычный",
  },
  {
    value: "asc",
    label: "Title a-z",
  },
  {
    value: "desc",
    label: "Title z-a",
  },
];
