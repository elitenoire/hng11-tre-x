'use client'

import { Trash2, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'

type QtyInputProps = {
  withDelete?: boolean
}

export function QtyInput({ withDelete }: QtyInputProps) {
  return (
    <div className="flex items-center gap-x-2.5">
      {withDelete && (
        <Button variant="link" size="icon" className="size-6 text-foreground-light">
          <Trash2 className="size-4" />
        </Button>
      )}
      <div className="flex items-center gap-3 rounded-[10px] border-px border-input p-[2px]">
        <Button variant="ghost" size="icon" className="size-6 rounded-lg text-foreground-light">
          <Minus className="size-3.5" />
        </Button>
        <span className="select-none">1</span>
        <Button variant="ghost" size="icon" className="size-6 rounded-lg text-foreground-light">
          <Plus className="size-3.5" />
        </Button>
      </div>
    </div>
  )
}
