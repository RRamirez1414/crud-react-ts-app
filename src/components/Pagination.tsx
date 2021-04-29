import React from 'react'

type PaginationProps = {
  currentPage: number
  data: ResponseDataType
  setPage: (page: number) => void
}

const Pagination = ({ currentPage, data, setPage }: PaginationProps) => {
  const totalPageCount = Math.ceil(data.totalCount / data.pageSize)
  return (
    <div className="pagination">
      <h2>
        Page: {currentPage} of{' '}
        {Number.isNaN(totalPageCount) ? 0 : totalPageCount}
      </h2>
      <button
        disabled={data.page <= 1 ? true : false}
        onClick={() => {
          setPage(currentPage - 1)
        }}
      >
        Previous
      </button>
      <button
        disabled={data.page >= totalPageCount ? true : false}
        onClick={() => {
          setPage(currentPage + 1)
        }}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
