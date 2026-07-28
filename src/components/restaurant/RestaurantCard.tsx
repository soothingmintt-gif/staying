import { Link } from 'react-router-dom'
import { Icon } from '../common/Icon'
import { getDistrict } from '../../data/districts'
import { isHotRestaurant, isNewRestaurant } from '../../data/restaurants'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'
import type { Restaurant } from '../../types'

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const { lang } = useLanguage()
  const district = getDistrict(restaurant.districtId)
  const isNew = isNewRestaurant(restaurant)
  const isHot = isHotRestaurant(restaurant)

  const name = lang === 'en' ? restaurant.nameEn : restaurant.name
  const foodType = lang === 'en' ? restaurant.foodTypeEn : restaurant.foodType
  const districtName = lang === 'en' ? district?.nameEn : district?.name
  const tags = lang === 'en' ? restaurant.tagsEn : restaurant.tags

  return (
    <Link to={`/restaurant/${restaurant.id}`} className="restaurant-card">
      <div className="restaurant-card-img-wrap">
        <img src={restaurant.imageUrl} alt="" loading="lazy" />
        {(isNew || isHot) && (
          <div className="restaurant-card-badges">
            {isNew && <span className="badge badge-new">{t('badgeNew', lang)}</span>}
            {isHot && <span className="badge badge-hot">{t('badgeHot', lang)}</span>}
          </div>
        )}
        <button
          type="button"
          className="restaurant-card-bookmark"
          aria-label={`${name} ${t('bookmarkAria', lang)}`}
          onClick={(e) => e.preventDefault()}
        >
          <Icon name="bookmark" />
        </button>
      </div>
      <div className="restaurant-card-body">
        <div className="restaurant-card-title-row">
          <h3>{name}</h3>
          <span className="restaurant-card-rating">
            <Icon name="star" className="icon icon-sm" />
            {restaurant.rating.toFixed(1)}
          </span>
        </div>
        <p className="restaurant-card-meta">
          {districtName} · {foodType} · {restaurant.priceRange}
        </p>
        <ul className="restaurant-card-tags">
          {tags.slice(0, 2).map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
