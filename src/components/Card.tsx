import React, { useState } from 'react'
import { isCollected } from 'utils'
import { useCollection } from 'hooks'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import translation from 'i18n/en-US/en-US'

type CardProps = {
  cardData: PokemonCard
}

const Card = ({ cardData }: CardProps) => {
  const buttonTransition = {
    duration: 0.5,
  }
  const buttonAnimation = {
    scale: [0, 1],
    borderRadius: ['10%', '30%', '10%'],
  }
  const { t } = useTranslation()
  const { collection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)
  const [isHovered, setHovered] = useState(false)

  return (
    <CardContainer>
      <Figure
        onMouseEnter={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
      >
        <FigImage
          src={cardData.images.small}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          animate={{ translateX: isHovered ? 250 : 0 }}
        />
        <FigCaption>
          <span>
            <p>
              {t('Name')}: <strong>{cardData.name}</strong>
            </p>
            <Set>
              {t('Set')}: {cardData.set.name}
            </Set>
            <p>
              {t('Types')}:{' '}
              {cardData.types?.map((type) => (
                <strong key={type}>{type}</strong>
              ))}
            </p>
          </span>
          {cardData.tcgplayer ? (
            <p>
              <TCGLink
                target="_blank"
                rel="noreferrer"
                href={cardData.tcgplayer.url}
              >
                {t('Purchase this card')}
              </TCGLink>
            </p>
          ) : null}
          <div>
            {isCollected({ cards: collection.cards, id: cardData.id }) ? (
              <div>
                {pathname === '/search' ? (
                  <InCollection
                    transition={{ transition: 0.5 }}
                    animate={{ scale: [0, 1] }}
                  >
                    {t('In Collection')}
                  </InCollection>
                ) : null}
                <FigButton
                  transition={buttonTransition}
                  animate={buttonAnimation}
                  isAdded
                  onClick={() => {
                    dispatch({
                      type: 'DELETE-CARD',
                      card: cardData,
                    })
                  }}
                >
                  {t('DELETE')}
                </FigButton>
              </div>
            ) : (
              <div>
                <FigButton
                  transition={buttonTransition}
                  animate={buttonAnimation}
                  onClick={() => {
                    dispatch({
                      type: 'ADD-CARD',
                      card: cardData,
                    })
                  }}
                >
                  {t('Add')}
                </FigButton>
              </div>
            )}
          </div>
          <p>{cardData.flavorText}</p>
        </FigCaption>
      </Figure>
    </CardContainer>
  )
}

export default Card

const CardContainer = tw.div`m-8 text-center`

const Figure = tw.figure`
  relative 
  rounded-xl 
  overflow-hidden 
  h-full 
  shadow-bottom-right 
  duration-100
`

const FigImage = tw(motion.img)`
  rounded-xl 
  w-64 
  h-80 
  transition-all 
  absolute 
  object-left
  transform
  duration-500
  z-20
`
const FigCaption = tw.figcaption`
  text-white 
  bg-gray-800 
  p-8 
  top-0 
  h-80 
  w-64
  rounded-lg  
  shadow-bottom-right
`

const InCollection = motion.p

const FigButton = styled(motion.button)<{ isAdded?: boolean }>`
  ${tw`focus:outline-none 
  text-white 
  py-2.5 
  px-5 
  rounded-lg
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
const Set = tw.p`overflow-ellipsis`
const TCGLink = tw.a`mb-12 text-gray-100 hover:underline`
