import type {
  ProductItem,
  TimbuError,
  GetProductResponse,
  ExtraInfoList,
} from '@/types/singleProduct'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<GetProductResponse>> {
  const pid = params.id

  const oid = process.env.NEXT_PUBLIC_TIMBU_CLOUD_ORGANIZATION_ID
  const apiKey = process.env.NEXT_PUBLIC_TIMBU_CLOUD_API_KEY
  const appId = process.env.NEXT_PUBLIC_TIMBU_CLOUD_APP_ID

  const TIMBU_URL = 'https://api.timbu.cloud/products'
  const SHALOM_URL = 'https://timbu-get-single-product.reavdev.workers.dev/'
  //   const EXTRA_INFO_URL = 'https://api.timbu.cloud/extrainfo/products/'

  const queryString = `?organization_id=${oid}&Apikey=${apiKey}&Appid=${appId}`

  try {
    const res = await fetch(`${SHALOM_URL}${pid}${queryString}`, {
      // next: { revalidate: 300 },
    })
    // const [productResponse, extraInfoResponse] = await Promise.all([
    //     fetch(`${SHALOM_URL}${pid}${queryString}`),
    //     fetch(`${EXTRA_INFO_URL}${pid}${queryString}`)
    // ])
    const data: ProductItem | TimbuError = await res.json()
    // const productData: ProductItem | TimbuError = await productResponse.json()
    // const extraInfoData: ExtraInfoList = await extraInfoResponse.json()

    if (res.ok) {
      const {
        id,
        name,
        description,
        photos,
        categories,
        current_price,
        available_quantity,
        unique_id,
        url_slug,
        date_created,
        extra_infos,
      } = data as ProductItem
      const normalizedData = {
        id,
        name,
        description,
        available_quantity,
        unique_id,
        url_slug,
        date_created,
        current_price,
        extra_infos: extra_infos.map(({ key, value }) => ({ key, value })),
        photos: photos.map(({ url, position }) => ({
          url: `https://api.timbu.cloud/images/${url}`,
          position,
        })),
        categories: categories.map(({ name, description }) => ({ name, description })),
      }
      return NextResponse.json({ error: null, product: normalizedData })
    }
    return NextResponse.json(
      { error: data as TimbuError, product: null },
      { status: res.status, statusText: res.statusText }
    )
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Something went wrong', product: null },
      { status: error.status, statusText: error.statusText }
    )
  }
}
