import React, { ReactNode } from 'react'
import tw from 'twin.macro'

type Props = {
  children: ReactNode
}

const CardGrid = ({ children }: Props) => {
  return <Grid>{children}</Grid>
}

export default CardGrid

const Grid = tw.div`grid grid-cols-1 px-40 justify-items-center
  lg:grid-cols-2
<<<<<<< HEAD
  xl:grid-cols-3
=======
>>>>>>> PR changes, cleaned up package.json and styled components
  2xl:grid-cols-4
`
