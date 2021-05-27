type isCollectedArgs = {
  cards: PokemonCard[]
  id: string
}

const isCollected = ({ cards, id }: isCollectedArgs): boolean => {
  return cards.find((card) => card.id === id) ? true : false
}

export default isCollected
