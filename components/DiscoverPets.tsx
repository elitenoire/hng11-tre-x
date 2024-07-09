import { PetGrid } from '@/components/PetGrid'

import { pets } from '@/data/pets'

const popularPets = pets.filter((_, i) => i % 2 === 1)

export function DiscoverPets() {
  return (
    <div className="space-y-5">
      <h3 className="flex flex-col">
        <span>Discover what other customers enjoy, which </span>
        <span className="text-2xl font-bold capitalize text-primary">You may also like</span>
      </h3>
      <PetGrid pets={popularPets} />
    </div>
  )
}
