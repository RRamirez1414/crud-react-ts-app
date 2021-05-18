import React from 'react'
import Card from 'components/Card'
import CardGrid from 'components/CardGrid'
import { useCollection } from 'hooks'

const Collection = () => {
  const { collection } = useCollection()

  return (
    <CardGrid>
      {collection.cards.map((cardObject) => {
        return <Card key={cardObject.id} cardData={cardObject} />
      })}
    </CardGrid>
  )
}

export default Collection
