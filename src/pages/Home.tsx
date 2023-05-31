import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchPostsRequest } from "../store/actions/postActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const Home: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPostsRequest());
  }, [dispatch]);
  const state = useTypedSelector((state) => state.posts);
  console.log(state);
  return <div>Home</div>;
};
