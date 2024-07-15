'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Price } from '@/components/Price'
import { useCart } from '@/hooks/useCart'

export function CheckoutButton() {
  const { cartTotal, isHydrated } = useCart()
  return (
    <Button variant="inverse" size="md" className="w-full rounded-[10px] px-3" asChild>
      <Link href="/checkout">
        {isHydrated && (
          <span className="truncate">
            Checkout (<Price amount={cartTotal} />)
          </span>
        )}
      </Link>
    </Button>
  )
}
