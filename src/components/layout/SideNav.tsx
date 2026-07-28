import { NavLink } from 'react-router-dom'
import { Icon } from '../common/Icon'
import { navItems } from './navItems'
import { useLanguage } from '../../i18n/LanguageContext'
import { t } from '../../i18n/translations'
import { LanguageToggle } from '../common/LanguageToggle'

export function SideNav() {
  const { lang } = useLanguage()

  return (
    <nav className="side-nav" aria-label="주요 메뉴">
      <div className="side-nav-top">
        <div className="side-nav-logo">Staying</div>
        <LanguageToggle className="lang-toggle lang-toggle-side" />
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `side-nav-item${isActive ? ' active' : ''}`}
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
