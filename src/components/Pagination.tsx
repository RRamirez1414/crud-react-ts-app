import React from 'react'
import tw from 'twin.macro'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()
  return (
    <PaginatedContainer>
      <div>
        {t('page')} <H2>{currentPage}</H2> {t('of')} <H2>{totalPages}</H2>
      </div>
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
    </PaginatedContainer>
  )
}

export default Pagination

const PaginatedContainer = tw.div`text-2xl text-center block mx-0 mt-4 mb-12`

const H2 = tw.h2`inline font-bold`

const PaginatedButton = tw.button`bg-blue-500 m-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`
