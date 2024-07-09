import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import Play from '@/public/play.svg'

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-secondary md:rounded-[20px]">
      <div className="relative before:absolute before:-bottom-[50px] before:-left-[5%] before:size-[150%] before:-rotate-[175.16deg] before:bg-primary sm:before:-bottom-[100px] md:before:bottom-0 md:before:left-[40%] md:before:rotate-[160.22deg] md:before:rounded-[100px]">
        <div className="z-1 relative space-y-4 px-4 pt-8 text-primary-foreground sm:px-8 sm:text-center md:px-10 md:pb-14 md:pt-16 md:text-right lg:px-16">
          <h1 className="font-bold capitalize">
            <span className="block text-[42px] leading-[60px] md:text-[52px] md:leading-[68px]">
              One More Friend
            </span>
            <span className="block items-center gap-2">
              <span className="block text-[26px] leading-[38px] md:text-4xl">
                Thousands More{' '}
                <span className="inline-flex items-center gap-x-2">
                  Fun!
                  <span className="ml-1 size-[12.44px] rotate-[30.59deg] rounded bg-current md:hidden" />
                </span>
              </span>
            </span>
          </h1>
          <p className="max-w-[394px] text-xs opacity-80 sm:mx-auto md:mr-0">
            Having a pet means you have more joy, a new friend, a happy person who will always be
            with you to have fun. We have 200+ different pets that can meet your needs!
          </p>
          <div className="flex max-w-[344px] flex-wrap gap-4 pt-4 sm:mx-auto sm:max-md:text-balance md:mr-0">
            <Button variant="outline" size="lg" className="flex-1">
              View Intro <Play className="ml-2 size-6 fill-none" />
            </Button>
            <Button variant="secondary" size="lg" className="flex-1" asChild>
              <Link href="#shop-pets">Shop Pets</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center sm:w-4/5 md:absolute md:bottom-0 md:w-2/5 lg:left-[10%]">
        <div className="relative aspect-[9/4] w-[120%] flex-shrink-0 md:w-[150%]">
          <Image src="/img/pets.png" alt="pets" fill />
        </div>
      </div>
    </section>
  )
}
