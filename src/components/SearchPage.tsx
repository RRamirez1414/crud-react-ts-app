import React, { useState, useEffect, useContext, FormEventHandler } from 'react'
import Card from './Card'
import Pagination from './Pagination'
import { fetchCards, debounce } from 'utils'

const SearchPage = () => {
  const [formData, setFormData] = useState({
    pokemonName: '',
  })
  const [responseData, setResponseData] = useState<ListCardsResponse>({
    data: [],
    page: 1,
    pageSize: 1,
    count: 1,
    totalCount: 0,
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  const getCards = () => {
    fetchCards(
      `https://api.pokemontcg.io/v2/cards?pageSize=48&page=${currentPage}&q=${searchTerm}`
    )
      .then((result) => {
        setResponseData(result)
        setIsLoaded(true)
      })
      .catch((error) => {
        setTimeout(() => {
          setIsError(true)
        }, 1000)
      })
  }

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
    setPage(1)
  }

  const setPage = (page: number) => {
    setIsLoaded(false)
    setIsError(false)
    setCurrentPage(page)
  }

  useEffect(() => {
    getCards()
  }, [])

  useEffect(() => {
    getCards()
  }, [searchTerm, currentPage])

  useEffect(() => {
    debounce(() => {
      setSearchTerm(
        formData.pokemonName
          ? `name:${formData.pokemonName.toLowerCase()}*`
          : ''
      )
    }, 2000)()
  }, [formData.pokemonName])

  return (
    <div className="page-container">
      <h2>Search Page</h2>
      <div>
        <form
          onKeyDown={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') event.preventDefault()
          }}
        >
          <input
            placeholder="Card Name"
            name="pokemonName"
            onChange={onInputChange}
            value={formData.pokemonName}
          />
        </form>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            responseData.totalCount / responseData.pageSize
          )}
          setCurrentPage={setPage}
        />
      </div>
      {!isLoaded && !isError ? <div className="loader"></div> : null}
      {responseData.count > 0 ? (
        <div className="card-grid-container">
          {responseData.data.map((cardObject) => {
            return <Card key={cardObject.id} cardData={cardObject} />
          })}
        </div>
      ) : (
        <h2 className="content-center">No Results</h2>
      )}
      {isError ? (
        <div className="content-center">
          <h1>Something went wrong</h1>
          <h1>Please Try Again</h1>
        </div>
      ) : null}
      <div className="position-bottom">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(
            responseData.totalCount / responseData.pageSize
          )}
          setCurrentPage={setPage}
        />
      </div>
    </div>
  )
}

export default SearchPage
