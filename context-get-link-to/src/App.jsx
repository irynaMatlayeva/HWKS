import { useQueryParam } from './useQueryParam';
import { QueryContext } from './index';

const App = () => {
  const {getValues} = useQueryParam()
  return (
    <QueryContext.Consumer>
      { ({urlRoutes}) => (
        getValues(urlRoutes)
      ) }
    </QueryContext.Consumer>
  )
}

export default App;
