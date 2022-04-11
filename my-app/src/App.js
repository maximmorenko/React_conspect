import React from 'react'; // реакт импортируем в каждый файл где создаем проект

import FuncComponent from './components/FuncComponent';
import ClassComponent from './components/ClassComponent';



function App() {
  return (
    <div className="App">
      <FuncComponent />
      <ClassComponent />
    </div>
  );
}

export default App;
