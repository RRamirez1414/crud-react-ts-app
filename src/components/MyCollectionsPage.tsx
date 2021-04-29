import React from 'react'
import Collection from 'components/Collection'

type MyCardsPageProps = {
  collection: Collection
  dispatch: React.Dispatch<Action>
}

const MyCollectionsPage = ({ collection, dispatch }: MyCardsPageProps) => {
  return (
    <div className="page-container">
      <h1>My Collection</h1>
      <Collection collection={collection} dispatch={dispatch} />
    </div>
  )
}

export default MyCollectionsPage
