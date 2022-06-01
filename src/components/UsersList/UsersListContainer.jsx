import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UsersList from './UsersList';

import { requestUsers } from '../../redux/actions';

const UsersListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestUsers());
  }, [dispatch]);

  const usersList = useSelector((state) => {
    return state.usersPage.users;
  });

  return <UsersList usersList={usersList} />;
};

export default UsersListContainer;
