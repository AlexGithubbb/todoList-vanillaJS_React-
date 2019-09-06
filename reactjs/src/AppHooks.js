import React, { useState } from 'react';
import InputForm from './Hookcomponents/InputForm';
import Items from './Hookcomponents/Items';

const AppHooks = () => {
  const [inputs, setInputs] = useState({ name: '', email: '' });
  const [infos, setInfos] = useState([]);

  // get inputs
  const changeHandler = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  // add item
  const submitHandler = e => {
    e.preventDefault();
    // console.log(inputs);
    // add inputs into infos(list)
    if (inputs.email !== '' && inputs.name !== '') {
      setInfos([...infos, inputs]);
    }
    return null;
  };

  // remove item
  const removeItem = id => {
    // copy state inputs
    const updatedInfos = [...infos];
    // delete the specific item from list
    updatedInfos.splice(id, 1);
    setInfos(updatedInfos);
  };

  return (
    <div style={center}>
      <InputForm
        inputs={inputs}
        submitHandler={submitHandler}
        changeHandler={changeHandler}
      />
      <Items infos={infos} removeItem={removeItem} />
    </div>
  );
};

const center = {
  textAlign: 'center'
};

export default AppHooks;
