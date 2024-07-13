'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type PetStore, createPetStore } from '@/stores/pet-store'

export type PetStoreApi = ReturnType<typeof createPetStore>

export const PetStoreContext = createContext<PetStoreApi | undefined>(undefined)

export interface PetStoreProviderProps {
  children: ReactNode
}

export const PetStoreProvider = ({ children }: PetStoreProviderProps) => {
  const storeRef = useRef<PetStoreApi>()
  if (!storeRef.current) {
    storeRef.current = createPetStore()
  }

  return <PetStoreContext.Provider value={storeRef.current}>{children}</PetStoreContext.Provider>
}

export const usePetStore = <T,>(selector: (store: PetStore) => T): T => {
  const petStoreContext = useContext(PetStoreContext)

  if (!petStoreContext) {
    throw new Error(`usePetStore must be used within PetStoreProvider`)
  }

  return useStore(petStoreContext, selector)
}
