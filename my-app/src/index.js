import React from 'react'; // импортируем ядро реакта
import ReactDOM from 'react-dom'; // импортируем реакт дом для того чтобы вмонтировать в него приложение
import App from './App';  //  импортируем компонент (приложение)

// вызвваем функцию рендер с двумя параметрами. Первый - компонент, который будем монтировать. 
// Второй - блок куда будем монтировать
const target = document.getElementById('root');
ReactDOM.render(<App />, target);
