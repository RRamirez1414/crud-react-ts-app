import React from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import { Routes, Route, Link } from 'react-router-dom'
import { CollectionProvider } from 'hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ImSearch } from 'react-icons/im'
import { HiCollection } from 'react-icons/hi'
import tw, { styled } from 'twin.macro'

const queryClient = new QueryClient()

const App = () => {
  return (
    <div>
      <Nav>
        <UnorderedList>
          <Link to="/">
            <NavLink>
              My Collection <HiCollection tw="inline-block align-bottom" />
            </NavLink>
          </Link>
          <Link to="/search">
            <NavLink>
              Search <ImSearch tw="inline-block align-top" />
            </NavLink>
          </Link>
        </UnorderedList>
      </Nav>
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

const Nav = tw.nav`bg-gradient-to-r from-blue-300 to-purple-300 py-16`

const NavLink = tw.span`inline my-0 mx-8 no-underline text-3xl font-semibold`

const UnorderedList = tw.ul`m-0 list-none`
