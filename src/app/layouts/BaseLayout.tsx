import { Outlet } from 'react-router-dom'

import { Navigation } from '@/widgets/Navigation'

function BaseLayout() {
  return (
    <>
      <div className="container">
        <Navigation />
        <div className="main-wrapper">
          <header>HEADER</header>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default BaseLayout
