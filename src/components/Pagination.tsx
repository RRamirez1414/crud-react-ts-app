import React from 'react'

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
    <div className="pagination content-bottom">
      <h2>
        Page: {currentPage} of {totalPages}
      </h2>
      <button
        disabled={currentPage <= 1}
        onClick={() => {
          setCurrentPage(currentPage - 1)
        }}
      >
        Previous
      </button>
      <button
        disabled={currentPage >= totalPages}
        onClick={() => {
          setCurrentPage(currentPage + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
