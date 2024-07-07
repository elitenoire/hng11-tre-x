import Youtube from '@/public/yt.svg'
import Twitter from '@/public/x.svg'
import Instagram from '@/public/in.svg'
import Facebook from '@/public/fb.svg'

import { cn } from '@/lib/utils'

export function SocialMedia({ className }: { className?: string }) {
  return (
    <div className={cn('flex gap-10', className)}>
      <a href="#" className="hover:text-primary-light text-primary">
        <Facebook className="size-[1em]" />
      </a>
      <a href="#" className="hover:text-primary-light size-[1em] text-primary">
        <Instagram className="size-[1em]" />
      </a>
      <a href="#" className="hover:text-primary-light size-[1em] text-primary">
        <Twitter className="size-[1em]" />
      </a>
      <a href="#" className="hover:text-primary-light size-[1em] text-primary">
        <Youtube className="size-[1em]" />
      </a>
    </div>
  )
}
