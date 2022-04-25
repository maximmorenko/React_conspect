import React, {useMemo, useState} from "react"; // реакт импортируем в каждый файл где создаем проект
import PostList from "./components/PostList";
import './style/App.css';
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
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

  // Поиск поста
  // колбек будет вызван только в том случае если какая-то из зависимостей поменяет свое значение
  //const sortedPosts = useMemo(() => {

  //}, [selectedSort, posts])

  // поиск
  // нам нужно фильтровать массив постов и удалять лишние, но так как они не возвроащаются обратно,
  // нужно фильтровать копию массива.
  const [searchQuery, setSearchQuery] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost ])
  }

  // Удаление поста.
  // Поскольку внутри дочернего компонента мы не имеем доступ к родительскому компоненту
  // будем использовать колбэк
  // аргумент будет post из дочернего элемента, который мы будем передавать в дочернем компоненте
  const removePost = (post) => {
    // с помощью фильтра удаляем из массива тот пост, который мы передали аргументом
    // отфильтровуем массив по условию если айдишники совпадают, то тогда элемент удаляется
    setPosts(posts.filter(p => p.id !== post.id))
  }

  
  // Реалиоозовуем двухстороннее связывание селекта
  const [selectedSort, setSelectedSort] = useState('')
  // сортируем массив
  const sortPosts = (sort) => {
    // перезаписуем состояние
    setSelectedSort(sort);
    // так как сорт мутируем массив то будем сортировать его копию [...posts]. используем мотод sort
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    // используем функцию локейлкомпейр для сравнения строк, сравнивам поле из объекта "а" с полем из объекта "б"
    console.log(sort)
  }


  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}></hr>
      <div>
        {/* поиск */}
        <MyInput 
        value={selectedSort}
        onChange={e => setSelectedSort(e.target.value)} // передаем сюда значение setSelectedSort(e.target.value)
        type='text' 
        placeholder='Поиск'
        />

        <MySelect
        // в значение передаем выбраный опшн
        value={selectedSort}
        // а в ончейндж будем передавать отсортированный массив функцией
        onChange={sortPosts}
        // передаем в наш компонент ожидаемые пропсы:
        defaultValue="сортировать по"
        option={[
          {value: 'title', name: 'названию'},
          {value: 'body', name: 'описанию'}
        ]}


        />
      </div>
      {posts.length !== 0 
      ? 
      <PostList remove={removePost} posts={posts} title='Посты про Javascript' desc='Javascript лучше чем Java'/>
      :
      <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
      }
      
      
    </div>
  );
}

export default App;
