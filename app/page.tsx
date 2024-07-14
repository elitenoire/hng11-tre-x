// import type { Metadata } from 'next'

import { Hero } from '@/components/Hero'
import { ShopPets } from '@/components/ShopPets'
import { PetPagination } from '@/components/Pagination'
import { SuspenseBoundary } from '@/components/SuspenseBoundary'

// Bug: This overrides the title template
// export const metadata: Metadata = {
//   title: 'Home',
// }

export default function Home() {
  return (
    <>
      <Hero />
      <SuspenseBoundary>
        <ShopPets />
      </SuspenseBoundary>
      <SuspenseBoundary>
        <div className="pb-8 pt-14">
          <PetPagination totalPage={3} />
        </div>
      </SuspenseBoundary>
    </>
  )
}
