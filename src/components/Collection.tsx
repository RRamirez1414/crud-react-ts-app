import React from 'react'
import { isCollected } from 'utils'
import Card from 'components/Card'

type CollectionProps = {
  collection: Collection
  dispatch: React.Dispatch<Action>
}

const Collection = ({ collection, dispatch }: CollectionProps) => {
  const { cards } = collection

  return (
    <div className="grid-container">
      {cards.map((cardObject) => {
        return (
          <Card
            key={cardObject.id}
            cardData={cardObject}
            collection={collection}
            isCollected={isCollected(cards, cardObject.id) ? true : false}
            dispatch={dispatch}
          />
        )
      })}
    </div>
  )
}

export default Collection
