import Link from 'next/link'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

import HamburgerSVG from '@/public/hamburger.svg'
import LogoSVG from '@/public/logo.svg'

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded text-primary">
          <HamburgerSVG className="size-8" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="space-y-8 bg-background">
        <div className="mx-auto w-1/3 text-primary">
          <LogoSVG />
        </div>
        <div className="flex flex-wrap gap-6">
          <Link
            href="/"
            className="flex flex-1 items-center justify-center rounded-full border-1.5 border-primary/80 bg-secondary px-3 py-8 font-semibold text-primary transition-colors hover:bg-secondary/80"
          >
            Home
          </Link>
          <Link
            href="/"
            className="flex flex-1 items-center justify-center rounded-full bg-primary px-3 py-8 font-semibold text-secondary transition-colors hover:bg-primary-light"
          >
            Shop Pets
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
