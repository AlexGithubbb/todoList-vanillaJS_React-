import React from 'react';

const Todo = ({ todo, id, removeTodo }) => {
  return (
    <li>
      {todo}
      <button onClick={() => removeTodo(id)}>-</button>
    </li>
  );
};

export default Todo;
