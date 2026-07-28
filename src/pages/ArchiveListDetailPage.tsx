import { useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { useArchive } from '../state/ArchiveContext'
import { getRestaurant } from '../data/restaurants'
import { RestaurantCard } from '../components/restaurant/RestaurantCard'
import { RestaurantPicker } from '../components/restaurant/RestaurantPicker'
import { Modal } from '../components/common/Modal'
import { EmptyState } from '../components/common/EmptyState'
import { Icon } from '../components/common/Icon'
import { useLanguage } from '../i18n/LanguageContext'
import { t, getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

export function ArchiveListDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const { getList, addRestaurant, removeRestaurant, deleteList } = useArchive()
  const [showPicker, setShowPicker] = useState(false)
  const [copied, setCopied] = useState(false)

  const list = id ? getList(id) : undefined

  useSeo(list ? { title: list.title, description: list.description || getSeo('archive', lang).description, noindex: true } : getSeo('archive', lang))

  if (!list) {
    return (
      <div className="app-container">
        <EmptyState icon="bookmark" title={t('listNotFoundTitle', lang)} body={t('listNotFoundBody', lang)} />
        <Link to="/archive" className="btn" style={{ display: 'inline-flex', marginTop: 12 }}>
          {t('backToArchive', lang)}
        </Link>
      </div>
    )
  }

  const listId = list.id
  const shareUrl = `${window.location.origin}/archive/${list.shareSlug}`
  const restaurantList = list.restaurantIds
    .map((rid) => getRestaurant(rid))
    .filter((r): r is NonNullable<typeof r> => r !== undefined)

  function handleCopy() {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleDelete() {
    deleteList(listId)
    navigate('/archive')
  }

  return (
    <div className="app-container">
      <button type="button" className="detail-back" onClick={() => navigate(-1)} aria-label={t('backAria', lang)}>
        <Icon name="chevronLeft" />
      </button>

      <h1 className="archive-detail-title">{list.title}</h1>
      {list.description && <p className="archive-detail-desc">{list.description}</p>}
      <p className="archive-list-count">
        {restaurantList.length} {t('restaurantCount', lang)}
      </p>

      <div className="share-link-box">
        <Icon name="lock" className="icon icon-sm-line" />
        <div className="share-link-text">
          <span className="share-link-label">{t('shareLinkLabel', lang)}</span>
          <span className="share-link-url">{shareUrl}</span>
        </div>
        <button type="button" className="btn btn-sm btn-outline" onClick={handleCopy}>
          {copied ? t('linkCopied', lang) : t('copyLink', lang)}
        </button>
      </div>

      <div className="archive-detail-actions">
        <button type="button" className="btn" onClick={() => setShowPicker(true)}>
          <Icon name="plus" />
          {t('addRestaurantBtn', lang)}
        </button>
        <button type="button" className="btn-text-danger" onClick={handleDelete}>
          {t('deleteListBtn', lang)}
        </button>
      </div>

      {restaurantList.length === 0 ? (
        <EmptyState icon="bookmark" title={t('listEmptyTitle', lang)} body={t('listEmptyBody', lang)} />
      ) : (
        <div className="explore-grid archive-restaurant-grid">
          {restaurantList.map((r) => (
            <div className="archive-restaurant-item" key={r.id}>
              <RestaurantCard restaurant={r} />
              <button
                type="button"
                className="archive-remove-btn"
                onClick={() => removeRestaurant(list.id, r.id)}
                aria-label={t('removeFromListAria', lang)}
              >
                ✕ {t('removeFromListAria', lang)}
              </button>
            </div>
          ))}
        </div>
      )}

      {showPicker && (
        <Modal title={t('addRestaurantBtn', lang)} onClose={() => setShowPicker(false)}>
          <RestaurantPicker
            selectedIds={list.restaurantIds}
            onToggle={(rid) =>
              list.restaurantIds.includes(rid) ? removeRestaurant(list.id, rid) : addRestaurant(list.id, rid)
            }
          />
          <div className="modal-actions">
            <button type="button" className="btn" onClick={() => setShowPicker(false)}>
              {t('pickerDone', lang)}
            </button>
          </div>
        </Modal>
      )}
    </div>
  )
}
