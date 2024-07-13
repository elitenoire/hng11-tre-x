import type { Products, TimbuError, GetProductsResponse } from '@/types/products'
import { NextResponse } from 'next/server'

export async function GET(request: Request): Promise<NextResponse<GetProductsResponse>> {
  const oid = process.env.NEXT_PUBLIC_TIMBU_CLOUD_ORGANIZATION_ID
  const apiKey = process.env.NEXT_PUBLIC_TIMBU_CLOUD_API_KEY
  const appId = process.env.NEXT_PUBLIC_TIMBU_CLOUD_APP_ID
  const size = 30
  const page = 1

  const TIMBU_URL = 'https://api.timbu.cloud/products'
  const SHALOM_URL = 'https://timbu-get-all-products.reavdev.workers.dev/'

  const queryString = `?organization_id=${oid}&Apikey=${apiKey}&Appid=${appId}&size=${size}&page=${page}`

  try {
    const res = await fetch(`${SHALOM_URL}${queryString}`, {
      // next: { revalidate: 300 },
    })
    const data: Products | TimbuError = await res.json()
    if (res.ok) {
      const items = (data as Products).items.map(
        ({
          id,
          name,
          description,
          unique_id,
          url_slug,
          current_price,
          last_updated,
          photos,
          available_quantity,
          categories,
        }) => {
          return {
            id,
            name,
            description,
            unique_id,
            available_quantity,
            url_slug,
            last_updated,
            photos: photos.map(({ url, position }) => ({ url, position })),
            current_price: current_price ? (current_price[0].NGN?.[0] as number | undefined) : null,
            categories: categories.map(({ name, description }) => ({ name, description })),
          }
        }
      )
      const normalizedData = {
        ...(data as Products),
        items,
      }
      return NextResponse.json({ error: null, products: normalizedData })
    }
    return NextResponse.json(
      { error: data as TimbuError, products: null },
      { status: res.status, statusText: res.statusText }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Something went wrong', products: null },
      { status: error.status, statusText: error.statusText }
    )
  }
}
