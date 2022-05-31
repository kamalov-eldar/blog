import { usersAPI, postsAPI, commentsAPI } from "../utils/api";
import {} from "../utils/api";
import { SET_COMMENTS, ADD_COMMENT, SET_USERS, SET_POSTS, SHOW_FORM } from "./actionsType";

export const setUsers = (users) => ({ type: SET_USERS, users });
export const setPosts = (posts) => ({ type: SET_POSTS, posts });
export const setComments = (comments) => ({ type: SET_COMMENTS, comments });
export const addComment = (comment) => ({ type: ADD_COMMENT, comment });
export const showForm = (formIsShow) => ({ type: SHOW_FORM, formIsShow });

export const requestUsers = () => {
  return (dispatch) => {
    usersAPI.getUsers().then((responce) => {
      dispatch(setUsers(responce));
    });
  };
};
export const requestPosts = () => {
  return (dispatch) => {
    postsAPI.getPosts().then((responce) => {
      dispatch(setPosts(responce));
    });
  };
};
export const requestComments = (postId) => {
  return (dispatch) => {
    commentsAPI.getComments(postId).then((responce) => {
      dispatch(setComments(responce));
    });
  };
};
export const sendComment = (postId, valuesForm) => {
  return (dispatch) => {
    postsAPI.postComment(postId, valuesForm).then((responce) => {
      dispatch(addComment(responce));
    });
  };
};
