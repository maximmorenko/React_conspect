import React, {useState} from "react"; // реакт импортируем в каждый файл где создаем проект
import './style/App.css';
//import FuncComponent from './components/FuncComponent';
//import ClassComponent from './components/ClassComponent';
//import ClassCounter from './components/ClassCounter';
//import FuncCounter from './components/FuncCounter';
//import ChangeStateInput from './components/ChangeStateInput_Func';
//import PostItem from './components/PostItem';
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton"
import MyInput from "./components/UI/input/MyInput";

function App() {
   // Для передачи массива постов использдуем схему с деструктуризацие хука юзстейт 
   // передаем массив объектов 
  const [arrPosts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description'},
    {id: 2, title: 'Javascript 2', body: 'Description'},
    {id: 3, title: 'Javascript 3', body: 'Description'}
  ]);
  const [title, setTitle] = useState('')
  const addNewPost = (evt) => {
    // функция добавления поста
    // для того чтобы создать пост нам нужно добавить название и описание
    // используем двухсторонне связывание: const [title, setTitle] = useState('')
    // мы создаем новое состояние, по умолчанию с пустой строкой
    // при создасоздании поста страница будет обновляться, чтобы этого не было используем превеент дефолт
    evt.preventDefault();
    // предотвращаем дефолтное поведение браузера
    console.log(title)

  }
  return (
    <div className="App">
      {/* <FuncComponent /> */}
      {/* <ClassComponent /> */}
      {/* <ClassCounter /> */}
      {/* <FuncCounter /> */}
      {/* <ChangeStateInput /> */}
      {/* прописываем пропсы которые будем передавать */}
      {/* <PostItem post={{id: 1, tittle: 'Javascript', body: 'Description'}}/>  */}
      <form>
        {/* type='text' placeholder='Название поста' - это пропсы которые примет компонент MyInput */}
        {/* управляемый компонент*/}
        <MyInput 
        value={title}
        // из ивента с поля таргет достаем поле значение(value) и помещаем его в состояние setTitle(e.target.value)
        onChange={e => setTitle(e.target.value)}
        type='text' 
        placeholder='Название поста'/>
        <MyInput type='text' placeholder='Описание поста'/>
        {/* вешаем слушатель события на кнопку, при нажатии вызываем функцию добавляющую пост*/}
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList arrPosts={arrPosts} title='Посты про Javascript' desc='Javascript лучше чем Java'/>
    </div>
  );
}

export default App;
