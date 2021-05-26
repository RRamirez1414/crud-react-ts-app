import React, { useState } from 'react'
import { isCollected } from 'utils'
import { useCollection } from 'hooks'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

type CardProps = {
  cardData: PokemonCard
}

const Card = ({ cardData }: CardProps) => {
  const { t } = useTranslation()
  const { collection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)

  return (
    <CardContainer>
      <Figure>
        <FigImage src={cardData.images.small} />
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
                {pathname === '/search' ? <p>{t('In Collection')}</p> : null}
                <FigButton
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

const Figure = styled.figure`
  ${tw`relative rounded-xl overflow-hidden h-full shadow-bottom-right duration-100`}
  &:hover img {
    ${tw`motion-safe:translate-x-80`}
  }
`

const FigImage = tw.img`
  rounded-xl 
  w-64 
  h-80 
  transition-all 
  absolute 
  object-left
  transform
  duration-500
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

const FigButton = styled.button<{ isAdded?: boolean }>`
  ${tw`focus:outline-none 
  text-white 
  py-2.5 
  px-5 
  rounded-full
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
