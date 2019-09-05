import React from 'react';

const InputForm2 = ({ addTodo, inputRef }) => {
  return (
    <form onSubmit={e => addTodo(e)}>
      <input type='text' ref={inputRef} placeholder='add todo' />
    </form>
  );
};

export default InputForm2;
