import { Icon } from './Icon'
import type { IconName } from './Icon'

interface Props {
  icon?: IconName
  title: string
  body: string
}

export function EmptyState({ icon = 'search', title, body }: Props) {
  return (
    <div className="empty-state">
      <Icon name={icon} className="icon empty-state-icon" />
      <p className="empty-state-title">{title}</p>
      <p className="empty-state-body">{body}</p>
    </div>
  )
}
