import React from 'react';

const InputForm = props => {
  return (
    <div>
      <form onSubmit={props.addTodo}>
        <input
          type='text'
          name='input'
          value={props.input}
          onChange={props.getInput}
        />
      </form>
    </div>
  );
};

export default InputForm;
