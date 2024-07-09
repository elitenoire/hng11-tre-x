import { PropsWithChildren } from 'react'

type CheckoutCardProps = {
  title: string
  description: string
}

export function CheckoutCard({
  title,
  description,
  children,
}: PropsWithChildren<CheckoutCardProps>) {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold capitalize text-primary">{title}</h2>
        <p className="text-foreground-light text-sm">{description}</p>
      </div>
      <div className="rounded-[20px] p-5 shadow-body">{children}</div>
    </div>
  )
}
