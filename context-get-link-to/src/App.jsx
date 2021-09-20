import { useLinkTo } from './useLinkTo';

const App = () => {
  const {linkToSearchEngine} = useLinkTo('google')
  const {name, link} = linkToSearchEngine

  return <a href={ link } key={ name }>Search in { name }</a>
}

export default App;
