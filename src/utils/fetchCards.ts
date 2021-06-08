import ky from 'ky'

export type ListCardsResponse = {
  data: PokemonCard[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

const client = ky.extend({
  hooks: {
    beforeRequest: [
      (options) => {
        options.headers.set('x-api-key', process.env.REACT_APP_TCG_KEY || 'foo')
      },
    ],
  },

  prefixUrl: 'https://api.pokemontcg.io/v2/cards?pageSize=48',
})

const fetchCards = async (searchTerm: string) => {
  const response: ListCardsResponse = await client
    .get(searchTerm)
    .json<ListCardsResponse>()

  return response
}

export default fetchCards
