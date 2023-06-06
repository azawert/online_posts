import { FC } from "react";
import { IPost } from "../../../types/post.interface";
import { SinglePost } from "./SinglePost/SinglePost";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

interface IPostListProps {
  posts: IPost[];
  isUserPage?: boolean;
}

export const PostList: FC<IPostListProps> = ({ posts, isUserPage }) => {
  const users = useTypedSelector((state) => state.users.users);
  const { user } = useTypedSelector((state) => state.selectedUser);
  return (
    <div>
      {posts.length > 0 ? (
        posts.map((post) => {
          const userFromPost = users?.find((user) => post.userId === user.id);
          return (
            <SinglePost
              post={post}
              user={isUserPage ? user! : userFromPost!}
              key={post.id}
              isUserPage={isUserPage}
            />
          );
        })
      ) : (
        <h1>No posts</h1>
      )}
    </div>
  );
};
