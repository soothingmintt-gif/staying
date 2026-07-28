import { Icon } from './Icon'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'

interface Props {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: Props) {
  const { lang } = useLanguage()

  return (
    <div className="search-bar">
      <Icon name="search" className="icon search-bar-icon" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('searchPlaceholder', lang)}
        aria-label={t('searchInputAria', lang)}
      />
    </div>
  )
}
