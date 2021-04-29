import React, { useReducer } from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import Route from './components/Route'
import Link from './components/Link'
import { initialCollection, collectionReducer } from 'utils'

function App() {
  const [myCollection, dispatch] = useReducer(
    collectionReducer,
    initialCollection
  )

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
          <MyCollectionsPage collection={myCollection} dispatch={dispatch} />
        </Route>
        <Route path="/search">
          <SearchPage collection={myCollection} dispatch={dispatch} />
        </Route>
      </div>
    </div>
  )
}
export default App
