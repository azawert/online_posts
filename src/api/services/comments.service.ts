import { IComment } from "../../types/comment.interface";
import { instance } from "../instance";

export const getCommentsByPostId = async (id: number): Promise<IComment[]> => {
  const resp = (await instance.get(`/comments?postId=${id}`)).data;
  return resp;
};
