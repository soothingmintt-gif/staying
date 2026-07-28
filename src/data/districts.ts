import type { District } from '../types'

export const districts: District[] = [
  { id: 'gangwon', name: '강원', nameEn: 'Gangwon' },
  { id: 'jeju', name: '제주', nameEn: 'Jeju' },
  { id: 'busan', name: '부산', nameEn: 'Busan' },
  { id: 'gyeongju', name: '경주', nameEn: 'Gyeongju' },
  { id: 'jeonju', name: '전주', nameEn: 'Jeonju' },
  { id: 'yeosu', name: '여수', nameEn: 'Yeosu' },
]

export function getDistrict(id: string): District | undefined {
  return districts.find((d) => d.id === id)
}
