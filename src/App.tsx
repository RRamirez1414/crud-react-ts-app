import React from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import { Routes, Route, Link } from 'react-router-dom'
import { CollectionProvider } from 'hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
const queryClient = new QueryClient()

const App = () => {
  return (
    <div className="App">
      <nav className="bg-gradient-to-r from-blue-300 to-purple-300 py-16">
        <ul className="m-0 list-none">
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
            <QueryClientProvider client={queryClient}>
              <Route path="/search" element={<SearchPage />} />
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </Routes>
        </CollectionProvider>
      </div>
    </div>
  )
}
export default App
