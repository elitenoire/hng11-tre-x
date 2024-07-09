import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CheckboxFilter, RadioFilter } from '@/components/Filters'
import { PetCard } from '@/components/PetCard'

import Filter from '@/public/filter.svg'

import { pets } from '@/data/pets'

export function ShopPets() {
  return (
    <section id="shop-pets" className="mt-10 flex gap-6">
      <div className="sticky top-0 w-[280px] space-y-5 self-start text-primary max-lg:hidden">
        <h2 className="text-2xl font-bold text-primary">Filter</h2>
        <div>
          <CheckboxFilter title="Gender">{['Male', 'Female']}</CheckboxFilter>
          <Separator className="bg-input/50" />
          <RadioFilter title="Color">
            {[
              ['Red', 'red'],
              ['Apricot', 'sandybrown'],
              ['Black', 'black'],
              [
                'Black & White',
                'linear-gradient(90deg, black 0%, black 50%, white 50%, white 100%)',
              ],
              ['Silver', 'silver'],
              ['Tan', 'lightyellow'],
            ]}
          </RadioFilter>
          <Separator className="bg-input/50" />
          <CheckboxFilter title="Breed">{['Small', 'Medium', 'Large']}</CheckboxFilter>
        </div>
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
            <Button variant="ghost" className="rounded-full lg:hidden">
              <Filter className="mr-2 size-6 fill-none" />
              Filter
            </Button>
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
