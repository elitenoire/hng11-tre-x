import { Separator } from '@/components/ui/separator'
import { CheckboxFilter, RadioFilter } from '@/components/ui/filters'

export function FilterPanel() {
  return (
    <div>
      <CheckboxFilter title="Gender">{['Male', 'Female']}</CheckboxFilter>
      <Separator className="bg-input/50" />
      <RadioFilter title="Color">
        {[
          ['Red', 'red'],
          ['Apricot', 'sandybrown'],
          ['Black', 'black'],
          ['Black & White', 'linear-gradient(90deg, black 0%, black 50%, white 50%, white 100%)'],
          ['Silver', 'silver'],
          ['Tan', 'lightyellow'],
        ]}
      </RadioFilter>
      <Separator className="bg-input/50" />
      <CheckboxFilter title="Breed">{['Small', 'Medium', 'Large']}</CheckboxFilter>
    </div>
  )
}
