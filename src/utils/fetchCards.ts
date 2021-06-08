import ky from 'ky'

export type ListCardsResponse = {
  data: PokemonCard[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

const fetchCards = async (searchTerm: string) => {
  const response: ListCardsResponse = await ky(searchTerm, {
    prefixUrl: 'https://api.pokemontcg.io/v2/cards?pageSize=48',
    headers: { 'x-api-key': process.env.TCG_APP_API_KEY || '' },
  }).json<ListCardsResponse>()

  return response
}

export default fetchCards
