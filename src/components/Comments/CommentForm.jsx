import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { sendComment } from "../../redux/actions";
import style from "./comments.module.scss";

const CommentForm = (postId) => {
  const dispatch = useDispatch();

  const validateForm = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.comment) {
      errors.comment = "Required";
    }
    return errors;
  };

  const submitForm = (valuesForm, { resetForm }) => {
    dispatch(sendComment(postId, valuesForm));
    resetForm({});
  };
  return (
    <div className={style.comment__form__container}>
      <h4 className={style.comment__form__title}>Добавить комментарий</h4>
      <Formik
        initialValues={{
          email: "",
          name: "",
          comment: "",
        }}
        validate={validateForm}
        onSubmit={submitForm}
      >
        <Form className={style.comment__form} action="">
          <div className={style.comment__form__name}>
            <Field type="text" name="name" placeholder="name" /* value={} */ />
            <ErrorMessage className={style.comment__form__error} name="name" component="div" />
          </div>
          <div className={style.comment__form__email}>
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage className={style.comment__form__error} name="email" component="div" />
          </div>
          <div className={style.comment__form__block}>
            <Field
              as="textarea"
              className={style.comment__form__text}
              type="text"
              name="comment"
              placeholder="введите коментарий..."
            ></Field>
            <ErrorMessage className={style.comment__form__error} name="comment" component="div" />
          </div>
          <button className={style.comment__btn} type="submit">
            Отправить
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CommentForm;
