import React from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import Route from './components/Route'
import Link from './components/Link'

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
        <Route path="/">
          <MyCollectionsPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </div>
    </div>
  )
}
export default App
