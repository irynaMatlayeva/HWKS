import { useContext, useEffect, useState } from 'react';
import { QueryContext } from './index';

export const useLinkTo = (linkTo) => {
  const [linkToSearchEngine, setLinkToSearchEngine] = useState({});

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

  useEffect(() => {
    const getLinkTo = () => {
      return Object.values(urlRoutes).map((key) => {
        if (linkTo === key.name) {
          setLinkToSearchEngine(key)
        }
      })
    }
    getLinkTo()
  }, [linkTo])


  return {
    linkToSearchEngine
  }
}
