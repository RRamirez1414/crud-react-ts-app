import React, { ReactNode } from 'react'
import tw from 'twin.macro'

type Props = {
  children: ReactNode
}

const PageTitle = ({ children }: Props) => {
  return <Title>{children}</Title>
}

export default PageTitle

const Title = tw.h2`text-2xl my-4`
