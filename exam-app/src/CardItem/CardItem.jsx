import React from 'react';
import { useViewport } from '../store/viewportContext';
import './CardItem.scss';

const CardItem = ({card}) => {
  const {id, img, altText, title, oldPrice, currentPrice} = card
  const {width} = useViewport();
  const breakpoint = 769;

  return (
    <li className={ `card-item card-item--${ id }` } key={ id }>
      <div className='card-item__img-container'>
        <img className='card-item__img' src={ img } alt={ altText }/>
      </div>

      <div className='card-item__wrap'>
        <h2 className='card-item__title'>
          <a href='#void' className='card-item__link'>{ title }</a>
        </h2>
        <small className='card-item__id'>SKU: { id } </small>
        <p className='card-item__old-price'>{ width < breakpoint ? `${ Math.floor(oldPrice) } $` : `${ oldPrice } $` }</p>
        <p className='card-item__current-price'>{ width < breakpoint ? `${ Math.round(currentPrice) } $` : `${ currentPrice } $` }</p>
      </div>
    </li>
  )
}

export default CardItem;
