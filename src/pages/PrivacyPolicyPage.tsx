import { useLanguage } from '../i18n/LanguageContext'
import { getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

const lastUpdated = '2026-07-23'

export function PrivacyPolicyPage() {
  const { lang } = useLanguage()
  useSeo(getSeo('privacy', lang))

  if (lang === 'en') {
    return (
      <div className="app-container legal-page">
        <h1 className="explore-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: {lastUpdated}</p>

        <p className="legal-paragraph">
          Staying ("we", "us") respects your privacy. This policy explains what information we collect, how we use
          it, and the choices you have.
        </p>

        <h2 className="legal-heading">Operator</h2>
        <p className="legal-paragraph">Staying (individually operated) — contact: soothingmintt@gmail.com</p>

        <h2 className="legal-heading">Information we collect</h2>
        <ul className="legal-list">
          <li>Language preference, stored in your browser's local storage — not sent to a server.</li>
          <li>
            Standard web server logs (IP address, browser type, pages visited) if and when this site is deployed
            behind a hosting provider.
          </li>
          <li>Any content you voluntarily submit, such as reviews, comments, or list names.</li>
        </ul>
        <p className="legal-paragraph">
          At this stage, Staying does not have user accounts or a backend database — all reviews and lists you create
          live only in your browser session and are not stored on our servers.
        </p>

        <h2 className="legal-heading">Cookies and advertising</h2>
        <p className="legal-paragraph">
          If this site displays advertising through Google AdSense, Google and its partners may use cookies to serve
          ads based on your prior visits to this or other websites. You can opt out of personalized advertising by
          visiting{' '}
          <a href="https://adssettings.google.com" target="_blank" rel="noreferrer">
            Google Ads Settings
          </a>
          .
        </p>

        <h2 className="legal-heading">Third-party services</h2>
        <p className="legal-paragraph">
          We may use Google Analytics or similar services to understand how visitors use this site, and Google
          AdSense to display ads. These services may collect data under their own privacy policies.
        </p>

        <h2 className="legal-heading">Your rights</h2>
        <p className="legal-paragraph">
          You may contact us at soothingmintt@gmail.com to ask what data we hold about you, request corrections, or
          request deletion.
        </p>

        <h2 className="legal-heading">Changes to this policy</h2>
        <p className="legal-paragraph">
          We may update this policy from time to time. Changes will be posted on this page with an updated date.
        </p>
      </div>
    )
  }

  return (
    <div className="app-container legal-page">
      <h1 className="explore-title">개인정보처리방침</h1>
      <p className="legal-updated">최종 수정일: {lastUpdated}</p>

      <p className="legal-paragraph">
        Staying(이하 "본 사이트")은 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수합니다.
      </p>

      <h2 className="legal-heading">운영자 정보</h2>
      <p className="legal-paragraph">Staying (개인 운영) — 문의: soothingmintt@gmail.com</p>

      <h2 className="legal-heading">수집하는 개인정보 항목</h2>
      <ul className="legal-list">
        <li>언어 설정 — 브라우저 로컬 저장소에만 저장되며 서버로 전송되지 않습니다.</li>
        <li>서비스가 실제 호스팅 서버에 배포될 경우 발생하는 접속 로그(IP, 브라우저 정보, 방문 페이지 등).</li>
        <li>이용자가 자발적으로 작성한 리뷰, 댓글, 리스트 이름 등의 콘텐츠.</li>
      </ul>
      <p className="legal-paragraph">
        현재 Staying은 회원가입·로그인 기능과 서버 데이터베이스가 없는 프론트엔드 데모 단계입니다. 작성하신 리뷰와
        리스트는 브라우저 세션에만 존재하며 서버에 저장되지 않습니다.
      </p>

      <h2 className="legal-heading">쿠키 및 광고</h2>
      <p className="legal-paragraph">
        본 사이트에 Google 애드센스 광고가 게재되는 경우, Google 및 광고 파트너는 쿠키를 사용하여 이용자의 이전
        방문 기록을 기반으로 맞춤 광고를 제공할 수 있습니다.{' '}
        <a href="https://adssettings.google.com" target="_blank" rel="noreferrer">
          Google 광고 설정
        </a>
        에서 맞춤 광고를 거부할 수 있습니다.
      </p>

      <h2 className="legal-heading">제3자 서비스</h2>
      <p className="legal-paragraph">
        방문자 분석을 위해 Google Analytics 등의 서비스를, 광고 게재를 위해 Google 애드센스를 사용할 수 있으며, 이
        서비스들은 자체 개인정보처리방침에 따라 데이터를 수집할 수 있습니다.
      </p>

      <h2 className="legal-heading">이용자의 권리</h2>
      <p className="legal-paragraph">
        soothingmintt@gmail.com로 문의하시면 보유 중인 개인정보 열람, 정정, 삭제를 요청하실 수 있습니다.
      </p>

      <h2 className="legal-heading">방침의 변경</h2>
      <p className="legal-paragraph">
        본 방침은 필요에 따라 개정될 수 있으며, 변경 시 이 페이지를 통해 개정일과 함께 공지합니다.
      </p>
    </div>
  )
}
