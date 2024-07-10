import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  AdaptiveModal,
  AdaptiveModalTrigger,
  AdaptiveModalContent,
  AdaptiveModalHeader,
  AdaptiveModalTitle,
  AdaptiveModalDescription,
} from '@/components/ui/adaptive-modal'
import { PetCard } from '@/components/PetCard'
import { FilterPanel } from '@/components/Filters'

import Filter from '@/public/filter.svg'

import { pets } from '@/data/pets'

export function ShopPets() {
  return (
    <section id="shop-pets" className="mt-10 flex gap-6">
      <div className="sticky top-[calc(100px+1rem)] w-[280px] space-y-5 self-start text-primary max-lg:hidden">
        <h2 className="text-2xl font-bold text-primary">Filter</h2>
        <FilterPanel />
      </div>
      <div className="flex-1 space-y-5">
        <div className="flex justify-between gap-y-5 max-lg:flex-col-reverse lg:items-center">
          <div className="flex items-baseline gap-4">
            <h2 className="text-2xl font-bold text-primary">Small Dog</h2>
            <p className="opacity-80">52 puppies</p>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-y-2.5">
            <Button variant="outline" className="rounded-full border-border text-foreground/50">
              Sort by: Popular <ChevronDown className="ml-2 size-6" />
            </Button>
            <AdaptiveModal>
              <AdaptiveModalTrigger asChild>
                <Button variant="ghost" className="rounded-full lg:hidden">
                  <Filter className="mr-2 size-6 fill-none" />
                  Filter
                </Button>
              </AdaptiveModalTrigger>
              <AdaptiveModalContent>
                <AdaptiveModalHeader>
                  <AdaptiveModalTitle className="text-2xl font-bold text-primary">
                    Filter
                  </AdaptiveModalTitle>
                  <AdaptiveModalDescription className="text-foreground-light">
                    Apply filters to find your perfect pet
                  </AdaptiveModalDescription>
                </AdaptiveModalHeader>
                <div className="max-sm:px-4 max-sm:pb-4">
                  <FilterPanel />
                </div>
              </AdaptiveModalContent>
            </AdaptiveModal>
          </div>
        </div>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(var(--min),1fr))] gap-2 [--min:150px] sm:gap-4 sm:[--min:185px] lg:[--min:280px]">
          {pets.map(({ title, imgSrc, age, gene, price }, idx) => (
            <li key={idx}>
              <PetCard title={title} age={age} gene={gene} price={price} imgSrc={imgSrc} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
