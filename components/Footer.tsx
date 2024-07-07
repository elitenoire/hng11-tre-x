import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { NavLinks } from '@/components/NavLinks'
import { SocialMedia } from '@/components/SocialMedia'

import LogoSVG from '@/public/logo.svg'

export function Footer() {
  return (
    <footer className="rounded-t-[40px] bg-secondary px-4 pb-5 pt-10 lg:px-8">
      <div className="container space-y-10 lg:pt-20">
        <div className="flex gap-x-5 gap-y-4 rounded-2xl bg-primary p-4 max-md:flex-col sm:p-6 md:items-center lg:p-8">
          <h3 className="max-w-[380px] text-xl font-semibold capitalize leading-8 text-primary-foreground md:max-lg:max-w-[284px] lg:text-2xl lg:leading-9">
            Register now so you don't miss our programs
          </h3>
          <div className="flex flex-1 gap-3 rounded-[14px] bg-primary-foreground p-3 max-md:flex-col md:items-center">
            <Input type="email" placeholder="Enter your Email" />
            <Button size="md">Subscribe</Button>
          </div>
        </div>
        <div className="flex items-center justify-between gap-y-2 max-md:flex-col">
          <NavLinks />
          <SocialMedia className="text-[1.5rem] md:pr-3.5" />
        </div>
        <div className="border-t-1.5 flex items-center justify-between pt-10 max-lg:flex-col">
          <div className="w-[115px] max-lg:mb-6">
            <Button variant="link" size="logo" asChild>
              <Link href="/">
                <LogoSVG />
              </Link>
            </Button>
          </div>
          <div className="align-center flex flex-wrap justify-center">
            <Button variant="link" className="text-foreground/80 max-md:text-xs" asChild>
              <Link href="#">Terms of Service</Link>
            </Button>
            <Button variant="link" className="text-foreground/80 max-md:text-xs" asChild>
              <Link href="#">Privacy Policy</Link>
            </Button>
          </div>
          <p className="text-[10px] leading-4 text-foreground/80 md:text-sm lg:-order-1 lg:text-base">
            © 2024 Monito. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
