import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import usersReducer from "./users-reducer";
import postsReducer from "./posts-reducer";
import commentsReducer from "./comments-reducer";

let reducers = combineReducers({
  usersList: usersReducer,
  postsList: postsReducer,
  commentsPage: commentsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
