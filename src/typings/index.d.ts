type PokemonCardObject = {
  id: string
  name: string
  supertype: string
  types: string[]
  images: {
    small: string
    large: string
  }
  set: {
    releaseDate: string
  }
  flavorText: string
  tcgplayer?: {
    url: string
  }
}

type ResponseDataType = {
  data: PokemonCardObject[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

type Collection = {
  id: number
  cards: PokemonCardObject[]
}

type Action = {
  type: 'ADD-CARD' | 'DELETE-CARD'
  newCollection: Collection
}
