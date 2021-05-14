import tw from 'twin.macro'
import styled from 'styled-components'

const StyledGrid = styled.div`
  ${tw`grid grid-cols-2 px-40 justify-items-center`}

  @media (min-width: 1536px) {
    ${tw`grid grid-cols-4 px-40 justify-items-center`}
  }
`

export default StyledGrid
