'use client'

import Link from 'next/link'
import { useCart } from 'react-use-cart'
import { Button } from '@/components/ui/button'
import { Price } from '@/components/Price'

export function CheckoutButton() {
  const { cartTotal } = useCart()
  return (
    <Button variant="inverse" size="md" className="w-full rounded-[10px] px-3" asChild>
      <Link href="/checkout">
        <span className="truncate">
          Checkout (<Price amount={cartTotal} />)
        </span>
      </Link>
    </Button>
  )
}
