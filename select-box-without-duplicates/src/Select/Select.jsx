import React, { useEffect, useState } from 'react';
import { Form, Select, Typography } from 'antd';
import './Select.scss';

const {Title} = Typography;
const {Option} = Select;

const SelectSizesComponent = ({clusterList}) => {
  const [optionsList, setOptionsList] = useState({})

  const uniqueSizesList = new Map(clusterList.map(item => [item['size'] && item['frame_size'],
    {id: item.id, frameSize: item.frame_size, size: item.size}]))

  useEffect(() => {
    const obj = {};
    for (const [key, value] of uniqueSizesList) obj[key] = value;

    setOptionsList(prev => ({
      ...prev,
      ...obj
    }))
  }, [clusterList])

  const handleChange = value => {
    console.log(`selected id ${ value }`);
  }

  const renderOptions = Object.keys(optionsList).map((val) => {
    const {id, size, frameSize} = optionsList[val]
    return <Option key={ id } className='select__text' value={ handleChange() }>
      { frameSize ? `${ size } | ${ frameSize }` : size }
    </Option>
  })

  return (
    <Form className='select' name='select-form'>
      <Title level={ 3 } className='select__title'>Size</Title>
      <Select className='select__content'
              defaultValue={ handleChange() || 'Please select the size' }
              onChange={ handleChange }>
        { renderOptions }
      </Select>
    </Form>
  );
}

export default SelectSizesComponent
