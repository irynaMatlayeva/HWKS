import React from 'react';
import { cards } from '../mock';
import CardItem from '../CardItem/CardItem';

const CardList = () => {
  return (
    <ul className='card__list'>
      { cards.map(card => <CardItem card={ card } key={ card.id }/>) }
    </ul>
  );
};

export default CardList;
