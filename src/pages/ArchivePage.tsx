import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useArchive } from '../state/ArchiveContext'
import { getRestaurant } from '../data/restaurants'
import { Modal } from '../components/common/Modal'
import { EmptyState } from '../components/common/EmptyState'
import { Icon } from '../components/common/Icon'
import { useLanguage } from '../i18n/LanguageContext'
import { t, getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

export function ArchivePage() {
  const { lang } = useLanguage()
  useSeo(getSeo('archive', lang))
  const { lists, createList } = useArchive()
  const navigate = useNavigate()
  const [showCreate, setShowCreate] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  function handleCreate(e: FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    const list = createList(title.trim(), description.trim())
    setShowCreate(false)
    setTitle('')
    setDescription('')
    navigate(`/archive/${list.id}`)
  }

  return (
    <div className="app-container">
      <h1 className="explore-title">{t('archivePageTitle', lang)}</h1>
      <p className="archive-subtitle">{t('archivePageSubtitle', lang)}</p>

      <button type="button" className="btn archive-create-btn" onClick={() => setShowCreate(true)}>
        <Icon name="plus" />
        {t('createListBtn', lang)}
      </button>

      {lists.length === 0 ? (
        <EmptyState icon="bookmark" title={t('emptyListsTitle', lang)} body={t('emptyListsBody', lang)} />
      ) : (
        <div className="archive-list-grid">
          {lists.map((list) => {
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
                  {list.description && <p className="archive-list-desc">{list.description}</p>}
                  <p className="archive-list-count">
                    {list.restaurantIds.length} {t('restaurantCount', lang)}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      )}

      {showCreate && (
        <Modal title={t('createListTitle', lang)} onClose={() => setShowCreate(false)}>
          <form onSubmit={handleCreate}>
            <div className="form-field">
              <label htmlFor="list-title">{t('listTitleLabel', lang)}</label>
              <input
                id="list-title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={t('listTitlePlaceholder', lang)}
                required
                autoFocus
              />
            </div>
            <div className="form-field">
              <label htmlFor="list-desc">{t('listDescLabel', lang)}</label>
              <textarea
                id="list-desc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={t('listDescPlaceholder', lang)}
                rows={2}
              />
            </div>
            <div className="modal-actions">
              <button type="button" className="btn btn-outline" onClick={() => setShowCreate(false)}>
                {t('cancel', lang)}
              </button>
              <button type="submit" className="btn">
                {t('createSubmit', lang)}
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}
