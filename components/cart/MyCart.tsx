'use client'

import Link from 'next/link'
import { useCart } from 'react-use-cart'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckoutCard } from '@/components/CheckoutCard'
import { CartCard } from '@/components/cart/CartCard'
import { CheckoutButton } from '@/components/cart/CheckoutButton'
import { IPetDisplay } from '@/types/app'

export function MyCart() {
  const { items, emptyCart, totalItems, isEmpty } = useCart()
  return (
    <>
      <CheckoutCard
        title="My Cart"
        titleBadge={<Badge variant="secondary">{totalItems}</Badge>}
        description="Review your selected items and proceed to checkout to complete your order."
      >
        <div className="min-h-[300px] space-y-5">
          {!isEmpty && (
            <div className="flex justify-end">
              <Button variant="ghost" className="text-primary" onClick={emptyCart}>
                Clear Cart
              </Button>
            </div>
          )}
          {items.map(({ id, title, gene, imgSrc, price, maxQty, quantity }) => (
            <CartCard
              key={id}
              id={id}
              title={title}
              gene={gene}
              imgSrc={imgSrc}
              qty={quantity}
              maxQty={maxQty}
              price={price}
            />
          ))}
          {isEmpty && (
            <div className="min-h-[inhert flex items-center justify-center text-center">
              <div className="space-y-2">
                <h3 className="text-foreground-light">Your cart is empty</h3>
                <Button variant="secondary" asChild>
                  <Link href="/">Shop Pets</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </CheckoutCard>
      {!isEmpty && (
        <div className="rounded-[20px] p-5 shadow-body lg:hidden">
          <CheckoutButton />
        </div>
      )}
    </>
  )
}
