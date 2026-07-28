import type { Lang } from '../types'

export const uiText = {
  navHome: { ko: '홈', en: 'Home' },
  navExplore: { ko: '탐색', en: 'Explore' },
  navCommunity: { ko: '커뮤니티', en: 'Community' },
  navArchive: { ko: '아카이브', en: 'Archive' },
  navMe: { ko: '마이', en: 'Me' },
  searchAria: { ko: '검색으로 이동', en: 'Go to search' },
  langToggleAria: { ko: '언어를 영어로 전환', en: 'Switch language to Korean' },
  heroEyebrow: { ko: '지금 추천', en: 'Recommended now' },
  seeMore: { ko: '숙소 보기', en: 'See stays' },
  filterAll: { ko: '전체', en: 'All' },
  filterAria: { ko: '지역 필터', en: 'Region filter' },
  bookmarkAria: { ko: '아카이브에 저장', en: 'Save to archive' },
  badgeNew: { ko: 'NEW', en: 'NEW' },
  badgeHot: { ko: 'HOT', en: 'HOT' },
  searchPlaceholder: { ko: '숙소 이름, 유형, 태그로 검색', en: 'Search by name, type, or tag' },
  searchInputAria: { ko: '숙소 검색', en: 'Search stays' },
  categoryFilterAria: { ko: '카테고리 필터', en: 'Category filter' },
  sortAria: { ko: '정렬 기준', en: 'Sort by' },
  sortRecommended: { ko: '추천순', en: 'Recommended' },
  sortRating: { ko: '평점순', en: 'Top rated' },
  sortReviews: { ko: '리뷰 많은순', en: 'Most reviewed' },
  resultsCount: { ko: '개의 숙소', en: 'stays found' },
  emptyResultsTitle: { ko: '검색 결과가 없어요', en: 'No results found' },
  emptyResultsBody: {
    ko: '다른 키워드나 필터로 다시 시도해보세요.',
    en: 'Try a different keyword or filter.',
  },
  explorePageTitle: { ko: '탐색', en: 'Explore' },
  backAria: { ko: '뒤로 가기', en: 'Go back' },
  saveToArchive: { ko: '아카이브에 저장', en: 'Save to archive' },
  savedToArchive: { ko: '저장됨', en: 'Saved' },
  reviewsHeading: { ko: '리뷰', en: 'Reviews' },
  noReviewsTitle: { ko: '아직 공개 리뷰가 없어요', en: 'No public reviews yet' },
  noReviewsBody: {
    ko: '가장 먼저 이 숙소의 리뷰를 남겨보세요.',
    en: 'Be the first to review this stay.',
  },
  commentsCount: { ko: '개의 댓글', en: 'comments' },
  notFoundTitle: { ko: '숙소를 찾을 수 없어요', en: 'Stay not found' },
  notFoundBody: {
    ko: '삭제되었거나 잘못된 주소예요.',
    en: 'It may have been removed, or the link is incorrect.',
  },
  backToExplore: { ko: '탐색으로 돌아가기', en: 'Back to explore' },
  archivePageTitle: { ko: '아카이브', en: 'Archive' },
  archivePageSubtitle: {
    ko: '나만 아는 숙소 리스트를 만들고, 링크로 친구에게만 공유하세요.',
    en: 'Curate lists only you can see, and share the link with friends privately.',
  },
  createListBtn: { ko: '새 리스트 만들기', en: 'New list' },
  createListTitle: { ko: '리스트 만들기', en: 'Create list' },
  listTitleLabel: { ko: '리스트 이름', en: 'List name' },
  listTitlePlaceholder: { ko: '예: 나만 아는 오션뷰 스팟', en: 'e.g. My secret ocean view spots' },
  listDescLabel: { ko: '설명 (선택)', en: 'Description (optional)' },
  listDescPlaceholder: { ko: '이 리스트는 어떤 리스트인가요?', en: 'What is this list about?' },
  createSubmit: { ko: '만들기', en: 'Create' },
  cancel: { ko: '취소', en: 'Cancel' },
  emptyListsTitle: { ko: '아직 리스트가 없어요', en: 'No lists yet' },
  emptyListsBody: {
    ko: '새 리스트를 만들어 마음에 드는 숙소를 모아보세요.',
    en: 'Create a list to start collecting stays you love.',
  },
  restaurantCount: { ko: '개 숙소', en: 'stays' },
  shareLinkLabel: { ko: '비공개 공유 링크', en: 'Private share link' },
  copyLink: { ko: '링크 복사', en: 'Copy link' },
  linkCopied: { ko: '복사됨', en: 'Copied' },
  addRestaurantBtn: { ko: '숙소 추가', en: 'Add stays' },
  removeFromListAria: { ko: '리스트에서 제거', en: 'Remove from list' },
  deleteListBtn: { ko: '리스트 삭제', en: 'Delete list' },
  listEmptyTitle: { ko: '리스트가 비어있어요', en: 'This list is empty' },
  listEmptyBody: { ko: '숙소 추가 버튼으로 채워보세요.', en: 'Tap Add stays to start filling it in.' },
  listNotFoundTitle: { ko: '리스트를 찾을 수 없어요', en: 'List not found' },
  listNotFoundBody: {
    ko: '삭제되었거나 링크가 잘못됐어요.',
    en: 'It may have been deleted, or the link is incorrect.',
  },
  backToArchive: { ko: '아카이브로 돌아가기', en: 'Back to archive' },
  pickerDone: { ko: '완료', en: 'Done' },
  pickerAdded: { ko: '추가됨', en: 'Added' },
  communityPageTitle: { ko: '커뮤니티', en: 'Community' },
  communitySubtitle: {
    ko: '솔직한 리뷰를 공개로 남기고, 댓글로 소통해보세요.',
    en: 'Post honest reviews publicly and chat about them in the comments.',
  },
  writeReviewBtn: { ko: '리뷰 작성', en: 'Write a review' },
  chooseRestaurantLabel: { ko: '어떤 숙소인가요?', en: 'Which stay is this about?' },
  changeRestaurant: { ko: '다른 숙소 선택', en: 'Choose a different stay' },
  ratingLabel: { ko: '평점', en: 'Rating' },
  reviewTextLabel: { ko: '리뷰 내용', en: 'Review' },
  reviewTextPlaceholder: { ko: '어떤 점이 좋았나요?', en: 'What did you like about it?' },
  postBtn: { ko: '게시하기', en: 'Post' },
  noPublicReviewsTitle: { ko: '아직 공개된 리뷰가 없어요', en: 'No public reviews yet' },
  noPublicReviewsBody: {
    ko: '첫 리뷰를 남겨서 커뮤니티를 시작해보세요.',
    en: 'Be the first to post a review.',
  },
  commentPlaceholder: { ko: '댓글을 남겨보세요', en: 'Add a comment' },
  commentSubmit: { ko: '등록', en: 'Post' },
  viewCommentsToggle: { ko: '댓글 보기', en: 'View comments' },
  hideCommentsToggle: { ko: '댓글 숨기기', en: 'Hide comments' },
  myPageTitle: { ko: '마이페이지', en: 'My Page' },
  myDisplayName: { ko: '나', en: 'Me' },
  myHandle: { ko: '@staying_user', en: '@staying_user' },
  statReviews: { ko: '작성 리뷰', en: 'Reviews' },
  statLists: { ko: '아카이브 리스트', en: 'Lists' },
  statSaved: { ko: '저장한 숙소', en: 'Saved stays' },
  myReviewsHeading: { ko: '내가 쓴 리뷰', en: 'My reviews' },
  noMyReviewsTitle: { ko: '아직 작성한 리뷰가 없어요', en: "You haven't written a review yet" },
  noMyReviewsBody: {
    ko: '숙소 상세 페이지나 커뮤니티에서 리뷰를 남겨보세요.',
    en: 'Leave a review from a stay page or the community feed.',
  },
  visibilityPublic: { ko: '공개', en: 'Public' },
  visibilityPrivate: { ko: '비공개', en: 'Private' },
  myListsHeading: { ko: '내 아카이브 리스트', en: 'My archive lists' },
  viewAllInArchive: { ko: '아카이브에서 전체 보기', en: 'View all in Archive' },
  settingsHeading: { ko: '설정', en: 'Settings' },
  languageSettingLabel: { ko: '언어', en: 'Language' },
  settingsNote: {
    ko: '알림·계정 설정은 준비 중이에요.',
    en: 'Notification and account settings are coming soon.',
  },
  closeAria: { ko: '닫기', en: 'Close' },
  footerAbout: { ko: '소개', en: 'About' },
  footerPrivacy: { ko: '개인정보처리방침', en: 'Privacy Policy' },
  footerTerms: { ko: '이용약관', en: 'Terms of Service' },
  footerRights: { ko: 'All rights reserved.', en: 'All rights reserved.' },
} as const

export function starRatingAria(n: number, lang: Lang): string {
  return lang === 'ko' ? `${n}점` : `Rate ${n} star${n === 1 ? '' : 's'}`
}

export type UiTextKey = keyof typeof uiText

export function t(key: UiTextKey, lang: Lang): string {
  return uiText[key][lang]
}

const featuredCategoryMessages: Record<string, Record<Lang, string>> = {
  healing: {
    ko: '조용히 쉬고 싶은 날, 힐링 숙소 어때요?',
    en: 'Need a break? Try a peaceful healing stay',
  },
  activity: {
    ko: '액티비티 가득한 여행을 계획 중인가요?',
    en: 'Planning a trip full of activities?',
  },
  aesthetic: {
    ko: '인생샷 남기기 좋은 감성 숙소를 찾아보세요',
    en: 'Find a photogenic stay for your next getaway',
  },
  family: {
    ko: '아이와 함께라면 가족여행 숙소는 어떠세요?',
    en: 'Traveling with kids? Try a family-friendly stay',
  },
  pet: {
    ko: '반려동물과 함께 갈 수 있는 숙소를 찾아보세요',
    en: 'Find a stay you can bring your pet to',
  },
}

export function getFeaturedCategoryMessage(messageKey: keyof typeof featuredCategoryMessages, lang: Lang): string {
  return featuredCategoryMessages[messageKey][lang]
}

const seoContent = {
  home: {
    ko: { title: '홈', description: '힐링·액티비티·감성·가족여행·반려동반 숙소를 전국 여행지별로 추천합니다.' },
    en: { title: 'Home', description: 'Stay recommendations by purpose and destination across Korea, right now.' },
  },
  explore: {
    ko: { title: '탐색', description: '숙소명, 유형, 태그로 검색하고 지역·카테고리·정렬로 필터링해보세요.' },
    en: { title: 'Explore', description: 'Search stays by name, type, or tag, and filter by region and category.' },
  },
  community: {
    ko: { title: '커뮤니티', description: '솔직한 숙소 리뷰를 공개로 남기고 댓글로 다른 이용자와 소통해보세요.' },
    en: { title: 'Community', description: 'Read and post honest public stay reviews, and chat in the comments.' },
  },
  archive: {
    ko: { title: '아카이브', description: '나만 아는 숙소 리스트를 만들고 링크로 친구에게만 공유하세요.' },
    en: { title: 'Archive', description: 'Curate private stay lists and share them with friends via a link.' },
  },
  me: {
    ko: { title: '마이페이지', description: '내가 쓴 리뷰와 아카이브 리스트를 한눈에 확인하세요.' },
    en: { title: 'My Page', description: 'See your reviews and archive lists at a glance.' },
  },
  about: {
    ko: { title: '소개', description: 'Staying이 어떤 서비스인지 소개합니다.' },
    en: { title: 'About', description: 'Learn what Staying is about.' },
  },
  privacy: {
    ko: { title: '개인정보처리방침', description: 'Staying의 개인정보 수집 및 이용에 대한 안내입니다.' },
    en: { title: 'Privacy Policy', description: "How Staying collects and uses your information." },
  },
  terms: {
    ko: { title: '이용약관', description: 'Staying 서비스 이용에 관한 약관입니다.' },
    en: { title: 'Terms of Service', description: 'The terms governing your use of Staying.' },
  },
} as const

export function getSeo(pageKey: keyof typeof seoContent, lang: Lang): { title: string; description: string } {
  return seoContent[pageKey][lang]
}
