'use client'

import { useCallback } from 'react'

import { Trash2, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCart } from '@/hooks/useCart'

type QtyInputProps = {
  itemId: string
  itemQty?: number
  maxQty?: number
  withDelete?: boolean
}

export function QtyInput({ itemId, itemQty = 1, maxQty = 5, withDelete }: QtyInputProps) {
  const { removeItem, updateItemQuantity } = useCart()

  const handleDelete = useCallback(() => {
    removeItem(itemId)
  }, [removeItem, itemId])

  const decreaseQty = useCallback(() => {
    if (itemQty > 1) {
      updateItemQuantity(itemId, itemQty - 1)
    }
  }, [itemId, itemQty, updateItemQuantity])

  const increaseQty = useCallback(() => {
    if (itemQty < maxQty) {
      updateItemQuantity(itemId, itemQty + 1)
    }
  }, [itemId, itemQty, maxQty, updateItemQuantity])

  return (
    <div className="flex items-center gap-x-2.5">
      {withDelete && (
        <Button
          variant="link"
          size="icon"
          onClick={handleDelete}
          className="size-6 text-foreground-light"
        >
          <Trash2 className="size-4" />
        </Button>
      )}
      <div className="flex items-center gap-3 rounded-[10px] border-px border-input p-[2px]">
        <Button
          variant="ghost"
          size="icon"
          onClick={decreaseQty}
          className="size-6 rounded-lg text-foreground-light"
          disabled={itemQty === 1}
        >
          <Minus className="size-3.5" />
        </Button>
        <span className="select-none">{itemQty}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={increaseQty}
          className="size-6 rounded-lg text-foreground-light"
          disabled={itemQty === maxQty}
        >
          <Plus className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
