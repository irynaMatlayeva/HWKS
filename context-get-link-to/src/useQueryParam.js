export const useQueryParam = () => {
  const getQuery = (url) => {
    return `${ url }${ window.location.pathname }${ window.location.search }`
  }

  const getValues = (urlRoutes) => {
    return Object.values(urlRoutes).map((key, value) => {
      return <a href={ getQuery(key.link) } key={ value }>Search in { key.name } </a>
    })
  }

  return {
    getValues
  }
}
