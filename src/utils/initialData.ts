const initialPokemonCardData = {
  id: 'basep-1',
  name: 'Pikachu',
  supertype: 'Pokémon',
  types: ['Basic'],
  images: {
    small: 'https://images.pokemontcg.io/basep/1.png',
    large: 'https://images.pokemontcg.io/basep/1_hires.png',
  },
  set: {
    releaseDate: '1999/07/01',
  },
  flavorText:
    'When several of these Pokémon gather, their electricity could build and cause lightning storms',
  tcgplayer: {
    url: 'https://prices.pokemontcg.io/tcgplayer/basep-1',
  },
}

const initialCollection: Collection = {
  id: 0,
  cards: [initialPokemonCardData],
}

export { initialPokemonCardData, initialCollection }
