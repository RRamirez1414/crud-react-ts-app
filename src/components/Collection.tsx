import React, { useEffect } from 'react'
import Card from 'components/Card'
import { useCollection } from 'hooks'
import { fetchCards } from 'utils'

const Collection = () => {
  const { myCollection, dispatch } = useCollection()

  //load an initial card
  useEffect(() => {
    fetchCards('https://api.pokemontcg.io/v2/cards?q=id:basep-1').then(
      (result) => {
        dispatch({
          type: 'ADD-CARD',
          card: result.data[0],
        })
      }
    )
  }, [])

  return (
    <div className="card-grid-container">
      {myCollection.cards.map((cardObject) => {
        return <Card key={cardObject.id} cardData={cardObject} />
      })}
    </div>
  )
}

export default Collection
