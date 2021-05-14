import React from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import { Routes, Route, Link } from 'react-router-dom'
import { CollectionProvider } from 'hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { StyledNav, StyledNavLink } from './styles'
const queryClient = new QueryClient()

const App = () => {
  return (
    <div className="App">
      <StyledNav>
        <ul tw="m-0 list-none">
          <Link to="/">
            <StyledNavLink>My Collection</StyledNavLink>
          </Link>
          <Link to="/search">
            <StyledNavLink>Search</StyledNavLink>
          </Link>
        </ul>
      </StyledNav>
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
