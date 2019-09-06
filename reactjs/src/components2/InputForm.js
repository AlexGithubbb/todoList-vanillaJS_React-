import React from 'react';

const InputForm = ({ inputRef, addTodo }) => {
  return (
    <form onSubmit={e => addTodo(e)}>
      <input type='text' ref={inputRef} />
    </form>
  );
};

export default InputForm;
