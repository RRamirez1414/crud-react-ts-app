import React from 'react'
import Collection from 'components/Collection'
import { CollectionProvider } from 'hooks/useCollectionContext'

const MyCollectionsPage = () => {
  return (
    <div className="page-container">
      <h1>My Collection</h1>
      <CollectionProvider>
        <Collection />
      </CollectionProvider>
    </div>
  )
}

export default MyCollectionsPage
