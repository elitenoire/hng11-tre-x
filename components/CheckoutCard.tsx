import type { PropsWithChildren, ReactNode } from 'react'

type CheckoutCardProps = {
  title: string
  titleBadge?: ReactNode
  description: string
}

export function CheckoutCard({
  title,
  titleBadge,
  description,
  children,
}: PropsWithChildren<CheckoutCardProps>) {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold capitalize text-primary">
          {titleBadge ? (
            <span className="flex items-center gap-2">
              <span>{title}</span>
              {titleBadge}
            </span>
          ) : (
            title
          )}
        </h2>
        <p className="text-sm text-foreground-light">{description}</p>
      </div>
      <div className="rounded-[20px] p-5 shadow-body">{children}</div>
    </div>
  )
}
