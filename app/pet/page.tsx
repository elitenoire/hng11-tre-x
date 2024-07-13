import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { BreadcrumbsPets } from '@/components/Breadcrumbs'
import { Price } from '@/components/Price'
import { SocialMedia } from '@/components/SocialMedia'
import { PetCarousel } from '@/components/PetCarousel'
import { PetReview } from '@/components/PetReview'
import { DiscoverPets } from '@/components/DiscoverPets'
import { CartButtons } from '@/components/cart/CartButtons'

import CartSVG from '@/public/cart.svg'
import Health100 from '@/public/health-100.svg?url'
import Satisfy100 from '@/public/satisfy-100.svg?url'

import { petInfo } from '@/data/petInfo'

export const metadata: Metadata = {
  title: 'Buy Pet',
}

export default function PetPage() {
  return (
    <div className="space-y-14">
      <div className="flex gap-8 max-lg:mx-auto max-lg:max-w-2xl max-lg:flex-col lg:rounded-[20px] lg:border-1.5 lg:p-5 lg:shadow-body">
        <div className="max-md:-px-4 flex-1 space-y-5 max-md:-mt-10 lg:w-[calc(50%-1rem)]">
          <PetCarousel />
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
            <p className="text-sm font-medium text-foreground-light/50">SKU #1000078</p>
            <h1 className="text-2xl font-bold text-primary">Snowball - Max</h1>
            <p className="text-xl font-bold text-foreground-light">
              <Price amount={230432.0} />
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 sm:max-w-md lg:flex-row-reverse lg:justify-end">
              {/* <CartButtons size="md" className="flex-1" /> */}
              <Button variant="subtle" size="md" asChild className="flex-1 max-sm:px-2.5">
                <Link href="/cart">
                  <CartSVG className="size-5" />
                  <span className="ml-1.5">Add to cart</span>
                </Link>
              </Button>
              <Button variant="inverse" size="md" asChild className="flex-1">
                <Link href="/checkout">Buy now</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-[18px]">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-primary lg:sr-only">Information</h2>
              <Button variant="link" className="lg:hidden">
                <Share2 className="mr-2 size-5" />
                Share
              </Button>
            </div>
            <ul className="flex flex-col text-sm font-medium">
              {petInfo.map(({ field, value }) => (
                <li key={field} className="flex border-b-px border-border/10 py-2">
                  <span className="flex-1 capitalize text-foreground-light">{field}</span>
                  <span className="flex-1">{`: ${value}`}</span>
                </li>
              ))}
            </ul>
          </div>
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
      <PetReview />
      <DiscoverPets />
    </div>
  )
}
