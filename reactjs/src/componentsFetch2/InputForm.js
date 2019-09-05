import React from 'react';

const InputForm = ({ inputRef, addTodo }) => {
  return (
    <div>
      <form onSubmit={e => addTodo(e)}>
        {/* <input type='text' value={input} onChange={e => onChange(e)} /> */}
        <input type='text' ref={inputRef} />
      </form>
    </div>
  );
};

export default InputForm;
