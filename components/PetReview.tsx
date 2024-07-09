import { RefreshCcw } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ReviewCard } from '@/components/ReviewCard'

import { reviews } from '@/data/reviews'

export function PetReview() {
  return (
    <div className="space-y-10 rounded-[20px] px-5 py-8 shadow-body max-lg:mx-auto max-lg:max-w-2xl lg:px-20">
      <h3 className="text-2xl font-bold capitalize text-primary">
        Hear What Our Valued Customers Have to Say
      </h3>
      <Tabs defaultValue="reviews" className="max-w-2xl">
        <div className="hide-scroll overflow-x-auto">
          <TabsList className="gap-8 bg-transparent p-0">
            <TabsTrigger
              value="description"
              className="rounded-none border-b-1.5 border-transparent px-0 text-base font-semibold text-foreground-light data-[state=active]:border-foreground data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-none border-b-1.5 border-transparent px-0 text-base font-semibold text-foreground-light data-[state=active]:border-foreground data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              <span className="flex items-center gap-1">
                Reviews
                <Badge variant="secondary">{reviews.length}</Badge>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="support"
              className="rounded-none border-b-1.5 border-transparent px-0 text-base font-semibold text-foreground-light data-[state=active]:border-foreground data-[state=active]:text-primary data-[state=active]:shadow-none"
            >
              Support
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent
          value="description"
          className="mt-0 min-h-[500px] border-t-1.5 border-input/50"
        ></TabsContent>
        <TabsContent value="reviews" className="mt-0 space-y-5 border-t-1.5 border-input/50">
          <ul className="space-y-5">
            {reviews.map(({ rating, content, author, date, imgSrc }, idx) => (
              <li key={idx} className="">
                <ReviewCard
                  imgSrc={imgSrc}
                  rating={rating}
                  content={content}
                  author={author}
                  date={date}
                />
              </li>
            ))}
          </ul>
          <Button
            variant="link"
            className="flex-wrap gap-2 whitespace-normal pl-0 text-xs uppercase text-foreground-light/50"
          >
            <RefreshCcw size={14} />
            Load more reviews
          </Button>
        </TabsContent>
        <TabsContent
          value="support"
          className="mt-0 min-h-[500px] border-t-1.5 border-input/50"
        ></TabsContent>
      </Tabs>
    </div>
  )
}
