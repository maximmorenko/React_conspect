import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import './style/App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

import MyModal from './components/UI/MyModal/MyModal';
import MyButton from './components/UI/button/MyButton';
import ConditionalProps from './components/ConditionalProps'


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'бб' },
    { id: 2, title: 'гг 2', body: 'аа' },
    { id: 3, title: 'вв 3', body: 'яя' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  // создаем состояние , которое будет отвечать за включен эктив мод. окна или нет
  const [modal, setModal] = useState(false);
  // по умолчанию это состояние будет равно фолс и его мы будем передавать как пропс в модалку
  // setModal - функция которая это состояние меняет

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    // для того чтобы закрыть модалку после создания нового поста, достаточно засетить фолс
    setModal(false);
  };
  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      {/* создаем кнопку для вызова мод окна */}
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Новый пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost} />
      </MyModal>
      
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Посты про JS'} />
      <hr style={{ margin: '15px 0' }} />
      <ConditionalProps/>
      <hr style={{ margin: '15px 0' }} />
    </div>
      );
    }
    export default App;
