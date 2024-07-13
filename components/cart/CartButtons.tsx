'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from 'react-use-cart'
import { type ButtonProps, Button } from '@/components/ui/button'

import CartSVG from '@/public/cart.svg'

import { cn } from '@/lib/utils'
import type { IPetDisplay } from '@/types/app'

type CartButtonsProps = {
  product: IPetDisplay
  shrink?: boolean
} & Pick<ButtonProps, 'size' | 'className'>

export function CartButtons({ shrink, size, product, className }: CartButtonsProps) {
  const { addItem, emptyCart, totalItems } = useCart()
  const { push } = useRouter()

  const addtoCart = useCallback(() => {
    addItem(product, 1)
  }, [addItem, product])

  const buyNow = useCallback(() => {
    addItem(product, 1)
    push('/checkout')
  }, [addItem, product, push])

  return (
    <>
      <Button
        variant="subtle"
        size={size}
        onClick={addtoCart}
        className={cn('max-sm:px-2.5', className)}
      >
        <CartSVG className="size-5" />
        <span className={cn('ml-1.5', shrink ? 'max-lg:hidden' : '')}>Add to cart</span>
      </Button>
      <Button variant="inverse" size={size} onClick={buyNow} className={cn('flex-1', className)}>
        Buy now
      </Button>
    </>
  )
}
