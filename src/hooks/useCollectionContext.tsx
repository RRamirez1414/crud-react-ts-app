import React, { ReactChild, useReducer } from 'react'
import { collectionReducer } from 'utils'

const CollectionContext = React.createContext<{
  collection: Collection
  dispatch: React.Dispatch<CollectionAction>
}>({
  collection: { cards: [] },
  dispatch: () => undefined,
})

const CollectionProvider = ({
  children,
}: {
  children: ReactChild[] | ReactChild
}) => {
  const [collection, dispatch] = useReducer(collectionReducer, {
    cards: [],
  })

  return (
    <CollectionContext.Provider value={{ collection, dispatch }}>
      {children}
    </CollectionContext.Provider>
  )
}

const useCollection = () => {
  const context = React.useContext(CollectionContext)
  if (context === undefined) {
    throw new Error('useCollection must be used within a CollectionProvider')
  }
  return context
}

export { CollectionProvider, useCollection }
