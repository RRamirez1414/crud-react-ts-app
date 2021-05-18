import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

type PaginationProps = {
  currentPage: number
  totalPages: number
  setCurrentPage: (page: number) => void
}

const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps) => {
  return (
    <div tw="text-2xl text-center block mx-0 mt-4 mb-12">
      <h2>
        Page: <h2 tw="inline font-bold">{currentPage}</h2> of{' '}
        <h2 tw="inline font-bold">{totalPages}</h2>
      </h2>
      <PaginatedButton
        disabled={currentPage <= 1}
        onClick={() => {
          setCurrentPage(currentPage - 1)
        }}
      >
        <AiFillCaretLeft />
      </PaginatedButton>
      <PaginatedButton
        disabled={currentPage >= totalPages}
        onClick={() => {
          setCurrentPage(currentPage + 1)
        }}
      >
        <AiFillCaretRight />
      </PaginatedButton>
    </div>
  )
}

export default Pagination

const PaginatedButton = styled.button`
  ${tw`bg-blue-500 m-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}
`
