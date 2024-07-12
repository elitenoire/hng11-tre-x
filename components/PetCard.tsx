import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Price } from '@/components/Price'

import type { Pet } from '@/data/pets'

import CartSVG from '@/public/cart.svg'

type PetCardProps = {
  alt?: string
} & Pet

export function PetCard({ title, gene, age, price, imgSrc, alt = 'pet for sale' }: PetCardProps) {
  return (
    <article className="group flex flex-col gap-2 rounded-xl bg-background p-2 shadow-soft">
      <Link href="/pet">
        <span className="relative block aspect-square overflow-hidden rounded-lg">
          <Image
            src={imgSrc}
            alt={alt}
            sizes="(min-width: 1200px) 262px, (min-width: 1040px) calc(33.57vw - 40px), (min-width: 820px) calc(25vw - 36px), (min-width: 500px) calc(31.33vw - 22px), (min-width: 340px) calc(50vw - 36px), calc(100vw - 48px)"
            fill
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </span>
      </Link>
      <div className="space-y-2 pt-2 sm:px-2 sm:pb-2">
        <h3 className="font-bold text-primary max-lg:text-sm">
          <Link href="/pet" className="transition-colors hover:text-primary-light">
            {title}
          </Link>
        </h3>
        <div className="flex gap-x-2 gap-y-1 text-xs opacity-70 max-lg:flex-col">
          <p>
            Gene: <span className="font-bold">{gene}</span>
          </p>
          <p>
            Age: <span className="font-bold">{age}</span>
          </p>
        </div>
        <p className="font-extrabold max-lg:text-sm">
          <Price amount={price} />
        </p>
        <div className="flex gap-1.5 sm:gap-2.5">
          <Button variant="subtle" asChild className="max-sm:px-2.5">
            <Link href="/cart">
              <CartSVG className="size-5" />
              <span className="ml-1.5 max-lg:hidden">Add to cart</span>
            </Link>
          </Button>
          <Button variant="inverse" asChild className="flex-1">
            <Link href="/checkout">Buy now</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
