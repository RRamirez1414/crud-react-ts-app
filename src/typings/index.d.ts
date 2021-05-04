type PokemonCard = {
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

type ListCardsResponse = {
  data: PokemonCardObject[]
  page: number
  pageSize: number
  count: number
  totalCount: number
}

type Collection = {
  cards: PokemonCard[]
}

type isCollectedArgs = {
  cards: PokemonCard[]
  id: string
}

type Action = {
  type: 'ADD-CARD' | 'DELETE-CARD'
  card: PokemonCard
}
