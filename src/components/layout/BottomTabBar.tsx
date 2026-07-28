import { NavLink } from 'react-router-dom'
import { Icon } from '../common/Icon'
import { navItems } from './navItems'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'

export function BottomTabBar() {
  const { lang } = useLanguage()

  return (
    <nav className="bottom-tab-bar" aria-label="주요 메뉴">
      <ul>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `bottom-tab-item${isActive ? ' active' : ''}`}
              aria-label={t(item.labelKey, lang)}
            >
              <Icon name={item.icon} />
              <span>{t(item.labelKey, lang)}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
