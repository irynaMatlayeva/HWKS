import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

const urlRoutes = {
  google: {
    name: 'Google',
    link: 'https://www.google.com'
  },
  yahoo: {
    name: 'Yahoo',
    link: 'https://www.yahoo.com'
  },
};

export const QueryContext = React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <QueryContext.Provider value={ {urlRoutes} }>
      <App/>
    </QueryContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
