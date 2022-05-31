import React, { useEffect } from "react";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { requestPosts, requestUsers } from "../../redux/actions";

const ProfileContainer = () => {
  let params = useParams();

  const { usersList, postsList } = useSelector((state) => {
    return { usersList: state.usersList, postsList: state.postsList };
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestPosts());
    dispatch(requestUsers());
  }, []);

  const findPosts = [];
  postsList.forEach((element) => {
    if (element.userId === Number(params.id)) {
      findPosts.push(element);
    }
  });
  const userFind = usersList.find((user) => {
    return user.id === Number(params.id);
  });

  return <Profile userFind={userFind} userId={params.id} findPosts={findPosts} />;
};
export default ProfileContainer;
