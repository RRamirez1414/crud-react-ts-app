type isCollectedArgs = {
  cards: PokemonCard[]
  id: string
}

const isCollected = ({ cards, id }: isCollectedArgs): boolean => {
  return cards.some((card) => card.id === id)
}

export default isCollected
