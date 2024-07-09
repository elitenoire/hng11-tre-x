import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export function NavLinks({ className }: { className?: string }) {
  return (
    <nav className={cn('flex flex-wrap items-center justify-around', className)}>
      <Button variant="link" asChild>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="link" asChild>
        <Link href="/">Shop Pets</Link>
      </Button>
    </nav>
  )
}
