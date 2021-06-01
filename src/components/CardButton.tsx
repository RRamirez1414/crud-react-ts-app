import React, { ReactNode, useEffect, useState } from 'react'
import { useCollection } from 'hooks'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { isCollected } from 'utils'
import tw from 'twin.macro'

type CardButtonProps = {
  cardData: PokemonCard
}

const CardButton = ({ cardData }: CardButtonProps) => {
  const { t } = useTranslation()
  const { collection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)
  const [isAdded, setIsAdded] = useState(
    isCollected({ cards: collection.cards, id: cardData.id })
  )

  const variants = {
    show: { scale: [0, 1], delay: 0.2 },
    hide: { scale: [1, 0] },
  }

  return (
    <motion.div transition={{ duration: 0.2 }}>
      {pathname === '/search' ? (
        <InCollection
          variants={variants}
          initial={{ scale: 0 }}
          animate={isAdded ? 'show' : 'hide'}
        >
          {t('In Collection')}
        </InCollection>
      ) : null}
      {isAdded ? (
        <FigDeleteButton
          variants={variants}
          initial={{ scale: 0 }}
          animate={isAdded ? 'show' : 'hide'}
          onClick={() => {
            setIsAdded(false)
            dispatch({
              type: 'DELETE-CARD',
              card: cardData,
            })
          }}
        >
          {t('DELETE')}
        </FigDeleteButton>
      ) : (
        <FigAddButton
          variants={variants}
          initial={{ scale: 0 }}
          animate={isAdded ? 'hide' : 'show'}
          onClick={() => {
            setIsAdded(true)
            dispatch({
              type: 'ADD-CARD',
              card: cardData,
            })
          }}
        >
          {t('Add')}
        </FigAddButton>
      )}
    </motion.div>
  )
}

export default CardButton

const InCollection = tw(motion.p)`text-lg`

const FigDeleteButton = tw(motion.button)`
  focus:outline-none 
  text-white 
  py-2.5 
  px-5 
  rounded-lg
  hover:shadow-lg
  bg-red-500
  hover:bg-red-600
`

const FigAddButton = tw(motion.button)`
  focus:outline-none 
  text-white 
  py-2.5 
  px-5 
  rounded-lg
  hover:shadow-lg
  bg-blue-500 
  hover:bg-blue-600
`
