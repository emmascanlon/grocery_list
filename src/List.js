import React from 'react';
import Item from './Item';

const List = ({ items, name, handleClick }) => (
  <div>
    <h2> {name}</h2>
    <ul>
      { items.map( item => <Item key={item.id} {...item} handleClick={handleClick}/>)  }
    </ul>
  </div>
);

export default List;