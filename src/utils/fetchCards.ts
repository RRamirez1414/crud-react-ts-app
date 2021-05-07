export type ListCardsResponse = {
  data: PokemonCard[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

const fetchCards = (url: string): Promise<ListCardsResponse> => {
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  })
    .then((response) => response.json())
    .then((response) => {
      return {
        ...response,
        data: response.data,
        page: response.page,
        pageSize: response.pageSize,
        count: response.count,
        totalCount: response.totalCount,
      }
    })
}

export default fetchCards
