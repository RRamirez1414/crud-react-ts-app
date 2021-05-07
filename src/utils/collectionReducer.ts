const collectionReducer = (
  collection: Collection,
  action: CollectionAction
) => {
  const { type, card } = action

  switch (type) {
    case 'ADD-CARD':
      return {
        ...collection,
        cards: [...collection.cards, card],
      }

    case 'DELETE-CARD':
      return {
        ...collection,
        cards: collection.cards.filter((cardItem) => cardItem.id !== card.id),
      }
    default:
      throw new Error(`Action ${type} does not exist in collectionReducer`)
  }
}

export default collectionReducer
