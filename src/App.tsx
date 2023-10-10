import { FC } from 'react'
import Search from './components/Search/Search'
import Cards from './components/Cards/Cards'

const App: FC = (): JSX.Element => {
  return (
    <>
      <Search />
      <Cards />
    </>
  )
}

export default App