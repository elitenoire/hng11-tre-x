'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckoutCard } from '@/components/CheckoutCard'
import { GrandTotal } from '@/components/cart/GrandTotal'
import { OrderCard } from '@/components/OrderCard'
import { useCart } from '@/hooks/useCart'

export function OrderSummary() {
  const { items, isEmpty, isHydrated } = useCart()
  return (
    <>
      <CheckoutCard
        title="Order Summary"
        description="Review your selected items and select your preferred shipping options to enhance your ordering experience"
      >
        {isHydrated && isEmpty && (
          <div className="flex min-h-[300px] items-center justify-center text-center">
            <div className="space-y-2">
              <h3 className="text-xl font-medium text-primary">No item to checkout</h3>
              <p>Try adding some items</p>
              <Button size="md" asChild>
                <Link href="/">Shop Pets</Link>
              </Button>
            </div>
          </div>
        )}
        {isHydrated && !isEmpty && (
          <div className="space-y-5">
            {items.map(({ id, title, gene, price, imgSrc, quantity }) => (
              <OrderCard
                key={id}
                title={title}
                gene={gene}
                price={price}
                imgSrc={imgSrc}
                qty={quantity}
              />
            ))}
            <div className="max-lg:hidden">
              <GrandTotal />
            </div>
          </div>
        )}
        {!isHydrated && (
          <div className="space-y-5">
            <div className="min-h-[125px] animate-pulse rounded-lg bg-subtle/50" />
            <div className="min-h-[125px] animate-pulse rounded-lg bg-subtle/40" />
          </div>
        )}
      </CheckoutCard>
    </>
  )
}
