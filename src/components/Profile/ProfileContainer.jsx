import React, { useEffect } from 'react';
import Profile from './Profile';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { requestPosts, requestUserProfile } from '../../redux/actions';

const ProfileContainer = () => {
  let params = useParams();
  const userId = Number(params.id);

  const { userProfile, postsList } = useSelector((state) => {
    return { userProfile: state.usersPage.userProfile, postsList: state.postsList };
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestPosts());
    dispatch(requestUserProfile(userId));
  }, []);

  const findPosts = [];
  postsList.forEach((element) => {
    if (element.userId === userId) {
      findPosts.push(element);
    }
  });
  return !(Object.keys(userProfile).length == 0) ? (
    <Profile user={userProfile} findPosts={findPosts} />
  ) : (
    <>Loading1...</>
  );
};

export default ProfileContainer;
