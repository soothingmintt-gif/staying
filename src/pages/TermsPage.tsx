import { useLanguage } from '../i18n/LanguageContext'
import { getSeo } from '../i18n/translations'
import { useSeo } from '../hooks/useSeo'

const lastUpdated = '2026-07-23'

export function TermsPage() {
  const { lang } = useLanguage()
  useSeo(getSeo('terms', lang))

  if (lang === 'en') {
    return (
      <div className="app-container legal-page">
        <h1 className="explore-title">Terms of Service</h1>
        <p className="legal-updated">Last updated: {lastUpdated}</p>

        <p className="legal-paragraph">
          These Terms govern your use of Staying (the "Service"), individually operated. By using the Service, you
          agree to these Terms.
        </p>

        <h2 className="legal-heading">1. The Service</h2>
        <p className="legal-paragraph">
          Staying recommends stays by purpose and destination, and lets you keep private lists and post
          public reviews. Stay information shown is for reference only and may not reflect a stay's
          current hours, menu, or availability — always confirm with the stay directly.
        </p>

        <h2 className="legal-heading">2. User content</h2>
        <p className="legal-paragraph">
          You are responsible for anything you post (reviews, comments, list titles). Do not post content that is
          false, defamatory, infringes on others' rights, or violates applicable law. We may remove content that
          violates these Terms.
        </p>

        <h2 className="legal-heading">3. No warranty</h2>
        <p className="legal-paragraph">
          The Service is provided "as is" without warranties of any kind. We do not guarantee the accuracy of
          stay listings, ratings, or user-submitted reviews.
        </p>

        <h2 className="legal-heading">4. Limitation of liability</h2>
        <p className="legal-paragraph">
          To the extent permitted by law, Staying's operator is not liable for any indirect, incidental, or
          consequential damages arising from your use of the Service, including decisions made based on stay
          recommendations or reviews.
        </p>

        <h2 className="legal-heading">5. Advertising</h2>
        <p className="legal-paragraph">
          The Service may display third-party advertising, including through Google AdSense. We are not responsible
          for the content of third-party ads.
        </p>

        <h2 className="legal-heading">6. Changes</h2>
        <p className="legal-paragraph">
          We may update these Terms from time to time. Continued use of the Service after changes take effect
          constitutes acceptance of the revised Terms.
        </p>

        <h2 className="legal-heading">7. Contact</h2>
        <p className="legal-paragraph">Questions about these Terms can be sent to soothingmintt@gmail.com.</p>
      </div>
    )
  }

  return (
    <div className="app-container legal-page">
      <h1 className="explore-title">이용약관</h1>
      <p className="legal-updated">최종 수정일: {lastUpdated}</p>

      <p className="legal-paragraph">
        본 약관은 개인이 운영하는 Staying(이하 "서비스")의 이용과 관련하여 필요한 사항을 정합니다. 서비스를
        이용함으로써 본 약관에 동의하는 것으로 간주됩니다.
      </p>

      <h2 className="legal-heading">1. 서비스 내용</h2>
      <p className="legal-paragraph">
        Staying은 목적·지역별 숙소 추천, 비공개 리스트 관리, 공개 리뷰 작성 기능을 제공합니다. 사이트에 표시되는
        숙소 정보는 참고용이며 실제 영업시간, 메뉴, 예약 가능 여부와 다를 수 있으므로 방문 전 반드시 해당 숙소에
        직접 확인하시기 바랍니다.
      </p>

      <h2 className="legal-heading">2. 이용자 콘텐츠</h2>
      <p className="legal-paragraph">
        이용자가 작성한 리뷰, 댓글, 리스트 제목 등에 대한 책임은 작성자 본인에게 있습니다. 허위 사실, 명예훼손,
        타인의 권리 침해, 관계 법령 위반 소지가 있는 콘텐츠는 작성할 수 없으며, 본 약관을 위반한 콘텐츠는 사전
        통지 없이 삭제될 수 있습니다.
      </p>

      <h2 className="legal-heading">3. 보증의 부인</h2>
      <p className="legal-paragraph">
        서비스는 "있는 그대로" 제공되며, 숙소 정보·평점·이용자 리뷰의 정확성을 보증하지 않습니다.
      </p>

      <h2 className="legal-heading">4. 책임의 제한</h2>
      <p className="legal-paragraph">
        관계 법령이 허용하는 범위 내에서, Staying 운영자는 서비스 이용(추천 정보나 리뷰에 근거한 의사결정 포함)으로
        발생한 간접적·부수적 손해에 대해 책임을 지지 않습니다.
      </p>

      <h2 className="legal-heading">5. 광고</h2>
      <p className="legal-paragraph">
        서비스는 Google 애드센스 등을 통한 제3자 광고를 게재할 수 있으며, 광고 내용에 대한 책임은 광고주에게
        있습니다.
      </p>

      <h2 className="legal-heading">6. 약관의 변경</h2>
      <p className="legal-paragraph">
        본 약관은 필요에 따라 변경될 수 있으며, 변경된 약관은 이 페이지에 게시함으로써 효력이 발생합니다.
      </p>

      <h2 className="legal-heading">7. 문의</h2>
      <p className="legal-paragraph">본 약관에 대한 문의는 soothingmintt@gmail.com로 보내주시기 바랍니다.</p>
    </div>
  )
}
