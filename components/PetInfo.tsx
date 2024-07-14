'use client'

import Image from 'next/image'
import { useEffect, useCallback, useState, useTransition } from 'react'
import { Share2 } from 'lucide-react'
import { BreadcrumbsPets } from '@/components/Breadcrumbs'
import { Price } from '@/components/Price'
import { SocialMedia } from '@/components/SocialMedia'
import { PetCarousel } from '@/components/PetCarousel'
import { CartButtons } from '@/components/cart/CartButtons'
import { ProductInformation } from '@/components/ProductInformation'

import Health100 from '@/public/health-100.svg?url'
import Satisfy100 from '@/public/satisfy-100.svg?url'

import type { GetProductResponse } from '@/types/singleProduct'
import type { IPetInfo, IPetDisplay } from '@/types/app'

type PetInfoProps = {
  id: string
}

export function PetInfo({ id }: PetInfoProps) {
  const [petInfo, setPetInfo] = useState<IPetInfo>()
  const [error, setError] = useState<string | null>(null)
  const [isPending, startTransition] = useTransition()

  const fetchPet = useCallback(() => {
    startTransition(async () => {
      try {
        const response = await fetch(`/api/products/${id}`)
        const { error, product } = (await response.json()) as GetProductResponse
        if (product) {
          setPetInfo(product)
          setError(null)
        }
        if (error) {
          setError('Something went wrong')
          setPetInfo(undefined)
        }
      } catch (e) {
        console.error(e)
      }
    })
  }, [setPetInfo, id])

  useEffect(() => {
    fetchPet()
  }, [fetchPet])

  if (isPending || error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="font-medium">{isPending ? 'LOADING...' : error}</p>
      </div>
    )
  }

  const {
    name,
    available_quantity,
    current_price,
    photos,
    unique_id,
    url_slug,
    extra_infos = [],
  } = petInfo ?? {}

  const keyInfo = extra_infos.reduce(
    (acc, { key, value }) => {
      return {
        ...acc,
        ...((key == 'gender' || key == 'age' || key == 'SKU') && { [key.toLowerCase()]: value }),
      }
    },
    {} as { age?: string; gender?: string; sku?: string }
  )

  const petCartInfo: IPetDisplay = {
    id,
    title: name ?? '',
    gene: keyInfo?.gender ?? '',
    age: keyInfo?.age ?? '',
    imgSrc: photos?.[0]?.url ?? '',
    urlSlug: `${unique_id}-${url_slug}`,
    maxQty: available_quantity,
    price: current_price ?? 0,
  }
  return (
    <div className="flex gap-8 max-lg:mx-auto max-lg:max-w-2xl max-lg:flex-col lg:rounded-[20px] lg:border-1.5 lg:p-5 lg:shadow-body">
      <div className="max-md:-px-4 flex-1 space-y-5 max-md:-mt-10 lg:w-[calc(50%-1rem)]">
        <PetCarousel photos={petInfo?.photos ?? []} />
        <div className="space-y-5 max-lg:hidden">
          <div className="flex items-center justify-between rounded-[10px] bg-secondary px-3 py-2.5 text-sm font-bold">
            <p className="flex items-center gap-x-2">
              <Image src={Health100} alt="" unoptimized />
              100% health guarantee for pets
            </p>
            <p className="flex items-center gap-x-2">
              <Image src={Satisfy100} alt="" unoptimized />
              100% guarantee of pet identification
            </p>
          </div>
          <div className="flex items-center gap-5 text-primary">
            <p className="flex items-center">
              <Share2 className="mr-2 size-5 font-semibold" />
              Share:
            </p>
            <SocialMedia className="gap-x-6 text-2xl text-foreground-light" />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-10 lg:gap-5">
        <div className="space-y-[18px] rounded-[20px] max-lg:-mx-4 max-lg:px-4 max-lg:py-5 max-lg:shadow-body">
          <BreadcrumbsPets />
          <p className="text-sm font-medium text-foreground-light/50">SKU {keyInfo?.sku || ''}</p>
          <h1 className="text-2xl font-bold text-primary">{name}</h1>
          <p className="text-xl font-bold text-foreground-light">
            {typeof current_price === 'number' ? <Price amount={current_price} /> : 'Out of Stock'}
          </p>
          {current_price && (
            <div className="flex flex-wrap gap-x-4 gap-y-2 sm:max-w-md lg:flex-row-reverse lg:justify-end">
              <CartButtons product={petCartInfo} size="md" className="flex-1" />
            </div>
          )}
        </div>
        <ProductInformation info={extra_infos} />
        <div className="lg:hidden">
          <div className="flex justify-between gap-2 rounded-[10px] bg-secondary px-3 py-2.5 text-sm font-bold max-md:flex-col">
            <p className="flex items-center gap-x-2">
              <Image src={Health100} alt="" unoptimized />
              100% health guarantee for pets
            </p>
            <p className="flex items-center gap-x-2">
              <Image src={Satisfy100} alt="" unoptimized />
              100% guarantee of pet identification
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
