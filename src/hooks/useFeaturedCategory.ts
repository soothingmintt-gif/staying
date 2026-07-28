import { useMemo } from 'react'
import type { CategoryId } from '../types'

export type FeaturedMessageKey = CategoryId

export interface FeaturedCategoryInfo {
  primary: CategoryId
  messageKey: FeaturedMessageKey
}

const rotationOrder: CategoryId[] = ['healing', 'activity', 'aesthetic', 'family', 'pet']

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0)
  const diff = date.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

function computeFeaturedCategory(date: Date): FeaturedCategoryInfo {
  const index = dayOfYear(date) % rotationOrder.length
  const primary = rotationOrder[index]
  return { primary, messageKey: primary }
}

export function useFeaturedCategory(): FeaturedCategoryInfo {
  return useMemo(() => computeFeaturedCategory(new Date()), [])
}
