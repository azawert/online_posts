import { ChangeEvent, FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsRequest } from "../../store/actions/postActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Form, Pagination, Spinner } from "react-bootstrap";
import { fetchUsersRequest } from "../../store/actions/userActions";
import { PostList } from "../../shared/components/PostList/PostList";
import { Input } from "../../shared/components/input/Input";
import styles from "./home.module.scss";
import { usePosts } from "../../hooks/usePosts";
import { SORT_OPTIONS } from "../../shared/constants/constants";
export const Home: FC = () => {
  const [isLoadingDelayed, setIsLoadingDelayed] = useState(true);
  const { isLoading, error } = useTypedSelector((state) => state.posts);
  const dispatch = useDispatch();
  const {
    filteredPosts,
    handlePageChange,
    totalPages,
    currentPage,
    searchValue,
    setSearchValue,
    handleSortChange,
  } = usePosts();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const handleDeleteInputValue = () => {
    setSearchValue("");
  };
  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(fetchPostsRequest());
      dispatch(fetchUsersRequest());
      setIsLoadingDelayed(false);
    }, 500);
    setSearchValue("");
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
      <div>
        <Input
          deleteInputValue={handleDeleteInputValue}
          value={searchValue}
          onChange={handleChange}
          placeholder='Enter title of post...'
        />
        <Form.Select onChange={handleSortChange}>
          {SORT_OPTIONS.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Select>
      </div>
      {filteredPosts.length > 0 ? (
        <PostList posts={filteredPosts} />
      ) : (
        <h1>No posts found</h1>
      )}
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
