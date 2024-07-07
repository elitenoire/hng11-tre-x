import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-light',
        secondary: 'bg-primary-foreground text-primary hover:bg-secondary',
        outline:
          'border-1.5 border-current bg-transparent text-primary-foreground hover:text-primary-xlight',
        muted: 'text-primary hover:text-primary-foreground',
        link: 'font-semibold text-primary hover:text-primary-light',

        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:text-primary-light',
      },
      size: {
        sm: 'h-9 rounded-[10px] py-1.5 px-3.5',
        md: 'h-11 rounded-[8px] py-3.5 px-7',
        lg: 'h-[52px] rounded-full py-3.5 px-7',
        icon: 'h-11 w-11',
        logo: 'h-auto w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
