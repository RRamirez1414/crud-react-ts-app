import React, { useEffect } from 'react'
import Collection from 'components/Collection'
import { useCollection } from 'hooks'
import { fetchCards } from 'utils'

const MyCollectionsPage = () => {
  const { collection, dispatch } = useCollection()

  //load an initial card
  useEffect(() => {
    if (collection.cards.length === 0) {
      fetchCards('&q=id:basep-1').then((result) => {
        if (!collection.cards.find((card) => card.id === 'basep-1'))
          dispatch({
            type: 'ADD-CARD',
            card: result.data[0],
          })
      })
    }
  }, [])
  return (
    <div className="page-container">
      <h1 className="text-2xl my-4">My Collection</h1>
      <Collection />
    </div>
  )
}

export default MyCollectionsPage
