import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { getRestaurant } from '../../data/restaurants'
import { getDistrict } from '../../data/districts'
import { useReviews } from '../../state/ReviewsContext'
import { RatingStars } from '../common/RatingStars'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'
import type { Review } from '../../types'

export function ReviewCard({ review }: { review: Review }) {
  const { lang } = useLanguage()
  const { addComment } = useReviews()
  const [commentText, setCommentText] = useState('')

  const restaurant = getRestaurant(review.restaurantId)
  const district = restaurant ? getDistrict(restaurant.districtId) : undefined

  function handleSubmitComment(e: FormEvent) {
    e.preventDefault()
    if (!commentText.trim()) return
    addComment(review.id, '나', commentText.trim())
    setCommentText('')
  }

  if (!restaurant) return null

  const restaurantName = lang === 'en' ? restaurant.nameEn : restaurant.name

  return (
    <article className="community-card">
      <Link to={`/restaurant/${restaurant.id}`} className="community-card-restaurant">
        <img src={restaurant.imageUrl} alt="" />
        <div>
          <p className="community-card-restaurant-name">{restaurantName}</p>
          <p className="community-card-restaurant-meta">
            {district && (lang === 'en' ? district.nameEn : district.name)}
          </p>
        </div>
      </Link>

      <div className="review-item-head">
        <span className="review-author">{review.author}</span>
        <span className="review-date">{review.createdAt}</span>
      </div>
      <RatingStars rating={review.rating} />
      <p className="review-text">{review.text}</p>

      {review.comments.length > 0 && (
        <ul className="comment-list">
          {review.comments.map((c) => (
            <li key={c.id} className="comment-item">
              <span className="comment-author">{c.author}</span> {c.text}
            </li>
          ))}
        </ul>
      )}

      <form className="comment-form" onSubmit={handleSubmitComment}>
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder={t('commentPlaceholder', lang)}
          aria-label={t('commentPlaceholder', lang)}
        />
        <button type="submit" className="btn btn-sm">
          {t('commentSubmit', lang)}
        </button>
      </form>
    </article>
  )
}
