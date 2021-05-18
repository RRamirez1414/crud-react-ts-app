import React, { useEffect } from 'react'
import Collection from './Collection'
import PageTitle from './PageTitle'
import PageContainer from './Container'
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
    <PageContainer>
      <PageTitle>My Collection</PageTitle>
      <Collection />
    </PageContainer>
  )
}

export default MyCollectionsPage
