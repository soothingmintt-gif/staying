import { useState, type FormEvent } from 'react'
import { restaurants, getRestaurant } from '../../data/restaurants'
import { useSearch } from '../../hooks/useSearch'
import { useReviews } from '../../state/ReviewsContext'
import { Modal } from '../common/Modal'
import { SearchBar } from '../common/SearchBar'
import { Icon } from '../common/Icon'
import { useLanguage } from '../../i18n/LanguageContext'
import { t, starRatingAria } from '../../i18n/translations'

export function NewReviewModal({ onClose }: { onClose: () => void }) {
  const { lang } = useLanguage()
  const { addReview } = useReviews()
  const [restaurantId, setRestaurantId] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')

  const results = useSearch(restaurants, query)
  const selected = restaurantId ? getRestaurant(restaurantId) : undefined

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!restaurantId || !text.trim()) return
    addReview({ restaurantId, author: '나', rating, text: text.trim(), visibility: 'public' })
    onClose()
  }

  return (
    <Modal title={t('writeReviewBtn', lang)} onClose={onClose}>
      {!selected ? (
        <div>
          <p className="form-field-label-standalone">{t('chooseRestaurantLabel', lang)}</p>
          <div className="picker-search">
            <SearchBar value={query} onChange={setQuery} />
          </div>
          <div className="picker-list">
            {results.map((r) => (
              <button
                type="button"
                key={r.id}
                className="picker-item"
                onClick={() => setRestaurantId(r.id)}
              >
                <img src={r.imageUrl} alt="" />
                <span className="picker-item-info">
                  <span className="picker-item-name">{lang === 'en' ? r.nameEn : r.name}</span>
                  <span className="picker-item-meta">{lang === 'en' ? r.foodTypeEn : r.foodType}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="selected-restaurant-row">
            <img src={selected.imageUrl} alt="" />
            <span className="picker-item-name">{lang === 'en' ? selected.nameEn : selected.name}</span>
            <button type="button" className="change-restaurant-link" onClick={() => setRestaurantId(null)}>
              {t('changeRestaurant', lang)}
            </button>
          </div>

          <div className="form-field">
            <label>{t('ratingLabel', lang)}</label>
            <div className="rating-input">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  type="button"
                  key={n}
                  aria-label={starRatingAria(n, lang)}
                  aria-pressed={n <= rating}
                  onClick={() => setRating(n)}
                >
                  <Icon name="star" className={`icon icon-sm${n <= rating ? '' : ' icon-star-empty'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="review-text">{t('reviewTextLabel', lang)}</label>
            <textarea
              id="review-text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t('reviewTextPlaceholder', lang)}
              rows={4}
              required
            />
          </div>

          <div className="modal-actions">
            <button type="submit" className="btn">
              {t('postBtn', lang)}
            </button>
          </div>
        </form>
      )}
    </Modal>
  )
}
