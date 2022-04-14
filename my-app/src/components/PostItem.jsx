import React from 'react';

// компоненты могут принимать входные данные (prors) сокр. от пропертис
// иными словами это аргумент функции, которым мы можем что-то из вне передавать
function PostItem(props) {
    return (
        <div className="post">
            <div className="post__content">
                {/* указываем пути к пропсам которые хотим получить */}
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                  {props.post.body}
                </div>
            </div>
            <div>
                <button className='post__btns'>Удалить</button>
            </div>
        </div>
    );
}

export default PostItem;
