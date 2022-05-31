import React, { useEffect } from "react";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import { requestComments } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { requestPosts } from "../../redux/actions";

const CommentsContainer = () => {
  let params = useParams();
  const dispatch = useDispatch();
  const { commentsList, postsList } = useSelector((state) => {
    return { commentsList: state.commentsPage.comments, postsList: state.postsList };
  });
  const findPost = postsList.find((post) => {
    return post.id === Number(params.postId);
  });
  useEffect(() => {
    dispatch(requestComments(params.postId));
    dispatch(requestPosts());
  }, [dispatch, params]);

  return <Comments commentsList={commentsList} findPost={findPost} />;
};
export default CommentsContainer;
