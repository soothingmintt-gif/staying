import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { restaurants } from '../data/restaurants'
import { useSearch } from '../hooks/useSearch'
import { SearchBar } from '../components/common/SearchBar'
import { DistrictFilter } from '../components/restaurant/DistrictFilter'
import { CategoryFilter } from '../components/restaurant/CategoryFilter'
import { SortSelect, type SortKey } from '../components/restaurant/SortSelect'
import { RestaurantCard } from '../components/restaurant/RestaurantCard'
import { EmptyState } from '../components/common/EmptyState'
import { categories } from '../data/categories'
import { useLanguage } from '../i18n/LanguageContext'
import { t, getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'
import type { CategoryId } from '../types'

const categoryIds = categories.map((c) => c.id)

function readCategoryParam(value: string | null): CategoryId | 'all' {
  return categoryIds.includes(value as CategoryId) ? (value as CategoryId) : 'all'
}

export function ExplorePage() {
  const { lang } = useLanguage()
  useSeo(getSeo('explore', lang))
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [districtId, setDistrictId] = useState('all')
  const [categoryId, setCategoryId] = useState<CategoryId | 'all'>(() =>
    readCategoryParam(searchParams.get('category')),
  )
  const [sort, setSort] = useState<SortKey>('recommended')

  const searched = useSearch(restaurants, query)

  const filtered = useMemo(() => {
    return searched.filter(
      (r) =>
        (districtId === 'all' || r.districtId === districtId) &&
        (categoryId === 'all' || r.categories.includes(categoryId)),
    )
  }, [searched, districtId, categoryId])

  const sorted = useMemo(() => {
    const list = filtered.slice()
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    else if (sort === 'reviews') list.sort((a, b) => b.reviewCount - a.reviewCount)
    return list
  }, [filtered, sort])

  return (
    <div className="app-container">
      <h1 className="explore-title">{t('explorePageTitle', lang)}</h1>

      <SearchBar value={query} onChange={setQuery} />
      <CategoryFilter value={categoryId} onChange={setCategoryId} />
      <DistrictFilter value={districtId} onChange={setDistrictId} />

      <div className="explore-toolbar">
        <p className="explore-count">
          {sorted.length}
          {t('resultsCount', lang)}
        </p>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      {sorted.length === 0 ? (
        <EmptyState title={t('emptyResultsTitle', lang)} body={t('emptyResultsBody', lang)} />
      ) : (
        <div className="explore-grid">
          {sorted.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      )}
    </div>
  )
}
