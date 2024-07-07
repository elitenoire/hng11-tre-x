import Link from 'next/link'
import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

export function NavLinks({ className }: { className?: string }) {
  return (
    <nav className={cn('flex items-center justify-between', className)}>
      <Button variant="link" asChild>
        <Link href="/">Home</Link>
      </Button>
      <Button variant="link" asChild>
        <Link href="/">Category</Link>
      </Button>
      <Button variant="link" asChild>
        <Link href="/">About</Link>
      </Button>
      <Button variant="link" asChild>
        <Link href="/">Contact</Link>
      </Button>
    </nav>
  )
}
