import React, { Fragment } from 'react';

const TodoItem = ({ todo, id, removeTodo }) => {
  return (
    <Fragment>
      <li>
        {todo}
        <i className='fas fa-trash' onClick={() => removeTodo(id)} />
      </li>
    </Fragment>
  );
};

export default TodoItem;
