import React, { ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

type Props = {
  children: ReactNode
}

const PageTitle = ({ children }: Props) => {
  return <Title>{children}</Title>
}

export default PageTitle

const Title = styled.h2`
  ${tw`text-2xl my-4`}
`
