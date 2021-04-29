import React from 'react'

type CardProps = {
  cardData: PokemonCardObject
  isCollected: boolean
  collection: Collection
  dispatch: React.Dispatch<Action>
}

const Card = ({ cardData, isCollected, collection, dispatch }: CardProps) => {
  return (
    <div className="grid-item">
      <figure className="figure-effect">
        <img src={cardData.images.small} className="card-img" />
        <figcaption className="figure-text">
          <p className="figure-inner-text">
            <p>
              Name: <strong>{cardData.name}</strong>
            </p>
            <p>Set Release Date: {cardData.set.releaseDate}</p>
            <p>
              Types:{' '}
              {cardData.types.map((type) => (
                <strong key={type}>{type}</strong>
              ))}
            </p>
          </p>
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
            {isCollected ? (
              <div>
                {window.location.pathname === '/search' ? (
                  <p>In Collection</p>
                ) : null}
                <button
                  onClick={() => {
                    const filteredCollection = collection.cards.filter(
                      (card) => card.id !== cardData.id
                    )
                    dispatch({
                      type: 'DELETE-CARD',
                      newCollection: {
                        ...collection,
                        cards: filteredCollection,
                      },
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
                    newCollection: {
                      ...collection,
                      cards: [...collection.cards, cardData],
                    },
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
