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
    name: string
  }
  flavorText: string
  tcgplayer?: {
    url: string
  }
}

type Collection = {
  cards: PokemonCard[]
}

type CollectionAction = {
  type: 'ADD-CARD' | 'DELETE-CARD'
  card: PokemonCard
}
