import { IPost } from "../../types/post.interface";
import { instance } from "../instance";

export const fetchPosts = async (): Promise<IPost[]> => {
  const posts = (await instance.get("/posts")).data;
  return posts;
};
