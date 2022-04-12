import React from 'react'; // реакт импортируем в каждый файл где создаем проект

import FuncComponent from './components/FuncComponent';
import ClassComponent from './components/ClassComponent';
import ClassCounter from './components/ClassCounter';
import FuncCounter from './components/FuncCounter';
import ChangeStateInput from './components/changeStateInput_Func';

function App() {
  return (
    <div className="App">
      <FuncComponent />
      <ClassComponent />
      <ClassCounter />
      <FuncCounter />
      <ChangeStateInput />
    </div>
  );
}

export default App;
