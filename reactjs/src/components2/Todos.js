import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, removeTodo }) => {
  const todoList = todos.map((todo, i) => {
    return <Todo key={i} id={i} todo={todo} removeTodo={removeTodo} />;
  });
  return <ul>{todoList}</ul>;
};

export default Todos;
