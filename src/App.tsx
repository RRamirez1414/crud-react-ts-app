import React from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import { Routes, Route, Link } from 'react-router-dom'
import { CollectionProvider } from 'hooks'

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <Link className="nav-button" to="/">
            My Collection
          </Link>
          <Link className="nav-button" to="/search">
            Search
          </Link>
        </ul>
      </nav>
      <div>
        <CollectionProvider>
          <Routes>
            <Route path="/" element={<MyCollectionsPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </CollectionProvider>
      </div>
    </div>
  )
}
export default App
