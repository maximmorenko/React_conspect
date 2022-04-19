import React from "react";
import PostItem from './PostItem';

const PostList = ({posts, title, remove}) => {
    // принимаем функцию удялению поста как аргумент и передаем ее ниже, в PostItem
    // не вызываем!! а передаем как пропс!!
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {posts.map((post, index) => 
                // Для каждого поста мы отрисовываем постайтем и как пропс передаем туда объект
                // важно использовать ключ для айди а не индекс, так как индекс может измениться в массиве, а ключ нет
                // наличие ключей позволяет реакту рендерить те элементы в которых произошли измениния
                // номер по порядку получаем из индекса + 1
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}            
        </div>
    );
}

export default PostList;