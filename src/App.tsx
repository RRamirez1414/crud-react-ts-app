import React from 'react'
import SearchPage from './components/SearchPage'
import MyCollectionsPage from './components/MyCollectionsPage'
import SelectLanguage from './components/SelectLanguage'
import { Routes, Route, Link } from 'react-router-dom'
import { CollectionProvider } from 'hooks'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { ImSearch } from 'react-icons/im'
import { HiCollection } from 'react-icons/hi'
import tw from 'twin.macro'
import './i18n/i18n'
import { useTranslation } from 'react-i18next'

const queryClient = new QueryClient()

const App = () => {
  const { t } = useTranslation()
  return (
    <div>
      <Nav>
        <UnorderedList>
          <Link to="/">
            <NavLink>
              {t('My Collection')} <CollectionIcon />
            </NavLink>
          </Link>
          <Link to="/search">
            <NavLink>
              {t('Search Page')} <SearchIcon />
            </NavLink>
          </Link>
          <SelectLanguage />
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

const Nav = tw.nav`bg-gradient-to-r from-blue-300 to-purple-300 py-16 px-12`

const NavLink = tw.span`inline my-0 mx-8 no-underline text-3xl font-semibold`

const CollectionIcon = tw(HiCollection)`inline-block align-bottom`

const SearchIcon = tw(ImSearch)`inline-block align-top`

const UnorderedList = tw.ul`m-0 list-none`
