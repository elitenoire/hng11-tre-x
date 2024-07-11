import { Price } from '@/components/Price'

type GrandTotalProps = {
  subtotal: number
  tax?: number
  total?: number
}

export function GrandTotal({ subtotal, tax, total }: GrandTotalProps) {
  return (
    <div className="space-y-1.5">
      <p
        className={`flex flex-wrap items-baseline justify-between gap-x-1 py-2 ${!tax && !total ? 'border-b-px border-input' : ''}`}
      >
        <span className="font-semibold capitalize">Subtotal:</span>
        <span className="text-sm font-medium text-foreground-light">
          <Price amount={subtotal} />
        </span>
      </p>
      {tax && (
        <p className="flex flex-wrap items-baseline justify-between gap-x-1 border-b-px border-input py-2">
          <span className="font-medium capitalize">Tax:</span>
          <span className="text-sm font-medium text-foreground-light">
            <Price amount={tax} />
          </span>
        </p>
      )}
      {total && (
        <p className="flex flex-wrap items-baseline justify-between gap-x-1 py-2">
          <span className="text-lg font-bold capitalize">Total:</span>
          <span className="text-sm font-bold">
            <Price amount={total} />
          </span>
        </p>
      )}
    </div>
  )
}
