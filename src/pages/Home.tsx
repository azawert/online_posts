import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsRequest, filterPosts } from "../store/actions/postActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Spinner } from "react-bootstrap";
import { fetchUsersRequest } from "../store/actions/userActions";
import { PostList } from "../shared/components/PostList/PostList";

export const Home: FC = () => {
  const [isLoadingDelayed, setIsLoadingDelayed] = useState(true);
  const { isLoading, error, posts, filteredPosts } = useTypedSelector(
    (state) => state.posts
  );
  const { searchValue } = useTypedSelector((state) => state.search);
  const dispatch = useDispatch();
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(fetchPostsRequest());
      dispatch(fetchUsersRequest());
      setIsLoadingDelayed(false);
    }, 500);

    return () => clearTimeout(id);
  }, [dispatch]);

  useEffect(() => {
    dispatch(filterPosts(searchValue));
  }, [searchValue]);
  if (isLoading || isLoadingDelayed)
    return (
      <div>
        <Spinner />
      </div>
    );

  if (error) return <h1>Error happened</h1>;

  return (
    <div>
      <PostList posts={searchValue.length > 0 ? filteredPosts : posts} />
    </div>
  );
};
