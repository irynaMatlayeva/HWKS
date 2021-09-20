import React, { useEffect, useState } from 'react';
import UserDataItem from './UserDataItem';
import { date, removeFromLocalStorage } from '../utils/getData';
import './UsersData.scss';

const UsersDataList = () => {
  const [numberOfUsers, setNumberOfUsers] = useState(0);
  const localData = JSON.parse(localStorage.getItem('personal-info'));
  const sessionData = JSON.parse(sessionStorage.getItem('personal-info-card'));
  console.log('numberOfUsers', numberOfUsers - 1)

  useEffect(() => {
    document.cookie = `locationFromData=Data-page; path=/data; max-age=${ date }; samesite; secure`
  }, [])

  const removeItem = (item, index) => {
    if (!sessionData) {
      localStorage.setItem('personal-info', JSON.stringify(removeFromLocalStorage(localData, item)))
    } else {
      localStorage.setItem('personal-info', JSON.stringify(removeFromLocalStorage(localData, item)))
      sessionStorage.setItem('personal-info-card', JSON.stringify(removeFromLocalStorage(sessionData, sessionData[index])))
    }
    setNumberOfUsers(localData.length)
  }

  if (!localData.length) {
    return <h2>No data from users</h2>
  }

  const usersDataValues = localData.map((item, index) => {
    return (
      <li key={ item.name } className='user-data__item'>
        <button
          type='button'
          className='user-data__btn btn btn-trash btn-sm'
          onClick={ () => removeItem(item, index) }>
          <i className='fa fa-times'></i>
        </button>
        <UserDataItem { ...item } />
        { sessionData && (<span>Card Number: { sessionData[index] }</span>) }
      </li>
    )
  })

  return (
    <ul className='user-data__list'>
      { usersDataValues }
    </ul>
  )
}

export default UsersDataList
