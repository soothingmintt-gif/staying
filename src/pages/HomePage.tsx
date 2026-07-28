import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useFeaturedCategory } from '../hooks/useFeaturedCategory'
import { categories } from '../data/categories'
import { restaurants } from '../data/restaurants'
import { DistrictFilter } from '../components/restaurant/DistrictFilter'
import { CategorySection } from '../components/restaurant/CategorySection'
import { useLanguage } from '../i18n/LanguageContext'
import { getFeaturedCategoryMessage, getSeo, t } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

export function HomePage() {
  const featured = useFeaturedCategory()
  const { lang } = useLanguage()
  const [districtId, setDistrictId] = useState('all')
  useSeo(getSeo('home', lang))

  const filtered = restaurants.filter((r) => districtId === 'all' || r.districtId === districtId)

  return (
    <div className="app-container">
      <section className="home-hero">
        <p className="home-hero-eyebrow">{t('heroEyebrow', lang)}</p>
        <h1>{getFeaturedCategoryMessage(featured.messageKey, lang)}</h1>
      </section>

      <nav className="cat-tab-bar" aria-label={t('categoryFilterAria', lang)}>
        <Link to="/explore" className="cat-tab">
          <span className="cat-tab-icon" aria-hidden="true">
            ✨
          </span>
          <span className="cat-tab-label">{t('filterAll', lang)}</span>
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/explore?category=${category.id}`}
            className={`cat-tab${category.id === featured.primary ? ' active' : ''}`}
          >
            <span className="cat-tab-icon" aria-hidden="true">
              {category.emoji}
            </span>
            <span className="cat-tab-label">{lang === 'en' ? category.labelEn : category.label}</span>
          </Link>
        ))}
      </nav>

      <DistrictFilter value={districtId} onChange={setDistrictId} />

      {categories
        .slice()
        .sort((a, b) => (a.id === featured.primary ? -1 : b.id === featured.primary ? 1 : 0))
        .map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            restaurants={filtered.filter((r) => r.categories.includes(category.id))}
            highlighted={category.id === featured.primary}
          />
        ))}
    </div>
  )
}
