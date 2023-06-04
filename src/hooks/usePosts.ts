import { useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "./useTypedSelector";

export const usePosts = () => {
  const { posts } = useTypedSelector((state) => state.posts);
  const { searchValue } = useTypedSelector((state) => state.search);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [posts, searchValue]);

  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = postsPerPage * currentPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, filteredPosts, postsPerPage]);
  useEffect(() => {
    setCurrentPage(1);
  }, [paginatedPosts]);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  return {
    filteredPosts: paginatedPosts,
    handlePageChange,
    totalPages,
    currentPage,
  };
};
