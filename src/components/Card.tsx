import React, { useState, useContext, useEffect } from 'react'
import { isCollected } from 'utils'
import { useCollection } from 'hooks'

type CardProps = {
  cardData: PokemonCard
}

const Card = ({ cardData }: CardProps) => {
  const { myCollection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)

  return (
    <div className="grid-item content-center">
      <figure className="figure-effect">
        <img src={cardData.images.small} className="card-img" />
        <figcaption className="figure-text">
          <span className="figure-inner-text">
            <p>
              Name: <strong>{cardData.name}</strong>
            </p>
            <p>Set Release Date: {cardData.set.releaseDate}</p>
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
                className="link-format"
                target="_blank"
                rel="noreferrer"
                href={cardData.tcgplayer.url}
              >
                Purchase this card
              </a>
            </p>
          ) : null}
          <div>
            {isCollected({ cards: myCollection.cards, id: cardData.id }) ? (
              <div>
                {pathname === '/search' ? <p>In Collection</p> : null}
                <button
                  onClick={() => {
                    dispatch({
                      type: 'DELETE-CARD',
                      card: cardData,
                    })
                  }}
                >
                  DELETE
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  dispatch({
                    type: 'ADD-CARD',
                    card: cardData,
                  })
                }}
              >
                Add To Collection
              </button>
            )}
          </div>
          <p>{cardData.flavorText}</p>
        </figcaption>
      </figure>
    </div>
  )
}

export default Card
