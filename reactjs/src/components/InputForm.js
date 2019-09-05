import React from 'react';

const InputForm = props => {
  return (
    <div>
      <form onSubmit={e => props.addTodo(e)}>
        <input
          type='text'
          ref={props.inputRef}
          // value={props.input}
          // onChange={e => props.getInput(e)}
        />
      </form>
    </div>
  );
};

export default InputForm;
