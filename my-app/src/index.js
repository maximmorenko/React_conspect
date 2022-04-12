import React from 'react'; // импортируем ядро реакта
import ReactDOM from 'react-dom/client'; // импортируем функцию createRoot с помощью которой будет поддерфиваться канкаред мод (18)
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//{ createRoot }

// вызвваем функцию рендер с двумя параметрами. Первый - компонент, который будем монтировать. 
// Второй - блок куда будем монтировать
//const target = document.getElementById('root');
//ReactDOM.render(<App />, target); //17
//ReactDOM.createRoot(<App />, target); //18