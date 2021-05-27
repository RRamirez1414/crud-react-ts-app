import React, { useState } from 'react'
import Card from 'components/Card'
import CardGrid from 'components/CardGrid'
import { useCollection } from 'hooks'
import { isCollected } from 'utils'
import { motion } from 'framer-motion'

const Collection = () => {
  const { collection } = useCollection()

  const variants = {
    show: { scale: [0, 1] },
    hide: { scale: [1, 0] },
  }

  return (
    <CardGrid>
      {collection.cards.map((cardObject) => {
        return (
          <motion.div
            key={cardObject.id}
            transition={{ duration: 0.2 }}
            initial={{ scale: 0 }}
            variants={variants}
            animate={
              isCollected({
                cards: collection.cards,
                id: cardObject.id,
              })
                ? 'show'
                : 'hide'
            }
          >
            <Card cardData={cardObject} />
          </motion.div>
        )
      })}
    </CardGrid>
  )
}

export default Collection
