import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import './style/App.css';
import PostForm from './components/PostForm';
import PostList from './components/PostList';


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'аа', body: 'бб' },
    { id: 2, title: 'гг 2', body: 'аа' },
    { id: 3, title: 'вв 3', body: 'яя' },
  ]);
  const [filter, setFilter] = useState({ sort: '', query: '' });

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
  };
  // получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />

      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Посты про JS'}
      />
    </div>
      );
    }
    export default App;
