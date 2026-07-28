import type { ReactNode } from 'react'

export type IconName =
  | 'home'
  | 'search'
  | 'users'
  | 'bookmark'
  | 'user'
  | 'heart'
  | 'mapPin'
  | 'star'
  | 'plus'
  | 'link'
  | 'lock'
  | 'globe'
  | 'message'
  | 'chevronLeft'
  | 'filter'

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9a1 1 0 0 0 1 1h4v-6h2v6h4a1 1 0 0 0 1-1v-9" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 6.7" />
      <path d="M18.5 14.3a6.4 6.4 0 0 1 3 5.7" />
    </>
  ),
  bookmark: <path d="M6 3.5h12a.5.5 0 0 1 .5.5v16.5l-6.5-4-6.5 4V4a.5.5 0 0 1 .5-.5Z" />,
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20a8 8 0 0 1 16 0" />
    </>
  ),
  heart: <path d="M12 20.5s-7.5-4.6-9.8-9.3C.6 7.6 2.4 4 6 4c2 0 3.6 1 6 3.4C14.4 5 16 4 18 4c3.6 0 5.4 3.6 3.8 7.2C19.5 15.9 12 20.5 12 20.5Z" />,
  mapPin: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  star: <path d="m12 3 2.6 5.8 6.4.6-4.8 4.3 1.4 6.3L12 16.9 6.4 20l1.4-6.3-4.8-4.3 6.4-.6L12 3Z" />,
  plus: (
    <>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </>
  ),
  link: (
    <>
      <path d="M9.5 14.5 14.5 9.5" />
      <path d="M11 6.5 13 4.6a3.6 3.6 0 0 1 5.1 5.1L16 11.7" />
      <path d="M13 17.5 11 19.4a3.6 3.6 0 0 1-5.1-5.1L8 12.3" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10.5" width="14" height="9.5" rx="2" />
      <path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.5 2.4 2.5 15.6 0 17-2.5-1.4-2.5-14.6 0-17Z" />
    </>
  ),
  message: <path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5 4v-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />,
  chevronLeft: <path d="M15 5 8 12l7 7" />,
  filter: (
    <>
      <path d="M4 6h16" />
      <path d="M7 12h10" />
      <path d="M10 18h4" />
    </>
  ),
}

export function Icon({ name, className = 'icon' }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
