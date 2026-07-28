export type CategoryId = 'healing' | 'activity' | 'aesthetic' | 'family' | 'pet'
export type Lang = 'ko' | 'en'

export interface Category {
  id: CategoryId
  label: string
  labelEn: string
  emoji: string
  description: string
  descriptionEn: string
}

export interface District {
  id: string
  name: string
  nameEn: string
}

export interface Restaurant {
  id: string
  name: string
  nameEn: string
  districtId: string
  categories: CategoryId[]
  foodType: string
  foodTypeEn: string
  priceRange: '₩' | '₩₩' | '₩₩₩'
  rating: number
  reviewCount: number
  tags: string[]
  tagsEn: string[]
  address: string
  imageUrl: string
  description: string
  descriptionEn: string
  openedAt: string
  weeklyReservations: number
}

export type ReviewVisibility = 'private' | 'public'

export interface Comment {
  id: string
  author: string
  text: string
  createdAt: string
}

export interface Review {
  id: string
  restaurantId: string
  author: string
  rating: number
  text: string
  visibility: ReviewVisibility
  createdAt: string
  comments: Comment[]
}

export interface PrivateList {
  id: string
  title: string
  description: string
  restaurantIds: string[]
  shareSlug: string
  createdAt: string
}
