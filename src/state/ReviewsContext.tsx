import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { reviews as initialReviews } from '../data/reviews'
import type { Comment, Review, ReviewVisibility } from '../types'

interface ReviewsContextValue {
  reviews: Review[]
  getReviewsByRestaurant: (restaurantId: string) => Review[]
  getPublicReviews: () => Review[]
  addReview: (input: { restaurantId: string; author: string; rating: number; text: string; visibility: ReviewVisibility }) => void
  addComment: (reviewId: string, author: string, text: string) => void
}

const ReviewsContext = createContext<ReviewsContextValue | null>(null)

export function ReviewsProvider({ children }: { children: ReactNode }) {
  const [reviews, setReviews] = useState<Review[]>(initialReviews)

  const value = useMemo<ReviewsContextValue>(
    () => ({
      reviews,
      getReviewsByRestaurant: (restaurantId) => reviews.filter((r) => r.restaurantId === restaurantId),
      getPublicReviews: () =>
        reviews
          .filter((r) => r.visibility === 'public')
          .slice()
          .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1)),
      addReview: ({ restaurantId, author, rating, text, visibility }) => {
        const newReview: Review = {
          id: `rv-${Date.now()}`,
          restaurantId,
          author,
          rating,
          text,
          visibility,
          createdAt: new Date().toISOString().slice(0, 10),
          comments: [],
        }
        setReviews((prev) => [newReview, ...prev])
      },
      addComment: (reviewId, author, text) => {
        const newComment: Comment = {
          id: `c-${Date.now()}`,
          author,
          text,
          createdAt: new Date().toISOString().slice(0, 10),
        }
        setReviews((prev) =>
          prev.map((r) => (r.id === reviewId ? { ...r, comments: [...r.comments, newComment] } : r)),
        )
      },
    }),
    [reviews],
  )

  return <ReviewsContext.Provider value={value}>{children}</ReviewsContext.Provider>
}

export function useReviews(): ReviewsContextValue {
  const ctx = useContext(ReviewsContext)
  if (!ctx) throw new Error('useReviews must be used within ReviewsProvider')
  return ctx
}
