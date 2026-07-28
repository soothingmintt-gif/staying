import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'

export function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="app-footer">
      <div className="app-footer-links">
        <Link to="/about">{t('footerAbout', lang)}</Link>
        <Link to="/privacy">{t('footerPrivacy', lang)}</Link>
        <Link to="/terms">{t('footerTerms', lang)}</Link>
      </div>
      <p className="app-footer-copy">© {new Date().getFullYear()} Staying. {t('footerRights', lang)}</p>
    </footer>
  )
}
