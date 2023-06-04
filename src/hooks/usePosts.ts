import { useEffect, useState } from "react";
import { useTypedSelector } from "./useTypedSelector";
import { IPost } from "../types/post.interface";

export const usePosts = () => {
  const { posts } = useTypedSelector((state) => state.posts);
  const { searchValue } = useTypedSelector((state) => state.search);
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>(posts);

  useEffect(() => {
    setFilteredPosts([
      ...posts.filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      ),
    ]);
  }, [searchValue]);
  return {
    filteredPosts,
  };
};
