import React from 'react'
import { CgPokemon } from 'react-icons/cg'
import tw from 'twin.macro'
import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <Container
      transition={{ duration: 0.7, loop: Infinity }}
      animate={{ rotate: 360 }}
    >
      <PokemonIcon />
    </Container>
  )
}

export default Loader

const Container = tw(motion.div)`inline-block h-8 w-8 mx-4 align-middle`

const PokemonIcon = tw(CgPokemon)`w-full h-full`
