import { IUser } from "../../types/user.interface";
import { instance } from "../instance";

export const fetchUsers = async (): Promise<IUser[]> => {
  const users = (await instance.get("/users")).data;
  return users;
};

export const fetchUserById = async (id: number): Promise<IUser> => {
  const user = (await instance.get(`/users/${id}`)).data;
  return user;
};
