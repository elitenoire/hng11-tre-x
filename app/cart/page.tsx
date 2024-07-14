import type { Metadata } from 'next'
import { BreadcrumbsCart } from '@/components/Breadcrumbs'
import { CheckoutButton } from '@/components/cart/CheckoutButton'
import { GrandTotal } from '@/components/cart/GrandTotal'
import { MyCart } from '@/components/cart/MyCart'
import { DiscoverPets } from '@/components/DiscoverPets'

export const metadata: Metadata = {
  title: 'My Cart',
}

export default function CartPage() {
  return (
    <div className="space-y-14">
      <BreadcrumbsCart />
      <div className="flex flex-col gap-x-32 gap-y-12 max-lg:mx-auto max-lg:max-w-2xl lg:flex-row-reverse">
        <div className="top-[calc(100px+1rem)] flex-1 lg:sticky lg:self-start">
          <div>
            <h2 className="text-2xl font-bold capitalize text-primary">Cart Summary</h2>
            <div className="rounded-[20px] px-4 py-5 shadow-body max-lg:-mx-4">
              <GrandTotal />
              <p className="border-b-px border-input py-2 text-foreground-light max-lg:hidden">
                Delivery fees and tax not included yet.
              </p>
              <div className="mt-5 max-lg:hidden">
                <CheckoutButton />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[2] space-y-10">
          <MyCart />
        </div>
      </div>
      <DiscoverPets page={2} />
    </div>
  )
}
