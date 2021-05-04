import React, { useContext } from 'react'
import { isCollected, MyCollectionContext } from 'utils'
import Card from 'components/Card'

const Collection = () => {
  const { myCollection } = useContext(MyCollectionContext)

  return (
    <div className="card-grid-container">
      {myCollection.cards.map((cardObject) => {
        return <Card key={cardObject.id} cardData={cardObject} />
      })}
    </div>
  )
}

export default Collection
