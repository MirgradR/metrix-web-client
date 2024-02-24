import { Outlet } from 'react-router-dom'

function BaseLayout() {
  return (
    <>
      <header>HEADER</header>
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default BaseLayout
