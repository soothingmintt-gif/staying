import type { PrivateList } from '../types'

export const archiveLists: PrivateList[] = [
  {
    id: 'al01',
    title: '나만 아는 오션뷰 스팟',
    description: '바다 보이는 숙소들만 모음',
    restaurantIds: ['r01', 'r05', 'r21'],
    shareSlug: 'ocean-view-secret',
    createdAt: '2026-06-20',
  },
  {
    id: 'al02',
    title: '강아지랑 떠나는 여행',
    description: '반려동반 가능한 숙소 모음',
    restaurantIds: ['r04', 'r08', 'r19'],
    shareSlug: 'pet-trip-2026',
    createdAt: '2026-07-02',
  },
]
