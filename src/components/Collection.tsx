import React from 'react'
import Card from 'components/Card'
import { useCollection } from 'hooks'

const Collection = () => {
  const { collection } = useCollection()

  return (
    <div className="card-grid-container">
      {collection.cards.map((cardObject) => {
        return <Card key={cardObject.id} cardData={cardObject} />
      })}
    </div>
  )
}

export default Collection
