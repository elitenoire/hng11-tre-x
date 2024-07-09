import Youtube from '@/public/yt.svg'
import Twitter from '@/public/x.svg'
import Instagram from '@/public/in.svg'
import Facebook from '@/public/fb.svg'

import { cn } from '@/lib/utils'

export function SocialMedia({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap justify-around gap-x-10 gap-y-4', className)}>
      <a href="#" className="text-primary hover:text-primary-light">
        <Facebook className="size-[1em]" />
      </a>
      <a href="#" className="size-[1em] text-primary hover:text-primary-light">
        <Instagram className="size-[1em]" />
      </a>
      <a href="#" className="size-[1em] text-primary hover:text-primary-light">
        <Twitter className="size-[1em]" />
      </a>
      <a href="#" className="size-[1em] text-primary hover:text-primary-light">
        <Youtube className="size-[1em]" />
      </a>
    </div>
  )
}
