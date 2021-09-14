import { QueryContext } from './index';

export const useGoToLink = () => {
  const getQuery = (url) => {
    return `${ url }${ window.location.pathname }${ window.location.search }`
  }
  return (
    <QueryContext.Consumer>
      { ({urlRoutes}) => (
        Object.values(urlRoutes).map((key, value) =>
          <a href={ getQuery(key.link) } key={ value }>Search in { key.name } </a>
        )
      ) }
    </QueryContext.Consumer>
  )
}
