'use client'

import Link from 'next/link'
import { useCart } from 'react-use-cart'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { RadioGroup } from '@/components/ui/radio-group'
import { Badge } from '@/components/ui/badge'

import { GrandTotal } from '../cart/GrandTotal'
import { CheckoutCard } from '../CheckoutCard'
import { InputField } from '../InputField'
import { ShippingCard } from '../ShippingCard'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { OrderSummary } from '@/components/checkout/OrderSummary'
import { PaymentButton } from '@/components/checkout/PaymentButton'

import { formatPrice } from '@/lib/utils'
export function MyCheckout() {
  const { isEmpty, totalItems } = useCart()
  if (isEmpty)
    return (
      <div className="flex min-h-[300px] items-center justify-center text-center">
        <div className="space-y-2">
          <h3 className="text-xl font-medium text-primary">No item to checkout</h3>
          <p>Try adding some items</p>
          <Button size="md" asChild>
            <Link href="/">Shop Pets</Link>
          </Button>
        </div>
      </div>
    )

  return (
    <div className="flex flex-col gap-x-32 gap-y-12 max-lg:mx-auto max-lg:max-w-2xl lg:flex-row-reverse">
      <div className="lg:hidden">
        <h2 className="text-2xl font-bold capitalize text-primary">
          <span className="flex items-center gap-2">
            <span>Cart</span>
            <Badge variant="secondary">{totalItems}</Badge>
          </span>
        </h2>
        <div className="-mx-4 rounded-[20px] px-4 py-5 shadow-body">
          <GrandTotal />
        </div>
      </div>
      <div className="top-[calc(100px+1rem)] flex-1 lg:sticky lg:self-start">
        <OrderSummary />
      </div>
      <div className="flex-1 space-y-12">
        <CheckoutCard title="Delivery Address" description="Enter your residential address below">
          <div className="space-y-5">
            <InputField label="Home Address" placeholder="Enter your residential address" />
            <InputField
              label="Phone Number"
              placeholder="Enter your phone number i.e +2349087654321"
            />
            <div className="flex flex-wrap gap-x-2.5 gap-y-5">
              <InputField
                className="flex-[2]"
                label="State"
                placeholder="Enter your state"
                fluid={false}
              />
              <InputField
                className="flex-1"
                label="Country"
                placeholder="i.e Nigeria"
                fluid={false}
              />
              <InputField
                className="flex-1 [&_label]:whitespace-nowrap"
                label="Zip Code"
                placeholder="0000000"
                fluid={false}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="toggle-billing-address" className="bg-primary-foreground" />
              <Label htmlFor="toggle-billing-address" className="font-normal text-foreground-light">
                Set as billing address
              </Label>
            </div>
          </div>
        </CheckoutCard>
        <CheckoutCard
          title="Available Shipping Method"
          description="Choose from the shipping options available"
        >
          <RadioGroup className="gap-5">
            <ShippingCard
              title="FedEx Delivery"
              time="1-3 days"
              fee="Free"
              value={0.0}
              imgSrc="/img/fedex.png"
            />
            <ShippingCard
              title="UPS Delivery"
              time="0-2 days"
              fee={formatPrice(2000.0, 0, 0)}
              value={2000.0}
              imgSrc="/img/ups.png"
            />
          </RadioGroup>
        </CheckoutCard>
        <CheckoutCard
          title="Payment Details"
          description="Please finalize your purchase by entering your card payment information."
        >
          <div className="space-y-5">
            <InputField label="Email Address" placeholder="Enter your residential address" />
            <div className="flex flex-wrap items-end gap-x-2.5 gap-y-5">
              <InputField
                className="flex-[4] flex-shrink-0"
                label="Card Details"
                placeholder="Card number"
                fluid={false}
              />
              <Input className="flex-[1.5] flex-shrink-0" placeholder="MM/YY" />
              <Input className="flex-1 flex-shrink-0" placeholder="CVC" />
            </div>
            <InputField label="Card Holder" placeholder="Enter the name on your card" />
            <InputField label="Billing Address" placeholder="Enter your billing address" />
            <GrandTotal full />
            <PaymentButton />
          </div>
        </CheckoutCard>
      </div>
    </div>
  )
}
