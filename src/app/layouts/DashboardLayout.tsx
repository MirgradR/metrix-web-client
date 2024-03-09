import { Outlet } from 'react-router-dom'
import '../styles/dashboardLayout.styles.css'
import Logo from '@/shared/ui/Logo/logo'
import Icon from '@/shared/ui/Icon/Icon'

const DashboardLayout = () => {
  return (
    <div className="layout">
      <aside className="side__menu">
        <Logo />
      </aside>
      <div className="wrapper">
        <header className="header">Dashboard</header>
        <div className="breadscrumbs">
          <Icon icon="home" size="16" color="#5570F1" />
        </div>
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
