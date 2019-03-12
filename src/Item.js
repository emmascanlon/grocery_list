import React from 'react';

const Item = ({ id, name, purchased, handleClick }) => (
  <li
  style={ purchased ? { ...styles.purchased } : { ...styles.item }}
  onClick={() => handleClick(id)}
  >
{name}
</li> 
);

const styles = {
  item: { cursor: 'pointer' },
  purchased: { color: 'grey', textDecoration: 'line-through' },
 };
 
 export default Item;
 