import type { Metadata } from 'next'

import { BreadcrumbsCheckout } from '@/components/Breadcrumbs'
import { MyCheckout } from '@/components/checkout/MyCheckout'

export const metadata: Metadata = {
  title: 'Checkout',
}

export default function CheckoutPage() {
  return (
    <div className="space-y-12">
      <BreadcrumbsCheckout />
      <MyCheckout />
    </div>
  )
}
