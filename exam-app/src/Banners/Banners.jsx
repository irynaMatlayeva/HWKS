import React from 'react';
import './Banners.scss'

const Banners = ({children}) => {
  return (
    <div className='card-banners'>{ children }</div>
  );
};

export default Banners;
