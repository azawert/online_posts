import { FC } from "react";
import { IPost } from "../../../types/post.interface";
import { SinglePost } from "./SinglePost/SinglePost";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface IPostListProps {
  posts: IPost[];
}

export const PostList: FC<IPostListProps> = ({ posts }) => {
  const users = useTypedSelector((state) => state.users.users);

  return (
    <div>
      {posts.map((post) => {
        const user = users?.find((user) => post.userId === user.id);
        if (!user) return null;
        return <SinglePost post={post} user={user} key={post.id} />;
      })}
    </div>
  );
};
