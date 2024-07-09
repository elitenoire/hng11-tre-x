export type Review = {
  rating: number
  content: string
  author: string
  date: string
  imgSrc: string
}

export const reviews: Review[] = [
  {
    rating: 5,
    content:
      'I found the Peppa Pet website when looking for a family companion. Excited to see many cute puppies, we adopted one into our home.',
    author: 'Kristin Watson',
    date: 'March 14, 2021',
    imgSrc: '/img/watson.png',
  },
  {
    rating: 4.3,
    content:
      "Peppa's puppy brought joy and love, with a seamless adoption process and excellent support. They prioritize their puppies' well-being and find them loving forever homes.",
    author: 'Jenny Wilson',
    date: 'January 28, 2021',
    imgSrc: '/img/wilson.png',
  },
  {
    rating: 5,
    content:
      "I have to express my admiration for the Peppa Pet Bed. It's not only fashionable and long-lasting, but most importantly, my furry friend adores it! Keeping the bed clean is a breeze, which is a major advantage. I wholeheartedly suggest it to all pet parents out there.",
    author: 'Bessie Cooper',
    date: 'January 11, 2024',
    imgSrc: '/img/cooper.png',
  },
]
