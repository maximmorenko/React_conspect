import React from 'react';
import classes from './MyInput.module.css'
// оборачиваем компонент в функцию forwardRef(), второй параметр ссылка ref
const MyInput = React.forwardRef((props, ref) => {
    return (
        // в инпуте разворачиваем все пропсы {...props}
        // все что будет попадать в пропсы будет попадать в инпут
        <input 
        // указвваем путь в наш инпут ref
        ref={ref} 
        className={classes.myInput} 
        {...props}
        />
    );
});

export default MyInput;