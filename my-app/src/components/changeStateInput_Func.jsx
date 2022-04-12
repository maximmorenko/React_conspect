import React, {useState} from "react";

// Функция меняющая состояние поля ввода в онлайн режиме

const ChangeStateInput = function() {
    //const state = useState("каокй-то текст");
    //console.log(state); // консоль показывает что useState это массив из двух элементов. 
    //Первый это значение, а второй - функция, которая это значение изменяет.
    //Это означает что мы можем сделать деструктуризацию
    const [txt, setText] = useState("введите текст"); //введем какой-то текст по умолчанию 
    // в инпут нужно добавить функцию которая отслеживает изменения (слушатель событий onChange)
    // добавляем в слушатель event, в качестве колбека, функцию изменения состояния setText


    // function  clearValue() {
    //     event => setText(event.target.value = '')
    // } 

    return (
        <div>
          <h1>Изменяем состояние поля ввода в онлайн режиме:</h1>
          <h2>{txt}</h2> 
          <input 
          tupe="text" 
          value={txt}
          onChange={event => setText(event.target.value)}
          />
          <button onClick={event => setText(event.target.value = "введите текст")}>очистить</button>
        </div>
      );
}
export default ChangeStateInput; 