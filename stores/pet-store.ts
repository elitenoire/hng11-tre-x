import { createStore } from 'zustand/vanilla'
import { IPets } from '@/types/app'

export type PetState = {
  pets: IPets
  //   petsPerPage: {
  //     page: number
  //     pets: IPets
  //   }[]
  petsPerPage: Record<string, IPets>
}

export type PetActions = {
  //   getPets: () => void
  setPets: (pets: IPets) => void
  setPetsPerPage: (pets: IPets, page: number) => void
}

export type PetStore = PetState & PetActions

export const defaultInitState: PetState = {
  pets: [],
  petsPerPage: {},
}

export const createPetStore = (initState: PetState = defaultInitState) => {
  return createStore<PetStore>()((set) => ({
    ...initState,
    setPets: (pets: IPets) => set((state) => ({ ...state.pets, pets })),
    setPetsPerPage: (pets: IPets, page: number) =>
      set((state) => ({
        ...state,
        petsPerPage: { ...state.petsPerPage, [page.toString()]: pets },
      })),
  }))
}
