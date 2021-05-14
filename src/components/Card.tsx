import React, { useState } from 'react'
import { isCollected } from 'utils'
import { useCollection } from 'hooks'

type CardProps = {
  cardData: PokemonCard
}

const Card = ({ cardData }: CardProps) => {
  const { collection, dispatch } = useCollection()
  const [pathname, setPathName] = useState(window.location.pathname)

  return (
    <div className="m-8 text-center">
      <figure className="relative rounded-xl figure-effect">
        <img
          src={cardData.images.small}
          className="figure-img rounded-xl custom-box-shadow  w-64 h-80 transition-all"
        />
        <figcaption
          className="figure-text 
        text-white 
        bg-gray-800 
        p-8
        absolute 
        object-left 
        top-0 h-full 
        w-72 
        opacity-0 
        rounded-lg 
        custom-box-shadow 
        transition-all 
        duration-300"
        >
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
                className="mb-12 text-gray-100 hover:underline"
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
                <button
                  className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg"
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
                className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg"
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
