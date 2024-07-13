import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Providers } from '@/app/providers'

import { sharedMetadata } from '@/config/metadata'

import { fonts } from '@/styles/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    template: '%s | Peppa Pets',
    default: 'Peppa Pets',
  },
  description: 'HNG11 Timbu Cloud Shop - Product Design and Frontend Website',
  keywords: ['timbu', 'shop', 'ecommerce', 'marketplace'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${fonts} flex flex-col font-sans`}>
        <Providers>
          <Header />
          <main className="mt-[57px] flex flex-1 flex-col px-4 py-10 md:mt-[100px]">
            <div className="container">{children}</div>
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
