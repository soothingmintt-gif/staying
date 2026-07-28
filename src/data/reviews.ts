import type { Review } from '../types'

export const reviews: Review[] = [
  {
    id: 'rv01',
    restaurantId: 'r05',
    author: '민지',
    rating: 5,
    text: '남자친구랑 기념일에 갔는데 수영장 너머 바다뷰가 진짜 인생샷이었어요. 노을 질 때가 최고.',
    visibility: 'public',
    createdAt: '2026-07-10',
    comments: [
      { id: 'c01', author: '준호', text: '저도 다음 달에 예약해봐야겠네요!', createdAt: '2026-07-11' },
      { id: 'c02', author: '수아', text: '가격대는 어느 정도였나요?', createdAt: '2026-07-12' },
    ],
  },
  {
    id: 'rv02',
    restaurantId: 'r17',
    author: '태윤',
    rating: 4,
    text: '한옥마을 안이라 짐 놓고 바로 걸어서 관광했어요. 온돌방이 여름에도 은근 시원해서 좋았습니다.',
    visibility: 'public',
    createdAt: '2026-07-15',
    comments: [{ id: 'c03', author: '민지', text: '저도 다음 주말에 가봐야겠어요 ㅎㅎ', createdAt: '2026-07-16' }],
  },
  {
    id: 'rv03',
    restaurantId: 'r03',
    author: '수아',
    rating: 4,
    text: '초보 서핑 강습 듣고 바로 숙소로 들어올 수 있어서 편했어요. 도미토리라 가성비도 좋아요.',
    visibility: 'public',
    createdAt: '2026-07-18',
    comments: [],
  },
  {
    id: 'rv04',
    restaurantId: 'r13',
    author: '지훈',
    rating: 5,
    text: '한옥 마당에 앉아 있으니 시간이 정말 천천히 가는 느낌. 조용하게 힐링하러 가기 딱 좋아요.',
    visibility: 'public',
    createdAt: '2026-07-20',
    comments: [
      { id: 'c04', author: '태윤', text: '주차는 편했나요?', createdAt: '2026-07-20' },
      { id: 'c05', author: '지훈', text: '숙소 바로 앞에 주차 가능했어요!', createdAt: '2026-07-20' },
    ],
  },
  {
    id: 'rv05',
    restaurantId: 'r01',
    author: '나',
    rating: 5,
    text: '창문 열자마자 바다라 아침에 눈뜨는 게 행복했던 나만의 오션뷰 스팟.',
    visibility: 'private',
    createdAt: '2026-07-05',
    comments: [],
  },
  {
    id: 'rv06',
    restaurantId: 'r19',
    author: '나',
    rating: 4,
    text: '작은 마당 있어서 강아지랑 눈치 안 보고 편하게 지냄. 다음엔 더 오래 머물기.',
    visibility: 'private',
    createdAt: '2026-07-08',
    comments: [],
  },
]

export function getReviewsByRestaurant(restaurantId: string): Review[] {
  return reviews.filter((r) => r.restaurantId === restaurantId)
}

export function getPublicReviews(): Review[] {
  return reviews.filter((r) => r.visibility === 'public')
}
