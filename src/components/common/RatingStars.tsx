import { Icon } from './Icon'

export function RatingStars({ rating }: { rating: number }) {
  const rounded = Math.round(rating)

  return (
    <div className="rating-stars" aria-label={`${rating.toFixed(1)} / 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className={`icon icon-sm${i < rounded ? '' : ' icon-star-empty'}`} />
      ))}
    </div>
  )
}
