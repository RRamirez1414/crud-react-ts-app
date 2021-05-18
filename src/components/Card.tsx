import React, { useState } from 'react'
import { isCollected } from 'utils'
import { useCollection } from 'hooks'
import tw from 'twin.macro'
import styled from 'styled-components'

type CardProps = {
  cardData: PokemonCard
}

const Card = ({ cardData }: CardProps) => {
  const { collection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)

  return (
    <CardContainer>
      <Figure>
        <FigImage src={cardData.images.small} />
        <FigCaption>
          <span>
            <p>
              Name: <strong>{cardData.name}</strong>
            </p>
            <p>Set: {cardData.set.name}</p>
            <p>
              Types:{' '}
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
                Purchase this card
              </TCGLink>
            </p>
          ) : null}
          <div>
            {isCollected({ cards: collection.cards, id: cardData.id }) ? (
              <div>
                {pathname === '/search' ? <p>In Collection</p> : null}
                <FigButton
                  isAdded
                  onClick={() => {
                    dispatch({
                      type: 'DELETE-CARD',
                      card: cardData,
                    })
                  }}
                >
                  DELETE
                </FigButton>
              </div>
            ) : (
              <FigButton
                onClick={() => {
                  dispatch({
                    type: 'ADD-CARD',
                    card: cardData,
                  })
                }}
              >
                Add To Collection
              </FigButton>
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
  ${tw`relative rounded-xl overflow-hidden h-full shadow-bottom-right`}
  &:hover img {
    ${tw`motion-safe:translate-x-64`}
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
  duration-700
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
  ${({ isAdded }) => {
    if (isAdded) {
      return tw`focus:outline-none 
      text-white 
      text-sm 
      py-2.5 
      px-5 
      rounded-md 
      bg-red-500 
      hover:bg-red-600 
      hover:shadow-lg
      `
    }
    return tw`focus:outline-none 
    text-white 
    text-sm 
    py-2.5 
    px-5 
    rounded-md 
    bg-blue-500 
    hover:bg-blue-600 
    hover:shadow-lg
    `
  }}
`

const TCGLink = tw.a`mb-12 text-gray-100 hover:underline`
