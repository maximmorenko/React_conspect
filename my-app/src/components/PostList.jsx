import React, {useState} from "react";
import PostItem from './PostItem';

const PostList = ({arrPosts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {arrPosts.map(post => 
                // Для каждого поста мы отрисовываем постайтем и как пропс передаем туда объект
                // важно использовать ключ для айди а не индекс, так как индекс может измениться в массиве, а ключ нет
                // наличие ключей позволяет реакту рендерить те элементы в которых произошли измениния
                <PostItem post={post} key={post.id} />
            )}            
        </div>
    );
}

export default PostList;