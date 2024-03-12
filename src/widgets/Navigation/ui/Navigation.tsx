import Logo from '@/shared/ui/Logo/Logo'

import NavMainList from './NavMainList/NavMainList'
import NavBottomBlock from './NavBottomBlock/NavBottomBlock'

import styles from './styles.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav + ' nav'}>
      <Logo withText size="36" />

      <NavMainList />

      <NavBottomBlock />
    </nav>
  )
}

export default Navigation
