import { PetCard } from '@/components/PetCard'
import type { Pet } from '@/data/pets'

type PetGridProps = {
  pets: Pet[]
}

export function PetGrid({ pets }: PetGridProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(var(--min),1fr))] gap-2 [--min:150px] sm:gap-4 sm:[--min:185px] lg:[--min:280px]">
      {pets.map(({ title, imgSrc, age, gene, price }, idx) => (
        <li key={idx}>
          <PetCard title={title} age={age} gene={gene} price={price} imgSrc={imgSrc} />
        </li>
      ))}
    </ul>
  )
}
