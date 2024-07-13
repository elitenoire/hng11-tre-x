'use client'

import type { PropsWithChildren } from 'react'
import { CartProvider } from 'react-use-cart'
import { PetStoreProvider } from '@/stores/pet-store-provider'

export function Providers({ children }: PropsWithChildren) {
  return (
    <PetStoreProvider>
      <CartProvider>{children}</CartProvider>
    </PetStoreProvider>
  )
}
