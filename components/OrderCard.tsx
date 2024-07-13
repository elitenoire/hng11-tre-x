import type { PropsWithChildren } from 'react'
import Image from 'next/image'
import { Price } from '@/components/Price'

import type { IPetDisplay } from '@/types/app'
export type OrderCardProps = {
  shrink?: boolean
} & Omit<IPetDisplay, 'id' | 'age' | 'urlSlug'>

export function OrderCard({
  title,
  price,
  gene,
  imgSrc,
  qty = 1,
  alt = 'pet for sale',
  shrink,
  children,
}: PropsWithChildren<OrderCardProps>) {
  return (
    <div className="flex flex-wrap items-center gap-x-3.5 rounded-[10px] border-px p-4">
      <div className="rounded-[10px] bg-border/10 p-1.5">
        <span className="relative block aspect-square w-20 overflow-hidden rounded-[7px]">
          <Image src={imgSrc} alt={alt} fill className="object-cover" />
        </span>
      </div>
      <div className="flex-1 space-y-2.5">
        <div className="flex justify-between gap-2.5 max-sm:flex-col">
          <div className="space-y-2.5">
            <h3 className={`font-bold text-primary ${shrink ? '' : 'text-lg'}`}>{title}</h3>
            <p className="text-lg font-extrabold">
              <Price amount={price} />
            </p>
          </div>
          <div className="flex justify-between gap-y-2.5 text-right text-foreground-light max-sm:flex-wrap sm:flex-col">
            <p className="capitalize">{gene}</p>
            <p>
              Qty: <span className="bold text-foreground">{qty}</span>
            </p>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
