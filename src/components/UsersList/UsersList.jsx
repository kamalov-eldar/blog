import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../User/User";

import { requestUsers } from "../../redux/actions";

const UsersList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers());
  }, [dispatch]);

  const usersList = useSelector((state) => {
    return state.usersList;
  });

  return <User usersList={usersList} />;
};

export default UsersList;
