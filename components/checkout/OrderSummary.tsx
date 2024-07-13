'use client'

import { useCart } from 'react-use-cart'

import { CheckoutCard } from '@/components/CheckoutCard'
import { GrandTotal } from '../cart/GrandTotal'
import { OrderCard } from '../OrderCard'

export function OrderSummary() {
  const { items } = useCart()
  return (
    <>
      <CheckoutCard
        title="Order Summary"
        description="Review your selected items and select your preferred shipping options to enhance your ordering experience"
      >
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
      </CheckoutCard>
    </>
  )
}
