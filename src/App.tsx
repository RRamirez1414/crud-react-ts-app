import React from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import { Routes, Route, Link } from 'react-router-dom'
import { CollectionProvider } from 'hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import tw, { styled } from 'twin.macro'

const queryClient = new QueryClient()

const App = () => {
  return (
    <div>
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

const StyledNav = styled.nav`
  ${tw`bg-gradient-to-r from-blue-300 to-purple-300 py-16`}
`

const StyledNavLink = styled.a`
  ${tw`inline my-0 mx-8 no-underline text-3xl font-semibold`}
`
