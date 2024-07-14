import { PetCard } from '@/components/PetCard'

import { IPets } from '@/types/app'

type PetGridProps = {
  pets: IPets
}

export function PetGrid({ pets }: PetGridProps) {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(var(--min),1fr))] gap-2 [--min:150px] sm:gap-4 sm:[--min:185px] lg:[--min:280px]">
      {pets.map(({ id, name, photos, categories, current_price, url_slug, unique_id }) => {
        const urlSlug = `${unique_id}-${url_slug}`
        const img = photos.find(({ position }) => position === 1) ?? photos[0]
        // TODO: Maybe use filter map (reduce) to filter out cards with no price
        // or replace with Out of Stock
        const price = current_price ?? 280000.0 //
        const ageGene = categories.reduce(
          (acc, { name }) => {
            const key = name.split('_')
            return {
              ...acc,
              ...((key[0] == 'gene' || key[0] == 'age') && { [key[0]]: key[1] }),
            }
          },
          {} as { age?: string; gene?: string }
        )
        return (
          <li key={id}>
            <PetCard
              id={id}
              title={name}
              urlSlug={urlSlug}
              age={ageGene?.age || ''}
              gene={ageGene?.gene || ''}
              price={price}
              imgSrc={img?.url || ''}
            />
          </li>
        )
      })}
    </ul>
  )
}
