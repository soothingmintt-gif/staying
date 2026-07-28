import { useEffect } from 'react'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function useSeo({
  title,
  description,
  noindex = false,
}: {
  title: string
  description: string
  noindex?: boolean
}) {
  useEffect(() => {
    const fullTitle = `${title} | Staying`
    document.title = fullTitle
    upsertMeta('name', 'description', description)
    upsertMeta('property', 'og:title', fullTitle)
    upsertMeta('property', 'og:description', description)
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    return () => {
      // 페이지를 벗어나면 전역 기본값(index, follow)으로 되돌린다
      upsertMeta('name', 'robots', 'index, follow')
    }
  }, [title, description, noindex])
}
