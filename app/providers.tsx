'use client'

import type { PropsWithChildren } from 'react'
import { CartProvider } from 'react-use-cart'

export function Providers({ children }: PropsWithChildren) {
  return <CartProvider>{children}</CartProvider>
}
