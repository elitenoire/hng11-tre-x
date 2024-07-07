import type { Metadata } from 'next'
import { getMetadataRootURL } from '@/lib/utils'

export const sharedMetadata: Metadata = {
  // FIX ISSUE: Automatic generation overrides the icons here
  // See Github issue: https://github.com/vercel/next.js/issues/55767
  icons: {
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#0C7050',
    },
  },
  other: {
    'msapplication-TileColor': '#0C7050',
  },
  metadataBase: getMetadataRootURL(),
}
