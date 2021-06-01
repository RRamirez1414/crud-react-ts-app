import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import CardGrid from './CardGrid'
import PageTitle from './PageTitle'
import PageContainer from './Container'
import Pagination from './Pagination'
import Loader from './Loader'
import { fetchCards, ListCardsResponse } from 'utils'
import { useFormInputDebounce } from 'hooks'
import { useQuery } from 'react-query'
import tw from 'twin.macro'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const SearchPage = () => {
  const { t } = useTranslation()
  const inputRef = useRef<HTMLInputElement>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [searchName, setSearchName] = useState('')
  const [formData, setFormData] = useState({
    pokemonName: '',
  })

  const pokemonNameQuery = useQuery<ListCardsResponse, Error>(
    ['cards', searchName, currentPage],
    () => {
      return fetchCards(`&page=${currentPage}&q=name:${searchName}*`)
    }
  )

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
    setPage(1)
    debounceName()
  }

  const setPage = (page: number) => {
    setCurrentPage(page)
  }

  const debounceName = useFormInputDebounce(
    () => {
      setSearchName(formData.pokemonName)
    },
    1000,
    [formData.pokemonName]
  )

  useEffect(() => {
    if (null !== inputRef.current) inputRef.current.focus()
  }, [currentPage])

  return (
    <PageContainer>
      <PageTitle>{t('Search Page')}</PageTitle>

      <Form
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === 'Enter') event.preventDefault()
        }}
      >
        <SearchInput
          placeholder={t('Card Name')}
          name="pokemonName"
          onChange={onInputChange}
          value={formData.pokemonName}
          ref={inputRef}
        />
        {pokemonNameQuery.isLoading ? <Loader /> : null}
      </Form>

      {pokemonNameQuery.data ? (
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            pokemonNameQuery.data.totalCount / pokemonNameQuery.data.pageSize
          )}
          setCurrentPage={setPage}
        />
      ) : null}
      {pokemonNameQuery.data ? (
        pokemonNameQuery.data.count > 0 ? (
          <CardGrid>
            {pokemonNameQuery.data.data.map((cardObject) => {
              return (
                <motion.div
                  transition={{ delay: 0.2, duration: 0.2 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                >
                  <Card key={cardObject.id} cardData={cardObject} />
                </motion.div>
              )
            })}
          </CardGrid>
        ) : (
          <NoResults>No Results</NoResults>
        )
      ) : null}
      {pokemonNameQuery.isError ? (
        <ErrorContainer>
          <h1>Something went wrong</h1>
          <h1>Please Try Again</h1>
        </ErrorContainer>
      ) : null}
      <PaginationBottom>
        {pokemonNameQuery.data ? (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              pokemonNameQuery.data.totalCount / pokemonNameQuery.data.pageSize
            )}
            setCurrentPage={setPage}
          />
        ) : null}
      </PaginationBottom>
    </PageContainer>
  )
}

export default SearchPage

const SearchInput = tw.input`shadow 
appearance-none 
border 
rounded 
w-1/4 
py-2 
px-3 
text-gray-700 
leading-tight 
focus:outline-none
`
const Form = tw.form`w-full inline`

const NoResults = tw.h2`text-center text-xl`

const ErrorContainer = tw.div`text-center`

const PaginationBottom = tw.div`align-text-bottom`
