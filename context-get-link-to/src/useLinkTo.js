import { useContext } from 'react';
import { QueryContext } from './index';
import { urlRoutes } from './config';

export const useLinkTo = () => {
  const {urlQueryParams} = useContext(QueryContext);

  const getLinkTo = (linkTo) => urlRoutes(urlQueryParams)[linkTo]

  return {
    getLinkTo
  }
}
