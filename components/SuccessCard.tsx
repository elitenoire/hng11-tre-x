import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

import SuccessUrl from '@/public/success.png'

export function SuccessCard() {
  return (
    <div>
      <div className="relative mx-auto flex aspect-square w-2/5 items-center justify-center">
        <Image src={SuccessUrl} alt="" unoptimized className="object-cover" />
      </div>
      <div className="space-y-4 px-2 pb-4 text-center">
        <h3 className="text-2xl font-bold text-primary-light">Success</h3>
        <p className="text-balance">
          Thank you for your order on Peppa! Your furry friend is eagerly waiting for you at home.
          🐾
        </p>
        <p className="text-lg text-foreground-light">
          Order N0: <span className="font-bold">2347654BD</span>
        </p>
        <Button variant="link" asChild className="uppercase">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </div>
  )
}
