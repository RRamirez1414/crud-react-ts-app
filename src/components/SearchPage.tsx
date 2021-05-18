import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import CardGrid from './CardGrid'
import PageTitle from './PageTitle'
import PageContainer from './Container'
import Pagination from './Pagination'
import { fetchCards, ListCardsResponse } from 'utils'
import { useFormInputDebounce } from 'hooks'
import { useQuery } from 'react-query'
import { CgPokemon } from 'react-icons/cg'
import tw from 'twin.macro'
import styled from 'styled-components'

const SearchPage = () => {
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
      <PageTitle>Search Page</PageTitle>

      <form
        tw="w-full inline"
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === 'Enter') event.preventDefault()
        }}
      >
        <SearchInput
          placeholder="Card Name"
          name="pokemonName"
          onChange={onInputChange}
          value={formData.pokemonName}
          ref={inputRef}
        />
        {pokemonNameQuery.isLoading ? (
          <CgPokemon tw="inline-block animate-spin h-8 w-8 mx-4" />
        ) : null}
      </form>

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
              return <Card key={cardObject.id} cardData={cardObject} />
            })}
          </CardGrid>
        ) : (
          <h2 tw="text-center font-bold text-4xl">No Results</h2>
        )
      ) : null}
      {pokemonNameQuery.isError ? (
        <div tw="text-center font-bold text-4xl">
          <h1>Something went wrong</h1>
          <h1>Please Try Again</h1>
        </div>
      ) : null}
      <div tw="align-text-bottom">
        {pokemonNameQuery.data ? (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(
              pokemonNameQuery.data.totalCount / pokemonNameQuery.data.pageSize
            )}
            setCurrentPage={setPage}
          />
        ) : null}
      </div>
    </PageContainer>
  )
}

export default SearchPage

const SearchInput = styled.input`
  ${tw`shadow appearance-none border rounded w-1/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none`}
`
const Loader = styled.svg`
  ${tw`inline-block animate-spin h-6 w-6 mx-4`}
`
