import { RestaurantCard } from './RestaurantCard'
import { useLanguage } from '../../i18n/LanguageContext'
import type { Category, Restaurant } from '../../types'

interface Props {
  category: Category
  restaurants: Restaurant[]
  highlighted?: boolean
}

export function CategorySection({ category, restaurants, highlighted }: Props) {
  const { lang } = useLanguage()
  if (restaurants.length === 0) return null

  const label = lang === 'en' ? category.labelEn : category.label
  const description = lang === 'en' ? category.descriptionEn : category.description

  return (
    <section className={`category-section${highlighted ? ' highlighted' : ''}`} aria-label={label}>
      <div className="category-section-head">
        <h2>
          {category.emoji} {label}
        </h2>
        <p>{description}</p>
      </div>
      <div className="category-section-scroll">
        {restaurants.map((r) => (
          <div className="category-section-item" key={r.id}>
            <RestaurantCard restaurant={r} />
          </div>
        ))}
      </div>
    </section>
  )
}
