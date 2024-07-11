import { formatPrice } from '@/lib/utils'

export function Price({ amount }: { amount: number }) {
  return <span>{formatPrice(amount)}</span>
}
