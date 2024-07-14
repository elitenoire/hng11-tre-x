export type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

export type GetProductResponse =
  | {
      error: null
      product: NormalizedProductItem
    }
  | {
      error: TimbuError
      product: null
    }
  | {
      error: string
      product: null
    }

export type TimbuError = {
  detail: DetailElement[] | string
}

export type DetailElement = {
  loc: string[]
  msg: string
  type: string
}

export type ProductItem = {
  name: string
  description: string
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
  current_price: number
  is_deleted: boolean
  available_quantity: number
  selling_price: null
  discounted_price: null
  buying_price: null
  extra_infos: ExtraInfo[]
}

export type NormalizedProductItem = {
  id: string
  name: string
  description: null | string
  unique_id: string
  url_slug: string
  available_quantity: number
  current_price: number | null | undefined
  extra_infos: { key: string; value: string }[]
  categories: { name: string; description: string | null }[]
  photos: { url: string; position: number }[]
  date_created: Date
}

export type Category = {
  organization_id: string
  name: string
  position: null
  category_type: string
  description: string
  last_updated: Date
  id: string
  parent_id: null
  url_slug: null
  is_deleted: boolean
  date_created: Date
  subcategories: any[]
  parents: any[]
}

export type ExtraInfo = {
  id: string
  key: string
  value: string
  value_dt: null
}

export type ExtraInfoList = {
  id: string
  key: string
  value: string
  extra_info_list: null
  value_dt: null
  date_created: Date
  last_updated: Date
}

export type Photo = {
  model_name: string
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
