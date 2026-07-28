import { useLanguage } from '../i18n/LanguageContext'
import { getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

const content = {
  ko: {
    title: 'Staying 소개',
    body: [
      'Staying은 목적에 딱 맞는 숙소를 찾아주는 추천 서비스입니다. 조용히 쉬기 좋은 힐링 숙소, 다양한 액티비티를 즐길 수 있는 숙소, 인생샷 남기기 좋은 감성 숙소, 아이와 함께 가기 좋은 가족여행 숙소, 반려동물과 함께 묵을 수 있는 숙소까지 — 지금 원하는 목적에 맞는 숙소를 전국 여행지별로 추천합니다.',
      '단순 추천에 그치지 않고, 내가 직접 가본 곳을 기록해두는 개인 아카이브(비공개 리스트) 기능을 제공합니다. 플레이리스트를 공유하듯, 나만의 숙소 리스트를 링크 하나로 친구에게만 살짝 공유할 수 있어요.',
      '반대로 누구에게나 솔직한 후기를 남기고 싶다면 커뮤니티에 공개 리뷰를 올리고 댓글로 다른 이용자와 소통할 수 있습니다.',
      '이 사이트는 현재 개발 중이며, 실제 서비스 데이터가 아닌 예시 데이터로 구성되어 있습니다.',
    ],
  },
  en: {
    title: 'About Staying',
    body: [
      'Staying helps you find the right stay for the moment. From peaceful healing stays and activity-packed getaways, to photogenic aesthetic stays, family-friendly trips, and pet-friendly stays — we recommend the right stay for your purpose, organized by destination across Korea.',
      'Beyond recommendations, Staying lets you keep a private archive of places you have actually visited. Like sharing a playlist, you can share a curated list of your favorite stays with friends through a single private link.',
      'If you would rather share your honest opinion with everyone, you can post a public review in the Community feed and chat about it in the comments.',
      'This site is under active development and currently uses example data rather than real listings.',
    ],
  },
}

export function AboutPage() {
  const { lang } = useLanguage()
  useSeo(getSeo('about', lang))
  const c = content[lang]

  return (
    <div className="app-container legal-page">
      <h1 className="explore-title">{c.title}</h1>
      {c.body.map((p, i) => (
        <p key={i} className="legal-paragraph">
          {p}
        </p>
      ))}
    </div>
  )
}
