import { FC } from "react";
import { IUser } from "../../types/user.interface";

interface IUserPage {
  user: IUser;
}
export const User: FC<IUserPage> = ({ user }) => {
  return <div>User</div>;
};
