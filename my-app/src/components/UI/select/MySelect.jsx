import React from 'react';

function MySelect({option, defaultValue, value, onChange}) {
    // пропсы которые будет принимать компонент - это массив опций
    // и дефолтное значение названия опции "сортировать по ..."
    // каждая опция это объект из name: "", value: ""
    // Для того чтобы следить за изменением значения внутри селекта, добавляем пропс value и onChange
    return (
        <select 
        value={value} 
        // таргет целим на значение селекта которое выбрал пользователь
        onChange={event => onChange(event.target.value)}
        >
            {/* дефолтный пропс должен быть неактивный, поэтому мы на него вешаем дисеблед */}
            <option disabled value="">{defaultValue}</option>
            {/* итерируемся по массиву опций, достаем из объекта key value и name*/}
            {/* ключ должен быть всегда уникальным, так как value у селекта всегда уникальное, то можем использовать его */}
            {option.map(option => 
            <option key={option.value} value={option.value}>{option.name}</option>
            )}
            
        </select>
    );
}

export default MySelect;