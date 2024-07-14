import { GetProductsResponse, Prettify } from '@/types/products'
import { GetProductResponse } from '@/types/singleProduct'

export type IPets = NonNullable<GetProductsResponse['products']>['items']

export type IPetInfo = NonNullable<GetProductResponse['product']>

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
