import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, removeTodo }) => {
  const todoList = todos.map((todo, i) => {
    return <Todo key={i} todo={todo} id={i} removeTodo={removeTodo} />;
  });
  return <ul>{todoList}</ul>;
};

export default Todos;
