'use client'

import { useCallback, useState, useTransition, useEffect } from 'react'

import { PetGrid } from '@/components/PetGrid'

import { usePetStore } from '@/stores/pet-store-provider'
import type { GetProductsResponse } from '@/types/products'

type DiscoverPetsProps = {
  page?: number
  size?: number
}

export function DiscoverPets({ page = 1, size = 10 }: DiscoverPetsProps) {
  const { petsPerPage, setPetsPerPage, setPetsTotal } = usePetStore((state) => state)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const storeIndexes = Object.keys(petsPerPage)
  const isEmpty = storeIndexes.length === 0

  const fetchPets = useCallback(() => {
    startTransition(async () => {
      try {
        const response = await fetch(`/api/products?page=${page}&size=${size}`)
        const { error, products } = (await response.json()) as GetProductsResponse
        if (products) {
          setPetsTotal(products.total)
          setPetsPerPage(products.items, page)
          setError(null)
        }
        if (error) {
          setError('Something went wrong')
        }
      } catch (e) {
        console.error(e)
      }
    })
  }, [page, size, setPetsPerPage, setPetsTotal])

  useEffect(() => {
    if (isEmpty) {
      fetchPets()
    }
  }, [fetchPets, isEmpty])

  return (
    <div className="space-y-5">
      <h3 className="flex flex-col">
        <span>Discover what other customers enjoy, which </span>
        <span className="text-2xl font-bold capitalize text-primary">You may also like</span>
      </h3>
      {(isPending || error) && (
        <div className="flex min-h-[200px] items-center justify-center">
          <p className="font-medium">{isPending ? 'LOADING...' : error}</p>
        </div>
      )}
      {!isEmpty && <PetGrid pets={petsPerPage[storeIndexes[0]].slice(3, 7)} />}
    </div>
  )
}
