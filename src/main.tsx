import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './i18n/LanguageContext'
import { ArchiveProvider } from './state/ArchiveContext'
import { ReviewsProvider } from './state/ReviewsContext'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <ReviewsProvider>
          <ArchiveProvider>
            <App />
          </ArchiveProvider>
        </ReviewsProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>,
)
