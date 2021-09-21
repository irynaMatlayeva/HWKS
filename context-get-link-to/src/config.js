export const urlRoutes = (urlQueryParams) => {
  return {
    google: {
      name: 'google',
      link: urlQueryParams('https://www.google.com')
    },
    yahoo: {
      name: 'yahoo',
      link: urlQueryParams('https://www.yahoo.com')
    }
  }
}
