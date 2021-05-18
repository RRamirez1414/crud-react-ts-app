import React, { ReactNode } from 'react'
import tw from 'twin.macro'

type Props = {
  children: ReactNode
}

const PageContainer = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default PageContainer

const Container = tw.div`px-20 h-full`
