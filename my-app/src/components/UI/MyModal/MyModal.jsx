import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
    // пропс чилдрен позволит вставлять любой контент в контентный блок див
    // пропс висибл будет показвать мод. окно
    // пропс сетВизибл будет прятать мод. окно при нажатии на темную область
    const rootClasses = [cl.myModal];
    if (visible === true) {
        // то добавляем еще один класс эктив
        rootClasses.push(cl.active);
    }
    return (
        // конструкция позволяющая менять классы модал на эктив 
        // создаем массив из двух классов и джойним их по пробелу [cl.myModal, cl.active].join(' ')
        // джоин возвращиет строку и у этой строки будет два класс склеенных по пробелу
        // с помощью этой конструкции мы определяем добавлять класс эктив или нет.

        // для того чтобы модалка закрывалась при нажатии на темное поле нужно на корневой блоок
        // повесить слушатель события onClick={() => setVisible(false)} 
        // вызываем функцию которую мы принимаем пропсом и передаем в нее фолс
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            {/* чтобы модальное окно не закрывалось при нажатии на его область
            нужно предотвратить всплытие, для этого вешаем слушатель события стопПропогейшн на блок с контентом */}
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
            
        </div>
    );
}

export default MyModal;