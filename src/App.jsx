import UsersListContainer from './components/UsersList/UsersListContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import PostsContainer from './components/Posts/PostsContainer';
import CommentsContainer from './components/Comments/CommentsContainer';
import { Route, Routes } from 'react-router-dom';
import style from './app.module.scss';

function App() {
  return (
    <div className={style.App}>
      <header className={style.header}>
        <h1 className={style.header__text}>Blog</h1>
      </header>
      <Routes>
        <Route path="/" element={<UsersListContainer />} />
        <Route path={'/profile/:id'} element={<ProfileContainer />} />
        <Route path={'/profile/:id/posts/'} element={<PostsContainer />} />
        <Route path={'/profile/:id/posts/:postId/'} element={<CommentsContainer />} />
        <Route
          path="*"
          element={
            <main style={{ padding: '2rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
