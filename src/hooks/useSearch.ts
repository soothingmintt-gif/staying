import { useMemo } from 'react'
import type { Restaurant } from '../types'

export function useSearch(items: Restaurant[], query: string): Restaurant[] {
  const k = query.trim().toLowerCase()
  return useMemo(() => {
    if (!k) return items
    return items.filter(
      (it) =>
        it.name.toLowerCase().includes(k) ||
        it.nameEn.toLowerCase().includes(k) ||
        it.foodType.toLowerCase().includes(k) ||
        it.foodTypeEn.toLowerCase().includes(k) ||
        it.tags.some((tag) => tag.toLowerCase().includes(k)) ||
        it.tagsEn.some((tag) => tag.toLowerCase().includes(k)),
    )
  }, [items, k])
}
