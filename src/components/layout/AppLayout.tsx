import { Outlet } from 'react-router-dom'
import { TopHeader } from './TopHeader'
import { BottomTabBar } from './BottomTabBar'
import { SideNav } from './SideNav'
import { Footer } from './Footer'

export function AppLayout() {
  return (
    <div className="app-shell">
      <SideNav />
      <div className="app-main-col">
        <TopHeader />
        <main className="app-content">
          <Outlet />
          <Footer />
        </main>
      </div>
      <BottomTabBar />
    </div>
  )
}
