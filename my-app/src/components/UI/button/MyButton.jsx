import React from 'react';
// импортируем стиль как объект
import classes from './MyButton.module.css'

function MyButton(props) {
    return (
        // получаем стиль как свойство объекта
        <button className={classes.myBtn}>
            {props.children}
        </button>
        // так как реакт не знает куда вкладывать элементы, ему нужно указать это место
        // для этого есть специальный пропс children
    );
}

export default MyButton;