import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-background transition-colors focus-visible:outline-none active:scale-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-primary-light',
        inverse: 'bg-primary-light text-primary-foreground hover:bg-primary',
        secondary: 'bg-primary-foreground text-primary hover:bg-secondary',
        outline:
          'border-1.5 border-current bg-transparent text-primary-foreground hover:text-primary-xlight',
        subtle: 'bg-subtle text-subtle-foreground hover:bg-subtle-dark',
        link: 'font-semibold text-primary hover:text-primary-light',
        carousel: 'bg-white/60 text-foreground hover:bg-white/70',

        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        ghost: 'hover:text-primary-light hover:bg-primary-foreground',
      },
      size: {
        sm: 'h-9 rounded-[10px] py-1.5 px-3.5 font-semibold',
        md: 'h-11 rounded-lg py-3.5 px-7',
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
