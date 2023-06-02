import { IPost } from "../../types/post.interface";
import { instance } from "../instance";

export const fetchPosts = async (): Promise<IPost[]> => {
  const posts = (await instance.get("/posts")).data;
  return posts;
};

export const fetchPostsByUserId = async (id: number): Promise<IPost[]> => {
  const posts = (await instance.get(`/posts?userId=${id}`)).data;
  return posts;
};
