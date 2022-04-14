import React from "react";

// классовый компонент - устаревший подход, в основном используется функциональный

class ClassCounter extends React.Component {
  //ClassCounter - функция которая наследуется от реакт компонента и возвращает jsx
  // в классовом компоненте хуки использовать нельзя, создаем конструктор
    constructor(props) {
      super(props);
      //инициализируем состояние с помощью state
      this.state = {
        count: 0
      }
      this.increment = this.increment.bind(this); // если не забиндить контекст, то он теряется и setState вызывается у undefined
      this.decrement = this.decrement.bind(this);
    }
     // в классах объявление функции происходит без слова function
     // объявляем функции по увелисению и уменьшению
    increment() {
      // напрямую изменять состояния нельзя, используем специальную для этого функцию setState
      this.setState(
        state => ({
          count: this.state.count + 2
        })
        )
    }
    decrement() {
      this.setState(
        state => ({
          count: this.state.count - 2
        })
        )
    }
  
    render() {
      // в отличии от функциональных компонентов жсх воозвращаем в круглых скобках
      // поскольку мы находимся внутри класс, чтобы обратиться к свойствам используем this
      return (
        <div className="post">
          <h2>Счетчик на классах:</h2>
          <h3>{this.state.count}</h3> 
          <button className='post__btns' onClick={this.increment}>Increment</button>
          <button className='post__btns' onClick={this.decrement}>Decrement</button>
        </div>
      );
    }
  }
  export default ClassCounter;