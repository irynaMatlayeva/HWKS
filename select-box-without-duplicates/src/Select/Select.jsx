import React from 'react';
import { Form, Select, Typography } from 'antd';
import './Select.scss';

const {Title} = Typography;
const {Option} = Select;

const SelectSizesComponent = ({clusterList}) => {
  let options = {
    'size': new Map(),
    'items': new Map(),

    addToSizeMap (params) {
      this.size.has(params.size) ? this.size.get(params.size).push(params.id) : this.size.set(params.size, [params.id])
    },

    fill (params) {
      this.items.set(params.id, {
        'id': params.id,
        'size': params.size,
        'frameSize': params.frame_size
      })
      this.addToSizeMap(params)
    },

    getIds (params) {
      return this.size.get(Number(params))
    },

    getItem (itemId) {
      return this.items.get(Number(itemId));
    },

    getSortedSizeItems () {
      const sortedKeys = [...this.size.keys()].sort((a, b) => a - b);
      return sortedKeys.map(key => this.size.get(key).map(id => this.getItem(id)));
    }
  }
  clusterList.map(item => options.fill(item))

  const handleChange = value => {
    if (value) {
      console.log(`selected id ${ options.getIds(value) }`);
    }
  }

  return (
    <Form className='select' name='select-form'>
      <Title level={ 3 } className='select__title'>Size</Title>
      <Select className='select__content'
              defaultValue={ handleChange() || 'Please select the size' }
              onChange={ handleChange }>
        {
          [...options.getSortedSizeItems()].map(itemsGroupedBySize => {
            const frameSizes = [...new Set(itemsGroupedBySize.map(item => item.frameSize).filter(Boolean))]
            const {size} = itemsGroupedBySize[0]
            return <Option key={ size } className='select__text' value={ handleChange() }>
              { frameSizes.length ? `${ size } | ${ frameSizes }` : size }
            </Option>
          })
        }
      </Select>
    </Form>
  );
}

export default SelectSizesComponent
