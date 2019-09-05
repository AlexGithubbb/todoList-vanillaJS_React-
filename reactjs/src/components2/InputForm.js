import React from 'react';

const InputForm = ({ input, addTodo, onChange }) => {
  return (
    <div>
      <form onSubmit={e => addTodo(e)}>
        <input type='text' value={input} onChange={e => onChange(e)} />
      </form>
    </div>
  );
};

export default InputForm;
