import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import CartSVG from '@/public/cart.svg'

type PetCardProps = {
  title: string
  gene: string
  age: string
  price: string
  imgSrc: string
  alt?: string
}

export function PetCard({
  title = 'Pomeranian White - Bella',
  gene = 'Female',
  age = '3 months old',
  price = 'NGN 320,300.00',
  imgSrc = '/img/bella.png',
  alt = 'pet for sale',
}: Partial<PetCardProps>) {
  return (
    <article className="group flex flex-col gap-2 rounded-xl bg-background p-2 shadow-soft">
      <Link href="#">
        <span className="relative block aspect-square overflow-hidden rounded-lg">
          <Image
            src={imgSrc}
            alt={alt}
            fill
            className="transition-transform duration-700 group-hover:scale-105"
          />
        </span>
      </Link>
      <div className="space-y-2 pt-2 sm:px-2 sm:pb-2">
        <h3 className="font-bold text-primary max-lg:text-sm">
          <Link href="#" className="transition-colors hover:text-primary-light">
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
        <p className="font-extrabold max-lg:text-sm">{price}</p>
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
