import { districts } from '../../data/districts'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'

interface Props {
  value: string
  onChange: (districtId: string) => void
}

export function DistrictFilter({ value, onChange }: Props) {
  const { lang } = useLanguage()

  return (
    <div className="district-filter" role="group" aria-label={t('filterAria', lang)}>
      <button
        type="button"
        className={`chip${value === 'all' ? ' active' : ''}`}
        aria-pressed={value === 'all'}
        onClick={() => onChange('all')}
      >
        {t('filterAll', lang)}
      </button>
      {districts.map((d) => (
        <button
          key={d.id}
          type="button"
          className={`chip${value === d.id ? ' active' : ''}`}
          aria-pressed={value === d.id}
          onClick={() => onChange(d.id)}
        >
          {lang === 'en' ? d.nameEn : d.name}
        </button>
      ))}
    </div>
  )
}
