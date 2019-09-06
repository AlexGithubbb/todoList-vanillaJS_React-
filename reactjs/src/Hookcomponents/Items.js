import React from 'react';
import Item from './Item';

const List = ({ infos, removeItem }) => {
  const list = infos.map((info, i) => {
    return <Item key={i} id={i} removeItem={removeItem} info={info} />;
  });
  return <ul>{list}</ul>;
};

export default List;
