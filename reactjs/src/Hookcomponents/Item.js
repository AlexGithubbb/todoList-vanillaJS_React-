import React, { Fragment } from 'react';

const Item = ({ info, id, removeItem }) => {
  return (
    <Fragment>
      <li>
        {info.name} {''}
        {info.email}
        <button onClick={id => removeItem(id)}>-</button>
      </li>
    </Fragment>
  );
};

export default Item;
