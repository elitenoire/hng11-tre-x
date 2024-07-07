import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavLinks } from '@/components/NavLinks'

import HamburgerSVG from '@/public/hamburger.svg'
import CartSVG from '@/public/cart.svg'
import LogoSVG from '@/public/logo.svg'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-inherit px-4 shadow-body md:rounded-b-[30px]">
      <div className="container flex h-[57px] items-center justify-between md:h-[100px]">
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" className="text-primary">
            <HamburgerSVG className="size-8" />
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-[92px] md:w-[115px]">
            <Button variant="link" size="logo" asChild>
              <Link href="/">
                <LogoSVG />
              </Link>
            </Button>
          </div>
          <NavLinks className="max-lg:hidden" />
        </div>
        <div className="flex gap-3.5">
          <Button size="md" className="rounded-full max-lg:hidden">
            Join the community
          </Button>
          <Button variant="ghost" size="md" className="p-2" asChild>
            <Link href="#">
              <CartSVG className="mr-1.5 size-5" />
              Cart
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
