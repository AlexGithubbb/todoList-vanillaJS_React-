import React from 'react';
import Todo from './Todo';

const Todos = ({ todos, removeTodo }) => {
  const todoList = todos.map(todo => {
    return (
      <Todo
        todo={todo.todo}
        id={todo.id}
        key={todo.id}
        removeTodo={removeTodo}
      />
    );
  });
  return <ul>{todoList}</ul>;
};

export default Todos;
