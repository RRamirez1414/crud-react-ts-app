import React, { useEffect, useReducer } from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import Route from './components/Route'
import Link from './components/Link'
import { collectionReducer, MyCollectionContext, fetchCards } from 'utils'

const App = () => {
  const [myCollection, dispatch] = useReducer(collectionReducer, {
    cards: [],
  })

  //load an initial card
  useEffect(() => {
    fetchCards('https://api.pokemontcg.io/v2/cards?q=id:basep-1').then(
      (result) => {
        dispatch({
          type: 'ADD-CARD',
          card: result.data[0],
        })
      }
    )
  }, [])

  return (
    <MyCollectionContext.Provider value={{ myCollection, dispatch }}>
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
    </MyCollectionContext.Provider>
  )
}
export default App
