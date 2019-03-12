import React from 'react';

const Item = ({ id, name, purchased, handleClick }) => (
  <li
  style={ purchased ? { ...styles.item, ...styles.purchased } : styles.item }
  onClick={() => handleClick(id)}
  >
{name}
</li> 
);

const styles = {
  item: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
 };
 
 export default Item;
 