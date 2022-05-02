// Компоненти у React мають декілька спеціальних методів, 
// що забезпечують можливість виконувати дії у визначений 
// час у їхньому життєвому циклі. Вони називаються методами 
// життєвого циклу, чи перехоплювачами життєвого циклу і 
// дозволяють виловити компонент у визначений час. 
// Це може бути до того, як вони будуть показані, 
// перш ніж вони оновляться, перш ніж вони отримають реквізити, 
// перш ніж від'єднати і так далі. Ось список декількох методів 
// життєвого циклу: 
// componentWillMount() 
// componentDidMount() 
// shouldComponentUpdate() 
// componentDidUpdate() 
// componentWillUnmount(). 
// Протягом наступних уроків розглянемо деякі основні випадки використання даних методів.

// Примітка: метод життєвого циклу componentWillMount буде 
// виключено з майбутньої версії 16.X і видалено з версії 17. (Джерело)

// Метод componentWillMount() викликається перед методом render(), 
// коли компонент підключений до DOM. Запишіть щось в консоль 
// в межах componentWillMount(); щоб побачити результат - відкрийте консоль вашого браузера.

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   componentWillMount() {
//     // Змініть код під цим рядком
// console.log('dfdfdf')
//     // Змініть код над цим рядком
//   }
//   render() {
//     return <div />
//   }
// };

// Більшість веб-розробників в якийсь момент мають викликати кінцеву точку API, 
// щоб отримати дані. Якщо ви працюєте у React, потрібно розуміти як виконати цю дію.

// Найкращим рішенням буде розмістити виклик API, 
// або будь-які інші виклики направлені до сервера у методі 
// життєвого циклу componentDidMount(). Цей метод викликають після того, 
// як компонент встановлено в DOM. 
// Будь-які виклики setState() активують ререндер вашого компонента. 
// Коли ви викликаєте API у цьому методі й встановлюєте стан 
// відповідно до вихідних API даних, цей метод автоматично запустить оновлення.

// В componentDidMount() є імітація виклику API. 
// Через 1 секунди він симулює виклик до сервера для отримання даних. 
// У цьому прикладі йде запит на кількість поточних активних користувачів сайту. 
// У рендер методі покажіть значення activeUsers у h1 після 
// тексту Active Users:. Подивіться, що відбувається при попередньому 
// перегляді та спробуйте змінити таймаут, щоб побачити різні ефекти.

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         activeUsers: null,
//         activeUser: 673
//       };
//     }
//     componentDidMount() {
//       setTimeout(() => {
//         this.setState({
//           activeUsers: 1273
          
//         });
//       }, 1000);
//     }
//     render() {
//       return (
//         <div>
//           {/* Змініть код під цим рядком */}
//           <h1>Active Users: {this.state.activeUsers}</h1>
//           {/* Змініть код над цим рядком */}
//         </div>
//       );
//     }
//   }

  //Active Users: 1273

  //////////////////////////////////////////////////////////////

//   В этой задаче вам нужно изменить два метода жизненного цикла: 
//   componentDidMount и componentWillUnmount. 
//   Вы используете componentDidMount, когда хотите что-то настроить, 
//   в вашем случае прослушиватель событий. 
//   Вы используете componentWillUnmount, когда вам нужно что-то очистить, ваш прослушиватель событий.

// Вы добавите прослушиватель событий в метод componentDidMount, 
// который будет прослушивать событие «keydown». 
// Используйте document.addEventListener (событие, функция, необязательный (useCapture)). 
// Затем удалите этот же прослушиватель событий, 
// передав те же аргументы в document.removeEventListener(event, function, optional(useCapture))
//  в методе componentWillUnmount.

// Примечание: document.addEventListener и document.removeEventListener будут 
// принимать строку в кавычках для своего события, и при передаче функции
//  вы будете ссылаться на функцию handleKeyPress() как this.handleKeyPress. 
//  Если вы вызовете функцию как this.handleKeyPress(), прослушиватель 
//  событий сначала оценит функцию и вернет значение undefined.

// class MyComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         message: ''
//       };
//       this.handleEnter = this.handleEnter.bind(this);
//       this.handleKeyPress = this.handleKeyPress.bind(this);
//     }
//     // Змініть код під цим рядком
//     componentDidMount() {
//       document.addEventListener('keydown', this.handleKeyPress)
  
//     }
//     componentWillUnmount() {
//       document.removeEventListener('keydown', this.handleKeyPress)
  
//     }
//     // Змініть код над цим рядком
//     handleEnter() {
//       this.setState((state) => ({
//         message: state.message + 'You pressed the enter key! '
//       }));
//     }
//     handleKeyPress(event) {
//       if (event.keyCode === 13) {
        
//         this.handleEnter();
//       }
//     }
//     render() {
//       return (
//         <div>
//           <h1>{this.state.message}</h1>
//         </div>
//       );
//     }
//   };