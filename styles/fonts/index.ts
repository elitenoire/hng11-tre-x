import { Inter_Tight } from 'next/font/google'

const sans = Inter_Tight({
  variable: '--font-sans',
  subsets: ['latin'],
})

export const fonts = `${sans.variable}`
