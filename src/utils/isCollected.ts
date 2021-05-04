const isCollected = ({ cards, id }: isCollectedArgs) => {
  return cards.find((card) => card.id === id)
}

export default isCollected
