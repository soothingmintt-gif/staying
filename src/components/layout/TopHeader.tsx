import { Link } from 'react-router-dom'
import { Icon } from '../common/Icon'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'
import { LanguageToggle } from '../common/LanguageToggle'

export function TopHeader() {
  const { lang } = useLanguage()

  return (
    <header className="top-header">
      <span className="top-header-logo">Staying</span>
      <div className="top-header-actions">
        <LanguageToggle />
        <Link to="/explore" className="top-header-search" aria-label={t('searchAria', lang)}>
          <Icon name="search" />
        </Link>
      </div>
    </header>
  )
}
