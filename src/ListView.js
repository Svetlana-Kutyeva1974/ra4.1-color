import React from 'react';
import ShopItem from './Star';

export default function ListView(props) {
  const {items} = props;
  return (
    <div className='list'>
      {items.map((item, index) => {
        return <ShopItem item={item} key={index} /> 
      })}
    </div>
  );
}