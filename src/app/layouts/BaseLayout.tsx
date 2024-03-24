import { Outlet } from 'react-router-dom'

import { Navigation } from '@/widgets/Navigation'
import { Header } from '@/widgets/Header'

function BaseLayout() {
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="main-wrapper">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default BaseLayout
