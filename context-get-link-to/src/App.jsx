import { useLinkTo } from './useLinkTo';
import './index.scss';

const App = () => {
  const {getLinkTo} = useLinkTo()
  const linkToGoogle = getLinkTo('google')
  const linkToYahoo = getLinkTo('yahoo')
  const {name: nameGoogle, link: linkGoogle} = linkToGoogle
  const {name: nameYahoo, link: linkYahoo} = linkToYahoo

  return (
    <div className='links'>
      <a href={ linkGoogle } key={ nameGoogle } className='links__btn'>Search in { nameGoogle }</a>
      <a href={ linkYahoo } key={ nameYahoo } className='links__btn'>Search in { nameYahoo }</a>
    </div>
  )
}

export default App;
