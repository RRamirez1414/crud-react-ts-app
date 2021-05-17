import React, { ReactNode } from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const CardGrid = ({ children }: Props) => {
  return <StyledGrid>{children}</StyledGrid>
}

export default CardGrid

const StyledGrid = styled.div`
  ${tw`grid grid-cols-1 px-40 justify-items-center`}

  @media (min-width: 1000px) {
    ${tw`grid grid-cols-2 px-40 justify-items-center`}
  }

  @media (min-width: 1536px) {
    ${tw`grid grid-cols-4 px-40 justify-items-center`}
  }
`
