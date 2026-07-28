import { Routes, Route } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { HomePage } from './pages/HomePage'
import { ExplorePage } from './pages/ExplorePage'
import { CommunityPage } from './pages/CommunityPage'
import { ArchivePage } from './pages/ArchivePage'
import { ArchiveListDetailPage } from './pages/ArchiveListDetailPage'
import { MyPage } from './pages/MyPage'
import { RestaurantDetailPage } from './pages/RestaurantDetailPage'
import { AboutPage } from './pages/AboutPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsPage } from './pages/TermsPage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/archive/:id" element={<ArchiveListDetailPage />} />
        <Route path="/me" element={<MyPage />} />
        <Route path="/restaurant/:id" element={<RestaurantDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
    </Routes>
  )
}

export default App
