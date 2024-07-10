import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'

type CheckboxFilterProps = {
  title?: string
  children: string[]
}

export function CheckboxFilter({ title, children }: CheckboxFilterProps) {
  return (
    <>
      {title && <h3 className="mb-2.5 font-bold">{title}</h3>}
      <div className="space-y-2">
        {children.map((item, idx) => (
          <div key={`${item}-${idx}`} className="flex items-center space-x-2">
            <Checkbox id={`${item}-${idx}`} className="bg-primary-foreground" />
            <Label htmlFor={`${item}-${idx}`}>{item}</Label>
          </div>
        ))}
      </div>
    </>
  )
}

type RadioFilterProps = {
  title?: string
  children: [string, string][]
}

export function RadioFilter({ title, children }: RadioFilterProps) {
  return (
    <>
      {title && <h3 className="mb-2.5 font-bold">{title}</h3>}
      <RadioGroup defaultValue={children[0][0]}>
        {children.map(([item, bg], idx) => (
          <div key={`${item}-${idx}`} className="flex items-center space-x-2">
            <RadioGroupItem value={item} id={`${item}-${idx}`} className="bg-primary-foreground" />
            <span className="size-4 rounded-full" style={{ background: bg }} />
            <Label htmlFor={`${item}-${idx}`}>{item}</Label>
          </div>
        ))}
      </RadioGroup>
    </>
  )
}
