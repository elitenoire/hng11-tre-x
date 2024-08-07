import Link from 'next/link'
import { SearchIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { MobileNav } from '@/components/MobileNav'
import { CartButton } from '@/components/cart/CartButton'

import CartSVG from '@/public/cart.svg'
import LogoSVG from '@/public/logo.svg'
import SearchSVG from '@/public/search.svg'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-inherit px-4 shadow-body md:rounded-b-[30px]">
      <div className="container flex h-[57px] items-center justify-between md:h-[100px]">
        <div className="lg:hidden">
          <MobileNav />
        </div>
        <div className="flex items-center justify-between lg:flex-1">
          <div className="w-[92px] md:w-[115px]">
            <Button variant="link" size="logo" asChild>
              <Link href="/">
                <LogoSVG />
              </Link>
            </Button>
          </div>
          <Button variant="link" className="mr-8 max-lg:hidden" asChild>
            <Link href="/">Shop Pets</Link>
          </Button>
        </div>
        <div className="flex md:gap-3.5">
          <div className="max-md:hidden">
            <Input
              startIcon={SearchIcon}
              placeholder="Search for pets!"
              className="rounded-full border-transparent bg-primary-foreground"
            />
          </div>
          <Button variant="ghost" size="icon" className="rounded-full md:hidden">
            <SearchSVG className="size-5" />
          </Button>
          <CartButton />
        </div>
      </div>
    </header>
  )
}
