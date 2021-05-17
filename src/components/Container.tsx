import React, { ReactNode } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

type Props = {
  children: ReactNode
}

const PageContainer = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default PageContainer

const Container = styled.div`
  ${tw`px-20 h-full`}
`
