import React, {useState} from "react"; // реакт импортируем в каждый файл где создаем проект
import {useRef} from "react";
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
    // {id: 1, title: 'Javascript 1', body: 'Description'}
  ]);
  //const [title, setTitle] = useState('')
  //const [body, setBody] = useState('') 
  // где steBody - функция, которая будет изменять body
  // для того чтобы не создавать для каждого инпута отделььное состояние
  // в качестве значения мы можем использовать не строку, а объект
  // для этого передаем объект а не строку:
  const [post, setPost] = useState({title: '', body: ''})


  // Второй способ полуения данных
  // Получение данных из неуправляемого инпута (компонента)
  // для етого используем хук useRef()
  // const bodyInputRef = useRef()
  // с помощью этого хука можно получить доступ к дом элементу, и уже у этого элемента забрать value
  // все хуки импортируем из реакт import {useRef} from "react";

  const addNewPost = (evt) => {
    // функция добавления поста
    // для того чтобы создать пост нам нужно добавить название и описание
    // используем двухсторонне связывание: const [title, setTitle] = useState('')
    // мы создаем новое состояние, по умолчанию с пустой строкой
    // при создасоздании поста страница будет обновляться, чтобы этого не было используем превеент дефолт
    evt.preventDefault();
    // поскольку вся нужная информация о посте уже находится в объекте, то нет смысла в переменной newPost
    // const newPost = {
    //   id: Date.now(),
    //   // id получим из текущей даты 
    //   title,
    //   body
    // }
    // проверяем в логах, что там нужный нам заголовок и тело
    // console.log(newPost);
    // предотвращаем дефолтное поведение браузера
    // console.log(title)
    // console.log(bodyInputRef.current.value)

    // созданый объект добавляем в массив постов
    // не передаем объект напрямую, а вызываем функцию 
    // setPosts([...arrPosts, newPost]); 
    // разворачиваем старый массив с уже существующими постами
    // и в конец добавляем новый пост
    // теперь вместо добавления в конец нового поста, передаем туда обьект в котором разворачиваем 
    // весь пост и добавляем id
    setPosts([...arrPosts, {...post, id: Date.now()}]);

    // добавим функционал очистки инпутов. для этого setTitle и setBody обнуляем:
    // setTitle('')
    // setBody('')
    // теперь для очистки достаточно вызвать setPost() с пустыми нужными строками
    setPost({title: '', body: ''})
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
        value={post.title} // title достаем из поста
        // из ивента с поля таргет достаем поле значение(value) и помещаем его в состояние setTitle(e.target.value)
        onChange={e => setPost({...post, title: e.target.value})} // передаем сюда не значение setTitle(e.target.value), а объект 
        // в котором разворачиваем весь старый массив постов и перезатираем нужный нам инпут
        type='text' 
        placeholder='Название поста'
        />

        {/* неуправляемый компонент*/}
        {/* <MyInput 
        // указываем пропс ref у инпута и передаем туда ссылку созданую с помощью useRef
        // чтобы передать ссылку нужно компонент обернуть в функцию forwardRef(), 
        // вторым параметром у которой и есть ссылка. идем в компонент MyInput.
        ref={bodyInputRef}
        type='text' 
        placeholder='Описание поста'
        /> */}
        {/* вешаем слушатель события на кнопку, при нажатии вызываем функцию добавляющую пост*/}

        {/* создадим еще один инпут. управляемый. для того чтобы поле можно было очишать */}
        <MyInput 
        value={post.body} // body достаем из поста
        onChange={e => setPost({...post, body: e.target.value})}
        type='text' 
        placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList arrPosts={arrPosts} title='Посты про Javascript' desc='Javascript лучше чем Java'/>
    </div>
  );
}

export default App;
