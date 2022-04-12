import React, {useState} from "react";
// чтобы изменить состояние компонента используем useState, импотрируем его из реакт

const FuncCounter = function() {
    //const state = useState(0);
    //console.log(state); // консоль показывает что useState это массив из двух элементов. 
    //Первый это значение, а второй - функция, которая это значение изменяет.
    //Это означает что мы можем сделать деструктуризацию
    const [count, setCount] = useState(0);
    //console.log(count); //5
    //console.log(setCount); // f для изменения count

    function increment(){
        //напрямую нельзя изменить count, запускаем функцию setCount специальную для этого
        setCount(count + 1)
    }
      
    function  decrement() {
        setCount(count - 1)
    }

    return (
      <div className='customClass'>
        <h1>Счетчик на функциях:</h1>
        <h2>{count}</h2> 
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };
  
  export default FuncCounter;