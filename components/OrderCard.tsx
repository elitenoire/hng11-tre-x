import type { PropsWithChildren } from 'react'
import Image from 'next/image'

type OrderCardProps = {
  title: string
  price: string
  gene: string
  qty: number
  imgSrc: string
  alt?: string
}

export function OrderCard({
  title = 'Golden Retriever Puppy - Bella',
  price = 'NGN 215,678.00',
  gene = 'Female',
  qty = 1,
  imgSrc = '/img/bella.png',
  alt = 'pet for sale',
  children,
}: PropsWithChildren<Partial<OrderCardProps>>) {
  return (
    <div className="flex flex-wrap items-center gap-x-3.5 rounded-[10px] border-px p-4">
      <div className="rounded-[10px] bg-border/10 p-1.5">
        <span className="relative block aspect-square w-20 overflow-hidden rounded-[7px]">
          <Image src={imgSrc} alt={alt} fill className="object-cover" />
        </span>
      </div>
      <div className="flex-1 space-y-2.5">
        <div className="flex justify-between gap-2.5 max-sm:flex-col">
          <div className="space-y-2.5 text-lg">
            <h3 className="font-bold text-primary">{title}</h3>
            <p className="font-extrabold">{price}</p>
          </div>
          <div className="flex justify-between gap-y-2.5 text-right text-foreground-light max-sm:flex-wrap sm:flex-col">
            <p className="capitalize">{gene}</p>
            <p>
              Qty <span className="bold text-foreground">{qty}</span>
            </p>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
