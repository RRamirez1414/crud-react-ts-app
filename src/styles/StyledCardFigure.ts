import tw from 'twin.macro'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  ${tw`relative rounded-xl`}
`

const StyledFigureImage = styled.img`
  ${tw`rounded-xl w-64 h-80 transition-all`}
  box-shadow: 5px 5px 6px rgb(0 0 0 / 45%)
`
const StyledFigCaption = styled.figcaption`
  ${tw`text-white 
  bg-gray-800 
  p-8
  absolute 
  object-left 
  top-0 h-full 
  w-72 
  opacity-0 
  rounded-lg  
  transition-all 
  duration-300
`}
  box-shadow: 5px 5px 6px rgb(0 0 0 / 45%)
`

const StyledFigButton = styled.button<{ isAdded?: boolean }>`
  ${({ isAdded }) => {
    if (isAdded) {
      return tw`focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg`
    }
    return tw`focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg`
  }}
`

export { StyledFigure, StyledFigureImage, StyledFigCaption, StyledFigButton }
