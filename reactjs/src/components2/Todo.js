import React from 'react';

const Todo = ({ todo, id, removeTodo }) => {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(id)}>remove</button>
    </li>
  );
};

export default Todo;
