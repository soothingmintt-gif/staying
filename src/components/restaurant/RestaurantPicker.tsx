import { useState } from 'react'
import { restaurants } from '../../data/restaurants'
import { useSearch } from '../../hooks/useSearch'
import { SearchBar } from '../common/SearchBar'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'

interface Props {
  selectedIds: string[]
  onToggle: (restaurantId: string) => void
}

export function RestaurantPicker({ selectedIds, onToggle }: Props) {
  const { lang } = useLanguage()
  const [query, setQuery] = useState('')
  const results = useSearch(restaurants, query)

  return (
    <div>
      <div className="picker-search">
        <SearchBar value={query} onChange={setQuery} />
      </div>
      <div className="picker-list">
        {results.map((r) => {
          const added = selectedIds.includes(r.id)
          const name = lang === 'en' ? r.nameEn : r.name
          const foodType = lang === 'en' ? r.foodTypeEn : r.foodType
          return (
            <button
              type="button"
              key={r.id}
              className={`picker-item${added ? ' added' : ''}`}
              onClick={() => onToggle(r.id)}
              aria-pressed={added}
            >
              <img src={r.imageUrl} alt="" />
              <span className="picker-item-info">
                <span className="picker-item-name">{name}</span>
                <span className="picker-item-meta">{foodType}</span>
              </span>
              {added && <span className="picker-item-check">{t('pickerAdded', lang)}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}
