const isCollected = (cards: PokemonCardObject[], id: string) => {
  return cards.find((card) => card.id === id)
}

export default isCollected
