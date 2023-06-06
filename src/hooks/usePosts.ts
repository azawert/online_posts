import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "./useTypedSelector";
import { ISortOptions } from "../shared/constants/constants";

export const usePosts = () => {
  const { posts } = useTypedSelector((state) => state.posts);
  const [sortOption, setSortOption] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [posts, searchValue]);
  const sortedPosts = useMemo(() => {
    if (sortOption === "asc") {
      return [...filteredPosts].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "desc") {
      return [...filteredPosts].sort((a, b) => b.title.localeCompare(a.title));
    } else {
      return filteredPosts;
    }
  }, [sortOption, filteredPosts]);
  const paginatedPosts = useMemo(() => {
    const indexOfLastPost = postsPerPage * currentPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  }, [currentPage, postsPerPage, sortedPosts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const handleSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  return {
    filteredPosts: paginatedPosts,
    handlePageChange,
    totalPages,
    currentPage,
    searchValue,
    setSearchValue,
    handleSortChange,
    sortOption,
  };
};
