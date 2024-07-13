import { GetProductsResponse, Prettify } from '@/types/products'

export type IPets = NonNullable<GetProductsResponse['products']>['items']

export type IPetDisplay = {
  id: string
  title: string
  gene: string
  age: string
  price: number
  imgSrc: string
  urlSlug: string
  alt?: string
  qty?: number
  maxQty?: number
}
