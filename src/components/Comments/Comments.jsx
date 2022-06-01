import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showForm } from '../../redux/actions';
import CommentForm from './CommentForm';
import style from './comments.module.scss';

const Comments = ({ commentsList, findPost }) => {
  const dispatch = useDispatch();

  const formIsShow = useSelector((state) => state.commentsPage.formIsShow);
  const toggleShowForm = () => {
    dispatch(showForm(!formIsShow));
  };
  if (!findPost) {
    return <>Loading...</>;
  }
  return (
    <div className={style.comments__container}>
      <div className={style.comments}>
        <div className={style.post}>
          <h3 className={style.post__title}>{findPost.title}</h3>
          <p className={style.post__text}>{findPost.body} </p>
        </div>
        <div className={style.comments__block}>
          <h2 className={style.comments__title}>Комментарии</h2>
          <div className={style.comments__list}>
            {commentsList.map((comment) => (
              <div className={style.comment} key={comment.id}>
                <div className={style.comment__name}>
                  <h3 className={style.comment__title}>{comment.name}</h3>
                  <span className={style.comment__email}>{comment.email}</span>
                </div>
                <p className={style.comment__text}>{comment.body} </p>
              </div>
            ))}
          </div>
        </div>
        <div className={style.comment__add}>
          <button className={style.comment__btn} onClick={toggleShowForm}>
            Добавить комментарий
          </button>
          {formIsShow ? <CommentForm postId={findPost.id} /> : null}
        </div>
      </div>
    </div>
  );
};

export default Comments;
