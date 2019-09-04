import React from 'react';
import TodoItem from './TodoItem';

const TodoItems = ({ todos, removeTodo }) => {
  const todoItems = todos.map((todo, i) => {
    return <TodoItem todo={todo} key={i} id={i} removeTodo={removeTodo} />;
  });
  return (
    <div>
      <ul style={listStyle}>{todoItems}</ul>
    </div>
  );
};

const listStyle = {
  listStyle: 'none'
};

export default TodoItems;
