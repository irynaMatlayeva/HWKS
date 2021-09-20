import React from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.scss';

const AppHeader = () => {

  return (
    <div className='app-header'>
      <nav className='app-header__nav'>
        <ul className='app-header__list'>
          <li className='app-header__item'>
            <Link className='app-header__link' to='/form'>Form</Link>
          </li>
          <li className='app-header__item'>
            <Link className='app-header__link' to='/data'>Data</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default AppHeader
