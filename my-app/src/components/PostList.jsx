import React, {useState} from "react";
import PostItem from './PostItem';

const PostList = ({arrPosts, title, desc}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            <h2 style={{textAlign: 'center'}}>
                {desc}
            </h2>
            {arrPosts.map((post, index) => 
                // Для каждого поста мы отрисовываем постайтем и как пропс передаем туда объект
                // важно использовать ключ для айди а не индекс, так как индекс может измениться в массиве, а ключ нет
                // наличие ключей позволяет реакту рендерить те элементы в которых произошли измениния
                // номер по порядку получаем из индекса + 1
                <PostItem number={index + 1} post={post} key={post.id} />
            )}            
        </div>
    );
}

export default PostList;