import React, { useState } from "react"; // реакт импортируем в каждый файл где создаем проект
import PostList from "./components/PostList";
import './style/App.css';
import PostForm from "./components/PostForm";
//import FuncComponent from './components/FuncComponent';
//import ClassComponent from './components/ClassComponent';
//import ClassCounter from './components/ClassCounter';
//import FuncCounter from './components/FuncCounter';
//import ChangeStateInput from './components/ChangeStateInput_Func';
//import PostItem from './components/PostItem';


function App() {
  const [posts, setPosts] = useState([
    {title: 'Пост по умолчанию', body: 'описание'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost ])
  }

  // Удаление поста.
  // Поскольку внутри дочернего компонента мы не имеем доступ к родительскому
  // будем использовать колбэк
  // аргумент будет post из дочернего элемента, который мы будем передавать в дочернем компоненте
  const removePost = (post) => {
    // с помощью фильтра удаляем из массива тот пост, который мы передали аргументом
    // отфильтровуем массив по условию если айдишники совпадают, то тогда элемент удаляется
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {/* прокидываем функцию на два уровня, сначала в постЛист, потом в постАйтем */}
      <PostList remove={removePost} posts={posts} title='Посты про Javascript' desc='Javascript лучше чем Java'/>
    </div>
  );
}

export default App;
