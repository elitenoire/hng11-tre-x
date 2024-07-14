import type { PropsWithChildren } from 'react'

import { Suspense } from 'react'

export function SuspenseBoundary({ children }: PropsWithChildren) {
  return <Suspense>{children}</Suspense>
}
