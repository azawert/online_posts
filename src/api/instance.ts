import axios from "axios";
import { BASE_URL } from "../shared/constants/constants";

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "Application/json",
  },
});
