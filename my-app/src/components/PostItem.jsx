import React from 'react';
import MyButton from './UI/button/MyButton';
// компоненты могут принимать входные данные (prors) сокр. от пропертис
// иными словами это аргумент функции, которым мы можем что-то из вне передавать
function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                {/* указываем пути к пропсам которые хотим получить */}
                <strong>{props.number}. {props.post.title}</strong>
                {/* заменим пропс id на number {props.post.id}*/}
                <div>
                  {props.post.body}
                </div>
            </div>
            <div>
                {/* вызываем функцию удаления при нажатии, и передаем в нее текущий пост как параметр */}
                <MyButton 
                onClick={() => props.remove(props.post)
                }>Удалить</MyButton>
            </div>
        </div>
    );
}

export default PostItem;
