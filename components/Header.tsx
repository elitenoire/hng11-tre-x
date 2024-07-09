import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { NavLinks } from '@/components/NavLinks'
import { Input } from '@/components/ui/input'
import HamburgerSVG from '@/public/hamburger.svg'
import CartSVG from '@/public/cart.svg'
import LogoSVG from '@/public/logo.svg'
import SearchSVG from '@/public/search.svg'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-inherit px-4 shadow-body md:rounded-b-[30px]">
      <div className="container flex h-[57px] items-center justify-between md:h-[100px]">
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" className="text-primary">
            <HamburgerSVG className="size-8" />
          </Button>
        </div>
        <div className="flex items-center justify-between lg:flex-1">
          <div className="w-[92px] md:w-[115px]">
            <Button variant="link" size="logo" asChild>
              <Link href="/">
                <LogoSVG />
              </Link>
            </Button>
          </div>
          {/* <NavLinks className="max-lg:hidden" /> */}
          <Button variant="link" className="max-lg:hidden">
            Shop Pets
          </Button>
        </div>
        <div className="flex md:gap-3.5">
          <Button size="md" className="rounded-full max-lg:hidden">
            Join the community
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <SearchSVG className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="md"
            className="rounded-full p-0 max-sm:w-11 sm:p-2.5"
            asChild
          >
            <Link href="#">
              <CartSVG className="size-5" />
              <span className="ml-1.5 max-sm:hidden">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
