import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { StarRating } from '@/components/StarRating'
import type { Review } from '@/data/reviews'

type ReviewCardProps = {} & Review

export function ReviewCard({ rating, content, author, date, imgSrc }: ReviewCardProps) {
  return (
    <div className="space-y-5 border-b-1.5 border-input/30 py-8">
      <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
        <Avatar className="bg-foreground-light/15 sm:h-11 sm:w-11">
          <AvatarImage src={imgSrc} alt={author} />
          <AvatarFallback delayMs={5000} className="transparent">
            {author.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <StarRating rating={rating} />
      </div>
      <div>{content}</div>
      <div className="space-y-1">
        <p className="font-semibold text-primary">{author}</p>
        <p className="text-foreground-light">{date}</p>
      </div>
    </div>
  )
}
