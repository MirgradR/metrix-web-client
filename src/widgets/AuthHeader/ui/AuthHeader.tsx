import Logo from '@/shared/ui/Logo/logo'

import styles from './styles.module.css'

const AuthHeader = () => {
  return (
    <header className={styles.header}>
      <Logo icon="logo" size="36" withText={false} />
    </header>
  )
}

export default AuthHeader
