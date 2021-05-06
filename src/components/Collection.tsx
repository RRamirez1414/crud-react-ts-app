import React from 'react'
import Card from 'components/Card'
import { useCollection } from 'hooks'

const Collection = () => {
  const { myCollection } = useCollection()

  return (
    <div className="card-grid-container">
      {myCollection.cards.map((cardObject) => {
        return <Card key={cardObject.id} cardData={cardObject} />
      })}
    </div>
  )
}

export default Collection
