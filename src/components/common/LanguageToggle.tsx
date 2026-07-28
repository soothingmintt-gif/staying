import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'

export function LanguageToggle({ className = 'lang-toggle' }: { className?: string }) {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      className={className}
      onClick={toggleLang}
      aria-label={t('langToggleAria', lang)}
    >
      {lang === 'ko' ? 'KOR' : 'ENG'}
    </button>
  )
}
