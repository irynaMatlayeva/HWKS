import React from 'react';
import { getSizes } from '../api/mock';
import SelectSizesComponent from '../Select/Select';
import 'antd/dist/antd.css';
import './App.scss';

const App = () => {
  return (
    <SelectSizesComponent clusterList={ getSizes() }/>
  );
}

export default App;
