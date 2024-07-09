import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { slides } from '@/data/slides'

export function PetCarousel() {
  return (
    <div>
      <Carousel>
        <CarouselContent>
          {slides.map(({ imgSrc }) => (
            <CarouselItem key={imgSrc}>
              <div className="relative aspect-square overflow-hidden md:rounded-[10px]">
                <Image src={imgSrc} alt="" fill className="object-cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious variant="carousel" className="left-4" />
        <CarouselNext variant="carousel" className="right-4" />
      </Carousel>
    </div>
  )
}
