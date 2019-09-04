import React from 'react';

const InputForm = props => {
  return (
    <div>
      <form onSubmit={e => props.addTodo(e)}>
        <input
          type='text'
          value={props.input}
          onChange={e => props.getInput(e)}
        />
      </form>
    </div>
  );
};

export default InputForm;
