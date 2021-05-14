import React, { useState } from 'react'
import { isCollected } from 'utils'
import { useCollection } from 'hooks'
import {
  StyledFigure,
  StyledFigureImage,
  StyledFigCaption,
  StyledFigButton,
} from 'styles'
import 'twin.macro'

type CardProps = {
  cardData: PokemonCard
}

const Card = ({ cardData }: CardProps) => {
  const { collection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)

  return (
    <div tw="m-8 text-center">
      <StyledFigure className=" figure-effect">
        <StyledFigureImage className="figure-img" src={cardData.images.small} />
        <StyledFigCaption className="figure-text">
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
                <StyledFigButton
                  isAdded
                  onClick={() => {
                    dispatch({
                      type: 'DELETE-CARD',
                      card: cardData,
                    })
                  }}
                >
                  DELETE
                </StyledFigButton>
              </div>
            ) : (
              <StyledFigButton
                onClick={() => {
                  dispatch({
                    type: 'ADD-CARD',
                    card: cardData,
                  })
                }}
              >
                Add To Collection
              </StyledFigButton>
            )}
          </div>
          <p>{cardData.flavorText}</p>
        </StyledFigCaption>
      </StyledFigure>
    </div>
  )
}

export default Card
