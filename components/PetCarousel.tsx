import Image from 'next/image'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselThumb,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import { cn } from '@/lib/utils'

import type { IPetInfo } from '@/types/app'

type PetCarouselProps = {} & Pick<IPetInfo, 'photos'>

export function PetCarousel({ photos }: PetCarouselProps) {
  const slides = photos.sort((a, b) => a.position - b.position)
  const isEmpty = slides.length < 1
  return (
    <Carousel>
      <CarouselContent
        className={cn(isEmpty && 'aspect-square min-h-[300px] bg-subtle md:rounded-[10px]')}
      >
        {slides.map(({ url }) => (
          <CarouselItem key={url}>
            <div className="relative aspect-square overflow-hidden md:rounded-[10px]">
              <Image
                src={url}
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
        <div
          className={cn(
            'mt-1 flex items-center gap-2 px-0.5 py-2',
            isEmpty && 'min-h-[calc(67.65px+1rem)] rounded bg-subtle sm:rounded-lg'
          )}
        >
          {slides.map(({ url }, index) => (
            <CarouselThumb
              key={url}
              index={index}
              className="relative aspect-square size-[67.65px] flex-shrink-0 overflow-hidden rounded sm:size-[94px] sm:rounded-lg sm:border-[3px]"
            >
              <Image
                src={url}
                alt=""
                sizes="(min-width: 640px) 88px, 64px"
                fill
                className="object-cover"
              />
            </CarouselThumb>
          ))}
        </div>
      </div>
      <CarouselPrevious variant="carousel" className="left-4" disabled={isEmpty} />
      <CarouselNext variant="carousel" className="right-4" disabled={isEmpty} />
    </Carousel>
  )
}
