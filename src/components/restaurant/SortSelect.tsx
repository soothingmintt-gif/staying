import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'

export type SortKey = 'recommended' | 'rating' | 'reviews'

interface Props {
  value: SortKey
  onChange: (value: SortKey) => void
}

export function SortSelect({ value, onChange }: Props) {
  const { lang } = useLanguage()

  return (
    <select
      className="sort-select"
      value={value}
      onChange={(e) => onChange(e.target.value as SortKey)}
      aria-label={t('sortAria', lang)}
    >
      <option value="recommended">{t('sortRecommended', lang)}</option>
      <option value="rating">{t('sortRating', lang)}</option>
      <option value="reviews">{t('sortReviews', lang)}</option>
    </select>
  )
}
