import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsRequest } from "../store/actions/postActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Spinner } from "react-bootstrap";
import { fetchUsersRequest } from "../store/actions/userActions";
import { PostList } from "../shared/components/PostList/PostList";

export const Home: FC = () => {
  const [isLoadingDelayed, setIsLoadingDelayed] = useState(true);
  const { isLoading, posts, error } = useTypedSelector((state) => state.posts);

  const dispatch = useDispatch();
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(fetchPostsRequest());
      dispatch(fetchUsersRequest());
      setIsLoadingDelayed(false);
    }, 500);

    return () => clearTimeout(id);
  }, [dispatch]);

  if (isLoading || isLoadingDelayed)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (error || !posts) return <h1>Error happened</h1>;

  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};
