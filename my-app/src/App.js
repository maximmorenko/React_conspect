import React, {useState} from "react"; // реакт импортируем в каждый файл где создаем проект
import './style/App.css';
//import FuncComponent from './components/FuncComponent';
//import ClassComponent from './components/ClassComponent';
//import ClassCounter from './components/ClassCounter';
//import FuncCounter from './components/FuncCounter';
//import ChangeStateInput from './components/ChangeStateInput_Func';
//import PostItem from './components/PostItem';
import PostList from "./components/PostList";

function App() {
   // Для передачи массива постов использдуем схему с деструктуризацие хука юзстейт 
   // передаем массив объектов 
  const [arrPosts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ]);
  const [arrPosts2, setPosts2] = useState([
    {id: 1, title: 'Java 1', body: 'Description'},
    {id: 2, title: 'Java 2', body: 'Description'},
    {id: 3, title: 'Java 3', body: 'Description'}
  ]);
  return (
    <div className="App">
      {/* <FuncComponent /> */}
      {/* <ClassComponent /> */}
      {/* <ClassCounter /> */}
      {/* <FuncCounter /> */}
      {/* <ChangeStateInput /> */}
      {/* прописываем пропсы которые будем передавать */}
      {/* <PostItem post={{id: 1, tittle: 'Javascript', body: 'Description'}}/>  */}
      <PostList arrPosts={arrPosts} title='Список постов 1'/>
      <PostList arrPosts={arrPosts2} title='Список постов 2'/>
    </div>
  );
}

export default App;
