import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselThumb,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { slides } from '@/data/slides'

export function PetCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        {slides.map(({ imgSrc }) => (
          <CarouselItem key={imgSrc}>
            <div className="relative aspect-square overflow-hidden md:rounded-[10px]">
              <Image
                src={imgSrc}
                alt=""
                sizes="(min-width: 1320px) 553px, (min-width: 1040px) calc(33.08vw + 123px), (min-width: 760px) 672px, 91.82vw"
                fill
                quality={100}
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hide-scroll overflow-x-auto">
        <div className="mt-1 flex items-center gap-2 px-0.5 py-2">
          {slides.map(({ thumbSrc }, index) => (
            <CarouselThumb
              key={thumbSrc}
              index={index}
              className="relative aspect-square size-[67.65px] flex-shrink-0 overflow-hidden rounded sm:size-[94px] sm:rounded-lg sm:border-[3px]"
            >
              <Image
                src={thumbSrc}
                alt=""
                sizes="(min-width: 640px) 88px, 64px"
                fill
                className="object-cover"
              />
            </CarouselThumb>
          ))}
        </div>
      </div>
      <CarouselPrevious variant="carousel" className="left-4" />
      <CarouselNext variant="carousel" className="right-4" />
    </Carousel>
  )
}
