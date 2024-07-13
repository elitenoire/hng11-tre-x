import { type OrderCardProps, OrderCard } from '@/components/OrderCard'

import { QtyInput } from '@/components/cart/QtyInput'

type CartCardProps = { id: string } & OrderCardProps

export function CartCard({ id, title, gene, price, qty, imgSrc, maxQty }: CartCardProps) {
  return (
    <OrderCard title={title} gene={gene} price={price} qty={qty} imgSrc={imgSrc} shrink>
      <div className="flex justify-end">
        <QtyInput itemId={id} itemQty={qty} maxQty={maxQty} withDelete />
      </div>
    </OrderCard>
  )
}
