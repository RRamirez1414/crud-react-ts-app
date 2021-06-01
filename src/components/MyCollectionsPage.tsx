import React, { useEffect } from 'react'
import Collection from './Collection'
import PageTitle from './PageTitle'
import PageContainer from './Container'
import { useCollection } from 'hooks'
import { fetchCards } from 'utils'
import { useTranslation } from 'react-i18next'

const MyCollectionsPage = () => {
  const { collection, dispatch } = useCollection()
  const { t } = useTranslation()

  //load an initial card
  useEffect(() => {
    if (collection.cards.length === 0) {
      fetchCards('&q=id:swsh4-44').then((result) => {
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
      <PageTitle>{t('My Collection')}</PageTitle>
      {collection.cards.length === 0 ? <h2>No cards in collection</h2> : null}
      <Collection />
    </PageContainer>
  )
}

export default MyCollectionsPage
