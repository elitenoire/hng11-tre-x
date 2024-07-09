import { Star } from 'lucide-react'

export function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array(Math.round(rating))
        .fill('')
        .map((star, i) => (
          <Star key={i} size={20} className="fill-amber-500 text-amber-500" />
        ))}
    </div>
  )
}
