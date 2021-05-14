import React from 'react'
import { StyledPaginatedButton } from 'styles'

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
    <div className="text-2xl text-center block mx-0 mt-4 mb-12">
      <h2>
        Page: <h2 className="inline font-bold">{currentPage}</h2> of{' '}
        <h2 className="inline font-bold">{totalPages}</h2>
      </h2>
      <StyledPaginatedButton
        className="btn"
        disabled={currentPage <= 1}
        onClick={() => {
          setCurrentPage(currentPage - 1)
        }}
      >
        &lt;
      </StyledPaginatedButton>
      <StyledPaginatedButton
        className="btn"
        disabled={currentPage >= totalPages}
        onClick={() => {
          setCurrentPage(currentPage + 1)
        }}
      >
        &gt;
      </StyledPaginatedButton>
    </div>
  )
}

export default Pagination
