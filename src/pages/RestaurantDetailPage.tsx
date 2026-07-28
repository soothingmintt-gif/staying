import { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { getRestaurant, isHotRestaurant, isNewRestaurant } from '../data/restaurants'
import { getDistrict } from '../data/districts'
import { useReviews } from '../state/ReviewsContext'
import { Icon } from '../components/common/Icon'
import { RatingStars } from '../components/common/RatingStars'
import { EmptyState } from '../components/common/EmptyState'
import { useLanguage } from '../i18n/LanguageContext'
import { t, getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

export function RestaurantDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const [saved, setSaved] = useState(false)
  const { getReviewsByRestaurant } = useReviews()

  const restaurant = id ? getRestaurant(id) : undefined

  useSeo(
    restaurant
      ? {
          title: lang === 'en' ? restaurant.nameEn : restaurant.name,
          description: lang === 'en' ? restaurant.descriptionEn : restaurant.description,
        }
      : getSeo('explore', lang),
  )

  if (!restaurant) {
    return (
      <div className="app-container">
        <EmptyState icon="mapPin" title={t('notFoundTitle', lang)} body={t('notFoundBody', lang)} />
        <Link to="/explore" className="btn" style={{ display: 'inline-flex', marginTop: 12 }}>
          {t('backToExplore', lang)}
        </Link>
      </div>
    )
  }

  const district = getDistrict(restaurant.districtId)
  const isNew = isNewRestaurant(restaurant)
  const isHot = isHotRestaurant(restaurant)
  const reviews = getReviewsByRestaurant(restaurant.id).filter((r) => r.visibility === 'public')

  const name = lang === 'en' ? restaurant.nameEn : restaurant.name
  const foodType = lang === 'en' ? restaurant.foodTypeEn : restaurant.foodType
  const districtName = lang === 'en' ? district?.nameEn : district?.name
  const description = lang === 'en' ? restaurant.descriptionEn : restaurant.description
  const tags = lang === 'en' ? restaurant.tagsEn : restaurant.tags

  return (
    <div className="app-container">
      <button type="button" className="detail-back" onClick={() => navigate(-1)} aria-label={t('backAria', lang)}>
        <Icon name="chevronLeft" />
      </button>

      <div className="detail-img-wrap">
        <img src={restaurant.imageUrl} alt="" />
        {(isNew || isHot) && (
          <div className="restaurant-card-badges">
            {isNew && <span className="badge badge-new">{t('badgeNew', lang)}</span>}
            {isHot && <span className="badge badge-hot">{t('badgeHot', lang)}</span>}
          </div>
        )}
      </div>

      <div className="detail-title-row">
        <h1>{name}</h1>
        <span className="restaurant-card-rating">
          <Icon name="star" className="icon icon-sm" />
          {restaurant.rating.toFixed(1)}
          <span className="detail-review-count">({restaurant.reviewCount})</span>
        </span>
      </div>

      <p className="detail-meta">
        {districtName} · {foodType} · {restaurant.priceRange}
      </p>

      <p className="detail-address">
        <Icon name="mapPin" className="icon icon-sm-line" />
        {restaurant.address}
      </p>

      <ul className="detail-tags">
        {tags.map((tag) => (
          <li key={tag}>#{tag}</li>
        ))}
      </ul>

      <p className="detail-description">{description}</p>

      <button
        type="button"
        className={`btn detail-save-btn${saved ? ' btn-outline' : ''}`}
        onClick={() => setSaved((s) => !s)}
        aria-pressed={saved}
      >
        <Icon name="bookmark" />
        {saved ? t('savedToArchive', lang) : t('saveToArchive', lang)}
      </button>

      <hr className="detail-divider" />

      <h2 className="detail-reviews-heading">
        {t('reviewsHeading', lang)} {reviews.length > 0 && `(${reviews.length})`}
      </h2>

      {reviews.length === 0 ? (
        <EmptyState icon="message" title={t('noReviewsTitle', lang)} body={t('noReviewsBody', lang)} />
      ) : (
        <ul className="review-list">
          {reviews.map((review) => (
            <li key={review.id} className="review-item">
              <div className="review-item-head">
                <span className="review-author">{review.author}</span>
                <span className="review-date">{review.createdAt}</span>
              </div>
              <RatingStars rating={review.rating} />
              <p className="review-text">{review.text}</p>
              {review.comments.length > 0 && (
                <p className="review-comment-count">
                  <Icon name="message" className="icon icon-sm-line" />
                  {review.comments.length} {t('commentsCount', lang)}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
