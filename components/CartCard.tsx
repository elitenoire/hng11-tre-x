import { type OrderCardProps, OrderCard } from '@/components/OrderCard'

import { QtyInput } from '@/components/QtyInput'

type CartCardProps = {} & Partial<OrderCardProps>

export function CartCard({}: CartCardProps) {
  return (
    <OrderCard
      title="Pomeranian White Puppy - Max"
      gene="Female"
      price="NGN 230,432.00"
      qty={1}
      imgSrc="/img/max.png"
      shrink
    >
      <div className="flex justify-end">
        <QtyInput withDelete />
      </div>
    </OrderCard>
  )
}
