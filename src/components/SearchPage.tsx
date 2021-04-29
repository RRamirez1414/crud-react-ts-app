import React, { useState, useEffect } from 'react'
import Card from './Card'
import Pagination from './Pagination'
import { isCollected } from 'utils'

type SearchPageProps = {
  collection: Collection
  dispatch: React.Dispatch<Action>
}

const SearchPage = ({ collection, dispatch }: SearchPageProps) => {
  const { cards } = collection

  const [formData, setFormData] = useState({
    pokemonName: '',
  })
  const [responseData, setResponseData] = useState<ResponseDataType>({
    data: [],
    page: 1,
    pageSize: 0,
    count: 1,
    totalCount: 0,
  })
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoaded, setIsLoaded] = useState(false)
  const urlEndpoint = `https://api.pokemontcg.io/v2/cards?pageSize=48&page=${currentPage}&q=${query}`

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  const setPage = (page: number) => {
    setCurrentPage(page)
  }

  async function fetchCards() {
    await fetch(`${urlEndpoint}`, {
      method: 'GET',
      headers: new Headers(),
    })
      .then((response) => response.json())
      .then((response) => {
        //set some states, scroll to top
        setResponseData({
          ...response,
          data: response.data,
          page: response.page,
          pageSize: response.pageSize,
          count: response.count,
          totalCount: response.totalCount,
        })
        setIsLoaded(true)
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        console.log(urlEndpoint)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  useEffect(() => {
    fetchCards()
  }, [currentPage, query])

  return (
    <div className="page-container">
      <h2>Search Page</h2>

      <div>
        <form>
          <input
            placeholder="Card Name"
            name="pokemonName"
            onChange={onChange}
            value={formData.pokemonName}
          />
          <button
            onClick={(event: React.MouseEvent) => {
              setCurrentPage(1)
              setQuery(
                formData.pokemonName
                  ? `name:${formData.pokemonName.toLowerCase()}`
                  : ''
              )
              event.preventDefault()
            }}
          >
            Submit
          </button>
        </form>
        <Pagination
          currentPage={currentPage}
          data={responseData}
          setPage={setPage}
        />
      </div>
      {!isLoaded ? <div className="loader"></div> : null}
      {responseData.count > 0 ? (
        <div className="grid-container">
          {responseData.data.map((cardObject) => {
            return (
              <Card
                key={cardObject.id}
                cardData={cardObject}
                isCollected={isCollected(cards, cardObject.id) ? true : false}
                collection={collection}
                dispatch={dispatch}
              />
            )
          })}
        </div>
      ) : (
        <h2>No Results</h2>
      )}
      <Pagination
        currentPage={currentPage}
        data={responseData}
        setPage={setPage}
      />
    </div>
  )
}

export default SearchPage
