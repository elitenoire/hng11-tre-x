import Image from 'next/image'
import { RadioGroupItem } from '@/components/ui/radio-group'

type ShippingCardProps = {
  title: string
  time: string
  price: string
  imgSrc: string
  alt?: string
}

export function ShippingCard({
  title = 'Standard',
  time = '3 - 5 days',
  price = 'Free',
  imgSrc,
  alt = 'company logo',
}: Partial<ShippingCardProps>) {
  return (
    <label
      htmlFor={title}
      className="flex flex-wrap items-center gap-x-3.5 rounded-[10px] border-px p-4 hover:border-primary"
    >
      <span className="relative block aspect-[41/26] w-10 overflow-hidden rounded">
        {imgSrc ? (
          <Image src={imgSrc} alt={alt} fill className="object-cover" />
        ) : (
          <span className="block h-full bg-foreground-light/15" />
        )}
      </span>
      <span className="flex flex-1 flex-wrap justify-between gap-x-1 gap-y-2.5">
        <span className="space-y-1">
          <span className="block font-semibold text-primary">{title}</span>
          <span className="block text-sm leading-3 text-foreground-light">Delivery: {time}</span>
        </span>
        <span className="flex items-center gap-x-3">
          <RadioGroupItem id={title} value={price} className="size-5" />
          <span className="truncate text-foreground-light">{price}</span>
        </span>
      </span>
    </label>
  )
}
