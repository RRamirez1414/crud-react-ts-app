import React, { useEffect } from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import Route from './components/Route'
import Link from './components/Link'
import { CollectionProvider } from 'hooks'

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link className="nav-button" href="/">
            My Collection
          </Link>
          <Link className="nav-button" href="/search">
            Search
          </Link>
        </ul>
      </nav>
      <div>
        <CollectionProvider>
          <Route path="/">
            <MyCollectionsPage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </CollectionProvider>
      </div>
    </div>
  )
}
export default App
