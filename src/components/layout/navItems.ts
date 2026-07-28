import type { IconName } from '../common/Icon'
import type { UiTextKey } from '../../i18n/translations'

export interface NavItem {
  to: string
  labelKey: UiTextKey
  icon: IconName
}

export const navItems: NavItem[] = [
  { to: '/', labelKey: 'navHome', icon: 'home' },
  { to: '/explore', labelKey: 'navExplore', icon: 'search' },
  { to: '/community', labelKey: 'navCommunity', icon: 'users' },
  { to: '/archive', labelKey: 'navArchive', icon: 'bookmark' },
  { to: '/me', labelKey: 'navMe', icon: 'user' },
]
