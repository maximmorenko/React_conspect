import React from 'react'; // реакт импортируем в каждый файл где создаем проект

import FuncComponent from './components/FuncComponent';
import ClassComponent from './components/ClassComponent';
import ClassCounter from './components/ClassCounter';


function App() {
  return (
    <div className="App">
      <FuncComponent />
      <ClassComponent />
      <ClassCounter />
    </div>
  );
}

export default App;
