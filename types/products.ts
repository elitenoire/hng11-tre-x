export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type GetProductsResponse =
  | {
      error: null
      products: NormalizedProducts
    }
  | {
      error: TimbuError
      products: null
    }
  | {
      error: string
      products: null
    }

export type TimbuError = {
  detail: DetailElement[] | string
}

export type DetailElement = {
  loc: string[]
  msg: string
  type: string
}

type Meta = {
  page: number
  size: number
  total: number
  debug: null
  previous_page: null | string
  next_page: null | string
}

export type Products = {
  items: Item[]
} & Meta

export type NormalizedProducts = {
  items: Prettify<NormalizedItem>[]
} & Meta

type NormalizedItem = {
  id: string
  name: string
  description: null | string
  unique_id: string
  url_slug: string
  available_quantity: number
  current_price: number | null | undefined
  photos: { url: string; position: number }[]
  categories: { name: string; description: string | null }[]
  last_updated: Date
}

export type Item = {
  name: string
  description: null | string
  unique_id: string
  url_slug: string
  is_available: boolean
  is_service: boolean
  previous_url_slugs: null
  unavailable: boolean
  unavailable_start: null
  unavailable_end: null
  id: string
  parent_product_id: null
  parent: null
  organization_id: string
  product_image: any[]
  categories: Category[]
  date_created: Date
  last_updated: Date
  user_id: string
  photos: Photo[]
  current_price: CurrentPrice[] | null
  is_deleted: boolean
  available_quantity: number
  selling_price: null
  discounted_price: null
  buying_price: null
  extra_infos: null
}

export type Category = {
  organization_id: string
  name: string
  position: null
  category_type: 'standard'
  description: null | string
  last_updated: Date
  id: string
  parent_id: null | string
  url_slug: null
  is_deleted: boolean
  date_created: Date
  subcategories: Parent[]
  parents: Parent[]
}

export type Parent = {
  category_id: string
  parent_id: string
  date_created: Date
  is_deleted: boolean
  id: string
  last_updated: Date
}

export type CurrentPrice = {
  NGN?: Array<any[] | number | null>
}

export type Photo = {
  model_name: 'products'
  model_id: string
  organization_id: string
  filename: string
  url: string
  is_featured: boolean
  save_as_jpg: boolean
  is_public: boolean
  file_rename: boolean
  position: number
}
