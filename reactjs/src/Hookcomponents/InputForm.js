import React, { Fragment } from 'react';

const InputForm = ({ inputs, changeHandler, submitHandler }) => {
  return (
    <Fragment>
      <form onSubmit={submitHandler}>
        <div>
          <label>Name</label>
          <input
            type='text'
            name='name'
            value={inputs.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type='email'
            name='email'
            value={inputs.email}
            onChange={changeHandler}
          />
        </div>
        <input type='submit' value='submit' />
      </form>
    </Fragment>
  );
};

export default InputForm;
