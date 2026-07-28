import { useState } from 'react'
import { useReviews } from '../state/ReviewsContext'
import { ReviewCard } from '../components/community/ReviewCard'
import { NewReviewModal } from '../components/community/NewReviewModal'
import { EmptyState } from '../components/common/EmptyState'
import { Icon } from '../components/common/Icon'
import { useLanguage } from '../i18n/LanguageContext'
import { t, getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

export function CommunityPage() {
  const { lang } = useLanguage()
  useSeo(getSeo('community', lang))
  const { getPublicReviews } = useReviews()
  const [showNewReview, setShowNewReview] = useState(false)

  const publicReviews = getPublicReviews()

  return (
    <div className="app-container">
      <h1 className="explore-title">{t('communityPageTitle', lang)}</h1>
      <p className="archive-subtitle">{t('communitySubtitle', lang)}</p>

      <button type="button" className="btn archive-create-btn" onClick={() => setShowNewReview(true)}>
        <Icon name="plus" />
        {t('writeReviewBtn', lang)}
      </button>

      {publicReviews.length === 0 ? (
        <EmptyState icon="message" title={t('noPublicReviewsTitle', lang)} body={t('noPublicReviewsBody', lang)} />
      ) : (
        <div className="community-feed">
          {publicReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}

      {showNewReview && <NewReviewModal onClose={() => setShowNewReview(false)} />}
    </div>
  )
}
