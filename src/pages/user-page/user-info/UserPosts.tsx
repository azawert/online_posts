import { FC } from "react";
import { PostList } from "../../../shared/components/PostList/PostList";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Spinner } from "react-bootstrap";

export const UserPosts: FC = () => {
  const { isLoadingPosts, userPosts } = useTypedSelector(
    (state) => state.selectedUser
  );

  if (isLoadingPosts) {
    return <Spinner />;
  }
  return (
    <div>
      <PostList posts={userPosts} isUserPage />
    </div>
  );
};
