'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { type Route } from 'next'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'

type PetPaginationProps = {
  totalPage: number
  size?: number
}

export function PetPagination({ totalPage, size = 10 }: PetPaginationProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', pageNumber.toString())
    params.set('size', size.toString())
    return `${pathname}?${params.toString()}`
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={currentPage <= 1 ? '#' : (createPageURL(currentPage - 1) as Route)}
            disabled={currentPage <= 1}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(1) as Route} isActive={currentPage === 1}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(2) as Route} isActive={currentPage === 2}>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href={createPageURL(3) as Route} isActive={currentPage === 3}>
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href={(currentPage >= totalPage ? '#' : createPageURL(currentPage + 1)) as Route}
            disabled={currentPage >= totalPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
