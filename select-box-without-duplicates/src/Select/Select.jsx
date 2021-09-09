import React, { useEffect, useState } from 'react';
import { Form, Select, Typography } from 'antd';
import './Select.scss';

const {Title} = Typography;
const {Option} = Select;

const SelectSizesComponent = ({clusterList}) => {
  const [optionsList, setOptionsList] = useState({})

  useEffect(() => {
    function compositeKey (current) {
      const {frameSize, size} = current
      return frameSize ? `${ size } | ${ frameSize }` : size;
    }

    function createObj (id, val) {
      const {frameSize, size} = val
      return {id, frameSize, size}
    }

    function updatedObject (acc, current) {
      const prevState = acc[compositeKey(current)]
      return createObj([...prevState.id, current.id], prevState)
    }

    function newObject (current) {
      return createObj([current.id], current)
    }

    function getData (acc, current) {
      return acc[compositeKey(current)] ? updatedObject(acc, current) : newObject(current);
    }

    const arrToObjects = clusterList.reduce((acc, current) => ({...acc, [compositeKey(current)]: getData(acc, current)}), {})
    setOptionsList(arrToObjects)
  }, [clusterList])

  const handleChange = value => {
    if (value) {
      console.log(`selected id ${ optionsList[value].id }`);
    }
  }

  return (
    <Form className='select' name='select-form'>
      <Title level={ 3 } className='select__title'>Size</Title>
      <Select className='select__content'
              defaultValue={ 'Please select the size' }
              onChange={ handleChange }>
        { Object.keys(optionsList).map(value => {
          return <Option key={ value } className='select__text' value={ value }>
            { value }
          </Option>
        }) }
      </Select>
    </Form>
  );
}

export default SelectSizesComponent
