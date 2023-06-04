import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsRequest } from "../../store/actions/postActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Pagination, Spinner } from "react-bootstrap";
import { fetchUsersRequest } from "../../store/actions/userActions";
import { PostList } from "../../shared/components/PostList/PostList";
import { changeSearchValue } from "../../store/actions/searchActions";
import { Input } from "../../shared/components/input/Input";
import styles from "./home.module.scss";
import { usePosts } from "../../hooks/usePosts";
export const Home: FC = () => {
  const [isLoadingDelayed, setIsLoadingDelayed] = useState(true);
  const { isLoading, error } = useTypedSelector((state) => state.posts);
  const { searchValue } = useTypedSelector((state) => state.search);
  const dispatch = useDispatch();
  const { filteredPosts, handlePageChange, totalPages, currentPage } =
    usePosts();
  const divRef = useRef(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeSearchValue(e.target.value));
  };
  const handleDeleteInputValue = () => {
    dispatch(changeSearchValue(""));
  };
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

  if (error) return <h1>Error happened</h1>;

  return (
    <div className={styles.home__wrapper}>
      <Input
        deleteInputValue={handleDeleteInputValue}
        value={searchValue}
        onChange={handleChange}
        placeholder='Enter title of post...'
        width={"500px"}
      />

      <PostList posts={filteredPosts} />
      <Pagination>
        {Array.from({ length: totalPages }).map((_, idx) => {
          return (
            <Pagination.Item
              active={currentPage === idx + 1}
              onClick={() => handlePageChange(idx + 1)}
              key={idx + 1}
            >
              {idx + 1}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
};
