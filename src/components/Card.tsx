import React, { useState } from 'react'
import { isCollected } from 'utils'
import { useCollection } from 'hooks'
import tw, { css } from 'twin.macro'
import styled from 'styled-components'

type CardProps = {
  cardData: PokemonCard
}

const Card = ({ cardData }: CardProps) => {
  const { collection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)

  return (
    <div tw="m-8 text-center">
      <Figure css={[figEffectHover]}>
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
              <a
                tw="mb-12 text-gray-100 hover:underline"
                target="_blank"
                rel="noreferrer"
                href={cardData.tcgplayer.url}
              >
                Purchase this card
              </a>
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
    </div>
  )
}

export default Card

const Figure = styled.figure`
  ${tw`relative rounded-xl overflow-hidden h-full`}
`

const FigImage = styled.img`
  ${tw`rounded-xl 
  w-64 
  h-80 
  transition-all 
  absolute 
  object-left
  transform
  duration-700
  `}
  box-shadow: 5px 5px 6px rgb(0 0 0 / 45%)
`
const FigCaption = styled.figcaption`
  ${tw`text-white 
  bg-gray-800 
  p-8 
  top-0 
  h-80 
  w-64
  rounded-lg  
`}
  box-shadow: 5px 5px 6px rgb(0 0 0 / 45%)
`

const FigButton = styled.button<{ isAdded?: boolean }>`
  ${({ isAdded }) => {
    if (isAdded) {
      return tw`focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg`
    }
    return tw`focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg`
  }}
`

const figEffectHover = css`
  &:hover img {
    ${tw`motion-safe:translate-x-64`}
  }
`
