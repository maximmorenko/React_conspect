import React from 'react';
import classes from './MyInput.module.css'

function MyInput(props) {
    return (
        // в инпуте разворачиваем все пропсы {...props}
        // все что будет попадать в пропсы будет попадать в инпут
        <input className={classes.myInput} {...props}/>
    );
}

export default MyInput;