import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { ViewportProvider } from './store/viewportContext';
import './assets/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <ViewportProvider>
      <App/>
    </ViewportProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
