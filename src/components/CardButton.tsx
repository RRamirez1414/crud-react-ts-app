import React, { ReactNode, useEffect, useState } from 'react'
import { useCollection } from 'hooks'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { isCollected } from 'utils'
import { CardProps } from './Card'
import styled from 'styled-components'
import tw from 'twin.macro'

const CardButton = ({ cardData }: CardProps) => {
  // const buttonAnimation = {
  //   scale: [0, 1],
  //   borderRadius: ['10%', '30%', '10%'],
  // }
  const { t } = useTranslation()
  const { collection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)
  const [isAdded, setIsAdded] = useState(
    isCollected({ cards: collection.cards, id: cardData.id })
  )

  const variants = {
    show: { scale: [0, 1] },
    hide: { scale: [1, 0] },
  }

  return (
    <motion.div transition={{ duration: 0.3 }}>
      {pathname === '/search' ? (
        <InCollection variants={variants} animate={isAdded ? 'show' : 'hide'}>
          {t('In Collection')}
        </InCollection>
      ) : null}
      <FigButton
        animate={{ scale: [0, 1] }}
        isAdded={isAdded}
        onClick={() => {
          if (isAdded) {
            //handle deletion
            setIsAdded(false)
            dispatch({
              type: 'DELETE-CARD',
              card: cardData,
            })
          } else {
            //handle addition
            setIsAdded(true)
            dispatch({
              type: 'ADD-CARD',
              card: cardData,
            })
          }
        }}
      >
        <p>{isAdded ? t('DELETE') : t('Add')}</p>
      </FigButton>
    </motion.div>
  )
}

export default CardButton

const InCollection = tw(motion.p)`text-lg`

const FigButton = styled(motion.button)<{ isAdded?: boolean }>`
  ${tw`focus:outline-none 
  text-white 
  py-2.5 
  px-5 
  rounded-lg
  transform
  hover:shadow-lg
  `}

  ${({ isAdded }) => {
    if (isAdded) {
      return tw`     
      bg-red-500 
      hover:bg-red-600 
      `
    }
    return tw`
    bg-blue-500 
    hover:bg-blue-600 
    `
  }}
`
