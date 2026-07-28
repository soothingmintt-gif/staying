import type { Category } from '../types'

export const categories: Category[] = [
  {
    id: 'healing',
    label: '힐링/휴양',
    labelEn: 'Healing & Rest',
    emoji: '🌿',
    description: '조용히 쉬고 힐링하기 좋은 숙소',
    descriptionEn: 'Peaceful stays perfect for rest and healing',
  },
  {
    id: 'activity',
    label: '액티비티/체험',
    labelEn: 'Activity',
    emoji: '🏄',
    description: '주변에서 다양한 액티비티를 즐길 수 있는 숙소',
    descriptionEn: 'Stays near great outdoor activities and experiences',
  },
  {
    id: 'aesthetic',
    label: '감성/인생샷',
    labelEn: 'Aesthetic',
    emoji: '📸',
    description: '분위기 있고 사진 찍기 좋은 감성 숙소',
    descriptionEn: 'Photogenic stays with beautiful interiors and views',
  },
  {
    id: 'family',
    label: '가족여행',
    labelEn: 'Family Trip',
    emoji: '👨‍👩‍👧‍👦',
    description: '아이와 함께 가기 좋은 가족 친화적 숙소',
    descriptionEn: 'Family-friendly stays great for traveling with kids',
  },
  {
    id: 'pet',
    label: '반려동반',
    labelEn: 'Pet Friendly',
    emoji: '🐾',
    description: '반려동물과 함께 묵을 수 있는 숙소',
    descriptionEn: 'Stays you can bring your pet to',
  },
]

export function getCategory(id: string): Category | undefined {
  return categories.find((c) => c.id === id)
}
