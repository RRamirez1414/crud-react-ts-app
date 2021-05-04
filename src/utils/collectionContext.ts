import React from 'react'

const MyCollectionContext = React.createContext<{
  myCollection: Collection
  dispatch: React.Dispatch<Action>
}>({
  myCollection: { cards: [] },
  dispatch: () => undefined,
})

export default MyCollectionContext
