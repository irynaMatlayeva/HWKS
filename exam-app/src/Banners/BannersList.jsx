import React from 'react';
import Banners from './Banners';
import logo from '../assets/images/FTL-logo-Grey.svg';
import { useViewport } from '../store/viewportContext';

const BannersList = () => {
  const {width} = useViewport();
  const breakpoint = 769;

  return (
    <div className='card__banners'>
      { width < breakpoint ?
        <>
          <Banners children={ <img src={ logo } alt='Logo FTL'/> }/>
          <Banners children={ <h2 className='card-banners__title'>Kickstart</h2> }/>
        </> :
        <>
          <Banners children={ <h2 className='card-banners__title'>Kickstart</h2> }/>
          <Banners children={ <img src={ logo } alt='Logo FTL'/> }/>
        </> }
    </div>
  );
};

export default BannersList;
