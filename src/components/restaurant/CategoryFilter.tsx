import { categories } from '../../data/categories'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'
import type { CategoryId } from '../../types'

interface Props {
  value: CategoryId | 'all'
  onChange: (categoryId: CategoryId | 'all') => void
}

export function CategoryFilter({ value, onChange }: Props) {
  const { lang } = useLanguage()

  return (
    <div className="cat-tab-bar" role="group" aria-label={t('categoryFilterAria', lang)}>
      <button
        type="button"
        className={`cat-tab${value === 'all' ? ' active' : ''}`}
        aria-pressed={value === 'all'}
        onClick={() => onChange('all')}
      >
        <span className="cat-tab-icon" aria-hidden="true">
          ✨
        </span>
        <span className="cat-tab-label">{t('filterAll', lang)}</span>
      </button>
      {categories.map((c) => (
        <button
          key={c.id}
          type="button"
          className={`cat-tab${value === c.id ? ' active' : ''}`}
          aria-pressed={value === c.id}
          onClick={() => onChange(c.id)}
        >
          <span className="cat-tab-icon" aria-hidden="true">
            {c.emoji}
          </span>
          <span className="cat-tab-label">{lang === 'en' ? c.labelEn : c.label}</span>
        </button>
      ))}
    </div>
  )
}
