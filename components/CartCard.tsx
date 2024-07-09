import { type OrderCardProps, OrderCard } from '@/components/OrderCard'

import { QtyInput } from '@/components/QtyInput'

type CartCardProps = {} & Partial<OrderCardProps>

export function CartCard({ title, gene, price, imgSrc }: CartCardProps) {
  return (
    <OrderCard title={title} gene={gene} price={price} qty={1} imgSrc={imgSrc} shrink>
      <div className="flex justify-end">
        <QtyInput withDelete />
      </div>
    </OrderCard>
  )
}
