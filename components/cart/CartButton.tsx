'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useCart } from '@/hooks/useCart'

import { cn } from '@/lib/utils'

import CartSVG from '@/public/cart.svg'

export function CartButton() {
  const { totalItems, isHydrated } = useCart()
  return (
    <Button
      variant="ghost"
      size="md"
      className="rounded-full p-0 max-sm:w-11 sm:mr-3 sm:p-2.5"
      asChild
    >
      <Link href="/cart">
        <span className="relative flex items-center justify-center">
          {isHydrated && (
            <Badge
              key={totalItems}
              className={cn(
                'absolute py-0.5 text-[8px] leading-none animate-in zoom-in [animation-duration:400ms] max-sm:-right-2.5 max-sm:bottom-full sm:left-[300%] sm:text-[10px]',
                totalItems == 1 ? 'px-1.5' : 'px-1'
              )}
            >
              {totalItems}
            </Badge>
          )}
          <CartSVG className="size-5" />
        </span>
        <span className="ml-1.5 max-sm:hidden">Cart</span>
      </Link>
    </Button>
  )
}
