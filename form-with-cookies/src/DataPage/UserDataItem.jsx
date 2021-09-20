import React from 'react';

const UserDataItem = ({name, age, phone}) => {
  const userValues = {Name: name, Age: age, Phone: phone}

  return (
    Object.entries(userValues).map(([key, value]) => {
      return (
        <span key={ key }>{ `${ key }` }: { `${ value }` }</span>
      )
    })
  )
}

export default UserDataItem
