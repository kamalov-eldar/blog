import React from "react";
import { NavLink } from "react-router-dom";
import style from "./posts.module.scss";

const Posts = ({ findPosts, userId }) => {
  return (
    <>
      <div className={style.posts}>
        <div className={style.posts__block}>
          <h2 className={style.posts__title}>Посты</h2>
          <div className={style.posts__list}>
            {findPosts.map((post) => (
              <NavLink
                to={`/profile/${userId}/posts/${post.id}`}
                key={post.id}
                className={style.post__link}
              >
                <div className={style.post}>
                  <h3 className={style.post__title}>{post.title}</h3>
                  <p className={style.post__text}>{post.body} </p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
