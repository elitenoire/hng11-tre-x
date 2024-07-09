import { RadioGroup } from '@/components/ui/radio-group'
import { CheckoutCard } from '@/components/CheckoutCard'
import { OrderCard } from '@/components/OrderCard'
import { GrandTotal } from '@/components/GrandTotal'
import { ShippingCard } from '@/components/ShippingCard'
import { InputField } from '@/components/InputField'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export default function CheckoutPage() {
  return (
    <div className="space-y-12">
      <div>Breadcrumbs</div>
      <div className="flex flex-col gap-x-32 gap-y-12 lg:flex-row-reverse">
        <div className="md:hidden">
          <h2 className="text-2xl font-bold capitalize text-primary">Cart</h2>
          <div className="-mx-4 rounded-[20px] px-4 py-5 shadow-body">
            <GrandTotal subtotal="NGN 644,875.00" />
          </div>
        </div>
        <div className="top-0 flex-1 lg:sticky">
          <CheckoutCard
            title="Order Summary"
            description="Review your selected items and select your preferred shipping options to enhance your ordering experience"
          >
            <div className="space-y-5">
              <OrderCard />
              <OrderCard />
              <OrderCard />
              <div className="max-sm:hidden">
                <GrandTotal subtotal="NGN 644,875.00" />
              </div>
            </div>
          </CheckoutCard>
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
                <Label
                  htmlFor="toggle-billing-address"
                  className="font-normal text-foreground-light"
                >
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
                price="Free"
                imgSrc="/img/fedex.png"
              />
              <ShippingCard
                title="UPS Delivery"
                time="0-2 days"
                price="NGN 2,000"
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
              <GrandTotal subtotal="NGN 644,875.00" tax="NGN 15,234.50" total="NGN 660,109.50" />
              <div>
                <Button variant="inverse" size="md" className="w-full rounded-[10px] px-3">
                  <span className="truncate">Pay NGN 660,109.50</span>
                </Button>
              </div>
            </div>
          </CheckoutCard>
        </div>
      </div>
    </div>
  )
}