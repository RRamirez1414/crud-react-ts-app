import React, { useState } from 'react'
import tw from 'twin.macro'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import CardButton from './CardButton'

type CardProps = {
  cardData: PokemonCard
}

const Card = ({ cardData }: CardProps) => {
  const { t } = useTranslation()
  const [isHovered, setHovered] = useState(false)

  return (
    <CardContainer>
      <Figure
        onMouseOver={() => {
          setHovered(true)
        }}
        onMouseLeave={() => {
          setHovered(false)
        }}
      >
        <FigImage
          src={cardData.images.small}
          transition={{ duration: 0.5, ease: 'easeOut' }}
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

          <CardButton cardData={cardData} />

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
  absolute 
  object-left
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

const Set = tw.p`overflow-ellipsis`
const TCGLink = tw.a`mb-12 text-gray-100 hover:underline`
