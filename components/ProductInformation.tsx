import { Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { IPetInfo } from '@/types/app'

function ExtraInfoItem({ field, value }: { field: string; value: string }) {
  return (
    <li className="flex border-b-px border-border/10 py-2">
      <span className="flex-1 capitalize text-foreground-light">{field}</span>
      <span className="flex-1">{`: ${value}`}</span>
    </li>
  )
}

type ProductInformationProps = {
  info: IPetInfo['extra_infos']
}

export function ProductInformation({ info }: ProductInformationProps) {
  return (
    <div className="space-y-[18px]">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-primary lg:sr-only">Information</h2>
        <Button variant="link" className="lg:hidden">
          <Share2 className="mr-2 size-5" />
          Share
        </Button>
      </div>
      <ul className="flex flex-col text-sm font-medium">
        {info.map(({ key, value }) => (
          <ExtraInfoItem key={key} field={key} value={value} />
        ))}
      </ul>
    </div>
  )
}
