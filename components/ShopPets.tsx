'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useCallback, useState, useTransition } from 'react'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  AdaptiveModal,
  AdaptiveModalTrigger,
  AdaptiveModalContent,
  AdaptiveModalHeader,
  AdaptiveModalTitle,
  AdaptiveModalDescription,
} from '@/components/ui/adaptive-modal'
import { PetGrid } from '@/components/PetGrid'
import { FilterPanel } from '@/components/Filters'

import { usePetStore } from '@/stores/pet-store-provider'

import type { GetProductsResponse } from '@/types/products'

import Filter from '@/public/filter.svg'

export function ShopPets() {
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1
  const pageSize = Number(searchParams.get('size')) || 10

  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const { petsPerPage, petsTotal, setPetsPerPage, setPetsTotal } = usePetStore((state) => state)

  const inStore = petsPerPage.hasOwnProperty(currentPage.toString())
  const cachedPets = petsPerPage[currentPage.toString()] || []

  const fetchPets = useCallback(() => {
    startTransition(async () => {
      try {
        const response = await fetch(`/api/products?page=${currentPage}&size=${pageSize}`)
        const { error, products } = (await response.json()) as GetProductsResponse
        if (products) {
          setPetsTotal(products.total)
          setPetsPerPage(products.items, currentPage)
          setError(null)
        }
        if (error) {
          setError('Something went wrong')
        }
      } catch (e) {
        console.error(e)
      }
    })
  }, [currentPage, pageSize, setPetsPerPage, setPetsTotal])

  useEffect(() => {
    if (!inStore) {
      fetchPets()
    }
  }, [fetchPets, inStore])

  return (
    <section id="shop-pets" className="mt-10 flex gap-6">
      <div className="sticky top-[calc(100px+1rem)] w-[280px] space-y-5 self-start text-primary max-lg:hidden">
        <h2 className="text-2xl font-bold text-primary">Filter</h2>
        <FilterPanel />
      </div>
      <div className="flex-1 space-y-5">
        <div className="flex justify-between gap-y-5 max-lg:flex-col-reverse lg:items-center">
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl font-bold text-primary">All Dogs</h2>
            <p className="opacity-80">{petsTotal} puppies</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-y-2.5">
            <Button variant="outline" className="rounded-full border-border text-foreground/50">
              Sort by: Popular <ChevronDown className="ml-2 size-6" />
            </Button>
            <AdaptiveModal>
              <AdaptiveModalTrigger asChild>
                <Button variant="ghost" className="rounded-full lg:hidden">
                  <Filter className="mr-2 size-6 fill-none" />
                  Filter
                </Button>
              </AdaptiveModalTrigger>
              <AdaptiveModalContent>
                <AdaptiveModalHeader>
                  <AdaptiveModalTitle className="text-2xl font-bold text-primary">
                    Filter
                  </AdaptiveModalTitle>
                  <AdaptiveModalDescription className="text-foreground-light">
                    Apply filters to find your perfect pet
                  </AdaptiveModalDescription>
                </AdaptiveModalHeader>
                <div className="max-sm:px-4 max-sm:pb-4">
                  <FilterPanel />
                </div>
              </AdaptiveModalContent>
            </AdaptiveModal>
          </div>
        </div>
        {isPending || error ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="font-medium">{isPending ? 'LOADING...' : error}</p>
          </div>
        ) : (
          <PetGrid pets={cachedPets} />
        )}
      </div>
    </section>
  )
}
