import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({ remove, posts, title }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {/* переносим список в транзишн групп */}
      <TransitionGroup>
      {posts.map((post, index) => 
      <CSSTransition
      // переносим сюда ключ, на корневой элемент списка
      key={post.id}
      timeout={500}
      classNames="post"
      >
        {/* заворачиваем элементы списка в цсстранзишн */}
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          
        />
        </CSSTransition>
      )}
      </TransitionGroup>
      
    </div>
  );
};
export default PostList;