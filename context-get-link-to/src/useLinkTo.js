import { useContext } from 'react';
import { QueryContext } from './index';

export const useLinkTo = () => {
  const {urlQueryParams} = useContext(QueryContext);

  const urlRoutes = {
    google: {
      name: 'google',
      link: urlQueryParams('https://www.google.com')
    },
    yahoo: {
      name: 'yahoo',
      link: urlQueryParams('https://www.yahoo.com')
    },
  };

  const getLinkTo = (linkTo) => urlRoutes[linkTo]

  return {
    getLinkTo
  }
}
