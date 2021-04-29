const collectionReducer = (collection: Collection, action: Action) => {
  const { type, newCollection } = action

  switch (type) {
    case 'ADD-CARD':
      return {
        ...collection,
        cards: [...newCollection.cards],
      }

    case 'DELETE-CARD':
      return {
        ...collection,
        cards: [...newCollection.cards],
      }
    default:
      throw new Error(`Action ${type} does not exist in collectionReducer`)
  }
}

export default collectionReducer
