'use client'

import { Button } from '@/components/ui/button'
import {
  AdaptiveModal,
  AdaptiveModalTrigger,
  AdaptiveModalContent,
} from '@/components/ui/adaptive-modal'
import { Price } from '@/components/Price'
import { SuccessCard } from '@/components/SuccessCard'
import { useCart } from '@/hooks/useCart'

export function PaymentButton({ tax = 7.5 }: { tax?: number }) {
  const { cartTotal, isHydrated } = useCart()
  const total = cartTotal + (cartTotal * tax) / 100
  return (
    <AdaptiveModal>
      <AdaptiveModalTrigger asChild>
        <Button variant="inverse" size="md" className="w-full rounded-[10px] px-3">
          {isHydrated && (
            <span className="truncate">
              Pay <Price amount={total} />
            </span>
          )}
        </Button>
      </AdaptiveModalTrigger>
      <AdaptiveModalContent>
        <SuccessCard />
      </AdaptiveModalContent>
    </AdaptiveModal>
  )
}
