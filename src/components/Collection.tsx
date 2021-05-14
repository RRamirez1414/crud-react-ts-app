import React from 'react'
import Card from 'components/Card'
import { useCollection } from 'hooks'
import { StyledGrid } from 'styles'

const Collection = () => {
  const { collection } = useCollection()

  return (
    <StyledGrid>
      {collection.cards.map((cardObject) => {
        return <Card key={cardObject.id} cardData={cardObject} />
      })}
    </StyledGrid>
  )
}

export default Collection
