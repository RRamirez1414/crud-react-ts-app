import React, { useState, useEffect, useRef } from 'react'
import Card from './Card'
import Pagination from './Pagination'
import { fetchCards, ListCardsResponse } from 'utils'
import { useFormInputDebounce } from 'hooks'
import { useQuery } from 'react-query'

const SearchPage = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [searchName, setSearchName] = useState('')
  const [formData, setFormData] = useState({
    pokemonName: '',
  })
  // { isLoading, isError, data }
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
    <div className="page-container">
      <h2>Search Page</h2>
      <div>
        <form
          className="search-form"
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') event.preventDefault()
          }}
        >
          <input
            placeholder="Card Name"
            name="pokemonName"
            onChange={onInputChange}
            value={formData.pokemonName}
            ref={inputRef}
          />
          {pokemonNameQuery.isLoading ? <div className="loader"></div> : null}
        </form>
      </div>
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
          <div className="card-grid-container">
            {pokemonNameQuery.data.data.map((cardObject) => {
              return <Card key={cardObject.id} cardData={cardObject} />
            })}
          </div>
        ) : (
          <h2 className="content-center">No Results</h2>
        )
      ) : null}
      {pokemonNameQuery.isError ? (
        <div className="content-center">
          <h1>Something went wrong</h1>
          <h1>Please Try Again</h1>
        </div>
      ) : null}
      <div className="position-bottom">
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
    </div>
  )
}

export default SearchPage
