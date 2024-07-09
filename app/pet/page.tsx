import type { Metadata } from 'next'
import { DiscoverPets } from '@/components/DiscoverPets'
import { PetReview } from '@/components/PetReview'

export const metadata: Metadata = {
  title: 'Buy Pet',
}

export default function PetPage() {
  return (
    <div className="space-y-14">
      <PetReview />
      <DiscoverPets />
    </div>
  )
}
