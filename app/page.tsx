// import type { Metadata } from 'next'

import { Hero } from '@/components/Hero'
import { ShopPets } from '@/components/ShopPets'

// Bug: This overrides the title template
// export const metadata: Metadata = {
//   title: 'Home',
// }

export default function Home() {
  return (
    <>
      <Hero />
      <ShopPets />
    </>
  )
}
