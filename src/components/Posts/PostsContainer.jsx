import React, { useEffect } from "react";
import Posts from "./Posts";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestPosts } from "../../redux/actions";

const PostsContainer = () => {
  let params = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPosts());
  }, []);

  const postsList = useSelector((state) => {
    return state.postsList;
  });

  const findPosts = [];
  postsList.forEach((element) => {
    if (element.userId === Number(params.id)) {
      findPosts.push(element);
    }
  });

  return <Posts findPosts={findPosts} userId={params.id} />;
};
export default PostsContainer;
