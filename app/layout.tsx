import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

import { sharedMetadata } from '@/config/metadata'

import { fonts } from '@/styles/fonts'
import '@/styles/globals.css'

export const metadata: Metadata = {
  ...sharedMetadata,
  title: {
    template: '%s | Monito Pet Shop',
    default: 'Monito Pet Shop ',
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
        <Header />
        <main className="flex flex-1 flex-col px-4 py-10">
          <div className="container">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
