import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { BreadcrumbsCart } from '@/components/Breadcrumbs'
import { Price } from '@/components/Price'
import { GrandTotal } from '@/components/GrandTotal'
import { CheckoutCard } from '@/components/CheckoutCard'
import { CartCard } from '@/components/CartCard'
import { DiscoverPets } from '@/components/DiscoverPets'

import { pets } from '@/data/pets'

const orderedPets = pets.slice(3, 6)

export const metadata: Metadata = {
  title: 'My Cart',
}

function CheckoutButton({ subtotal }: { subtotal: number }) {
  return (
    <Button variant="inverse" size="md" className="w-full rounded-[10px] px-3" asChild>
      <Link href="/checkout">
        <span className="truncate">
          Checkout (<Price amount={subtotal} />)
        </span>
      </Link>
    </Button>
  )
}

export default function CartPage() {
  const subtotal = 644875.0
  return (
    <div className="space-y-14">
      <BreadcrumbsCart />
      <div className="flex flex-col gap-x-32 gap-y-12 max-lg:mx-auto max-lg:max-w-2xl lg:flex-row-reverse">
        <div className="top-[calc(100px+1rem)] flex-1 lg:sticky lg:self-start">
          <div>
            <h2 className="text-2xl font-bold capitalize text-primary">Cart Summary</h2>
            <div className="rounded-[20px] px-4 py-5 shadow-body max-lg:-mx-4">
              <GrandTotal subtotal={subtotal} />
              <p className="border-b-px border-input py-2 text-foreground-light max-lg:hidden">
                Delivery fees and tax not included yet.
              </p>
              <div className="mt-5 max-lg:hidden">
                <CheckoutButton subtotal={subtotal} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2] space-y-10">
          <CheckoutCard
            title="My Cart"
            description="Review your selected items and proceed to checkout to complete your order."
          >
            <div className="space-y-5">
              <div className="flex justify-end">
                <Button variant="ghost" className="text-primary">
                  Clear Cart
                </Button>
              </div>
              {orderedPets.map(({ title, gene, imgSrc, price }) => (
                <CartCard key={title} title={title} gene={gene} imgSrc={imgSrc} price={price} />
              ))}
            </div>
          </CheckoutCard>
          <div className="rounded-[20px] p-5 shadow-body lg:hidden">
            <CheckoutButton subtotal={subtotal} />
          </div>
        </div>
      </div>
      <DiscoverPets />
    </div>
  )
}
