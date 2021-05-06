import React, { ReactChild, useReducer } from 'react'
import { collectionReducer } from 'utils'

const MyCollectionContext = React.createContext<{
  myCollection: Collection
  dispatch: React.Dispatch<Action>
}>({
  myCollection: { cards: [] },
  dispatch: () => undefined,
})

const CollectionProvider = ({
  children,
}: {
  children: ReactChild[] | ReactChild
}) => {
  const [myCollection, dispatch] = useReducer(collectionReducer, {
    cards: [],
  })

  return (
    <MyCollectionContext.Provider value={{ myCollection, dispatch }}>
      {children}
    </MyCollectionContext.Provider>
  )
}

const useCollection = () => {
  const context = React.useContext(MyCollectionContext)
  if (context === undefined) {
    throw new Error('useCollection must be used within a CollectionProvider')
  }
  return context
}

export { CollectionProvider, useCollection }
