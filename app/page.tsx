// import type { Metadata } from 'next'

import { Hero } from '@/components/Hero'
import { ShopPets } from '@/components/ShopPets'
import { PetPagination } from '@/components/Pagination'

// Bug: This overrides the title template
// export const metadata: Metadata = {
//   title: 'Home',
// }

export default function Home() {
  return (
    <>
      <Hero />
      <ShopPets />
      <div className="pb-8 pt-14">
        <PetPagination totalPage={3} />
      </div>
    </>
  )
}
