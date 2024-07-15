import { useCart as useBaseCart } from 'react-use-cart'
import { useHydrated } from '@/hooks//useHydrated'

export function useCart() {
  const cart = useBaseCart()
  const isHydrated = useHydrated()

  return {
    ...cart,
    isHydrated,
  }
}
