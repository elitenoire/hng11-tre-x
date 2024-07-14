import { PetReview } from '@/components/PetReview'
import { DiscoverPets } from '@/components/DiscoverPets'
import { PetInfo } from '@/components/PetInfo'

export default function PetPage({ params: { id } }: { params: { id: string } }) {
  return (
    <div className="space-y-14">
      <PetInfo id={id} />
      <PetReview />
      <DiscoverPets />
    </div>
  )
}
