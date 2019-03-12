import React from 'react';
import Item from './Item';

const List = ({ things, name, handleClick }) => (
  <div>
    <h2> {name}</h2>
    <ul>
      { things.map( thing => <Item key={thing.id} {...thing} 
      handleClick={handleClick}/>)  }
    </ul>
  </div>
);

export default List;