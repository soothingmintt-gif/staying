import { Link } from 'react-router-dom'
import { useReviews } from '../state/ReviewsContext'
import { useArchive } from '../state/ArchiveContext'
import { getRestaurant } from '../data/restaurants'
import { RatingStars } from '../components/common/RatingStars'
import { EmptyState } from '../components/common/EmptyState'
import { Icon } from '../components/common/Icon'
import { LanguageToggle } from '../components/common/LanguageToggle'
import { useLanguage } from '../i18n/LanguageContext'
import { t, getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

export function MyPage() {
  const { lang } = useLanguage()
  useSeo(getSeo('me', lang))
  const { reviews } = useReviews()
  const { lists } = useArchive()

  const myReviews = reviews
    .filter((r) => r.author === '나')
    .slice()
    .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))

  const savedSpots = new Set(lists.flatMap((l) => l.restaurantIds)).size

  return (
    <div className="app-container">
      <h1 className="explore-title">{t('myPageTitle', lang)}</h1>

      <div className="profile-card">
        <div className="profile-avatar">
          <Icon name="user" />
        </div>
        <div>
          <p className="profile-name">{t('myDisplayName', lang)}</p>
          <p className="profile-handle">{t('myHandle', lang)}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div className="profile-stat">
          <span className="profile-stat-num">{myReviews.length}</span>
          <span className="profile-stat-label">{t('statReviews', lang)}</span>
        </div>
        <div className="profile-stat">
          <span className="profile-stat-num">{lists.length}</span>
          <span className="profile-stat-label">{t('statLists', lang)}</span>
        </div>
        <div className="profile-stat">
          <span className="profile-stat-num">{savedSpots}</span>
          <span className="profile-stat-label">{t('statSaved', lang)}</span>
        </div>
      </div>

      <section className="my-section">
        <h2 className="my-section-heading">{t('myReviewsHeading', lang)}</h2>
        {myReviews.length === 0 ? (
          <EmptyState icon="message" title={t('noMyReviewsTitle', lang)} body={t('noMyReviewsBody', lang)} />
        ) : (
          <ul className="review-list">
            {myReviews.map((review) => {
              const restaurant = getRestaurant(review.restaurantId)
              if (!restaurant) return null
              const name = lang === 'en' ? restaurant.nameEn : restaurant.name
              return (
                <li key={review.id} className="review-item">
                  <div className="review-item-head">
                    <Link to={`/restaurant/${restaurant.id}`} className="my-review-restaurant">
                      {name}
                    </Link>
                    <span
                      className={`visibility-badge${review.visibility === 'private' ? ' private' : ''}`}
                    >
                      {review.visibility === 'public' ? t('visibilityPublic', lang) : t('visibilityPrivate', lang)}
                    </span>
                  </div>
                  <RatingStars rating={review.rating} />
                  <p className="review-text">{review.text}</p>
                  <span className="review-date">{review.createdAt}</span>
                </li>
              )
            })}
          </ul>
        )}
      </section>

      <section className="my-section">
        <div className="my-section-head-row">
          <h2 className="my-section-heading">{t('myListsHeading', lang)}</h2>
          <Link to="/archive" className="my-section-link">
            {t('viewAllInArchive', lang)}
          </Link>
        </div>
        <div className="archive-list-grid">
          {lists.slice(0, 3).map((list) => {
            const cover = list.restaurantIds.map((id) => getRestaurant(id)).find(Boolean)
            return (
              <Link to={`/archive/${list.id}`} className="archive-list-card" key={list.id}>
                <div className="archive-list-cover">
                  {cover ? (
                    <img src={cover.imageUrl} alt={lang === 'en' ? cover.nameEn : cover.name} />
                  ) : (
                    <Icon name="bookmark" className="icon" />
                  )}
                </div>
                <div className="archive-list-body">
                  <h3>{list.title}</h3>
                  <p className="archive-list-count">
                    {list.restaurantIds.length} {t('restaurantCount', lang)}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <section className="my-section">
        <h2 className="my-section-heading">{t('settingsHeading', lang)}</h2>
        <div className="settings-row">
          <span>{t('languageSettingLabel', lang)}</span>
          <LanguageToggle />
        </div>
        <p className="settings-note">{t('settingsNote', lang)}</p>
      </section>
    </div>
  )
}
