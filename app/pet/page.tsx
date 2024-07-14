import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Shop Pets',
}

export default function PetPage() {
  return (
    <div className="flex min-h-[300px] items-center justify-center text-center">
      <div className="space-y-2">
        <h1 className="text-xl font-medium text-primary">Welcome to Peppa Pets!</h1>
        <p>Find your perfect pets.</p>
        <Button size="md" asChild>
          <Link href="/">Shop Pets</Link>
        </Button>
      </div>
    </div>
  )
}
