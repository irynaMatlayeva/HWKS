import React from 'react';
import { cluster } from '../api/mock';
import SelectSizesComponent from '../Select/Select';
import 'antd/dist/antd.css';
import './App.scss';

const getSizes = () => {
  return cluster.variations
}

const App = () => {
  return (
    <SelectSizesComponent clusterList={ getSizes() }/>
  );
}

export default App;
