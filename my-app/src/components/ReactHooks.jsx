// Хуки это специальные функции которые можно использовать в функциональном подходе либо в хуках
// хуки можно использовать только не верхнем уровне вложенности
// Все хуки начинаются со слова use 
// useState useEffect useRef useMemo useCallback useContext

// useState()
//const state = useState(0);
//console.log(state); // консоль показывает что useState это массив из двух элементов. 
//Первый это значение, а второй - функция, которая это значение изменяет.
//Это означает что мы можем сделать деструктуризацию
//const [count, setCount] = useState(0);
//console.log(count); //5
//console.log(setCount); // f для изменения count


// useMemo:

// useMemo(callback, deps) принимает два параметра, колбек и массив зависимости.
// Колбек должен возвращать результат какихто зависимостей либо отсортированный массив
// либо отфильтрованный либо арифметические вычисления.
// В массив зависимостей можно передаватьпеременные, поля объектов.
// Хук мемо производит вычисление, запоминает их и кеширует. это называется мемоизация.
// и на каждую отрисовку компонента она не пересчитует заново. она не сортирует массив заново и тд
// она достает отсортированный массив из кеша. 
// так она сортирует массив до тех пор пока одна из зависимостей не изменится. 
// и дальше начинает сортировать массив заново, по новому условию. 
// Новая зависимость - новое кеширование.
// если массив зависимостей пустой, то функция отработает один раз и больше зависимостей не будет