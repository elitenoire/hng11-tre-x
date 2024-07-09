import type { HTMLInputTypeAttribute } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { cn } from '@/lib/utils'

type InputFieldProps = {
  label: string
  placeholder: string
  type?: HTMLInputTypeAttribute
  className?: string
  fluid?: boolean
}

export function InputField({
  label,
  placeholder,
  fluid = true,
  className,
  type = 'text',
}: InputFieldProps) {
  return (
    <div className={cn('grid items-center gap-2', fluid && 'w-full', className)}>
      <Label className="capitalize" htmlFor={label}>
        {label}
      </Label>
      <Input
        type={type}
        id={label}
        placeholder={placeholder}
        className="border-1.5 shadow-body placeholder:text-foreground/70"
      />
    </div>
  )
}
