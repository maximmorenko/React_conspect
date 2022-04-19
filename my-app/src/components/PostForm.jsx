import React, {useState} from 'react';
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput";
import {useRef} from "react";

function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (evt) => {
        evt.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        // вызываем наш колбэк и передаем туда новый пост
        create(newPost);
        setPost({title: '', body: ''})
      }
    // так как передаче пропсов может идти только снизу вверх!!, т.е от дочернего компонента к родительскому,
    // то мы не можем передать данные из формы в массив постов
    // но  это можно сделать с помощью колбэк функции
    // мы вызываем эту функцию в дочернем компоненте и тем самым передаем пост в нужный нам массив
    return (
        <form>
        <MyInput 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})} // передаем сюда не значение setTitle(e.target.value), а объект 
        type='text' 
        placeholder='Название поста'
        />

        <MyInput 
        value={post.body} 
        onChange={e => setPost({...post, body: e.target.value})}
        type='text' 
        placeholder='Описание поста'
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
    );
}

export default PostForm;

