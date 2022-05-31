import React from "react";
import { NavLink } from "react-router-dom";

import style from "./profile.module.scss";

const Profile = ({ userFind, findPosts, userId }) => {
  const previewPosts = findPosts.slice(0, 3);

  if (!userFind) {
    return <>Loading...</>;
  }
  return (
    <div className={style.profile__user}>
      <h2 className={style.profile__title}>{userFind.username}</h2>
      <div className={style.profile__name}>
        <div className={style.profile__name__block}>
          <span className={style.profile__name__user}>{userFind.name}</span>
        </div>
      </div>
      <div className={style.profile}>
        <div className={style.profile__block}>
          <div className={style.profile__city}>{userFind.address.city}</div>
          <div className={style.profile__email}>{userFind.email}</div>
          <div className={style.profile__phone}>{userFind.phone}</div>
          <button className={style.profile__btn}>Написать сообщение</button>
          <button className={style.profile__btn}>Предложить сходить на концерт</button>
        </div>
      </div>
      <div className={style.profile}>
        <div className={style.profile__block}>
          <div className={style.profile__website}>{userFind.website}</div>
          <div className={style.profile__company}>{userFind.company.name}</div>
          <div className={style.profile__company}>{userFind.company.bs}</div>
        </div>
      </div>
      <div className={style.profile__posts}>
        <div className={style.profile__posts__block}>
          <h2 className={style.profile__posts__title}>Посты</h2>
          <div className={style.profile__posts__list}>
            {previewPosts.map((post) => (
              <div className={style.profile__post} key={post.id}>
                <h3 className={style.profile__post__title}>{post.title}</h3>
                <p className={style.profile__post__text}>{post.body} </p>
              </div>
            ))}
            <NavLink to={`posts/`} className={style.profile__post__link}>
              <button className={style.profile__posts__all}>Ещё</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
