import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';

const params = new URLSearchParams(window.location.search);
const searchParam = params.get('q')

const urlQueryParams = (url) =>
  searchParam ? `${ url }${ window.location.pathname }?q=${ searchParam }` : `${ url }`

export const QueryContext = React.createContext();

ReactDOM.render(
  <React.StrictMode>
    <QueryContext.Provider value={ {urlQueryParams} }>
      <App/>
    </QueryContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
