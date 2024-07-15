'use client'

import { Price } from '@/components/Price'
import { useCart } from '@/hooks/useCart'

type GrandTotalProps = {
  tax?: number
  full?: boolean
}

export function GrandTotal({ tax = 7.5, full }: GrandTotalProps) {
  const { cartTotal, isHydrated } = useCart()
  const taxAmount = (7.5 / 100) * cartTotal
  const total = cartTotal + taxAmount

  return (
    <div className="space-y-1.5">
      <p
        className={`flex flex-wrap items-baseline justify-between gap-x-1 py-2 ${!tax && !total ? 'border-b-px border-input' : ''}`}
      >
        <span className="font-semibold capitalize">Subtotal:</span>
        <span className="text-sm font-medium text-foreground-light">
          {isHydrated && <Price amount={cartTotal} />}
        </span>
      </p>
      {full && (
        <p className="flex flex-wrap items-baseline justify-between gap-x-1 border-b-px border-input py-2">
          <span className="font-medium capitalize">Tax:</span>
          <span className="text-sm font-medium text-foreground-light">
            {isHydrated && <Price amount={taxAmount} />}
          </span>
        </p>
      )}
      {full && (
        <p className="flex flex-wrap items-baseline justify-between gap-x-1 py-2">
          <span className="text-lg font-bold capitalize">Total:</span>
          <span className="text-sm font-bold">{isHydrated && <Price amount={total} />}</span>
        </p>
      )}
    </div>
  )
}
