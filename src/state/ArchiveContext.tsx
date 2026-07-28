import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { archiveLists as initialLists } from '../data/archiveLists'
import type { PrivateList } from '../types'

function makeSlug(title: string): string {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9가-힣\s-]/g, '')
    .replace(/\s+/g, '-')
  const suffix = Math.random().toString(36).slice(2, 7)
  return `${base || 'list'}-${suffix}`
}

interface ArchiveContextValue {
  lists: PrivateList[]
  getList: (idOrSlug: string) => PrivateList | undefined
  createList: (title: string, description: string) => PrivateList
  deleteList: (id: string) => void
  addRestaurant: (listId: string, restaurantId: string) => void
  removeRestaurant: (listId: string, restaurantId: string) => void
}

const ArchiveContext = createContext<ArchiveContextValue | null>(null)

export function ArchiveProvider({ children }: { children: ReactNode }) {
  const [lists, setLists] = useState<PrivateList[]>(initialLists)

  const value = useMemo<ArchiveContextValue>(
    () => ({
      lists,
      getList: (idOrSlug) => lists.find((l) => l.id === idOrSlug || l.shareSlug === idOrSlug),
      createList: (title, description) => {
        const newList: PrivateList = {
          id: `al-${Date.now()}`,
          title,
          description,
          restaurantIds: [],
          shareSlug: makeSlug(title),
          createdAt: new Date().toISOString().slice(0, 10),
        }
        setLists((prev) => [newList, ...prev])
        return newList
      },
      deleteList: (id) => setLists((prev) => prev.filter((l) => l.id !== id)),
      addRestaurant: (listId, restaurantId) =>
        setLists((prev) =>
          prev.map((l) =>
            l.id === listId && !l.restaurantIds.includes(restaurantId)
              ? { ...l, restaurantIds: [...l.restaurantIds, restaurantId] }
              : l,
          ),
        ),
      removeRestaurant: (listId, restaurantId) =>
        setLists((prev) =>
          prev.map((l) =>
            l.id === listId ? { ...l, restaurantIds: l.restaurantIds.filter((id) => id !== restaurantId) } : l,
          ),
        ),
    }),
    [lists],
  )

  return <ArchiveContext.Provider value={value}>{children}</ArchiveContext.Provider>
}

export function useArchive(): ArchiveContextValue {
  const ctx = useContext(ArchiveContext)
  if (!ctx) throw new Error('useArchive must be used within ArchiveProvider')
  return ctx
}
